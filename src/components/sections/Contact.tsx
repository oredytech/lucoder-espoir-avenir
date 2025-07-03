
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export const Contact = () => {
  const services = [
    { service: "Partenariats & projets", email: "partenariats@lucoder.org" },
    { service: "Plaidoyer & communication", email: "plaidoyer@lucoder.org" },
    { service: "Bénévolat & recrutement", email: "benevolat@lucoder.org" },
    { service: "Finances & dons", email: "finance@lucoder.org" }
  ];

  const socialMedia = [
    { name: "Facebook", icon: Facebook, url: "#" },
    { name: "Twitter/X", icon: Twitter, url: "#" },
    { name: "Instagram", icon: Instagram, url: "#" },
    { name: "YouTube", icon: Youtube, url: "#" }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contactez-nous</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Vous avez une question, un projet, une proposition ou un besoin urgent ? L'équipe de LUCODER est à votre écoute.
          </p>
          <div className="w-24 h-1 bg-green-600 mx-auto mt-4"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Informations de contact */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-green-600" />
                  <span>Siège social</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  LUCODER ASBL<br />
                  26, avenue Beni, Quartier les Volcans<br />
                  Commune de Goma, Ville de Goma<br />
                  Nord-Kivu/RDC
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-green-600" />
                  <span>Téléphone</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-1">
                <p className="text-gray-700">+243 998 673 879</p>
                <p className="text-gray-700">+243 998 398 514</p>
                <p className="text-gray-700">+243 895 049 219</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-green-600" />
                  <span>E-mail général</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-1">
                <p className="text-gray-700">info@lucoder.org</p>
                <p className="text-gray-700">lucoderasblrdc@gmail.com</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contacts spécifiques</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {services.map((service, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-gray-700 text-sm">{service.service}</span>
                      <span className="text-green-600 text-sm font-medium">{service.email}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-green-600" />
                  <span>Heures d'ouverture</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">Lundi à vendredi : 08h00 – 17h00</p>
                <p className="text-gray-700">Fermé les weekends et jours fériés</p>
              </CardContent>
            </Card>
          </div>

          {/* Formulaire de contact */}
          <Card>
            <CardHeader>
              <CardTitle>Formulaire de contact rapide</CardTitle>
              <p className="text-gray-600">
                Remplissez ce formulaire et notre équipe vous répondra sous 48 heures.
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="nom">Nom *</Label>
                  <Input id="nom" placeholder="Votre nom complet" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail *</Label>
                  <Input id="email" type="email" placeholder="votre@email.com" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="telephone">Téléphone (facultatif)</Label>
                <Input id="telephone" placeholder="+243 ..." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="objet">Objet *</Label>
                <Input id="objet" placeholder="Sujet de votre message" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  placeholder="Décrivez votre demande ou question..."
                  className="min-h-[120px]"
                />
              </div>
              <Button className="w-full bg-green-600 hover:bg-green-700">
                Envoyer
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Réseaux sociaux */}
        <div className="mt-16">
          <h3 className="text-xl font-bold text-center mb-8">Suivez-nous sur les réseaux sociaux</h3>
          <div className="flex justify-center space-x-6">
            {socialMedia.map((social, index) => (
              <a
                key={index}
                href={social.url}
                className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center hover:bg-green-700 transition-colors"
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Carte (placeholder) */}
        <div className="mt-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Nous localiser</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Carte Google Maps sera intégrée ici</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
