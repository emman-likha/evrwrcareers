import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import FeaturedJobs from "@/components/FeaturedJobs";
import WhyWork from "@/components/WhyWork";
import Culture from "@/components/Culture";
import Departments from "@/components/Departments";
import HiringProcess from "@/components/HiringProcess";
import Benefits from "@/components/Benefits";
import TalentPool from "@/components/TalentPool";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="grain-overlay">
      <Navbar />

      {/* ── 01. Hero ── */}
      <Hero />

      {/* ── 02. Mission & Vision ── */}
      <Mission />

      {/* ── 03. Featured Jobs ── */}
      <FeaturedJobs />

      {/* ── 04. Why Work at EVRWR ── */}
      <WhyWork />

      {/* ── 05. Culture / Team ── */}
      <Culture />

      {/* ── 06. Departments ── */}
      <Departments />

      {/* ── 07. Hiring Process ── */}
      <HiringProcess />

      {/* ── 08. Benefits & Perks ── */}
      <Benefits />

      {/* ── 09. Talent Pool CTA ── */}
      <TalentPool />

      <Footer />
    </div>
  );
}
