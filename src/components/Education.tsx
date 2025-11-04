import { GraduationCap, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";

const Education = () => {
  const education = [
    {
      degree: "Ingénierie Informatique et Réseaux",
      option: "Option MIAGE",
      school: "EMSI : École Marocaine des Sciences de l'Ingénieur",
      period: "2020 - 2025",
      level: "Diplôme d'ingénieur"
    },
    {
      degree: "Baccalauréat Scientifique",
      option: "Option Physique Chimie",
      school: "Les écoles LAHLOU",
      period: "2019 - 2020",
      level: "Diplôme"
    }
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Formation Académique
            </h2>
            <div className="w-20 h-1 bg-gradient-secondary mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 animate-slide-up bg-card border-border"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="space-y-4">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-primary-foreground" />
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <div>
                      <span className="text-xs font-medium text-secondary uppercase tracking-wider">
                        {edu.level}
                      </span>
                      <h3 className="text-xl font-bold text-foreground mt-1">
                        {edu.degree}
                      </h3>
                      {edu.option && (
                        <p className="text-sm text-muted-foreground italic">{edu.option}</p>
                      )}
                    </div>

                    <p className="text-primary font-semibold">{edu.school}</p>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
