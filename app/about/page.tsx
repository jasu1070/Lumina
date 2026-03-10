import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">About Lumina</h1>
          <p className="text-lg text-text-secondary leading-relaxed">
            We are dedicated to providing premium products that elevate your everyday life. 
            Our mission is to combine modern design with exceptional quality, creating 
            pieces that you&apos;ll love for years to come.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="bg-gray-100 rounded-2xl aspect-[4/3] relative overflow-hidden">
            <Image 
              src="https://picsum.photos/seed/about-us/800/600" 
              alt="Our Team" 
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-bold text-primary">Our Story</h2>
            <p className="text-text-secondary leading-relaxed">
              Founded in 2026, Lumina started with a simple idea: that high-quality, 
              beautifully designed products shouldn&apos;t be out of reach. We work directly 
              with manufacturers to bring you the best possible items without the traditional retail markup.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Every product in our collection is carefully selected and rigorously tested 
              to ensure it meets our high standards for durability, functionality, and aesthetics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
