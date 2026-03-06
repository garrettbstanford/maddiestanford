import { BriefcaseBusiness, HandHeart, Sparkles } from "lucide-react";

const jobs = [
  {
    title: "Event Production Coordinator",
    company: "Pomegranate Pom Florals",
    period: "2023 - Present",
    description:
      "Lead event timelines, vendor coordination, and on-site execution for corporate and private events while maintaining design quality and budget control."
  },
  {
    title: "Floral Designer",
    company: "Independent & Studio Collaborations",
    period: "2021 - Present",
    description:
      "Design floral installations, tablescapes, and personal florals with a focus on seasonal sourcing, color story, and spatial impact."
  },
  {
    title: "Community Program Event Lead",
    company: "Local Community Organizations",
    period: "2020 - 2023",
    description:
      "Planned and produced markets, fundraisers, and neighborhood programs with strong attendance, clear logistics, and collaborative team workflows."
  },
  {
    title: "Operations & Client Experience Associate",
    company: "Hospitality + Events",
    period: "2018 - 2020",
    description:
      "Managed client communications, run-of-show documents, and day-of support to deliver smooth guest experiences from planning through closeout."
  }
];

const skills = [
  "Event Production",
  "Floral Design",
  "Timeline Management",
  "Vendor Coordination",
  "Client Communication",
  "Budget Tracking",
  "Creative Direction",
  "On-Site Logistics",
  "Presentation Decks",
  "Monday.com",
  "Team Leadership",
  "Problem Solving"
];

const volunteerWork = [
  {
    role: "Volunteer Event Coordinator",
    organization: "Neighborhood Food Drive",
    details: "Organized collection events, volunteer schedules, and distribution logistics for seasonal donation drives."
  },
  {
    role: "Floral Donation Lead",
    organization: "Community Celebration Program",
    details: "Created floral arrangements for community recognition events and nonprofit fundraisers."
  },
  {
    role: "Mentor",
    organization: "Youth Creative Workshops",
    details: "Supported students with event styling basics, teamwork, and confidence-building through hands-on projects."
  }
];

export default function ResumeSection() {
  return (
    <section className="bg-stone-50 pb-24 pt-36 md:pb-28 md:pt-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal translate-y-8 text-center opacity-0">
          <p className="text-xs uppercase tracking-[0.22em] text-pomegranate md:text-sm">Resume</p>
          <h1 className="mt-4 font-serif text-4xl text-stone-900 md:text-6xl">Experience & Strengths</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-stone-600 md:text-xl">
            A snapshot of professional experience, core skills, and volunteer work.
          </p>
        </div>

        <div className="mt-16">
          <div className="reveal mb-8 flex translate-y-8 items-center gap-3 opacity-0">
            <BriefcaseBusiness size={18} className="text-pomegranate" />
            <h2 className="text-sm uppercase tracking-[0.2em] text-stone-800 md:text-base">Professional Experience</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {jobs.map((job, index) => (
              <article
                key={`${job.title}-${job.company}`}
                className="reveal border border-stone-200 bg-white p-6 translate-y-8 opacity-0"
                style={{ transitionDelay: `${index * 0.08}s` }}
              >
                <p className="text-xs uppercase tracking-[0.2em] text-pomegranate">{job.period}</p>
                <h3 className="mt-3 font-serif text-2xl text-stone-900">{job.title}</h3>
                <p className="mt-1 text-sm uppercase tracking-[0.14em] text-stone-500">{job.company}</p>
                <p className="mt-4 leading-relaxed text-stone-600">{job.description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <div>
            <div className="reveal mb-6 flex translate-y-8 items-center gap-3 opacity-0" style={{ transitionDelay: "0.08s" }}>
              <Sparkles size={18} className="text-pomegranate" />
              <h2 className="text-sm uppercase tracking-[0.2em] text-stone-800 md:text-base">Skills</h2>
            </div>

            <div className="reveal flex translate-y-8 flex-wrap gap-3 opacity-0" style={{ transitionDelay: "0.14s" }}>
              {skills.map((skill) => (
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
            <div className="reveal mb-6 flex translate-y-8 items-center gap-3 opacity-0" style={{ transitionDelay: "0.1s" }}>
              <HandHeart size={18} className="text-pomegranate" />
              <h2 className="text-sm uppercase tracking-[0.2em] text-stone-800 md:text-base">Volunteer Work</h2>
            </div>

            <div className="reveal space-y-4 translate-y-8 opacity-0" style={{ transitionDelay: "0.16s" }}>
              {volunteerWork.map((item) => (
                <article key={`${item.role}-${item.organization}`} className="border border-stone-200 bg-white p-5">
                  <h3 className="font-serif text-xl text-stone-900">{item.role}</h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.16em] text-stone-500">{item.organization}</p>
                  <p className="mt-3 text-sm leading-relaxed text-stone-600">{item.details}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
