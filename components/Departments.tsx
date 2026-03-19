const departments = [
  {
    name: "Engineering",
    count: 12,
    desc: "Build the systems that power careers worldwide.",
    accent: "bg-primary",
  },
  {
    name: "Design",
    count: 6,
    desc: "Shape experiences that feel human-first.",
    accent: "bg-accent-magenta",
  },
  {
    name: "Marketing",
    count: 4,
    desc: "Tell stories that move people to act.",
    accent: "bg-accent-yellow",
  },
  {
    name: "Operations",
    count: 3,
    desc: "Keep the engine running at scale.",
    accent: "bg-accent-pink",
  },
];

export default function Departments() {
  return (
    <section className="relative py-24 lg:py-32 px-8 lg:px-12 overflow-hidden">
      <span className="section-number">06</span>

      <div className="max-w-6xl mx-auto">
        <p className="text-[0.65rem] uppercase tracking-[0.4em] text-foreground/30 font-medium mb-4">
          Teams
        </p>
        <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] font-bold leading-[1.05] tracking-tight text-foreground uppercase mb-12">
          Explore by{" "}
          <span className="text-accent-magenta italic">department</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {departments.map((d, i) => (
            <a
              key={i}
              href="#careers"
              className="dept-card card-lift relative border border-foreground/10 p-6 group block"
            >
              {/* Accent bar */}
              <div
                className={`${d.accent} w-8 h-[3px] mb-5 group-hover:w-12 transition-all duration-300`}
              />
              <h3 className="text-base font-bold text-foreground uppercase tracking-wide mb-1">
                {d.name}
              </h3>
              <p className="text-xs text-foreground/40 mb-4">{d.desc}</p>
              <div className="flex items-center justify-between">
                <span className="text-[0.6rem] uppercase tracking-[0.2em] text-foreground/25 font-medium">
                  {d.count} open roles
                </span>
                <svg
                  className="w-4 h-4 text-foreground/20 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
