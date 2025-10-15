import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";

interface CategoryCardProps {
  categoryName: string;
  categoryIcon: LucideIcon;
  // itemCount: number;
  href: string;
}

const CategoryCard = ({ categoryName, categoryIcon: Icon, href }: CategoryCardProps) => {
  return (
    <Link to={href}>
      <div className="group bg-card rounded-lg border p-6 hover-lift card-shadow hover:card-shadow-hover cursor-pointer">
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
            <Icon className="h-6 w-6" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">{categoryName}</h3>
            {/* <p className="text-sm text-muted-foreground mt-1">{itemCount} items</p> */}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
