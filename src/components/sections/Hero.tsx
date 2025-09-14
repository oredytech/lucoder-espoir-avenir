import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Users, Shield } from "lucide-react";
export const Hero = () => {
  const heroData = [{
    slogan: "Nous redonnons un avenir aux jeunes, femmes et hommes victimes des conflits et catastrophes naturelles",
    image: "/lovable-uploads/reconstruire l'avenir.jpg",
    title: "LUCODER",
    subtitle: "Reconstruire l'avenir",
    previewImage: "/lovable-uploads/reconstruire l'avenir.jpg"
  }, {
    slogan: "Sécurité et justice pour la paix durable : lutter contre la délinquance, c'est reconstruire notre pays",
    image: "/lovable-uploads/WhatsApp Image 2025-09-14 à 10.45.59_d23724c9.jpg",
    title: "LUCODER",
    subtitle: "Justice et sécurité",
    previewImage: "/lovable-uploads/WhatsApp Image 2025-09-14 à 10.45.59_d23724c9.jpg"
  }, {
    slogan: "Ensemble contre la délinquance pour un Congo pacifié",
    image: "/lovable-uploads/congopacifié.jpg",
    title: "LUCODER",
    subtitle: "Congo pacifié",
    previewImage: "/lovable-uploads/congopacifié.jpg"
  }, {
    slogan: "Stoppons l'exode rural pour bâtir l'avenir de notre pays",
    image: "/lovable-uploads/avenirrural.jpg",
    title: "LUCODER",
    subtitle: "Avenir rural",
    previewImage: "/lovable-uploads/avenirrural.jpg"
  }];
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % heroData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  const currentData = heroData[currentSlide];
  return <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Images with Transition */}
      <div className="absolute inset-0">
        {heroData.map((item, index) => <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}>
            <img src={item.image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/60 to-transparent"></div>
          </div>)}
      </div>
      
      <div className="container mx-auto px-4 relative z-10 flex items-center justify-between">
        {/* Left Content */}
        <div className="text-white space-y-6 max-w-2xl">
          <div className="animate-fade-in">
            
            
            <div className="text-xl md:text-2xl font-medium mb-6 text-blue-200">
              {currentData.subtitle}
            </div>
          </div>

          <div className="animate-fade-in" style={{
          animationDelay: '0.3s',
          animationFillMode: 'both'
        }}>
            <p className="text-lg md:text-xl leading-relaxed">
              {currentData.slogan}
            </p>
          </div>

          <div className="flex flex-wrap gap-4 animate-fade-in" style={{
          animationDelay: '0.6s',
          animationFillMode: 'both'
        }}>
            <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
              <Link to="/faire-un-don" className="inline-flex items-center">
                Faire un don <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-900 bg-transparent">
              <Link to="/qui-sommes-nous">En savoir plus</Link>
            </Button>
          </div>
        </div>

        {/* Right Side - Statistics positioned vertically in the middle - Now visible on medium screens */}
        <div className="hidden md:flex flex-col justify-center space-y-6 lg:space-y-8 animate-fade-in" style={{
        animationDelay: '0.9s',
        animationFillMode: 'both'
      }}>
          <div className="text-center">
            <Heart className="h-6 w-6 lg:h-8 lg:w-8 text-red-400 mx-auto mb-2" />
            <p className="text-xl lg:text-2xl font-bold text-white">29</p>
            <p className="text-xs lg:text-sm text-blue-200">Années</p>
          </div>
          <div className="text-center">
            <Users className="h-6 w-6 lg:h-8 lg:w-8 text-green-400 mx-auto mb-2" />
            <p className="text-xl lg:text-2xl font-bold text-white">10K+</p>
            <p className="text-xs lg:text-sm text-blue-200">Vies transformées</p>
          </div>
          <div className="text-center">
            <Shield className="h-6 w-6 lg:h-8 lg:w-8 text-yellow-400 mx-auto mb-2" />
            <p className="text-xl lg:text-2xl font-bold text-white">50+</p>
            <p className="text-xs lg:text-sm text-blue-200">Communautés</p>
          </div>
        </div>
      </div>

      {/* Preview Images - Removed overflow effect, now positioned normally */}
      <div className="absolute bottom-8 right-8 hidden md:flex space-x-3 animate-slide-in-right" style={{
      animationDelay: '1.2s',
      animationFillMode: 'both'
    }}>
        {heroData.map((item, index) => <div key={index} className={`relative group cursor-pointer transition-all duration-300 ${index === currentSlide ? 'scale-110 z-20' : 'opacity-80 hover:opacity-100 z-10'}`} onClick={() => setCurrentSlide(index)}>
            <div className="relative">
              <img src={item.previewImage} alt={`Preview ${index + 1}`} className={`w-40 h-28 md:w-36 md:h-24 lg:w-40 lg:h-28 object-cover rounded-lg border-3 transition-all duration-300 shadow-lg ${index === currentSlide ? 'border-orange-400 shadow-orange-400/50' : 'border-white/50 group-hover:border-white shadow-black/30'}`} />
              
              {/* Overlay avec titre */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-lg flex items-end p-3">
                <div className="text-white">
                  <p className="text-sm font-bold">
                    {index === 0 ? "1996" : index === 1 ? "KIVU" : index === 2 ? "CONGO" : "LOCAL"}
                  </p>
                  <p className="text-xs opacity-90 mt-1">
                    {item.subtitle}
                  </p>
                </div>
              </div>
              
              {/* Active indicator */}
              {index === currentSlide && <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-orange-400 rounded-full border-2 border-white"></div>}
            </div>
          </div>)}
      </div>
    </section>;
};
