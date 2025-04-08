
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";

const ProductsSection = () => {
  const products = [
    {
      title: "Weather Tuff Sealoxy Primer",
      description: "An effective undercoat for cementitious surfaces (Interior, Terrace, Slab). It fills porosity in plaster, enhances paint coverage, and provides water resistance.",
      icon: "paint-bucket"
    },
    {
      title: "Weather Tuff Hydro Seal",
      description: "A premium waterproofing solution for protecting your property from water damage, providing long-lasting and reliable waterproofing for various surfaces.",
      icon: "droplet"
    },
    {
      title: "Solar Heat Reflective Paints",
      description: "Reduce heat absorption and keep your building cool with our specialized heat reflective coatings, saving energy and increasing comfort.",
      icon: "thermometer"
    }
  ];

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
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
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
