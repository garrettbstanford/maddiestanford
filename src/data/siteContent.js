export const navLinks = [
  { label: "Home", href: "#home" },
  {
    label: "Portfolio",
    href: "#work",
    children: [
      { label: "Corporate", href: "#work" },
      { label: "Community", href: "#work" },
      { label: "Weddings", href: "#work" },
      { label: "Floral Business", href: "#work" }
    ]
  },
  { label: "Resume", href: "#about" }
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

export const projects = [
  {
    title: "Minimalist Gala",
    subtitle: "The Estate",
    image:
      "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&q=80",
    alt: "Modern minimal wedding setup",
    classes: "md:col-span-8 aspect-[16/10]",
    delay: "0s",
    tint: "bg-black/20"
  },
  {
    title: "Autumn Bloom",
    subtitle: "",
    image:
      "https://images.unsplash.com/photo-1596436854581-22874136412f?auto=format&fit=crop&q=80",
    alt: "Red floral bouquet",
    classes: "md:col-span-4 aspect-[3/4]",
    delay: "0.1s",
    tint: "bg-pomegranate/80 mix-blend-multiply"
  },
  {
    title: "Intimate Dinner",
    subtitle: "Styling",
    image:
      "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80",
    alt: "Table setting",
    classes: "md:col-span-5 aspect-[3/4] md:-mt-20",
    delay: "0s",
    tint: "bg-black/20"
  },
  {
    title: "Botanical Archway",
    subtitle: "Installation",
    image:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80",
    alt: "Artsy floral installation",
    classes: "md:col-span-7 aspect-[16/10] md:mt-20",
    delay: "0.2s",
    tint: "bg-black/20"
  }
];
