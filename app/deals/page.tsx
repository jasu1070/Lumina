import ProductGrid from '@/components/ProductGrid';
import PromoBanner from '@/components/PromoBanner';

export default function DealsPage() {
  return (
    <div className="flex flex-col min-h-screen pt-20">
      <PromoBanner />
      <div className="container mx-auto px-4 md:px-8 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Current Deals</h1>
        <p className="text-lg text-text-secondary max-w-2xl mb-12">
          Shop our latest discounts and special offers. These deals won&apos;t last long!
        </p>
      </div>
      <ProductGrid />
    </div>
  );
}
