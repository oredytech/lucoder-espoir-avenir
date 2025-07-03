
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Hero = () => {
  const slogans = [
    "Nous redonnons un avenir aux jeunes, femmes et hommes victimes des conflits et catastrophes naturelles en construisant leurs campagnes",
    "Sécurité et justice pour la paix durable : lutter contre la délinquance, c'est reconstruire notre pays",
    "Ensemble contre la délinquance pour un Congo pacifié",
    "Stoppons l'exode rural pour bâtir l'avenir de notre pays",
    "Offrir des racines à la jeunesse, pour qu'elle grandisse sans violence et sans exil",
    "Pour une jeunesse engagée, des villages vivants et des chemins sans violence"
  ];

  const [currentSlogan, setCurrentSlogan] = useState(0);

  const heroImages = [
    "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=1920&h=800&fit=crop",
    "https://images.unsplash.com/photo-1517022812141-23620dba5c23?w=1920&h=800&fit=crop",
    "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?w=1920&h=800&fit=crop",
    "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1920&h=800&fit=crop"
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlogan((prev) => (prev + 1) % slogans.length);
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-blue-800/50" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          LUCODER
        </h1>
        <p className="text-xl md:text-2xl mb-8 leading-relaxed min-h-[120px] flex items-center justify-center">
          {slogans[currentSlogan]}
        </p>
        <div className="space-x-4">
          <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-700">
            <Link to="/qui-sommes-nous">Découvrir nos actions</Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="text-white border-white hover:bg-white hover:text-blue-900">
            <Link to="/faire-un-don">Faire un don</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
