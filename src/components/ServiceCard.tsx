
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  benefits: string[];
  link: string;
}

const ServiceCard = ({ title, description, icon: Icon, benefits, link }: ServiceCardProps) => {
  return (
    <Card className="transition-all duration-300 hover:shadow-lg h-full flex flex-col">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-3">
          <Icon className="h-10 w-10 text-tribuild-gold" />
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="mb-4 text-gray-600">{description}</p>
        <h4 className="font-semibold mb-2 text-sm uppercase tracking-wider text-tribuild-maroon">Benefits</h4>
        <ul className="list-disc list-inside space-y-1 text-gray-600">
          {benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full bg-tribuild-gold hover:bg-opacity-80 text-tribuild-dark">
          <Link to={link}>Learn More</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
