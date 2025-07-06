import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Shield, Heart, GraduationCap, Megaphone } from "lucide-react";

export const AdvocacyPreview = () => {
  const domains = [
    {
      icon: Shield,
      title: "Droits humains et protection",
      description: "Lutter contre le VBG, la traite des enfants, les arrestations arbitraires, et exiger justice pour les survivants.",
      image: "/lovable-uploads/99198f2b-0fac-4d03-a5ef-13a64cc7614e.png"
    },
    {
      icon: Heart,
      title: "Santé et bien-être communautaire", 
      description: "Revendiquer un meilleur accès aux soins, à la santé mentale, et aux infrastructures médicales en milieu rural.",
      image: "/lovable-uploads/3b9aafc5-a707-4da0-8df4-dd6c90d3ed5c.png"
    },
    {
      icon: GraduationCap,
      title: "Éducation pour tous",
      description: "Mobiliser les autorités pour des écoles accessibles, sûres et inclusives pour les filles, enfants déplacés et enfants handicapés.",
      image: "/lovable-uploads/620e1890-088e-4945-aa78-7398dfe80e56.png"
    }
  ];

  return (
    <section id="advocacy" className="py-20 bg-gradient-to-r from-rose-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex justify-center mb-4">
            <Megaphone className="h-16 w-16 text-rose-600" />
          </div>
          <h2 className="text-4xl font-bold text-rose-800 mb-4">Plaidoyer</h2>
          <p className="text-xl text-rose-600 mb-6">
            Donner une voix aux sans-voix. Défendre les droits. Influencer les politiques.
          </p>
          <div className="w-24 h-1 bg-rose-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {domains.map((domain, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover-scale border-rose-200 bg-white animate-fade-in"
              style={{ 
                animationDelay: `${index * 0.2}s`, 
                animationFillMode: 'both' 
              }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={domain.image} 
                  alt={domain.title}
                  className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-lg">
                  <domain.icon className="h-6 w-6 text-rose-600" />
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-lg text-rose-700">{domain.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-rose-600 text-sm">{domain.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
          <Button asChild className="bg-rose-600 hover:bg-rose-700">
            <Link to="/plaidoyer">En savoir plus sur notre plaidoyer</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
