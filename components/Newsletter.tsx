'use client';

import { Mail } from 'lucide-react';

export default function Newsletter() {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 transform translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md text-secondary mb-2">
            <Mail size={32} />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
            Stay Updated
          </h2>
          <p className="text-lg text-text-secondary max-w-xl leading-relaxed">
            Join our newsletter to receive exclusive offers, early access to new collections, and styling tips directly to your inbox.
          </p>
          
          <form className="w-full max-w-md mt-6 flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
            <div className="relative flex-1">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="w-full px-6 py-4 rounded-full border border-gray-200 bg-white text-primary focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all"
                required
              />
            </div>
            <button type="submit" className="btn-primary rounded-full px-8 py-4 shadow-md hover:shadow-lg whitespace-nowrap">
              Subscribe
            </button>
          </form>
          <p className="text-xs text-gray-400 mt-4">
            By subscribing, you agree to our Privacy Policy and Terms of Service.
          </p>
        </div>
      </div>
    </section>
  );
}
