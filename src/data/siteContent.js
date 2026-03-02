export const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Portfolio",
    href: "/#work",
    children: [
      { label: "Corporate", href: "/portfolio/corporate" },
      { label: "Community", href: "/portfolio/community" },
      { label: "Weddings", href: "/portfolio/weddings" },
      { label: "Floral Business", href: "/portfolio/floral-business" }
    ]
  },
  { label: "Resume", href: "/#about" }
];

export const services = [
  {
    title: "Event Production",
    description:
      "From intimate gatherings to grand celebrations, we orchestrate every detail. Our approach ensures a seamless flow, sophisticated aesthetics, and an unforgettable guest experience.",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80"
  },
  {
    title: "Botanical Styling",
    description:
      "Creating textural, sculptural, and romantic floral installations. We source the finest blooms, leaning into seasonal shifts and striking color palettes like our signature deep pomegranate.",
    image:
      "https://images.unsplash.com/photo-1600861194942-f883de0dfe96?auto=format&fit=crop&q=80"
  }
];

export const portfolioProjects = [
  {
    title: "Corporate",
    subtitle: "Brand & Executive Events",
    image:
      "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&q=80",
    alt: "Modern corporate gala with floral staging",
    href: "/portfolio/corporate",
    classes: "md:col-span-8 aspect-[16/10]",
    delay: "0s",
    tint: "bg-black/20"
  },
  {
    title: "Community",
    subtitle: "Cultural & Local Gatherings",
    image:
      "https://images.unsplash.com/photo-1596436854581-22874136412f?auto=format&fit=crop&q=80",
    alt: "Community event floral bouquet",
    href: "/portfolio/community",
    classes: "md:col-span-4 aspect-[3/4]",
    delay: "0.1s",
    tint: "bg-pomegranate/80 mix-blend-multiply"
  },
  {
    title: "Weddings",
    subtitle: "Ceremony & Reception Design",
    image:
      "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80",
    alt: "Wedding dinner tablescape",
    href: "/portfolio/weddings",
    classes: "md:col-span-5 aspect-[3/4] md:-mt-20",
    delay: "0s",
    tint: "bg-black/20"
  },
  {
    title: "Floral Business",
    subtitle: "Retail & Studio Collaborations",
    image:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80",
    alt: "Floral business installation",
    href: "/portfolio/floral-business",
    classes: "md:col-span-7 aspect-[16/10] md:mt-20",
    delay: "0.2s",
    tint: "bg-black/20"
  }
];

export const portfolioPages = {
  "/portfolio/corporate": {
    kicker: "Portfolio / Corporate",
    title: "Corporate",
    description:
      "Executive retreats, launch nights, keynote stages, and hospitality suites designed to feel elevated, intentional, and true to brand voice.",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80",
    highlights: ["Executive Retreats", "Brand Activations", "Conference Styling"]
  },
  "/portfolio/community": {
    kicker: "Portfolio / Community",
    title: "Community",
    description:
      "Seasonal markets, nonprofit galas, and civic gatherings built around warmth, flow, and floral moments that invite people to linger and connect.",
    image:
      "https://images.unsplash.com/photo-1472653431158-6364773b2a56?auto=format&fit=crop&q=80",
    highlights: ["Fundraisers", "Cultural Events", "Neighborhood Celebrations"]
  },
  "/portfolio/weddings": {
    kicker: "Portfolio / Weddings",
    title: "Weddings",
    description:
      "Ceremony-to-reception environments with sculptural florals, layered tablescapes, and considered transitions that keep each chapter of the day cohesive.",
    image:
      "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&q=80",
    highlights: ["Ceremony Design", "Reception Styling", "Floral Installations"]
  },
  "/portfolio/floral-business": {
    kicker: "Portfolio / Floral Business",
    title: "Floral Business",
    description:
      "Editorial shoots, boutique partnerships, and long-form floral programming that help businesses present a distinct botanical point of view.",
    image:
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&q=80",
    highlights: ["Retail Partnerships", "Editorial Production", "Studio Direction"]
  }
};
