
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const DonationsPreview = () => {
  const examples = [
    { amount: "1$", description: "Semences d'amarantes pour une famille déplacée" },
    { amount: "20$", description: "Soigner un enfant ou une femme en zone rurale" },
    { amount: "100$", description: "Réhabiliter un point d'eau potable dans un village" },
    { amount: "500$", description: "Offrir une bourse académique annuelle à deux jeunes" }
  ];

  return (
    <section id="donations" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Faire un don</h2>
          <p className="text-xl text-gray-600 mb-6">
            Offrez de l'espoir. Investissez dans la dignité. Transformez des vies.
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {examples.map((example, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-lg">
                      {example.amount}
                    </div>
                    <p className="text-gray-700">{example.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center space-y-4">
            <p className="text-gray-700 text-lg">
              Votre don nous permet de répondre rapidement aux urgences, de protéger les enfants, 
              de former les jeunes, de soigner les malades et de redonner une chance à ceux qui n'en ont plus.
            </p>
            <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-3">
              <Link to="/faire-un-don">Faire un don maintenant</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
