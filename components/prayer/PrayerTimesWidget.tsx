'use client';

import { useEffect, useMemo, useState, useSyncExternalStore } from 'react';
import { Coordinates, PrayerTimes, Madhab, SunnahTimes } from 'adhan';
import { MapPin } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/context';
import { PRAYER_CITIES, getCityById, getCalculationParams, type CalcMethodKey } from '@/lib/data/prayer-cities';
import { PRAYER_WIDGET_CONTENT, type PrayerWidgetKey } from '@/lib/i18n/content/prayer-widget-content';

const STORAGE_KEY = 'al-hikmah-prayer-prefs';

interface Prefs {
  cityId: string;          // 'custom' if using geolocation
  method: CalcMethodKey;
  asrHanafi: boolean;
  customLat?: number;
  customLng?: number;
}

const DEFAULT_PREFS: Prefs = {
  cityId: 'makkah',
  method: 'UmmAlQura',
  asrHanafi: false,
};

const METHOD_KEYS: { value: CalcMethodKey; labelKey: PrayerWidgetKey }[] = [
  { value: 'MuslimWorldLeague',     labelKey: 'method_mwl' },
  { value: 'Egyptian',              labelKey: 'method_egyptian' },
  { value: 'Karachi',               labelKey: 'method_karachi' },
  { value: 'UmmAlQura',             labelKey: 'method_uma' },
  { value: 'Dubai',                 labelKey: 'method_dubai' },
  { value: 'MoonsightingCommittee', labelKey: 'method_moonsighting' },
  { value: 'NorthAmerica',          labelKey: 'method_na' },
  { value: 'Kuwait',                labelKey: 'method_kuwait' },
  { value: 'Qatar',                 labelKey: 'method_qatar' },
  { value: 'Singapore',             labelKey: 'method_singapore' },
  { value: 'Tehran',                labelKey: 'method_tehran' },
  { value: 'Turkey',                labelKey: 'method_turkey' },
];

function loadPrefs(): Prefs {
  if (typeof window === 'undefined') return DEFAULT_PREFS;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_PREFS;
    return { ...DEFAULT_PREFS, ...JSON.parse(raw) };
  } catch {
    return DEFAULT_PREFS;
  }
}

function savePrefs(prefs: Prefs) {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
  } catch {
    /* quota / private mode  –  ignore */
  }
}

function formatTime(date: Date, locale: string): string {
  return date.toLocaleTimeString(locale, { hour: '2-digit', minute: '2-digit', hour12: false });
}

function localeForLang(lang: string): string {
  const map: Record<string, string> = {
    en: 'en-GB', ms: 'ms-MY', tur: 'tr-TR', urd: 'ur-PK', ben: 'bn-BD',
    fas: 'fa-IR', zh: 'zh-CN', yue: 'zh-HK', ja: 'ja-JP', ru: 'ru-RU',
    es: 'es-ES', ko: 'ko-KR', ta: 'ta-IN', si: 'si-LK',
  };
  return map[lang] ?? 'en-GB';
}

export function PrayerTimesWidget() {
  const { lang } = useLanguage();
  const tc = (k: PrayerWidgetKey) => PRAYER_WIDGET_CONTENT[k][lang as keyof typeof PRAYER_WIDGET_CONTENT[typeof k]] ?? PRAYER_WIDGET_CONTENT[k].en;

  // Seed prefs from localStorage via a lazy initialiser (SSR-safe: loadPrefs returns
  // defaults when there is no window). The render below is gated on `mounted`, so the
  // server and first client render match regardless of the stored value.
  const [prefs, setPrefs] = useState<Prefs>(loadPrefs);
  const [now, setNow] = useState<Date>(new Date());
  // Client-only flag without setState-in-effect: false on the server (and during
  // hydration), true afterwards. Gates the time-dependent render below.
  const mounted = useSyncExternalStore(() => () => {}, () => true, () => false);

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 60_000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    if (mounted) savePrefs(prefs);
  }, [prefs, mounted]);

  const coords = useMemo<Coordinates | null>(() => {
    if (prefs.cityId === 'custom' && prefs.customLat != null && prefs.customLng != null) {
      return new Coordinates(prefs.customLat, prefs.customLng);
    }
    const city = getCityById(prefs.cityId);
    if (!city) return null;
    return new Coordinates(city.lat, city.lng);
  }, [prefs.cityId, prefs.customLat, prefs.customLng]);

  const times = useMemo<PrayerTimes | null>(() => {
    if (!coords) return null;
    const params = getCalculationParams(prefs.method);
    params.madhab = prefs.asrHanafi ? Madhab.Hanafi : Madhab.Shafi;
    return new PrayerTimes(coords, now, params);
  }, [coords, prefs.method, prefs.asrHanafi, now]);

  const sunnahTimes = useMemo<SunnahTimes | null>(() => (times ? new SunnahTimes(times) : null), [times]);

  const nextPrayer = useMemo(() => {
    if (!times) return null;
    const order: { name: PrayerWidgetKey; t: Date }[] = [
      { name: 'prayer_fajr',    t: times.fajr },
      { name: 'prayer_sunrise', t: times.sunrise },
      { name: 'prayer_dhuhr',   t: times.dhuhr },
      { name: 'prayer_asr',     t: times.asr },
      { name: 'prayer_maghrib', t: times.maghrib },
      { name: 'prayer_isha',    t: times.isha },
    ];
    for (const p of order) if (p.t > now) return p;
    return null;
  }, [times, now]);

  const handleGeolocate = () => {
    if (typeof navigator === 'undefined' || !navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition(
      pos => setPrefs(p => ({ ...p, cityId: 'custom', customLat: pos.coords.latitude, customLng: pos.coords.longitude })),
      () => { /* permission denied  –  silent */ },
      { timeout: 10000 },
    );
  };

  // SSR / pre-mount: render a minimal placeholder to avoid hydration mismatch
  if (!mounted || !times || !sunnahTimes) {
    return (
      <section className="card-islamic">
        <h2 className="font-garamond text-xl font-semibold text-forest mb-2">{tc('widget_h')}</h2>
        <p className="text-forest/50 text-sm">…</p>
      </section>
    );
  }

  const locale = localeForLang(lang);
  const usingCustom = prefs.cityId === 'custom';
  const currentCity = !usingCustom ? getCityById(prefs.cityId) : null;
  const rows: { key: PrayerWidgetKey; t: Date }[] = [
    { key: 'prayer_fajr',    t: times.fajr },
    { key: 'prayer_sunrise', t: times.sunrise },
    { key: 'prayer_dhuhr',   t: times.dhuhr },
    { key: 'prayer_asr',     t: times.asr },
    { key: 'prayer_maghrib', t: times.maghrib },
    { key: 'prayer_isha',    t: times.isha },
  ];

  return (
    <section className="card-islamic">
      <h2 className="font-garamond text-2xl font-semibold text-forest mb-2">{tc('widget_h')}</h2>
      <p className="text-forest/60 text-xs leading-relaxed mb-5">{tc('widget_subtitle')}</p>

      {/* Controls */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
        {/* City */}
        <label className="flex flex-col gap-1">
          <span className="text-xs font-medium text-forest/70">{tc('label_city')}</span>
          <select
            value={prefs.cityId}
            onChange={e => {
              const id = e.target.value;
              const c = getCityById(id);
              setPrefs(p => ({
                ...p,
                cityId: id,
                method: c?.defaultMethod ?? p.method,
                customLat: undefined,
                customLng: undefined,
              }));
            }}
            className="bg-white/80 border border-forest/15 rounded-md px-3 py-2 text-sm text-forest focus:outline-none focus:ring-2 focus:ring-gold/40"
          >
            {usingCustom && <option value="custom"> – {tc('location_using')} – </option>}
            {PRAYER_CITIES.map(c => (
              <option key={c.id} value={c.id}>{c.name}, {c.country}</option>
            ))}
          </select>
        </label>

        {/* Method */}
        <label className="flex flex-col gap-1">
          <span className="text-xs font-medium text-forest/70">{tc('label_method')}</span>
          <select
            value={prefs.method}
            onChange={e => setPrefs(p => ({ ...p, method: e.target.value as CalcMethodKey }))}
            className="bg-white/80 border border-forest/15 rounded-md px-3 py-2 text-sm text-forest focus:outline-none focus:ring-2 focus:ring-gold/40"
          >
            {METHOD_KEYS.map(m => (
              <option key={m.value} value={m.value}>{tc(m.labelKey)}</option>
            ))}
          </select>
        </label>

        {/* Asr */}
        <label className="flex flex-col gap-1">
          <span className="text-xs font-medium text-forest/70">{tc('label_asr')}</span>
          <select
            value={prefs.asrHanafi ? 'hanafi' : 'standard'}
            onChange={e => setPrefs(p => ({ ...p, asrHanafi: e.target.value === 'hanafi' }))}
            className="bg-white/80 border border-forest/15 rounded-md px-3 py-2 text-sm text-forest focus:outline-none focus:ring-2 focus:ring-gold/40"
          >
            <option value="standard">{tc('asr_standard')}</option>
            <option value="hanafi">{tc('asr_hanafi')}</option>
          </select>
        </label>
      </div>

      {/* Geolocate + city-meta line */}
      <div className="flex flex-wrap items-center gap-3 mb-4 text-xs text-forest/60">
        <button
          type="button"
          onClick={handleGeolocate}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-gold/15 hover:bg-gold/25 text-gold-darker font-medium transition-colors"
        >
          <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
          {tc('geolocate')}
        </button>
        {currentCity && (
          <span>
            {currentCity.name}, {currentCity.country}  ·  {currentCity.lat.toFixed(2)}, {currentCity.lng.toFixed(2)}
          </span>
        )}
        {usingCustom && prefs.customLat != null && prefs.customLng != null && (
          <span>{prefs.customLat.toFixed(2)}, {prefs.customLng.toFixed(2)}</span>
        )}
      </div>

      {/* Next prayer banner */}
      {nextPrayer && (
        <div className="mb-4 rounded-lg bg-forest text-cream px-4 py-3 flex items-center justify-between">
          <div>
            <span className="text-cream/70 text-xs uppercase tracking-wider">{tc('next_prayer')}</span>
            <div className="font-garamond text-lg font-semibold mt-0.5">{tc(nextPrayer.name)}</div>
          </div>
          <div className="text-right">
            <div className="font-mono text-xl text-gold">{formatTime(nextPrayer.t, locale)}</div>
            {(() => {
              const diffMs = nextPrayer.t.getTime() - now.getTime();
              const h = Math.floor(diffMs / 3_600_000);
              const m = Math.floor((diffMs % 3_600_000) / 60_000);
              return (
                <div className="text-cream/60 text-xs mt-0.5">
                  {tc('in_text')} {h > 0 ? `${h}${tc('hours_short')} ` : ''}{m}{tc('minutes_short')}
                </div>
              );
            })()}
          </div>
        </div>
      )}

      {/* Prayer times grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {rows.map(row => {
          const isPast = row.t < now;
          const isNext = nextPrayer?.name === row.key;
          return (
            <div
              key={row.key}
              className={
                'rounded-md px-3 py-2.5 flex flex-col ' +
                (isNext
                  ? 'bg-gold/15 border border-gold/40'
                  : isPast
                  ? 'bg-forest/5 text-forest/50'
                  : 'bg-forest/5')
              }
            >
              <span className="text-xs font-medium text-forest/70">{tc(row.key)}</span>
              <span className={'font-mono text-base ' + (isNext ? 'text-forest font-semibold' : '')}>
                {formatTime(row.t, locale)}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
