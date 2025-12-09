import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Order Tracking | Mitolyn Official',
  description: 'Track your Mitolyn order on the official website. Get order assistance and tracking information for your Mitolyn purchase.',
  keywords: 'mitolyn order tracking, mitolyn buy tracking, mitolyn official order',
  alternates: {
    canonical: 'https://mtolyn-us.com/order-tracking',
  },
};

export default function OrderTracking() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center" style={{ color: '#105bb8', fontFamily: 'Arial, sans-serif' }}>
            Order Assistance and Tracking
          </h1>
          
          <div className="prose prose-lg max-w-none" style={{ color: '#000000', fontFamily: 'Arial, sans-serif' }}>
            <p className="text-lg mb-6">
              We're here to help with all aspects of your order. Please refer to the following options to manage or inquire about your purchase.
            </p>
            <p className="text-base md:text-lg mb-8 leading-relaxed">
              If you need to check your order status, review details, or request updates, you can access order information directly from the links provided below. Our customer support team is also available if you'd like to speak with a representative or have specific questions.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#105bb8' }}>For Any Billing Inquiries or Order-Related Questions</h2>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-6 rounded">
              <h3 className="text-xl md:text-2xl font-bold mb-4" style={{ color: '#105bb8' }}>If BuyGoods Appears on Your Credit Card Statement:</h3>
              <ul className="list-disc list-inside space-y-2 text-base md:text-lg mb-4">
                <li>For questions, reach out via <a href="https://buygoods.com/contact" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">BuyGoods Contact</a></li>
                <li>For tracking and order details, go to <a href="https://buygoods.com/tracking" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">BuyGoods Order Tracking</a></li>
              </ul>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-6 rounded">
              <h3 className="text-xl md:text-2xl font-bold mb-4" style={{ color: '#105bb8' }}>If ClickBank Appears on Your Credit Card Statement:</h3>
              <ul className="list-disc list-inside space-y-2 text-base md:text-lg mb-4">
                <li>For questions, reach out via <a href="https://support.clickbank.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">ClickBank Contact</a></li>
                <li>For tracking and order details, go to <a href="https://support.clickbank.com/order-tracking" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">ClickBank Order Tracking</a></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#105bb8' }}>Need Further Assistance?</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              If you have additional questions or need personalized support, our customer service team is ready to assist you through the appropriate contact links above. Simply select the contact method that matches the name on your credit card statement, and we'll ensure you receive prompt assistance.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

