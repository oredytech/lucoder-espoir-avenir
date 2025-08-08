
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Camera, Video, Image as ImageIcon } from "lucide-react";

export const GalleryPreview = () => {
  const images = [
    {
      url: "/lovable-uploads/57d14119-1a5d-4c45-b167-91b53debb687.png",
      title: "Formation agricole"
    },
    {
      url: "/lovable-uploads/5e398f0f-73fa-4e2f-93fc-3be61d37196b.png",
      title: "Santé communautaire"
    },
    {
      url: "/lovable-uploads/600a2e5c-7297-46f1-be2e-136d2bdceefc.png",
      title: "Infrastructure WASH"
    },
    {
      url: "/lovable-uploads/620e1890-088e-4945-aa78-7398dfe80e56.png",
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
