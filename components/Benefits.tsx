const perks = [
  {
    icon: "💻",
    title: "Remote Work",
    desc: "Work from anywhere — home, café, or beach. We trust results over presence.",
  },
  {
    icon: "🏥",
    title: "Health Benefits",
    desc: "Comprehensive medical, dental, and vision for you and your dependents.",
  },
  {
    icon: "📚",
    title: "Learning Budget",
    desc: "$2,000/year for courses, conferences, books — anything that makes you sharper.",
  },
  {
    icon: "🏖️",
    title: "Paid Time Off",
    desc: "30 days PTO plus local holidays. We mean it when we say rest matters.",
  },
  {
    icon: "🧘",
    title: "Wellness Stipend",
    desc: "$100/month for gym, therapy, meditation apps — whatever keeps you well.",
  },
  {
    icon: "💰",
    title: "Equity Package",
    desc: "Every full-time hire gets stock options. When EVRWR wins, you win.",
  },
  {
    icon: "👶",
    title: "Parental Leave",
    desc: "16 weeks fully paid for all new parents — birth, adoption, or foster.",
  },
  {
    icon: "🛠️",
    title: "Home Office Setup",
    desc: "$1,500 one-time budget to build a workspace that works for you.",
  },
];

export default function Benefits() {
  return (
    <section data-section-theme="dark" className="relative py-24 lg:py-32 px-8 lg:px-12 bg-foreground overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[0.65rem] uppercase tracking-[0.4em] text-background/30 font-medium mb-4">
            Benefits & Perks
          </p>
          <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] font-bold leading-[1.05] tracking-tight text-background uppercase">
            More than a{" "}
            <span className="text-accent-yellow italic">paycheck</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {perks.map((p, i) => (
            <div
              key={i}
              className="card-lift border border-background/10 p-5 group"
            >
              <span className="text-2xl mb-3 block">{p.icon}</span>
              <h3 className="text-sm font-bold text-background uppercase tracking-wide mb-1.5">
                {p.title}
              </h3>
              <p className="text-xs leading-relaxed text-background/40">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
