import { ArrowRight } from "lucide-react";
import mainHeroPhoto from "../assets/main-hero.jpg";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-20">
      <div className="absolute -left-40 top-24 h-80 w-80 rounded-full bg-pomegranate/10 blur-3xl" />

      <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-12 px-6 py-12 md:grid-cols-12 md:gap-16">
        <div className="relative z-10 md:col-span-7">
          <p className="reveal mb-6 translate-y-8 text-sm uppercase tracking-[0.2em] text-pomegranate opacity-0 md:text-base">
            Event Professional & Florist
          </p>

          <h1
            className="reveal max-w-none translate-y-8 font-serif text-5xl leading-[1.1] text-stone-900 opacity-0 md:text-7xl lg:text-8xl"
            style={{ transitionDelay: "0.1s" }}
          >
            Elevating spaces through <span className="italic text-pomegranate">botanical art</span> & curated design.
          </h1>

          <p className="mt-6 max-w-2xl text-[1.27rem] leading-relaxed text-stone-700 md:text-[1.45rem]">
            I am Maddie Stanford. An event professional and floral artist dedicated to bringing exceptional corporate
            visions, community gatherings, and unforgettable weddings to life.
          </p>

          <div className="reveal mt-12 flex translate-y-8 flex-col gap-6 opacity-0 sm:flex-row" style={{ transitionDelay: "0.3s" }}>
            <a
              href="#work"
              className="group flex items-center space-x-3 rounded-full bg-stone-900 px-8 py-4 text-white transition-colors duration-500 hover:bg-pomegranate"
            >
              <span className="text-sm uppercase tracking-widest">View Portfolio</span>
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        <div
          className="reveal relative z-10 aspect-[3/4] w-full max-w-xs translate-y-8 justify-self-center self-center opacity-0 md:col-span-5 md:max-w-none md:justify-self-end md:self-center"
          style={{ transitionDelay: "0.2s" }}
        >
          <img
            src={mainHeroPhoto}
            alt="Pomegranate floral arrangement"
            className="h-full w-full rounded-sm object-cover shadow-2xl"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}
