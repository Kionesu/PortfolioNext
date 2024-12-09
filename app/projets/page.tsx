import { Card } from "@/components/ui/card";
import { GithubIcon, ExternalLinkIcon } from "lucide-react";

const projects = [
  {
    title: "Portfolio Spatial",
    description: "Portfolio personnel avec un design inspiré de l'espace, développé avec Next.js et Tailwind CSS.",
    technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    github: "https://github.com/username/portfolio",
    live: "https://portfolio.dev"
  },
  {
    title: "Application de Jeu",
    description: "Un jeu web interactif développé avec React et Canvas API.",
    technologies: ["React", "Canvas API", "JavaScript", "CSS"],
    github: "https://github.com/username/game-app",
    live: "https://game-app.dev"
  },
  {
    title: "API REST",
    description: "Une API REST complète pour la gestion de données de jeux vidéo.",
    technologies: ["Node.js", "Express", "MongoDB", "JWT"],
    github: "https://github.com/username/api-project"
  }
];

export default function ProjectsPage() {
  return (
    <main className="bg-slate-900 min-h-screen pt-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 text-transparent bg-clip-text">
          Mes Projets
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.title} className="p-6 bg-slate-900/50 border-white/10 backdrop-blur-sm">
              <h2 className="text-xl font-semibold mb-3 text-white">{project.title}</h2>
              <p className="text-white/70 mb-4">{project.description}</p>
              
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-white mb-2">Technologies:</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-2 py-1 text-xs rounded-full bg-blue-500/20 text-blue-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <a href={project.github} className="text-white/70 hover:text-white transition-colors flex items-center gap-2">
                  <GithubIcon size={16} />
                  GitHub
                </a>
                {project.live && (
                  <a href={project.live} className="text-white/70 hover:text-white transition-colors flex items-center gap-2">
                    <ExternalLinkIcon size={16} />
                    Demo
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}