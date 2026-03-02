import { ArrowUpRight } from "lucide-react";

export default function PortfolioPageSection({ page }) {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden bg-stone-900">
      <img src={page.image} alt={`${page.title} portfolio preview`} className="absolute inset-0 h-full w-full object-cover" loading="eager" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/45 to-black/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(255,255,255,0.2),transparent_45%)]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-24 pt-40 md:pb-28">
        <p className="reveal mb-5 translate-y-8 text-xs uppercase tracking-[0.2em] text-pomegranate opacity-0 md:text-sm">
          {page.kicker}
        </p>

        <h1 className="reveal max-w-4xl translate-y-8 font-serif text-5xl leading-[1.05] text-white opacity-0 md:text-7xl lg:text-8xl">
          {page.title}
        </h1>

        <p className="reveal mt-6 max-w-3xl translate-y-8 text-lg leading-relaxed text-stone-100 opacity-0 md:text-xl">
          {page.description}
        </p>

        <div className="reveal mt-10 flex translate-y-8 flex-wrap gap-3 opacity-0" style={{ transitionDelay: "0.1s" }}>
          {page.highlights.map((highlight) => (
            <span
              key={highlight}
              className="rounded-full border border-white/35 bg-black/20 px-5 py-2 text-xs uppercase tracking-[0.18em] text-white/95 md:text-sm"
            >
              {highlight}
            </span>
          ))}
        </div>

        <a
          href="mailto:hello@maddiestanford.com"
          className="reveal mt-10 inline-flex translate-y-8 items-center gap-3 rounded-full border border-white/70 px-7 py-3 text-xs uppercase tracking-[0.2em] text-white opacity-0 transition-colors duration-300 hover:border-pomegranate hover:bg-pomegranate"
          style={{ transitionDelay: "0.2s" }}
        >
          Inquire About This Work
          <ArrowUpRight size={16} />
        </a>
      </div>
    </section>
  );
}
