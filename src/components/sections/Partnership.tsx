
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Heart, Briefcase } from "lucide-react";

export const Partnership = () => {
  const partners = [
    { name: "FAO", logo: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=100&h=60&fit=crop" },
    { name: "UNFPA", logo: "https://images.unsplash.com/photo-1517022812141-23620dba5c23?w=100&h=60&fit=crop" },
    { name: "MONUSCO", logo: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?w=100&h=60&fit=crop" },
    { name: "USAID", logo: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=100&h=60&fit=crop" },
    { name: "ONUSIDA", logo: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?w=100&h=60&fit=crop" },
    { name: "NRC", logo: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=100&h=60&fit=crop" },
    { name: "DRC", logo: "https://images.unsplash.com/photo-1517022812141-23620dba5c23?w=100&h=60&fit=crop" }
  ];

  const volunteerDomains = [
    "Animation des clubs jeunes et environnement",
    "Alphabétisation et soutien scolaire",
    "Sensibilisation communautaire et théâtre participatif",
    "Communication, multimédia et gestion de contenu",
    "Appui logistique aux projets ruraux",
    "Documentation, traduction, suivi-évaluation (MEAL)",
    "Campagne mondiale de mobilisation des ressources"
  ];

  const volunteerProfile = [
    "Jeunes, étudiants, professionnels, retraités, ou membres de la diaspora",
    "Disponibilité, motivation et respect des principes humanitaires",
    "Expérience locale, régionale ou internationale (un atout, mais pas obligatoire)"
  ];

  const pourquoiRejoindre = [
    "Agir au plus près des communautés vulnérables",
    "Apporter une valeur ajoutée à votre profil personnel et professionnel",
    "Intégrer un réseau engagé pour la paix, la dignité humaine et le développement durable",
    "Participer à des missions porteuses de sens"
  ];

  const testimonials = [
    {
      quote: "Avec LUCODER, j'ai découvert que mon engagement peut vraiment changer des choses, même avec peu de moyens",
      author: "Eric, Bénévole à Goma"
    },
    {
      quote: "Ce partenariat nous a permis d'atteindre des zones jusque-là oubliées. LUCODER est un relais précieux",
      author: "Responsable NRC, partenaire à Masisi"
    }
  ];

  return (
    <section id="partnership" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Partenariat & Bénévolat</h2>
          <p className="text-xl text-gray-600 mb-6">
            « Ensemble, construisons un avenir plus juste, solidaire et durable »
          </p>
          <div className="w-24 h-1 bg-green-600 mx-auto"></div>
        </div>

        {/* Nos partenaires */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Nos partenaires, notre force</h3>
          <p className="text-gray-700 text-center mb-8 max-w-4xl mx-auto">
            Depuis sa création, LUCODER s'appuie sur des partenariats stratégiques et des synergies locales, nationales, régionales et internationales pour renforcer son impact sur le terrain. Institutions publiques, agences des Nations Unies, ONGI, fondations, entreprises ou médias. Chacun joue un rôle essentiel dans l'accomplissement de notre mission.
          </p>
          
          {/* Logos des partenaires */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 mb-8">
            {partners.map((partner, index) => (
              <div key={index} className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              Devenir partenaire
            </Button>
            <p className="text-sm text-gray-600 mt-2">
              ou écrivez à partenariat@lucoder.org
            </p>
          </div>
        </div>

        {/* Bénévolat */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">Le bénévolat : votre temps peut changer une vie</h3>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Vous êtes passionné(e) par le développement, l'entrepreneuriat, la justice sociale ou la protection de l'environnement ? Devenez bénévole ou volontaire communautaire au sein de LUCODER !
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Domaines d'engagement */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Briefcase className="h-5 w-5 text-green-600" />
                  <span>Domaines d'engagement</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {volunteerDomains.map((domain, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-700">{domain}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Profil recherché */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-green-600" />
                  <span>Profil recherché</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {volunteerProfile.map((profile, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-700">{profile}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Pourquoi nous rejoindre */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Heart className="h-5 w-5 text-green-600" />
                  <span>Pourquoi nous rejoindre ?</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {pourquoiRejoindre.map((raison, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-700">{raison}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mb-12">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 mr-4">
              Déposer ma candidature
            </Button>
            <p className="text-sm text-gray-600 mt-2">
              ou contactez-nous à : benevolat@lucoder.org
            </p>
          </div>
        </div>

        {/* Témoignages */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8">Ils et elles témoignent</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <blockquote className="text-lg italic text-gray-700 mb-4">
                    "{testimonial.quote}"
                  </blockquote>
                  <cite className="text-green-600 font-semibold">- {testimonial.author}</cite>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
