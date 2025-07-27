import { useQuery } from "@tanstack/react-query";
import { Mail, Phone } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import type { Artwork } from "@shared/schema";

export default function FeaturedDrop() {
  const { data: featured, isLoading } = useQuery<Artwork>({
    queryKey: ["/api/artworks/featured"],
  });

  if (isLoading) {
    return (
      <section id="featured" className="py-20 bg-dark-gray relative">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Skeleton className="h-16 w-96 mx-auto mb-4" />
            <Skeleton className="h-1 w-24 mx-auto" />
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Skeleton className="h-12 w-3/4 mb-6" />
              <Skeleton className="h-24 w-full mb-8" />
              <div className="flex flex-col sm:flex-row gap-4">
                <Skeleton className="h-12 w-48" />
                <Skeleton className="h-12 w-36" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <Skeleton className="w-full aspect-square rounded-xl" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (!featured) {
    return (
      <section id="featured" className="py-20 bg-dark-gray relative">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-street text-neon-green mb-4">🔥 CURRENT DROP</h2>
          <p className="text-lg text-gray-300">No featured artwork available at the moment.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="featured" className="py-20 bg-dark-gray relative">
      {/* Concrete texture background */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')`,
          backgroundSize: 'cover'
        }}
      ></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-street text-neon-green mb-4">🔥 CURRENT DROP</h2>
          <div className="w-24 h-1 bg-vibrant-orange mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-3xl md:text-4xl font-street text-white mb-6" data-testid="text-featured-title">
              "{featured.title}"
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-8" data-testid="text-featured-description">
              {featured.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={`mailto:sncaflores@gmail.com?subject=I%20want%20to%20buy%20${encodeURIComponent(featured.title)}&body=Hi%2C%20I%E2%80%99m%20interested%20in%20buying%20this%20piece.`}
                className="inline-flex items-center px-6 py-3 bg-neon-green text-deep-black font-bold rounded-lg hover:bg-neon-green/90 transition-all duration-300"
                data-testid="link-email-purchase"
              >
                <Mail className="mr-2" size={18} />
                Email to Purchase
              </a>
              <a 
                href="tel:+13109101838"
                className="inline-flex items-center px-6 py-3 border-2 border-electric-blue text-electric-blue font-bold rounded-lg hover:bg-electric-blue hover:text-white transition-all duration-300"
                data-testid="link-call-artist"
              >
                <Phone className="mr-2" size={18} />
                Call Artist
              </a>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative group">
              <img 
                src={featured.imageUrl}
                alt={`${featured.title} - Urban art piece`}
                className="w-full rounded-xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
                data-testid="img-featured-artwork"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-black/60 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="font-bold" data-testid="text-featured-medium">{featured.medium}</p>
                {featured.dimensions && (
                  <p className="text-sm" data-testid="text-featured-dimensions">{featured.dimensions}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
