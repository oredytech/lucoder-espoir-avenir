
import { Hero } from "@/components/sections/Hero";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { ActionsPreview } from "@/components/sections/ActionsPreview";
import { GalleryPreview } from "@/components/sections/GalleryPreview";
import { AdvocacyPreview } from "@/components/sections/AdvocacyPreview";
import { PartnershipPreview } from "@/components/sections/PartnershipPreview";
import { DonationsPreview } from "@/components/sections/DonationsPreview";
import { ContactPreview } from "@/components/sections/ContactPreview";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <AboutPreview />
      <ActionsPreview />
      <GalleryPreview />
      <AdvocacyPreview />
      <PartnershipPreview />
      <DonationsPreview />
      <ContactPreview />
      <Footer />
    </div>
  );
};

export default Index;
