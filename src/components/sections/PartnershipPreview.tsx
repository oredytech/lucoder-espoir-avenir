
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const PartnershipPreview = () => {
  return (
    <section id="partnership" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Partenariat & Bénévolat</h2>
          <p className="text-xl text-gray-600 mb-6">
            Ensemble, construisons un avenir plus juste, solidaire et durable
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl text-blue-700">Devenir partenaire</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Rejoignez nos partenaires stratégiques pour renforcer notre impact sur le terrain. 
                Institutions publiques, agences des Nations Unies, ONGI, fondations, entreprises.
              </p>
              <div className="flex flex-wrap gap-2 text-sm text-blue-600 font-medium">
                <span className="bg-blue-100 px-2 py-1 rounded">FAO</span>
                <span className="bg-blue-100 px-2 py-1 rounded">UNFPA</span>
                <span className="bg-blue-100 px-2 py-1 rounded">MONUSCO</span>
                <span className="bg-blue-100 px-2 py-1 rounded">USAID</span>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl text-blue-700">Devenir bénévole</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Vous êtes passionné par le développement, l'entrepreneuriat, la justice sociale ? 
                Devenez bénévole au sein de LUCODER !
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Animation des clubs jeunes</li>
                <li>• Alphabétisation et soutien scolaire</li>
                <li>• Communication et multimédia</li>
                <li>• Appui logistique aux projets</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button asChild className="bg-blue-600 hover:bg-blue-700">
            <Link to="/partenariat">Rejoignez-nous</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
