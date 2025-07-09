
import { Facebook, Twitter, Linkedin, Mail, Link, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface SocialShareButtonsProps {
  title: string;
}

export const SocialShareButtons = ({ title }: SocialShareButtonsProps) => {
  const { toast } = useToast();
  
  const getShareUrl = () => {
    const currentPath = window.location.pathname;
    return `https://lucoder.org${currentPath}`;
  };

  const shareUrl = getShareUrl();
  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(title);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      toast({
        title: "Lien copié",
        description: "Le lien de l'article a été copié dans le presse-papiers.",
      });
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Impossible de copier le lien.",
        variant: "destructive",
      });
    }
  };

  const shareButtons = [
    {
      name: "Facebook",
      icon: Facebook,
      color: "bg-blue-600 hover:bg-blue-700",
      action: () => {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`, '_blank');
      },
    },
    {
      name: "Twitter",
      icon: Twitter,
      color: "bg-sky-500 hover:bg-sky-600",
      action: () => {
        window.open(`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`, '_blank');
      },
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      color: "bg-blue-700 hover:bg-blue-800",
      action: () => {
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`, '_blank');
      },
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      color: "bg-green-600 hover:bg-green-700",
      action: () => {
        window.open(`https://wa.me/?text=${encodedTitle}%20${encodedUrl}`, '_blank');
      },
    },
    {
      name: "Email",
      icon: Mail,
      color: "bg-gray-600 hover:bg-gray-700",
      action: () => {
        window.open(`mailto:?subject=${encodedTitle}&body=${encodedUrl}`, '_blank');
      },
    },
    {
      name: "Copier le lien",
      icon: Link,
      color: "bg-gray-800 hover:bg-gray-900",
      action: handleCopyLink,
    },
  ];

  return (
    <div className="bg-gray-50 rounded-xl p-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
        Partagez cet article
      </h3>
      <p className="text-gray-600 text-center mb-8">
        Aidez-nous à faire connaître nos actions en partageant cet article sur vos réseaux sociaux.
      </p>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {shareButtons.map((button) => (
          <Button
            key={button.name}
            onClick={button.action}
            className={`${button.color} text-white flex flex-col items-center justify-center p-4 h-20 rounded-xl transition-all duration-200 transform hover:scale-105`}
            variant="default"
          >
            <button.icon className="h-6 w-6 mb-1" />
            <span className="text-xs font-medium">{button.name}</span>
          </Button>
        ))}
      </div>

      <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <p className="text-sm text-blue-800 text-center">
          💡 En partageant cet article, vous contribuez à sensibiliser votre entourage aux enjeux humanitaires en RDC.
        </p>
      </div>
    </div>
  );
};
