
import { PaintBucket, Droplet, Thermometer, Shield, Layers } from "lucide-react";

interface ProductCardProps {
  title: string;
  description: string;
  icon: string;
  image?: string;
  category?: string;
}

const ProductCard = ({ title, description, icon, image, category }: ProductCardProps) => {
  // Function to render the appropriate icon based on the icon name
  const renderIcon = () => {
    switch (icon) {
      case "paint-bucket":
        return <PaintBucket className="h-8 w-8 text-tribuild-gold" />;
      case "droplet":
        return <Droplet className="h-8 w-8 text-tribuild-gold" />;
      case "thermometer":
        return <Thermometer className="h-8 w-8 text-tribuild-gold" />;
      case "shield":
        return <Shield className="h-8 w-8 text-tribuild-gold" />;
      default:
        return <Layers className="h-8 w-8 text-tribuild-gold" />;
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md h-full transition-colors duration-300 overflow-hidden">
      {image && (
        <div className="relative h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
          {category && (
            <div className="absolute top-4 right-4 bg-tribuild-gold text-white text-xs font-bold px-2 py-1 rounded">
              {category}
            </div>
          )}
        </div>
      )}
      <div className="p-6">
        <div className="bg-tribuild-gold/10 dark:bg-tribuild-gold/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 transition-colors duration-300">
          {renderIcon()}
        </div>
        <h3 className="text-xl font-bold mb-2 dark:text-white transition-colors duration-300">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
