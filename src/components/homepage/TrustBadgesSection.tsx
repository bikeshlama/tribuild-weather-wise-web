
import { Shield, Users, CheckCircle } from "lucide-react";
import TrustBadge from "@/components/TrustBadge";

const TrustBadgesSection = () => {
  return (
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
            icon={Shield}
          />
          <TrustBadge
            title="Comprehensive Services"
            description="From basements to swimming pools, we offer complete waterproofing solutions for all types of structures."
            icon={Users}
          />
          <TrustBadge
            title="Customer Satisfaction"
            description="We prioritize delivering reliable and long-lasting solutions with warranties and dedicated support."
            icon={CheckCircle}
          />
        </div>
      </div>
    </section>
  );
};

export default TrustBadgesSection;
