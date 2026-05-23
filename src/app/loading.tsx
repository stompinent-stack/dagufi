export default function Loading() {
  return (
    <div className="pt-24 md:pt-28 min-h-screen">
      <div className="bg-cream-50 border-b border-cream-200">
        <div className="container-wide section-padding py-12 md:py-16">
          <div className="h-3 skeleton w-16 mb-3" />
          <div className="h-10 skeleton w-64" />
        </div>
      </div>
      <div className="container-wide section-padding py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {[...Array(8)].map((_, i) => (
            <div key={i}>
              <div className="aspect-square skeleton mb-4" />
              <div className="space-y-2">
                <div className="h-3 skeleton w-20" />
                <div className="h-4 skeleton w-3/4" />
                <div className="h-4 skeleton w-1/3" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
