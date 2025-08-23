import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Globe, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        {/* Head Office Section */}
        <Card className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20 p-8 mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">Head Office</h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto">
              Visit our headquarters or get in touch with our dedicated team for personalized service
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary/20 mb-4">
                <MapPin className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="font-semibold mb-2">Address</h3>
              <p className="text-primary-foreground/80 text-sm">
                123 Heritage Plaza,<br />
                Connaught Place,<br />
                New Delhi - 110001
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary/20 mb-4">
                <Phone className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-primary-foreground/80 text-sm">
                +91 98765 43210<br />
                +91 11-2345-6789<br />
                Toll Free: 1800-123-4567
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary/20 mb-4">
                <Mail className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-primary-foreground/80 text-sm">
                info@bharathotel.com<br />
                bookings@bharathotel.com<br />
                support@bharathotel.com
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary/20 mb-4">
                <Globe className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="font-semibold mb-2">Website</h3>
              <p className="text-primary-foreground/80 text-sm">
                www.bharathotel.com<br />
                Available 24/7<br />
                Multi-language Support
              </p>
            </div>
          </div>
        </Card>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4 text-secondary">BharatHotel</h3>
            <p className="text-primary-foreground/80 mb-4">
              Your trusted partner for discovering India's finest hotels and creating unforgettable memories.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-secondary">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-secondary">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-secondary">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-secondary">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-secondary">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#hotels" className="hover:text-secondary transition-colors">Hotels</a></li>
              <li><a href="#destinations" className="hover:text-secondary transition-colors">Destinations</a></li>
              <li><a href="#offers" className="hover:text-secondary transition-colors">Special Offers</a></li>
              <li><a href="#about" className="hover:text-secondary transition-colors">About Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-secondary">Services</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-secondary transition-colors">Hotel Booking</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Group Bookings</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Corporate Travel</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Travel Insurance</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-secondary">Support</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-secondary transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Booking Policy</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2024 BharatHotel. All rights reserved. | Made with ❤️ for Indian Hospitality
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;