
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { Share2, Facebook, Twitter, Linkedin, Copy, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ShareContextMenuProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const ShareContextMenu = ({ title, children, className }: ShareContextMenuProps) => {
  const { toast } = useToast();
  
  // Remplacer le domaine actuel par lucoder.org
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

  const shareOptions = [
    {
      name: "Copier le lien",
      icon: Copy,
      action: handleCopyLink,
    },
    {
      name: "Partager par email",
      icon: Mail,
      action: () => {
        window.open(`mailto:?subject=${encodedTitle}&body=${encodedUrl}`, '_blank');
      },
    },
    {
      name: "Partager sur Facebook",
      icon: Facebook,
      action: () => {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`, '_blank');
      },
    },
    {
      name: "Partager sur Twitter",
      icon: Twitter,
      action: () => {
        window.open(`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`, '_blank');
      },
    },
    {
      name: "Partager sur LinkedIn",
      icon: Linkedin,
      action: () => {
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`, '_blank');
      },
    },
  ];

  return (
    <ContextMenu>
      <ContextMenuTrigger className={className}>
        {children}
      </ContextMenuTrigger>
      <ContextMenuContent className="w-48">
        <div className="px-2 py-1.5 text-sm font-semibold text-muted-foreground flex items-center">
          <Share2 className="h-4 w-4 mr-2" />
          Partager l'article
        </div>
        {shareOptions.map((option) => (
          <ContextMenuItem
            key={option.name}
            onClick={option.action}
            className="cursor-pointer"
          >
            <option.icon className="h-4 w-4 mr-2" />
            {option.name}
          </ContextMenuItem>
        ))}
      </ContextMenuContent>
    </ContextMenu>
  );
};
