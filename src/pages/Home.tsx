import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";
import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Smartphone, Shirt, Car, Home, Dumbbell, Sofa } from "lucide-react";
import { mockProducts } from "@/lib/mockData";
import heroImage from "@/assets/hero-marketplace.jpg";
import { useEffect, useState } from "react";

const categories = [
  { title: "Electronics", icon: Smartphone, itemCount: 1234, href: "/products?category=electronics" },
  { title: "Fashion", icon: Shirt, itemCount: 892, href: "/products?category=fashion" },
  { title: "Vehicles", icon: Car, itemCount: 456, href: "/products?category=vehicles" },
  { title: "Home & Garden", icon: Home, itemCount: 678, href: "/products?category=home" },
  { title: "Sports", icon: Dumbbell, itemCount: 345, href: "/products?category=sports" },
  { title: "Furniture", icon: Sofa, itemCount: 521, href: "/products?category=furniture" },
];

const Index = () => {
  const featuredProducts = mockProducts.filter(p => p.featured);
  const [categories, setCategories] = useState([]);
  console.log(categories);

  useEffect(() => {
    fetch("http://localhost:8081/api/category/find")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div 
            className="absolute inset-0 opacity-10 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
          <div className="hero-gradient absolute inset-0 opacity-5" />
          
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground">
                Buy & Sell Anything,{" "}
                <span className="text-primary">Locally</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Join thousands of people discovering great deals in your area.
                Safe, simple, and trusted marketplace.
              </p>
              <div className="pt-4">
                <SearchBar />
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-3">Browse by Category</h2>
              <p className="text-muted-foreground">Find exactly what you're looking for</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {categories.map((category) => (
                <CategoryCard key={category.title} {...category} />
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16">
          <div className="container">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold mb-2">Featured Listings</h2>
                <p className="text-muted-foreground">Handpicked items from trusted sellers</p>
              </div>
              <Button variant="outline">View All</Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </section>

        {/* Popular Products */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold mb-2">Popular Right Now</h2>
                <p className="text-muted-foreground">See what others are buying</p>
              </div>
              <Button variant="outline">See More</Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {mockProducts.slice(0, 4).map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 hero-gradient">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center text-primary-foreground space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Ready to Start Selling?
              </h2>
              <p className="text-lg opacity-90">
                List your items in minutes and reach thousands of local buyers.
                It's free and easy!
              </p>
              <Button size="lg" variant="secondary" className="mt-4">
                Post Your First Item
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};


export default Index;
