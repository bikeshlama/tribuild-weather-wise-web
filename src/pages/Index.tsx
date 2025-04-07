import { Fan, Umbrella, Thermometer, ArrowRight, Shield, Users, CheckCircle } from "lucide-react";
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
      title: "Heating Services",
      description: "Keep your home or business warm and comfortable with our reliable heating solutions.",
      icon: Thermometer,
      benefits: [
        "Energy-efficient systems",
        "Prompt repair services",
        "Maintenance plans available",
        "Expert installation"
      ],
      link: "/services#heating"
    },
    {
      title: "Cooling Services",
      description: "Beat the heat with our advanced cooling systems and maintenance services.",
      icon: Fan,
      benefits: [
        "Modern AC installation",
        "Regular maintenance",
        "Emergency repairs",
        "Energy-saving solutions"
      ],
      link: "/services#cooling"
    },
    {
      title: "Waterproofing",
      description: "Protect your property from water damage with our comprehensive waterproofing solutions.",
      icon: Umbrella,
      benefits: [
        "Basement waterproofing",
        "Foundation sealing",
        "Moisture control",
        "Mold prevention"
      ],
      link: "/services#waterproofing"
    }
  ];

  const testimonials = [
    {
      quote: "Tribuild's team waterproofed our basement after years of moisture issues. They were professional, efficient, and the results have been fantastic. No more dampness or musty smells!",
      author: "Sarah Johnson",
      location: "Redmond, WA",
      rating: 5
    },
    {
      quote: "When our AC died during the hottest week of summer, Tribuild came to the rescue. They installed a new system quickly and at a fair price. Excellent service!",
      author: "Mike Peterson",
      location: "Seattle, WA",
      rating: 5
    },
    {
      quote: "We've been using Tribuild for all our HVAC maintenance for years. Their technicians are always on time, knowledgeable, and friendly. Highly recommend!",
      author: "Jennifer Williams",
      location: "Bellevue, WA",
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
                We provide complete solutions for all your heating, cooling, and waterproofing needs
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

        {/* Trust Badges Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="section-title mx-auto">Why Choose Tribuild?</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We're committed to providing reliable, quality service for all your property needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <TrustBadge
                title="Licensed & Insured"
                description="Our team is fully licensed, bonded, and insured for your peace of mind."
                icon={<Shield className="h-8 w-8 text-tribuild-maroon" />}
              />
              <TrustBadge
                title="Expert Technicians"
                description="Our certified professionals have years of experience and ongoing training."
                icon={<Users className="h-8 w-8 text-tribuild-maroon" />}
              />
              <TrustBadge
                title="Satisfaction Guaranteed"
                description="We stand behind our work with warranties and our satisfaction guarantee."
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

            <div className="text-center mt-12">
              <Button asChild variant="outline" className="gap-2">
                <Link to="/testimonials">
                  Read More Testimonials
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section with Form */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="section-title">Get a Free Quote Today</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Whether you need a new HVAC system installed, repairs to your current system, 
                  or waterproofing solutions for your property, we're here to help. Fill out the 
                  form to request a free, no-obligation quote.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-tribuild-gold mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Fast response times</span>
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
                    <span>Customized solutions for your needs</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-tribuild-gold mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Professional, certified technicians</span>
                  </li>
                </ul>
                <div className="bg-tribuild-maroon/10 rounded-lg p-4 flex items-start">
                  <svg className="h-6 w-6 text-tribuild-maroon mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-sm">
                    <span className="font-semibold">24/7 Emergency Service Available</span>: For urgent issues, call our emergency line at <a href="tel:1234567890" className="text-tribuild-maroon font-semibold">(123) 456-7890</a>
                  </p>
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
