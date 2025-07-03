
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Users, Shield } from "lucide-react";

export const Hero = () => {
  const slogans = [
    "Nous redonnons un avenir aux jeunes, femmes et hommes victimes des conflits et catastrophes naturelles",
    "Sécurité et justice pour la paix durable : lutter contre la délinquance, c'est reconstruire notre pays",
    "Ensemble contre la délinquance pour un Congo pacifié",
    "Stoppons l'exode rural pour bâtir l'avenir de notre pays"
  ];

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
      {/* Image de fond avec overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1920&h=1080&fit=crop" 
          alt="Paysage du Kivu"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-blue-900/50"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Animation d'entrée pour le titre */}
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              LUCODER
            </h1>
            <p className="text-xl md:text-2xl font-medium mb-4 text-blue-200">
              Lutte Contre la Délinquance et l'Exode Rural
            </p>
          </div>

          {/* Animation retardée pour le slogan */}
          <div className="animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
            <p className="text-lg md:text-xl mb-8 leading-relaxed max-w-3xl mx-auto">
              {slogans[0]}
            </p>
          </div>

          {/* Icônes et statistiques avec animation */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
            <div className="text-center">
              <Heart className="h-12 w-12 text-red-400 mx-auto mb-3" />
              <p className="text-3xl font-bold text-white">29</p>
              <p className="text-blue-200">Années d'expérience</p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-green-400 mx-auto mb-3" />
              <p className="text-3xl font-bold text-white">10,000+</p>
              <p className="text-blue-200">Vies transformées</p>
            </div>
            <div className="text-center">
              <Shield className="h-12 w-12 text-yellow-400 mx-auto mb-3" />
              <p className="text-3xl font-bold text-white">50+</p>
              <p className="text-blue-200">Communautés servies</p>
            </div>
          </div>

          {/* Boutons d'action avec animation */}
          <div className="space-x-4 animate-fade-in" style={{ animationDelay: '0.9s', animationFillMode: 'both' }}>
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
      </div>
    </section>
  );
};
