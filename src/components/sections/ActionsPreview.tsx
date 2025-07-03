
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Heart, Droplets, Wheat } from "lucide-react";

export const ActionsPreview = () => {
  const actions = [
    {
      icon: Users,
      title: "Formations et réinsertion socio-économique",
      description: "Formations professionnelles en coupe et couture, menuiserie, mécanique, agriculture, élevage. Réinsertion des jeunes en situation de rue et ex-combattants."
    },
    {
      icon: Heart,
      title: "Santé communautaire et bien-être",
      description: "Réhabilitation de centres de santé, formations du personnel médical, campagnes de sensibilisation, santé reproductive et soutien psychosocial."
    },
    {
      icon: Droplets,
      title: "Eau, Hygiène et Assainissement (WASH)",
      description: "Réhabilitation de sources d'eau potable, construction de latrines, sensibilisation aux bonnes pratiques d'hygiène."
    },
    {
      icon: Wheat,
      title: "Développement rural et sécurité alimentaire",
      description: "Appui à la production agricole, formation en techniques agro-écologiques, promotion de l'élevage, transformation des produits."
    }
  ];

  return (
    <section id="actions" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos actions</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {actions.map((action, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <action.icon className="h-8 w-8 text-blue-600" />
                  <CardTitle className="text-lg text-blue-700">{action.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm leading-relaxed">{action.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild className="bg-blue-600 hover:bg-blue-700">
            <Link to="/nos-actions">Voir toutes nos actions</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
