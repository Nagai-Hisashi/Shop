import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Upload } from "lucide-react";
import { toast } from "sonner";

const PostItem = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Your item has been listed successfully!");
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1 bg-muted/30">
        <div className="container py-12">
          <div className="max-w-2xl mx-auto">
            <div className="bg-card rounded-lg border p-8">
              <h1 className="text-3xl font-bold mb-2">Post an Item</h1>
              <p className="text-muted-foreground mb-8">
                Fill in the details below to list your item
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Photos */}
                <div>
                  <Label>Photos</Label>
                  <div className="mt-2 border-2 border-dashed rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
                    <Upload className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                    <p className="text-sm text-muted-foreground">
                      Click to upload or drag and drop
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      PNG, JPG up to 10MB
                    </p>
                  </div>
                </div>

                {/* Title */}
                <div>
                  <Label htmlFor="title">Title *</Label>
                  <Input 
                    id="title"
                    placeholder="e.g., iPhone 14 Pro Max - Like New"
                    required
                    className="mt-2"
                  />
                </div>

                {/* Category */}
                <div>
                  <Label htmlFor="category">Category *</Label>
                  <Select required>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="electronics">Electronics</SelectItem>
                      <SelectItem value="fashion">Fashion</SelectItem>
                      <SelectItem value="vehicles">Vehicles</SelectItem>
                      <SelectItem value="home">Home & Garden</SelectItem>
                      <SelectItem value="sports">Sports</SelectItem>
                      <SelectItem value="furniture">Furniture</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Price */}
                <div>
                  <Label htmlFor="price">Price *</Label>
                  <div className="relative mt-2">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                      $
                    </span>
                    <Input 
                      id="price"
                      type="number"
                      placeholder="0.00"
                      required
                      className="pl-7"
                    />
                  </div>
                </div>

                {/* Condition */}
                <div>
                  <Label>Condition *</Label>
                  <RadioGroup defaultValue="new" className="mt-2">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="new" id="new" />
                      <Label htmlFor="new" className="font-normal cursor-pointer">New</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="used" id="used" />
                      <Label htmlFor="used" className="font-normal cursor-pointer">Used</Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Description */}
                <div>
                  <Label htmlFor="description">Description *</Label>
                  <Textarea 
                    id="description"
                    placeholder="Describe your item in detail..."
                    required
                    className="mt-2 min-h-[120px]"
                  />
                </div>

                {/* Location */}
                <div>
                  <Label htmlFor="location">Location *</Label>
                  <Input 
                    id="location"
                    placeholder="City, State"
                    required
                    className="mt-2"
                  />
                </div>

                <div className="flex gap-4 pt-4">
                  <Button type="submit" size="lg" className="flex-1" variant="hero">
                    Publish Listing
                  </Button>
                  <Button type="button" size="lg" variant="outline">
                    Save Draft
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PostItem;
