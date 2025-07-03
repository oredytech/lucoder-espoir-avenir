
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "#about", label: "Qui sommes-nous ?" },
    { href: "#actions", label: "Nos actions" },
    { href: "#gallery", label: "Galerie" },
    { href: "#advocacy", label: "Plaidoyer" },
    { href: "#partnership", label: "Partenariat" },
    { href: "#donations", label: "Faire un don" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img
              src="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=100&h=50&fit=crop"
              alt="LUCODER Logo"
              className="h-10 w-20 object-cover rounded"
            />
            <span className="ml-2 text-xl font-bold text-green-700">LUCODER</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-green-600 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-gray-700 hover:text-green-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
