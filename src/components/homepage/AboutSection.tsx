
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
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
  );
};

export default AboutSection;
