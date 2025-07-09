
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { MessageCircle } from "lucide-react";

interface CommentFormProps {
  postId: number;
  postTitle: string;
}

export const CommentForm = ({ postId, postTitle }: CommentFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comment: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.comment) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulation d'envoi de commentaire
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Commentaire envoyé",
        description: "Votre commentaire a été soumis avec succès. Il sera publié après modération.",
      });

      setFormData({ name: '', email: '', comment: '' });
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'envoi de votre commentaire.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="shadow-lg">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center space-x-2 text-2xl font-bold text-gray-900">
          <MessageCircle className="h-6 w-6 text-blue-600" />
          <span>Laisser un commentaire</span>
        </CardTitle>
        <p className="text-gray-600 mt-2">
          Partagez votre opinion sur cet article. Votre commentaire sera modéré avant publication.
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                Nom complet *
              </label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Votre nom"
                className="w-full"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                Email *
              </label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="votre@email.com"
                className="w-full"
                required
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="comment" className="block text-sm font-semibold text-gray-700 mb-2">
              Commentaire *
            </label>
            <Textarea
              id="comment"
              value={formData.comment}
              onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
              placeholder="Partagez votre opinion sur cet article..."
              className="w-full min-h-32 resize-none"
              required
            />
          </div>

          <div className="flex items-center justify-between pt-4">
            <p className="text-xs text-gray-500">
              * Champs obligatoires. Votre email ne sera pas publié.
            </p>
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="bg-blue-600 hover:bg-blue-700 px-8"
            >
              {isSubmitting ? "Envoi..." : "Publier le commentaire"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};
