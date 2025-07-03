
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

export const ContactPreview = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-slate-100 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex justify-center mb-4">
            <MessageCircle className="h-16 w-16 text-slate-600" />
          </div>
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Contactez-nous</h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-6">
            Vous avez une question, un projet, une proposition ou un besoin urgent ? L'équipe de LUCODER est à votre écoute.
          </p>
          <div className="w-24 h-1 bg-slate-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Informations de contact */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
            <Card className="hover:shadow-lg transition-shadow border-slate-200">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-slate-700">
                  <MapPin className="h-6 w-6 text-slate-600" />
                  <span>Notre siège</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  26, avenue Beni, Quartier les Volcans<br />
                  Commune de Goma, Nord-Kivu/RDC
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-slate-200">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-slate-700">
                  <Phone className="h-6 w-6 text-slate-600" />
                  <span>Téléphone</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">+243 998 673 879</p>
                <p className="text-slate-600">+243 998 398 514</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-slate-200">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-slate-700">
                  <Mail className="h-6 w-6 text-slate-600" />
                  <span>E-mail</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">info@lucoder.org</p>
                <p className="text-slate-600">lucoderasblrdc@gmail.com</p>
              </CardContent>
            </Card>
          </div>

          {/* Image et call to action */}
          <div className="text-center animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
            <img 
              src="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&h=400&fit=crop" 
              alt="Équipe LUCODER"
              className="w-full rounded-lg shadow-xl mb-6 hover-scale"
            />
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Prêts à vous écouter</h3>
            <p className="text-slate-600 mb-6">
              Notre équipe répond sous 48 heures à toutes vos questions et propositions.
            </p>
            <Button asChild className="bg-slate-600 hover:bg-slate-700">
              <Link to="/contact">Nous contacter</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
