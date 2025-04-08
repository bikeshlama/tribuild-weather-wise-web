
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/homepage/ServicesSection";
import AboutSection from "@/components/homepage/AboutSection";
import ProductsSection from "@/components/homepage/ProductsSection";
import TrustBadgesSection from "@/components/homepage/TrustBadgesSection";
import TestimonialsSection from "@/components/homepage/TestimonialsSection";
import FAQSection from "@/components/homepage/FAQSection";
import CTASection from "@/components/homepage/CTASection";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection />

        {/* Services Section */}
        <ServicesSection />

        {/* About Us Section */}
        <AboutSection />

        {/* Products Section */}
        <ProductsSection />

        {/* Trust Badges Section */}
        <TrustBadgesSection />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* FAQ Section */}
        <FAQSection />

        {/* CTA Section with Form */}
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
