
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ShoppingBag, PaintBucket, Droplet, Thermometer, Shield, BarChart3 } from "lucide-react";
import ProductCard from "@/components/ProductCard";

const Products = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const products = [
    {
      title: "Weather Tuff Sealoxy Primer",
      description: "An effective undercoat for cementitious surfaces (Interior, Terrace, Slab). It fills porosity in plaster, enhances paint coverage, and provides water resistance.",
      icon: "paint-bucket",
      image: "https://images.unsplash.com/photo-1599793105232-2ea29f5a943b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
      category: "Primers"
    },
    {
      title: "Weather Tuff Hydro Seal",
      description: "A premium waterproofing solution for protecting your property from water damage, providing long-lasting and reliable waterproofing for various surfaces.",
      icon: "droplet",
      image: "https://images.unsplash.com/photo-1604187351574-c75ca79f5807?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
      category: "Waterproofing"
    },
    {
      title: "Solar Heat Reflective Paints",
      description: "Reduce heat absorption and keep your building cool with our specialized heat reflective coatings, saving energy and increasing comfort.",
      icon: "thermometer",
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
      category: "Specialty Coatings"
    },
    {
      title: "Concrete Admixtures",
      description: "Improve the performance and durability of concrete with our advanced admixtures, designed to enhance workability, strength, and waterproofing properties.",
      icon: "shield",
      image: "https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
      category: "Additives"
    },
    {
      title: "Weather Tuff Elastomeric Coating",
      description: "A high-performance, flexible coating that bridges hairline cracks and provides excellent waterproofing protection for exterior walls and roofs.",
      icon: "droplet",
      image: "https://images.unsplash.com/photo-1621619856624-92069f505549?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
      category: "Waterproofing"
    },
    {
      title: "Moisture Barrier Coatings",
      description: "Prevent moisture infiltration and protect surfaces with our specialized barrier coatings, ideal for basements, bathrooms, and other moisture-prone areas.",
      icon: "shield",
      image: "https://images.unsplash.com/photo-1562184760-a11b3cf7c73f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
      category: "Waterproofing"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Products Hero Section */}
        <section className="bg-gradient-to-r from-tribuild-dark to-tribuild-maroon text-white py-12">
          <div className="container-custom">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Products</h1>
            <p className="text-lg max-w-3xl">
              Discover our premium range of waterproofing and construction chemicals, powered by Aidas & Roof Chemist
            </p>
          </div>
        </section>

        {/* Products Display Section */}
        <section className="py-12 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
              {products.map((product, index) => (
                <div key={index} className="transform transition duration-300 hover:-translate-y-2">
                  <ProductCard {...product} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Categories Section */}
        <section className="py-12 bg-white dark:bg-gray-900 transition-colors duration-300">
          <div className="container-custom">
            <h2 className="section-title mx-auto text-center mb-12 dark:text-white">Product Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-tribuild-gold/10 dark:bg-tribuild-gold/20 rounded-lg p-6 text-center transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
                <div className="mx-auto bg-tribuild-gold/20 dark:bg-tribuild-gold/30 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <PaintBucket className="h-8 w-8 text-tribuild-gold" />
                </div>
                <h3 className="text-xl font-bold mb-2 dark:text-white">Waterproofing Solutions</h3>
                <p className="text-gray-600 dark:text-gray-300">Comprehensive range of products for all your waterproofing needs</p>
              </div>
              
              <div className="bg-tribuild-gold/10 dark:bg-tribuild-gold/20 rounded-lg p-6 text-center transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
                <div className="mx-auto bg-tribuild-gold/20 dark:bg-tribuild-gold/30 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Shield className="h-8 w-8 text-tribuild-gold" />
                </div>
                <h3 className="text-xl font-bold mb-2 dark:text-white">Protective Coatings</h3>
                <p className="text-gray-600 dark:text-gray-300">Specialized coatings that protect structures from environmental damage</p>
              </div>
              
              <div className="bg-tribuild-gold/10 dark:bg-tribuild-gold/20 rounded-lg p-6 text-center transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
                <div className="mx-auto bg-tribuild-gold/20 dark:bg-tribuild-gold/30 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <BarChart3 className="h-8 w-8 text-tribuild-gold" />
                </div>
                <h3 className="text-xl font-bold mb-2 dark:text-white">Construction Chemicals</h3>
                <p className="text-gray-600 dark:text-gray-300">High-performance additives and solutions for construction projects</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
