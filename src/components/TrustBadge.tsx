
import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

interface TrustBadgeProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

const TrustBadge = ({ title, description, icon: Icon }: TrustBadgeProps) => {
  return (
    <Card className="bg-white border-none card-shadow h-full">
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div className="bg-tribuild-maroon/10 rounded-full p-4 mb-4">
          <Icon className="h-8 w-8 text-tribuild-maroon" />
        </div>
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

export default TrustBadge;
