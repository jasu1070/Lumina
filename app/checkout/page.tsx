'use client';

import { useStore } from '@/store/useStore';
import Link from 'next/link';
import { ArrowLeft, CheckCircle } from 'lucide-react';

export default function CheckoutPage() {
  const { cart, cartTotal, clearCart } = useStore();

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 min-h-[70vh] flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-primary mb-4">Your cart is empty</h1>
        <p className="text-text-secondary mb-8">Add some items to your cart before checking out.</p>
        <Link href="/shop" className="btn-primary px-8 py-4">
          Return to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 md:px-8 py-12 md:py-20 min-h-[70vh]">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center">
        <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={40} />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">Checkout Simulation</h1>
        <p className="text-lg text-text-secondary mb-8">
          This is a demo application. In a real application, you would be redirected to a secure payment gateway like Stripe.
        </p>
        
        <div className="bg-gray-50 p-6 rounded-2xl mb-8 text-left">
          <h2 className="text-xl font-bold text-primary mb-4">Order Summary</h2>
          <div className="flex justify-between text-text-secondary mb-2">
            <span>Items ({cart.length})</span>
            <span>${cartTotal().toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-text-secondary mb-4">
            <span>Shipping</span>
            <span>{cartTotal() > 100 ? 'Free' : '$10.00'}</span>
          </div>
          <div className="h-px bg-gray-200 mb-4"></div>
          <div className="flex justify-between text-primary font-bold text-xl">
            <span>Total</span>
            <span>${(cartTotal() + (cartTotal() > 100 ? 0 : 10)).toFixed(2)}</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => {
              clearCart();
              alert('Order placed successfully! (Simulation)');
            }}
            className="btn-primary px-8 py-4 text-lg"
          >
            Complete Order
          </button>
          <Link href="/cart" className="px-8 py-4 text-lg font-medium text-text-secondary hover:text-primary transition-colors flex items-center justify-center gap-2 border border-gray-200 rounded-lg hover:bg-gray-50">
            <ArrowLeft size={20} /> Return to Cart
          </Link>
        </div>
      </div>
    </div>
  );
}
