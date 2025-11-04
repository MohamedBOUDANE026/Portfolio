import { Mail, MapPin, Phone, Github, Linkedin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero text-primary-foreground overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-glow rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Profile Photo */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-primary p-1 shadow-card-hover">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
                  <img
                    src="src/images/usa.jpg"
                    alt="Mohamed BOUDANE - Ingénieur Informatique"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-secondary rounded-full flex items-center justify-center shadow-lg">
                <span className="text-2xl">👨‍💻</span>
              </div>
            </div>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Mohamed <span className="text-secondary">BOUDANE</span>
          </h1>

          {/* Title */}
          <div className="space-y-2">
            <p className="text-2xl md:text-3xl font-semibold text-secondary">
              Ingénieur Informatique Junior option MIAGE
            </p>
            <p className="text-lg md:text-xl opacity-90">
              Passioné par le développement BackEnd en Java et Spring Boot 
            </p>
          </div>

          {/* Contact info */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm md:text-base opacity-90">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Casablanca, Maroc</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+212 617126584</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <a href="mailto:mohamedboudane6@gmail.com" className="hover:text-secondary transition-colors">
                mohamedboudane6@gmail.com
              </a>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-lg hover:shadow-card-hover transition-all"
            >
              <Mail className="w-5 h-5 mr-2" />
              Me Contacter
            </Button>
            <a
              href="/BOUDANE_MOHAMED.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:border-secondary"
              >
                <Download className="w-5 h-5 mr-2" />
                Télécharger CV
              </Button>
            </a>
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-4 pt-4">
            <a href="https://github.com/MohamedBOUDANE026" className="p-3 rounded-full bg-primary-foreground/10 hover:bg-secondary transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/mohamed-boudane-5a670022a/" className="p-3 rounded-full bg-primary-foreground/10 hover:bg-secondary transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-secondary rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
