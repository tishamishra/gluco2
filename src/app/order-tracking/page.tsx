import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Order Tracking | GlycoMute Official',
  description: 'Monitor your GlycoMute purchase status on our official site. Access order help and shipping details for your GlycoMute order.',
  keywords: 'GlycoMute order tracking, GlycoMute shipping status, GlycoMute delivery tracking, GlycoMute order status',
  alternates: {
    canonical: 'https://glycomute-order.com/order-tracking',
  },
};

export default function OrderTracking() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center" style={{ color: '#d4805c', fontFamily: 'Jost, sans-serif' }}>
            Order Tracking
          </h1>
          
          <div className="prose prose-lg max-w-none" style={{ color: '#000000', fontFamily: 'Jost, sans-serif' }}>
            <p className="text-lg mb-6">
              We provide comprehensive order tracking services to help you monitor your purchase from placement to delivery. Our tracking system allows you to check order status, view shipping information, and receive updates about your shipment.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#d4805c' }}>How to Track Your Order</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              We send order confirmation emails containing your order number and tracking information once your order ships. Please check your email inbox, including spam folders, for these important updates. Tracking information becomes available within 24-48 hours after your order ships, depending on the shipping method selected.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#d4805c' }}>Order Status Updates</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              We provide real-time order status updates through our tracking system. Order statuses include: Order Confirmed, Processing, Shipped, In Transit, Out for Delivery, and Delivered. We send email notifications at each major status change to keep you informed throughout the shipping process.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#d4805c' }}>Tracking by Payment Processor</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              We process orders through secure payment processors, and your tracking information is available through the processor that handled your transaction. We provide direct links to the appropriate tracking portal based on your payment method.
            </p>

            <div className="bg-gray-50 border-l-4 border-gray-400 p-6 my-6 rounded">
              <h3 className="text-xl md:text-2xl font-bold mb-4" style={{ color: '#d4805c' }}>If BuyGoods Appears on Your Credit Card Statement:</h3>
              <p className="text-base md:text-lg mb-4 leading-relaxed">
                GlycoMute recommends visiting <a href="https://buygoods.com/tracking" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">BuyGoods Order Tracking</a> to access your order details and tracking information. Orders processed through BuyGoods can be tracked using your order number or email address.
              </p>
              <p className="text-base md:text-lg mb-4 leading-relaxed">
                Our customer support is available through <a href="https://buygoods.com/contact" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">BuyGoods Contact</a> for any questions about your order or tracking information.
              </p>
            </div>

            <div className="bg-gray-50 border-l-4 border-gray-400 p-6 my-6 rounded">
              <h3 className="text-xl md:text-2xl font-bold mb-4" style={{ color: '#d4805c' }}>If ClickBank Appears on Your Credit Card Statement:</h3>
              <p className="text-base md:text-lg mb-4 leading-relaxed">
                GlycoMute recommends visiting <a href="https://support.clickbank.com/order-tracking" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">ClickBank Order Tracking</a> to access your order details and tracking information. Orders processed through ClickBank can be tracked using your order confirmation number.
              </p>
              <p className="text-base md:text-lg mb-4 leading-relaxed">
                Our customer support is available through <a href="https://support.clickbank.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">ClickBank Contact</a> for any questions about your order or tracking information.
              </p>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#d4805c' }}>Delivery Timeframes</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              We provide estimated delivery timeframes based on your selected shipping method and destination. Standard shipping typically takes 5-10 business days, while expedited options may arrive sooner. Please note that delivery times may vary due to factors beyond our control, including weather conditions, carrier delays, or customs processing for international orders.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#d4805c' }}>Need Additional Assistance?</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              Our customer service team is available to assist with any questions about your order or tracking information. We recommend contacting the appropriate support channel based on the payment processor shown on your credit card statement. Our support team can help resolve tracking issues, provide order updates, or address any concerns about your shipment.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
