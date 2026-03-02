export default function AboutSection() {
  return (
    <section id="about" className="bg-white py-32">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="reveal translate-y-8 font-serif text-3xl leading-relaxed text-stone-800 opacity-0 md:text-5xl">
          "I believe every event is a living canvas. My work blends the structural elegance of event production with the organic, fleeting beauty of floral design."
        </h2>
        <p
          className="reveal mt-8 translate-y-8 text-sm uppercase tracking-widest text-stone-500 opacity-0"
          style={{ transitionDelay: "0.2s" }}
        >
          - Maddie Stanford
        </p>
      </div>
    </section>
  );
}
