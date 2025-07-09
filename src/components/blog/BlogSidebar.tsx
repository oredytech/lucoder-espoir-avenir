
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { Calendar, Clock, Eye } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { wordpressApi } from "@/services/wordpress";

interface BlogSidebarProps {
  currentPostId: number;
}

export const BlogSidebar = ({ currentPostId }: BlogSidebarProps) => {
  const { data: recentPosts } = useQuery({
    queryKey: ['recent-posts'],
    queryFn: () => wordpressApi.getPosts({ per_page: 5 }),
  });

  const filteredPosts = recentPosts?.filter(post => post.id !== currentPostId) || [];

  return (
    <div className="space-y-6 sticky top-24">
      {/* Articles récents */}
      <Card className="shadow-lg">
        <CardHeader className="pb-4">
          <CardTitle className="text-xl font-bold text-gray-900">Articles récents</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {filteredPosts.slice(0, 4).map((post) => {
            const featuredImage = post._embedded?.['wp:featuredmedia']?.[0];
            const publishDate = new Date(post.date).toLocaleDateString('fr-FR', {
              day: 'numeric',
              month: 'short',
              year: 'numeric'
            });
            
            return (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                className="block group hover:bg-gray-50 p-3 rounded-lg transition-colors"
              >
                <div className="flex space-x-3">
                  {featuredImage && (
                    <img
                      src={featuredImage.source_url}
                      alt={post.title.rendered}
                      className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                    />
                  )}
                  <div className="flex-1 min-w-0">
                    <h3 
                      className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 mb-2"
                      dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                    />
                    <div className="flex items-center text-xs text-gray-500 space-x-2">
                      <Calendar className="h-3 w-3" />
                      <span>{publishDate}</span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </CardContent>
      </Card>

      {/* Newsletter */}
      <Card className="shadow-lg bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <CardHeader>
          <CardTitle className="text-xl font-bold">Newsletter</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-blue-100 mb-4 text-sm">
            Restez informé de nos derniers articles et actions humanitaires.
          </p>
          <div className="space-y-3">
            <input
              type="email"
              placeholder="Votre email"
              className="w-full px-3 py-2 text-gray-900 rounded-lg text-sm"
            />
            <button className="w-full bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-gray-50 transition-colors">
              S'abonner
            </button>
          </div>
        </CardContent>
      </Card>

      {/* À propos */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-gray-900">À propos de LUCODER</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            LUCODER œuvre pour l'amélioration des conditions de vie des populations vulnérables 
            en République Démocratique du Congo, avec un focus particulier sur les enfants en situation de rue.
          </p>
          <Link 
            to="/qui-sommes-nous" 
            className="text-blue-600 hover:text-blue-700 font-medium text-sm"
          >
            En savoir plus →
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};
