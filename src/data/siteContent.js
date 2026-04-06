import instagramReelHighlight from "../assets/Instagram_reel_highlight.mp4";
import heroMainPom from "../assets/hero-main-pom.jpg";
import weddingMoodboardJpg from "../assets/wedding-moodboard.jpg";
import timeline1 from "../assets/timeline1.png";
import timeline2 from "../assets/timeline2.png";
import timeline3 from "../assets/timeline3.png";
import beesLogo from "../../Bees Logo.png";
import cwa11 from "../../CWA 11.png";
import cwaLogo from "../../CWA Logo.png";
import pomLogo from "../../Pom Logo 3.png";
import roseGoldLogo from "../../Rose+Gold+logo.webp";
import runtasticLogo from "../../Runtastic-Logo.png";
import provoRecLogo from "../../ProvoRecLogo.png";
import lightTheWorldLogo from "../../Light-the-World-Giving-Machines-Logo.png";

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

export const clientReviews = [
  {
    quote:
      "Maddie's work is incredible! She took my vision and completely elevated it with her creativity. I could not have asked for better wedding flowers. She is also so kind and amazing to work with. I absolutely recommend her services!",
    name: "Hailee Solis",
    context: "Wedding floral client"
  },
  {
    quote:
      "Maddie helped me match the exact types and colors of flowers I had envisioned perfectly. She made sure I felt involved in every decision, which I really appreciated. After seeing my venue, she came up with the idea to create a flower chandelier in the center of the dance floor gazebo and decorate every pillar with flowers. It completely transformed the space, and it all turned out beautifully.",
    name: "Morgan Sykes",
    context: "Wedding floral client"
  },
  {
    quote:
      "Maddie was my wedding florist! She was amazing to work with as she helped create my vision while also prioritizing what I wanted! Everything turned out so beautiful, the flowers got so many comments!",
    name: "Ashely Corrigan",
    context: "Wedding floral client"
  }
];

export const portfolioProjects = [
  {
    title: "Corporate",
    subtitle: "Brand & Executive Events",
    image: cwaLogo,
    alt: "CWA logo",
    imageFit: "contain",
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
    image: beesLogo,
    alt: "Salt Lake Bees logo",
    imageFit: "contain",
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
    image: roseGoldLogo,
    alt: "Rose + Gold logo",
    imageFit: "contain",
    summary:
      "Ceremony-to-reception storytelling with floral installations, table design, and seamless transitions throughout the day.",
    href: "/portfolio/weddings",
    classes: "md:col-span-5 aspect-[3/4] md:-mt-20",
    delay: "0s",
    tint: "bg-black/20"
  },
  {
    title: "Floral Business",
    subtitle: "Retail & Studio Collaborations",
    image: pomLogo,
    alt: "Pomegranate Pom logo",
    imageFit: "contain",
    summary:
      "Floral direction for retail businesses, studio collaborations, and creative partnerships.",
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
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80",
    highlights: ["Executive Retreats", "Brand Activations", "Conference Styling"],
    sections: ["ABAM 2026", "CWA Summit 2026"],
    stackMediaSections: true,
    mediaHeading: "The American-Brazilian Aesthetic Meeting",
    mediaSections: [
      {
        sectionDescriptionParagraphs: [
          "Supported on-site execution for the 18th annual American-Brazilian Aesthetic Meeting (ABAM) in Park City, Utah — a multi-day global conference for aesthetic medicine professionals with 100+ expert presentations and international attendees.",
          "Contributed across registration, volunteer coordination, and event setup. On February 6th, managed the full run of show for the Non-Surgical Track: monitored session timing, adjusted for speaker delays and no-shows, and kept the program on schedule in real time."
        ],
        title: "ABAM 2026",
        embedUrl: "https://online.fliphtml5.com/dhqzv/ABAM-26_Exhibitor-Prospectus/",
        description:
          "The non-surgical track I carried out can be found on pages 19-23."
      },
      {
        sectionHeading: "Climbing Wall Association Summit",
        sectionDescriptionParagraphs: [
          "Contributed to planning and execution of the 2026 Climbing Wall Association (CWA) Summit — a premier global conference and trade show for the indoor climbing industry.",
          "Pre-event: Coordinated service crew volunteers, conducted sponsor and exhibitor outreach, developed social media assets, and communicated directly with keynote speakers.",
          "On-site: Organized transportation for 600+ attendees, managed event inquiries, and supported cross-functional communication across stakeholders."
        ],
        title: "CWA Summit 2026",
        mediaCollection: "cwa",
        mediaItemOrder: ["CWA 10", "CWA 3", "CWA 1"]
      },
      {
        image: cwa11,
        alt: "CWA 11"
      }
    ]
  },
  "/portfolio/community": {
    kicker: "Portfolio / Community",
    title: "Community",
    description:
      "Community events, volunteer work, and private gatherings built around intentional guest experience and meaningful connection.",
    image:
      "https://images.unsplash.com/photo-1472653431158-6364773b2a56?auto=format&fit=crop&q=80",
    highlights: ["Fundraisers", "Cultural Events", "Neighborhood Celebrations"],
    mediaHeading: "Experience Highlights",
    stackMediaSections: true,
    mediaSections: [
      {
        title: "Salt Lake Bees — Premium Seating Host",
        logo: beesLogo,
        logoAlt: "Salt Lake Bees logo",
        descriptionParagraphs: [
          "Oversee the guest experience in suites and club-level seating at Utah’s premier Triple-A baseball venue.",
          "· Premium suite and club-level host\n· Personalized service for high-expectation guests\n· Real-time problem-solving in a high-volume, fast-paced environment\n· Cross-team coordination to keep operations seamless"
        ]
      },
      {
        title: "Volunteer Work",
        logos: [
          { src: runtasticLogo, alt: "Runtastic logo" },
          { src: provoRecLogo, alt: "Provo Recreation Center logo" },
          { src: lightTheWorldLogo, alt: "Light the World Giving Machines logo" }
        ],
        bottomMediaCollection: "volunteer",
        bottomMediaTitle: "Volunteer Highlights",
        descriptionParagraphs: [
          "· Runtastic Haunted Half (2025) — Event setup, on-course operations, aid station management\n· Provo Rec Women’s Day (2025) — Food and craft stations; community event support\n· The Giving Machines, Salt Lake City (2024) — Donor engagement and community outreach\n· LDS Mission, Las Vegas & Spain — Two years of cross-cultural service and leadership"
        ]
      },
      {
        title: "Private Event Planner",
        bottomMediaCollection: "wreath",
        bottomMediaAdvanceVideosOnEnd: true,
        bottomMediaTitle: "Wreath Workshop",
        descriptionParagraphs: [
          "Design and execute private events from concept to completion — layout, flow, food, and creative details.",
          "· Wreath Workshop (10 guests) — Partnered with Love Bug Studio; space design, materials coordination, styled charcuterie spread\n· Galentine’s Event (30+ guests) — Charm bracelet station, build-your-own flower bar, themed food\n· Surprise Birthday (20 guests) — Full run of show, themed food and activities, precision timing"
        ]
      }
    ]
  },
  "/portfolio/weddings": {
    kicker: "Portfolio / Weddings",
    title: "Weddings",
    description:
      "From ceremony to reception, each wedding is designed as a cohesive story. Beautiful florals, layered tablescapes, and thoughtful transitions ensure every moment feels intentional and beautifully connected.",
    image:
      "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&q=80",
    highlights: ["Ceremony Design", "Reception Styling", "Floral Installations"],
    mediaHeading: "",
    mediaSections: [
      {
        sectionHeading: "Wedding Coordinator Assistant",
        sectionDescription:
          "During my time with Michelle Leo Events this past summer, I contributed to 7+ events. Featured here is one example of that work.",
        title: "Madison & Charlie",
        video: instagramReelHighlight
      },
      {
        sectionHeading: "Timeline Execution",
        sectionDescription:
          "Below is a sample timeline I assisted in executing, designed by the lead planner at Michelle Leo Events. With over 180 guests, 30+ linens, and thoughtfully curated details throughout, the event came together seamlessly to create unforgettable memories.",
        title: "Annie & Jack",
        image: timeline1,
        alt: "Timeline 1"
      },
      {
        image: timeline2,
        alt: "Timeline 2"
      },
      {
        image: timeline3,
        alt: "Timeline 3"
      },
      {
        sectionHeading: "Wedding Mood Board",
        sectionDescription:
          "Created from the prompt \"The sky is the limit.\" The concept blends modern luxury with extravagance — anchored by a bold floral focal point, with every design element chosen to reinforce the overall vision.",
        title: "Opulent Bloom",
        image: weddingMoodboardJpg,
        alt: "Wedding Moodboard"
      }
    ]
  },
  "/portfolio/floral-business": {
    kicker: "Portfolio / Floral Business",
    title: "Floral Business",
    description:
      "Retail partnerships, studio collaborations, and creative floral direction for businesses and brands.",
    image:
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&q=80",
    highlights: ["Retail Partnerships", "Editorial Production", "Studio Direction"],
    mediaHeading: "Experience Highlights",
    reviews: clientReviews,
    reviewsKicker: "Client Reviews",
    reviewsTitle: "Kind words from wedding clients",
    reviewsDescription:
      "Real feedback from couples who trusted me to bring their floral vision to life with care, detail, and a personalized design process.",
    mediaSections: [
      {
        title: "Bridal Bouquets",
        mediaCollection: "bridalBouquet",
        description:
          "Each bouquet is hand-crafted with intentional color selection, seasonal sourcing, and careful composition. Every stem is chosen with purpose — designed to be carried once and remembered forever."
      },
      {
        title: "Floral Installs",
        mediaCollection: "floralInstall",
        advanceVideosOnEnd: true,
        description:
          "Large-scale installations from concept to completion — personally envisioned, planned, and executed, often leading a team from structural planning through final placement."
      },
      {
        title: "Freelancing Work",
        mediaCollection: "freelancing",
        advanceVideosOnEnd: true,
        description:
          "Collaborated with floral designers across Utah on large-scale, detailed installations. Each project refined my skills and expanded my network within the industry."
      },
      {
        title: "Follow my Instagram",
        image: heroMainPom,
        alt: "Pomegranate Pom Florals Instagram preview",
        linkUrl: "https://www.instagram.com/pomegranatepom.florals/",
        linkLabel: "Visit @pomegranatepom.florals",
        secondaryLinkUrl: "https://pomegranatepomflor.wixsite.com/pomegranate-pom",
        secondaryLinkLabel: "Visit Website",
        description:
          "Explore more floral work, current projects, and visual highlights on the Pomegranate Pom Florals Instagram profile."
      }
    ]
  }
};
