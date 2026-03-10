import Link from 'next/link';
import Image from 'next/image';

export default function PromoBanner() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="bg-primary rounded-3xl overflow-hidden relative shadow-2xl">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M0 40L40 0H20L0 20M40 40V20L20 40" stroke="currentColor" strokeWidth="2" fill="none" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid-pattern)" />
            </svg>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            <div className="p-12 md:p-16 lg:p-20 z-10 flex flex-col items-start gap-6">
              <span className="bg-accent text-white px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase shadow-lg shadow-accent/30">
                Limited Time Offer
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Summer Mega Sale <br />
                <span className="text-secondary">40% OFF</span>
              </h2>
              <p className="text-gray-300 text-lg max-w-md leading-relaxed">
                Upgrade your lifestyle with our premium collection. Don&apos;t miss out on the biggest sale of the year.
              </p>
              
              {/* Countdown Timer */}
              <div className="flex gap-4 my-4">
                {[
                  { label: 'Days', value: '03' },
                  { label: 'Hours', value: '14' },
                  { label: 'Mins', value: '45' },
                  { label: 'Secs', value: '22' }
                ].map((item) => (
                  <div key={item.label} className="flex flex-col items-center bg-white/10 backdrop-blur-sm rounded-lg p-3 min-w-[70px]">
                    <span className="text-2xl font-bold text-white font-mono">{item.value}</span>
                    <span className="text-xs text-gray-400 uppercase tracking-wider">{item.label}</span>
                  </div>
                ))}
              </div>
              
              <Link href="/deals" className="btn-primary bg-white text-primary hover:bg-gray-100 hover:text-secondary text-lg px-8 py-4 mt-2">
                Shop Deals Now
              </Link>
            </div>
            
            <div className="relative h-[400px] lg:h-full w-full hidden md:block">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent z-10"></div>
              <Image 
                src="https://picsum.photos/seed/promo/1000/800" 
                alt="Summer Sale" 
                fill 
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
