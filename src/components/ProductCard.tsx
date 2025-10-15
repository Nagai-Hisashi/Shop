import { Link } from "react-router-dom";
import { Heart, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  image: string;
  location: string;
  condition: "new" | "used";
  featured?: boolean;
}

const ProductCard = ({ id, title, price, image, location, condition, featured }: ProductCardProps) => {
  return (
    <Link to={`/product/${id}`}>
      <div className="group bg-card rounded-lg overflow-hidden border hover-lift card-shadow hover:card-shadow-hover">
        <div className="relative aspect-square overflow-hidden bg-muted">
          <img 
            src={image} 
            alt={title}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 bg-card/80 backdrop-blur-sm hover:bg-card"
            onClick={(e) => {
              e.preventDefault();
              // Handle favorite
            }}
          >
            <Heart className="h-4 w-4" />
          </Button>
          {featured && (
            <Badge className="absolute top-2 left-2 bg-primary">
              Featured
            </Badge>
          )}
        </div>
        
        <div className="p-4">
          <h3 className="font-semibold text-foreground line-clamp-1 group-hover:text-primary transition-colors">
            {title}
          </h3>
          
          <div className="flex items-center justify-between mt-2">
            <p className="text-2xl font-bold text-primary">
              ${price.toLocaleString()}
            </p>
            <Badge variant="outline" className="capitalize">
              {condition}
            </Badge>
          </div>
          
          <div className="flex items-center text-sm text-muted-foreground mt-3">
            <MapPin className="h-3.5 w-3.5 mr-1" />
            {location}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
