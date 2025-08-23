import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";

const CitiesSection = () => {
  const cities = [
    {
      id: 1,
      name: "New Delhi",
      state: "Delhi",
      hotels: 45,
      image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400&h=300&fit=crop",
      description: "India's capital with historic monuments and luxury hotels"
    },
    {
      id: 2,
      name: "Mumbai",
      state: "Maharashtra", 
      hotels: 68,
      image: "https://images.unsplash.com/photo-1595658658481-d53d3f999875?w=400&h=300&fit=crop",
      description: "Financial capital offering premium business hotels"
    },
    {
      id: 3,
      name: "Jaipur",
      state: "Rajasthan",
      hotels: 32,
      image: "https://images.unsplash.com/photo-1599661046827-dacde82c0d83?w=400&h=300&fit=crop",
      description: "Pink City with magnificent palace hotels"
    },
    {
      id: 4,
      name: "Udaipur",
      state: "Rajasthan",
      hotels: 28,
      image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=400&h=300&fit=crop",
      description: "City of Lakes with romantic heritage properties"
    },
    {
      id: 5,
      name: "Kerala",
      state: "Kerala",
      hotels: 24,
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=400&h=300&fit=crop",
      description: "God's Own Country with backwater resorts"
    },
    {
      id: 6,
      name: "Goa",
      state: "Goa",
      hotels: 56,
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=400&h=300&fit=crop",
      description: "Beach paradise with luxury coastal resorts"
    }
  ];

  const handleCityClick = (city: any) => {
    // Navigate to city-specific hotels
    alert(`Loading hotels in ${city.name}...`);
    // In real app: window.location.href = `/hotels/${city.name.toLowerCase()}`;
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Explore Hotels by Cities
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover premium hotels across India's most popular destinations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cities.map((city) => (
            <Card 
              key={city.id} 
              className="overflow-hidden hover:shadow-elegant transition-all duration-300 hover:scale-105 cursor-pointer bg-background/50 backdrop-blur-sm"
              onClick={() => handleCityClick(city)}
            >
              <div className="relative">
                <img 
                  src={city.image} 
                  alt={city.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center mb-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{city.state}</span>
                  </div>
                  <h3 className="text-xl font-bold">{city.name}</h3>
                </div>
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  {city.hotels} Hotels
                </div>
              </div>

              <CardContent className="p-4">
                <p className="text-muted-foreground text-sm">
                  {city.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CitiesSection;