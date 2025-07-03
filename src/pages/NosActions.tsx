
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Actions } from "@/components/sections/Actions";

const NosActions = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <Actions />
      </div>
      <Footer />
    </div>
  );
};

export default NosActions;
