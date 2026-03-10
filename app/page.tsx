import HeroBanner from '@/components/HeroBanner';
import TrustBanner from '@/components/TrustBanner';
import CategorySection from '@/components/CategorySection';
import ProductGrid from '@/components/ProductGrid';
import PromoBanner from '@/components/PromoBanner';
import Newsletter from '@/components/Newsletter';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroBanner />
      <TrustBanner />
      <CategorySection />
      <ProductGrid />
      <PromoBanner />
      <Newsletter />
    </div>
  );
}
