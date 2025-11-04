import Hero from "./components/Hero";
import Features from "./components/Features";
import Ecosystem from "./components/Ecosystem";
import CTA from "./components/CTA";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b0b1a] via-[#0d0b1f] to-[#0b0b1a]">
      <header className="sticky top-0 z-20 w-full border-b border-white/10 bg-black/40 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-2 text-white">
            <span className="grid h-8 w-8 place-items-center rounded-md bg-indigo-600 text-white font-bold">M</span>
            <span className="text-lg font-medium">Menteen</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-white/80 sm:flex">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#connect" className="hover:text-white transition">Connect</a>
            <a
              href="#connect"
              className="rounded-lg bg-white/10 px-3 py-1.5 text-white hover:bg-white/20 transition"
            >
              Get involved
            </a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Features />
        <Ecosystem />
        <CTA />
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-white/60 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p>© {new Date().getFullYear()} Menteen. Built to empower mentorship.</p>
            <div className="flex items-center gap-4">
              <a href="#features" className="hover:text-white">Vision</a>
              <a href="#connect" className="hover:text-white">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
