import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const whatsappNumber = "5215528620048"; // Actualizar con el número real de Alexandra
  const whatsappMessage = encodeURIComponent("Hola Alexandra! 👋");

  return (
    <Button
      className="fixed bottom-6 right-6 h-16 w-16 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-elegant z-50 animate-float"
      onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank')}
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="h-8 w-8" />
    </Button>
  );
};

export default WhatsAppButton;
