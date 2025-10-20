import { useMemo } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { LucideIcon } from "lucide-react";
import {
  Sparkles,
  Award,
  Home,
  Clock,
  Brush,
  Scissors,
  Hand,
  Layers,
  Eye,
  Wand2,
} from "lucide-react";

// Tipos de datos
interface ServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ServiceCategory {
  key: string;
  name: string;
  blurb?: string;
  items: ServiceItem[];
}

// Datos organizados por categoría
const categories: ServiceCategory[] = [
  {
    key: "manos-pies",
    name: "Manos & Pies",
    blurb: "Cuidado integral con técnicas profesionales, higiene estricta y productos de alto rendimiento.",
    items: [
      {
        icon: Hand,
        title: "Manicure & Pedicure Profesional",
        description:
          "Limpieza, limado, cutícula y esmaltado con hidratación profunda para manos y pies impecables.",
      },
      {
        icon: Scissors,
        title: "Podología Básica",
        description:
          "Atención especializada para el bienestar de tus pies: corte correcto, prevención de molestias comunes y recomendaciones de cuidado.",
      },
      {
        icon: Brush,
        title: "Manicura y Pedicura Estética",
        description:
          "Acabado perfecto y pulido profesional para realzar tu estilo en cualquier ocasión.",
      },
    ],
  },
  {
    key: "unias-esculturales",
    name: "Uñas Esculturales & Decoración",
    blurb: "Técnicas avanzadas para sets personalizados, resistentes y artísticos.",
    items: [
      {
        icon: Award,
        title: "Uñas Esculturales con Diseño 3D",
        description:
          "Extensión y estructura profesional con arte a mano alzada y detalles 3D para un look único.",
      },
      {
        icon: Layers,
        title: "Aplicación con Tips",
        description:
          "Extensión sobre uña natural con tips de alta calidad para longitudes y formas uniformes.",
      },
      {
        icon: Wand2,
        title: "Sellos & Decoración Artística",
        description:
          "Stamping, líneas finas, foils, glitter y efectos especiales para personalizar cada set.",
      },
    ],
  },
  {
    key: "gel-acabados",
    name: "Gel & Acabados Especiales",
    blurb: "Durabilidad y brillo de salón que cuidan tu uña natural.",
    items: [
      {
        icon: Sparkles,
        title: "Gelish 21 Días (Liso o Decorado)",
        description:
          "Esmaltado semipermanente sobre uña natural con sellado profesional y alto brillo por semanas.",
      },
      {
        icon: Layers,
        title: "Refuerzo y Sellado Profesional",
        description:
          "Técnicas de refuerzo para prolongar la duración y mantener el acabado impecable.",
      },
    ],
  },
  {
    key: "pestanas-cejas",
    name: "Pestañas & Cejas",
    blurb: "Mirada definida con acabados a medida de la forma de tus ojos.",
    items: [
      {
        icon: Eye,
        title: "Extensiones Naturales",
        description:
          "Efecto sutil y elegante que realza tu mirada sin perder naturalidad.",
      },
      {
        icon: Eye,
        title: "Extensiones Híbridas y de Volumen",
        description:
          "Mayor densidad y definición con diseño personalizado (clásicas, híbridas, volumen).",
      },
      {
        icon: Eye,
        title: "Lash Lifting & Laminado de Pestañas",
        description:
          "Levantamiento y moldeado de tus pestañas naturales para un rizo duradero sin extensiones.",
      },
      {
        icon: Brush,
        title: "Diseño y Depilación de Cejas",
        description:
          "Perfilado preciso para armonizar tus rasgos; puede incluir tinte o henna a solicitud.",
      },
    ],
  },
  {
    key: "depilacion",
    name: "Depilación Facial & Corporal",
    blurb: "Piel suave con técnicas cuidadosas para zonas delicadas.",
    items: [
      {
        icon: Scissors,
        title: "Bozo y Rostro Completo",
        description:
          "Depilación precisa y gentil que deja la piel uniforme y tersa.",
      },
      {
        icon: Scissors,
        title: "Cejas, Axilas y Zonas Delicadas",
        description:
          "Procedimiento profesional con productos de calidad para minimizar irritación.",
      },
    ],
  },
  {
    key: "especiales",
    name: "Servicios Especiales",
    blurb: "Comodidad y flexibilidad para tu agenda.",
    items: [
      {
        icon: Home,
        title: "Servicio a Domicilio",
        description:
          "Atención personalizada en tu hogar con todos los implementos necesarios y protocolos de higiene.",
      },
      {
        icon: Clock,
        title: "Horarios Flexibles",
        description:
          "Agenda tu cita cuando mejor se adapte a tu rutina.",
      },
    ],
  },
];

// Componente de tarjeta de servicio
const ServiceCard = ({ item, index }: { item: ServiceItem; index: number }) => {
  const Icon = item.icon;
  return (
    <Card
      className="border-border/50 hover:border-primary transition-all duration-300 hover:shadow-elegant animate-slide-in"
      style={{ animationDelay: `${index * 0.06}s` }}
    >
      <CardHeader>
        <div className="w-14 h-14 rounded-full bg-gradient-primary flex items-center justify-center mb-4 shadow-soft">
          <Icon className="h-7 w-7 text-primary-foreground" />
        </div>
        <CardTitle className="text-lg md:text-xl">{item.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{item.description}</CardDescription>
      </CardContent>
    </Card>
  );
};

const Services = () => {
  // Aplana todos los servicios para una vista "Todos"
  const allServices = useMemo<ServiceItem[]>(
    () => categories.flatMap((c) => c.items),
    []
  );

  return (
    <section id="servicios" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Encabezado */}
        <div className="text-center mb-10 md:mb-14 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Servicios</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ofrezco una gama de servicios de belleza profesionales con enfoque en higiene, técnica y resultados duraderos.
          </p>
        </div>

        {/* Tabs de categorías */}
        <Tabs defaultValue="todos" className="max-w-7xl mx-auto">
          <TabsList className="flex flex-wrap gap-2 justify-center">
            <TabsTrigger value="todos">Todos</TabsTrigger>
            {categories.map((cat) => (
              <TabsTrigger key={cat.key} value={cat.key}>
                {cat.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Contenido: Todos */}
          <TabsContent value="todos" className="mt-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allServices.map((s, i) => (
                <ServiceCard key={`all-${i}`} item={s} index={i} />
              ))}
            </div>
          </TabsContent>

          {/* Contenido por categoría */}
          {categories.map((cat) => (
            <TabsContent key={cat.key} value={cat.key} className="mt-8">
              {cat.blurb && (
                <p className="text-center text-muted-foreground mb-6 max-w-3xl mx-auto">
                  {cat.blurb}
                </p>
              )}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cat.items.map((s, i) => (
                  <ServiceCard key={`${cat.key}-${i}`} item={s} index={i} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Services;