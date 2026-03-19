export default function Hero() {
  return (
    <section
      data-section-theme="light"
      className="min-h-screen relative flex flex-col justify-between overflow-hidden"
    >
      {/* ── Watermark ── */}
      <div className="hero-watermark top-[15%] -left-[5%]">EVRWR</div>
      <div className="hero-watermark bottom-[5%] -right-[3%] opacity-[0.02]">
        CAREERS
      </div>

      {/* ── Geometric accents ── */}
      <div className="absolute top-[8%] right-[6%] w-24 h-24 lg:w-36 lg:h-36 rounded-full border-[2px] border-accent-yellow/40 animate-spin-slow hero-scale-in hero-scale-in-1" />
      <div className="absolute top-[22%] left-[5%] w-4 h-4 lg:w-6 lg:h-6 bg-accent-pink rotate-45 animate-float hero-scale-in hero-scale-in-2" />
      <div className="absolute bottom-[25%] right-[15%] w-3 h-3 rounded-full bg-accent-magenta/60 hero-scale-in hero-scale-in-3" />
      <div className="absolute bottom-[18%] left-[8%] w-20 h-20 lg:w-28 lg:h-28 border-[2px] border-primary/15 rotate-12 animate-float-delayed" />
      <div className="absolute top-[50%] right-[3%] w-[1px] h-[25%] bg-foreground/5" />
      <div className="absolute top-[10%] left-[35%] w-[1px] h-[20%] bg-foreground/5" />

      {/* ── Main content ── */}
      <div className="flex-1 flex items-center px-8 lg:px-12 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left column — headline + CTAs */}
          <div className="lg:col-span-7 relative z-10">
            {/* Eyebrow */}
            <div className="hero-fade-up hero-fade-up-1 flex items-center gap-3 mb-6">
              <div className="w-10 h-[2px] bg-primary hero-draw-line" />
              <p className="text-[0.65rem] uppercase tracking-[0.4em] text-foreground/35 font-medium">
                We&apos;re hiring across the globe
              </p>
            </div>

            {/* Headline */}
            <div className="hero-fade-up hero-fade-up-2">
              <h1 className="text-[clamp(3rem,9vw,8rem)] font-bold leading-[0.88] tracking-tight text-foreground uppercase">
                Find
              </h1>
            </div>
            <div className="hero-fade-up hero-fade-up-3">
              <h1 className="text-[clamp(3rem,9vw,8rem)] font-bold leading-[0.88] tracking-tight uppercase">
                <span className="text-foreground">Your </span>
                <span className="text-accent-magenta italic relative">
                  Next
                  {/* Underline accent */}
                  <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-accent-yellow hero-draw-line" />
                </span>
              </h1>
            </div>
            <div className="hero-fade-up hero-fade-up-4">
              <h1 className="text-[clamp(3rem,9vw,8rem)] font-bold leading-[0.88] tracking-tight text-foreground uppercase">
                Chapter
                <span className="text-accent-yellow">.</span>
              </h1>
            </div>

            {/* Subtext */}
            <div className="hero-fade-up hero-fade-up-5 mt-6 max-w-md">
              <p className="text-sm lg:text-base leading-relaxed text-foreground/40">
                Join a team that&apos;s reshaping how the world finds meaningful
                work. Bold roles. Real impact. Your move.
              </p>
            </div>

            {/* CTAs */}
            <div className="hero-fade-up hero-fade-up-6 mt-8 flex flex-col sm:flex-row items-start gap-4">
              <a
                href="#careers"
                className="group relative inline-flex items-center gap-3 bg-primary text-background px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] hover:bg-foreground transition-colors duration-300"
              >
                Explore Roles
                <svg
                  className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300"
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
                className="group inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-foreground/50 hover:text-foreground transition-colors duration-300 py-4"
              >
                <span className="w-6 h-[1px] bg-foreground/30 group-hover:w-10 group-hover:bg-foreground transition-all duration-300" />
                Our Culture
              </a>
            </div>
          </div>

          {/* Right column — portfolio showcase */}
          <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-end">
            <div className="hero-fade-up hero-fade-up-5 showcase-card bg-foreground w-full relative z-10">

              {/* ── Floating concept badge ── */}
              <div className="concept-badge absolute -top-4 left-1/2 z-20 bg-accent-yellow px-4 py-1.5">
                <p className="text-[0.6rem] font-bold uppercase tracking-[0.3em] text-foreground whitespace-nowrap">
                  Concept Only
                </p>
              </div>

              {/* ── Mock browser chrome ── */}
              <div className="flex items-center gap-3 px-5 py-3.5 border-b border-background/8">
                <div className="flex gap-2">
                  <span className="browser-dot bg-accent-magenta/70" />
                  <span className="browser-dot bg-accent-yellow/70" />
                  <span className="browser-dot bg-accent-pink/70" />
                </div>
                <div className="flex-1 bg-background/8 rounded-sm px-3 py-1.5 flex items-center">
                  <svg className="w-3 h-3 text-background/20 mr-1.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                  <span className="text-[0.6rem] text-background/35 font-mono tracking-wide">
                    evrwrcareers.com
                  </span>
                  <span className="w-[1px] h-3 bg-accent-yellow ml-0.5 blink-cursor" />
                </div>
                <div className="hidden sm:flex gap-1.5">
                  <div className="w-4 h-4 border border-background/10 rounded-sm flex items-center justify-center">
                    <div className="w-2 h-[1px] bg-background/25" />
                  </div>
                  <div className="w-4 h-4 border border-background/10 rounded-sm flex items-center justify-center">
                    <div className="w-1.5 h-1.5 border border-background/25 rounded-sm" />
                  </div>
                </div>
              </div>

              {/* ── Mini site preview ── */}
              <div className="px-5 pt-5 pb-4">
                {/* Mock navbar */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <div className="w-14 h-1.5 bg-background/25 rounded-full" />
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-1 bg-background/12 rounded-full" />
                    <div className="w-7 h-1 bg-background/12 rounded-full" />
                    <div className="w-7 h-1 bg-background/12 rounded-full" />
                    <div className="w-12 h-3 bg-primary/40 rounded-sm" />
                  </div>
                </div>

                {/* Mock hero area */}
                <div className="mb-4 py-5 bg-background/4 rounded-sm px-4 flex items-center gap-5">
                  <div className="flex-1 space-y-2">
                    <div className="w-[90%] h-2.5 bg-background/20 rounded-full preview-block-animate" />
                    <div className="w-[70%] h-2.5 bg-accent-magenta/25 rounded-full preview-block-animate-2" />
                    <div className="w-[50%] h-2.5 bg-background/15 rounded-full preview-block-animate-3" />
                    <div className="w-[35%] h-1 bg-background/8 rounded-full mt-3" />
                    <div className="flex gap-2 mt-3">
                      <div className="w-14 h-3.5 bg-primary/30 rounded-sm" />
                      <div className="w-10 h-3.5 border border-background/10 rounded-sm" />
                    </div>
                  </div>
                  <div className="w-16 h-20 bg-background/6 border border-background/8 flex flex-col items-center justify-center gap-1.5 shrink-0">
                    <div className="w-6 h-6 bg-accent-yellow/20 rotate-45" />
                    <div className="w-8 h-1 bg-background/10 rounded-full" />
                    <div className="w-6 h-1 bg-background/8 rounded-full" />
                  </div>
                </div>

                {/* Mock dark section */}
                <div className="bg-primary/15 rounded-sm p-3 mb-3">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-1.5 bg-background/20 rounded-full" />
                    <div className="w-14 h-1.5 bg-accent-yellow/25 rounded-full" />
                  </div>
                  <div className="grid grid-cols-3 gap-1.5">
                    <div className="h-10 bg-background/6 rounded-sm" />
                    <div className="h-10 bg-background/6 rounded-sm" />
                    <div className="h-10 bg-background/6 rounded-sm" />
                  </div>
                </div>

                {/* Mock cards row */}
                <div className="grid grid-cols-4 gap-1.5 mb-3">
                  <div className="h-8 bg-background/6 rounded-sm border-t-2 border-primary/20" />
                  <div className="h-8 bg-background/6 rounded-sm border-t-2 border-accent-magenta/20" />
                  <div className="h-8 bg-background/6 rounded-sm border-t-2 border-accent-yellow/20" />
                  <div className="h-8 bg-background/6 rounded-sm border-t-2 border-accent-pink/20" />
                </div>

                {/* Mock ticker */}
                <div className="h-1.5 bg-background/8 rounded-full overflow-hidden">
                  <div className="h-full w-1/2 bg-primary/15 rounded-full animate-marquee" />
                </div>
              </div>

              {/* ── Divider with label ── */}
              <div className="flex items-center gap-4 px-5">
                <div className="flex-1 h-[1px] bg-background/10" />
                <p className="text-[0.55rem] uppercase tracking-[0.3em] text-background/25 font-medium shrink-0">
                  Portfolio Piece · 2026
                </p>
                <div className="flex-1 h-[1px] bg-background/10" />
              </div>

              {/* ── Project metadata ── */}
              <div className="px-5 pt-4 pb-4 grid grid-cols-4 gap-3">
                <div>
                  <p className="text-[0.5rem] uppercase tracking-[0.25em] text-background/25 font-medium">
                    Type
                  </p>
                  <p className="text-sm font-bold text-background/75 mt-1">
                    Concept
                  </p>
                </div>
                <div>
                  <p className="text-[0.5rem] uppercase tracking-[0.25em] text-background/25 font-medium">
                    Stack
                  </p>
                  <p className="text-sm font-bold text-background/75 mt-1">
                    Next.js
                  </p>
                </div>
                <div>
                  <p className="text-[0.5rem] uppercase tracking-[0.25em] text-background/25 font-medium">
                    Style
                  </p>
                  <p className="text-sm font-bold text-background/75 mt-1">
                    Tailwind
                  </p>
                </div>
                <div>
                  <p className="text-[0.5rem] uppercase tracking-[0.25em] text-background/25 font-medium">
                    Sections
                  </p>
                  <p className="text-sm font-bold text-accent-yellow mt-1">
                    9+
                  </p>
                </div>
              </div>

              {/* ── Description ── */}
              <div className="px-5 pb-5">
                <p className="text-xs leading-relaxed text-background/40">
                  A fully functional simulation of a careers platform — designed
                  &amp; engineered from scratch to showcase frontend craft.
                  Every section, interaction, and pixel is intentional.
                </p>
              </div>

              {/* ── CTA bar ── */}
              <a
                href="mailto:your@email.com"
                className="showcase-cta group flex items-center justify-between px-5 py-4 bg-accent-yellow/10 border-t border-background/8 transition-colors duration-300 hover:bg-accent-yellow/20"
              >
                <div>
                  <p className="text-xs font-bold text-background uppercase tracking-[0.15em]">
                    Want one? Let&apos;s talk
                  </p>
                  <p className="text-[0.6rem] text-accent-pink mt-1 group-hover:text-accent-yellow transition-colors duration-300">
                    your@email.com
                  </p>
                </div>
                <div className="w-10 h-10 bg-accent-yellow flex items-center justify-center group-hover:bg-background transition-colors duration-300">
                  <svg
                    className="w-4 h-4 text-foreground transition-transform duration-300 group-hover:rotate-45"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </div>
              </a>

              {/* ── Diagonal stripe corner ── */}
              <div className="absolute bottom-0 right-0 w-16 h-16 stripe-pattern opacity-10 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
