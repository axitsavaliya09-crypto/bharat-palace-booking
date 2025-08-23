import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { CreditCard, Calendar, MapPin, User, Lock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Payment = () => {
  const [searchParams] = useSearchParams();
  const [hotelData, setHotelData] = useState<any>(null);
  const [nights, setNights] = useState(1);

  useEffect(() => {
    const hotelParam = searchParams.get('hotel');
    if (hotelParam) {
      try {
        const parsed = JSON.parse(decodeURIComponent(hotelParam));
        setHotelData(parsed);
      } catch (error) {
        console.error('Error parsing hotel data:', error);
      }
    }
  }, [searchParams]);

  const handlePayment = () => {
    // Simulate payment processing
    alert(`Processing payment of ₹${(hotelData.price * nights).toLocaleString()} for ${hotelData.hotelName}...`);
    // In real app, integrate with payment gateway
  };

  if (!hotelData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Loading...</h2>
          <p className="text-muted-foreground">Please wait while we prepare your booking.</p>
        </div>
      </div>
    );
  }

  const totalAmount = hotelData.price * nights;

  return (
    <div className="min-h-screen bg-muted/30">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-foreground mb-8">Complete Your Booking</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Booking Details */}
            <Card className="bg-background/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-primary" />
                  Booking Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{hotelData.hotelName}</h3>
                  <p className="text-muted-foreground">{hotelData.location}</p>
                </div>
                
                <Separator />
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Room Rate (per night)</span>
                    <span className="font-semibold">₹{hotelData.price.toLocaleString()}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <Label htmlFor="nights">Number of Nights</Label>
                    <Input
                      id="nights"
                      type="number"
                      min="1"
                      max="30"
                      value={nights}
                      onChange={(e) => setNights(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-20 text-center"
                    />
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Taxes & Fees</span>
                    <span className="font-semibold">₹{Math.round(totalAmount * 0.18).toLocaleString()}</span>
                  </div>
                </div>
                
                <Separator />
                
                <div className="flex justify-between text-lg font-bold">
                  <span>Total Amount</span>
                  <span className="text-primary">₹{Math.round(totalAmount * 1.18).toLocaleString()}</span>
                </div>
              </CardContent>
            </Card>

            {/* Payment Form */}
            <Card className="bg-background/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CreditCard className="h-5 w-5 mr-2 text-primary" />
                  Payment Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input id="fullName" placeholder="Enter your full name" className="pl-10" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="+91 98765 43210" />
                </div>

                <Separator />

                <div className="space-y-2">
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <div className="relative">
                    <CreditCard className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input id="cardNumber" placeholder="1234 5678 9012 3456" className="pl-10" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expiry">Expiry Date</Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input id="expiry" placeholder="MM/YY" className="pl-10" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="cvv">CVV</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input id="cvv" placeholder="123" className="pl-10" />
                    </div>
                  </div>
                </div>

                <Button 
                  onClick={handlePayment}
                  className="w-full mt-6" 
                  variant="booking"
                  size="lg"
                >
                  Pay ₹{Math.round(totalAmount * 1.18).toLocaleString()}
                </Button>

                <p className="text-xs text-muted-foreground text-center mt-4">
                  Your payment is secured with SSL encryption. We never store your card details.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Payment;