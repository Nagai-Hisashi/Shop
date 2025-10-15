import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const SearchBar = () => {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input 
            placeholder="Search for anything..." 
            className="pl-10 h-12 bg-card border-border"
          />
        </div>
        <Button size="lg" variant="hero" className="px-8">
          Search
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
