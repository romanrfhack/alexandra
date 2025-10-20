import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Contact from "@/components/Contact";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";
import Services1 from "@/components/Services1";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Gallery />
      <Services />
      <Services1 />
      <About />
      <Contact />
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default Index;
