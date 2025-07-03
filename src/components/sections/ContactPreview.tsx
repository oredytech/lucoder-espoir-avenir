
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

export const ContactPreview = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contactez-nous</h2>
          <p className="text-xl text-gray-600 mb-6">
            Une question, un projet, une proposition ? Nous sommes à votre écoute.
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <MapPin className="h-12 w-12 text-blue-600 mx-auto" />
                <CardTitle className="text-blue-700">Adresse</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm">
                  26, avenue Beni, Quartier les Volcans,<br />
                  Commune de Goma, Nord-Kivu/RDC
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Phone className="h-12 w-12 text-blue-600 mx-auto" />
                <CardTitle className="text-blue-700">Téléphone</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm">
                  +243 998 673 879<br />
                  +243 998 398 514<br />
                  +243 895 049 219
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Mail className="h-12 w-12 text-blue-600 mx-auto" />
                <CardTitle className="text-blue-700">Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm">
                  info@lucoder.org<br />
                  lucoderasblrdc@gmail.com
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <Link to="/contact">Nous contacter</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
