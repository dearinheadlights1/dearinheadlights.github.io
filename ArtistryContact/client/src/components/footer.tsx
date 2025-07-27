import { Instagram, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark-gray border-t border-neon-green/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h3 className="text-3xl font-street text-neon-green mb-4" data-testid="text-footer-title">SNC FLORES</h3>
          <p className="text-gray-400" data-testid="text-footer-tagline">Urban Canvas | Street Stories | Real Art</p>
        </div>
        
        <div className="flex justify-center space-x-6 mb-8">
          <a 
            href="mailto:sncaflores@gmail.com" 
            className="text-gray-400 hover:text-neon-green transition-colors"
            data-testid="link-footer-instagram"
            title="Instagram"
          >
            <Instagram size={24} />
          </a>
          <a 
            href="tel:+13109101838" 
            className="text-gray-400 hover:text-electric-blue transition-colors"
            data-testid="link-footer-phone"
            title="Phone"
          >
            <Phone size={24} />
          </a>
          <a 
            href="mailto:sncaflores@gmail.com" 
            className="text-gray-400 hover:text-vibrant-orange transition-colors"
            data-testid="link-footer-email"
            title="Email"
          >
            <Mail size={24} />
          </a>
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <p className="text-gray-500 text-sm" data-testid="text-footer-copyright">
            © 2024 SNC Flores. All rights reserved. | Original urban canvas art | Made from the streets, for the streets.
          </p>
        </div>
      </div>
    </footer>
  );
}
