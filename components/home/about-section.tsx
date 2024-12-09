import { RocketIcon, BrainCircuitIcon, GamepadIcon } from "lucide-react";

export function AboutSection() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 text-transparent bg-clip-text">
          À Propos de Moi
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-slate-900/50 rounded-lg border border-white/10 backdrop-blur-sm">
            <RocketIcon className="w-12 h-12 mb-4 text-blue-500" />
            <h3 className="text-xl font-semibold mb-3 text-white">Passion Développement</h3>
            <p className="text-white/70">
              Passionné par le code depuis mon plus jeune âge, je crée des solutions innovantes et élégantes.
            </p>
          </div>
          <div className="p-6 bg-slate-900/50 rounded-lg border border-white/10 backdrop-blur-sm">
            <GamepadIcon className="w-12 h-12 mb-4 text-violet-500" />
            <h3 className="text-xl font-semibold mb-3 text-white">Gaming Enthousiaste</h3>
            <p className="text-white/70">
              Le gaming n'est pas qu'un loisir, c'est une source d'inspiration pour mes projets créatifs.
            </p>
          </div>
          <div className="p-6 bg-slate-900/50 rounded-lg border border-white/10 backdrop-blur-sm">
            <BrainCircuitIcon className="w-12 h-12 mb-4 text-pink-500" />
            <h3 className="text-xl font-semibold mb-3 text-white">Veille Technologique</h3>
            <p className="text-white/70">
              Toujours à l'affût des dernières innovations pour rester à la pointe de la technologie.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}