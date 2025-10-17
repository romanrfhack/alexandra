const Gallery = () => {
  // Placeholder images - reemplazar con las fotos reales de Alexandra
  const galleryImages = [
    "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=800",
    "/images/gallery/foto1.webp",
    "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=800",
    "/images/gallery/foto2.webp",
    "/images/gallery/foto3.webp",
    "/images/gallery/foto4.webp",    
  ];

  return (
    <section id="galeria" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Mi Trabajo
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cada detalle cuenta. Descubre algunos de mis trabajos más recientes
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden rounded-2xl shadow-soft hover:shadow-elegant transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={image}
                alt={`Trabajo de belleza ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        <p className="text-center mt-8 text-muted-foreground">
          💅 Estas son solo algunas muestras. Cada trabajo es único y personalizado
        </p>
      </div>
    </section>
  );
};

export default Gallery;
