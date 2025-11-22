import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Développeur Fullstack Freelance",
    company: "Auto-Entrepreneur",
    period: "Depuis Mai 2023",
    description:
      "Conception d'architectures logicielles, développement d'interfaces web/mobile, création d'API REST, intégration CMS, design UX/UI.",
    technologies: ["React", "Node.js", "MongoDB", "API REST", "Figma"],
  },
  {
    title: "Graphics Designer & Social Media Manager",
    company: "Auto-Entrepreneur",
    period: "Depuis Juin 2020",
    description:
      "Création d'identités visuelles, supports graphiques, stratégies de contenu, animation de communautés.",
    technologies: ["Photoshop", "Illustrator", "Canva", "Social Media"],
  },
  {
    title: "Développeur Fullstack",
    company: "E-commerce B2B Solutions ESANI",
    period: "Octobre 2024 - Février 2025",
    description:
      "Plateforme e-commerce B2B, React/Node/MongoDB, Stripe/PayPal, CI/CD.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "PayPal", "CI/CD"],
  },
  {
    title: "Développeur Mobile Hybride",
    company: "Santé Connect Medi-Connect",
    period: "Juin 2024 - Septembre 2024",
    description:
      "App mobile santé, Ionic/Angular, GraphQL, UX/UI optimisé, notifications push, géolocalisation.",
    technologies: ["Ionic", "Angular", "GraphQL", "Push Notifications"],
  },
  {
    title: "Développeur Fullstack",
    company: "Clear Solutions 237",
    period: "Septembre 2022 - Mai 2023",
    description:
      "App de gestion de restaurant, dashboard, maintenance serveur, frontend Angular/Ionic.",
    technologies: ["Angular", "Ionic", "Node.js", "Dashboard"],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4">
            Mon <span className="text-primary">Expérience</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Plus de 5 ans d'expérience dans le développement web et mobile
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {experiences.map((exp, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <Card className="p-6 h-full hover:shadow-xl transition-all duration-300 hover:border-primary/50">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <Briefcase className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-1">
                            {exp.title}
                          </h3>
                          <p className="text-accent font-medium">{exp.company}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </div>

                      <p className="text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>

                      <div className="flex flex-wrap gap-2 pt-2">
                        {exp.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};
