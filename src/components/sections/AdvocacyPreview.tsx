
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Shield, Heart, GraduationCap } from "lucide-react";

export const AdvocacyPreview = () => {
  const domains = [
    {
      icon: Shield,
      title: "Droits humains et protection",
      description: "Lutter contre le VBG, la traite des enfants, les arrestations arbitraires, et exiger justice pour les survivants."
    },
    {
      icon: Heart,
      title: "Santé et bien-être communautaire",
      description: "Revendiquer un meilleur accès aux soins, à la santé mentale, et aux infrastructures médicales en milieu rural."
    },
    {
      icon: GraduationCap,
      title: "Éducation pour tous",
      description: "Mobiliser les autorités pour des écoles accessibles, sûres et inclusives pour les filles, enfants déplacés et enfants handicapés."
    }
  ];

  return (
    <section id="advocacy" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Plaidoyer</h2>
          <p className="text-xl text-gray-600 mb-6">
            Donner une voix aux sans-voix. Défendre les droits. Influencer les politiques.
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {domains.map((domain, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <domain.icon className="h-8 w-8 text-blue-600" />
                  <CardTitle className="text-lg text-blue-700">{domain.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm">{domain.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild className="bg-blue-600 hover:bg-blue-700">
            <Link to="/plaidoyer">En savoir plus sur notre plaidoyer</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
