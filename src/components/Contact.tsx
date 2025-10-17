import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, Calendar, Clock, MapPin } from "lucide-react";

const Contact = () => {
  const whatsappNumber = "5215528620048"; // Actualizar con el número real de Alexandra
  const whatsappMessage = encodeURIComponent("Hola Alexandra, me gustaría información sobre tus servicios 💅");

  return (
    <section id="contacto" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Agenda tu Cita
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Contáctame por WhatsApp para agendar tu cita o resolver cualquier duda
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <Card className="p-8 shadow-elegant border-border/50 animate-slide-in">
            <h3 className="text-2xl font-bold mb-6 text-foreground">
              ¿Cómo Funciona?
            </h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-foreground font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Contáctame</h4>
                  <p className="text-muted-foreground text-sm">
                    Envíame un mensaje por WhatsApp
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-foreground font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Elige tu Servicio</h4>
                  <p className="text-muted-foreground text-sm">
                    Cuéntame qué servicio te interesa
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-foreground font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Confirma tu Cita</h4>
                  <p className="text-muted-foreground text-sm">
                    Acordamos fecha, hora y lugar
                  </p>
                </div>
              </div>
            </div>

            <Button
              className="w-full mt-8 bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-soft"
              size="lg"
              onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank')}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Contactar por WhatsApp
            </Button>
          </Card>

          <Card className="p-8 shadow-elegant border-border/50 animate-slide-in" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-2xl font-bold mb-6 text-foreground">
              Información
            </h3>
            
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-gradient-accent flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-accent-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Horarios</h4>
                  <p className="text-muted-foreground text-sm">
                    Lunes a Sábado<br />
                    9:00 AM - 7:00 PM
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-gradient-accent flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-accent-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Ubicación</h4>
                  <p className="text-muted-foreground text-sm">
                    Estética + Servicio a Domicilio<br />
                    (Ubicación por WhatsApp)
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-gradient-accent flex items-center justify-center flex-shrink-0">
                  <Calendar className="h-6 w-6 text-accent-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Citas</h4>
                  <p className="text-muted-foreground text-sm">
                    Agenda con anticipación<br />
                    Clientes recurrentes: prioridad
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <p className="text-center mt-8 text-muted-foreground max-w-2xl mx-auto">
          💝 Para clientes recurrentes, puedo verificar disponibilidad directamente en mi calendario. 
          Para nuevos clientes, con gusto responderé tus dudas sobre precios y servicios.
        </p>
      </div>
    </section>
  );
};

export default Contact;
