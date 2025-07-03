
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Partnership } from "@/components/sections/Partnership";

const Partenariat = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <Partnership />
      </div>
      <Footer />
    </div>
  );
};

export default Partenariat;
