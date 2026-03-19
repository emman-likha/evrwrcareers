"use client";

export default function TalentPool() {
  return (
    <section data-section-theme="light" className="relative py-24 lg:py-32 px-8 lg:px-12 overflow-hidden">
      <div className="max-w-3xl mx-auto text-center">
        {/* Decorative accent */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-8 h-[2px] bg-accent-yellow" />
          <div className="w-3 h-3 rounded-full bg-accent-pink" />
          <div className="w-8 h-[2px] bg-accent-yellow" />
        </div>

        <h2 className="text-[clamp(1.8rem,4vw,3.5rem)] font-bold leading-[1.05] tracking-tight text-foreground uppercase mb-4">
          Don&apos;t see a role
          <br />
          <span className="text-accent-magenta italic">for you?</span>
        </h2>
        <p className="text-sm lg:text-base text-foreground/45 max-w-md mx-auto mb-10 leading-relaxed">
          Join our talent pool. We&apos;ll reach out when the right opportunity
          opens up — sometimes the best matches are the ones we haven&apos;t
          posted yet.
        </p>

        {/* Email form */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
        >
          <input
            type="email"
            placeholder="your@email.com"
            className="flex-1 bg-transparent border-2 border-foreground/15 px-5 py-3.5 text-sm text-foreground placeholder:text-foreground/25 focus:border-primary focus:outline-none transition-colors duration-300"
          />
          <button
            type="submit"
            className="cta-glow bg-primary text-background px-8 py-3.5 text-sm font-bold uppercase tracking-[0.2em] hover:bg-foreground transition-colors duration-300 whitespace-nowrap"
          >
            Join Talent Pool
          </button>
        </form>

        <p className="text-[0.6rem] text-foreground/20 mt-4 tracking-wide">
          No spam. Only relevant opportunities. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
