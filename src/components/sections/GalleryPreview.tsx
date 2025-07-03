
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const GalleryPreview = () => {
  const images = [
    "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop"
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Galerie</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-xl text-gray-600 mt-4">
            Découvrez nos actions en images et en vidéos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {images.map((image, index) => (
            <div key={index} className="aspect-video overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src={image} 
                alt={`Projet LUCODER ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild className="bg-blue-600 hover:bg-blue-700">
            <Link to="/galerie">Voir toute la galerie</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
