
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { href: "/", label: "Accueil" },
    { href: "/qui-sommes-nous", label: "Qui sommes-nous ?" },
    { href: "/nos-actions", label: "Nos actions" },
    { href: "/galerie", label: "Galerie" },
    { href: "/plaidoyer", label: "Plaidoyer" },
    { href: "/partenariat", label: "Partenariat" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full transition-all duration-300 border-b border-white/20 z-50 ${
      isScrolled 
        ? 'bg-blue-900/95 backdrop-blur-md' 
        : 'bg-transparent backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <img
              src="/lovable-uploads/600a2e5c-7297-46f1-be2e-136d2bdceefc.png"
              alt="LUCODER Logo"
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-white/90 hover:text-white transition-colors text-sm font-medium uppercase tracking-wide"
              >
                {item.label}
              </Link>
            ))}
            <Button 
              asChild 
              className="bg-orange-500 hover:bg-orange-600 text-white ml-4 uppercase tracking-wide"
            >
              <Link to="/faire-un-don">Faire un don</Link>
            </Button>
          </div>

          {/* Mobile Menu Button - Now visible on medium screens */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:bg-white/10"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>

          {/* Medium screens menu */}
          <div className="hidden md:flex lg:hidden items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/10"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile and Medium screens Menu */}
        {isOpen && (
          <div className="md:block lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-blue-900/95 backdrop-blur-sm border-t border-white/20">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="block px-3 py-2 text-white/90 hover:text-white transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Button 
                  asChild 
                  className="bg-orange-500 hover:bg-orange-600 text-white w-full"
                >
                  <Link to="/faire-un-don">Faire un don</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
