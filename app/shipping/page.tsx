export default function ShippingPage() {
  return (
    <div className="flex flex-col min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 md:px-8 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-center">Shipping & Returns</h1>
        <p className="text-lg text-text-secondary text-center mb-16">
          Everything you need to know about our shipping policies and return process.
        </p>

        <div className="flex flex-col gap-12">
          <section>
            <h2 className="text-3xl font-bold text-primary mb-6">Shipping Information</h2>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-6">
              <div>
                <h3 className="text-xl font-bold text-primary mb-2">Processing Time</h3>
                <p className="text-text-secondary">
                  All orders are processed within 1-2 business days. Orders are not shipped or delivered on weekends or holidays. If we are experiencing a high volume of orders, shipments may be delayed by a few days.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-primary mb-2">Shipping Rates & Delivery Estimates</h3>
                <ul className="list-disc pl-5 text-text-secondary space-y-2">
                  <li><strong>Standard Shipping:</strong> 3-5 business days (Free on orders over $100, otherwise $10)</li>
                  <li><strong>Expedited Shipping:</strong> 2 business days ($25)</li>
                  <li><strong>Overnight Shipping:</strong> 1 business day ($45)</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-primary mb-6">Return Policy</h2>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-6">
              <div>
                <h3 className="text-xl font-bold text-primary mb-2">30-Day Guarantee</h3>
                <p className="text-text-secondary">
                  We stand behind our products. If you are not completely satisfied with your purchase, you may return it within 30 days of delivery for a full refund or exchange.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-primary mb-2">Return Process</h3>
                <ol className="list-decimal pl-5 text-text-secondary space-y-2">
                  <li>Contact our customer support team to initiate a return.</li>
                  <li>Receive a prepaid return shipping label via email.</li>
                  <li>Pack the item securely in its original packaging.</li>
                  <li>Drop off the package at any authorized shipping location.</li>
                  <li>Your refund will be processed within 5-7 business days after we receive the item.</li>
                </ol>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
