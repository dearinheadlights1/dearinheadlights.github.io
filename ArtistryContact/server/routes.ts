import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertInquirySchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Get all artworks
  app.get("/api/artworks", async (req, res) => {
    try {
      const artworks = await storage.getArtworks();
      res.json(artworks);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch artworks" });
    }
  });

  // Get featured artwork
  app.get("/api/artworks/featured", async (req, res) => {
    try {
      const featured = await storage.getFeaturedArtwork();
      if (!featured) {
        return res.status(404).json({ message: "No featured artwork found" });
      }
      res.json(featured);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch featured artwork" });
    }
  });

  // Get single artwork
  app.get("/api/artworks/:id", async (req, res) => {
    try {
      const artwork = await storage.getArtwork(req.params.id);
      if (!artwork) {
        return res.status(404).json({ message: "Artwork not found" });
      }
      res.json(artwork);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch artwork" });
    }
  });

  // Create inquiry
  app.post("/api/inquiries", async (req, res) => {
    try {
      const validatedData = insertInquirySchema.parse(req.body);
      const inquiry = await storage.createInquiry(validatedData);
      res.status(201).json(inquiry);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid data", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to create inquiry" });
    }
  });

  // Get all inquiries (admin only - for future use)
  app.get("/api/inquiries", async (req, res) => {
    try {
      const inquiries = await storage.getInquiries();
      res.json(inquiries);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch inquiries" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
