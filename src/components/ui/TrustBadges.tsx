import { Shield, RotateCcw, Truck, Star } from "lucide-react";

const badges = [
  {
    icon: Shield,
    title: "Veilige betaling",
    subtitle: "SSL versleuteld",
  },
  {
    icon: RotateCcw,
    title: "30 dagen retour",
    subtitle: "Geen gedoe",
  },
  {
    icon: Truck,
    title: "Gratis verzending",
    subtitle: "Vanaf €40",
  },
  {
    icon: Star,
    title: "4.9/5 sterren",
    subtitle: "247 reviews",
  },
];

export function TrustBadges() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {badges.map((badge) => {
        const Icon = badge.icon;
        return (
          <div
            key={badge.title}
            className="flex flex-col items-center gap-2 py-4 px-3 bg-cream-50 border border-cream-200 text-center"
          >
            <Icon size={20} className="text-gold-500" strokeWidth={1.5} />
            <div>
              <p className="font-body text-xs font-medium text-charcoal-900">
                {badge.title}
              </p>
              <p className="font-body text-[11px] text-charcoal-900/40">
                {badge.subtitle}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
