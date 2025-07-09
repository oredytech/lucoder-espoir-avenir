
import { MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">LUCODER</h3>
            <p className="text-gray-300 mb-4">
              Lutte Contre la Délinquance et l'Exode Rural - Œuvrant depuis 1996 pour la dignité humaine, 
              la paix et le développement durable en République Démocratique du Congo.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span>26, avenue Beni, Goma, Nord-Kivu/RDC</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <span>+243 998 673 879</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <span>info@lucoder.org</span>
              </div>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Liens rapides</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/qui-sommes-nous" className="text-gray-300 hover:text-blue-400 transition-colors">Qui sommes-nous ?</Link></li>
              <li><Link to="/nos-actions" className="text-gray-300 hover:text-blue-400 transition-colors">Nos actions</Link></li>
              <li><Link to="/galerie" className="text-gray-300 hover:text-blue-400 transition-colors">Galerie</Link></li>
              <li><Link to="/plaidoyer" className="text-gray-300 hover:text-blue-400 transition-colors">Plaidoyer</Link></li>
              <li><Link to="/partenariat" className="text-gray-300 hover:text-blue-400 transition-colors">Partenariat</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/faire-un-don" className="text-gray-300 hover:text-blue-400 transition-colors">Faire un don</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">Nous contacter</Link></li>
              <li><Link to="/partenariat" className="text-gray-300 hover:text-blue-400 transition-colors">Devenir bénévole</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-blue-400 transition-colors">Blog</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 LUCODER ASBL. Tous droits réservés. | Fièrement conçu par <a href="https://oredytech.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">Oredy TECHNOLOGIES</a>
          </p>
        </div>
      </div>
    </footer>
  );
};
