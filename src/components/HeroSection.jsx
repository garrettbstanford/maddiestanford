import { ArrowRight } from "lucide-react";
import mainHeroPhoto from "../assets/main-hero.jpg";
import { withBasePath } from "../utils/routing";

const heroPerimeterLabel = Array(8).fill("EVENT PROFESSIONAL • FLORIST").join(" • ");

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-20">
      <div className="absolute -left-40 top-24 h-80 w-80 rounded-full bg-pomegranate/10 blur-3xl" />

      <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-12 px-6 py-8 md:grid-cols-12 md:gap-16 md:py-0">
        <div className="relative z-10 md:col-span-7">
          <h1
            className="reveal max-w-none translate-y-8 font-serif text-5xl leading-[1.1] text-stone-900 opacity-0 md:text-7xl lg:text-8xl"
            style={{ transitionDelay: "0.1s" }}
          >
            <span className="block">Designing & creating</span>
            <span className="hero-bloom-phrase">experinces that bloom</span>
          </h1>

          <p className="mt-6 max-w-2xl text-[1.27rem] leading-relaxed text-stone-700 md:text-[1.45rem]">
            Hi there! I'm Maddie, an event professional and floral artist. I am dedicated to bringing exceptional
            corporate visions, community gatherings, and unforgettable experinces to life.
          </p>

          <div className="reveal mt-12 flex translate-y-8 flex-col gap-6 opacity-0 sm:flex-row" style={{ transitionDelay: "0.3s" }}>
            <a
              href={withBasePath("/portfolio")}
              className="group flex items-center space-x-3 rounded-full bg-stone-900 px-8 py-4 text-white transition-colors duration-500 hover:bg-pomegranate"
            >
              <span className="text-sm uppercase tracking-widest">View Portfolio</span>
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        <div
          className="reveal relative z-10 flex w-full max-w-[17rem] translate-y-8 items-center justify-center justify-self-center self-center opacity-0 md:col-span-5 md:max-w-[23rem] md:justify-self-center md:self-center lg:max-w-[25rem]"
          style={{ transitionDelay: "0.2s" }}
        >
          <div className="hero-window-frame mx-auto">
            <svg className="hero-window-figure" viewBox="6 10 108 184" role="img" aria-label="Pomegranate floral arrangement">
              <defs>
                <path
                  id="hero-window-label-path"
                  pathLength="1000"
                  d="M 60 194 H 22 A 12 12 0 0 1 10 182 V 62 A 50 50 0 0 1 110 62 V 182 A 12 12 0 0 1 98 194 H 60"
                />
                <clipPath id="hero-window-image-clip">
                  <path d="M 60 190 H 24 A 11 11 0 0 1 13 179 V 61 A 47 47 0 0 1 107 61 V 179 A 11 11 0 0 1 96 190 H 60" />
                </clipPath>
              </defs>
              <image
                href={mainHeroPhoto}
                x="13"
                y="14"
                width="94"
                height="176"
                preserveAspectRatio="xMidYMax slice"
                clipPath="url(#hero-window-image-clip)"
              />
              <text className="hero-window-perimeter-text" textLength="1000" lengthAdjust="spacing">
                <textPath href="#hero-window-label-path" startOffset="0%">
                  {heroPerimeterLabel}
                </textPath>
              </text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
