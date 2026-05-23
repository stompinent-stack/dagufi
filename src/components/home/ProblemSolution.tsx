import { AlertTriangle, CheckCircle2 } from "lucide-react";

const problems = [
  "Jouw hond trekt aan de riem en jij verliest de controle",
  "Traditionele halsband drukt pijnlijk op de keel",
  "Wandelingen voelen als een strijd in plaats van plezier",
  "Je bent bang dat je hond je omver trekt",
];

const solutions = [
  "Zachte controle zonder druk op de keel of nek",
  "Ergonomisch ontwerp dat jouw hond comfortabel houdt",
  "Wandelingen worden weer ontspannen en aangenaam",
  "Volledig controle — voor kleine én grote honden",
];

export function ProblemSolution() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container-wide section-padding">
        {/* Header */}
        <div className="text-center mb-16 max-w-xl mx-auto">
          <p className="font-body text-xs tracking-widest uppercase text-gold-500 mb-3">
            Het probleem
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-charcoal-900 leading-tight">
            Herken jij dit?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 max-w-4xl mx-auto">
          {/* Problems */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                <AlertTriangle size={16} className="text-red-400" />
              </div>
              <h3 className="font-body text-sm tracking-widest uppercase text-charcoal-900/50">
                Zonder Dagufi
              </h3>
            </div>
            {problems.map((p) => (
              <div
                key={p}
                className="flex gap-3 p-4 bg-red-50/50 border border-red-100"
              >
                <span className="text-red-300 mt-0.5 flex-shrink-0">✗</span>
                <p className="font-body text-sm text-charcoal-900/70">{p}</p>
              </div>
            ))}
          </div>

          {/* Solutions */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 size={16} className="text-emerald-500" />
              </div>
              <h3 className="font-body text-sm tracking-widest uppercase text-charcoal-900/50">
                Met Dagufi
              </h3>
            </div>
            {solutions.map((s) => (
              <div
                key={s}
                className="flex gap-3 p-4 bg-emerald-50/50 border border-emerald-100"
              >
                <span className="text-emerald-500 mt-0.5 flex-shrink-0">✓</span>
                <p className="font-body text-sm text-charcoal-900/70">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
