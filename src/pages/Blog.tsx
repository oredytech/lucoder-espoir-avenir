
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { ShareContextMenu } from "@/components/blog/ShareContextMenu";
import { Calendar, User, ArrowRight, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { wordpressApi, WordPressCategory } from "@/services/wordpress";

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState("");
  const postsPerPage = 9;

  // Récupération des catégories
  const { data: categories } = useQuery({
    queryKey: ['wordpress-categories'],
    queryFn: wordpressApi.getCategories,
  });

  // Récupération des articles
  const { data: posts, isLoading, error } = useQuery({
    queryKey: ['wordpress-posts', currentPage, selectedCategory, searchTerm],
    queryFn: () => wordpressApi.getPosts({
      page: currentPage,
      per_page: postsPerPage,
      categories: selectedCategory,
      search: searchTerm || undefined,
    }),
    refetchOnWindowFocus: false,
  });

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setCurrentPage(1);
  };

  const handleSearchChange = (search: string) => {
    setSearchTerm(search);
    setCurrentPage(1);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const stripHtml = (html: string) => {
    return html.replace(/<[^>]*>/g, '').substring(0, 150) + '...';
  };

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

        {/* Barre de recherche et filtres */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            {/* Barre de recherche */}
            <div className="max-w-md mx-auto mb-6">
              <input
                type="text"
                placeholder="Rechercher un article..."
                value={searchTerm}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Filtres par catégorie */}
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                variant={selectedCategory === "" ? "default" : "outline"}
                onClick={() => handleCategoryChange("")}
                className={selectedCategory === "" ? "bg-blue-600 hover:bg-blue-700" : ""}
              >
                Toutes
              </Button>
              {categories?.map((category: WordPressCategory) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id.toString() ? "default" : "outline"}
                  onClick={() => handleCategoryChange(category.id.toString())}
                  className={selectedCategory === category.id.toString() ? "bg-blue-600 hover:bg-blue-700" : ""}
                >
                  {category.name} ({category.count})
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Articles du blog */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            {isLoading && (
              <div className="flex justify-center items-center py-12">
                <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
                <span className="ml-2 text-gray-600">Chargement des articles...</span>
              </div>
            )}

            {error && (
              <div className="text-center py-12">
                <p className="text-red-600">Erreur lors du chargement des articles</p>
                <Button 
                  onClick={() => window.location.reload()} 
                  className="mt-4 bg-blue-600 hover:bg-blue-700"
                >
                  Réessayer
                </Button>
              </div>
            )}

            {posts && posts.length === 0 && !isLoading && (
              <div className="text-center py-12">
                <p className="text-gray-600">Aucun article trouvé</p>
              </div>
            )}

            {posts && posts.length > 0 && (
              <>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {posts.map((post, index) => {
                    const featuredImage = post._embedded?.['wp:featuredmedia']?.[0];
                    const author = post._embedded?.author?.[0];

                    return (
                      <ShareContextMenu key={post.id} title={post.title.rendered}>
                        <Card 
                          className="group hover:shadow-xl transition-all duration-300 hover-scale animate-fade-in cursor-context-menu"
                          style={{ 
                            animationDelay: `${index * 0.1}s`, 
                            animationFillMode: 'both' 
                          }}
                        >
                          <div className="relative overflow-hidden">
                            {featuredImage ? (
                              <img 
                                src={featuredImage.source_url} 
                                alt={featuredImage.alt_text || post.title.rendered}
                                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            ) : (
                              <div className="w-full h-48 bg-gradient-to-r from-blue-100 to-blue-200 flex items-center justify-center">
                                <span className="text-blue-600 font-medium">LUCODER</span>
                              </div>
                            )}
                            {post.categories && post.categories.length > 0 && categories && (
                              <div className="absolute top-4 left-4">
                                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                                  {categories.find(cat => cat.id === post.categories[0])?.name || 'Actualité'}
                                </span>
                              </div>
                            )}
                          </div>
                          
                          <CardHeader>
                            <div className="flex items-center text-sm text-gray-500 mb-2 space-x-4">
                              <div className="flex items-center space-x-1">
                                <Calendar className="h-4 w-4" />
                                <span>{formatDate(post.date)}</span>
                              </div>
                              {author && (
                                <div className="flex items-center space-x-1">
                                  <User className="h-4 w-4" />
                                  <span>{author.name}</span>
                                </div>
                              )}
                            </div>
                            <CardTitle className="text-xl line-clamp-2 group-hover:text-blue-600 transition-colors">
                              <div dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                            </CardTitle>
                          </CardHeader>
                          
                          <CardContent>
                            <p className="text-gray-600 line-clamp-3 mb-4">
                              {stripHtml(post.excerpt.rendered)}
                            </p>
                            <Button asChild variant="ghost" className="p-0 h-auto text-blue-600 hover:text-blue-700">
                              <Link to={`/blog/${post.slug}`} className="inline-flex items-center">
                                Lire la suite <ArrowRight className="ml-1 h-4 w-4" />
                              </Link>
                            </Button>
                          </CardContent>
                        </Card>
                      </ShareContextMenu>
                    );
                  })}
                </div>

                {/* Pagination */}
                {posts.length === postsPerPage && (
                  <div className="flex justify-center mt-12">
                    <Pagination>
                      <PaginationContent>
                        <PaginationItem>
                          <PaginationPrevious 
                            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                            className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                          />
                        </PaginationItem>
                        
                        {[...Array(Math.min(5, Math.max(1, Math.ceil(50 / postsPerPage))))].map((_, i) => {
                          const pageNum = i + Math.max(1, currentPage - 2);
                          return (
                            <PaginationItem key={pageNum}>
                              <PaginationLink
                                onClick={() => setCurrentPage(pageNum)}
                                isActive={currentPage === pageNum}
                                className="cursor-pointer"
                              >
                                {pageNum}
                              </PaginationLink>
                            </PaginationItem>
                          );
                        })}
                        
                        <PaginationItem>
                          <PaginationNext 
                            onClick={() => setCurrentPage(currentPage + 1)}
                            className="cursor-pointer"
                          />
                        </PaginationItem>
                      </PaginationContent>
                    </Pagination>
                  </div>
                )}
              </>
            )}
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
