export const mockProducts = [
  {
    id: "1",
    title: "iPhone 14 Pro Max - Like New",
    price: 899,
    image: "https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?w=500&h=500&fit=crop",
    location: "San Francisco, CA",
    condition: "used" as const,
    featured: true,
    description: "Barely used iPhone 14 Pro Max in excellent condition. Includes original box and all accessories.",
    category: "Electronics",
    seller: {
      name: "John Doe",
      rating: 4.8,
      reviews: 24
    }
  },
  {
    id: "2",
    title: "Vintage Leather Jacket",
    price: 150,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=500&fit=crop",
    location: "New York, NY",
    condition: "used" as const,
    description: "Authentic vintage leather jacket from the 80s. Size M.",
    category: "Fashion",
    seller: {
      name: "Jane Smith",
      rating: 4.9,
      reviews: 18
    }
  },
  {
    id: "3",
    title: "MacBook Pro 16\" M2",
    price: 2199,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&h=500&fit=crop",
    location: "Austin, TX",
    condition: "new" as const,
    featured: true,
    description: "Brand new sealed MacBook Pro with M2 chip. 16GB RAM, 512GB SSD.",
    category: "Electronics",
    seller: {
      name: "Tech Store",
      rating: 5.0,
      reviews: 156
    }
  },
  {
    id: "4",
    title: "Modern Office Chair",
    price: 180,
    image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=500&h=500&fit=crop",
    location: "Seattle, WA",
    condition: "used" as const,
    description: "Ergonomic office chair with lumbar support. Great condition.",
    category: "Furniture",
    seller: {
      name: "Home Goods",
      rating: 4.7,
      reviews: 43
    }
  },
  {
    id: "5",
    title: "Gaming PC Setup",
    price: 1500,
    image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=500&h=500&fit=crop",
    location: "Los Angeles, CA",
    condition: "used" as const,
    description: "Complete gaming setup with RTX 3080, 32GB RAM, includes monitor and peripherals.",
    category: "Electronics",
    seller: {
      name: "Gamer Pro",
      rating: 4.6,
      reviews: 31
    }
  },
  {
    id: "6",
    title: "Designer Sunglasses",
    price: 120,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&h=500&fit=crop",
    location: "Miami, FL",
    condition: "new" as const,
    featured: true,
    description: "Authentic Ray-Ban sunglasses, never worn. Comes with case and certificate.",
    category: "Fashion",
    seller: {
      name: "Fashion Hub",
      rating: 4.9,
      reviews: 87
    }
  },
  {
    id: "7",
    title: "Mountain Bike",
    price: 450,
    image: "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?w=500&h=500&fit=crop",
    location: "Denver, CO",
    condition: "used" as const,
    description: "Trek mountain bike, 21 speed, well maintained. Perfect for trails.",
    category: "Sports",
    seller: {
      name: "Outdoor Gear",
      rating: 4.8,
      reviews: 22
    }
  },
  {
    id: "8",
    title: "Vintage Camera",
    price: 280,
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&h=500&fit=crop",
    location: "Portland, OR",
    condition: "used" as const,
    description: "Canon AE-1 film camera in excellent working condition. Includes 50mm lens.",
    category: "Electronics",
    seller: {
      name: "Vintage Finds",
      rating: 5.0,
      reviews: 64
    }
  }
];

export const categories = [
  { name: "Electronics", count: 1234 },
  { name: "Fashion", count: 892 },
  { name: "Vehicles", count: 456 },
  { name: "Home & Garden", count: 678 },
  { name: "Sports", count: 345 },
  { name: "Furniture", count: 521 }
];
