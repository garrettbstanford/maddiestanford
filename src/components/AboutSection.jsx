export default function AboutSection() {
  return (
    <section id="about" className="bg-white py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-12 md:items-start">
        <div className="md:col-span-4">
          <p className="reveal translate-y-8 text-sm uppercase tracking-[0.22em] text-pomegranate opacity-0">
            About Me
          </p>
          <h2
            className="reveal mt-4 translate-y-8 font-serif text-4xl leading-tight text-stone-900 opacity-0 md:text-6xl"
            style={{ transitionDelay: "0.08s" }}
          >
            Maddie Stanford
          </h2>
        </div>

        <div className="md:col-span-8">
          <p className="reveal translate-y-8 text-xl leading-relaxed text-stone-700 opacity-0 md:text-2xl">
            I create intentional events and floral experiences that balance beauty, logistics, and guest connection.
            From first concept to final load-out, I focus on thoughtful details that make every event feel effortless.
          </p>

          <p className="reveal mt-6 translate-y-8 leading-relaxed text-stone-600 opacity-0" style={{ transitionDelay: "0.14s" }}>
            My background spans corporate productions, community activations, wedding celebrations, and floral business
            collaborations. I bring a calm planning style, creative direction, and hands-on execution to every project.
          </p>

          <div
            className="reveal mt-10 grid translate-y-8 gap-4 opacity-0 sm:grid-cols-3"
            style={{ transitionDelay: "0.22s" }}
          >
            <div className="border border-stone-200 bg-stone-50 p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-stone-500">Focus</p>
              <p className="mt-2 text-sm text-stone-700">Corporate, Community, Weddings, Floral Business</p>
            </div>
            <div className="border border-stone-200 bg-stone-50 p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-stone-500">Approach</p>
              <p className="mt-2 text-sm text-stone-700">Creative direction paired with clear production systems</p>
            </div>
            <div className="border border-stone-200 bg-stone-50 p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-stone-500">Goal</p>
              <p className="mt-2 text-sm text-stone-700">Design experiences people remember long after the event</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
