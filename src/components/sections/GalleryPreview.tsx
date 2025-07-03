
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Camera, Video, Image as ImageIcon } from "lucide-react";

export const GalleryPreview = () => {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
      title: "Formation agricole"
    },
    {
      url: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&h=300&fit=crop",
      title: "Santé communautaire"
    },
    {
      url: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=300&fit=crop",
      title: "Infrastructure WASH"
    },
    {
      url: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      title: "Développement rural"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-r from-indigo-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-indigo-800 mb-4">Galerie</h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
          <p className="text-indigo-600 mt-4 text-lg">
            Découvrez nos actions en images et en vidéos
          </p>
        </div>

        {/* Statistiques de la galerie */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
          <div className="text-center bg-white rounded-lg p-6 shadow-lg border border-indigo-100">
            <Camera className="h-12 w-12 text-indigo-600 mx-auto mb-3" />
            <p className="text-3xl font-bold text-indigo-800">500+</p>
            <p className="text-indigo-600">Photos</p>
          </div>
          <div className="text-center bg-white rounded-lg p-6 shadow-lg border border-purple-100">
            <Video className="h-12 w-12 text-purple-600 mx-auto mb-3" />
            <p className="text-3xl font-bold text-purple-800">50+</p>
            <p className="text-purple-600">Vidéos</p>
          </div>
          <div className="text-center bg-white rounded-lg p-6 shadow-lg border border-pink-100">
            <ImageIcon className="h-12 w-12 text-pink-600 mx-auto mb-3" />
            <p className="text-3xl font-bold text-pink-800">25+</p>
            <p className="text-pink-600">Albums</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="group relative aspect-video overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover-scale animate-fade-in"
              style={{ 
                animationDelay: `${0.4 + index * 0.1}s`, 
                animationFillMode: 'both' 
              }}
            >
              <img 
                src={image.url} 
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold">{image.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center animate-fade-in" style={{ animationDelay: '0.8s', animationFillMode: 'both' }}>
          <Button asChild className="bg-indigo-600 hover:bg-indigo-700">
            <Link to="/galerie">Voir toute la galerie</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
