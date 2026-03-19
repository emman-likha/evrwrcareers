const team = [
  { name: "Aisha M.", role: "Engineering Lead", color: "bg-accent-magenta" },
  { name: "Luca R.", role: "Product Designer", color: "bg-accent-yellow" },
  { name: "Priya K.", role: "Growth Manager", color: "bg-primary" },
  { name: "Tomás S.", role: "Backend Engineer", color: "bg-accent-pink" },
  { name: "Mei L.", role: "Head of People", color: "bg-accent-magenta" },
  { name: "James O.", role: "DevOps Engineer", color: "bg-accent-yellow" },
];

const testimonials = [
  {
    quote:
      "I joined EVRWR as an intern. Two years later, I'm leading a team of eight. This place bets on people.",
    name: "Aisha M.",
    role: "Engineering Lead",
  },
  {
    quote:
      "The culture isn't performative — it's in how we ship, how we disagree, and how we celebrate each other.",
    name: "Luca R.",
    role: "Product Designer",
  },
];

export default function Culture() {
  return (
    <section
      id="culture"
      className="relative py-24 lg:py-32 px-8 lg:px-12 bg-foreground overflow-hidden"
    >
      <span className="section-number" style={{ color: "var(--background)" }}>
        05
      </span>

      <div className="max-w-6xl mx-auto">
        <p className="text-[0.65rem] uppercase tracking-[0.4em] text-background/30 font-medium mb-4">
          Our Culture
        </p>
        <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] font-bold leading-[1.05] tracking-tight text-background uppercase mb-6">
          We build, learn, and grow{" "}
          <span className="text-accent-yellow italic">together.</span>
        </h2>
        <p className="text-sm lg:text-base leading-relaxed text-background/50 max-w-xl mb-14">
          At EVRWR, culture isn&apos;t a slide deck — it&apos;s in the code we
          review, the ideas we challenge, and the wins we share. We hire curious
          minds and give them room to run.
        </p>

        {/* Team avatars */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 mb-16">
          {team.map((t, i) => (
            <div key={i} className="text-center group">
              <div
                className={`${t.color} w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 flex items-center justify-center text-background text-lg sm:text-xl font-bold opacity-80 group-hover:opacity-100 transition-opacity duration-300`}
              >
                {t.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <p className="text-xs font-bold text-background/80 truncate">
                {t.name}
              </p>
              <p className="text-[0.6rem] text-background/35 truncate">
                {t.role}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="relative border border-background/10 p-6 lg:p-8"
            >
              <div className="quote-mark relative">
                <p className="text-sm lg:text-base leading-relaxed text-background/70 italic">
                  {t.quote}
                </p>
              </div>
              <div className="mt-5 flex items-center gap-3">
                <div className="w-[2px] h-8 bg-accent-yellow" />
                <div>
                  <p className="text-xs font-bold text-background uppercase tracking-wide">
                    {t.name}
                  </p>
                  <p className="text-[0.6rem] text-background/40">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
