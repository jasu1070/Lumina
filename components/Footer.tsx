'use client';

import Link from 'next/link';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Brand */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="text-3xl font-heading font-bold tracking-tight text-white">
              Lumina<span className="text-secondary">.</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Premium products for modern living. We believe in quality, sustainability, and exceptional design that elevates your everyday life.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors text-white">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors text-white">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors text-white">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors text-white">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Shop Links */}
          <div className="flex flex-col gap-6">
            <h4 className="text-lg font-heading font-semibold">Shop</h4>
            <ul className="flex flex-col gap-4">
              <li><Link href="/shop" className="text-gray-400 hover:text-white transition-colors text-sm">All Products</Link></li>
              <li><Link href="/categories/electronics" className="text-gray-400 hover:text-white transition-colors text-sm">Electronics</Link></li>
              <li><Link href="/categories/fashion" className="text-gray-400 hover:text-white transition-colors text-sm">Fashion</Link></li>
              <li><Link href="/categories/home" className="text-gray-400 hover:text-white transition-colors text-sm">Home & Living</Link></li>
              <li><Link href="/deals" className="text-gray-400 hover:text-white transition-colors text-sm">Special Offers</Link></li>
            </ul>
          </div>

          {/* Column 3: Customer Support */}
          <div className="flex flex-col gap-6">
            <h4 className="text-lg font-heading font-semibold">Support</h4>
            <ul className="flex flex-col gap-4">
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact Us</Link></li>
              <li><Link href="/faq" className="text-gray-400 hover:text-white transition-colors text-sm">FAQs</Link></li>
              <li><Link href="/shipping" className="text-gray-400 hover:text-white transition-colors text-sm">Shipping & Returns</Link></li>
              <li><Link href="/track-order" className="text-gray-400 hover:text-white transition-colors text-sm">Track Order</Link></li>
              <li><Link href="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="flex flex-col gap-6">
            <h4 className="text-lg font-heading font-semibold">Stay Updated</h4>
            <p className="text-gray-400 text-sm">
              Subscribe to our newsletter to get the latest updates on new products and upcoming sales.
            </p>
            <form className="flex flex-col gap-3 mt-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white/5 border border-white/10 rounded-md px-4 py-3 text-sm text-white focus:outline-none focus:border-secondary transition-colors"
                required
              />
              <button type="submit" className="bg-secondary hover:bg-blue-700 text-white font-medium py-3 rounded-md transition-colors text-sm">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Lumina Store. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-gray-500 text-xs uppercase tracking-wider font-medium">Secure Payments</span>
            <div className="flex gap-2">
              <div className="w-10 h-6 bg-white/10 rounded"></div>
              <div className="w-10 h-6 bg-white/10 rounded"></div>
              <div className="w-10 h-6 bg-white/10 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
