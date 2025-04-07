
import { Umbrella } from "lucide-react";

interface LogoProps {
  className?: string;
  showTagline?: boolean;
}

const Logo = ({ className = "", showTagline = false }: LogoProps) => {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="flex items-center">
        <img 
          src="/lovable-uploads/a1f13b84-a0ee-40fc-b82f-bd795ed09c5f.png" 
          alt="TriBuild Water Proofing Company" 
          className="h-12 md:h-16"
        />
      </div>
      {showTagline && (
        <p className="text-sm text-gray-600 mt-1 italic">Rain or Shine, We've Got You Covered</p>
      )}
    </div>
  );
};

export default Logo;
