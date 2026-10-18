interface SectionHeadingProps {
  title: string;
  arabic: string;
  level?: 2 | 3;
}

export function GuideHeading({ title, arabic, level = 2 }: SectionHeadingProps) {
  const Tag = level === 2 ? 'h2' : 'h3';
  return (
    <>
      <p dir="rtl" lang="ar" className="arabic text-gold-deep mb-1">
        {arabic}
      </p>
      <Tag
        className={
          level === 2
            ? 'section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4'
            : 'font-garamond text-xl font-semibold text-forest mb-4'
        }
      >
        {title}
      </Tag>
    </>
  );
}

interface EvidenceCardProps {
  index: number;
  arabic: string;
  badge?: string;
  title?: string;
  text: string;
  source?: string;
  sourceLabel: string;
  lesson: string;
  lessonLabel: string;
}

// Arabic first, then the meaning, the narrator/reference, and the lesson drawn from it.
export function EvidenceCard({ index, arabic, badge, title, text, source, sourceLabel, lesson, lessonLabel }: EvidenceCardProps) {
  return (
    <article className="card-islamic">
      <div className="flex items-start gap-3 mb-3">
        <span className="w-7 h-7 rounded-full bg-gold/20 ring-1 ring-gold/40 flex items-center justify-center flex-shrink-0 text-forest font-semibold text-xs mt-1">
          {index}
        </span>
        <div className="flex-1 min-w-0">
          <p dir="rtl" lang="ar" className="arabic-sm text-forest leading-loose text-right">
            {arabic}
          </p>
          {badge && (
            <p dir="rtl" lang="ar" className="text-xs text-gold-deep text-right mt-1">
              {badge}
            </p>
          )}
        </div>
      </div>
      {title && <h4 className="font-garamond text-lg font-semibold text-forest mb-2">{title}</h4>}
      <p className="text-forest/80 text-sm leading-relaxed">{text}</p>
      {source && (
        <p className="text-xs text-forest/70 mt-3">
          <span className="text-gold-deep font-medium uppercase tracking-wider mr-1.5">{sourceLabel}</span>
          {source}
        </p>
      )}
      <div className="bg-forest/5 rounded-xl p-3 mt-3">
        <p className="text-xs text-gold-deep uppercase tracking-wider font-medium mb-1">{lessonLabel}</p>
        <p className="text-forest/75 text-sm leading-relaxed">{lesson}</p>
      </div>
    </article>
  );
}
