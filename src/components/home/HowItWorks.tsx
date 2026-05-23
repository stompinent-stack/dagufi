const steps = [
  {
    number: "01",
    title: "Kies jouw maat",
    description:
      "Gebruik onze maattabel om de juiste maat voor jouw hond te bepalen. Van chihuahua tot labrador.",
  },
  {
    number: "02",
    title: "Snel geleverd",
    description:
      "Bestel voor 22:00 en we versturen de volgende werkdag. Gratis verzending vanaf €40.",
  },
  {
    number: "03",
    title: "Aanpassen & omtrekken",
    description:
      "De vijf verstelbare punten zorgen voor een perfecte pasvorm in minder dan een minuut.",
  },
  {
    number: "04",
    title: "Geniet van elke wandeling",
    description:
      "Ervaar het verschil direct. Geen trekkende hond meer — alleen plezier samen.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-charcoal-900 text-white">
      <div className="container-wide section-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-body text-xs tracking-widest uppercase text-gold-400 mb-3">
            Werkwijze
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-white">
            Zo eenvoudig werkt het
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="relative p-6 lg:p-8"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-[52px] left-[calc(50%+2rem)] w-full h-px bg-white/10" />
              )}

              <div className="relative z-10 space-y-4">
                <span className="font-display text-5xl font-light text-gold-500/40">
                  {step.number}
                </span>
                <h3 className="font-display text-xl font-light text-white">
                  {step.title}
                </h3>
                <p className="font-body text-sm text-white/50 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
