
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Donations } from "@/components/sections/Donations";

const FaireUnDon = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <Donations />
      </div>
      <Footer />
    </div>
  );
};

export default FaireUnDon;
