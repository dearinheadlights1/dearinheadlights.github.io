export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-dark-gray relative">
      {/* Street graffiti background */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')`,
          backgroundSize: 'cover'
        }}
      ></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-6xl font-street text-electric-blue mb-8">THE ARTIST</h2>
        <div className="w-24 h-1 bg-vibrant-orange mx-auto mb-12"></div>
        
        <div className="bg-deep-black/50 backdrop-blur-sm rounded-2xl p-8 md:p-12">
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8" data-testid="text-artist-intro">
            SNC Flores creates from the streets, for the streets. Every piece tells a story of survival, struggle, and the raw beauty found in urban decay.
          </p>
          <p className="text-lg text-gray-400 leading-relaxed" data-testid="text-artist-philosophy">
            This isn't gallery art. This is life painted on canvas — the forgotten corners, the silhouettes in the shadows, the fire that burns when everything else goes cold. Each drop is limited, each story is real.
          </p>
          
          <div className="mt-12 flex justify-center space-x-8">
            <div className="text-center">
              <div className="text-3xl font-street text-neon-green" data-testid="stat-pieces">8+</div>
              <div className="text-gray-400">Original Pieces</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-street text-vibrant-orange" data-testid="stat-handpainted">100%</div>
              <div className="text-gray-400">Hand-Painted</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-street text-electric-blue" data-testid="stat-unique">1/1</div>
              <div className="text-gray-400">Unique Drops</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
