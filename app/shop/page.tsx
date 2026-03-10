import ProductGrid from '@/components/ProductGrid';

export default function Shop() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 pt-12">
      <div className="container mx-auto px-4 md:px-8 mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">All Products</h1>
        <p className="text-lg text-text-secondary max-w-2xl">
          Browse our complete collection of premium products. Find exactly what you&apos;re looking for to elevate your daily life.
        </p>
      </div>
      <ProductGrid />
    </div>
  );
}
