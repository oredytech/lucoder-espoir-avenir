import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Heart, GraduationCap, Wheat, TreePine, Handshake } from "lucide-react";

export const Advocacy = () => {
  const advocacyDomains = [
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
    },
    {
      icon: Wheat,
      title: "Développement rural & sécurité alimentaire",
      description: "Défendre les droits des agriculteurs & éleveurs familiaux, l'accès à la terre, au financement, à l'eau et aux marchés locaux."
    },
    {
      icon: TreePine,
      title: "Climat, environnement et justice écologique",
      description: "Dénoncer la déforestation illégale, sensibiliser à la justice climatique, et promouvoir des politiques vertes locales."
    },
    {
      icon: Handshake,
      title: "Paix, cohésion sociale et réinsertion",
      description: "Plaider pour la réhabilitation des ex-combattants, le soutien aux victimes des conflits, et l'appui aux structures locales de médiation."
    }
  ];

  const objectives = [
    "Protéger les droits fondamentaux des femmes, des enfants, des jeunes et des personnes vulnérables",
    "Influencer les politiques publiques en faveur du développement rural, de l'accès aux soins, à l'éducation et à l'eau potable",
    "Combattre les causes structurelles de la délinquance, de l'exode rural, de l'exploitation des enfants et des violences sexuelles",
    "Promouvoir la paix, la justice sociale et la cohésion intercommunautaire",
    "Plaider pour une gestion durable de l'environnement et des ressources naturelles"
  ];

  const moyensAction = [
    "Rédaction de notes de plaidoyer, alertes humanitaires, messages communautaires",
    "Organisation de dialogues politiques, forum citoyens et tribunes communautaires",
    "Campagnes de communication sociale : radios communautaires, WhatsApp, affiches, théâtre participatif",
    "Travail avec les OSC locales, autorités coutumières, réseaux régionaux et agences des Nations Unies"
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

        {/* Description */}
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-gray-700 leading-relaxed text-center">
            Depuis sa création, LUCODER s'engage activement dans le plaidoyer communautaire et institutionnel pour faire entendre les besoins des populations marginalisées, victimes des conflits, d'abus ou de pauvreté structurelle. À travers ses actions de terrain, ses réseaux et ses alliances, l'organisation porte la voix des sans-voix auprès des décideurs locaux, nationaux, régionaux et internationaux.
          </p>
        </div>

        {/* Objectifs */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Nos objectifs de plaidoyer</h3>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {objectives.map((objective, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">
                  {index + 1}
                </div>
                <p className="text-gray-700">{objective}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Domaines de plaidoyer */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Nos domaines de plaidoyer</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advocacyDomains.map((domain, index) => (
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
        </div>

        {/* Moyens d'action */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Nos moyens d'action</h3>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {moyensAction.map((moyen, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">{moyen}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact plaidoyer */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-xl text-blue-700">Vous souhaitez nous soutenir ?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Vous êtes journaliste, chercheur, parlementaire ou activiste ?
              </p>
              <p className="text-gray-700">
                Contactez notre équipe Plaidoyer et relations Institutionnelles :
              </p>
              <div className="space-y-2">
                <p className="text-blue-600 font-semibold">E-mail : plaidoyer@lucoder.org</p>
                <p className="text-gray-600">
                  Tél. : +243 994 133 206 ; +243 998 673 879 ; +243 998 398 514 ; +243 895 049 219
                </p>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700">
                Nous contacter
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
