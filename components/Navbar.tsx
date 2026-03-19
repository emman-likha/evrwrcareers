const navLinks = [
  { label: "Careers", href: "#careers" },
  { label: "About", href: "#about" },
  { label: "Culture", href: "#culture" },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-8 lg:px-12 py-5 w-full bg-background/80 backdrop-blur-md">
      {/* Logo */}
      <a href="/" className="flex items-center gap-2 group">
        <span className="w-3 h-3 rounded-full bg-primary group-hover:scale-125 transition-transform duration-300" />
        <span className="text-xl font-bold tracking-tight text-foreground uppercase">
          evrwr
          <span className="text-accent-magenta">careers</span>
        </span>
      </a>

      {/* Links */}
      <div className="hidden md:flex items-center gap-10">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-sm font-medium uppercase tracking-widest text-foreground/70 hover:text-foreground transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary hover:after:w-full after:transition-all after:duration-300"
          >
            {link.label}
          </a>
        ))}
        <a
          href="#apply"
          className="text-sm font-bold uppercase tracking-widest bg-primary text-background px-6 py-2.5 hover:bg-foreground transition-colors duration-300"
        >
          Apply Now
        </a>
      </div>

      {/* Mobile menu button */}
      <button
        className="md:hidden flex flex-col gap-1.5 group"
        aria-label="Menu"
      >
        <span className="w-6 h-0.5 bg-foreground group-hover:w-4 transition-all duration-300" />
        <span className="w-6 h-0.5 bg-foreground transition-all duration-300" />
        <span className="w-4 h-0.5 bg-foreground group-hover:w-6 transition-all duration-300" />
      </button>
    </nav>
  );
}
