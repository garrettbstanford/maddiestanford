import { ArrowUpRight } from "lucide-react";

const entries = [
  {
    title: "Color Forecast: Pomegranate & Clay",
    category: "Journal",
    excerpt:
      "A look at the warm, saturated tones shaping the next season of event florals and tablescape styling.",
    image:
      "https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&q=80"
  },
  {
    title: "Design Notes from an Intimate Dinner",
    category: "Field Notes",
    excerpt:
      "How we layered texture, candlelight, and movement to build an immersive evening for forty guests.",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80"
  },
  {
    title: "Sourcing Seasonal Stems Thoughtfully",
    category: "Studio",
    excerpt:
      "Practical decisions that keep installations sculptural, seasonal, and rooted in responsible sourcing.",
    image:
      "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&q=80"
  }
];

export default function JournalSection() {
  return (
    <section id="journal" className="border-t border-stone-200 bg-stone-100/60 py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal mb-14 translate-y-8 opacity-0">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-pomegranate">Journal</p>
          <h2 className="font-serif text-4xl text-stone-900 md:text-5xl">From the Studio</h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {entries.map((entry, index) => (
            <article
              key={entry.title}
              className="reveal group translate-y-8 bg-white opacity-0 shadow-sm"
              style={{ transitionDelay: `${index * 0.12}s` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={entry.image}
                  alt={entry.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="space-y-4 p-6">
                <p className="text-xs uppercase tracking-[0.18em] text-pomegranate">{entry.category}</p>
                <h3 className="font-serif text-2xl text-stone-900">{entry.title}</h3>
                <p className="leading-relaxed text-stone-600">{entry.excerpt}</p>
                <button
                  type="button"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-stone-900 transition-colors hover:text-pomegranate"
                >
                  Read Entry
                  <ArrowUpRight size={14} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
