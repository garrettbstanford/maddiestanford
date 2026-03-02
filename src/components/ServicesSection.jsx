import { ArrowRight } from "lucide-react";
import { services } from "../data/siteContent";

export default function ServicesSection() {
  return (
    <section id="services" className="border-t border-stone-200 bg-stone-50 py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal mb-20 flex translate-y-8 flex-col justify-between opacity-0 md:flex-row md:items-baseline">
          <h2 className="font-serif text-4xl text-stone-900 md:text-6xl">Expertise</h2>
          <p className="mt-4 text-sm uppercase tracking-widest text-pomegranate md:mt-0">Services & Approach</p>
        </div>

        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-24">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="group reveal translate-y-8 opacity-0"
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              <div className="mb-8 aspect-[4/3] overflow-hidden rounded-sm">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover grayscale transition-transform duration-1000 ease-in-out group-hover:scale-105 group-hover:grayscale-0"
                  loading="lazy"
                />
              </div>

              <h3 className="mb-4 font-serif text-3xl text-stone-900">{service.title}</h3>
              <p className="mb-6 font-light leading-relaxed text-stone-600">{service.description}</p>

              <a
                href="#contact"
                className="inline-flex items-center text-sm uppercase tracking-widest text-pomegranate transition-colors group-hover:text-stone-900"
              >
                Learn More <ArrowRight size={14} className="ml-2" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
