import { Card } from "@/components/ui/card";
import { RssIcon, TrendingUpIcon, BrainCircuitIcon } from "lucide-react";

const veilleSources = [
  {
    title: "Intelligence Artificielle",
    description: "Suivi des avancées en IA, notamment dans le domaine du gaming et du développement.",
    sources: ["OpenAI Blog", "Google AI Blog", "MIT Technology Review"],
    icon: BrainCircuitIcon
  },
  {
    title: "Développement Web",
    description: "Veille sur les frameworks modernes et les nouvelles pratiques de développement.",
    sources: ["Dev.to", "Medium", "GitHub Blog"],
    icon: TrendingUpIcon
  },
  {
    title: "Gaming Industry",
    description: "Actualités et innovations dans l'industrie du jeu vidéo.",
    sources: ["Gamasutra", "IGN", "Game Developer"],
    icon: RssIcon
  }
];

export default function VeillePage() {
  return (
    <main className="bg-slate-900 min-h-screen pt-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 text-transparent bg-clip-text">
          Veille Technologique
        </h1>
        
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <p className="text-white/70">
            Ma veille technologique est focalisée sur les domaines qui me passionnent et qui sont essentiels pour rester à la pointe de l'innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {veilleSources.map((source) => (
            <Card key={source.title} className="p-6 bg-slate-900/50 border-white/10 backdrop-blur-sm">
              <source.icon className="w-8 h-8 mb-4 text-blue-500" />
              <h2 className="text-xl font-semibold mb-3 text-white">{source.title}</h2>
              <p className="text-white/70 mb-4">{source.description}</p>
              <h3 className="text-sm font-semibold text-white mb-2">Sources principales:</h3>
              <ul className="list-disc list-inside text-white/70">
                {source.sources.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}