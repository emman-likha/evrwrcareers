"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { label: "Careers", href: "#careers" },
  { label: "About", href: "#about" },
  { label: "Culture", href: "#culture" },
];

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("[data-section-theme]");

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the section most visible at the top of the viewport
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const theme = (entry.target as HTMLElement).dataset.sectionTheme;
            setIsDark(theme === "dark");
          }
        }
      },
      {
        // Only observe a thin strip at the very top where the navbar sits
        rootMargin: "-1px 0px -95% 0px",
        threshold: 0,
      }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 flex items-center justify-between px-8 lg:px-12 py-5 w-full backdrop-blur-md transition-colors duration-500 ${
        isDark
          ? "bg-foreground/90"
          : "bg-background/80"
      }`}
    >
      {/* Logo */}
      <a href="/" className="flex items-center gap-2 group">
        <span
          className={`w-3 h-3 rounded-full group-hover:scale-125 transition-all duration-500 ${
            isDark ? "bg-accent-pink" : "bg-primary"
          }`}
        />
        <span
          className={`text-xl font-bold tracking-tight uppercase transition-colors duration-500 ${
            isDark ? "text-background" : "text-foreground"
          }`}
        >
          evrwr
          <span
            className={`transition-colors duration-500 ${
              isDark ? "text-accent-yellow" : "text-accent-magenta"
            }`}
          >
            careers
          </span>
        </span>
      </a>

      {/* Links */}
      <div className="hidden md:flex items-center gap-10">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className={`text-sm font-medium uppercase tracking-widest transition-colors duration-500 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] hover:after:w-full after:transition-all after:duration-300 ${
              isDark
                ? "text-background/60 hover:text-background after:bg-accent-pink"
                : "text-foreground/70 hover:text-foreground after:bg-primary"
            }`}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#apply"
          className={`text-sm font-bold uppercase tracking-widest px-6 py-2.5 transition-colors duration-500 ${
            isDark
              ? "bg-background text-foreground hover:bg-accent-yellow"
              : "bg-primary text-background hover:bg-foreground"
          }`}
        >
          Apply Now
        </a>
      </div>

      {/* Mobile menu button */}
      <button
        className="md:hidden flex flex-col gap-1.5 group"
        aria-label="Menu"
      >
        <span
          className={`w-6 h-0.5 group-hover:w-4 transition-all duration-500 ${
            isDark ? "bg-background" : "bg-foreground"
          }`}
        />
        <span
          className={`w-6 h-0.5 transition-all duration-500 ${
            isDark ? "bg-background" : "bg-foreground"
          }`}
        />
        <span
          className={`w-4 h-0.5 group-hover:w-6 transition-all duration-500 ${
            isDark ? "bg-background" : "bg-foreground"
          }`}
        />
      </button>
    </nav>
  );
}
