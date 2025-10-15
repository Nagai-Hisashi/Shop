import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, MapPin, Calendar } from "lucide-react";
import { mockProducts } from "@/lib/mockData";

const Profile = () => {
  const userProducts = mockProducts.slice(0, 3);
  
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="bg-muted/30 border-b">
          <div className="container py-12">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <Avatar className="h-24 w-24">
                <AvatarFallback className="text-2xl">JD</AvatarFallback>
              </Avatar>
              
              <div className="flex-1">
                <h1 className="text-3xl font-bold mb-2">John Doe</h1>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <span className="font-medium text-foreground">4.8</span>
                    <span>(24 reviews)</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    San Francisco, CA
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    Joined January 2024
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  Tech enthusiast selling quality electronics and gadgets. Fast shipping and great customer service!
                </p>
                <Button variant="outline">Edit Profile</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="container py-8">
          <Tabs defaultValue="listings" className="w-full">
            <TabsList>
              <TabsTrigger value="listings">Active Listings</TabsTrigger>
              <TabsTrigger value="sold">Sold Items</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>

            <TabsContent value="listings" className="mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {userProducts.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="sold" className="mt-6">
              <div className="text-center py-12 text-muted-foreground">
                <p>No sold items yet</p>
              </div>
            </TabsContent>

            <TabsContent value="reviews" className="mt-6">
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-card border rounded-lg p-6">
                    <div className="flex items-start gap-4">
                      <Avatar>
                        <AvatarFallback>U{i}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <p className="font-medium">User {i}</p>
                          <div className="flex">
                            {[...Array(5)].map((_, j) => (
                              <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                            ))}
                          </div>
                        </div>
                        <p className="text-muted-foreground">
                          Great seller! Item was exactly as described and shipping was fast.
                        </p>
                        <p className="text-xs text-muted-foreground mt-2">2 weeks ago</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Profile;
