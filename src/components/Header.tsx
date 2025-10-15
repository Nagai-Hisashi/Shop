import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, Plus, User, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-lg">
            N
          </div>
          <span className="hidden sm:inline-block font-bold text-xl">Nagai</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/home" className="text-sm font-medium hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/products" className="text-sm font-medium hover:text-primary transition-colors">
            Browse
          </Link>
          <Link to="/post-item" className="text-sm font-medium hover:text-primary transition-colors">
            Sell
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
          
          <Link to="/post-item" className="hidden md:inline-flex">
            <Button variant="success" size="sm">
              <Plus className="mr-2 h-4 w-4" />
              Post Item
            </Button>
          </Link>
          
          <Link to="/auth">
            <Button variant="outline" size="sm">
              <User className="mr-2 h-4 w-4" />
              Sign In
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
