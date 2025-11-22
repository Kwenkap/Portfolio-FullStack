import { Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";
export const Hero = () => {
  return <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-hero-gradient-start via-primary to-hero-gradient-end opacity-10" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <div className="animate-fade-in-up flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-3xl opacity-30 animate-pulse" />
              <img src={profilePhoto} alt="Gilles Hermann Kwenkap" className="relative rounded-full w-80 h-80 object-cover border-4 border-primary/20 shadow-2xl" />
            </div>
          </div>

          {/* Content */}
          <div className="animate-fade-in-up space-y-6 order-2 lg:order-1">
            <div className="space-y-2">
              <p className="text-primary font-semibold text-lg tracking-wide uppercase">
                Développeur Full-Stack
              </p>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Kwenkap Dinang
                <br />
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Gilles Hermann
                </span>
              </h1>
            </div>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
              Transformez vos idées en solutions digitales sur-mesure
            </p>

            <p className="text-base text-muted-foreground">
              📍  Cameroun | 🌐 Freelance disponible
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity" asChild>
                <a href="/CV_GILLES_DINANG.pdf" download>
                  <Download className="mr-2 h-5 w-5" />
                  Télécharger CV
                </a>
              </Button>

              <Button size="lg" variant="outline" asChild>
                <a href="#contact">
                  <Mail className="mr-2 h-5 w-5" />
                  Me contacter
                </a>
              </Button>
            </div>

            <div className="flex gap-4 pt-4">
              <a href="https://www.linkedin.com/in/gilles-hermann-kwenkap" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://kwenkap.github.io/my_portfolio" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1.5 h-2 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>;
};