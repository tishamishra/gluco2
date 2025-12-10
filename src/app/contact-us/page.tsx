import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Contact Us | Mitolyn Official',
  description: 'Reach out to Mitolyn customer service. Get help with purchases, shipping, returns, and product questions on the official Mitolyn website.',
  keywords: 'Mitolyn contact, Mitolyn customer service, Mitolyn support, Mitolyn help',
  alternates: {
    canonical: 'https://mtolyn.online/contact-us',
  },
};

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center" style={{ color: '#1098b7', fontFamily: 'Arial, sans-serif' }}>
            Contact Us
          </h1>
          
          <div className="prose prose-lg max-w-none" style={{ color: '#000000', fontFamily: 'Arial, sans-serif' }}>
            <p className="text-lg mb-6">
              Mitolyn is dedicated to delivering outstanding customer service and support. Mitolyn's customer service team is ready to help you with inquiries about our products, orders, shipping, refunds, and any other questions. Mitolyn guarantees quick and professional help for all customer requirements.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#1098b7' }}>How to Contact mitolyn</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              Mitolyn processes customer inquiries through secure payment processors to ensure your information is handled safely and efficiently. Mitolyn recommends contacting the appropriate support channel based on the payment processor that appears on your credit card statement. Mitolyn's support channels are equipped to handle all types of customer inquiries, from order questions to product information.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#1098b7' }}>Order and Billing Inquiries</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              Mitolyn provides dedicated support for order-related questions, including order status, shipping information, billing inquiries, and delivery updates. Mitolyn's support team can access your order information quickly when you contact us through the appropriate channel. Mitolyn recommends having your order number or email address ready when contacting support for faster service.
            </p>

            <div className="bg-gray-50 border-l-4 border-gray-400 p-6 my-6 rounded">
              <h3 className="text-xl md:text-2xl font-bold mb-4" style={{ color: '#1098b7' }}>If Your Credit Card Statement Shows BuyGoods:</h3>
              <p className="text-base md:text-lg mb-4 leading-relaxed">
                Mitolyn recommends contacting <a href="https://buygoods.com/contact" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold">BuyGoods Contact</a> for all customer service inquiries. Mitolyn's support team through BuyGoods can assist with orders, tracking, refunds, and product questions. Mitolyn ensures that all inquiries are handled promptly and professionally.
              </p>
            </div>

            <div className="bg-gray-50 border-l-4 border-gray-400 p-6 my-6 rounded">
              <h3 className="text-xl md:text-2xl font-bold mb-4" style={{ color: '#1098b7' }}>If Your Credit Card Statement Shows ClickBank:</h3>
              <p className="text-base md:text-lg mb-4 leading-relaxed">
                Mitolyn recommends contacting <a href="https://support.clickbank.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold">ClickBank Contact</a> for all customer service inquiries. Mitolyn's support team through ClickBank can assist with orders, tracking, refunds, and product questions. Mitolyn ensures that all inquiries are handled promptly and professionally.
              </p>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#1098b7' }}>Product Information</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              Mitolyn's customer service team can provide detailed information about our products, including ingredients, usage instructions, and benefits. Mitolyn encourages customers to review our product pages for comprehensive information, but our support team is available to answer specific questions or provide additional details. Mitolyn's team is knowledgeable about all aspects of our products and can help you make informed decisions.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#1098b7' }}>Refund and Return Requests</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              Mitolyn's customer service team handles all refund and return requests in accordance with our 90-day money-back guarantee. Mitolyn makes the refund process simple and straightforward. Mitolyn's support team will guide you through the return process, provide return instructions, and ensure your refund is processed promptly. Mitolyn recommends contacting the appropriate support channel based on your payment processor for refund requests.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#1098b7' }}>Response Times</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              Mitolyn strives to respond to all customer inquiries within 24-48 hours during business days. Mitolyn's support team prioritizes urgent matters such as order issues or shipping problems. Mitolyn appreciates your patience and ensures that all inquiries receive thorough and professional responses. Mitolyn's commitment to customer service means we work diligently to resolve all issues promptly.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#1098b7' }}>Order Tracking</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              Mitolyn provides comprehensive order tracking services for all customers. Mitolyn recommends visiting our <a href="/order-tracking" className="text-blue-600 hover:underline">Order Tracking</a> page for detailed information about accessing your tracking information. Mitolyn's customer service team can also assist with tracking inquiries if you need additional help locating your order status.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#1098b7' }}>Thank You for Choosing mitolyn</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              Mitolyn values your business and is committed to providing exceptional customer service. Mitolyn's team is here to help with any questions or concerns you may have. Mitolyn looks forward to assisting you and ensuring your complete satisfaction with our products and services.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
