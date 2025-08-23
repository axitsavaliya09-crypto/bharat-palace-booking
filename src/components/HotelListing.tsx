import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Star, MapPin, Wifi, Car, Coffee, Waves } from "lucide-react";
import hotel1 from "@/assets/hotel-1.jpg";
import hotel2 from "@/assets/hotel-2.jpg";
import hotel3 from "@/assets/hotel-3.jpg";

const HotelListing = () => {
  const [selectedHotel, setSelectedHotel] = useState<any>(null);

  const hotels = [
    {
      id: 1,
      name: "Royal Palace Heritage",
      location: "Jaipur, Rajasthan",
      image: hotel1,
      rating: 4.8,
      reviews: 892,
      price: 8999,
      originalPrice: 12999,
      amenities: ["Free WiFi", "Parking", "Restaurant", "Pool"],
      description: "Experience royal luxury in this magnificent palace hotel with traditional Rajasthani architecture and modern amenities.",
      icons: [Wifi, Car, Coffee, Waves]
    },
    {
      id: 2,
      name: "Kerala Backwater Resort",
      location: "Alleppey, Kerala",
      image: hotel2,
      rating: 4.7,
      reviews: 654,
      price: 6999,
      originalPrice: 9999,
      amenities: ["Free WiFi", "Boat Tours", "Spa", "Restaurant"],
      description: "Immerse yourself in nature's beauty with our luxury houseboat experience in the serene Kerala backwaters.",
      icons: [Wifi, Waves, Coffee, Car]
    },
    {
      id: 3,
      name: "Himalayan Mountain Lodge",
      location: "Manali, Himachal Pradesh",
      image: hotel3,
      rating: 4.9,
      reviews: 1234,
      price: 7499,
      originalPrice: 10999,
      amenities: ["Mountain View", "Spa", "Restaurant", "Trekking"],
      description: "Wake up to breathtaking mountain views in this luxury lodge nestled in the heart of the Himalayas.",
      icons: [Coffee, Waves, Wifi, Car]
    }
  ];

  const handleBookNow = (hotel: any) => {
    // Simulate payment page redirect
    alert(`Redirecting to payment page for ${hotel.name}...`);
    // In a real app, this would redirect to a payment gateway
  };

  return (
    <section id="hotels" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Indian Hotels
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover hand-picked luxury hotels across India's most beautiful destinations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hotels.map((hotel) => (
            <Card key={hotel.id} className="overflow-hidden hover:shadow-elegant transition-all duration-300 hover:scale-105 bg-background/50 backdrop-blur-sm">
              <div className="relative">
                <img 
                  src={hotel.image} 
                  alt={hotel.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-secondary text-secondary-foreground font-semibold">
                    {Math.round(((hotel.originalPrice - hotel.price) / hotel.originalPrice) * 100)}% OFF
                  </Badge>
                </div>
                <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center">
                  <Star className="h-4 w-4 text-secondary fill-current mr-1" />
                  <span className="text-sm font-semibold">{hotel.rating}</span>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{hotel.name}</h3>
                <div className="flex items-center text-muted-foreground mb-4">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{hotel.location}</span>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    {hotel.icons.map((Icon, index) => (
                      <Icon key={index} className="h-4 w-4 text-muted-foreground" />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">({hotel.reviews} reviews)</span>
                </div>

                <div className="flex items-end justify-between">
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-foreground">₹{hotel.price.toLocaleString()}</span>
                      <span className="text-sm text-muted-foreground line-through">₹{hotel.originalPrice.toLocaleString()}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">per night</span>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0 space-x-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      variant="outline" 
                      className="flex-1"
                      onClick={() => setSelectedHotel(hotel)}
                    >
                      View Details
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-2xl">
                    {selectedHotel && (
                      <>
                        <DialogHeader>
                          <DialogTitle>{selectedHotel.name}</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                          <img 
                            src={selectedHotel.image} 
                            alt={selectedHotel.name}
                            className="w-full h-64 object-cover rounded-lg"
                          />
                          <p className="text-muted-foreground">{selectedHotel.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {selectedHotel.amenities.map((amenity: string, index: number) => (
                              <Badge key={index} variant="secondary">{amenity}</Badge>
                            ))}
                          </div>
                          <div className="flex items-center justify-between pt-4">
                            <div>
                              <div className="flex items-center space-x-2">
                                <span className="text-2xl font-bold">₹{selectedHotel.price.toLocaleString()}</span>
                                <span className="text-muted-foreground line-through">₹{selectedHotel.originalPrice.toLocaleString()}</span>
                              </div>
                              <span className="text-sm text-muted-foreground">per night</span>
                            </div>
                            <Button 
                              variant="booking" 
                              onClick={() => handleBookNow(selectedHotel)}
                            >
                              Book Now
                            </Button>
                          </div>
                        </div>
                      </>
                    )}
                  </DialogContent>
                </Dialog>
                
                <Button 
                  variant="booking" 
                  className="flex-1"
                  onClick={() => handleBookNow(hotel)}
                >
                  Book Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HotelListing;