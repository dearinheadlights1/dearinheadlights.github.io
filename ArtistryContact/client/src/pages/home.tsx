import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import FeaturedDrop from "@/components/featured-drop";
import GallerySection from "@/components/gallery-section";
import AboutSection from "@/components/about-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="bg-deep-black text-white font-urban overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <FeaturedDrop />
      <GallerySection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
