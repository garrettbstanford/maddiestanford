import { portfolioProjects } from "../data/siteContent";
import { withBasePath } from "../utils/routing";

export default function WorkSection() {
  return (
    <section id="work" className="bg-white py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal mb-20 translate-y-8 text-center opacity-0">
          <h2 className="mb-6 font-serif text-4xl text-stone-900 md:text-6xl">Portfolio</h2>
          <p className="mx-auto max-w-2xl font-light leading-relaxed text-stone-500">
            Explore portfolio categories to view work across corporate experiences, community gatherings, weddings, and
            floral business collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-10">
          {portfolioProjects.map((project) => (
            <a
              key={project.title}
              href={withBasePath(project.href)}
              className={`group reveal relative overflow-hidden translate-y-8 opacity-0 ${project.classes}`}
              style={{ transitionDelay: project.delay }}
            >
              <img
                src={project.image}
                alt={project.alt}
                className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                loading="lazy"
              />

              <div
                className={`absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${project.tint}`}
              />

              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="translate-y-4 text-center transition-transform duration-500 group-hover:translate-y-0">
                  {project.subtitle && (
                    <p className="mb-2 text-xs uppercase tracking-[0.2em] text-white">{project.subtitle}</p>
                  )}
                  <h3 className="font-serif text-2xl text-white md:text-3xl">{project.title}</h3>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="reveal mt-20 translate-y-8 text-center opacity-0">
          <a
            href={withBasePath("/portfolio/corporate")}
            className="border-b border-stone-900 pb-1 text-sm uppercase tracking-widest text-stone-900 transition-colors hover:border-pomegranate hover:text-pomegranate"
          >
            Explore Corporate Work
          </a>
        </div>
      </div>
    </section>
  );
}
