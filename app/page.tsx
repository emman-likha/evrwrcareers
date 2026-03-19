import Navbar from "@/components/Navbar";
import Mission from "@/components/Mission";
import FeaturedJobs from "@/components/FeaturedJobs";
import WhyWork from "@/components/WhyWork";
import Culture from "@/components/Culture";
import Departments from "@/components/Departments";
import HiringProcess from "@/components/HiringProcess";
import Benefits from "@/components/Benefits";
import TalentPool from "@/components/TalentPool";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="grain-overlay">
      <Navbar />

      {/* ── 01. Hero ── */}
      <section className="min-h-screen flex items-center justify-center relative px-8 lg:px-12 py-24">
        {/* Geometric accents */}
        <div className="absolute top-[12%] left-[8%] w-20 h-20 lg:w-28 lg:h-28 rounded-full border-[3px] border-accent-yellow opacity-60 animate-spin-slow" />
        <div className="absolute top-[18%] right-[12%] w-5 h-5 lg:w-7 lg:h-7 bg-accent-pink rotate-45 animate-float" />
        <div className="absolute bottom-[20%] left-[15%] w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-accent-magenta" />
        <div className="absolute bottom-[15%] right-[8%] w-16 h-16 lg:w-24 lg:h-24 border-[3px] border-primary/30 rotate-12 animate-float" />
        <div className="absolute top-[45%] left-[4%] w-12 h-[3px] bg-accent-yellow/50 -rotate-45" />
        <div className="absolute bottom-[30%] right-[20%] w-2.5 h-2.5 rounded-full bg-accent-yellow" />
        <div className="absolute top-0 right-[25%] w-[1px] h-[40%] bg-foreground/5" />
        <div className="absolute bottom-0 left-[30%] w-[1px] h-[30%] bg-foreground/5" />

        {/* Section number */}
        <span className="section-number">01</span>

        {/* Hero text */}
        <div className="text-center max-w-5xl relative z-10">
          <div className="overflow-hidden">
            <h1 className="text-[clamp(2.8rem,8vw,7.5rem)] font-bold leading-[0.9] tracking-tight text-foreground uppercase">
              Find Your
            </h1>
          </div>
          <div className="overflow-hidden">
            <h1 className="text-[clamp(2.8rem,8vw,7.5rem)] font-bold leading-[0.9] tracking-tight uppercase">
              <span className="text-foreground">Next </span>
              <span className="text-accent-magenta italic">Chapter</span>
            </h1>
          </div>
          <div className="overflow-hidden mt-2">
            <p className="text-[clamp(0.65rem,1.2vw,1rem)] uppercase tracking-[0.35em] text-foreground/40 font-medium">
              Careers that shape the future
            </p>
          </div>

          <div className="mt-8 lg:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#careers"
              className="group relative inline-flex items-center gap-3 bg-primary text-background px-8 py-3.5 text-sm font-bold uppercase tracking-[0.2em] hover:bg-foreground transition-colors duration-300 overflow-hidden"
            >
              <span className="relative z-10">Explore Roles</span>
              <svg
                className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                />
              </svg>
            </a>
            <a
              href="#culture"
              className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-foreground/50 hover:text-foreground transition-colors duration-300 border-b border-foreground/20 hover:border-foreground/50 pb-1"
            >
              Our Culture
            </a>
          </div>
        </div>
      </section>

      {/* ── 02. Mission & Vision ── */}
      <Mission />

      {/* ── 03. Featured Jobs ── */}
      <FeaturedJobs />

      {/* ── 04. Why Work at EVRWR ── */}
      <WhyWork />

      {/* ── 05. Culture / Team ── */}
      <Culture />

      {/* ── 06. Departments ── */}
      <Departments />

      {/* ── 07. Hiring Process ── */}
      <HiringProcess />

      {/* ── 08. Benefits & Perks ── */}
      <Benefits />

      {/* ── 09. Talent Pool CTA ── */}
      <TalentPool />

      <Footer />
    </div>
  );
}
