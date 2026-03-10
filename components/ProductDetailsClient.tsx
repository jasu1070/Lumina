'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Product, useStore } from '@/store/useStore';
import { Star, Truck, ShieldCheck, RefreshCcw, Minus, Plus, ShoppingBag, Heart, Share2 } from 'lucide-react';

export default function ProductDetailsClient({ product, products }: { product: Product, products: Product[] }) {
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const { addToCart, toggleCart } = useStore();

  const handleAddToCart = () => {
    // Add multiple items based on quantity
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    toggleCart();
  };

  const images = [
    product.image,
    `https://picsum.photos/seed/${product.id}alt1/600/800`,
    `https://picsum.photos/seed/${product.id}alt2/600/800`,
    `https://picsum.photos/seed/${product.id}alt3/600/800`,
  ];

  return (
    <div className="container mx-auto px-4 md:px-8 py-12 md:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Product Images */}
        <div className="flex flex-col-reverse md:flex-row gap-4 lg:sticky lg:top-32 self-start">
          {/* Thumbnails */}
          <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-visible pb-4 md:pb-0 hide-scrollbar">
            {images.map((img, idx) => (
              <button 
                key={idx}
                onClick={() => setActiveImage(idx)}
                className={`relative w-20 h-24 md:w-24 md:h-32 rounded-xl overflow-hidden flex-shrink-0 border-2 transition-all ${activeImage === idx ? 'border-secondary' : 'border-transparent opacity-70 hover:opacity-100'}`}
              >
                <Image src={img} alt={`${product.name} view ${idx + 1}`} fill className="object-cover" referrerPolicy="no-referrer" />
              </button>
            ))}
          </div>
          
          {/* Main Image */}
          <div className="relative aspect-[4/5] md:aspect-[3/4] w-full bg-gray-50 rounded-2xl overflow-hidden flex-1 border border-gray-100">
            <Image 
              src={images[activeImage]} 
              alt={product.name} 
              fill 
              className="object-cover transition-transform duration-500 hover:scale-105"
              priority
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-sm font-semibold text-secondary uppercase tracking-wider">{product.category}</span>
            <span className="text-gray-300">•</span>
            <div className="flex items-center gap-1 text-accent">
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current opacity-50" />
              <span className="text-sm text-text-secondary ml-1">(128 reviews)</span>
            </div>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
            {product.name}
          </h1>
          
          <div className="flex items-end gap-4 mb-8">
            <span className="text-4xl font-bold text-primary">${product.price.toFixed(2)}</span>
            {product.price < 100 && (
              <span className="text-xl text-text-secondary line-through mb-1">${(product.price * 1.2).toFixed(2)}</span>
            )}
            {product.price < 100 && (
              <span className="bg-accent/10 text-accent text-sm font-bold px-3 py-1 rounded-full mb-1">Save 20%</span>
            )}
          </div>
          
          <p className="text-lg text-text-secondary leading-relaxed mb-8">
            Experience unparalleled quality with our {product.name.toLowerCase()}. Designed with premium materials and modern aesthetics, it&apos;s the perfect addition to your daily routine. Enjoy seamless functionality and timeless style.
          </p>
          
          <div className="h-px bg-gray-200 w-full mb-8"></div>
          
          {/* Actions */}
          <div className="flex flex-col gap-6 mb-12">
            <div className="flex items-center gap-4">
              <span className="font-medium text-primary w-20">Quantity</span>
              <div className="flex items-center border border-gray-200 rounded-lg bg-gray-50">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 text-text-secondary hover:text-primary transition-colors"
                  disabled={quantity <= 1}
                >
                  <Minus size={18} />
                </button>
                <span className="w-12 text-center font-medium text-lg">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 text-text-secondary hover:text-primary transition-colors"
                >
                  <Plus size={18} />
                </button>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={handleAddToCart}
                className="btn-primary flex-1 py-4 text-lg shadow-lg shadow-blue-500/20"
              >
                <ShoppingBag size={20} /> Add to Cart
              </button>
              <button className="w-14 h-14 rounded-lg border-2 border-gray-200 flex items-center justify-center text-text-secondary hover:border-primary hover:text-primary transition-colors flex-shrink-0">
                <Heart size={24} />
              </button>
              <button className="w-14 h-14 rounded-lg border-2 border-gray-200 flex items-center justify-center text-text-secondary hover:border-primary hover:text-primary transition-colors flex-shrink-0">
                <Share2 size={24} />
              </button>
            </div>
          </div>
          
          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-gray-50 p-6 rounded-2xl">
            <div className="flex items-start gap-3">
              <Truck className="text-secondary flex-shrink-0 mt-1" size={20} />
              <div>
                <h4 className="font-semibold text-primary text-sm">Free Shipping</h4>
                <p className="text-xs text-text-secondary mt-1">On orders over $100</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <RefreshCcw className="text-secondary flex-shrink-0 mt-1" size={20} />
              <div>
                <h4 className="font-semibold text-primary text-sm">30-Day Returns</h4>
                <p className="text-xs text-text-secondary mt-1">Hassle-free return policy</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <ShieldCheck className="text-secondary flex-shrink-0 mt-1" size={20} />
              <div>
                <h4 className="font-semibold text-primary text-sm">2-Year Warranty</h4>
                <p className="text-xs text-text-secondary mt-1">Guaranteed quality</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
