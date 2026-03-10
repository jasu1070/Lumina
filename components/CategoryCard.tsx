import Link from 'next/link';
import Image from 'next/image';

interface CategoryCardProps {
  title: string;
  image: string;
  link: string;
  size?: 'large' | 'small';
}

export default function CategoryCard({ title, image, link, size = 'small' }: CategoryCardProps) {
  return (
    <Link 
      href={link}
      className={`group relative rounded-2xl overflow-hidden block ${size === 'large' ? 'aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5]' : 'aspect-square md:aspect-[4/3] lg:aspect-[3/2]'}`}
    >
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-500 z-10"></div>
      <Image 
        src={image} 
        alt={title} 
        fill 
        className="object-cover transition-transform duration-700 group-hover:scale-110"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        referrerPolicy="no-referrer"
      />
      
      <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 md:p-8">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          {title}
        </h3>
        <div className="flex items-center gap-2 text-white/90 font-medium opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
          <span>Shop Now</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
