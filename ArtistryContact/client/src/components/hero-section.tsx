import { Palette, ShoppingCart } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center">
      {/* Urban graffiti wall background */}
      <div className="absolute inset-0 urban-gradient"></div>
      
      {/* Street art texture overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-6xl md:text-8xl font-street text-white mb-4 tracking-wider">
          <span className="text-neon-green text-glow">URBAN</span><br />
          <span className="text-vibrant-orange text-glow">CANVAS</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Graffiti and street-inspired art. One-of-a-kind drops. Real stories. Real struggle.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => scrollToSection('featured')}
            className="inline-flex items-center px-8 py-4 bg-neon-green text-deep-black font-bold text-lg rounded-lg hover:bg-neon-green/90 transition-all duration-300 transform hover:scale-105"
            data-testid="button-view-latest"
          >
            <Palette className="mr-2" size={20} />
            View Latest Drop
          </button>
          
          <button 
            onClick={() => scrollToSection('contact')}
            className="inline-flex items-center px-8 py-4 border-2 border-vibrant-orange text-vibrant-orange font-bold text-lg rounded-lg hover:bg-vibrant-orange hover:text-white transition-all duration-300"
            data-testid="button-buy-art"
          >
            <ShoppingCart className="mr-2" size={20} />
            Buy Art
          </button>
        </div>
      </div>
    </section>
  );
}
