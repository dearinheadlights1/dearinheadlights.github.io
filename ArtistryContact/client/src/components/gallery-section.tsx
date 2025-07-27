import { useQuery } from "@tanstack/react-query";
import { ShoppingCart } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import type { Artwork } from "@shared/schema";

export default function GallerySection() {
  const { data: artworks, isLoading } = useQuery<Artwork[]>({
    queryKey: ["/api/artworks"],
  });

  const handlePurchaseInquiry = (artwork: Artwork) => {
    const subject = encodeURIComponent(`I want to buy ${artwork.title}`);
    const body = encodeURIComponent(`Hi, I'm interested in buying "${artwork.title}". Please let me know about pricing and availability.`);
    window.open(`mailto:sncaflores@gmail.com?subject=${subject}&body=${body}`, '_blank');
  };

  if (isLoading) {
    return (
      <section id="gallery" className="py-20 bg-deep-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Skeleton className="h-16 w-96 mx-auto mb-4" />
            <Skeleton className="h-1 w-24 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-dark-gray rounded-xl p-6">
                <Skeleton className="w-full h-48 rounded-lg mb-4" />
                <Skeleton className="h-6 w-3/4 mb-2" />
                <Skeleton className="h-16 w-full mb-4" />
                <div className="flex justify-between items-center">
                  <Skeleton className="h-5 w-20" />
                  <Skeleton className="h-8 w-8 rounded" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  const galleryArtworks = artworks?.filter(artwork => !artwork.isFeatured) || [];

  return (
    <section id="gallery" className="py-20 bg-deep-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-street text-vibrant-orange mb-4">🕰️ PREVIOUS DROPS</h2>
          <div className="w-24 h-1 bg-neon-green mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryArtworks.map((artwork) => (
            <div 
              key={artwork.id}
              className="bg-dark-gray rounded-xl p-6 art-card-hover group"
              data-testid={`card-artwork-${artwork.id}`}
            >
              <img 
                src={artwork.imageUrl}
                alt={`${artwork.title} artwork`}
                className="w-full h-48 object-cover rounded-lg mb-4 group-hover:opacity-90 transition-opacity"
                data-testid={`img-artwork-${artwork.id}`}
              />
              <h3 className="text-xl font-street text-neon-green mb-2" data-testid={`text-title-${artwork.id}`}>
                "{artwork.title}"
              </h3>
              <p className="text-gray-300 text-sm mb-4" data-testid={`text-description-${artwork.id}`}>
                {artwork.description}
              </p>
              <div className="flex justify-between items-center">
                <span 
                  className={`font-bold ${artwork.isAvailable ? 'text-vibrant-orange' : 'text-gray-500'}`}
                  data-testid={`status-${artwork.id}`}
                >
                  {artwork.isAvailable ? 'Available' : 'Sold'}
                </span>
                {artwork.isAvailable && (
                  <button 
                    onClick={() => handlePurchaseInquiry(artwork)}
                    className="text-electric-blue hover:text-white transition-colors p-2 hover:bg-electric-blue/20 rounded"
                    data-testid={`button-purchase-${artwork.id}`}
                    title="Contact for purchase"
                  >
                    <ShoppingCart size={18} />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {galleryArtworks.length === 0 && !isLoading && (
          <div className="text-center text-gray-300">
            <p>No artworks available in the gallery at the moment.</p>
          </div>
        )}
      </div>
    </section>
  );
}
