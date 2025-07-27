import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-deep-black/95 backdrop-blur-md border-b border-neon-green/20' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-street text-neon-green tracking-wider cursor-pointer" 
                onClick={() => scrollToSection('hero')}
                data-testid="logo">
              SNC FLORES
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button onClick={() => scrollToSection('hero')} 
                      className="text-white hover:text-neon-green transition-colors duration-300"
                      data-testid="nav-home">
                Home
              </button>
              <button onClick={() => scrollToSection('featured')} 
                      className="text-white hover:text-neon-green transition-colors duration-300"
                      data-testid="nav-featured">
                Featured
              </button>
              <button onClick={() => scrollToSection('gallery')} 
                      className="text-white hover:text-neon-green transition-colors duration-300"
                      data-testid="nav-gallery">
                Gallery
              </button>
              <button onClick={() => scrollToSection('about')} 
                      className="text-white hover:text-neon-green transition-colors duration-300"
                      data-testid="nav-about">
                About
              </button>
              <button onClick={() => scrollToSection('contact')} 
                      className="text-white hover:text-neon-green transition-colors duration-300"
                      data-testid="nav-contact">
                Contact
              </button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-neon-green transition-colors"
              data-testid="mobile-menu-toggle"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-deep-black/95 backdrop-blur-md border-t border-neon-green/20">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button onClick={() => scrollToSection('hero')} 
                    className="block px-3 py-2 text-white hover:text-neon-green transition-colors w-full text-left"
                    data-testid="mobile-nav-home">
              Home
            </button>
            <button onClick={() => scrollToSection('featured')} 
                    className="block px-3 py-2 text-white hover:text-neon-green transition-colors w-full text-left"
                    data-testid="mobile-nav-featured">
              Featured
            </button>
            <button onClick={() => scrollToSection('gallery')} 
                    className="block px-3 py-2 text-white hover:text-neon-green transition-colors w-full text-left"
                    data-testid="mobile-nav-gallery">
              Gallery
            </button>
            <button onClick={() => scrollToSection('about')} 
                    className="block px-3 py-2 text-white hover:text-neon-green transition-colors w-full text-left"
                    data-testid="mobile-nav-about">
              About
            </button>
            <button onClick={() => scrollToSection('contact')} 
                    className="block px-3 py-2 text-white hover:text-neon-green transition-colors w-full text-left"
                    data-testid="mobile-nav-contact">
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
