export default function ClientReviewsSection({
  reviews = [],
  kicker = "Client Reviews",
  title = "Kind words from past clients",
  description = "A dedicated space for testimonials from past clients, collaborators, and floral partners.",
  emptyLabel = "Ready for Testimonials",
  emptyMessage = "Client reviews will appear here as they are added.",
  standalone = true,
  className = ""
}) {
  const content = (
    <>
      <div className="reveal max-w-3xl translate-y-8 opacity-0">
        <p className="text-sm uppercase tracking-[0.22em] text-pomegranate">{kicker}</p>
        <h2 className="mt-4 font-serif text-4xl leading-tight text-stone-900 md:text-6xl">{title}</h2>
        <p className="mt-6 text-lg leading-relaxed text-stone-600 md:text-xl">{description}</p>
      </div>

      {reviews.length ? (
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <article
              key={`${review.name}-${index}`}
              className="reveal flex translate-y-8 flex-col justify-between rounded-[2rem] border border-stone-200 bg-stone-50 p-8 opacity-0"
              style={{ transitionDelay: `${0.08 + index * 0.08}s` }}
            >
              <p className="font-serif text-2xl leading-relaxed text-stone-900">"{review.quote}"</p>

              <div className="mt-10 border-t border-stone-200 pt-5">
                <p className="text-sm uppercase tracking-[0.16em] text-stone-800">{review.name}</p>
                {review.context ? <p className="mt-2 text-sm leading-relaxed text-stone-500">{review.context}</p> : null}
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="reveal mt-16 translate-y-8 rounded-[2rem] border border-dashed border-stone-300 bg-stone-50 px-8 py-12 text-center opacity-0">
          <p className="text-xs uppercase tracking-[0.22em] text-pomegranate">{emptyLabel}</p>
          <p className="mt-4 text-xl leading-relaxed text-stone-700">{emptyMessage}</p>
        </div>
      )}
    </>
  );

  if (!standalone) {
    return <div className={className}>{content}</div>;
  }

  return (
    <section id="reviews" className={`border-t border-stone-200 bg-white py-32 ${className}`.trim()}>
      <div className="mx-auto max-w-7xl px-6">
        {content}
      </div>
    </section>
  );
}
