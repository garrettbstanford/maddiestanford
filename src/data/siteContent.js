import instagramReelHighlight from "../assets/Instagram_reel_highlight.mp4";
import corporatePic from "../assets/corporate-pic.jpg";
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
      "Sample testimonial: The floral direction felt elevated from the very beginning. Every stem, color choice, and finishing detail worked together beautifully, and the final bouquet looked even better in person than it did on the mood board.",
    name: "Sample Bride",
    context: "Example wedding floral review"
  },
  {
    quote:
      "Sample testimonial: The installation completely changed the atmosphere of the space. It felt polished, intentional, and high-end, and the process stayed organized and calm even with a tight timeline and a lot of moving parts.",
    name: "Sample Venue Partner",
    context: "Example floral installation review"
  },
  {
    quote:
      "Sample testimonial: Maddie brought both creativity and reliability to the project. She was thoughtful with design choices, easy to collaborate with, and consistently attentive to the little details that make an arrangement feel refined.",
    name: "Sample Floral Collaborator",
    context: "Example freelance floral review"
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
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80",
    highlights: ["Executive Retreats", "Brand Activations", "Conference Styling"],
    sections: ["ABAM 2026", "CWA Summit 2026"],
    stackMediaSections: true,
    mediaHeading: "The American-Brazilian Aesthetic Meeting",
    mediaSections: [
      {
        sectionDescriptionParagraphs: [
          "During the 18th annual American-Brazilian Aesthetic Meeting (ABAM) 2026 in Park City, Utah, I supported on-site event execution for a globally recognized conference that brought together leading professionals in aesthetic medicine and surgery. The multi-day event featured over 100 expert presentations, hands-on learning sessions, and international attendees, requiring precise coordination and adaptability to maintain a seamless guest experience. Throughout the event, I contributed across multiple operational areas including registration, volunteer coordination, and event setup, ensuring attendees, speakers, and staff were supported in a fast-paced, high-expectation environment.",
          "On Friday, February 6th, I was entrusted with managing the run of show for the Non-Surgical Track in the White Pine Ballroom. In this role, I actively monitored session timing and adjusted in real time to speaker delays, no-shows, and schedule fluctuations. Balancing these variables required constant communication, quick decision-making, and attention to detail to keep the program aligned with the overall event schedule. Despite ongoing changes, I successfully ensured the track remained on time, contributing to the professionalism and flow of the conference. This experience strengthened my ability to operate under pressure, manage live programming, and support the execution of large-scale corporate events with precision and adaptability."
        ],
        title: "ABAM 2026",
        embedUrl: "https://online.fliphtml5.com/dhqzv/ABAM-26_Exhibitor-Prospectus/",
        description:
          "The non-surgical track I carried out can be found on pages 19-23."
      },
      {
        sectionHeading: "Climbing Wall Association Summit",
        sectionDescriptionParagraphs: [
          "As part of the planning and execution team for the 2026 Climbing Wall Association (CWA) Summit, I contributed to the coordination of one of the indoor climbing industry's premier global conferences and trade shows. The Summit brings together professionals from around the world including gym owners, operators, vendors, and industry leaders for education, networking, and business development. In preparation for the event, I supported a wide range of planning initiatives including coordinating service crew volunteers, conducting outreach to prospective exhibitors and sponsors, and developing social media assets to promote engagement and attendance. I also communicated directly with keynote speakers and assisted in selling the event room block, helping ensure strong participation and a seamless attendee experience leading up to the Summit.",
          "In addition to pre-event planning, I played a key role in managing logistics and attendee experience at scale. I assisted in organizing transportation for over 600 attendees, responded to ongoing event inquiries, and supported cross-functional communication between stakeholders to keep operations aligned. My involvement required strong attention to detail, proactive problem-solving, and the ability to manage multiple moving pieces simultaneously. Contributing across both planning and execution phases gave me valuable experience in large-scale event operations, reinforcing my ability to support complex events from initial coordination through on-site delivery while maintaining a high standard of professionalism and guest experience. The pictures below are from last year's CWA Summit and this year's program."
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
      "Corporate event planning with clear timelines, vendor coordination, budget discipline, and polished guest experiences from kickoff through final execution.",
    image:
      "https://images.unsplash.com/photo-1472653431158-6364773b2a56?auto=format&fit=crop&q=80",
    highlights: ["Fundraisers", "Cultural Events", "Neighborhood Celebrations"],
    mediaHeading: "Experience Highlights",
    mediaLayout: "split-columns",
    mediaSections: [
      {
        title: "Salt Lake Bees - Premium Host",
        desktopColumn: "left",
        logo: beesLogo,
        logoAlt: "Salt Lake Bees logo",
        descriptionParagraphs: [
          "Premium Experience, Built From the Inside Out",
          "Salt Lake Bees — Premium Seating Host\nOn game days, I step into one of the most dynamic environments in Utah sports. The Salt Lake Bees are more than a Triple-A baseball team. They are a live entertainment experience built around energy, detail, and connection. My role lives right at the center of that.",
          "As a Premium Seating Host, I oversee the experience for guests in suites and club-level seating. These are the highest-touch areas in the stadium, where expectations are elevated and every interaction matters. From the moment guests arrive, I am responsible for setting the tone. That means creating a space that feels seamless, personalized, and worth coming back to.",
          "What I’ve learned quickly is that great events are not defined by what goes right. They are defined by how you handle what doesn’t. In a fast-moving environment with thousands of fans, things shift constantly. Orders change. Timing tightens. Needs evolve mid-inning. My role is to stay ahead of that. I read the room, anticipate problems before they surface, and adjust in real time so the guest never feels the friction.",
          "This position has sharpened my ability to operate under pressure while still delivering a premium experience. It has pushed me to think like both an operator and a host. I’m not just managing a section. I’m shaping how people remember their night.",
          "Working with the Bees has given me a front-row seat to what makes live events work at a high level. Coordination across teams. Attention to small details. Consistency in service. It is the kind of environment where execution matters, and where doing the basics exceptionally well creates something that feels elevated.",
          "This role is one piece of a bigger goal for me. I want to build experiences, brands, and environments that people feel. Not just attend. The Bees have given me a place to practice that at scale."
        ]
      },
      {
        title: "Volunteer Work",
        desktopColumn: "right",
        logos: [
          { src: runtasticLogo, alt: "Runtastic logo" },
          { src: provoRecLogo, alt: "Provo Recreation Center logo" },
          { src: lightTheWorldLogo, alt: "Light the World Giving Machines logo" }
        ],
        bottomMediaCollection: "volunteer",
        bottomMediaTitle: "Volunteer Highlights",
        descriptionParagraphs: [
          "Some of the most meaningful experiences I’ve had in events and leadership have come through service. These moments have pushed me to step into roles where the goal isn’t recognition, but impact. Whether it’s a race course before sunrise, a crowded community event, or a one-on-one interaction with someone in need, I’ve learned how to show up, adapt, and contribute where it matters most.",
          "At the Runtastic Haunted Half (2025), I supported both event setup and on-course operations. Early mornings, fast timelines, and constant movement required a strong attention to detail and the ability to work as part of a larger team. While managing an aid station during the race, I focused on keeping runners fueled, encouraged, and moving efficiently. It was a reminder that even small interactions can carry a lot of weight when someone is pushing themselves physically and mentally.",
          "At the Provo Recreation Center Women’s Day Event (2025), I helped run both a food station and a craft station for a high-energy, themed community event. The environment was fun and fast-paced, with a constant flow of participants. I worked to keep things organized, welcoming, and engaging, especially for younger attendees. It reinforced how much thoughtful execution contributes to the overall feel of an event.",
          "In Salt Lake City, I volunteered with The Giving Machines (2024), where the focus shifted from operations to people. My role was to encourage participation and support individuals as they engaged in giving to those in need. It was less about logistics and more about presence. Creating a welcoming environment, answering questions, and helping people feel connected to the impact they were making.",
          "My foundation in service comes from my time as a missionary for The Church of Jesus Christ of Latter-day Saints, where I served in both Las Vegas and Spain. That experience shaped how I approach people, communication, and leadership. Living and working in different cultures taught me how to connect quickly, listen intentionally, and lead with empathy. It also built resilience, discipline, and a strong sense of purpose in the work I take on.",
          "Across all of these experiences, a consistent thread stands out. I enjoy being part of something bigger than myself. I like stepping into environments where I can contribute to a shared goal, elevate the experience for others, and create moments that feel meaningful, even if they’re small."
        ]
      },
      {
        title: "Private Event Planner",
        desktopColumn: "left",
        bottomMediaCollection: "wreath",
        bottomMediaAdvanceVideosOnEnd: true,
        bottomMediaTitle: "Wreath Workshop",
        descriptionParagraphs: [
          "I approach private events as something more than gatherings. For me, they are designed experiences. Every detail, from layout to flow to small creative touches, contributes to how people feel when they walk in and what they remember when they leave.",
          "One of my favorite projects was a live wreath workshop I planned in collaboration with Love Bug Studio. I hosted 10 paying attendees and built the entire experience from the ground up. I designed the layout of the space to feel both functional and elevated, coordinated materials, and created a food experience that matched the aesthetic of the event. I put together a full charcuterie spread with styled sourdough, fruit, and curated snacks to complement the workshop atmosphere. Guests were guided by a professional florist and left with wreaths they created themselves. The goal was to blend hands-on creativity with a premium, welcoming environment, and it came together in a way that felt both polished and personal.",
          "I also planned a Galentine’s event for over 30 attendees that leaned into interaction and personalization. The experience centered around a charm bracelet station and a build-your-own flower bar, paired with themed food that tied everything together visually. The challenge was creating an environment where a larger group could move freely between activities while still feeling intentional and cohesive. I focused on flow, spacing, and energy, making sure each part of the event felt connected rather than crowded.",
          "For a surprise birthday event, I coordinated a 20-guest experience with a tight timeline and high stakes. Every element had to be executed quickly and discreetly to preserve the surprise. I planned themed food, activities, and the full run of show, managing timing down to the minute. The success of the event came down to precision and adaptability. When things needed to shift, I adjusted in real time without losing control of the overall experience.",
          "Across these events, I’ve developed a style that blends structure with creativity. I care about how things look, but more importantly, how they function and feel. My focus is always on creating environments that are thoughtful, engaging, and memorable, where every detail works together to elevate the experience."
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
          "I created this wedding mood board based on the prompt, \"The sky is the limit.\" My vision blends modern luxury with a sense of extravagance. When designing a mood board, I begin with a strong \"wow\" factor and build outward from there. For this concept, the florals served as the focal point. From there, I curated complementary ideas and cohesive design elements until the entire vision came together seamlessly.",
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
      "Editorial shoots, boutique partnerships, and long-form floral programming that help businesses present a distinct botanical point of view.",
    image:
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&q=80",
    highlights: ["Retail Partnerships", "Editorial Production", "Studio Direction"],
    mediaHeading: "Experience Highlights",
    reviews: clientReviews,
    reviewsKicker: "Sample Reviews",
    reviewsTitle: "Example testimonial style",
    reviewsDescription:
      "These are placeholder examples showing how real client, collaborator, and partner testimonials can be presented once approved quotes are available.",
    mediaSections: [
      {
        title: "Bridal Bouquets",
        mediaCollection: "bridalBouquet",
        description:
          "Every bridal bouquet begins long before the first stem is placed. It starts with intentional color selection, thoughtful sourcing, often chasing blooms across seasons, and a deep understanding of texture and form. Each flower is chosen with purpose, whether freshly in season or carefully procured from afar. The final step is a delicate composition, where every element is hand-placed to create a one-of-a-kind bouquet designed to be carried once and remembered forever. I hand-crafted each of these bouquets."
      },
      {
        title: "Floral Installs",
        mediaCollection: "floralInstall",
        advanceVideosOnEnd: true,
        description:
          " These large-scale installations represent my work from concept to completion. Each design was personally envisioned, planned, and executed by me; often leading a team to bring the full installation to life. From structural planning to final placement, every detail reflects my direction and hands-on approach."
      },
      {
        title: "Freelancing Work",
        mediaCollection: "freelancing",
        advanceVideosOnEnd: true,
        description:
          "Through freelancing, I’ve had the opportunity to collaborate with an incredible range of floral designers, contributing to large-scale and highly detailed installations. While supporting their creative direction, I’ve refined my skills, expanded my perspective, and built meaningful connections within the floral industry. Each project has played a role in shaping both my craft and my network."
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
