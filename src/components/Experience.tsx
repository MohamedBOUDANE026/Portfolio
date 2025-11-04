import { Briefcase, Calendar, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";

const Experience = () => {
  const experiences = [
    {
      title: "Stage de fin d'études",
      company: "Hightech Payment Systems (HPS)",
      location: "Casablanca",
      period: "03/2025 – 08/2025",
      description: [
        "Conception et développement d'un simulateur de transactions bancaires basé sur le standard ISO 8583",
        "Mise en place d'une architecture microservices avec Java 17, Spring Boot, FeignClient, MySQL et Keycloak",
        "Intégration de JPos pour le traitement des messages ISO 8583"
      ],
      current: true
    },
    {
      title: "Stage de perfectionnement",
      company: "Morosoft Solution",
      location: "Casablanca",
      period: "07/2024 – 08/2024",
      description: [
        "Mise en oeuvre d'un système avancé de gestion de courriels",
        "Intégration des protocoles SMTP pour l'envoi et la réception de courriels"
      ]
    },
    {
      title: "Stage d'initiation",
      company: "Direction Générale de OFPPT",
      location: "Casablanca",
      period: "08/2024",
      description: [
        "Développement d'un système d'information de gestion de location de matériel informatique"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Expériences Professionnelles
            </h2>
            <div className="w-20 h-1 bg-gradient-secondary mx-auto rounded-full"></div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary hidden md:block"></div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div 
                  key={index}
                  className="relative animate-slide-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-6 w-5 h-5 rounded-full bg-secondary border-4 border-background hidden md:block z-10"></div>

                  <Card className="md:ml-20 p-6 hover:shadow-card-hover transition-all duration-300 bg-card border-border">
                    <div className="space-y-4">
                      {/* Header */}
                      <div className="flex flex-wrap items-start justify-between gap-4">
                        <div className="space-y-1">
                          <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                            {exp.title}
                            {exp.current && (
                              <span className="text-xs font-normal px-2 py-1 bg-secondary/10 text-secondary rounded-full">
                                En cours
                              </span>
                            )}
                          </h3>
                          <div className="flex items-center gap-2 text-primary font-semibold">
                            <Briefcase className="w-4 h-4" />
                            <span>{exp.company}</span>
                          </div>
                        </div>
                      </div>

                      {/* Meta info */}
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <ul className="space-y-2 text-muted-foreground">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-secondary mt-1.5 text-xs">●</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
