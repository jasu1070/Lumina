import CategorySection from '@/components/CategorySection';

export default function CategoriesPage() {
  return (
    <div className="flex flex-col min-h-screen pt-20">
      <div className="container mx-auto px-4 md:px-8 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-center">All Categories</h1>
        <p className="text-lg text-text-secondary max-w-2xl mx-auto text-center mb-12">
          Browse our collections by category to find exactly what you&apos;re looking for.
        </p>
      </div>
      <CategorySection />
    </div>
  );
}
