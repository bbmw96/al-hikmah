export default function ProphetDetailLoading() {
  return (
    <div className="min-h-screen bg-cream animate-pulse">
      {/* Page header placeholder */}
      <div className="bg-forest/90 px-4 py-10">
        <div className="max-w-4xl mx-auto space-y-3">
          <div className="h-8 w-48 bg-cream/20 rounded mx-auto" />
          <div className="h-4 w-64 bg-cream/10 rounded mx-auto" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Two-column content cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="card-islamic p-6 space-y-3">
            <div className="h-5 w-32 bg-gold/20 rounded mb-4" />
            <div className="h-4 w-full bg-forest/10 rounded" />
            <div className="h-4 w-5/6 bg-forest/10 rounded" />
            <div className="h-4 w-4/5 bg-forest/10 rounded" />
          </div>
          <div className="card-islamic p-6 space-y-3">
            <div className="h-5 w-32 bg-gold/20 rounded mb-4" />
            <div className="h-4 w-full bg-forest/10 rounded" />
            <div className="h-4 w-5/6 bg-forest/10 rounded" />
            <div className="h-4 w-4/5 bg-forest/10 rounded" />
          </div>
        </div>

        {/* Timeline/list placeholders */}
        <div className="card-islamic p-6 space-y-4">
          <div className="h-5 w-40 bg-gold/20 rounded mb-2" />
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex gap-3 items-start">
              <div className="h-4 w-4 rounded-full bg-gold/30 mt-1 shrink-0" />
              <div className="flex-1 space-y-2">
                <div className="h-4 w-full bg-forest/10 rounded" />
                <div className="h-4 w-3/4 bg-forest/10 rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
