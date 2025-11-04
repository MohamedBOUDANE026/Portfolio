import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm opacity-90">
            © {currentYear} Mohamed BOUDANE. Tous droits réservés.
          </p>
          
          <div className="flex items-center gap-2 text-sm">
            <span className="opacity-90">Conçu avec</span>
            <Heart className="w-4 h-4 text-secondary fill-secondary animate-pulse" />
            <span className="opacity-90">à Casablanca</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
