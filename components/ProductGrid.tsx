import ProductCard from './ProductCard';
import { Product } from '@/store/useStore';

const products: Product[] = [
  { id: '1', name: 'Premium Noise-Cancelling Headphones', price: 299.99, image: 'https://picsum.photos/seed/headphones/600/800', category: 'Electronics' },
  { id: '2', name: 'Minimalist Leather Backpack', price: 149.00, image: 'https://picsum.photos/seed/backpack/600/800', category: 'Accessories' },
  { id: '3', name: 'Smart Fitness Watch Series 7', price: 399.00, image: 'https://picsum.photos/seed/watch/600/800', category: 'Electronics' },
  { id: '4', name: 'Organic Cotton T-Shirt', price: 35.00, image: 'https://picsum.photos/seed/tshirt/600/800', category: 'Fashion' },
  { id: '5', name: 'Ceramic Coffee Mug Set', price: 45.00, image: 'https://picsum.photos/seed/mug/600/800', category: 'Home' },
  { id: '6', name: 'Wireless Charging Pad', price: 59.99, image: 'https://picsum.photos/seed/charger/600/800', category: 'Electronics' },
  { id: '7', name: 'Classic Aviator Sunglasses', price: 120.00, image: 'https://picsum.photos/seed/sunglasses/600/800', category: 'Accessories' },
  { id: '8', name: 'Ergonomic Desk Chair', price: 250.00, image: 'https://picsum.photos/seed/chair/600/800', category: 'Home' },
];

export default function ProductGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-secondary font-semibold tracking-wider uppercase text-sm">Featured Collection</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Trending Products</h2>
          </div>
          <a href="/shop" className="text-secondary font-medium hover:underline flex items-center gap-2">
            View All Products
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
