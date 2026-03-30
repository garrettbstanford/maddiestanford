import { BriefcaseBusiness, GraduationCap, HandHeart, Sparkles } from "lucide-react";

const jobs = [
  {
    title: "Premium Host",
    company: "The Salt Lake Bees, Larry H. Miller Sports + Entertainment",
    period: "Mar 2026 - Present",
    descriptionBullets: [
      "Oversee the guest experience in suites and club-level seating.",
      "Anticipate guest needs and adapt quickly in a live event setting.",
      "Support smooth game-day operations and high hospitality standards."
    ]
  },
  {
    title: "Corporate Event Planner",
    company: "SDE Events",
    period: "Jan 2026 - Present",
    descriptionBullets: [
      "Coordinate trade shows and corporate conferences for 1,200+ attendees.",
      "Manage logistics and client communications across multiple events.",
      "Handle business challenges and support on-site setup and client relations."
    ]
  },
  {
    title: "Contract Wedding & Event Florist",
    company: "Lily & Iris; Pomegranate Pom Florals",
    period: "Oct 2024 - Present",
    descriptionBullets: [
      "Collaborate with clients and coordinators to define floral design needs.",
      "Design and produce floral arrangements for 15+ weddings and corporate events.",
      "Oversee event-day setup and teardown for 20+ events with a focus on design accuracy."
    ]
  },
  {
    title: "Wedding Coordinator Assistant",
    company: "Michelle Leo Events",
    period: "May 2025 - Dec 2025",
    descriptionBullets: [
      "Assist with coordinating luxury weddings and events with budgets up to $400,000.",
      "Manage vendor communication, timelines, and planning materials for 5+ weddings.",
      "Support on-site execution for 7+ events with a focus on smooth delivery."
    ]
  },
  {
    title: "Hospitality & Training Lead",
    company: "Chick-fil-A",
    period: "Feb 2018 - Aug 2020",
    descriptionBullets: [
      "Held a leadership role overseeing 20 employees.",
      "Trained 15+ team members in a fast-paced hospitality environment.",
      "Received an award for Excellence in Leadership and Kindness."
    ]
  }
];

const planningSkills = [
  "Time Management",
  "Problem Solving",
  "Organization",
  "Contract Negotiation"
];

const interpersonalSkills = [
  "Conversational Spanish Proficiency",
  "Exemplary Customer Service",
  "Stress Management",
  "Emotional Intelligence"
];

const technicalTools = ["Canva", "Google Suite", "Excel", "Google Sheets", "Social Media", "Asana", "Monday", "Slack"];

const volunteerWork = [
  "Provo Community Center",
  "Runtastic Events",
  "LDS Mission",
  "The Quarry Events",
  "The Giving Machine"
];

const education = {
  degree: "Bachelor of Science in Event Management",
  school: "Utah Valley University",
  period: "April 2026",
  honors: "Summa cum laude"
};

export default function ResumeSection() {
  return (
    <section className="bg-stone-50 pb-24 pt-36 md:pb-28 md:pt-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal translate-y-8 text-center opacity-0">
          <p className="text-xs uppercase tracking-[0.22em] text-pomegranate md:text-sm">Resume</p>
          <h1 className="mt-4 font-serif text-4xl text-stone-900 md:text-6xl">Maddie Stanford</h1>
          <p className="mt-4 text-sm uppercase tracking-[0.18em] text-stone-500 md:text-base">Event Professional</p>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-stone-600 md:text-xl">
            Detail-oriented, people-first event professional with experience supporting luxury weddings, corporate events,
            floral design, and high-touch guest experiences.
          </p>
        </div>

        <div className="mt-16">
          <div className="reveal mb-8 flex translate-y-8 items-center gap-3 opacity-0">
            <BriefcaseBusiness size={18} className="text-pomegranate" />
            <h2 className="text-sm uppercase tracking-[0.2em] text-stone-800 md:text-base">Work Experience</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {jobs.map((job, index) => (
              <article
                key={`${job.title}-${job.company}`}
                className="reveal translate-y-8 border border-stone-200 bg-white p-6 opacity-0"
                style={{ transitionDelay: `${index * 0.08}s` }}
              >
                <p className="text-xs uppercase tracking-[0.2em] text-pomegranate">{job.period}</p>
                <h3 className="mt-3 font-serif text-2xl text-stone-900">{job.title}</h3>
                <p className="mt-1 text-sm uppercase tracking-[0.14em] text-stone-500">{job.company}</p>
                {job.descriptionBullets ? (
                  <ul className="mt-4 space-y-3 pl-5 text-sm leading-relaxed text-stone-600">
                    {job.descriptionBullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <div className="space-y-10">
            <div>
              <div className="reveal mb-6 flex translate-y-8 items-center gap-3 opacity-0" style={{ transitionDelay: "0.08s" }}>
                <Sparkles size={18} className="text-pomegranate" />
                <h2 className="text-sm uppercase tracking-[0.2em] text-stone-800 md:text-base">Event Planning Skills</h2>
              </div>

              <div className="reveal flex translate-y-8 flex-wrap gap-3 opacity-0" style={{ transitionDelay: "0.14s" }}>
                {planningSkills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-stone-300 bg-white px-4 py-2 text-xs uppercase tracking-[0.12em] text-stone-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <div className="reveal mb-6 flex translate-y-8 items-center gap-3 opacity-0" style={{ transitionDelay: "0.12s" }}>
                <Sparkles size={18} className="text-pomegranate" />
                <h2 className="text-sm uppercase tracking-[0.2em] text-stone-800 md:text-base">Interpersonal Skills</h2>
              </div>

              <div className="reveal flex translate-y-8 flex-wrap gap-3 opacity-0" style={{ transitionDelay: "0.18s" }}>
                {interpersonalSkills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-stone-300 bg-white px-4 py-2 text-xs uppercase tracking-[0.12em] text-stone-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <div className="reveal mb-6 flex translate-y-8 items-center gap-3 opacity-0" style={{ transitionDelay: "0.16s" }}>
                <Sparkles size={18} className="text-pomegranate" />
                <h2 className="text-sm uppercase tracking-[0.2em] text-stone-800 md:text-base">Technical Tools</h2>
              </div>

              <div className="reveal flex translate-y-8 flex-wrap gap-3 opacity-0" style={{ transitionDelay: "0.22s" }}>
                {technicalTools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-stone-300 bg-white px-4 py-2 text-xs uppercase tracking-[0.12em] text-stone-700"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-10">
            <div>
              <div className="reveal mb-6 flex translate-y-8 items-center gap-3 opacity-0" style={{ transitionDelay: "0.1s" }}>
                <GraduationCap size={18} className="text-pomegranate" />
                <h2 className="text-sm uppercase tracking-[0.2em] text-stone-800 md:text-base">Education</h2>
              </div>

              <article className="reveal translate-y-8 border border-stone-200 bg-white p-6 opacity-0" style={{ transitionDelay: "0.16s" }}>
                <h3 className="font-serif text-2xl text-stone-900">{education.degree}</h3>
                <p className="mt-2 text-sm uppercase tracking-[0.14em] text-stone-500">{education.school}</p>
                <p className="mt-4 text-base leading-relaxed text-stone-600">Expected graduation: {education.period}</p>
                <p className="mt-2 text-base leading-relaxed text-stone-600">Graduating {education.honors}</p>
              </article>
            </div>

            <div>
              <div className="reveal mb-6 flex translate-y-8 items-center gap-3 opacity-0" style={{ transitionDelay: "0.14s" }}>
                <HandHeart size={18} className="text-pomegranate" />
                <h2 className="text-sm uppercase tracking-[0.2em] text-stone-800 md:text-base">Volunteer Work</h2>
              </div>

              <div className="reveal space-y-4 translate-y-8 opacity-0" style={{ transitionDelay: "0.2s" }}>
                {volunteerWork.map((item) => (
                  <article key={item} className="border border-stone-200 bg-white p-5">
                    <h3 className="font-serif text-xl text-stone-900">{item}</h3>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
