import { Truck, ShieldCheck, Clock, RefreshCcw } from 'lucide-react';

const features = [
  {
    icon: <Truck size={32} className="text-secondary" />,
    title: 'Free Shipping',
    description: 'On all orders over $100',
  },
  {
    icon: <ShieldCheck size={32} className="text-secondary" />,
    title: 'Secure Payments',
    description: '100% secure payment processing',
  },
  {
    icon: <Clock size={32} className="text-secondary" />,
    title: '24/7 Support',
    description: 'Dedicated support anytime',
  },
  {
    icon: <RefreshCcw size={32} className="text-secondary" />,
    title: 'Easy Returns',
    description: '30-day return policy',
  },
];

export default function TrustBanner() {
  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-4 p-6 rounded-2xl hover:bg-gray-50 transition-colors group">
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-semibold text-primary">{feature.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
