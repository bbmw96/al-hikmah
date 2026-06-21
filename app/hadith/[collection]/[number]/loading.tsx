export default function HadithDetailLoading() {
  return (
    <div className="min-h-screen bg-cream animate-pulse">
      {/* Back link placeholder */}
      <div className="max-w-3xl mx-auto px-4 py-6">
        <div className="h-4 w-24 bg-forest/10 rounded mb-6" />

        {/* Title badge area */}
        <div className="flex gap-3 mb-6">
          <div className="h-8 w-32 bg-gold/20 rounded-full" />
          <div className="h-8 w-20 bg-forest/10 rounded-full" />
        </div>

        {/* Large Arabic text placeholder */}
        <div className="card-islamic p-6 mb-6 space-y-3">
          <div className="h-8 w-full bg-forest/10 rounded" />
          <div className="h-8 w-5/6 bg-forest/10 rounded ml-auto" />
          <div className="h-8 w-4/5 bg-forest/10 rounded ml-auto" />
          <div className="h-8 w-3/4 bg-forest/10 rounded ml-auto" />
        </div>

        {/* Tab bar placeholder */}
        <div className="flex gap-2 mb-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-9 w-28 bg-forest/10 rounded-md" />
          ))}
        </div>

        {/* Content card placeholder */}
        <div className="card-islamic p-6 space-y-3">
          <div className="h-4 w-full bg-forest/10 rounded" />
          <div className="h-4 w-11/12 bg-forest/10 rounded" />
          <div className="h-4 w-4/5 bg-forest/10 rounded" />
          <div className="h-4 w-3/4 bg-forest/10 rounded" />
        </div>
      </div>
    </div>
  );
}
