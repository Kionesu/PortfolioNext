import { GithubIcon, LinkedinIcon, Mail } from "lucide-react";

export function HeroSection() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-900/20 via-slate-900 to-slate-900"></div>
      
      {/* Animated stars background */}
      <div className="absolute inset-0 bg-[url('/stars.png')] opacity-50 animate-twinkle"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 text-transparent bg-clip-text">
            Esteban Faucquenoy
          </h1>
          <p className="text-xl text-white/80 mb-8">
            Développeur Passionné & Gamer
          </p>
          <p className="text-lg text-white/70 mb-8">
            À 19 ans, je transforme ma passion pour le développement et les jeux vidéo en solutions créatives. 
            Fasciné par l'évolution constante de la technologie, je reste à l'affût des dernières innovations.
          </p>
          <div className="flex justify-center gap-6">
            <a href="https://github.com" className="text-white/70 hover:text-white transition-colors">
              <GithubIcon size={24} />
            </a>
            <a href="https://linkedin.com" className="text-white/70 hover:text-white transition-colors">
              <LinkedinIcon size={24} />
            </a>
            <a href="mailto:contact@example.com" className="text-white/70 hover:text-white transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}