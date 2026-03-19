"use client";

import { useState } from "react";

const filters = ["All", "Engineering", "Design", "Marketing", "Operations"];

const jobs = [
  {
    title: "Senior Frontend Engineer",
    department: "Engineering",
    location: "Remote — Global",
    type: "Full-time",
  },
  {
    title: "Product Designer",
    department: "Design",
    location: "New York, US",
    type: "Full-time",
  },
  {
    title: "Growth Marketing Lead",
    department: "Marketing",
    location: "London, UK",
    type: "Full-time",
  },
  {
    title: "Backend Engineer",
    department: "Engineering",
    location: "Remote — EMEA",
    type: "Full-time",
  },
  {
    title: "Brand Designer",
    department: "Design",
    location: "Berlin, DE",
    type: "Contract",
  },
  {
    title: "Operations Manager",
    department: "Operations",
    location: "Singapore, SG",
    type: "Full-time",
  },
];

export default function FeaturedJobs() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? jobs : jobs.filter((j) => j.department === active);

  return (
    <section
      id="careers"
      className="relative py-24 lg:py-32 px-8 lg:px-12 bg-foreground overflow-hidden"
    >
      <span className="section-number" style={{ color: "var(--background)" }}>
        03
      </span>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <p className="text-[0.65rem] uppercase tracking-[0.4em] text-background/30 font-medium mb-4">
              Open Positions
            </p>
            <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] font-bold leading-[1.05] tracking-tight text-background uppercase">
              Featured <span className="text-accent-yellow italic">Jobs</span>
            </h2>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`filter-tab text-xs font-bold uppercase tracking-[0.15em] px-4 py-2 border ${
                  active === f
                    ? "filter-tab-active border-primary"
                    : "border-background/20 text-background/60 hover:border-background/40 hover:text-background"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Job grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((job, i) => (
            <div
              key={i}
              className="card-lift bg-background/5 border border-background/10 p-6 flex flex-col justify-between gap-6 group"
            >
              <div>
                <span className="text-[0.6rem] uppercase tracking-[0.3em] text-accent-pink font-medium">
                  {job.department}
                </span>
                <h3 className="text-lg font-bold text-background mt-2 leading-tight">
                  {job.title}
                </h3>
                <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3">
                  <span className="text-xs text-background/40 flex items-center gap-1.5">
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                    {job.location}
                  </span>
                  <span className="text-xs text-background/40 flex items-center gap-1.5">
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {job.type}
                  </span>
                </div>
              </div>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-accent-yellow group-hover:text-background transition-colors duration-300"
              >
                View Details
                <svg
                  className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300"
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
            </div>
          ))}
        </div>

        {/* View all link */}
        <div className="mt-10 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-background/50 hover:text-background transition-colors duration-300 border-b border-background/20 hover:border-background/50 pb-1"
          >
            View All Openings
          </a>
        </div>
      </div>
    </section>
  );
}
