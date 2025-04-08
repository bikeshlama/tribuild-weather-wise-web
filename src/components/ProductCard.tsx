
import { PaintBucket, Droplet, Thermometer } from "lucide-react";

interface ProductCardProps {
  title: string;
  description: string;
  icon: string;
}

const ProductCard = ({ title, description, icon }: ProductCardProps) => {
  // Function to render the appropriate icon based on the icon name
  const renderIcon = () => {
    switch (icon) {
      case "paint-bucket":
        return <PaintBucket className="h-8 w-8 text-tribuild-gold" />;
      case "droplet":
        return <Droplet className="h-8 w-8 text-tribuild-gold" />;
      case "thermometer":
        return <Thermometer className="h-8 w-8 text-tribuild-gold" />;
      default:
        return <Droplet className="h-8 w-8 text-tribuild-gold" />;
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md h-full">
      <div className="bg-tribuild-gold/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
        {renderIcon()}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">
        {description}
      </p>
    </div>
  );
};

export default ProductCard;
