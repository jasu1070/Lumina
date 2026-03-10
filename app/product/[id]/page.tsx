import { Product } from '@/store/useStore';
import ProductDetailsClient from '@/components/ProductDetailsClient';

// Mock data (in a real app, this would come from an API)
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

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = products.find(p => p.id === id) || products[0];
  
  return <ProductDetailsClient product={product} products={products} />;
}
