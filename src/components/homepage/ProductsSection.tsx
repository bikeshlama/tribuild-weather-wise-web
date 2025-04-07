
import { Link } from "react-router-dom";
import { ArrowRight, PaintBucket, Droplet, Thermometer } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProductsSection = () => {
  return (
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
  );
};

export default ProductsSection;
