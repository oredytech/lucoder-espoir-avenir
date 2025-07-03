
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { DollarSign, Gift, Target } from "lucide-react";

export const DonationsPreview = () => {
  const examples = [
    { 
      amount: "1$", 
      description: "Semences d'amarantes pour une famille déplacée",
      icon: "🌱"
    },
    { 
      amount: "20$", 
      description: "Soigner un enfant ou une femme en zone rurale",
      icon: "🏥"
    },
    { 
      amount: "100$", 
      description: "Réhabiliter un point d'eau potable dans un village",
      icon: "💧"
    },
    { 
      amount: "500$", 
      description: "Offrir une bourse académique annuelle à deux jeunes",
      icon: "🎓"
    }
  ];

  return (
    <section id="donations" className="py-20 bg-gradient-to-r from-orange-50 to-yellow-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex justify-center mb-4">
            <Gift className="h-16 w-16 text-orange-600" />
          </div>
          <h2 className="text-4xl font-bold text-orange-800 mb-4">Faire un don</h2>
          <p className="text-xl text-orange-600 mb-6">
            Offrez de l'espoir. Investissez dans la dignité. Transformez des vies.
          </p>
          <div className="w-24 h-1 bg-orange-600 mx-auto"></div>
        </div>

        {/* Image inspirante */}
        <div className="relative mb-12 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
          <img 
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&h=300&fit=crop" 
            alt="Impact des dons"
            className="w-full h-48 object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-orange-900/40 rounded-lg flex items-center justify-center">
            <div className="text-center text-white">
              <Target className="h-12 w-12 mx-auto mb-3" />
              <h3 className="text-2xl font-bold">Impact direct sur le terrain</h3>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {examples.map((example, index) => (
              <Card 
                key={index} 
                className="hover:shadow-xl transition-all duration-300 hover-scale border-orange-200 bg-white animate-fade-in"
                style={{ 
                  animationDelay: `${0.4 + index * 0.1}s`, 
                  animationFillMode: 'both' 
                }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-orange-100 text-orange-600 rounded-full w-16 h-16 flex items-center justify-center font-bold text-lg border-2 border-orange-200">
                      {example.amount}
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-700 font-medium">{example.description}</p>
                      <span className="text-2xl">{example.icon}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center space-y-6 animate-fade-in" style={{ animationDelay: '0.8s', animationFillMode: 'both' }}>
            <p className="text-orange-700 text-lg max-w-3xl mx-auto">
              Votre don nous permet de répondre rapidement aux urgences, de protéger les enfants, 
              de former les jeunes, de soigner les malades et de redonner une chance à ceux qui n'en ont plus.
            </p>
            <div className="flex justify-center items-center space-x-2 mb-6">
              <DollarSign className="h-6 w-6 text-orange-600" />
              <span className="text-orange-700 font-semibold">Transparence garantie</span>
            </div>
            <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-3">
              <Link to="/faire-un-don">Faire un don maintenant</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
