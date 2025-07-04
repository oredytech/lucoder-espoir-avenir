
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Users, Shield } from "lucide-react";

export const Hero = () => {
  const heroData = [
    {
      slogan: "Nous redonnons un avenir aux jeunes, femmes et hommes victimes des conflits et catastrophes naturelles",
      image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1920&h=1080&fit=crop",
      title: "1996",
      subtitle: "Reconstruire l'avenir",
      previewImage: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=300&h=200&fit=crop"
    },
    {
      slogan: "Sécurité et justice pour la paix durable : lutter contre la délinquance, c'est reconstruire notre pays",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&h=1080&fit=crop",
      title: "KIVU",
      subtitle: "Justice et sécurité",
      previewImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop"
    },
    {
      slogan: "Ensemble contre la délinquance pour un Congo pacifié",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=1920&h=1080&fit=crop",
      title: "Local",
      subtitle: "Congo pacifié",
      previewImage: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=300&h=200&fit=crop"
    },
    {
      slogan: "Stoppons l'exode rural pour bâtir l'avenir de notre pays",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=1920&h=1080&fit=crop",
      title: "LUCODER",
      subtitle: "Avenir rural",
      previewImage: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=300&h=200&fit=crop"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentData = heroData[currentSlide];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Images with Transition */}
      <div className="absolute inset-0">
        {heroData.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              src={item.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/60 to-transparent"></div>
          </div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10 flex items-center justify-between">
        {/* Left Content */}
        <div className="text-white space-y-6 max-w-2xl">
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold mb-4 leading-none">
              LUCODER
            </h1>
            <div className="text-xl md:text-2xl font-medium mb-6 text-blue-200">
              {currentData.subtitle}
            </div>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
            <p className="text-lg md:text-xl leading-relaxed">
              {currentData.slogan}
            </p>
          </div>

          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
            <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
              <Link to="/faire-un-don" className="inline-flex items-center">
                Faire un don <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-900">
              <Link to="/qui-sommes-nous">En savoir plus</Link>
            </Button>
          </div>
        </div>

        {/* Right Side - Statistics positioned vertically in the middle - Now visible on medium screens */}
        <div className="hidden md:flex flex-col justify-center space-y-6 lg:space-y-8 animate-fade-in" style={{ animationDelay: '0.9s', animationFillMode: 'both' }}>
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

      {/* Preview Cards - Overlapping effect with 40% overflow into main image */}
      <div className="absolute bottom-0 right-8 hidden md:flex space-x-3 animate-slide-in-right transform translate-y-[-40%]" style={{ animationDelay: '1.2s', animationFillMode: 'both' }}>
        {heroData.map((item, index) => (
          <div 
            key={index}
            className={`relative group cursor-pointer transition-all duration-300 ${
              index === currentSlide ? 'scale-105 opacity-100' : 'opacity-80 hover:opacity-100'
            }`}
            onClick={() => setCurrentSlide(index)}
          >
            <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
              <img 
                src={item.previewImage}
                alt={`Preview ${index + 1}`}
                className="w-36 h-24 md:w-32 md:h-20 lg:w-36 lg:h-24 object-cover"
              />
              
              {/* Title overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                <h3 className="text-white text-sm font-bold text-center">
                  {item.title}
                </h3>
              </div>
              
              {/* Slogan overlay on hover */}
              <div className="absolute inset-0 bg-black/70 rounded-lg flex items-center justify-center p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-xs text-center leading-tight font-medium">
                  {item.slogan.length > 35 ? item.slogan.substring(0, 35) + '...' : item.slogan}
                </p>
              </div>
            </div>
            
            {/* Active indicator */}
            {index === currentSlide && (
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-orange-400 rounded-full"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
