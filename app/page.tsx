import { HeroSection } from "@/components/home/hero-section";
import { AboutSection } from "@/components/home/about-section";
import { SkillsSection } from "@/components/home/skills-section";

export default function Home() {
  return (
    <main className="bg-slate-900 min-h-screen pt-16">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
    </main>
  );
}