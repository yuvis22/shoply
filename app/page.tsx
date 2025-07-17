"use client";

import { useEffect, useState } from "react";
import HeroSection from "@/components/hero/hero-section";
import ProductGrid from "@/components/products/product-grid";
import { Product } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { Truck, Shield, RotateCcw, Headphones } from "lucide-react";

// Mock data for demonstration
const mockProducts: Product[] = [
  {
    _id: "1",
    name: "Wireless Bluetooth Headphones",
    description: "Premium quality wireless headphones with noise cancellation",
    price: 199.99,
    images: [
      "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg",
    ],
    category: "electronics",
    stock: 15,
    rating: 4.8,
    reviews: 124,
    tags: ["wireless", "bluetooth", "audio"],
  },
  {
    _id: "2",
    name: "Smart Fitness Watch",
    description: "Track your fitness goals with this advanced smartwatch",
    price: 299.99,
    images: [
      "https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg",
    ],
    category: "electronics",
    stock: 8,
    rating: 4.6,
    reviews: 89,
    tags: ["fitness", "smartwatch", "health"],
  },
  {
    _id: "3",
    name: "Premium Coffee Maker",
    description:
      "Brew the perfect cup every time with this professional coffee maker",
    price: 149.99,
    images: [
      "https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg",
    ],
    category: "home",
    stock: 12,
    rating: 4.7,
    reviews: 156,
    tags: ["coffee", "kitchen", "appliance"],
  },
  {
    _id: "4",
    name: "Luxury Leather Bag",
    description: "Handcrafted leather bag perfect for work or travel",
    price: 89.99,
    images: [
      "https://images.pexels.com/photos/2422497/pexels-photo-2422497.jpeg",
    ],
    category: "fashion",
    stock: 6,
    rating: 4.9,
    reviews: 203,
    tags: ["leather", "bag", "fashion"],
  },
];

const features = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "Free shipping on orders over $50",
  },
  {
    icon: Shield,
    title: "Secure Payment",
    description: "100% secure payment processing",
  },
  {
    icon: RotateCcw,
    title: "Easy Returns",
    description: "30-day return policy",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock customer support",
  },
];

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setProducts(mockProducts);
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Removed duplicate Clerk auth buttons. Header handles auth UI. */}
      <HeroSection />

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="bg-emerald-100 text-emerald-800 mb-4">
              Featured
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Popular Products
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Discover our most popular items, carefully selected for quality
              and value
            </p>
          </div>

          <ProductGrid products={products} isLoading={isLoading} />
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and be the first to know about new
            products and exclusive deals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-slate-900 border-slate-300 focus:border-emerald-500 focus:ring-emerald-500"
            />
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
