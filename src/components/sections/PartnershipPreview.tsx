
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Handshake, Users, Globe, Heart } from "lucide-react";

export const PartnershipPreview = () => {
  const partnerTypes = [
    {
      icon: Globe,
      title: "Partenaires internationaux",
      count: "15+",
      description: "Agences des Nations Unies, ONGI"
    },
    {
      icon: Users,
      title: "Bénévoles actifs",
      count: "200+", 
      description: "Volontaires communautaires engagés"
    },
    {
      icon: Heart,
      title: "Collaborations locales",
      count: "50+",
      description: "Autorités et leaders communautaires"
    }
  ];

  return (
    <section id="partnership" className="py-20 bg-gradient-to-r from-green-50 to-emerald-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex justify-center mb-4">
            <Handshake className="h-16 w-16 text-green-600" />
          </div>
          <h2 className="text-4xl font-bold text-green-800 mb-4">Partenariat & Bénévolat</h2>
          <p className="text-xl text-green-600 mb-6">
            Ensemble, construisons un avenir plus juste, solidaire et durable
          </p>
          <div className="w-24 h-1 bg-green-600 mx-auto"></div>
        </div>

        {/* Image principale avec overlay */}
        <div className="relative mb-16 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
          <img 
            src="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=1200&h=400&fit=crop" 
            alt="Partenariat communautaire"
            className="w-full h-64 object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-green-900/40 rounded-lg flex items-center justify-center">
            <div className="text-center text-white">
              <h3 className="text-3xl font-bold mb-2">Nos partenaires, notre force</h3>
              <p className="text-xl">Depuis sa création, LUCODER s'appuie sur des synergies stratégiques</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {partnerTypes.map((type, index) => (
            <Card 
              key={index} 
              className="text-center hover:shadow-xl transition-all duration-300 hover-scale border-green-200 bg-white animate-fade-in"
              style={{ 
                animationDelay: `${0.4 + index * 0.1}s`, 
                animationFillMode: 'both' 
              }}
            >
              <CardHeader>
                <type.icon className="h-12 w-12 text-green-600 mx-auto mb-3" />
                <CardTitle className="text-lg text-green-700">{type.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-green-800 mb-2">{type.count}</p>
                <p className="text-green-600 text-sm">{type.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center space-y-4 animate-fade-in" style={{ animationDelay: '0.8s', animationFillMode: 'both' }}>
          <p className="text-green-700 text-lg max-w-2xl mx-auto">
            Rejoignez notre réseau de partenaires et bénévoles pour amplifier notre impact sur le terrain
          </p>
          <div className="space-x-4">
            <Button asChild className="bg-green-600 hover:bg-green-700">
              <Link to="/partenariat">Devenir partenaire</Link>
            </Button>
            <Button asChild variant="outline" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
              <Link to="/partenariat">Être bénévole</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
