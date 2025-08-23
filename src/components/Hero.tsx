import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Search, MapPin, Calendar, Users } from "lucide-react";
import heroImage from "@/assets/hero-taj-mahal.jpg";

const Hero = () => {
  return (
    <section 
      className="relative min-h-[80vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-accent/70" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in">
            Discover India's Finest Hotels
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 animate-fade-in">
            Experience luxury, comfort, and authentic Indian hospitality at unbeatable prices
          </p>
          
          {/* Search Card */}
          <Card className="bg-background/95 backdrop-blur-sm p-6 max-w-4xl mx-auto animate-scale-in shadow-elegant">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  Destination
                </label>
                <Input placeholder="Where do you want to go?" className="border-border/50" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  Check-in
                </label>
                <Input type="date" className="border-border/50" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  Check-out
                </label>
                <Input type="date" className="border-border/50" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center">
                  <Users className="h-4 w-4 mr-1" />
                  Guests
                </label>
                <select className="w-full h-10 px-3 py-2 text-sm bg-background border border-border/50 rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                  <option>1 Guest</option>
                  <option>2 Guests</option>
                  <option>3 Guests</option>
                  <option>4+ Guests</option>
                </select>
              </div>
            </div>
            
            <div className="mt-6">
              <Button variant="hero" size="lg" className="w-full md:w-auto px-12">
                <Search className="h-5 w-5 mr-2" />
                Search Hotels
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Hero;