
import { Toaster } from "sonner";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ServicesSection } from "./components/ServicesSection";
import { GallerySection } from "./components/GallerySection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

function App() {
  // Disable right-click functionality
  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen" onContextMenu={handleContextMenu}>
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <ContactSection />
      <Footer />
      <Toaster position="top-center" />
    </div>
  );
}

export default App;
