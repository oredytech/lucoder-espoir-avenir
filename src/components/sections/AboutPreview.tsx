
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const AboutPreview = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Qui sommes-nous ?</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-blue-700">« LUCODER une semence d'espoir née au cœur du chaos »</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 leading-relaxed space-y-4">
              <p>
                C'était en 1996, dans les hautes collines verdoyantes du Kivu, que le destin de nombreuses vies allait discrètement changer. Plus de deux décennies après l'arrivée massive des réfugiés rwandais fuyant le génocide de 1994, l'Est du Zaïre (aujourd'hui RDC) restait profondément bouleversé par les conflits, les déplacements, la pauvreté et la montée inquiétante de la délinquance juvénile.
              </p>
              <p>
                Un homme, Raphaël VAYIKERYE, fils de la terre et témoin direct de ces douleurs, ne pouvait rester indifférent...
              </p>
              <div className="text-center mt-6">
                <Button asChild className="bg-blue-600 hover:bg-blue-700">
                  <Link to="/qui-sommes-nous">En savoir plus</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
