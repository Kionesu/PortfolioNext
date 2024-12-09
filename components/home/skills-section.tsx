import { Card } from "@/components/ui/card";

const skills = [
  {
    category: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"]
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "Python", "SQL", "MongoDB"]
  },
  {
    category: "Outils",
    items: ["Git", "VS Code", "Docker", "Figma", "Postman"]
  },
  {
    category: "Soft Skills",
    items: ["Travail d'équipe", "Communication", "Résolution de problèmes", "Adaptabilité"]
  }
];

export function SkillsSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 text-transparent bg-clip-text">
          Compétences
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillGroup) => (
            <Card key={skillGroup.category} className="p-6 bg-slate-900/50 border-white/10 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4 text-white">{skillGroup.category}</h3>
              <ul className="space-y-2">
                {skillGroup.items.map((skill) => (
                  <li key={skill} className="text-white/70">{skill}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}