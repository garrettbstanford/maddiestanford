import { ArrowRight } from "lucide-react";
import { portfolioProjects } from "../data/siteContent";
import { withBasePath } from "../utils/routing";

export default function PortfolioOverviewSection() {
  return (
    <section className="bg-stone-50 pb-24 pt-36 md:pb-28 md:pt-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal mb-14 translate-y-8 text-center opacity-0 md:mb-20">
          <p className="text-xs uppercase tracking-[0.22em] text-pomegranate md:text-sm">Portfolio</p>
          <h1 className="mt-4 font-serif text-4xl text-stone-900 md:text-6xl">Explore My Work</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-stone-600 md:text-xl">
            Browse four focus areas. Each section includes examples of planning, floral direction, and production
            execution.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {portfolioProjects.map((project, index) => (
            <article
              key={project.title}
              className="reveal overflow-hidden border border-stone-200 bg-white translate-y-8 opacity-0"
              style={{ transitionDelay: `${index * 0.08}s` }}
            >
              <img src={project.image} alt={project.alt} className="aspect-[16/10] w-full object-cover" loading="lazy" />

              <div className="p-6 md:p-8">
                <p className="text-xs uppercase tracking-[0.2em] text-pomegranate">{project.subtitle}</p>
                <h2 className="mt-3 font-serif text-3xl text-stone-900 md:text-4xl">{project.title}</h2>
                <p className="mt-4 leading-relaxed text-stone-600">{project.summary}</p>

                <a
                  href={withBasePath(project.href)}
                  className="mt-7 inline-flex items-center gap-2 rounded-full border border-stone-900 px-5 py-2 text-xs uppercase tracking-[0.2em] text-stone-900 transition-colors duration-300 hover:border-pomegranate hover:bg-pomegranate hover:text-white"
                >
                  View {project.title}
                  <ArrowRight size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
