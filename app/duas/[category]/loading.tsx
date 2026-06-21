export default function DuaCategoryLoading() {
  return (
    <div className="min-h-screen bg-cream animate-pulse">
      {/* Page header placeholder */}
      <div className="bg-forest/90 px-4 py-10">
        <div className="max-w-3xl mx-auto space-y-3">
          <div className="h-8 w-56 bg-cream/20 rounded mx-auto" />
          <div className="h-4 w-40 bg-cream/10 rounded mx-auto" />
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-8 space-y-5">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="card-islamic p-5 space-y-3">
            {/* Arabic text placeholder */}
            <div className="space-y-2 text-right">
              <div className="h-7 w-full bg-forest/10 rounded" />
              <div className="h-7 w-4/5 bg-forest/10 rounded ml-auto" />
            </div>
            {/* Transliteration placeholder */}
            <div className="space-y-2 pt-2 border-t border-forest/10">
              <div className="h-4 w-full bg-gold/10 rounded" />
              <div className="h-4 w-3/4 bg-gold/10 rounded" />
            </div>
            {/* Translation placeholder */}
            <div className="space-y-2">
              <div className="h-4 w-full bg-forest/10 rounded" />
              <div className="h-4 w-11/12 bg-forest/10 rounded" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
