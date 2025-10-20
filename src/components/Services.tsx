import { useMemo, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Tipos de datos
interface ServiceItem {
  imageUrl?: string; // imagen opcional específica del servicio
  title: string;
  description: string;
}

interface ServiceCategory {
  key: string;
  name: string;
  blurb?: string;
  items: ServiceItem[];
}

// Utilidad: imagen de ejemplo por título si no se proporcionó explícitamente
const getPlaceholderImage = (title: string) => {
  const t = title.toLowerCase();
  if (t.includes("podolog")) return "https://picsum.photos/seed/podologia/1200/800";
  if (t.includes("manicure") || t.includes("manicura")) return "https://picsum.photos/seed/manicure/1200/800";
  if (t.includes("pedicure") || t.includes("pedicura")) return "https://picsum.photos/seed/pedicure/1200/800";
  if (t.includes("esculturales") || t.includes("tips")) return "https://picsum.photos/seed/unias/1200/800";
  if (t.includes("gelish") || t.includes("gel")) return "https://picsum.photos/seed/gelish/1200/800";
  if (t.includes("pestañ") || t.includes("lash")) return "https://picsum.photos/seed/lashes/1200/800";
  if (t.includes("ceja")) return "https://picsum.photos/seed/cejas/1200/800";
  if (t.includes("depilación") || t.includes("depilacion")) return "https://picsum.photos/seed/depilacion/1200/800";
  if (t.includes("domicilio")) return "https://picsum.photos/seed/domicilio/1200/800";
  return "https://picsum.photos/seed/beauty/1200/800";
};

// Datos organizados por categoría (algunas con imageUrl de ejemplo)
const categories: ServiceCategory[] = [
  {
    key: "manos-pies",
    name: "Manos & Pies",
    blurb: "Cuidado integral con técnicas profesionales, higiene estricta y productos de alto rendimiento.",
    items: [
      {
        imageUrl: "https://picsum.photos/seed/manosypies/1200/800",
        title: "Manicure & Pedicure Profesional",
        description:
          "Limpieza, limado, cutícula y esmaltado con hidratación profunda para manos y pies impecables.",
      },
      {
        imageUrl: "https://picsum.photos/seed/podologia-cuidado/1200/800",
        title: "Podología Básica",
        description:
          "Atención especializada para el bienestar de tus pies: corte correcto, prevención de molestias comunes y recomendaciones de cuidado.",
      },
      {
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
        imageUrl: "https://picsum.photos/seed/esculturales3d/1200/800",
        title: "Uñas Esculturales con Diseño 3D",
        description:
          "Extensión y estructura profesional con arte a mano alzada y detalles 3D para un look único.",
      },
      {
        title: "Aplicación con Tips",
        description:
          "Extensión sobre uña natural con tips de alta calidad para longitudes y formas uniformes.",
      },
      {
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
        imageUrl: "https://picsum.photos/seed/gelish21/1200/800",
        title: "Gelish 21 Días (Liso o Decorado)",
        description:
          "Esmaltado semipermanente sobre uña natural con sellado profesional y alto brillo por semanas.",
      },
      {
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
        title: "Extensiones Naturales",
        description:
          "Efecto sutil y elegante que realza tu mirada sin perder naturalidad.",
      },
      {
        imageUrl: "https://picsum.photos/seed/volumen/1200/800",
        title: "Extensiones Híbridas y de Volumen",
        description:
          "Mayor densidad y definición con diseño personalizado (clásicas, híbridas, volumen).",
      },
      {
        title: "Lash Lifting & Laminado de Pestañas",
        description:
          "Levantamiento y moldeado de tus pestañas naturales para un rizo duradero sin extensiones.",
      },
      {
        imageUrl: "https://picsum.photos/seed/cejas/1200/800",
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
        title: "Bozo y Rostro Completo",
        description:
          "Depilación precisa y gentil que deja la piel uniforme y tersa.",
      },
      {
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
        imageUrl: "https://picsum.photos/seed/domicilio/1200/800",
        title: "Servicio a Domicilio",
        description:
          "Atención personalizada en tu hogar con todos los implementos necesarios y protocolos de higiene.",
      },
      {
        title: "Horarios Flexibles",
        description:
          "Agenda tu cita cuando mejor se adapte a tu rutina.",
      },
    ],
  },
];

// Componente de tarjeta de servicio con imagen de encabezado
const ServiceCard = ({ item, index }: { item: ServiceItem; index: number }) => {
  const cover = item.imageUrl ?? getPlaceholderImage(item.title);
  return (
    <Card
      className="border-border/50 hover:border-primary transition-all duration-300 hover:shadow-elegant animate-slide-in"
      style={{ animationDelay: `${index * 0.06}s` }}
    >
      <CardHeader>
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl mb-4 shadow-soft">
          <img src={cover} alt={item.title} className="h-full w-full object-cover" loading="lazy" />
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
  const [active, setActive] = useState<string>("todos");

  // Aplana todos los servicios para una vista "Todos"
  const allServices = useMemo<ServiceItem[]>(() => categories.flatMap((c) => c.items), []);

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

        {/* Select móvil para facilitar navegación */}
        <div className="md:hidden mb-4">
          <label htmlFor="service-category" className="sr-only">Categoría</label>
          <select
            id="service-category"
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm"
            value={active}
            onChange={(e) => setActive(e.target.value)}
          >
            <option value="todos">Todos</option>
            {categories.map((c) => (
              <option key={c.key} value={c.key}>
                {c.name}
              </option>
            ))}
          </select>
        </div>

        {/* Tabs desktop/tablet con scroll horizontal en overflow */}
        <Tabs value={active} onValueChange={setActive} className="max-w-7xl mx-auto">
          <TabsList className="hidden md:flex gap-2 justify-start overflow-x-auto no-scrollbar -mx-4 px-4">
            <TabsTrigger value="todos" className="whitespace-nowrap">Todos</TabsTrigger>
            {categories.map((cat) => (
              <TabsTrigger key={cat.key} value={cat.key} className="whitespace-nowrap">
                {cat.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Contenido: Todos */}
          <TabsContent value="todos" className="mt-6 md:mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {allServices.map((s, i) => (
                <ServiceCard key={`all-${i}`} item={s} index={i} />
              ))}
            </div>
          </TabsContent>

          {/* Contenido por categoría */}
          {categories.map((cat) => (
            <TabsContent key={cat.key} value={cat.key} className="mt-6 md:mt-8">
              {cat.blurb && (
                <p className="text-center text-muted-foreground mb-4 md:mb-6 max-w-3xl mx-auto">
                  {cat.blurb}
                </p>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
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