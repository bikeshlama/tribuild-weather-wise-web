
import { Fan, Umbrella, Thermometer, ArrowRight, Shield, Users, CheckCircle, Droplet, Building, PaintBucket } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import TrustBadge from "@/components/TrustBadge";
import TestimonialCard from "@/components/TestimonialCard";
import QuoteForm from "@/components/QuoteForm";

const Index = () => {
  const services = [
    {
      title: "Basement Waterproofing",
      description: "Keep your basement dry and protected from water damage with our professional waterproofing solutions.",
      icon: Building,
      benefits: [
        "Prevents structural damage",
        "Eliminates mold and mildew",
        "Increases usable space",
        "Long-lasting protection"
      ],
      link: "/services#basement"
    },
    {
      title: "Roof Waterproofing",
      description: "Protect your property from top to bottom with our specialized roof waterproofing and heat reflective coatings.",
      icon: Umbrella,
      benefits: [
        "Prevents leaks and seepage",
        "Heat reflective options available",
        "Extends roof lifespan",
        "Energy-saving solutions"
      ],
      link: "/services#roof"
    },
    {
      title: "Commercial Waterproofing",
      description: "Comprehensive waterproofing solutions for commercial and industrial buildings to protect your business investment.",
      icon: Droplet,
      benefits: [
        "Customized for commercial needs",
        "Minimal disruption to operations",
        "Industrial-grade materials",
        "Preventive maintenance plans"
      ],
      link: "/services#commercial"
    }
  ];

  const testimonials = [
    {
      quote: "TriBuild's basement waterproofing service saved our property from persistent water damage. Their team was professional, efficient, and the results have been outstanding!",
      author: "Rajan Kumar",
      location: "Cochin",
      rating: 5
    },
    {
      quote: "We hired TriBuild for our commercial building's waterproofing needs. Their expertise and quality products made all the difference. No more leaks even during monsoon season!",
      author: "Anjali Menon",
      location: "Kannur",
      rating: 5
    },
    {
      quote: "The heat reflective coating TriBuild applied on our roof has significantly reduced our cooling costs. Their team was knowledgeable and the application was done perfectly.",
      author: "Thomas Philip",
      location: "Ernakulam",
      rating: 4
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection />

        {/* Services Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="section-title mx-auto">Our Services</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We provide comprehensive waterproofing solutions for residential, commercial, and industrial spaces
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>

            <div className="text-center mt-12">
              <Button asChild variant="outline" className="gap-2">
                <Link to="/services">
                  View All Services
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* About Us Section (New) */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="section-title">About TriBuild Water Proofing Company</h2>
                <p className="text-gray-600 mb-6">
                  TriBuild Water Proofing Company is a leading waterproofing specialist based in Cochin and Kannur, 
                  dedicated to providing high-quality waterproofing solutions for residential, commercial, and industrial spaces. 
                </p>
                <p className="text-gray-600 mb-6">
                  With a commitment to excellence, we offer a wide range of services and products to protect your property 
                  from water damage, ensuring durability and longevity. Powered by Aidas & Roof Chemist, we bring cutting-edge 
                  technology and expertise to every project.
                </p>
                <div className="flex mt-8">
                  <Button asChild className="bg-tribuild-maroon hover:bg-tribuild-maroonLight text-white">
                    <Link to="/about">Learn More About Us</Link>
                  </Button>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1581163098880-47f1465d811f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
                  alt="Waterproofing specialists at work" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Products Section (New) */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="section-title mx-auto">Our Products</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                High-quality waterproofing and construction chemicals powered by Aidas & Roof Chemist
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-tribuild-gold/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <PaintBucket className="h-8 w-8 text-tribuild-gold" />
                </div>
                <h3 className="text-xl font-bold mb-2">Weather Tuff Sealoxy Primer</h3>
                <p className="text-gray-600">
                  An effective undercoat for cementitious surfaces (Interior, Terrace, Slab). 
                  It fills porosity in plaster, enhances paint coverage, and provides water resistance.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-tribuild-gold/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Droplet className="h-8 w-8 text-tribuild-gold" />
                </div>
                <h3 className="text-xl font-bold mb-2">Weather Tuff Hydro Seal</h3>
                <p className="text-gray-600">
                  A premium waterproofing solution for protecting your property from water damage, 
                  providing long-lasting and reliable waterproofing for various surfaces.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-tribuild-gold/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Thermometer className="h-8 w-8 text-tribuild-gold" />
                </div>
                <h3 className="text-xl font-bold mb-2">Solar Heat Reflective Paints</h3>
                <p className="text-gray-600">
                  Reduce heat absorption and keep your building cool with our specialized 
                  heat reflective coatings, saving energy and increasing comfort.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Button asChild variant="outline" className="gap-2">
                <Link to="/services#products">
                  View All Products
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Trust Badges Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="section-title mx-auto">Why Choose TriBuild?</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We're committed to providing reliable, quality waterproofing solutions for all your property needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <TrustBadge
                title="Expertise & Quality"
                description="Years of experience in waterproofing and construction solutions with high-quality products from Aidas & Roof Chemist."
                icon={<Shield className="h-8 w-8 text-tribuild-maroon" />}
              />
              <TrustBadge
                title="Comprehensive Services"
                description="From basements to swimming pools, we offer complete waterproofing solutions for all types of structures."
                icon={<Users className="h-8 w-8 text-tribuild-maroon" />}
              />
              <TrustBadge
                title="Customer Satisfaction"
                description="We prioritize delivering reliable and long-lasting solutions with warranties and dedicated support."
                icon={<CheckCircle className="h-8 w-8 text-tribuild-maroon" />}
              />
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="section-title mx-auto">What Our Customers Say</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Don't just take our word for it - see what our satisfied customers have to say
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section with Form */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="section-title">Get a Free Consultation Today</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Protect your property with TriBuild Water Proofing Company. Contact us today for a 
                  consultation on your waterproofing needs.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-tribuild-gold mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Free inspection and estimate</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-tribuild-gold mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Detailed, transparent pricing</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-tribuild-gold mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Customized solutions for your specific needs</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-tribuild-gold mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Experienced, certified technicians</span>
                  </li>
                </ul>
                <div className="bg-tribuild-maroon/10 rounded-lg p-4 flex items-start mb-6">
                  <svg className="h-6 w-6 text-tribuild-maroon mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-sm">
                    <span className="font-semibold">Contact Us Today:</span> For inquiries or to schedule a consultation, call 
                    <a href="tel:8113023156" className="text-tribuild-maroon font-semibold"> +91 8113023156</a> or email us at 
                    <a href="mailto:tribuildmvg@gmail.com" className="text-tribuild-maroon font-semibold"> tribuildmvg@gmail.com</a>
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-bold mb-2">Cochin Office</h3>
                    <p className="text-sm text-gray-600">
                      Densons Building, 2nd Floor - 1/676, Marottichuvadu Jn, Edappally Toll, Eranakulam, Cochin - 682024
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-bold mb-2">Kannur Office</h3>
                    <p className="text-sm text-gray-600">
                      Thana, Kannur
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <QuoteForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
