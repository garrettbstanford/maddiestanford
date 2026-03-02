import heroMainPom from "../assets/hero-main-pom.jpg";

export default function IntroHeroSection() {
  return (
    <section id="home" className="relative flex min-h-screen items-end overflow-hidden bg-stone-900">
      <img
        src={heroMainPom}
        alt="Minimal event space with modern floral styling"
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/15" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.25),transparent_45%)]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-24 pt-32 md:pb-28">
        <h1 className="max-w-3xl font-serif text-5xl leading-[1.05] text-white md:text-7xl lg:text-8xl">
          Quiet Luxury, Thoughtfully Composed.
        </h1>
      </div>
    </section>
  );
}
