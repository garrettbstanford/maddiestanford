import { ArrowUpRight } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-stone-900 py-40 text-white">
      <div className="pointer-events-none absolute right-0 top-0 h-[800px] w-[800px] -translate-y-1/2 translate-x-1/2 rounded-full bg-pomegranate opacity-20 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <p className="reveal mb-8 translate-y-8 text-sm uppercase tracking-[0.2em] text-pomegranate opacity-0">
          Let&apos;s create together
        </p>

        <h2
          className="reveal mb-12 translate-y-8 font-serif text-5xl opacity-0 md:text-7xl"
          style={{ transitionDelay: "0.1s" }}
        >
          Ready to bring your <br /> <span className="italic text-stone-400">vision to life?</span>
        </h2>

        <a
          href="mailto:madleestan@gmail.com"
          className="reveal inline-flex translate-y-8 items-center space-x-4 rounded-full bg-white px-10 py-5 text-stone-900 opacity-0 transition-all duration-500 hover:bg-pomegranate hover:text-white"
          style={{ transitionDelay: "0.2s" }}
        >
          <span className="text-sm uppercase tracking-widest">Inquire Now</span>
          <ArrowUpRight size={18} />
        </a>
      </div>
    </section>
  );
}
