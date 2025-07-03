
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Heart, Droplets, Wheat } from "lucide-react";

export const ActionsPreview = () => {
  const actions = [
    {
      icon: Users,
      title: "Formations et réinsertion socio-économique",
      description: "Formations professionnelles en coupe et couture, menuiserie, mécanique, agriculture, élevage. Réinsertion des jeunes en situation de rue et ex-combattants.",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&h=300&fit=crop",
      color: "purple"
    },
    {
      icon: Heart,
      title: "Santé communautaire et bien-être",
      description: "Réhabilitation de centres de santé, formations du personnel médical, campagnes de sensibilisation, santé reproductive et soutien psychosocial.",
      image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=300&fit=crop",
      color: "red"
    },
    {
      icon: Droplets,
      title: "Eau, Hygiène et Assainissement (WASH)",
      description: "Réhabilitation de sources d'eau potable, construction de latrines, sensibilisation aux bonnes pratiques d'hygiène.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      color: "cyan"
    },
    {
      icon: Wheat,
      title: "Développement rural et sécurité alimentaire",
      description: "Appui à la production agricole, formation en techniques agro-écologiques, promotion de l'élevage, transformation des produits.",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop",
      color: "amber"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      purple: "text-purple-600 bg-purple-50 border-purple-200",
      red: "text-red-600 bg-red-50 border-red-200", 
      cyan: "text-cyan-600 bg-cyan-50 border-cyan-200",
      amber: "text-amber-600 bg-amber-50 border-amber-200"
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="actions" className="py-20 bg-gradient-to-r from-slate-50 to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Nos actions</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-gray-600 mt-4 text-lg">Des interventions concrètes pour transformer les vies</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {actions.map((action, index) => (
            <Card 
              key={index} 
              className={`hover:shadow-xl transition-all duration-300 hover-scale animate-fade-in ${getColorClasses(action.color)}`}
              style={{ 
                animationDelay: `${index * 0.2}s`, 
                animationFillMode: 'both' 
              }}
            >
              <div className="relative">
                <img 
                  src={action.image} 
                  alt={action.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="absolute top-4 left-4 bg-white rounded-full p-3 shadow-lg">
                  <action.icon className={`h-8 w-8 ${action.color === 'purple' ? 'text-purple-600' : action.color === 'red' ? 'text-red-600' : action.color === 'cyan' ? 'text-cyan-600' : 'text-amber-600'}`} />
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-lg">{action.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed">{action.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center animate-fade-in" style={{ animationDelay: '0.8s', animationFillMode: 'both' }}>
          <Button asChild className="bg-blue-600 hover:bg-blue-700">
            <Link to="/nos-actions">Voir toutes nos actions</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
