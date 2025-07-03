
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Gallery } from "@/components/sections/Gallery";

const Galerie = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <Gallery />
      </div>
      <Footer />
    </div>
  );
};

export default Galerie;
