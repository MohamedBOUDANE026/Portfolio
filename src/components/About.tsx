import { Code2, Database, Cloud, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Développement Backend",
      description: "Java, Spring Boot, Microservices"
    },
    {
      icon: Database,
      title: "Bases de Données",
      description: "MySQL, Oracle, SQL Server"
    },
    {
      icon: Cloud,
      title: "Architecture Cloud",
      description: "Docker, Keycloak, APIs REST"
    },
    {
      icon: Shield,
      title: "Systèmes Bancaires",
      description: "ISO 8583, JPos, Transactions"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              À Propos
            </h2>
            <div className="w-20 h-1 bg-gradient-secondary mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Profile description */}
            <div className="space-y-6 animate-slide-up">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ingénieur informatique passionné par le développement Java et Spring, 
                souhaitant mettre en pratique mes compétences et contribuer à la réussite 
                de l'entreprise.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Fort d'une expérience dans la conception et le développement de systèmes 
                bancaires complexes, notamment avec la norme ISO 8583, je maîtrise 
                l'architecture microservices et les technologies modernes du cloud.
              </p>
              <div className="pt-4">
                <h3 className="text-xl font-semibold text-foreground mb-4">Domaines d'expertise</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">▸</span>
                    <span>Architecture microservices avec Spring Boot et Spring Cloud</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">▸</span>
                    <span>Développement d'applications bancaires et de paiement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">▸</span>
                    <span>Intégration de systèmes avec APIs REST et protocoles ISO</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">▸</span>
                    <span>Sécurité et authentification avec Keycloak</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Highlight cards */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <Card 
                  key={index}
                  className="p-6 bg-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 animate-slide-up border-border"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h4 className="font-semibold text-foreground">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
