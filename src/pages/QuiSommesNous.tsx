
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { About } from "@/components/sections/About";

const QuiSommesNous = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <About />
      </div>
      <Footer />
    </div>
  );
};

export default QuiSommesNous;
