import { Sparkles, ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section id="connect" className="relative">
      <div className="mx-auto max-w-5xl px-6 py-16 text-center lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-700/20 via-violet-700/10 to-blue-700/20 p-10 backdrop-blur">
          <div className="mx-auto max-w-2xl">
            <div className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-xl bg-white/10">
              <Sparkles className="h-6 w-6 text-yellow-300" />
            </div>
            <h3 className="text-3xl font-semibold text-white">
              Be part of shaping Menteen
            </h3>
            <p className="mt-3 text-white/80">
              We’re co-designing this with mentorship organizations, mentors, and community builders.
              Share your vision, use cases, or interest in early access — we’d love to connect.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="mailto:hello@menteen.app?subject=Menteen%20—%20Let%27s%20Connect"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-gray-900 shadow hover:opacity-90 transition"
              >
                Email the team
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/10 px-5 py-3 text-white backdrop-blur hover:bg-white/20 transition"
              >
                View the product overview
              </a>
            </div>
            <p className="mt-4 text-xs text-white/60">
              Prefer a quick call? Tell us your timezone in the email and we’ll send a link.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
