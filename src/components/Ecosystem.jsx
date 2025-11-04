import { Globe, Building2, ArrowRight } from "lucide-react";

export default function Ecosystem() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              A unified ecosystem — without losing identity
            </h2>
            <p className="mt-4 text-white/80">
              Menteen gives mentorship organizations a shared space to be discovered,
              collaborate, and learn from each other — while keeping each program’s
              unique brand, purpose, and community intact.
            </p>
            <ul className="mt-6 space-y-3 text-white/80">
              <li className="flex items-start gap-3">
                <span className="mt-1 rounded-md bg-white/10 p-1.5 text-indigo-300">
                  <Building2 className="h-4 w-4" />
                </span>
                Dedicated spaces for each organization with customizable pages and permissions.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 rounded-md bg-white/10 p-1.5 text-indigo-300">
                  <Globe className="h-4 w-4" />
                </span>
                Discovery across the ecosystem so mentors, mentees, and partners can find you.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 rounded-md bg-white/10 p-1.5 text-indigo-300">
                  <ArrowRight className="h-4 w-4" />
                </span>
                Lightweight collaboration tools to share sessions, resources, and impact.
              </li>
            </ul>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-700/30 via-violet-700/20 to-blue-700/30 p-6 shadow-2xl">
              <div className="rounded-2xl bg-black/30 p-6">
                <div className="mb-6 flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-indigo-600/30 text-indigo-300">
                    <Globe className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-white">The Mentorship Network</p>
                    <p className="text-sm text-white/70">Visibility. Collaboration. Scale.</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                  {[
                    "STEM Scholars",
                    "Design for All",
                    "Leaders Lab",
                    "CodeBridge",
                    "Founders Guild",
                    "Career Compass",
                  ].map((org) => (
                    <div
                      key={org}
                      className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-white/80"
                    >
                      {org}
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-xs text-white/60">
                  Example organizations shown for illustration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
