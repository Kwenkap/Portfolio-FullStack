import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, MapPin, Linkedin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
export const Contact = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create mailto link
    const mailtoLink = `mailto:kwenkaphermann@gmail.com?subject=Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(`From: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoLink;
    toast({
      title: "Merci pour votre message !",
      description: "Votre client email va s'ouvrir pour envoyer le message."
    });
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  return <section id="contact" className="py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4">
            Me <span className="text-primary">Contacter</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Un projet en tête ? Discutons-en !
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in-up">
            <Card className="p-6 hover:shadow-lg transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <a href="mailto:kwenkaphermann@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                    kwenkaphermann@gmail.com
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Localisation</h3>
                  <p className="text-muted-foreground">Douala, Cameroun</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-highlight/10 rounded-lg">
                  <Linkedin className="h-6 w-6 text-highlight" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">LinkedIn</h3>
                  <a href="https://www.linkedin.com/in/gilles-hermann-kwenkap" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    Gilles hermann








   
                  </a>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-6 animate-fade-in-up">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input name="name" placeholder="Votre nom" value={formData.name} onChange={handleChange} required className="border-primary/20 focus:border-primary" />
              </div>
              <div>
                <Input name="email" type="email" placeholder="Votre email" value={formData.email} onChange={handleChange} required className="border-primary/20 focus:border-primary" />
              </div>
              <div>
                <Textarea name="message" placeholder="Votre message" rows={6} value={formData.message} onChange={handleChange} required className="border-primary/20 focus:border-primary resize-none" />
              </div>
              <Button type="submit" className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity" size="lg">
                <Send className="mr-2 h-5 w-5" />
                Envoyer le message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>;
};