import { Button } from "@/components/ui/button";
import { MessageCircle, Calendar } from "lucide-react";

const Hero = () => {
  const whatsappNumber = "5215528620048"; // Actualizar con el número real de Alexandra
  const whatsappMessage = encodeURIComponent("Hola Alexandra, me gustaría agendar una cita 💅");

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2000')] bg-cover bg-center opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10 text-center animate-fade-in">
        <div className="max-w-4xl mx-auto">
          {/* Logo en lugar del texto con fondo blanco transparente */}
          <div className="flex justify-center mb-6">
            <div className="bg-white/30 p-4 rounded-2xl">
              <img 
                src="/images/logoFondo1.webp" 
                alt="Alexandra - Especialista en Belleza"
                className="max-w-[280px] md:max-w-[400px] lg:max-w-[500px] w-full h-auto drop-shadow-lg"
              />
            </div>
          </div>
          
          <p className="text-2xl md:text-3xl mb-4 text-primary-foreground/95 font-light">
            Especialista en Belleza
          </p>
          <p className="text-lg md:text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Servicios profesionales en estética y a domicilio. Tu belleza, mi pasión.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-elegant w-full sm:w-auto text-lg px-8 py-6"
              onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank')}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Agenda tu Cita
            </Button>
            <Button 
              size="lg"
              variant="secondary"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-soft w-full sm:w-auto text-lg px-8 py-6"
              onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Calendar className="mr-2 h-5 w-5" />
              Ver Servicios
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-8 h-12 border-2 border-primary-foreground/50 rounded-full flex justify-center p-2">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;