
import { Link } from "react-router-dom";
import { ArrowRight, Building, Umbrella, Droplet } from "lucide-react";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";

const ServicesSection = () => {
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

  return (
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
  );
};

export default ServicesSection;
