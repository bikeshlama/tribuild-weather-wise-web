
import { Umbrella } from "lucide-react";

interface LogoProps {
  className?: string;
}

const Logo = ({ className = "" }: LogoProps) => {
  return (
    <div className={`flex items-center ${className}`}>
      <Umbrella className="text-tribuild-gold h-8 w-8 mr-2" />
      <span className="font-heading font-extrabold text-2xl tracking-tight">
        <span className="text-tribuild-maroon">TRI</span>
        <span className="text-tribuild-dark">BUILD</span>
      </span>
    </div>
  );
};

export default Logo;
