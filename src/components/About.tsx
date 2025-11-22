import { Card } from "@/components/ui/card";
import { User, Heart, Languages } from "lucide-react";
export const About = () => {
  return <section id="about" className="py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4">
            À propos de <span className="text-primary">moi</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="p-6 hover:shadow-xl transition-all duration-300 animate-fade-in-up border-primary/20">
            <User className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3">Informations</h3>
            <ul className="space-y-2 text-muted-foreground">
              
              <li>
                <strong>Status:</strong> Célibataire
              </li>
              <li>
                <strong>Email:</strong> kwenkaphermann@gmail.com
              </li>
            </ul>
          </Card>

          <Card className="p-6 hover:shadow-xl transition-all duration-300 animate-fade-in-up border-accent/20">
            <Heart className="h-10 w-10 text-accent mb-4" />
            <h3 className="text-xl font-semibold mb-3">Personnalité</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 bg-primary rounded-full" />
                Travailleur
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 bg-accent rounded-full" />
                Discipliné
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 bg-highlight rounded-full" />
                Curieux
              </li>
            </ul>
          </Card>

          <Card className="p-6 hover:shadow-xl transition-all duration-300 animate-fade-in-up border-highlight/20">
            <Languages className="h-10 w-10 text-highlight mb-4" />
            <h3 className="text-xl font-semibold mb-3">Langues</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center justify-between">
                <span>Français</span>
                <span className="text-primary font-semibold">Courant</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Anglais</span>
                <span className="text-primary font-semibold">Courant</span>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </section>;
};