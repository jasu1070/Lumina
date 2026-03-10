'use client';

import { useStore } from '@/store/useStore';
import Image from 'next/image';
import Link from 'next/link';
import { Minus, Plus, X, ArrowRight, ShoppingBag, ShieldCheck } from 'lucide-react';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useStore();

  return (
    <div className="container mx-auto px-4 md:px-8 py-12 md:py-20 min-h-[70vh]">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-8 md:mb-12">Shopping Cart</h1>
      
      {cart.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 bg-gray-50 rounded-3xl border border-gray-100">
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
            <ShoppingBag size={48} className="text-gray-300" />
          </div>
          <h2 className="text-2xl font-bold text-primary mb-2">Your cart is empty</h2>
          <p className="text-text-secondary mb-8 max-w-md text-center">
            Looks like you haven&apos;t added anything to your cart yet. Discover our premium collection and find something you&apos;ll love.
          </p>
          <Link href="/shop" className="btn-primary px-8 py-4 text-lg shadow-lg shadow-blue-500/20">
            Start Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="hidden md:grid grid-cols-12 gap-4 pb-4 border-b border-gray-200 text-sm font-semibold text-text-secondary uppercase tracking-wider">
              <div className="col-span-6">Product</div>
              <div className="col-span-3 text-center">Quantity</div>
              <div className="col-span-2 text-right">Total</div>
              <div className="col-span-1"></div>
            </div>
            
            {cart.map((item) => (
              <div key={item.id} className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center py-6 border-b border-gray-100 group">
                {/* Mobile Layout */}
                <div className="md:hidden flex gap-4 w-full relative">
                  <div className="w-24 h-24 bg-gray-50 rounded-xl overflow-hidden relative flex-shrink-0 border border-gray-100">
                    <Image src={item.image} alt={item.name} fill className="object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div className="flex flex-col flex-1 py-1">
                    <p className="text-xs font-semibold text-text-secondary uppercase tracking-wider mb-1">{item.category}</p>
                    <Link href={`/product/${item.id}`} className="font-medium text-primary hover:text-secondary transition-colors mb-2 line-clamp-2">
                      {item.name}
                    </Link>
                    <span className="font-bold text-primary">${item.price.toFixed(2)}</span>
                    
                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex items-center border border-gray-200 rounded-lg bg-gray-50">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-2 text-text-secondary hover:text-primary transition-colors"
                          disabled={item.quantity <= 1}
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-2 text-text-secondary hover:text-primary transition-colors"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="absolute top-0 right-0 p-2 text-gray-400 hover:text-red-500 transition-colors bg-white rounded-full shadow-sm"
                  >
                    <X size={16} />
                  </button>
                </div>

                {/* Desktop Layout */}
                <div className="hidden md:flex col-span-6 items-center gap-6">
                  <div className="w-24 h-24 bg-gray-50 rounded-xl overflow-hidden relative flex-shrink-0 border border-gray-100">
                    <Image src={item.image} alt={item.name} fill className="object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-xs font-semibold text-text-secondary uppercase tracking-wider mb-1">{item.category}</p>
                    <Link href={`/product/${item.id}`} className="font-medium text-primary hover:text-secondary transition-colors text-lg line-clamp-2">
                      {item.name}
                    </Link>
                    <span className="text-text-secondary mt-1">${item.price.toFixed(2)}</span>
                  </div>
                </div>
                
                <div className="hidden md:flex col-span-3 justify-center">
                  <div className="flex items-center border border-gray-200 rounded-lg bg-gray-50">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-3 text-text-secondary hover:text-primary transition-colors"
                      disabled={item.quantity <= 1}
                    >
                      <Minus size={16} />
                    </button>
                    <span className="w-12 text-center font-medium text-lg">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-3 text-text-secondary hover:text-primary transition-colors"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>
                
                <div className="hidden md:flex col-span-2 justify-end">
                  <span className="text-xl font-bold text-primary">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
                
                <div className="hidden md:flex col-span-1 justify-end">
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors opacity-0 group-hover:opacity-100"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 sticky top-32">
              <h2 className="text-2xl font-bold text-primary mb-6">Order Summary</h2>
              
              <div className="flex flex-col gap-4 mb-8">
                <div className="flex justify-between text-text-secondary">
                  <span>Subtotal</span>
                  <span className="font-medium text-primary">${cartTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-text-secondary">
                  <span>Shipping Estimate</span>
                  <span className="font-medium text-primary">{cartTotal() > 100 ? 'Free' : '$10.00'}</span>
                </div>
                <div className="flex justify-between text-text-secondary">
                  <span>Tax Estimate</span>
                  <span className="font-medium text-primary">${(cartTotal() * 0.08).toFixed(2)}</span>
                </div>
                
                <div className="h-px w-full bg-gray-200 my-2"></div>
                
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-primary">Total</span>
                  <span className="text-3xl font-bold text-primary">
                    ${(cartTotal() + (cartTotal() > 100 ? 0 : 10) + (cartTotal() * 0.08)).toFixed(2)}
                  </span>
                </div>
              </div>
              
              <Link href="/checkout" className="btn-primary w-full py-4 text-lg shadow-lg shadow-blue-500/20 mb-4 text-center block">
                Proceed to Checkout <ArrowRight size={20} className="inline ml-2" />
              </Link>
              
              <div className="flex items-center justify-center gap-2 text-sm text-text-secondary mt-6">
                <ShieldCheck size={16} className="text-green-500" />
                <span>Secure Checkout</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
