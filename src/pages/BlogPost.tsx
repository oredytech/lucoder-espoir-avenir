
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { ShareContextMenu } from "@/components/blog/ShareContextMenu";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Clock, Tag } from "lucide-react";
import { wordpressApi } from "@/services/wordpress";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const { data: post, isLoading, error } = useQuery({
    queryKey: ['blog-post', slug],
    queryFn: () => wordpressApi.getPostBySlug(slug!),
    enabled: !!slug,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="pt-16 flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Chargement de l'article...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="pt-16 flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Article non trouvé</h1>
            <p className="text-gray-600 mb-8">L'article que vous recherchez n'existe pas ou a été supprimé.</p>
            <Button onClick={() => navigate('/blog')} className="bg-blue-600 hover:bg-blue-700">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour au blog
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const featuredImage = post._embedded?.['wp:featuredmedia']?.[0];
  const author = post._embedded?.author?.[0];
  const publishDate = new Date(post.date).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Calculer le temps de lecture estimé
  const wordCount = post.content.rendered.replace(/<[^>]*>/g, '').split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / 200); // 200 mots par minute

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        {/* Breadcrumb et bouton retour */}
        <div className="bg-gray-50 py-4">
          <div className="container mx-auto px-4">
            <Button
              variant="ghost"
              onClick={() => navigate('/blog')}
              className="text-blue-600 hover:text-blue-700"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour au blog
            </Button>
          </div>
        </div>

        {/* En-tête de l'article */}
        <article className="max-w-4xl mx-auto px-4 py-12">
          <header className="mb-12">
            <ShareContextMenu title={post.title.rendered}>
              <h1 
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight cursor-context-menu"
                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
              />
            </ShareContextMenu>
            
            {/* Métadonnées de l'article */}
            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-10">
              {author && (
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>{author.name}</span>
                </div>
              )}
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>{publishDate}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>{readingTime} min de lecture</span>
              </div>
            </div>

            {/* Image mise en avant */}
            {featuredImage && (
              <ShareContextMenu title={post.title.rendered}>
                <div className="mb-12 cursor-context-menu">
                  <img
                    src={featuredImage.source_url}
                    alt={featuredImage.alt_text || post.title.rendered}
                    className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
                  />
                  {featuredImage.caption.rendered && (
                    <p 
                      className="text-sm text-gray-600 mt-4 text-center italic"
                      dangerouslySetInnerHTML={{ __html: featuredImage.caption.rendered }}
                    />
                  )}
                </div>
              </ShareContextMenu>
            )}
          </header>

          {/* Contenu de l'article avec typographie améliorée */}
          <div 
            className="prose prose-xl max-w-none 
                       prose-headings:text-gray-900 prose-headings:font-bold prose-headings:tracking-tight
                       prose-h1:text-4xl prose-h1:mb-8 prose-h1:mt-12 prose-h1:leading-tight
                       prose-h2:text-3xl prose-h2:mb-6 prose-h2:mt-10 prose-h2:leading-tight
                       prose-h3:text-2xl prose-h3:mb-5 prose-h3:mt-8 prose-h3:leading-tight
                       prose-h4:text-xl prose-h4:mb-4 prose-h4:mt-6
                       prose-h5:text-lg prose-h5:mb-3 prose-h5:mt-5
                       prose-h6:text-base prose-h6:mb-3 prose-h6:mt-4
                       prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-lg
                       prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-a:font-medium
                       prose-strong:text-gray-900 prose-strong:font-semibold
                       prose-em:text-gray-600 prose-em:italic
                       prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:pl-6 prose-blockquote:py-4 prose-blockquote:bg-blue-50 prose-blockquote:rounded-r-lg prose-blockquote:my-8 prose-blockquote:not-italic prose-blockquote:text-gray-700
                       prose-ul:my-6 prose-ul:space-y-2
                       prose-ol:my-6 prose-ol:space-y-2
                       prose-li:text-gray-700 prose-li:leading-relaxed
                       prose-img:rounded-lg prose-img:shadow-md prose-img:my-8
                       prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-code:font-mono
                       prose-pre:bg-gray-900 prose-pre:text-white prose-pre:rounded-lg prose-pre:p-4 prose-pre:my-6 prose-pre:overflow-x-auto
                       prose-hr:border-gray-300 prose-hr:my-10
                       prose-table:my-8 prose-table:border-collapse prose-table:border prose-table:border-gray-300
                       prose-th:bg-gray-50 prose-th:border prose-th:border-gray-300 prose-th:px-4 prose-th:py-2 prose-th:font-semibold
                       prose-td:border prose-td:border-gray-300 prose-td:px-4 prose-td:py-2"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />

          {/* Pied de l'article */}
          <footer className="mt-16 pt-8 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="text-sm text-gray-500">
                Publié le {publishDate}
                {post.modified !== post.date && (
                  <span> • Mis à jour le {new Date(post.modified).toLocaleDateString('fr-FR')}</span>
                )}
              </div>
              
              {/* Boutons de partage */}
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">Partager :</span>
                <ShareContextMenu title={post.title.rendered}>
                  <Button variant="outline" size="sm">
                    Partager cet article
                  </Button>
                </ShareContextMenu>
              </div>
            </div>
          </footer>
        </article>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPost;
