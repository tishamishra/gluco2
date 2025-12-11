import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Contact Us | GlycoMute Official',
  description: 'Reach out to GlycoMute customer service. Get help with purchases, shipping, returns, and product questions on the official GlycoMute website.',
  keywords: 'GlycoMute contact, GlycoMute customer service, GlycoMute support, GlycoMute help',
  alternates: {
    canonical: 'https://glycomute-order.com/contact-us',
  },
};

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center" style={{ color: '#d4805c', fontFamily: 'Jost, sans-serif' }}>
            Contact Us
          </h1>
          
          <div className="prose prose-lg max-w-none" style={{ color: '#000000', fontFamily: 'Jost, sans-serif' }}>
            <p className="text-lg mb-6">
              We are dedicated to delivering outstanding customer service and support. Our customer service team is ready to help with inquiries about our products, orders, shipping, refunds, and any other questions. We guarantee quick and professional assistance for all customer needs.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#d4805c' }}>How to Contact GlycoMute</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              We process customer inquiries through secure payment processors to ensure your information is handled safely and efficiently. We recommend contacting the appropriate support channel based on the payment processor that appears on your credit card statement. Our support channels are equipped to handle all types of customer inquiries, from order questions to product information.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#d4805c' }}>Order and Billing Inquiries</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              We provide dedicated support for order-related questions, including order status, shipping information, billing inquiries, and delivery updates. Our support team can access your order information quickly when you contact us through the appropriate channel. We recommend having your order number or email address ready when contacting support for faster service.
            </p>

            <div className="bg-gray-50 border-l-4 border-gray-400 p-6 my-6 rounded">
              <h3 className="text-xl md:text-2xl font-bold mb-4" style={{ color: '#d4805c' }}>If Your Credit Card Statement Shows BuyGoods:</h3>
              <p className="text-base md:text-lg mb-4 leading-relaxed">
                GlycoMute recommends contacting <a href="https://buygoods.com/contact" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold">BuyGoods Contact</a> for all customer service inquiries. Our support team through BuyGoods can assist with orders, tracking, refunds, and product questions. We ensure that all inquiries are handled promptly and professionally.
              </p>
            </div>

            <div className="bg-gray-50 border-l-4 border-gray-400 p-6 my-6 rounded">
              <h3 className="text-xl md:text-2xl font-bold mb-4" style={{ color: '#d4805c' }}>If Your Credit Card Statement Shows ClickBank:</h3>
              <p className="text-base md:text-lg mb-4 leading-relaxed">
                GlycoMute recommends contacting <a href="https://support.clickbank.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold">ClickBank Contact</a> for all customer service inquiries. Our support team through ClickBank can assist with orders, tracking, refunds, and product questions. We ensure that all inquiries are handled promptly and professionally.
              </p>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#d4805c' }}>Product Information</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              Our customer service team can provide detailed information about our products, including ingredients, usage instructions, and benefits. We encourage customers to review our product pages for comprehensive information, but our support team is available to answer specific questions or provide additional details. Our team is knowledgeable about all aspects of our products and can help you make informed decisions.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#d4805c' }}>Refund and Return Requests</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              Our customer service team handles all refund and return requests in accordance with our 90-day money-back guarantee. We make the refund process simple and straightforward. Our support team will guide you through the return process, provide return instructions, and ensure your refund is processed promptly. We recommend contacting the appropriate support channel based on your payment processor for refund requests.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#d4805c' }}>Response Times</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              We strive to respond to all customer inquiries within 24-48 hours during business days. Our support team prioritizes urgent matters such as order issues or shipping problems. We appreciate your patience and ensure that all inquiries receive thorough and professional responses. Our commitment to customer service means we work diligently to resolve all issues promptly.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#d4805c' }}>Order Tracking</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              We provide comprehensive order tracking services for all customers. We recommend visiting our <a href="/order-tracking" className="text-blue-600 hover:underline">Order Tracking</a> page for detailed information about accessing your tracking information. Our customer service team can also assist with tracking inquiries if you need additional help locating your order status.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#d4805c' }}>Thank You for Choosing GlycoMute</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              We value your business and are committed to providing exceptional customer service. Our team is here to help with any questions or concerns you may have. We look forward to assisting you and ensuring your complete satisfaction with our products and services.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
