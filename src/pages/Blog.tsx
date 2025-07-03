
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, Tag, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const articles = [
    {
      id: 1,
      title: "L'impact de nos formations professionnelles sur la jeunesse du Kivu",
      excerpt: "Découvrez comment nos programmes de formation transforment la vie des jeunes en leur offrant des compétences durables.",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=300&fit=crop",
      date: "15 Mars 2024",
      author: "Équipe LUCODER",
      category: "Formation",
      slug: "impact-formations-jeunesse-kivu"
    },
    {
      id: 2,
      title: "Réhabilitation du centre de santé de Sake : un projet qui sauve des vies",
      excerpt: "Retour sur la réhabilitation complète du centre de santé de Sake et son impact sur la communauté locale.",
      image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=600&h=300&fit=crop",
      date: "28 Février 2024",
      author: "Dr. Marie Mukamana",
      category: "Santé",
      slug: "rehabilitation-centre-sante-sake"
    },
    {
      id: 3,
      title: "Journée mondiale de l'environnement 2024 : nos actions à Goma",
      excerpt: "Retour sur nos activités de sensibilisation et de reboisement organisées lors de la journée mondiale de l'environnement.",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=600&h=300&fit=crop",
      date: "5 Juin 2024",
      author: "Jean-Baptiste Nzeyimana",
      category: "Environnement",
      slug: "journee-mondiale-environnement-2024"
    },
    {
      id: 4,
      title: "Comment nos programmes WASH transforment les communautés rurales",
      excerpt: "L'accès à l'eau potable et à l'assainissement change la donne dans nos zones d'intervention.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=300&fit=crop",
      date: "22 Janvier 2024",
      author: "Sarah Uwimana",
      category: "WASH",
      slug: "programmes-wash-communautes-rurales"
    }
  ];

  const categories = ["Toutes", "Formation", "Santé", "Environnement", "WASH", "Plaidoyer"];

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        {/* Header du blog */}
        <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6 animate-fade-in">Blog LUCODER</h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
              Découvrez nos actualités, témoignages et analyses sur le développement communautaire en RDC
            </p>
            <div className="w-24 h-1 bg-white mx-auto animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}></div>
          </div>
        </section>

        {/* Filtres par catégorie */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  className={index === 0 ? "bg-blue-600 hover:bg-blue-700" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Articles du blog */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <Card 
                  key={article.id} 
                  className="group hover:shadow-xl transition-all duration-300 hover-scale animate-fade-in"
                  style={{ 
                    animationDelay: `${index * 0.1}s`, 
                    animationFillMode: 'both' 
                  }}
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <div className="flex items-center text-sm text-gray-500 mb-2 space-x-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{article.author}</span>
                      </div>
                    </div>
                    <CardTitle className="text-xl line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-gray-600 line-clamp-3 mb-4">{article.excerpt}</p>
                    <Button asChild variant="ghost" className="p-0 h-auto text-blue-600 hover:text-blue-700">
                      <Link to={`/blog/${article.slug}`} className="inline-flex items-center">
                        Lire la suite <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <div className="flex space-x-2">
                <Button variant="outline">Précédent</Button>
                <Button className="bg-blue-600 hover:bg-blue-700">1</Button>
                <Button variant="outline">2</Button>
                <Button variant="outline">3</Button>
                <Button variant="outline">Suivant</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-3xl font-bold mb-4">Restez informé(e)</h3>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Abonnez-vous à notre newsletter pour recevoir nos dernières actualités
            </p>
            <div className="max-w-md mx-auto flex">
              <input 
                type="email" 
                placeholder="Votre adresse e-mail"
                className="flex-1 px-4 py-3 rounded-l-lg text-gray-900"
              />
              <Button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-r-lg">
                S'abonner
              </Button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
