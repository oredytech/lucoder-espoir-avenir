
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Heart, Droplets, Wheat, TreePine, Building, Shield, Handshake } from "lucide-react";

export const Actions = () => {
  const actions = [
    {
      icon: Users,
      title: "Formations et réinsertion socio-économique",
      description: "Formations professionnelles en coupe et couture, menuiserie, mécanique, agriculture, élevage. Réinsertion des jeunes en situation de rue et ex-combattants.",
      objectif: "Réduire la délinquance et l'exode rural par l'autonomisation économique."
    },
    {
      icon: Heart,
      title: "Santé communautaire et bien-être",
      description: "Réhabilitation de centres de santé, formations du personnel médical, campagnes de sensibilisation, santé reproductive et soutien psychosocial.",
      objectif: "Renforcer l'accès aux soins de qualité et promouvoir le bien-être intégral des populations vulnérables."
    },
    {
      icon: Droplets,
      title: "Eau, Hygiène et Assainissement (WASH)",
      description: "Réhabilitation de sources d'eau potable, construction de latrines, sensibilisation aux bonnes pratiques d'hygiène et formation de comités de gestion.",
      objectif: "Réduire les maladies hydriques et promouvoir un cadre de vie sain."
    },
    {
      icon: Wheat,
      title: "Développement rural et sécurité alimentaire",
      description: "Appui à la production agricole, formation en techniques agro-écologiques, promotion de l'élevage, transformation des produits et accès aux marchés.",
      objectif: "Améliorer la sécurité alimentaire et réduire les causes structurelles de la pauvreté."
    },
    {
      icon: TreePine,
      title: "Protection de l'environnement",
      description: "Reboisement communautaire, sensibilisation contre la déforestation, promotion des énergies alternatives et création de clubs environnementaux.",
      objectif: "Préserver l'environnement pour les générations futures et renforcer la résilience écologique."
    },
    {
      icon: Building,
      title: "Infrastructures sociales de base",
      description: "Construction et réhabilitation d'écoles, centres de santé, sources d'eau potable et centres communautaires polyvalents.",
      objectif: "Améliorer l'accès équitable aux services sociaux de base."
    },
    {
      icon: Shield,
      title: "Protection de l'enfance",
      description: "Mécanismes de protection communautaire, espaces amis des enfants, prévention des violences basées sur le genre et réinsertion des enfants vulnérables.",
      objectif: "Garantir la protection intégrale des enfants et personnes vulnérables."
    },
    {
      icon: Handshake,
      title: "Paix et cohésion sociale",
      description: "Dialogues communautaires, médiation de conflits, éducation à la paix, formation en leadership pacifique et initiatives de réconciliation.",
      objectif: "Renforcer la cohésion sociale et bâtir des communautés plus résilientes et pacifiques."
    }
  ];

  return (
    <section id="actions" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos actions</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {actions.map((action, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <action.icon className="h-8 w-8 text-blue-600" />
                  <CardTitle className="text-lg text-blue-700">{action.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 text-sm leading-relaxed">{action.description}</p>
                <div className="border-t pt-3">
                  <p className="text-blue-600 font-semibold text-sm">Objectif :</p>
                  <p className="text-gray-600 text-sm italic">{action.objectif}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
