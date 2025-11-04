import { Award, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

const Certifications = () => {
  const certifications = [
    { title: "Introduction to OOP with Java", href: "https://example.com/cert1" },
    { title: "Java Microservices with SpringBoot and SpringCloud", href: "https://example.com/cert2" },
    { title: "Introduction to Git and GitHub", href: "https://example.com/cert3" },
    { title: "Modeling software systems using UML", href: "https://example.com/cert4" }
  ];

  const languages = [
    { lang: "Arabe", level: "Maternelle", proficiency: 100 },
    { lang: "Français", level: "Courant", proficiency: 85 },
    { lang: "Anglais", level: "Intermédiaire", proficiency: 70 }
  ];

  return (
    <section id="certifications" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Certifications */}
            <div className="animate-fade-in">
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Certifications
                </h2>
                <div className="w-20 h-1 bg-gradient-secondary rounded-full"></div>
              </div>

              <Card className="p-6 bg-card border-border shadow-card">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                      <Award className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Certifications obtenues</p>
                      <p className="text-2xl font-bold text-foreground">{certifications.length}</p>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {certifications.map((cert, index) => (
                      <li 
                        key={index}
                        className="flex items-start gap-3 group hover:translate-x-2 transition-transform"
                      >
                        <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <a
                          href={cert.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground group-hover:text-foreground transition-colors hover:underline"
                        >
                          {cert.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </div>

            {/* Languages */}
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Langues
                </h2>
                <div className="w-20 h-1 bg-gradient-secondary rounded-full"></div>
              </div>

              <Card className="p-6 bg-card border-border shadow-card">
                <div className="space-y-6">
                  {languages.map((lang, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-foreground">{lang.lang}</span>
                        <span className="text-sm text-muted-foreground">{lang.level}</span>
                      </div>
                      <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-secondary rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: `${lang.proficiency}%`,
                            animationDelay: `${index * 0.2}s`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
