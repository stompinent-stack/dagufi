const benefits = [
  {
    icon: "🛡️",
    title: "Veilig & zacht",
    description:
      "Geen druk op de keel. Het gewicht wordt verdeeld over de borst voor maximaal comfort.",
  },
  {
    icon: "✨",
    title: "Premium materialen",
    description:
      "Gemaakt van duurzaam nylon en roestvrij staal. Sterk genoeg voor de wildste avonturen.",
  },
  {
    icon: "📐",
    title: "Verstelbaar design",
    description:
      "Vijf instelbare punten voor een perfecte, comfortabele pasvorm voor elke hond.",
  },
  {
    icon: "🎨",
    title: "Tijdloos design",
    description:
      "Minimalistisch en stijlvol. Jij en jouw hond zien er altijd goed uit op de wandeling.",
  },
  {
    icon: "🔧",
    title: "Eenvoudig aan/uit",
    description:
      "Snelsluitgesp voor moeiteloze aan- en uitzetting — ook met één hand.",
  },
  {
    icon: "🧽",
    title: "Makkelijk te reinigen",
    description:
      "Gewoon afwassen of in de wasmachine. Altijd fris en hygiënisch.",
  },
];

export function Benefits() {
  return (
    <section className="py-20 md:py-28 bg-cream-50">
      <div className="container-wide section-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-body text-xs tracking-widest uppercase text-gold-500 mb-3">
            Voordelen
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-charcoal-900">
            Waarom Dagufi?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit, i) => (
            <div
              key={benefit.title}
              className="bg-white p-7 border border-cream-200 hover:border-gold-300 hover:shadow-md transition-all duration-300 group"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <span className="text-3xl mb-4 block">{benefit.icon}</span>
              <h3 className="font-display text-lg font-medium text-charcoal-900 mb-2 group-hover:text-gold-500 transition-colors">
                {benefit.title}
              </h3>
              <p className="font-body text-sm text-charcoal-900/60 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
