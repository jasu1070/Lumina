import CategoryCard from './CategoryCard';

const categories = [
  { id: '1', title: 'Electronics', image: 'https://picsum.photos/seed/electronics/800/1000', link: '/categories/electronics' },
  { id: '2', title: 'Fashion', image: 'https://picsum.photos/seed/fashion/800/600', link: '/categories/fashion' },
  { id: '3', title: 'Home', image: 'https://picsum.photos/seed/home/800/600', link: '/categories/home' },
  { id: '4', title: 'Accessories', image: 'https://picsum.photos/seed/accessories/800/600', link: '/categories/accessories' },
  { id: '5', title: 'Lifestyle', image: 'https://picsum.photos/seed/lifestyle/800/600', link: '/categories/lifestyle' },
];

export default function CategorySection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-secondary font-semibold tracking-wider uppercase text-sm">Shop By Category</span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">Discover Our Collections</h2>
          <p className="text-text-secondary text-lg">
            Explore our carefully curated categories designed to elevate every aspect of your life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Large Category Card */}
          <div className="lg:col-span-1 lg:row-span-2">
            <CategoryCard 
              title={categories[0].title} 
              image={categories[0].image} 
              link={categories[0].link} 
              size="large"
            />
          </div>
          
          {/* Smaller Category Cards */}
          {categories.slice(1).map((category) => (
            <div key={category.id} className="lg:col-span-1">
              <CategoryCard 
                title={category.title} 
                image={category.image} 
                link={category.link} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
