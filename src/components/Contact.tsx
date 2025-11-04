import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "mohamedboudane6@gmail.com",
      href: "mailto:mohamedboudane6@gmail.com"
    },
    {
      icon: Phone,
      label: "Téléphone",
      value: "+212 617126584",
      href: "tel:+212617126584"
    },
    {
      icon: MapPin,
      label: "Localisation",
      value: "Hay al Azhar, Sidi Bernoussi, Casablanca",
      href: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-hero text-primary-foreground relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-primary-glow rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Travaillons Ensemble
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Je suis actuellement à la recherche d'opportunités pour mettre en pratique 
              mes compétences en développement Java et Spring Boot.
            </p>
            <div className="w-20 h-1 bg-secondary mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <Card 
                key={index}
                className="p-6 bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20 hover:bg-primary-foreground/15 transition-all duration-300 hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {info.href ? (
                  <a href={info.href} className="block space-y-3">
                    <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                      <info.icon className="w-6 h-6 text-secondary-foreground" />
                    </div>
                    <div>
                      <p className="text-sm opacity-75 mb-1">{info.label}</p>
                      <p className="font-medium">{info.value}</p>
                    </div>
                  </a>
                ) : (
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                      <info.icon className="w-6 h-6 text-secondary-foreground" />
                    </div>
                    <div>
                      <p className="text-sm opacity-75 mb-1">{info.label}</p>
                      <p className="font-medium">{info.value}</p>
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center space-y-6 animate-fade-in">
            

            {/* Social links */}
            <div className="flex justify-center gap-4 pt-4">
              <a 
                href="https://github.com/MohamedBOUDANE026" 
                className="w-12 h-12 rounded-full bg-primary-foreground/10 hover:bg-secondary flex items-center justify-center transition-all hover:scale-110"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/mohamed-boudane-5a670022a/" 
                className="w-12 h-12 rounded-full bg-primary-foreground/10 hover:bg-secondary flex items-center justify-center transition-all hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
