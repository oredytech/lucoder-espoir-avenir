
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Advocacy } from "@/components/sections/Advocacy";

const Plaidoyer = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <Advocacy />
      </div>
      <Footer />
    </div>
  );
};

export default Plaidoyer;
