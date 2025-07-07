
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin, Calendar, Users } from "lucide-react";

export const AboutPreview = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-r from-emerald-50 to-teal-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-emerald-800 mb-4">Qui sommes-nous ?</h2>
          <div className="w-24 h-1 bg-emerald-600 mx-auto"></div>
          <p className="text-emerald-600 mt-4 text-lg">Découvrez notre histoire et notre mission</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Logo avec animation */}
          <div className="animate-fade-in hover-scale">
            <div className="bg-white rounded-lg shadow-xl p-8 flex items-center justify-center h-96">
              <img 
                src="/lovable-uploads/600a2e5c-7297-46f1-be2e-136d2bdceefc.png"
                alt="Logo LUCODER"
                className="max-w-full max-h-full object-contain"
              />
            </div>
            
            {/* Statistiques overlays */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="text-center bg-white rounded-lg p-4 shadow-lg">
                <Calendar className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-emerald-800">1996</p>
                <p className="text-sm text-emerald-600">Fondée</p>
              </div>
              <div className="text-center bg-white rounded-lg p-4 shadow-lg">
                <MapPin className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-emerald-800">Kivu</p>
                <p className="text-sm text-emerald-600">Zone d'action</p>
              </div>
              <div className="text-center bg-white rounded-lg p-4 shadow-lg">
                <Users className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-emerald-800">Local</p>
                <p className="text-sm text-emerald-600">Ancrage</p>
              </div>
            </div>
          </div>

          {/* Contenu avec animation */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
            <Card className="shadow-xl border-emerald-200">
              <CardHeader>
                <CardTitle className="text-2xl text-emerald-700">
                  « LUCODER une semence d'espoir née au cœur du chaos »
                </CardTitle>
              </CardHeader>
              <CardContent className="text-emerald-700 leading-relaxed space-y-4">
                <p>
                  C'était en 1996, dans les hautes collines verdoyantes du Kivu, que le destin de nombreuses vies allait discrètement changer. Plus de deux décennies après l'arrivée massive des réfugiés rwandais fuyant le génocide de 1994, l'Est du Zaïre (aujourd'hui RDC) restait profondément bouleversé...
                </p>
                <p>
                  Un homme, Raphaël VAYIKERYE, fils de la terre et témoin direct de ces douleurs, ne pouvait rester indifférent. Il voyait des enfants livrés à eux-mêmes dans les rues de Goma...
                </p>
                <div className="text-center mt-6">
                  <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
                    <Link to="/qui-sommes-nous">En savoir plus</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
