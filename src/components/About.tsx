import { Card } from "@/components/ui/card";
import { Heart, Star, Users } from "lucide-react";

const About = () => {
  return (
    <section id="sobre-mi" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Sobre Mí
            </h2>
          </div>

          <Card className="p-8 md:p-12 shadow-elegant border-border/50">
            <div className="space-y-6 text-center">
              <p className="text-lg text-foreground/90 leading-relaxed">
                Soy Alexandra, especialista en belleza con pasión por resaltar la belleza natural 
                de cada persona. Trabajo tanto en estética como ofreciendo servicios a domicilio 
                para tu comodidad.
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed">
                Mi compromiso es brindarte un servicio profesional, utilizando productos de 
                calidad y técnicas actualizadas para garantizar los mejores resultados.
              </p>

              <div className="grid md:grid-cols-3 gap-8 mt-12 pt-8 border-t border-border">
                <div className="flex flex-col items-center animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mb-4 shadow-soft">
                    <Heart className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Pasión</h3>
                  <p className="text-muted-foreground text-sm">
                    Amor por mi trabajo y dedicación en cada detalle
                  </p>
                </div>

                <div className="flex flex-col items-center animate-fade-in" style={{ animationDelay: "0.1s" }}>
                  <div className="w-16 h-16 rounded-full bg-gradient-accent flex items-center justify-center mb-4 shadow-soft">
                    <Star className="h-8 w-8 text-accent-foreground" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Calidad</h3>
                  <p className="text-muted-foreground text-sm">
                    Productos premium y técnicas profesionales
                  </p>
                </div>

                <div className="flex flex-col items-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
                  <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mb-4 shadow-soft">
                    <Users className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Personalizado</h3>
                  <p className="text-muted-foreground text-sm">
                    Atención única adaptada a tus necesidades
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
