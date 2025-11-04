import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      category: "Langages de programmation",
      skills: ["Java", "Python", "C", "C++", "SQL", "PL/SQL"],
      color: "primary"
    },
    {
      category: "Frameworks",
      skills: ["Spring", "Spring Boot", "Angular", "FastAPI"],
      color: "secondary"
    },
    {
      category: "Technologies",
      skills: ["Git", "Docker", "Keycloak", "Jpos", "ELK Stack", "Postman"],
      color: "accent"
    },
    {
      category: "Bases de Données",
      skills: ["Oracle", "SQL Server", "MySQL"],
      color: "primary"
    },
    {
      category: "Conception & Développement",
      skills: ["APIs REST", "Swagger", "Microservices", "UML"],
      color: "secondary"
    },
    {
      category: "Protocoles",
      skills: ["ISO 8583", "SMTP", "HTTP/HTTPS"],
      color: "accent"
    }
  ];

  const colorClasses: Record<string, string> = {
    primary: "hover:bg-primary hover:text-primary-foreground hover:border-primary",
    secondary: "hover:bg-secondary hover:text-secondary-foreground hover:border-secondary",
    accent: "hover:bg-accent hover:text-accent-foreground hover:border-accent"
  };

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Compétences Techniques
            </h2>
            <div className="w-20 h-1 bg-gradient-secondary mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-card-hover transition-all duration-300 animate-slide-up bg-card border-border"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-foreground border-l-4 border-secondary pl-3">
                    {category.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <Badge 
                        key={i}
                        variant="outline"
                        className={`transition-all duration-300 cursor-default ${colorClasses[category.color]}`}
                      >
                        {skill}
                      </Badge>
                    ))}
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

export default Skills;
