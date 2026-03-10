'use client';

import { useState, useEffect, useRef } from 'react';
import { useStore } from '@/store/useStore';
import { Search, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';

const popularSearches = ['Wireless Headphones', 'Smart Watch', 'Minimalist Desk', 'Coffee Maker', 'Running Shoes'];

export default function SearchModal() {
  const { isSearchOpen, toggleSearch } = useStore();
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isSearchOpen]);

  return (
    <AnimatePresence>
      {isSearchOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleSearch}
            className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed top-[10%] left-1/2 -translate-x-1/2 w-full max-w-2xl bg-white rounded-2xl shadow-2xl z-50 overflow-hidden"
          >
            <div className="p-6">
              <div className="flex items-center gap-4 bg-gray-50 rounded-xl px-4 py-3 border border-gray-200 focus-within:border-secondary focus-within:ring-2 focus-within:ring-secondary/20 transition-all">
                <Search className="text-gray-400" size={24} />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Search for products, categories..."
                  className="flex-1 bg-transparent border-none outline-none text-lg text-primary placeholder:text-gray-400"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                {query && (
                  <button 
                    onClick={() => setQuery('')}
                    className="text-gray-400 hover:text-primary transition-colors p-1"
                  >
                    <X size={20} />
                  </button>
                )}
              </div>
            </div>

            <div className="px-6 pb-6">
              {!query ? (
                <div>
                  <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Popular Searches</h3>
                  <div className="flex flex-wrap gap-2">
                    {popularSearches.map((term) => (
                      <button
                        key={term}
                        onClick={() => setQuery(term)}
                        className="px-4 py-2 bg-gray-50 hover:bg-gray-100 text-primary text-sm rounded-full transition-colors border border-gray-100"
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-2">Search Results</h3>
                  {/* Mock Results */}
                  <div className="flex flex-col gap-2">
                    {[1, 2, 3].map((i) => (
                      <Link 
                        key={i} 
                        href={`/product/${i}`}
                        onClick={toggleSearch}
                        className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-xl transition-colors group"
                      >
                        <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden relative flex-shrink-0">
                          <Image 
                            src={`https://picsum.photos/seed/product${i}/100/100`} 
                            alt="Product" 
                            fill 
                            className="object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-primary group-hover:text-secondary transition-colors">Premium Product {i}</h4>
                          <p className="text-sm text-text-secondary">Category Name</p>
                        </div>
                        <div className="text-primary font-semibold">
                          $99.00
                        </div>
                      </Link>
                    ))}
                  </div>
                  <Link 
                    href={`/search?q=${query}`}
                    onClick={toggleSearch}
                    className="flex items-center justify-center gap-2 text-secondary font-medium mt-4 hover:underline"
                  >
                    View all results <ArrowRight size={16} />
                  </Link>
                </div>
              )}
            </div>
            
            <button 
              onClick={toggleSearch}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-primary hover:bg-gray-100 rounded-full transition-all"
            >
              <X size={24} />
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
