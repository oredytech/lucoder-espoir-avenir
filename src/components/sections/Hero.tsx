
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Users, Shield } from "lucide-react";

export const Hero = () => {
  const heroData = [
    {
      slogan: "Nous redonnons un avenir aux jeunes, femmes et hommes victimes des conflits et catastrophes naturelles",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1920&h=1080&fit=crop",
      title: "LUCODER",
      subtitle: "Reconstruire l'avenir",
      previewImage: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=300&h=200&fit=crop"
    },
    {
      slogan: "Sécurité et justice pour la paix durable : lutter contre la délinquance, c'est reconstruire notre pays",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&h=1080&fit=crop",
      title: "LUCODER",
      subtitle: "Justice et sécurité",
      previewImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop"
    },
    {
      slogan: "Ensemble contre la délinquance pour un Congo pacifié",
      image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1920&h=1080&fit=crop",
      title: "LUCODER",
      subtitle: "Congo pacifié",
      previewImage: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=300&h=200&fit=crop"
    },
    {
      slogan: "Stoppons l'exode rural pour bâtir l'avenir de notre pays",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&h=1080&fit=crop",
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
            <div className="text-sm font-medium text-blue-300 mb-2 tracking-wide">
              INSIDE THE
            </div>
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

        {/* Right Side - Statistics positioned vertically in the middle */}
        <div className="hidden lg:flex flex-col justify-center space-y-8 animate-fade-in" style={{ animationDelay: '0.9s', animationFillMode: 'both' }}>
          <div className="text-center">
            <Heart className="h-8 w-8 text-red-400 mx-auto mb-2" />
            <p className="text-2xl font-bold text-white">29</p>
            <p className="text-sm text-blue-200">Années</p>
          </div>
          <div className="text-center">
            <Users className="h-8 w-8 text-green-400 mx-auto mb-2" />
            <p className="text-2xl font-bold text-white">10K+</p>
            <p className="text-sm text-blue-200">Vies transformées</p>
          </div>
          <div className="text-center">
            <Shield className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
            <p className="text-2xl font-bold text-white">50+</p>
            <p className="text-sm text-blue-200">Communautés</p>
          </div>
        </div>
      </div>

      {/* Preview Images at bottom right - Now larger with slogans */}
      <div className="absolute bottom-8 right-8 hidden lg:flex flex-col space-y-4 animate-slide-in-right" style={{ animationDelay: '1.2s', animationFillMode: 'both' }}>
        {heroData.map((item, index) => (
          <div 
            key={index}
            className={`relative group cursor-pointer transition-all duration-300 ${
              index === currentSlide ? 'scale-110 opacity-100' : 'opacity-70 hover:opacity-90'
            }`}
            onClick={() => setCurrentSlide(index)}
          >
            {/* Slogan above image */}
            <div className="absolute -top-16 left-0 right-0 z-10">
              <p className={`text-white text-xs leading-tight transition-opacity duration-300 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0 group-hover:opacity-80'
              }`}>
                {item.slogan.length > 60 ? item.slogan.substring(0, 60) + '...' : item.slogan}
              </p>
            </div>
            
            <img 
              src={item.previewImage}
              alt={`Preview ${index + 1}`}
              className={`w-32 h-20 object-cover rounded border-2 transition-all duration-300 ${
                index === currentSlide 
                  ? 'border-orange-400 shadow-lg shadow-orange-400/50' 
                  : 'border-white/30 group-hover:border-white'
              }`}
            />
          </div>
        ))}
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {heroData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>

      {/* Date indicator like National Geographic */}
      <div className="absolute top-1/2 right-8 transform -translate-y-1/2 hidden xl:block">
        <div className="writing-mode-vertical text-white/60 text-sm tracking-widest">
          EXPLORE • 02/04
        </div>
      </div>
    </section>
  );
};
