import { ArrowUpRight } from "lucide-react";

export default function PortfolioPageSection({ page }) {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white">
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-24 pt-40 md:pb-28">
        <p className="reveal mb-5 translate-y-8 text-xs uppercase tracking-[0.2em] text-pomegranate opacity-0 md:text-sm">
          {page.kicker}
        </p>

        <h1 className="reveal max-w-4xl translate-y-8 font-serif text-5xl leading-[1.05] text-stone-900 opacity-0 md:text-7xl lg:text-8xl">
          {page.title}
        </h1>

        {page.skills ? (
          <div className="reveal mt-6 translate-y-8 opacity-0" style={{ transitionDelay: "0.08s" }}>
            <h2 className="text-sm uppercase tracking-[0.2em] text-stone-700 md:text-base">Corporate Event Planning Skills</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {page.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-stone-300 bg-stone-50 px-5 py-2 text-xs uppercase tracking-[0.18em] text-stone-700 md:text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ) : null}

        {page.description ? (
          <p className="reveal mt-6 max-w-3xl translate-y-8 text-lg leading-relaxed text-stone-600 opacity-0 md:text-xl">
            {page.description}
          </p>
        ) : null}

        {page.mediaSections ? (
          <div className="reveal mt-10 translate-y-8 opacity-0" style={{ transitionDelay: "0.18s" }}>
            <h2 className="text-sm uppercase tracking-[0.2em] text-stone-700 md:text-base">Document Sections</h2>
            <div className="mt-4 grid gap-6 lg:grid-cols-2 lg:grid-rows-2">
              {page.mediaSections.map((section, index) => (
                <article
                  key={`${section.title || "section"}-${index}`}
                  className={`w-full overflow-hidden rounded-2xl border border-stone-200 bg-white ${
                    section.title === "CWA Service Crew" ? "lg:col-start-2 lg:row-span-2 lg:row-start-1" : ""
                  }`}
                >
                  {section.title ? (
                    <h3 className="border-b border-stone-200 px-5 py-3 text-sm uppercase tracking-[0.12em] text-stone-700 md:text-base">
                      {section.title}
                    </h3>
                  ) : null}
                  {section.image ? (
                    <img src={section.image} alt={section.alt || `${section.title} preview`} className="h-auto w-full object-contain" />
                  ) : section.linkUrl ? (
                    <div className="flex h-56 items-center justify-center bg-stone-100 px-5 text-center">
                      <a
                        href={section.linkUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-stone-700 px-5 py-2 text-xs uppercase tracking-[0.14em] text-stone-700 transition-colors duration-300 hover:border-pomegranate hover:bg-pomegranate hover:text-white"
                      >
                        {section.linkLabel || "View Link"}
                        <ArrowUpRight size={14} />
                      </a>
                    </div>
                  ) : section.embedUrl ? (
                    <div className="bg-stone-100 p-4">
                      <div className="relative mx-auto w-full max-w-sm overflow-hidden rounded-xl" style={{ aspectRatio: "9 / 16" }}>
                        <iframe
                          src={section.embedUrl}
                          title={section.title}
                          className="absolute inset-0 h-full w-full border-0"
                          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                          allowFullScreen
                        />
                      </div>
                    </div>
                  ) : section.file ? (
                    <div className="flex h-56 items-center justify-center bg-stone-100 px-5 text-center">
                      <a
                        href={section.file}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-stone-700 px-5 py-2 text-xs uppercase tracking-[0.14em] text-stone-700 transition-colors duration-300 hover:border-pomegranate hover:bg-pomegranate hover:text-white"
                      >
                        Open PDF
                        <ArrowUpRight size={14} />
                      </a>
                    </div>
                  ) : (
                    <div className="flex h-56 items-center justify-center bg-stone-100 px-5 text-center text-sm uppercase tracking-[0.1em] text-stone-500">
                      Blank Document
                    </div>
                  )}
                  {section.description ? (
                    <p className="border-t border-stone-200 px-5 py-4 text-sm leading-relaxed text-stone-600">{section.description}</p>
                  ) : null}
                </article>
              ))}
            </div>
          </div>
        ) : null}

        <a
          href="mailto:hello@maddiestanford.com"
          className="reveal mt-10 inline-flex translate-y-8 items-center gap-3 rounded-full border border-stone-900 px-7 py-3 text-xs uppercase tracking-[0.2em] text-stone-900 opacity-0 transition-colors duration-300 hover:border-pomegranate hover:bg-pomegranate hover:text-white"
          style={{ transitionDelay: "0.2s" }}
        >
          Inquire About This Work
          <ArrowUpRight size={16} />
        </a>
      </div>
    </section>
  );
}
