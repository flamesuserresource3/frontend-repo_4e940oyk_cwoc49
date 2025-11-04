import { Rocket, Users, Calendar, BarChart3, Shield } from "lucide-react";

const features = [
  {
    title: "Organization profiles",
    desc: "Give your mentorship program a polished home with mission, tracks, and outcomes.",
    icon: Rocket,
  },
  {
    title: "Mentors & mentees",
    desc: "Invite, onboard, and match participants. Keep roles clear and relationships healthy.",
    icon: Users,
  },
  {
    title: "Sessions & scheduling",
    desc: "Plan cohorts, sessions, and office hours with calendar sync and reminders.",
    icon: Calendar,
  },
  {
    title: "Impact tracking",
    desc: "Track growth signals, goals, and stories to showcase real-world outcomes.",
    icon: BarChart3,
  },
  {
    title: "Privacy & trust",
    desc: "Granular controls so each organization keeps its identity, data, and boundaries.",
    icon: Shield,
  },
];

export default function Features() {
  return (
    <section id="features" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Tools designed for mentorship organizations
          </h2>
          <p className="mt-3 text-base text-white/75">
            Structured where you need it. Flexible where it matters.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ title, desc, icon: Icon }) => (
            <div
              key={title}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600/20 text-indigo-300">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-medium text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/75">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
