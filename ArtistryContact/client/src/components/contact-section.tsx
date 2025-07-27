import { Mail, Phone, Send, PhoneCall } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-deep-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-6xl font-street text-neon-green mb-8">GET IN TOUCH</h2>
        <div className="w-24 h-1 bg-vibrant-orange mx-auto mb-12"></div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Email Contact */}
          <div className="bg-dark-gray rounded-2xl p-8 hover:bg-dark-gray/80 transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-6xl text-neon-green mb-6">
              <Mail className="mx-auto" />
            </div>
            <h3 className="text-2xl font-street text-white mb-4">EMAIL ME</h3>
            <p className="text-gray-300 mb-6">Ready to buy? Have questions? Drop me a line and let's talk art.</p>
            <a 
              href="mailto:sncaflores@gmail.com?subject=I%20want%20to%20buy%20your%20art&body=Hi%2C%20I%E2%80%99m%20interested%20in%20buying%20one%20of%20your%20pieces."
              className="inline-flex items-center px-8 py-4 bg-neon-green text-deep-black font-bold text-lg rounded-lg hover:bg-neon-green/90 transition-all duration-300 transform hover:scale-105"
              data-testid="link-email-contact"
            >
              <Send className="mr-2" size={20} />
              Send Email
            </a>
          </div>
          
          {/* Phone Contact */}
          <div className="bg-dark-gray rounded-2xl p-8 hover:bg-dark-gray/80 transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-6xl text-electric-blue mb-6">
              <Phone className="mx-auto" />
            </div>
            <h3 className="text-2xl font-street text-white mb-4">CALL ME</h3>
            <p className="text-gray-300 mb-6">Want to talk directly? I'm here to discuss pieces, pricing, and stories.</p>
            <a 
              href="tel:+13109101838"
              className="inline-flex items-center px-8 py-4 border-2 border-electric-blue text-electric-blue font-bold text-lg rounded-lg hover:bg-electric-blue hover:text-white transition-all duration-300 transform hover:scale-105"
              data-testid="link-phone-contact"
            >
              <PhoneCall className="mr-2" size={20} />
              Call Now
            </a>
          </div>
        </div>
        
        <div className="mt-12 p-6 bg-dark-gray/50 rounded-xl border border-vibrant-orange/20">
          <p className="text-gray-300" data-testid="text-purchase-note">
            <span className="text-vibrant-orange font-bold">Note:</span> All pieces are original, hand-painted acrylics on canvas. Prices vary by size and complexity. Contact for availability and shipping details.
          </p>
        </div>
      </div>
    </section>
  );
}
