
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Actions } from "@/components/sections/Actions";
import { Gallery } from "@/components/sections/Gallery";
import { Advocacy } from "@/components/sections/Advocacy";
import { Partnership } from "@/components/sections/Partnership";
import { Donations } from "@/components/sections/Donations";
import { Contact } from "@/components/sections/Contact";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Actions />
      <Gallery />
      <Advocacy />
      <Partnership />
      <Donations />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
