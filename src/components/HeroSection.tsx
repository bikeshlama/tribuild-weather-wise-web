
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-tribuild-dark to-tribuild-maroon text-white py-20 md:py-28">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1584463639875-2202f5c36b68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')]"
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundBlendMode: "overlay",
            mixBlendMode: "overlay",
          }}
        ></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight">
            Protect Your Property from Water Damage
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Cochin & Kannur's leading waterproofing specialist - powered by Aidas & Roof Chemist
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-tribuild-gold hover:bg-opacity-80 text-tribuild-dark">
              <Link to="/contact">Request a Free Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              <Link to="tel:8113023156" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Call Us Now
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
