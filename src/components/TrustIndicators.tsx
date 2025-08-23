import { Card } from "@/components/ui/card";
import { Shield, Clock, IndianRupee, Award } from "lucide-react";

const TrustIndicators = () => {
  const features = [
    {
      icon: Clock,
      title: "24/7 Service",
      description: "Round-the-clock customer support for all your needs",
      color: "text-primary"
    },
    {
      icon: Shield,
      title: "Trusted & Secure",
      description: "Safe and secure booking with verified hotels",
      color: "text-secondary"
    },
    {
      icon: IndianRupee,
      title: "Best Prices",
      description: "Guaranteed lowest prices or we'll match it",
      color: "text-accent"
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "Hand-picked hotels with excellent ratings",
      color: "text-primary-glow"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose BharatHotel?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the perfect blend of luxury, trust, and affordability with our premium hotel booking service
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-elegant transition-all duration-300 hover:scale-105 bg-background/50 backdrop-blur-sm">
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 mb-4`}>
                <feature.icon className={`h-8 w-8 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;