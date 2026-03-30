import { Fragment, useEffect, useRef, useState } from "react";
import { ArrowUpRight, Instagram, Volume2, VolumeX } from "lucide-react";
import ClientReviewsSection from "./ClientReviewsSection";

const mediaSort = new Intl.Collator(undefined, {
  numeric: true,
  sensitivity: "base"
});

const bridalBouquetMediaModules = import.meta.glob(
  [
    "/Bridal Bouquet *.{avif,gif,heic,jpeg,jpg,m4v,mp4,mov,png,webm,webp,AVIF,GIF,HEIC,JPEG,JPG,M4V,MP4,MOV,PNG,WEBM,WEBP}",
    "/Bridal Bouquet Pics/*.{avif,gif,heic,jpeg,jpg,m4v,mp4,mov,png,webm,webp,AVIF,GIF,HEIC,JPEG,JPG,M4V,MP4,MOV,PNG,WEBM,WEBP}",
    "/src/assets/Bridal Bouquet Pics/*.{avif,gif,heic,jpeg,jpg,m4v,mp4,mov,png,webm,webp,AVIF,GIF,HEIC,JPEG,JPG,M4V,MP4,MOV,PNG,WEBM,WEBP}"
  ],
  { eager: true, import: "default" }
);

const floralInstallMediaModules = import.meta.glob(
  [
    "/Instal *.{avif,gif,heic,jpeg,jpg,m4v,mp4,mov,png,webm,webp,AVIF,GIF,HEIC,JPEG,JPG,M4V,MP4,MOV,PNG,WEBM,WEBP}",
    "/Install *.{avif,gif,heic,jpeg,jpg,m4v,mp4,mov,png,webm,webp,AVIF,GIF,HEIC,JPEG,JPG,M4V,MP4,MOV,PNG,WEBM,WEBP}",
    "/Floral Install *.{avif,gif,heic,jpeg,jpg,m4v,mp4,mov,png,webm,webp,AVIF,GIF,HEIC,JPEG,JPG,M4V,MP4,MOV,PNG,WEBM,WEBP}",
    "/src/assets/Instal *.{avif,gif,heic,jpeg,jpg,m4v,mp4,mov,png,webm,webp,AVIF,GIF,HEIC,JPEG,JPG,M4V,MP4,MOV,PNG,WEBM,WEBP}"
  ],
  { eager: true, import: "default" }
);

const freelancingMediaModules = import.meta.glob(
  [
    "/Freelancing *.{avif,gif,heic,jpeg,jpg,m4v,mp4,mov,png,webm,webp,AVIF,GIF,HEIC,JPEG,JPG,M4V,MP4,MOV,PNG,WEBM,WEBP}",
    "/Freelance *.{avif,gif,heic,jpeg,jpg,m4v,mp4,mov,png,webm,webp,AVIF,GIF,HEIC,JPEG,JPG,M4V,MP4,MOV,PNG,WEBM,WEBP}",
    "/src/assets/Freelancing *.{avif,gif,heic,jpeg,jpg,m4v,mp4,mov,png,webm,webp,AVIF,GIF,HEIC,JPEG,JPG,M4V,MP4,MOV,PNG,WEBM,WEBP}"
  ],
  { eager: true, import: "default" }
);

const wreathMediaModules = import.meta.glob(
  [
    "/Wreath *.{avif,gif,heic,jpeg,jpg,m4v,mp4,mov,png,webm,webp,AVIF,GIF,HEIC,JPEG,JPG,M4V,MP4,MOV,PNG,WEBM,WEBP}",
    "/src/assets/Wreath *.{avif,gif,heic,jpeg,jpg,m4v,mp4,mov,png,webm,webp,AVIF,GIF,HEIC,JPEG,JPG,M4V,MP4,MOV,PNG,WEBM,WEBP}"
  ],
  { eager: true, import: "default" }
);

const volunteerMediaModules = import.meta.glob(
  [
    "/Volunteer *.*",
    "/src/assets/Volunteer *.*"
  ],
  { eager: true, import: "default" }
);

const cwaMediaModules = import.meta.glob(
  [
    "/CWA *.{avif,gif,heic,jpeg,jpg,m4v,mp4,mov,png,webm,webp,AVIF,GIF,HEIC,JPEG,JPG,M4V,MP4,MOV,PNG,WEBM,WEBP}",
    "/src/assets/CWA *.{avif,gif,heic,jpeg,jpg,m4v,mp4,mov,png,webm,webp,AVIF,GIF,HEIC,JPEG,JPG,M4V,MP4,MOV,PNG,WEBM,WEBP}"
  ],
  { eager: true, import: "default" }
);

const isSupportedMediaFile = (path) => /\.(avif|gif|heic|jpeg|jpg|m4v|mp4|mov|png|webm|webp)$/i.test(path);
const isVideoFile = (path) => /\.(mp4|mov|m4v|webm)$/i.test(path);
const getFileExtension = (path) => path.split(".").pop()?.toLowerCase() || "";

const formatMediaLabel = (path) =>
  path
    .split("/")
    .pop()
    ?.replace(/\.[^.]+$/, "")
    .replace(/[-_]+/g, " ")
    .trim();

const freelancingCaptions = {
  "Freelancing 1": "Lily & Iris",
  "Freelancing 2": "Rose + Thyme Floral",
  "Freelancing 3": "Collective Floral",
  "Freelancing 4": "De La Flor",
  "Freelancing 5": "Lily & Iris",
  "Freelancing 6": "Lily & Iris",
  "Freelancing 7": "De La Flor",
  "Freelancing 8": "Lily & Iris",
  "Freelancing 9": "Lily & Iris",
  "Freelancing 10": "Collective Floral",
  "Freelancing 11": "De La Flor",
  "Freelancing 12": "Fly High Flora"
};

const buildMediaCollection = (mediaModules, captionMap = {}) =>
  Array.from(
    Object.entries(mediaModules)
      .filter(([path]) => isSupportedMediaFile(path))
      .sort(([leftPath], [rightPath]) => mediaSort.compare(leftPath, rightPath))
      .reduce((collection, [path, src]) => {
        const alt = formatMediaLabel(path);
        const existingItem = collection.get(alt);
        const nextItem = {
          src,
          type: isVideoFile(path) ? "video" : "image",
          alt,
          caption: captionMap[alt],
          extension: getFileExtension(path)
        };

        if (!existingItem) {
          collection.set(alt, nextItem);
          return collection;
        }

        // Prefer non-HEIC media when duplicate filenames exist in multiple formats.
        if (existingItem.extension === "heic" && nextItem.extension !== "heic") {
          collection.set(alt, nextItem);
        }

        return collection;
      }, new Map()).values()
  ).map(({ extension, ...item }) => item);

const mediaCollections = {
  bridalBouquet: buildMediaCollection(bridalBouquetMediaModules),
  floralInstall: buildMediaCollection(floralInstallMediaModules),
  freelancing: buildMediaCollection(freelancingMediaModules, freelancingCaptions),
  wreath: buildMediaCollection(wreathMediaModules),
  volunteer: buildMediaCollection(volunteerMediaModules).filter((item) => item.alt !== "Volunteer 3"),
  cwa: buildMediaCollection(cwaMediaModules)
    .filter((item) => ["CWA 1", "CWA 3", "CWA 10", "CWA 11"].includes(item.alt))
    .sort((leftItem, rightItem) => {
      const order = ["CWA 10", "CWA 11", "CWA 3", "CWA 1"];
      return order.indexOf(leftItem.alt) - order.indexOf(rightItem.alt);
    })
};

const selectMediaItems = (collectionName, mediaItemOrder = []) => {
  const items = collectionName ? mediaCollections[collectionName] || [] : [];

  if (!mediaItemOrder.length) {
    return items;
  }

  const itemsByAlt = new Map(items.map((item) => [item.alt, item]));

  return mediaItemOrder.map((alt) => itemsByAlt.get(alt)).filter(Boolean);
};

function PortfolioMediaCarousel({ items, title, advanceVideosOnEnd = false }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRefs = useRef([]);
  const activeItem = items?.[activeIndex] || items?.[0];

  useEffect(() => {
    setActiveIndex(0);
  }, [items]);

  useEffect(() => {
    if (!items?.length || items.length === 1) {
      return undefined;
    }

    if (advanceVideosOnEnd && activeItem?.type === "video") {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % items.length);
    }, 5200);

    return () => window.clearTimeout(timeoutId);
  }, [activeItem?.type, activeIndex, advanceVideosOnEnd, items]);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) {
        return;
      }

      if (index === activeIndex) {
        video.play().catch(() => {});
        return;
      }

      video.pause();
      video.currentTime = 0;
    });
  }, [activeIndex, items]);

  if (!items?.length) {
    return null;
  }

  return (
    <div className="bg-stone-100 p-4">
      <div className="overflow-hidden rounded-xl border border-stone-200 bg-white shadow-sm">
        <div className="overflow-hidden bg-stone-50">
          <div
            className="flex min-h-[22rem] w-full transition-transform duration-700 will-change-transform"
            style={{
              transform: `translateX(-${activeIndex * 100}%)`,
              transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)"
            }}
          >
            {items.map((item, index) => (
              <div key={item.src} className="flex min-h-[22rem] w-full min-w-0 shrink-0 flex-col items-center justify-center gap-3 px-3 py-4 md:min-h-[26rem]">
                {item.type === "video" ? (
                  <video
                    ref={(node) => {
                      videoRefs.current[index] = node;
                    }}
                    src={item.src}
                    title={`${title} ${item.alt || "video"}`}
                    className="block max-h-[42rem] w-auto max-w-full object-contain"
                    muted
                    loop={!advanceVideosOnEnd}
                    playsInline
                    preload="metadata"
                    onEnded={() => {
                      if (!advanceVideosOnEnd || items.length <= 1 || index !== activeIndex) {
                        return;
                      }

                      setActiveIndex((currentIndex) => (currentIndex + 1) % items.length);
                    }}
                  />
                ) : (
                  <img src={item.src} alt={`${title} ${item.alt || "photo"}`} className="block h-auto w-auto max-w-full object-contain" />
                )}
                {item.caption ? <p className="text-sm uppercase tracking-[0.14em] text-stone-600">{item.caption}</p> : null}
              </div>
            ))}
          </div>
        </div>

        {items.length > 1 ? (
          <div className="flex items-center justify-between gap-4 border-t border-stone-200 px-4 py-3">
            <p className="text-[11px] uppercase tracking-[0.18em] text-stone-500">
              {activeIndex + 1} / {items.length}
            </p>

            <div className="flex flex-wrap justify-end gap-2">
              {items.map((item, index) => (
                <button
                  key={item.src}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`h-2.5 w-2.5 rounded-full transition-colors duration-300 ${
                    index === activeIndex ? "bg-pomegranate" : "bg-stone-300 hover:bg-stone-400"
                  }`}
                  aria-label={`Show ${title} item ${index + 1}`}
                />
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

function PortfolioVideoBlock({ src, title }) {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    video.muted = isMuted;
    video.defaultMuted = isMuted;
    video.play().catch(() => {});
  }, [isMuted, src]);

  return (
    <div className="bg-stone-100 p-4">
      <div className="relative mx-auto w-full max-w-sm overflow-hidden rounded-xl" style={{ aspectRatio: "9 / 16" }}>
        <video
          ref={videoRef}
          src={src}
          title={title}
          className="h-full w-full object-cover"
          autoPlay
          loop
          muted={isMuted}
          playsInline
          preload="metadata"
        />
        <button
          type="button"
          onClick={() => setIsMuted((current) => !current)}
          className="absolute bottom-3 right-3 inline-flex items-center gap-2 rounded-full bg-stone-900/80 px-4 py-2 text-xs uppercase tracking-[0.14em] text-white transition-colors duration-300 hover:bg-pomegranate"
          aria-label={isMuted ? `Unmute ${title}` : `Mute ${title}`}
        >
          {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
          {isMuted ? "Unmute" : "Mute"}
        </button>
      </div>
    </div>
  );
}

function SectionDescription({ paragraphs, className, logo, logoAlt, logos = [] }) {
  const logoItems = logos.length ? logos : logo ? [{ src: logo, alt: logoAlt || "Section logo" }] : [];

  return (
    <div className={className}>
      <div className="space-y-5">
        {logoItems.length ? (
          <div className="flex flex-wrap items-center gap-4">
            {logoItems.map((logoItem, index) => (
              <img
                key={`${logoItem.alt || "logo"}-${index}`}
                src={logoItem.src}
                alt={logoItem.alt || "Section logo"}
                className="h-10 w-auto object-contain md:h-12"
              />
            ))}
          </div>
        ) : null}
        {paragraphs.map((paragraph, index) => (
          <p key={`${paragraph.slice(0, 24)}-${index}`} className="whitespace-pre-line text-base leading-relaxed text-stone-600">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}

export default function PortfolioPageSection({ page }) {
  const isWeddingPage = page?.title === "Weddings";
  const shouldStackMediaSections = Boolean(page?.stackMediaSections);
  const usesSplitMediaColumns = page?.mediaLayout === "split-columns";
  const mediaHeading = page.mediaHeading === undefined ? "Document Sections" : page.mediaHeading;

  const renderMediaSection = (section, index) => {
    const sectionMediaItems = selectMediaItems(section.mediaCollection, section.mediaItemOrder);
    const sectionBottomMediaItems = section.bottomMediaCollection ? mediaCollections[section.bottomMediaCollection] || [] : [];
    const sectionIntroParagraphs = section.sectionDescriptionParagraphs?.length
      ? section.sectionDescriptionParagraphs
      : section.sectionDescription
        ? [section.sectionDescription]
        : [];
    const sectionDescriptionParagraphs = section.descriptionParagraphs?.length
      ? section.descriptionParagraphs
      : section.description
        ? [section.description]
        : [];
    const hasDescription = sectionDescriptionParagraphs.length > 0;
    const hasPrimaryDisplayMedia =
      sectionMediaItems.length > 0 || section.image || section.video || section.linkUrl || section.embedUrl || section.file;
    const hasBottomMedia = sectionBottomMediaItems.length > 0;
    const hasAnyDisplayMedia = hasPrimaryDisplayMedia || hasBottomMedia;

    return (
      <Fragment key={`${section.title || "section"}-${index}`}>
        {section.sectionHeading || sectionIntroParagraphs.length ? (
          <div className="col-span-full mt-2 space-y-3">
            {section.sectionHeading ? (
              <h2 className="text-sm uppercase tracking-[0.2em] text-stone-700 md:text-base">{section.sectionHeading}</h2>
            ) : null}
            {sectionIntroParagraphs.map((paragraph, paragraphIndex) => (
              <p key={`${section.title || "section"}-intro-${paragraphIndex}`} className="max-w-5xl text-base leading-relaxed text-stone-600 md:text-lg">
                {paragraph}
              </p>
            ))}
          </div>
        ) : null}
        <article className="self-start w-full overflow-hidden rounded-2xl border border-stone-200 bg-white">
          {section.title ? (
            <h3 className="border-b border-stone-200 px-5 py-3 text-sm uppercase tracking-[0.12em] text-stone-700 md:text-base">
              {section.title}
            </h3>
          ) : null}
          {sectionMediaItems.length > 0 ? (
            <PortfolioMediaCarousel
              items={sectionMediaItems}
              title={section.title || "Portfolio media"}
              advanceVideosOnEnd={section.advanceVideosOnEnd}
            />
          ) : section.image ? (
            <div className="flex min-h-[18rem] items-center justify-center bg-stone-50 p-4 md:min-h-[24rem]">
              <img
                src={section.image}
                alt={section.alt || `${section.title} preview`}
                className="block max-h-[42rem] w-auto max-w-full object-contain"
              />
            </div>
          ) : section.video ? (
            <PortfolioVideoBlock src={section.video} title={section.title || "Portfolio video"} />
          ) : section.linkUrl ? (
            <div className="flex h-56 items-center justify-center bg-stone-100 px-5 text-center">
              <a
                href={section.linkUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-stone-700 px-5 py-2 text-xs uppercase tracking-[0.14em] text-stone-700 transition-colors duration-300 hover:border-pomegranate hover:bg-pomegranate hover:text-white"
              >
                {section.linkLabel || "View Link"}
                <ArrowUpRight size={14} />
              </a>
            </div>
          ) : section.embedUrl ? (
            <div className="bg-stone-100 p-4">
              <div className="relative mx-auto w-full max-w-5xl overflow-hidden rounded-xl" style={{ aspectRatio: "16 / 10" }}>
                <iframe
                  src={section.embedUrl}
                  title={section.title}
                  className="absolute inset-0 h-full w-full border-0"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          ) : section.file ? (
            <div className="flex h-56 items-center justify-center bg-stone-100 px-5 text-center">
              <a
                href={section.file}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-stone-700 px-5 py-2 text-xs uppercase tracking-[0.14em] text-stone-700 transition-colors duration-300 hover:border-pomegranate hover:bg-pomegranate hover:text-white"
              >
                Open PDF
                <ArrowUpRight size={14} />
              </a>
            </div>
          ) : hasDescription ? (
            <SectionDescription
              paragraphs={sectionDescriptionParagraphs}
              className="min-h-56 bg-stone-50 px-5 py-6"
              logo={section.logo}
              logoAlt={section.logoAlt}
              logos={section.logos}
            />
          ) : (
            <div className="flex h-56 items-center justify-center bg-stone-100 px-5 text-center text-sm uppercase tracking-[0.1em] text-stone-500">
              Blank Document
            </div>
          )}
          {hasDescription && hasPrimaryDisplayMedia ? (
            <SectionDescription paragraphs={sectionDescriptionParagraphs} className="border-t border-stone-200 px-5 py-4" />
          ) : null}
          {hasBottomMedia ? (
            <div className={hasDescription || hasPrimaryDisplayMedia ? "border-t border-stone-200" : ""}>
              <PortfolioMediaCarousel
                items={sectionBottomMediaItems}
                title={section.bottomMediaTitle || section.title || "Portfolio media"}
                advanceVideosOnEnd={section.bottomMediaAdvanceVideosOnEnd}
              />
            </div>
          ) : null}
          {section.linkUrl && hasAnyDisplayMedia ? (
            <div className="border-t border-stone-200 px-5 py-4">
              <div className="flex flex-wrap gap-3">
                <a
                  href={section.linkUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-stone-700 px-5 py-2 text-xs uppercase tracking-[0.14em] text-stone-700 transition-colors duration-300 hover:border-pomegranate hover:bg-pomegranate hover:text-white"
                >
                  {section.title === "Follow my Instagram" ? <Instagram size={14} /> : null}
                  {section.linkLabel || "View Link"}
                  <ArrowUpRight size={14} />
                </a>
                {section.secondaryLinkUrl ? (
                  <a
                    href={section.secondaryLinkUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-stone-700 px-5 py-2 text-xs uppercase tracking-[0.14em] text-stone-700 transition-colors duration-300 hover:border-pomegranate hover:bg-pomegranate hover:text-white"
                  >
                    {section.secondaryLinkLabel || "Visit Website"}
                    <ArrowUpRight size={14} />
                  </a>
                ) : null}
              </div>
            </div>
          ) : null}
        </article>
      </Fragment>
    );
  };

  const renderMediaSections = () => {
    if (usesSplitMediaColumns) {
      const leftColumnSections = [];
      const rightColumnSections = [];

      page.mediaSections.forEach((section, index) => {
        const renderedSection = renderMediaSection(section, index);

        if (section.desktopColumn === "right") {
          rightColumnSections.push(renderedSection);
          return;
        }

        leftColumnSections.push(renderedSection);
      });

      return (
        <>
          <div className="mt-4 space-y-6 lg:hidden">{page.mediaSections.map(renderMediaSection)}</div>
          <div className="mt-4 hidden gap-6 lg:grid lg:grid-cols-2 lg:items-start">
            <div className="flex flex-col gap-6">{leftColumnSections}</div>
            <div className="flex flex-col gap-6">{rightColumnSections}</div>
          </div>
        </>
      );
    }

    return (
      <div
        className={`mt-4 grid gap-6 ${
          isWeddingPage
            ? "mx-auto max-w-5xl grid-cols-1"
            : shouldStackMediaSections
              ? "mx-auto max-w-5xl grid-cols-1"
              : "lg:grid-cols-2 lg:grid-rows-2"
        }`}
      >
        {page.mediaSections.map(renderMediaSection)}
      </div>
    );
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-white">
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-24 pt-40 md:pb-28">
        <p className="reveal mb-5 translate-y-8 text-xs uppercase tracking-[0.2em] text-pomegranate opacity-0 md:text-sm">
          {page.kicker}
        </p>

        <h1 className="reveal max-w-4xl translate-y-8 font-serif text-5xl leading-[1.05] text-stone-900 opacity-0 md:text-7xl lg:text-8xl">
          {page.title}
        </h1>

        {page.skills ? (
          <div className="reveal mt-6 translate-y-8 opacity-0" style={{ transitionDelay: "0.08s" }}>
            <h2 className="text-sm uppercase tracking-[0.2em] text-stone-700 md:text-base">Corporate Event Planning Skills</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {page.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-stone-300 bg-stone-50 px-5 py-2 text-xs uppercase tracking-[0.18em] text-stone-700 md:text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ) : null}

        {page.description ? (
          <p className="reveal mt-6 max-w-3xl translate-y-8 text-lg leading-relaxed text-stone-600 opacity-0 md:text-xl">
            {page.description}
          </p>
        ) : null}

        <a
          href="mailto:madleestan@gmail.com"
          className="reveal mt-10 inline-flex translate-y-8 items-center gap-3 rounded-full border border-stone-900 px-7 py-3 text-xs uppercase tracking-[0.2em] text-stone-900 opacity-0 transition-colors duration-300 hover:border-pomegranate hover:bg-pomegranate hover:text-white"
          style={{ transitionDelay: "0.2s" }}
        >
          Inquire About This Work
          <ArrowUpRight size={16} />
        </a>

        {page.mediaSections ? (
          <div className="reveal mt-10 translate-y-8 opacity-0" style={{ transitionDelay: "0.18s" }}>
            {mediaHeading ? <h2 className="text-sm uppercase tracking-[0.2em] text-stone-700 md:text-base">{mediaHeading}</h2> : null}
            {page.mediaDescription ? (
              <p className="mt-3 max-w-3xl text-base leading-relaxed text-stone-600 md:text-lg">{page.mediaDescription}</p>
            ) : null}
            {renderMediaSections()}
          </div>
        ) : null}

        {page.reviews ? (
          <div className="mt-16 border-t border-stone-200 pt-16">
            <ClientReviewsSection
              reviews={page.reviews}
              kicker={page.reviewsKicker}
              title={page.reviewsTitle}
              description={page.reviewsDescription}
              standalone={false}
            />
          </div>
        ) : null}
      </div>
    </section>
  );
}
