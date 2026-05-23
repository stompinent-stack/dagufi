interface PolicyPageProps {
  badge: string;
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export function PolicyPage({ badge, title, lastUpdated, children }: PolicyPageProps) {
  return (
    <div className="pt-24 md:pt-28 min-h-screen">
      <div className="bg-cream-50 border-b border-cream-200">
        <div className="container-tight section-padding py-10 md:py-14">
          <p className="font-body text-xs tracking-widest uppercase text-gold-500 mb-2">
            {badge}
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-light text-charcoal-900">
            {title}
          </h1>
          <p className="font-body text-xs text-charcoal-900/30 mt-3">
            Laatst bijgewerkt: {lastUpdated}
          </p>
        </div>
      </div>
      <div className="container-tight section-padding py-10 md:py-14">
        <div className="prose-dagufi max-w-2xl space-y-6">{children}</div>
      </div>
    </div>
  );
}

export function PolicySection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-display text-2xl font-light text-charcoal-900 mb-3">{title}</h2>
      <div className="font-body text-sm text-charcoal-900/60 leading-relaxed space-y-3">
        {children}
      </div>
    </div>
  );
}
