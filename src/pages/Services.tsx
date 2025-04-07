
import { Fan, Thermometer, Umbrella, Wrench, House, Droplet } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface ServiceDetailProps {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  features: string[];
  icon: React.ReactNode;
  image: string;
  reverse?: boolean;
}

const ServiceDetail = ({ id, title, description, benefits, features, icon, image, reverse = false }: ServiceDetailProps) => {
  return (
    <section id={id} className="py-16 border-b border-gray-200 last:border-0">
      <div className="container-custom">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
          <div className={reverse ? 'lg:order-2' : ''}>
            <div className="flex items-center gap-3 mb-4">
              {icon}
              <h2 className="text-3xl font-bold">{title}</h2>
            </div>
            <p className="text-gray-600 mb-6">{description}</p>
            
            <h3 className="text-xl font-semibold mb-3">Benefits</h3>
            <ul className="space-y-2 mb-6">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <svg className="h-5 w-5 text-tribuild-gold mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            
            <h3 className="text-xl font-semibold mb-3">Our Approach</h3>
            <ul className="space-y-2 mb-6">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex-shrink-0 flex items-center justify-center h-5 w-5 rounded-full bg-tribuild-maroon text-white text-xs font-bold mr-2 mt-1">{index + 1}</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button asChild className="bg-tribuild-maroon hover:bg-tribuild-maroonLight">
              <Link to="/contact">Request Service</Link>
            </Button>
          </div>
          <div className={`rounded-lg overflow-hidden card-shadow ${reverse ? 'lg:order-1' : ''}`}>
            <img src={image} alt={title} className="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      id: "heating",
      title: "Heating Services",
      description: "Keep your home or business warm and comfortable year-round with our comprehensive heating services. Our certified technicians can install, repair, and maintain all types of heating systems to ensure optimal performance and energy efficiency.",
      benefits: [
        "Even, comfortable heating throughout your property",
        "Reduced energy costs with efficient systems",
        "Extended equipment lifespan through proper maintenance",
        "Improved indoor air quality with modern filtration",
        "Peace of mind with our satisfaction guarantee"
      ],
      features: [
        "Thorough assessment of your heating needs and current system",
        "Clear, upfront pricing with no hidden fees",
        "Expert installation using industry best practices",
        "Regular maintenance to prevent costly breakdowns",
        "24/7 emergency repair services"
      ],
      icon: <Thermometer className="h-10 w-10 text-tribuild-gold" />,
      image: "https://images.unsplash.com/photo-1617356700668-db4d1dbe0ffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: "cooling",
      title: "Cooling Services",
      description: "Stay cool during the hottest days with our reliable cooling solutions. Whether you need a new air conditioning system, repairs to your existing unit, or regular maintenance, our team has the skills and experience to keep your cooling system running efficiently.",
      benefits: [
        "Consistent cooling for optimal comfort",
        "Lower utility bills with energy-efficient systems",
        "Reduced humidity for a healthier indoor environment",
        "Quiet operation for a peaceful atmosphere",
        "Environmentally friendly refrigerant options"
      ],
      features: [
        "Comprehensive evaluation of your cooling requirements",
        "Custom solutions designed for your specific needs",
        "Professional installation with minimal disruption",
        "Scheduled maintenance to ensure peak performance",
        "Prompt repair services to minimize downtime"
      ],
      icon: <Fan className="h-10 w-10 text-tribuild-gold" />,
      image: "https://images.unsplash.com/photo-1581163098880-47f1465d811f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      reverse: true
    },
    {
      id: "waterproofing",
      title: "Basement Waterproofing",
      description: "Protect your property from water damage and moisture problems with our specialized basement waterproofing services. We offer comprehensive solutions to keep your basement dry, prevent mold growth, and safeguard your foundation against water intrusion.",
      benefits: [
        "Dry, usable basement space year-round",
        "Protection against structural damage",
        "Prevention of mold and mildew growth",
        "Increased property value",
        "Healthier indoor environment for your family"
      ],
      features: [
        "Thorough inspection to identify water entry points",
        "Customized waterproofing plan for your specific issues",
        "Interior and exterior waterproofing solutions",
        "Installation of sump pumps and drainage systems as needed",
        "Long-lasting treatments with transferable warranties"
      ],
      icon: <Umbrella className="h-10 w-10 text-tribuild-gold" />,
      image: "https://images.unsplash.com/photo-1584463639875-2202f5c36b68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: "foundation",
      title: "Foundation Solutions",
      description: "Address foundation issues before they lead to major structural problems. Our foundation repair services provide effective, permanent solutions for cracks, settling, and other foundation-related concerns to maintain the integrity of your property.",
      benefits: [
        "Stabilized foundation to prevent further damage",
        "Correction of uneven floors and sticking doors",
        "Resolution of wall cracks and separation",
        "Long-term protection for your property's value",
        "Transferable warranties for peace of mind"
      ],
      features: [
        "Comprehensive foundation assessment and diagnosis",
        "Advanced repair techniques including piering and anchoring",
        "Minimal disruption to your property during repairs",
        "Post-repair monitoring to ensure solution effectiveness",
        "Full documentation for warranty and real estate purposes"
      ],
      icon: <House className="h-10 w-10 text-tribuild-gold" />,
      image: "https://images.unsplash.com/photo-1621829440883-ca2806063d6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      reverse: true
    },
    {
      id: "maintenance",
      title: "Preventive Maintenance",
      description: "Extend the life of your HVAC and waterproofing systems with our comprehensive maintenance plans. Regular maintenance not only prevents unexpected breakdowns but also optimizes performance, improves efficiency, and saves you money in the long run.",
      benefits: [
        "Fewer repairs and emergency service calls",
        "Optimized system performance and efficiency",
        "Lower utility bills through proper maintenance",
        "Priority scheduling for service when needed",
        "Detailed documentation of system condition"
      ],
      features: [
        "Scheduled maintenance based on manufacturer recommendations",
        "Thorough cleaning of all system components",
        "Inspection and adjustment of critical parts",
        "Testing of safety controls and functions",
        "Identification of potential issues before they become problems"
      ],
      icon: <Wrench className="h-10 w-10 text-tribuild-gold" />,
      image: "https://images.unsplash.com/photo-1573496359142-b8475f639467?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2688&q=80"
    },
    {
      id: "emergency",
      title: "Emergency Services",
      description: "When disaster strikes, our emergency response team is ready 24/7 to address urgent heating, cooling, and water-related issues. Don't let a system failure or water emergency disrupt your life—count on our prompt, reliable emergency services.",
      benefits: [
        "Immediate assistance when you need it most",
        "Minimized damage through quick response",
        "Restoration of comfort and safety",
        "Skilled technicians available around the clock",
        "Same-day service in most situations"
      ],
      features: [
        "24/7 availability, including holidays and weekends",
        "Rapid dispatch of experienced emergency technicians",
        "Fully equipped service vehicles for on-the-spot repairs",
        "Clear communication throughout the emergency process",
        "Follow-up services to ensure complete resolution"
      ],
      icon: <Droplet className="h-10 w-10 text-tribuild-gold" />,
      image: "https://images.unsplash.com/photo-1496302662116-35cc4f36df92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      reverse: true
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-tribuild-dark text-white py-16">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              Comprehensive heating, cooling, and waterproofing solutions tailored to your needs
            </p>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-12 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="section-title mx-auto">How We Can Help</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From routine maintenance to emergency repairs, we provide expert services to keep your property comfortable and protected
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {services.map((service, index) => (
                <a 
                  key={index} 
                  href={`#${service.id}`}
                  className="flex flex-col items-center p-6 bg-white rounded-lg card-shadow hover:shadow-md transition-shadow"
                >
                  <div className="mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-center text-sm">
                    {service.description.split('.')[0]}.
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Individual Service Details */}
        {services.map((service, index) => (
          <ServiceDetail 
            key={index}
            id={service.id}
            title={service.title}
            description={service.description}
            benefits={service.benefits}
            features={service.features}
            icon={service.icon}
            image={service.image}
            reverse={service.reverse}
          />
        ))}

        {/* CTA Section */}
        <section className="py-16 bg-tribuild-maroon text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Contact us today for a free consultation and quote on any of our services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-tribuild-gold hover:bg-opacity-80 text-tribuild-dark">
                <Link to="/contact">Request a Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                <Link to="tel:1234567890">Call (123) 456-7890</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
