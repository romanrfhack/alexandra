import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Home, Clock, Award, Eye, Palette, Shield } from "lucide-react";

const servicesByCategory = [
  {
    category: "Cuidado de Uñas",
    items: [
      {
        icon: Sparkles,
        title: "Manicura Profesional",
        description: "Limpieza, corte, pulido y cuidado completo de uñas naturales con productos de alta calidad.",
      },
      {
        icon: Palette,
        title: "Pedicura Profesional",
        description: "Tratamiento completo para pies que incluye exfoliación, hidratación y cuidado de uñas.",
      },
      {
        icon: Award,
        title: "Podología Estética",
        description: "Atención especializada para problemas podológicos con técnicas profesionales y seguras.",
      },
    ]
  },
  {
    category: "Uñas Esculpidas",
    items: [
      {
        icon: Palette,
        title: "Uñas Acrílicas",
        description: "Extensiones y esculturales con acrílico para lograr la longitud y forma deseada.",
      },
      {
        icon: Sparkles,
        title: "Uñas de Tips",
        description: "Aplicación de tips con acabado en acrílico o gel para extensiones perfectas y naturales.",
      },
      {
        icon: Award,
        title: "Diseño Mano Alzada 3D",
        description: "Creaciones artísticas tridimensionales con detalles precisos y materiales premium.",
      },
      {
        icon: Shield,
        title: "Técnicas con Sellos",
        description: "Diseños perfectos y simétricos utilizando la técnica de sellado profesional.",
      },
    ]
  },
  {
    category: "Tratamientos en Gel",
    items: [
      {
        icon: Shield,
        title: "Gelish 21 Días",
        description: "Esmaltado semipermanente que mantiene tu manicura perfecta por 3 semanas, liso o decorado.",
      },
      {
        icon: Sparkles,
        title: "Decoración en Gel",
        description: "Diseños artísticos personalizados sobre base gel con duración extendida.",
      },
    ]
  },
  {
    category: "Pestañas",
    items: [
      {
        icon: Eye,
        title: "Extensiones Naturales",
        description: "Aplicación de pestañas pelo a pelo para un efecto natural y volumen suave.",
      },
      {
        icon: Award,
        title: "Extensiones Híbridas",
        description: "Combinación perfecta entre volumen ruso y efecto natural para mirada impactante.",
      },
      {
        icon: Sparkles,
        title: "Extensiones Volumen",
        description: "Técnica volumen ruso para mirada dramática y abundante con máximo confort.",
      },
      {
        icon: Eye,
        title: "Laminado de Pestañas",
        description: "Tratamiento que levanta y curvea tus pestañas naturales por 6-8 semanas.",
      },
      {
        icon: Shield,
        title: "Lash Lifting",
        description: "Realza la curvatura natural de tus pestañas con efecto lifting y tinte incluido.",
      },
    ]
  },
  {
    category: "Depilación",
    items: [
      {
        icon: Shield,
        title: "Diseño de Cejas",
        description: "Delineación y diseño profesional de cejas según tu rostro y preferencias.",
      },
      {
        icon: Sparkles,
        title: "Depilación Facial",
        description: "Eliminación de vello en bozo, mentón y zona facial con técnicas indoloras.",
      },
      {
        icon: Award,
        title: "Depilación de Axilas",
        description: "Servicio rápido y efectivo con resultados duraderos y cuidado de la piel.",
      },
      {
        icon: Palette,
        title: "Depilación Integral",
        description: "Tratamiento completo en todas las zonas del cuerpo según tus necesidades.",
      },
    ]
  },
  {
    category: "Servicios Especiales",
    items: [
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
    ]
  }
];

const Services1 = () => {
  return (
    <section id="servicios" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Servicios Profesionales
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ofrezco una amplia gama de servicios de belleza con técnicas avanzadas y productos de primera calidad
          </p>
        </div>

        {servicesByCategory.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-foreground">
              {category.category}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {category.items.map((service, index) => {
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
        ))}
      </div>
    </section>
  );
};

export default Services1;