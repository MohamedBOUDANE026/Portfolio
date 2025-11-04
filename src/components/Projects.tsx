import { Code, Folder, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "Gestion des comptes et transactions bancaires",
      description: "Application web complète pour la gestion des comptes et transactions bancaires avec architecture microservices",
      technologies: ["SpringBoot", "Microservices", "Keycloak", "FeignClient", "Angular", "MySQL"],
      category: "Fullstack"
    },
    {
      title: "Analyse de données - Parcours diabète",
      description: "Analyse de données concernant le parcours des personnes atteintes de diabète avec visualisations interactives",
      technologies: ["Python", "Jupyter", "StreamLit", "Power BI"],
      category: "Data Science"
    },
    {
      title: "Gestion des étudiants",
      description: "Application web de gestion complète des étudiants avec interface moderne et API REST",
      technologies: ["SpringBoot", "SpringMVC", "Angular", "MySQL"],
      category: "Fullstack"
    }
  ];

  const categoryColors: Record<string, string> = {
    "Fullstack": "bg-primary/10 text-primary border-primary/20",
    "Data Science": "bg-secondary/10 text-secondary border-secondary/20"
  };

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Projets Académiques
            </h2>
            <div className="w-20 h-1 bg-gradient-secondary mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="group p-6 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 cursor-pointer animate-slide-up bg-card border-border"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="space-y-4 h-full flex flex-col">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Folder className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <Badge variant="outline" className={categoryColors[project.category]}>
                      {project.category}
                    </Badge>
                  </div>

                  {/* Content */}
                  <div className="flex-grow space-y-3">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.map((tech, i) => (
                      <span 
                        key={i}
                        className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center gap-2 text-sm text-secondary opacity-0 group-hover:opacity-100 transition-opacity">
                    <Code className="w-4 h-4" />
                    <span>Voir les détails</span>
                    <ExternalLink className="w-3 h-3" />
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

export default Projects;
