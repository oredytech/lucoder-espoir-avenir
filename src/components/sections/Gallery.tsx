
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Image, FileText, Upload } from "lucide-react";

export const Gallery = () => {
  const [activeTab, setActiveTab] = useState("videos");

  const videos = [
    {
      title: "Réinsertion des jeunes en milieu rural",
      duration: "6:30 min",
      description: "Une immersion dans les projets de réinsertion socio-économique des jeunes de Nyanzale, activité qui transforme la vie des jeunes ex-délinquants de Bwito/Nord-Kivu.",
      thumbnail: "/lovable-uploads/11ecf94c-2763-4ddf-ae41-2d4a11b3a97c.png"
    },
    {
      title: "Journée mondiale de l'environnement 2023 à Goma",
      duration: "4:15 min",
      description: "Célébration de la journée mondiale de l'environnement avec nos actions de reboisement et sensibilisation communautaire.",
      thumbnail: "/lovable-uploads/161edd92-869c-4532-b108-d60410f6b378.png"
    }
  ];

  const photoAlbums = [
    {
      title: "Santé communautaire & Bien-être",
      count: "10 photos",
      description: "Construction centre de santé de SAKE, formation du personnel de santé, distribution des kits médicaux, sensibilisations santé.",
      cover: "/lovable-uploads/28e71d98-6a9f-4c37-be52-41124f701331.png"
    },
    {
      title: "Développement communautaire & sécurité alimentaire",
      count: "20 photos",
      description: "Élevage des poissons, élevages des porcs, construction d'un moulin hydraulique à Lushebere...",
      cover: "/lovable-uploads/3b9aafc5-a707-4da0-8df4-dd6c90d3ed5c.png"
    },
    {
      title: "Célébrations & plaidoyers",
      count: "7 photos",
      description: "Journées mondiales sur l'environnement, panels, actions publiques",
      cover: "/lovable-uploads/3d5f33af-0777-40bb-bbab-d8beaffade36.png"
    }
  ];

  const testimonials = [
    {
      quote: "Le champ communautaire nous a permis de manger et d'envoyer nos enfants à l'école.",
      author: "Jean-Marie SEKANABO, Agriculteur à Nyanzale"
    },
    {
      quote: "Grâce à LUCODER, j'ai repris le chemin de l'école.",
      author: "Mireille, 13 ans, Butembo"
    },
    {
      quote: "J'étais victime de VBG, mais aujourd'hui je forme et j'encadre d'autres jeunes filles.",
      author: "Sarah, animatrice communautaire, Minova"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Galerie médias</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez en images et en vidéos les actions, l'impact et les moments forts de l'ONG LUCODER sur le terrain.
          </p>
          <div className="w-24 h-1 bg-green-600 mx-auto mt-4"></div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-2 bg-white rounded-lg p-1 shadow-lg">
            {[
              { id: "videos", label: "Vidéos", icon: Play },
              { id: "photos", label: "Albums photos", icon: Image },
              { id: "testimonials", label: "Témoignages", icon: FileText }
            ].map((tab) => (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? "default" : "ghost"}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 ${
                  activeTab === tab.id ? "bg-green-600 text-white" : ""
                }`}
              >
                <tab.icon className="h-4 w-4" />
                <span>{tab.label}</span>
              </Button>
            ))}
          </div>
        </div>

        {/* Vidéos */}
        {activeTab === "videos" && (
          <div className="grid md:grid-cols-2 gap-8">
            {videos.map((video, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <Play className="h-12 w-12 text-white" />
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{video.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{video.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Albums photos */}
        {activeTab === "photos" && (
          <div className="grid md:grid-cols-3 gap-8">
            {photoAlbums.map((album, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <div className="relative">
                  <img
                    src={album.cover}
                    alt={album.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
                    {album.count}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{album.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{album.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Témoignages */}
        {activeTab === "testimonials" && (
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <blockquote className="text-lg italic text-gray-700 mb-4">
                    "{testimonial.quote}"
                  </blockquote>
                  <cite className="text-green-600 font-semibold">- {testimonial.author}</cite>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Bouton de soumission */}
        <div className="text-center mt-12">
          <Card className="max-w-md mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center justify-center space-x-2">
                <Upload className="h-5 w-5" />
                <span>Soumettre une photo ou vidéo</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Avez-vous capturé un moment fort avec LUCODER ?</p>
              <Button className="w-full bg-green-600 hover:bg-green-700">
                Envoyer votre média
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
