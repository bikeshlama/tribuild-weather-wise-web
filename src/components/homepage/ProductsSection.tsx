
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";

const ProductsSection = () => {
  const products = [
    {
      title: "Weather Tuff Sealoxy Primer",
      description: "An effective undercoat for cementitious surfaces (Interior, Terrace, Slab). It fills porosity in plaster, enhances paint coverage, and provides water resistance.",
      icon: "paint-bucket",
      image: "https://images.unsplash.com/photo-1599793105232-2ea29f5a943b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "Weather Tuff Hydro Seal",
      description: "A premium waterproofing solution for protecting your property from water damage, providing long-lasting and reliable waterproofing for various surfaces.",
      icon: "droplet",
      image: "https://images.unsplash.com/photo-1604187351574-c75ca79f5807?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "Solar Heat Reflective Paints",
      description: "Reduce heat absorption and keep your building cool with our specialized heat reflective coatings, saving energy and increasing comfort.",
      icon: "thermometer",
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
    }
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title mx-auto dark:text-white">Our Products</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            High-quality waterproofing and construction chemicals powered by Aidas & Roof Chemist
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="transform transition duration-300 hover:-translate-y-2 animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" className="gap-2 hover:bg-tribuild-gold/10 group">
            <Link to="/products">
              View All Products
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
