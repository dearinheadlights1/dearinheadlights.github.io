import { type Artwork, type InsertArtwork, type Inquiry, type InsertInquiry } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // Artwork methods
  getArtworks(): Promise<Artwork[]>;
  getFeaturedArtwork(): Promise<Artwork | undefined>;
  getArtwork(id: string): Promise<Artwork | undefined>;
  createArtwork(artwork: InsertArtwork): Promise<Artwork>;
  
  // Inquiry methods
  createInquiry(inquiry: InsertInquiry): Promise<Inquiry>;
  getInquiries(): Promise<Inquiry[]>;
}

export class MemStorage implements IStorage {
  private artworks: Map<string, Artwork>;
  private inquiries: Map<string, Inquiry>;

  constructor() {
    this.artworks = new Map();
    this.inquiries = new Map();
    
    // Initialize with the artworks from the HTML content
    this.initializeArtworks();
  }

  private initializeArtworks() {
    const initialArtworks: InsertArtwork[] = [
      {
        title: "Fading Hope, Fighting Back",
        description: "A man stands on the edge, a heart ablaze, staring over the sleeping city. It's not the fire that kills us — it's the silence. This is what it looks like to scream with no one to hear.",
        imageUrl: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800",
        isFeatured: true,
        isAvailable: true,
        medium: "Canvas | Acrylic",
        dimensions: "24\" x 36\"",
        year: 2024,
      },
      {
        title: "Shelter City",
        description: "The skyline burns while the forgotten build tents below it. A silhouette stares from the ashes. Home isn't a place, it's survival.",
        imageUrl: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
        isFeatured: false,
        isAvailable: true,
        medium: "Canvas | Acrylic",
        dimensions: "18\" x 24\"",
        year: 2024,
      },
      {
        title: "This Side / That Side",
        description: "Split between warmth and cold, safety and chaos — this piece captures the mental divide we walk every day.",
        imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
        isFeatured: false,
        isAvailable: true,
        medium: "Canvas | Acrylic",
        dimensions: "20\" x 30\"",
        year: 2024,
      },
      {
        title: "Alley Light",
        description: "Silhouettes drift through dim light — never seen, never known. But they're there. Just like you. Just like me.",
        imageUrl: "https://images.unsplash.com/photo-1514539079130-25950c84af65?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
        isFeatured: false,
        isAvailable: true,
        medium: "Canvas | Acrylic",
        dimensions: "16\" x 20\"",
        year: 2024,
      },
      {
        title: "Exit Wound",
        description: "Trapped between concrete walls and a toxic sky, the only way out is forward. The silhouette casts a shadow longer than its past.",
        imageUrl: "https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
        isFeatured: false,
        isAvailable: true,
        medium: "Canvas | Acrylic",
        dimensions: "22\" x 28\"",
        year: 2024,
      },
      {
        title: "Underwatch",
        description: "How many stories hide under flickering streetlights? Some walk through. Others never leave.",
        imageUrl: "https://images.unsplash.com/photo-1500627965408-b5f2c17c7c87?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
        isFeatured: false,
        isAvailable: true,
        medium: "Canvas | Acrylic",
        dimensions: "18\" x 24\"",
        year: 2024,
      },
      {
        title: "See Me / Don't",
        description: "Lit from behind, unseen from the front. We all know what it's like to be walked past, looked through, ignored.",
        imageUrl: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
        isFeatured: false,
        isAvailable: true,
        medium: "Canvas | Acrylic",
        dimensions: "20\" x 24\"",
        year: 2024,
      },
      {
        title: "Ghost Walk",
        description: "Blues and reds blur the lines between souls. One body, two selves, a street that remembers every fight and every step.",
        imageUrl: "https://images.unsplash.com/photo-1551885147-8b6c1b8b9c6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
        isFeatured: false,
        isAvailable: true,
        medium: "Canvas | Acrylic",
        dimensions: "24\" x 30\"",
        year: 2024,
      },
      {
        title: "Two Faces",
        description: "Raw. One side ice, one side fire. This is duality. The battle between who we are and what we had to become.",
        imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
        isFeatured: false,
        isAvailable: true,
        medium: "Canvas | Acrylic",
        dimensions: "20\" x 26\"",
        year: 2024,
      }
    ];

    initialArtworks.forEach(artwork => {
      this.createArtwork(artwork);
    });
  }

  async getArtworks(): Promise<Artwork[]> {
    return Array.from(this.artworks.values());
  }

  async getFeaturedArtwork(): Promise<Artwork | undefined> {
    return Array.from(this.artworks.values()).find(artwork => artwork.isFeatured);
  }

  async getArtwork(id: string): Promise<Artwork | undefined> {
    return this.artworks.get(id);
  }

  async createArtwork(insertArtwork: InsertArtwork): Promise<Artwork> {
    const id = randomUUID();
    const artwork: Artwork = { ...insertArtwork, id };
    this.artworks.set(id, artwork);
    return artwork;
  }

  async createInquiry(insertInquiry: InsertInquiry): Promise<Inquiry> {
    const id = randomUUID();
    const inquiry: Inquiry = { 
      ...insertInquiry, 
      id,
      createdAt: new Date().toISOString()
    };
    this.inquiries.set(id, inquiry);
    return inquiry;
  }

  async getInquiries(): Promise<Inquiry[]> {
    return Array.from(this.inquiries.values());
  }
}

export const storage = new MemStorage();
