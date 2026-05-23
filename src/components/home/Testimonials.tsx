import { Star } from "lucide-react";

const reviews = [
  {
    name: "Lisa van den Berg",
    location: "Amsterdam",
    dog: "Max, Labrador 3 jaar",
    rating: 5,
    text: "Eindelijk een harnas dat echt werkt! Max trekt niet meer en ik geniet weer van onze dagelijkse wandelingen. De kwaliteit is uitstekend — dit gaat jaren mee.",
    date: "2 weken geleden",
  },
  {
    name: "Thomas de Wit",
    location: "Rotterdam",
    dog: "Luna, Husky 2 jaar",
    rating: 5,
    text: "Mijn Husky is een echte trekker. Dit harnas heeft letterlijk mijn wandelingen veranderd. Supertevreden en de klantenservice was ook geweldig.",
    date: "1 maand geleden",
  },
  {
    name: "Emma Jansen",
    location: "Utrecht",
    dog: "Pippi, Beagle 1 jaar",
    rating: 5,
    text: "Super mooie kwaliteit en het zit zo comfortabel bij Pippi. Ze vindt het zelf ook fijn — geen stress meer bij het aandoen. Aanrader!",
    date: "3 weken geleden",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container-wide section-padding">
        {/* Header */}
        <div className="text-center mb-4">
          <p className="font-body text-xs tracking-widest uppercase text-gold-500 mb-3">
            Reviews
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-charcoal-900">
            Wat hondenbezitters zeggen
          </h2>
        </div>

        {/* Overall rating */}
        <div className="flex items-center justify-center gap-3 mb-14">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} className="text-gold-500 fill-gold-500" />
            ))}
          </div>
          <span className="font-body text-sm text-charcoal-900/60">
            4.9/5 op basis van 247 reviews
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="p-7 bg-cream-50 border border-cream-200 space-y-4 hover:shadow-md transition-shadow duration-300"
            >
              {/* Stars */}
              <div className="flex">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={13}
                    className="text-gold-500 fill-gold-500"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="font-body text-sm text-charcoal-900/70 leading-relaxed">
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Author */}
              <div className="pt-2 border-t border-cream-200">
                <p className="font-body text-sm font-medium text-charcoal-900">
                  {review.name}
                </p>
                <p className="font-body text-xs text-charcoal-900/40 mt-0.5">
                  {review.dog} · {review.location}
                </p>
                <p className="font-body text-xs text-charcoal-900/30 mt-0.5">
                  {review.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
