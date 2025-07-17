"use client";

import { useState, useEffect } from "react";
import ProductCard from "./product-card";
import Loading from "@/components/ui/loading";
import { Product } from "@/lib/types";

interface ProductGridProps {
  products?: Product[];
  isLoading?: boolean;
  category?: string;
}

export default function ProductGrid({ products, isLoading, category }: ProductGridProps) {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (products) {
      setFilteredProducts(
        category ? products.filter(p => p.category === category) : products
      );
    }
  }, [products, category]);

  const handleAddToCart = (product: Product) => {
    // This would integrate with your cart state management
    console.log("Added to cart:", product);
  };

  const handleToggleWishlist = (product: Product) => {
    // This would integrate with your wishlist state management
    console.log("Toggled wishlist:", product);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loading size="lg" />
      </div>
    );
  }

  if (!filteredProducts.length) {
    return (
      <div className="text-center py-12">
        <p className="text-slate-600">No products found.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {filteredProducts.map((product) => (
        <ProductCard
          key={product._id}
          product={product}
          onAddToCart={handleAddToCart}
          onToggleWishlist={handleToggleWishlist}
        />
      ))}
    </div>
  );
}