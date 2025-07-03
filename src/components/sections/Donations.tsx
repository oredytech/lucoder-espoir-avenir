
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DollarSign, CreditCard, Building, HandHeart } from "lucide-react";

export const Donations = () => {
  const impactTable = [
    { amount: "1$", impact: "Offre de la semence des amarantes à une famille déplacée" },
    { amount: "5$", impact: "Offre du matériel scolaire à un enfant déplacé" },
    { amount: "20$", impact: "Soigner un enfant ou une femme en zone rurale" },
    { amount: "50$", impact: "Former un jeune en agriculture durable ou menuiserie" },
    { amount: "100$", impact: "Réhabilite un point d'eau potable dans un village" },
    { amount: "200$ - 500$", impact: "Mettre en place une activité génératrice de revenus pour une famille vulnérable" },
    { amount: "500$", impact: "Offrir une bourse académique annuelle à deux jeunes vulnérables" },
    { amount: "1.000$", impact: "Contribuer à la réhabilitation d'un abri d'une famille vulnérable" }
  ];

  const pourquoiDonner = [
    "Impact direct : vos dons financent des projets concrets et visibles sur le terrain",
    "Transparence : nous vous tenons informés de l'utilisation des fonds",
    "Ancrage local : LUCODER est une organisation congolaise reconnue, active dans les zones à fort besoin",
    "Voix des oubliés : vous soutenez une ONG qui porte les revendications des plus marginalisés"
  ];

  const testimonials = [
    {
      quote: "J'ai fait un petit don chaque mois. Ce n'est pas grand-chose pour moi, mais pour eux, ça change tout.",
      author: "Emmanuel Zigabe, enseignant à Kinshasa-Gombe"
    },
    {
      quote: "Nous soutenons LUCODER pour son travail sur la paix et la cohésion sociale. Ils sont proches des communautés.",
      author: "Nicolas, Chef de la chefferie de Bahunde, Masisi, RDC"
    }
  ];

  return (
    <section id="donations" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Faire un don</h2>
          <p className="text-xl text-gray-600 mb-6">
            « Offrez de l'espoir. Investissez dans la dignité. Transformez des vies ».
          </p>
          <div className="w-24 h-1 bg-green-600 mx-auto"></div>
        </div>

        {/* Introduction */}
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-gray-700 leading-relaxed text-center text-lg">
            Depuis plus de 25 ans, LUCODER agit au cœur des communautés les plus vulnérables de l'Est de la RDC pour lutter contre la pauvreté, la délinquance, les violences, l'exode rural et les injustices sociales. Votre don nous permet de répondre rapidement aux urgences, de protéger les enfants, de former les jeunes, de soigner les malades, de réhabiliter les écoles, et de redonner une chance à ceux qui n'en ont plus.
          </p>
        </div>

        {/* Pourquoi donner */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Pourquoi donner à LUCODER ?</h3>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {pourquoiDonner.map((raison, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">
                  ✓
                </div>
                <p className="text-gray-700">{raison}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Impact du don */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Comment votre don est utilisé ?</h3>
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-semibold text-green-700">MONTANT</th>
                      <th className="text-left py-3 px-4 font-semibold text-green-700">CE QU'IL PERMET</th>
                    </tr>
                  </thead>
                  <tbody>
                    {impactTable.map((item, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4 font-semibold text-green-600">{item.amount}</td>
                        <td className="py-3 px-4 text-gray-700">{item.impact}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Modes de don */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Modes de don disponibles</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CreditCard className="h-5 w-5 text-green-600" />
                  <span>Mobile Money</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p><strong>Airtel Money:</strong> +243 994 ... ... (LUCODER ASBL)</p>
                <p><strong>M-Pesa:</strong> [Numéro à compléter]</p>
                <p><strong>Orange Money:</strong> +243 895 ... ... (LUCODER ASBL)</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Building className="h-5 w-5 text-green-600" />
                  <span>Virement bancaire</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p><strong>Banque:</strong> TMB SA</p>
                <p><strong>Nom du compte:</strong> LUCODER ASBL</p>
                <p><strong>N° du compte:</strong> [À compléter]</p>
                <p><strong>Code swift:</strong> [À compléter]</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <HandHeart className="h-5 w-5 text-green-600" />
                  <span>Don en espèces</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p><strong>Adresse:</strong> 26, avenue Beni, Quartier les Volcans, Commune de Goma, Ville de Goma, Nord-Kivu/RDC</p>
                <p><strong>Contact:</strong> +243 998 673 879</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Témoignages */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Ils nous ont déjà soutenus</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <blockquote className="text-lg italic text-gray-700 mb-4">
                    "{testimonial.quote}"
                  </blockquote>
                  <cite className="text-green-600 font-semibold">– {testimonial.author}</cite>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto bg-green-50">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold text-green-700 mb-4">
                Faites partie du changement. Dès aujourd'hui.
              </h3>
              <p className="text-gray-700 mb-6">Un geste simple. Un effet durable</p>
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                <DollarSign className="h-5 w-5 mr-2" />
                FAIRE UN DON MAINTENANT
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
