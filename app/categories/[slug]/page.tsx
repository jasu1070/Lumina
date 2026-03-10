import ProductGrid from '@/components/ProductGrid';

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const categoryName = slug.charAt(0).toUpperCase() + slug.slice(1).replace('-', ' ');

  return (
    <div className="flex flex-col min-h-screen pt-20">
      <div className="container mx-auto px-4 md:px-8 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 capitalize">{categoryName}</h1>
        <p className="text-lg text-text-secondary max-w-2xl mb-12">
          Explore our curated collection of {categoryName.toLowerCase()} products. Find exactly what you&apos;re looking for.
        </p>
      </div>
      <ProductGrid />
    </div>
  );
}
