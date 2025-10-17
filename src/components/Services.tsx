import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Home, Clock, Award } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Manicure & Pedicure",
    description: "Cuidado completo de manos y pies con técnicas profesionales y productos de calidad.",
  },
  {
    icon: Award,
    title: "Uñas Acrílicas",
    description: "Diseños personalizados, extensiones y decoración de uñas con técnicas avanzadas.",
  },
  {
    icon: Home,
    title: "Servicio a Domicilio",
    description: "Atención personalizada en la comodidad de tu hogar con todos los implementos necesarios.",
  },
  {
    icon: Clock,
    title: "Horarios Flexibles",
    description: "Agenda tu cita en el horario que mejor se adapte a tu rutina diaria.",
  },
];

const Services = () => {
  return (
    <section id="servicios" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Servicios
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ofrezco una amplia gama de servicios de belleza profesionales
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index}
                className="border-border/50 hover:border-primary transition-all duration-300 hover:shadow-elegant animate-slide-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-full bg-gradient-primary flex items-center justify-center mb-4 shadow-soft">
                    <Icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
