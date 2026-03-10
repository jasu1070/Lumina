'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ShoppingBag, Heart, Eye } from 'lucide-react';
import { useStore, Product } from '@/store/useStore';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart, toggleCart } = useStore();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    toggleCart();
  };

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full relative">
      {/* Badges */}
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
        {product.price < 100 && (
          <span className="bg-accent text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
            SALE
          </span>
        )}
        {product.id === '1' && (
          <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
            NEW
          </span>
        )}
      </div>

      {/* Image Container */}
      <Link href={`/product/${product.id}`} className="relative aspect-[4/5] overflow-hidden bg-gray-50 block">
        <Image 
          src={product.image} 
          alt={product.name} 
          fill 
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          referrerPolicy="no-referrer"
        />
        
        {/* Hover Actions */}
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-primary hover:text-white hover:scale-110">
            <Heart size={20} />
          </button>
          <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75 hover:bg-primary hover:text-white hover:scale-110">
            <Eye size={20} />
          </button>
        </div>
      </Link>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-2">
          <p className="text-xs font-semibold text-text-secondary uppercase tracking-wider">
            {product.category}
          </p>
          <div className="flex items-center gap-1 text-accent">
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-xs font-medium text-primary">4.8</span>
          </div>
        </div>
        
        <Link href={`/product/${product.id}`} className="block mb-4">
          <h3 className="text-lg font-medium text-primary leading-tight group-hover:text-secondary transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>
        
        <div className="mt-auto flex items-center justify-between">
          <div className="flex flex-col">
            {product.price < 100 && (
              <span className="text-sm text-text-secondary line-through">${(product.price * 1.2).toFixed(2)}</span>
            )}
            <span className="text-xl font-bold text-primary">
              ${product.price.toFixed(2)}
            </span>
          </div>
          
          <button 
            onClick={handleAddToCart}
            className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-primary hover:bg-secondary hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-md active:scale-95"
            aria-label="Add to cart"
          >
            <ShoppingBag size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
