
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Contact } from "@/components/sections/Contact";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
