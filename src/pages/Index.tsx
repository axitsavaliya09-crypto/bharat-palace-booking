import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustIndicators from "@/components/TrustIndicators";
import CitiesSection from "@/components/CitiesSection";
import HotelListing from "@/components/HotelListing";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <CitiesSection />
        <TrustIndicators />
        <HotelListing />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
