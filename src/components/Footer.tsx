import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/50 py-8 mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Alexandra
          </h3>
          <p className="text-muted-foreground">
            Especialista en Belleza
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <span>Hecho con</span>
            <Heart className="h-4 w-4 text-primary fill-primary" />
            <span>para realzar tu belleza</span>
          </div>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Alexandra. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
