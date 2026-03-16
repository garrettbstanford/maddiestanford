import busQuoteList from "../assets/bus-quote-list.png";
import mondayCom from "../assets/monday-com.png";
import cwaServiceCrew from "../assets/cwa-service-crew.jpg";
import weddingMoodboardJpg from "../assets/wedding-moodboard.jpg";
import timeline1 from "../assets/timeline1.png";
import timeline2 from "../assets/timeline2.png";
import timeline3 from "../assets/timeline3.png";

export const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Portfolio",
    href: "/portfolio",
    children: [
      { label: "Corporate", href: "/portfolio/corporate" },
      { label: "Community", href: "/portfolio/community" },
      { label: "Weddings", href: "/portfolio/weddings" },
      { label: "Floral Business", href: "/portfolio/floral-business" }
    ]
  },
  { label: "Resume", href: "/resume" }
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
    summary:
      "Executive retreats, launch events, keynote experiences, and hospitality programs crafted for brand clarity and guest impact.",
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
    summary:
      "Neighborhood activations, nonprofit programs, and cultural events built around warmth, flow, and meaningful connection.",
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
    summary:
      "Ceremony-to-reception storytelling with floral installs, table design, and seamless transitions throughout the day.",
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
    summary:
      "Editorial shoots, retail partnerships, and long-term floral direction that helps businesses express a distinct point of view.",
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
    skills: [
      "Timeline Development",
      "Vendor Coordination",
      "Budget Management",
      "Run of Show Planning",
      "Client Communication",
      "On-Site Execution",
      "Stakeholder Alignment",
      "Contract Negotiation",
      "Venue Logistics",
      "Team Training",
      "Risk & Contingency Planning"
    ],
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80",
    highlights: ["Executive Retreats", "Brand Activations", "Conference Styling"],
    sections: ["Bus Quotes", "Monday.com", "Sponsor Blitz", "CWA Service Crew Flyer", "RFP"],
    mediaSections: [
      {
        title: "Bus Quotes",
        image: busQuoteList,
        alt: "Bus Quote List document preview",
        description: "Describe  why this proposal made an impact/ how much money i saved the company. Share any other additional info I want/need"
      },
      {
        title: "Monday.com",
        image: mondayCom,
        alt: "Monday.com document preview",
        description:
          "Describe why monday.com hasmade an impact/ how much I have used it/ can use it. Share any other additional info I want/need"
      },
      {
        title: "CWA Service Crew",
        image: cwaServiceCrew,
        alt: "CWA Service Crew graphic preview",
        description:
          "Describe why this graphic was important and how it has impact. Share any other additional info I want/need"
      },
      {
        title: "RFP"
      },
      {
        title: "Sponsor Blitz"
      }
    ]
  },
  "/portfolio/community": {
    kicker: "Portfolio / Community",
    title: "Community",
    description:
      "Corporate event planning with clear timelines, vendor coordination, budget discipline, and polished guest experiences from kickoff through final execution.",
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
    highlights: ["Ceremony Design", "Reception Styling", "Floral Installations"],
    mediaSections: [
      {
        title: "Timeline - Annie & Jack",
        image: timeline1,
        alt: "Timeline 1",
        description: "This is a small snapshot of a wedding timeline I helped carry out, I had no part in creating this timeline only the execusion. This section outlines the first phase of set up our team carried out."
      },
      {
        image: timeline2,
        alt: "Timeline 2",
        description: "This was phase two of our setup. Being detail orriented is one of my favorite parts about event planning."
      },
      {
        image: timeline3,
        alt: "Timeline 3",
        description: "For this event there were over 180 guests, 30+ linens, and endless memories made."
      },
      {
        title: "Wedding Moodboard",
        image: weddingMoodboardJpg,
        alt: "Wedding Moodboard",
        description: "I built this wedding moodboard given the prompt, \"The sky is the limit!\". This is what I dreamt up, a mix of modern luxury and extravagence."
      },
      {
        title: "Luxury Wedding Video",
        linkUrl: "https://www.instagram.com/reel/DVgeeV7Edjw/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
        linkLabel: "Watch Luxury Wedding Video",
        description: "Working as a wedding coordinator assistant for Michelle Leo Events"
      }
    ]
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
