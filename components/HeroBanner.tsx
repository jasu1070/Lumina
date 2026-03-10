import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function HeroBanner() {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 to-blue-50/50 overflow-hidden min-h-[80vh] flex items-center">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-blue-100/40 to-transparent rounded-bl-full -z-10 transform translate-x-1/4 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-amber-100/30 to-transparent rounded-tr-full -z-10 transform -translate-x-1/4 translate-y-1/4"></div>

      <div className="container mx-auto px-4 md:px-8 py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-6 max-w-2xl z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/50 text-secondary text-sm font-medium w-fit mb-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
              </span>
              New Collection 2026
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary leading-[1.1] tracking-tight">
              Premium Products For <span className="text-secondary relative">
                Modern Living
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-accent/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" />
                </svg>
              </span>
            </h1>
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-xl">
              Discover high quality products designed for modern lifestyles. Elevate your everyday experience with our curated collection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Link href="/shop" className="btn-primary text-lg px-8 py-4 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50">
                Shop Now <ArrowRight size={20} />
              </Link>
              <Link href="/categories" className="btn-secondary text-lg px-8 py-4 bg-white/50 backdrop-blur-sm">
                Explore Collection
              </Link>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex items-center gap-6 mt-8 pt-8 border-t border-gray-200/60">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden relative">
                    <Image src={`https://picsum.photos/seed/user${i}/100/100`} alt="User" fill className="object-cover" referrerPolicy="no-referrer" />
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1 text-accent">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm font-medium text-text-secondary">Over 10,000+ happy customers</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-[500px] lg:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl transform lg:translate-y-8 group">
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
            <Image 
              src="https://picsum.photos/seed/hero-product/800/1000" 
              alt="Premium Product" 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
              referrerPolicy="no-referrer"
            />
            
            {/* Floating Product Card */}
            <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md rounded-xl p-4 z-20 shadow-xl flex items-center justify-between transform translate-y-0 opacity-100 transition-all duration-500">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-lg overflow-hidden relative bg-gray-100">
                  <Image src="https://picsum.photos/seed/watch/200/200" alt="Smart Watch" fill className="object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary">Lumina Smart Watch</h3>
                  <p className="text-sm text-text-secondary">Series 7</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-lg text-primary">$299.00</p>
                <Link href="/product/1" className="text-sm text-secondary font-medium hover:underline">View Details</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
