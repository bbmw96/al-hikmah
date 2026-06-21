export default function Loading() {
  return (
    <div className="animate-pulse">
      {/* Page header skeleton */}
      <div className="bg-forest/5 py-16 px-6 text-center">
        <div className="h-6 bg-forest/10 rounded w-48 mx-auto mb-3" />
        <div className="h-9 bg-forest/15 rounded w-72 mx-auto mb-3" />
        <div className="h-4 bg-forest/10 rounded w-64 mx-auto" />
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Description card skeleton */}
        <div className="card-islamic mb-10 space-y-2">
          <div className="h-3 bg-forest/10 rounded w-full" />
          <div className="h-3 bg-forest/10 rounded w-11/12" />
          <div className="h-3 bg-forest/10 rounded w-4/5" />
        </div>

        {/* Hadith row skeletons */}
        <div className="space-y-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="card-islamic flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-gold/10 flex-shrink-0" />
              <div className="flex-1 space-y-2 py-1">
                <div className="h-3 bg-forest/10 rounded w-full" />
                <div className="h-3 bg-forest/10 rounded w-5/6" />
                <div className="h-3 bg-forest/10 rounded w-3/5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
