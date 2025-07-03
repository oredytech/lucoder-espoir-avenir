
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Blog = () => {
  const articles = [
    {
      id: 1,
      title: "L'impact de nos formations professionnelles sur la réduction de la délinquance",
      excerpt: "Découvrez comment nos programmes de formation transforment la vie des jeunes en situation de vulnérabilité...",
      date: "15 Mars 2024",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop",
      slug: "impact-formations-professionnelles"
    },
    {
      id: 2,
      title: "Projet d'eau potable à Nyanzale : 500 familles bénéficiaires",
      excerpt: "Le nouveau point d'eau construit grâce à nos partenaires change la vie de toute une communauté...",
      date: "10 Mars 2024",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=250&fit=crop",
      slug: "projet-eau-potable-nyanzale"
    },
    {
      id: 3,
      title: "Journée mondiale de l'environnement : nos actions de reboisement",
      excerpt: "À l'occasion de la journée mondiale de l'environnement, retour sur nos initiatives de protection...",
      date: "5 Mars 2024",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=250&fit=crop",
      slug: "journee-environnement-reboisement"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog</h1>
              <p className="text-xl text-gray-600 mb-6">
                Actualités, témoignages et analyses de nos actions sur le terrain
              </p>
              <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <Card key={article.id} className="hover:shadow-lg transition-shadow">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="text-sm text-blue-600 font-medium">{article.date}</div>
                    <CardTitle className="text-lg text-gray-900 hover:text-blue-700">
                      <Link to={`/blog/${article.slug}`}>{article.title}</Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 text-sm mb-4">{article.excerpt}</p>
                    <Button asChild variant="outline" size="sm">
                      <Link to={`/blog/${article.slug}`}>Lire la suite</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
