const footerLinks = [
  { label: "LinkedIn", href: "#" },
  { label: "Twitter", href: "#" },
  { label: "Instagram", href: "#" },
];

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row items-center justify-between px-8 lg:px-12 py-5 w-full border-t border-foreground/10">
      {/* Marquee strip */}
      <div className="overflow-hidden w-full md:w-auto md:max-w-[40%] mb-3 md:mb-0">
        <div className="animate-marquee whitespace-nowrap flex gap-8 text-xs uppercase tracking-[0.3em] text-foreground/30 font-medium">
          <span>Design</span>
          <span>·</span>
          <span>Engineering</span>
          <span>·</span>
          <span>Product</span>
          <span>·</span>
          <span>Marketing</span>
          <span>·</span>
          <span>Operations</span>
          <span>·</span>
          <span>Design</span>
          <span>·</span>
          <span>Engineering</span>
          <span>·</span>
          <span>Product</span>
          <span>·</span>
          <span>Marketing</span>
          <span>·</span>
          <span>Operations</span>
        </div>
      </div>

      {/* Social links */}
      <div className="flex items-center gap-8">
        {footerLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-xs uppercase tracking-[0.2em] text-foreground/40 hover:text-primary transition-colors duration-300"
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Copyright */}
      <p className="text-xs text-foreground/25 tracking-wide mt-3 md:mt-0">
        © 2026 evrwrcareers
      </p>
    </footer>
  );
}
