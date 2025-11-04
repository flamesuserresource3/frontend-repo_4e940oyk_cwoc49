import { Rocket, Users, Sparkles, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/30 via-violet-900/20 to-background pointer-events-none" />
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-yellow-300" />
              A digital home for mentorship
            </span>
            <h1 className="mt-6 text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
              Menteen — the ecosystem where mentorship organizations thrive
            </h1>
            <p className="mt-6 text-base leading-relaxed text-white/80 sm:text-lg">
              Most mentorship initiatives are scattered across social feeds and chat groups. Menteen brings them together in one place — giving each program the tools to grow, collaborate, and make impact at scale.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 text-white shadow hover:bg-indigo-500 transition"
              >
                <Rocket className="h-4 w-4" />
                Explore the vision
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#connect"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/10 px-5 py-3 text-white backdrop-blur hover:bg-white/20 transition"
              >
                <Users className="h-4 w-4" />
                For organizations
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="relative mx-auto aspect-square w-full max-w-md rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-600/30 via-violet-600/20 to-blue-600/30 p-6 shadow-2xl backdrop-blur lg:max-w-lg">
              <div className="grid h-full w-full place-items-center rounded-2xl bg-black/20">
                <div className="text-center">
                  <div className="mx-auto mb-4 h-14 w-14 rounded-xl bg-white/10 grid place-items-center">
                    <Sparkles className="h-7 w-7 text-yellow-300" />
                  </div>
                  <p className="text-2xl font-medium text-white">Built for impact</p>
                  <p className="mt-2 text-sm text-white/70">
                    Register programs, manage mentors & mentees, host sessions, and
                    measure outcomes — all under your brand.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
