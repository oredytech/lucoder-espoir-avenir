
import { MapPin, Phone, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-green-400 mb-4">LUCODER</h3>
            <p className="text-gray-300 mb-4">
              Lutte Contre la Délinquance et l'Exode Rural - Œuvrant depuis 1996 pour la dignité humaine, 
              la paix et le développement durable en République Démocratique du Congo.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-green-400" />
                <span>26, avenue Beni, Goma, Nord-Kivu/RDC</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-green-400" />
                <span>+243 998 673 879</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-green-400" />
                <span>info@lucoder.org</span>
              </div>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Liens rapides</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="text-gray-300 hover:text-green-400 transition-colors">Qui sommes-nous ?</a></li>
              <li><a href="#actions" className="text-gray-300 hover:text-green-400 transition-colors">Nos actions</a></li>
              <li><a href="#gallery" className="text-gray-300 hover:text-green-400 transition-colors">Galerie</a></li>
              <li><a href="#advocacy" className="text-gray-300 hover:text-green-400 transition-colors">Plaidoyer</a></li>
              <li><a href="#partnership" className="text-gray-300 hover:text-green-400 transition-colors">Partenariat</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#donations" className="text-gray-300 hover:text-green-400 transition-colors">Faire un don</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-green-400 transition-colors">Nous contacter</a></li>
              <li><a href="#partnership" className="text-gray-300 hover:text-green-400 transition-colors">Devenir bénévole</a></li>
              <li><a href="#partnership" className="text-gray-300 hover:text-green-400 transition-colors">Partenariat</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 LUCODER ASBL. Tous droits réservés. | ONG reconnue par les autorités compétentes de la RDC
          </p>
        </div>
      </div>
    </footer>
  );
};
