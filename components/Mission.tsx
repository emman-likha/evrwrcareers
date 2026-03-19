const evrwrMeaning = [
  { letter: "E", word: "Empower" },
  { letter: "V", word: "Venture" },
  { letter: "R", word: "Redefine" },
  { letter: "W", word: "Win" },
  { letter: "R", word: "Rise" },
];

export default function Mission() {
  return (
    <section id="about" data-section-theme="light" className="relative py-24 lg:py-32 px-8 lg:px-12 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <p className="text-[0.65rem] uppercase tracking-[0.4em] text-foreground/30 font-medium mb-4">
          Our Mission
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — Mission statement */}
          <div>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[1.05] tracking-tight text-foreground uppercase mb-6">
              We connect bold talent
              <br />
              with <span className="text-accent-magenta italic">bolder</span>{" "}
              opportunities.
            </h2>
            <p className="text-sm lg:text-base leading-relaxed text-foreground/50 max-w-md">
              Through innovation, equity, and relentless ambition, we&apos;re
              reshaping how the world discovers meaningful work — building bridges
              between potential and purpose across every industry and continent.
            </p>

            {/* Decorative line */}
            <div className="mt-8 flex items-center gap-3">
              <div className="w-12 h-[2px] bg-primary" />
              <p className="text-xs uppercase tracking-[0.3em] text-accent-magenta font-medium">
                Global reach. Local impact.
              </p>
            </div>
          </div>

          {/* Right — EVRWR acronym */}
          <div className="relative">
            <div className="bg-foreground p-8 lg:p-10">
              <p className="text-background/30 text-[0.6rem] uppercase tracking-[0.4em] mb-6 font-medium">
                What EVRWR stands for
              </p>
              <div className="space-y-4">
                {evrwrMeaning.map((item, i) => (
                  <div key={i} className="flex items-baseline gap-4">
                    <span className="text-3xl lg:text-4xl font-bold text-accent-yellow leading-none min-w-[2rem]">
                      {item.letter}
                    </span>
                    <span className="text-base lg:text-lg font-bold text-background uppercase tracking-wide">
                      {item.word}
                    </span>
                  </div>
                ))}
              </div>
              {/* Accent corner */}
              <div className="absolute bottom-0 right-0 w-16 h-16 bg-accent-pink/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
