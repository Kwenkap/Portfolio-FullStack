import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code2,
  Server,
  Smartphone,
  Palette,
  Wrench,
  Cloud,
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    skills: ["React.js", "Angular", "Ionic", "Tailwind CSS", "HTML", "SCSS", "TypeScript"],
    color: "text-primary",
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express.js", "GraphQL", "API REST", "MongoDB", "MySQL", "Django", "PHP"],
    color: "text-accent",
  },
  {
    title: "Mobile",
    icon: Smartphone,
    skills: ["Ionic", "Kivy"],
    color: "text-highlight",
  },
  {
    title: "Design",
    icon: Palette,
    skills: ["Figma", "Photoshop", "Illustrator", "Canva", "Photopea"],
    color: "text-primary",
  },
  {
    title: "CMS & Outils",
    icon: Wrench,
    skills: ["WordPress", "Wix", "Git", "GitHub", "GitLab", "CI/CD", "Postman", "Dolibarr"],
    color: "text-accent",
  },
  {
    title: "Cloud",
    icon: Cloud,
    skills: ["AWS", "Azure"],
    color: "text-highlight",
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4">
            Mes <span className="text-primary">Compétences</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Une expertise technique complète pour concrétiser vos projets digitaux
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <Card
                key={category.title}
                className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon className={`h-8 w-8 ${category.color}`} />
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
