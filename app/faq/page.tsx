export default function FAQPage() {
  return (
    <div className="flex flex-col min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 md:px-8 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-center">Frequently Asked Questions</h1>
        <p className="text-lg text-text-secondary text-center mb-16">
          Find answers to common questions about our products, shipping, returns, and more.
        </p>

        <div className="flex flex-col gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-primary mb-3">What is your return policy?</h3>
            <p className="text-text-secondary">
              We offer a 30-day hassle-free return policy. If you aren&apos;t completely satisfied with your purchase, you can return it within 30 days of delivery for a full refund. Items must be in their original condition and packaging.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-primary mb-3">How long does shipping take?</h3>
            <p className="text-text-secondary">
              Standard shipping typically takes 3-5 business days within the continental US. Expedited shipping options (1-2 business days) are available at checkout. International shipping times vary by destination.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-primary mb-3">Do you ship internationally?</h3>
            <p className="text-text-secondary">
              Yes, we ship to most countries worldwide. International shipping rates and delivery times are calculated at checkout based on your location.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-primary mb-3">How can I track my order?</h3>
            <p className="text-text-secondary">
              Once your order ships, you will receive a confirmation email with a tracking number. You can use this number on our Track Order page or directly on the carrier&apos;s website to monitor your delivery status.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
