/**
 * Curated city list for the prayer-times widget.
 * Coverage prioritises the 14 site languages + the holy cities.
 * Each city carries lat/lng (decimal) and a sensible default calculation method.
 */

import { CalculationMethod } from 'adhan';

export type CalcMethodKey =
  | 'MuslimWorldLeague' | 'Egyptian' | 'Karachi' | 'UmmAlQura'
  | 'Dubai' | 'MoonsightingCommittee' | 'NorthAmerica' | 'Kuwait'
  | 'Qatar' | 'Singapore' | 'Tehran' | 'Turkey';

export interface PrayerCity {
  id: string;
  name: string;        // anglicised for stable matching
  country: string;
  lat: number;
  lng: number;
  defaultMethod: CalcMethodKey;
}

export const PRAYER_CITIES: PrayerCity[] = [
  // ─── The Holy Cities ──────────────────────────────────────
  { id: 'makkah',       name: 'Makkah',       country: 'Saudi Arabia',  lat: 21.4225, lng: 39.8262,  defaultMethod: 'UmmAlQura' },
  { id: 'madinah',      name: 'Madinah',      country: 'Saudi Arabia',  lat: 24.4686, lng: 39.6142,  defaultMethod: 'UmmAlQura' },
  { id: 'al-quds',      name: 'Al-Quds (Jerusalem)', country: 'Palestine', lat: 31.7683, lng: 35.2137, defaultMethod: 'MuslimWorldLeague' },
  // ─── English ──────────────────────────────────────────────
  { id: 'london',       name: 'London',       country: 'United Kingdom', lat: 51.5074, lng: -0.1278,  defaultMethod: 'MoonsightingCommittee' },
  { id: 'new-york',     name: 'New York',     country: 'United States',  lat: 40.7128, lng: -74.0060, defaultMethod: 'NorthAmerica' },
  { id: 'toronto',      name: 'Toronto',      country: 'Canada',         lat: 43.6532, lng: -79.3832, defaultMethod: 'NorthAmerica' },
  { id: 'sydney',       name: 'Sydney',       country: 'Australia',      lat: -33.8688, lng: 151.2093, defaultMethod: 'MuslimWorldLeague' },
  { id: 'birmingham',   name: 'Birmingham',   country: 'United Kingdom', lat: 52.4862, lng: -1.8904,  defaultMethod: 'MoonsightingCommittee' },
  // ─── Malay / Indonesian ───────────────────────────────────
  { id: 'kuala-lumpur', name: 'Kuala Lumpur', country: 'Malaysia',       lat: 3.1390,  lng: 101.6869, defaultMethod: 'Singapore' },
  { id: 'singapore',    name: 'Singapore',    country: 'Singapore',      lat: 1.3521,  lng: 103.8198, defaultMethod: 'Singapore' },
  { id: 'jakarta',      name: 'Jakarta',      country: 'Indonesia',      lat: -6.2088, lng: 106.8456, defaultMethod: 'MuslimWorldLeague' },
  { id: 'bandar-seri',  name: 'Bandar Seri Begawan', country: 'Brunei',  lat: 4.9031,  lng: 114.9398, defaultMethod: 'Singapore' },
  // ─── Turkish ──────────────────────────────────────────────
  { id: 'istanbul',     name: 'Istanbul',     country: 'Turkey',         lat: 41.0082, lng: 28.9784,  defaultMethod: 'Turkey' },
  { id: 'ankara',       name: 'Ankara',       country: 'Turkey',         lat: 39.9334, lng: 32.8597,  defaultMethod: 'Turkey' },
  // ─── Urdu / South Asia ────────────────────────────────────
  { id: 'karachi',      name: 'Karachi',      country: 'Pakistan',       lat: 24.8607, lng: 67.0011,  defaultMethod: 'Karachi' },
  { id: 'lahore',       name: 'Lahore',       country: 'Pakistan',       lat: 31.5204, lng: 74.3587,  defaultMethod: 'Karachi' },
  { id: 'islamabad',    name: 'Islamabad',    country: 'Pakistan',       lat: 33.6844, lng: 73.0479,  defaultMethod: 'Karachi' },
  // ─── Bengali ──────────────────────────────────────────────
  { id: 'dhaka',        name: 'Dhaka',        country: 'Bangladesh',     lat: 23.8103, lng: 90.4125,  defaultMethod: 'Karachi' },
  { id: 'chittagong',   name: 'Chittagong',   country: 'Bangladesh',     lat: 22.3569, lng: 91.7832,  defaultMethod: 'Karachi' },
  // ─── Persian ──────────────────────────────────────────────
  { id: 'tehran',       name: 'Tehran',       country: 'Iran',           lat: 35.6892, lng: 51.3890,  defaultMethod: 'Tehran' },
  { id: 'mashhad',      name: 'Mashhad',      country: 'Iran',           lat: 36.2605, lng: 59.6168,  defaultMethod: 'Tehran' },
  // ─── Chinese / Cantonese ──────────────────────────────────
  { id: 'beijing',      name: 'Beijing',      country: 'China',          lat: 39.9042, lng: 116.4074, defaultMethod: 'MuslimWorldLeague' },
  { id: 'hong-kong',    name: 'Hong Kong',    country: 'Hong Kong SAR',  lat: 22.3193, lng: 114.1694, defaultMethod: 'MuslimWorldLeague' },
  { id: 'urumqi',       name: 'Urumqi',       country: 'China',          lat: 43.8256, lng: 87.6168,  defaultMethod: 'MuslimWorldLeague' },
  // ─── Japanese ─────────────────────────────────────────────
  { id: 'tokyo',        name: 'Tokyo',        country: 'Japan',          lat: 35.6762, lng: 139.6503, defaultMethod: 'MuslimWorldLeague' },
  { id: 'osaka',        name: 'Osaka',        country: 'Japan',          lat: 34.6937, lng: 135.5023, defaultMethod: 'MuslimWorldLeague' },
  // ─── Russian ──────────────────────────────────────────────
  { id: 'moscow',       name: 'Moscow',       country: 'Russia',         lat: 55.7558, lng: 37.6173,  defaultMethod: 'MuslimWorldLeague' },
  { id: 'kazan',        name: 'Kazan',        country: 'Russia',         lat: 55.8304, lng: 49.0661,  defaultMethod: 'MuslimWorldLeague' },
  // ─── Spanish ──────────────────────────────────────────────
  { id: 'madrid',       name: 'Madrid',       country: 'Spain',          lat: 40.4168, lng: -3.7038,  defaultMethod: 'MuslimWorldLeague' },
  { id: 'mexico-city',  name: 'Mexico City',  country: 'Mexico',         lat: 19.4326, lng: -99.1332, defaultMethod: 'NorthAmerica' },
  { id: 'buenos-aires', name: 'Buenos Aires', country: 'Argentina',      lat: -34.6037, lng: -58.3816, defaultMethod: 'MuslimWorldLeague' },
  // ─── Korean ───────────────────────────────────────────────
  { id: 'seoul',        name: 'Seoul',        country: 'South Korea',    lat: 37.5665, lng: 126.9780, defaultMethod: 'MuslimWorldLeague' },
  // ─── Tamil ────────────────────────────────────────────────
  { id: 'chennai',      name: 'Chennai',      country: 'India',          lat: 13.0827, lng: 80.2707,  defaultMethod: 'Karachi' },
  // ─── Sinhalese ────────────────────────────────────────────
  { id: 'colombo',      name: 'Colombo',      country: 'Sri Lanka',      lat: 6.9271,  lng: 79.8612,  defaultMethod: 'Karachi' },
  // ─── Additional Arab world ────────────────────────────────
  { id: 'cairo',        name: 'Cairo',        country: 'Egypt',          lat: 30.0444, lng: 31.2357,  defaultMethod: 'Egyptian' },
  { id: 'dubai',        name: 'Dubai',        country: 'United Arab Emirates', lat: 25.2048, lng: 55.2708, defaultMethod: 'Dubai' },
  { id: 'doha',         name: 'Doha',         country: 'Qatar',          lat: 25.2854, lng: 51.5310,  defaultMethod: 'Qatar' },
  { id: 'kuwait-city',  name: 'Kuwait City',  country: 'Kuwait',         lat: 29.3759, lng: 47.9774,  defaultMethod: 'Kuwait' },
  { id: 'riyadh',       name: 'Riyadh',       country: 'Saudi Arabia',   lat: 24.7136, lng: 46.6753,  defaultMethod: 'UmmAlQura' },
  { id: 'amman',        name: 'Amman',        country: 'Jordan',         lat: 31.9454, lng: 35.9284,  defaultMethod: 'MuslimWorldLeague' },
];

export function getCityById(id: string): PrayerCity | undefined {
  return PRAYER_CITIES.find(c => c.id === id);
}

export function getCalculationParams(methodKey: CalcMethodKey) {
  switch (methodKey) {
    case 'MuslimWorldLeague':       return CalculationMethod.MuslimWorldLeague();
    case 'Egyptian':                return CalculationMethod.Egyptian();
    case 'Karachi':                 return CalculationMethod.Karachi();
    case 'UmmAlQura':               return CalculationMethod.UmmAlQura();
    case 'Dubai':                   return CalculationMethod.Dubai();
    case 'MoonsightingCommittee':   return CalculationMethod.MoonsightingCommittee();
    case 'NorthAmerica':            return CalculationMethod.NorthAmerica();
    case 'Kuwait':                  return CalculationMethod.Kuwait();
    case 'Qatar':                   return CalculationMethod.Qatar();
    case 'Singapore':               return CalculationMethod.Singapore();
    case 'Tehran':                  return CalculationMethod.Tehran();
    case 'Turkey':                  return CalculationMethod.Turkey();
  }
}
