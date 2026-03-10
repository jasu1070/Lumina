'use client';

export default function TrackOrderPage() {
  return (
    <div className="flex flex-col min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 md:px-8 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-center">Track Your Order</h1>
        <p className="text-lg text-text-secondary text-center mb-16">
          Enter your order number and email address to check the status of your shipment.
        </p>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-2">
              <label htmlFor="orderNumber" className="text-sm font-medium text-text-secondary">Order Number</label>
              <input 
                type="text" 
                id="orderNumber" 
                className="p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary" 
                placeholder="e.g. LUM-12345678" 
                required
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium text-text-secondary">Email Address</label>
              <input 
                type="email" 
                id="email" 
                className="p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary" 
                placeholder="john@example.com" 
                required
              />
            </div>
            
            <button type="submit" className="btn-primary py-4 mt-4">
              Track Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
