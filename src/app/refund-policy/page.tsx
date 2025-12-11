import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Refund Policy | GlycoMute Official',
  description: 'GlycoMute official refund policy. Discover our 90-day satisfaction guarantee and return procedure on the official GlycoMute site.',
  keywords: 'GlycoMute refund, GlycoMute return policy, GlycoMute money back guarantee, GlycoMute refund process',
  alternates: {
    canonical: 'https://glycomute-order.com/refund-policy',
  },
};

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center" style={{ color: '#d4805c', fontFamily: 'Jost, sans-serif' }}>
            Refund Policy
          </h1>
          
          <div className="prose prose-lg max-w-none" style={{ color: '#000000', fontFamily: 'Jost, sans-serif' }}>
            <p className="text-lg mb-6">
              We stand behind our product quality and your satisfaction. We offer a comprehensive 90-day money-back guarantee on all purchases made through our official website. Our refund policy is designed to ensure your complete satisfaction with every purchase.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#d4805c' }}>90-Day Money-Back Guarantee</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              We provide a full 90-day money-back guarantee on all products purchased directly from our official website. Our guarantee allows you to return any unused or partially used product within 90 days of purchase for a complete refund. No questions asked, and we process refund requests promptly. Our commitment to your satisfaction means you can try our products completely risk-free.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#d4805c' }}>How to Request a Refund</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              We make the refund process simple and straightforward. Please contact our customer service team through the appropriate channel based on your payment processor. Our support team will guide you through the return process, provide return instructions, and process your refund once we receive the returned product. We recommend keeping your order confirmation email for reference when requesting a refund.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#d4805c' }}>Refund Processing</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              We process refunds promptly upon receipt and inspection of returned products. Typically, refunds are processed within 5-10 business days after receiving your return. Refunds are issued to the original payment method used for purchase. Please note that it may take additional time for your financial institution to reflect the refund in your account.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#d4805c' }}>Return Shipping</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              We provide return shipping instructions when you contact our customer service team. We recommend using a trackable shipping method to ensure your return is received safely. We are not responsible for return shipping costs unless the return is due to our error or a defective product. A return address is provided upon approval of your refund request.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#d4805c' }}>Refund Eligibility</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              Our 90-day money-back guarantee applies to all products purchased directly from our official website. Refund requests must be made within 90 days of the original purchase date. We may request return of the product, though partial refunds may be available for partially used products. We reserve the right to refuse refunds for products purchased from unauthorized sellers or third-party retailers.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#d4805c' }}>Contact for Refunds</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              We process refunds through the same payment processor that handled your original transaction. We recommend contacting the appropriate support channel based on the name that appears on your credit card statement.
            </p>

            <div className="bg-gray-50 border-l-4 border-gray-400 p-6 my-6 rounded">
              <h3 className="text-xl md:text-2xl font-bold mb-4" style={{ color: '#d4805c' }}>For Orders Processed via BuyGoods:</h3>
              <p className="text-base md:text-lg mb-4 leading-relaxed">
                GlycoMute recommends contacting <a href="https://buygoods.com/contact" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">BuyGoods Contact</a> for refund requests. Our refund policy details are also available at <a href="https://buygoods.com/refund-policy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">BuyGoods Refund Policy</a>.
              </p>
            </div>

            <div className="bg-gray-50 border-l-4 border-gray-400 p-6 my-6 rounded">
              <h3 className="text-xl md:text-2xl font-bold mb-4" style={{ color: '#d4805c' }}>For Orders Processed via ClickBank:</h3>
              <p className="text-base md:text-lg mb-4 leading-relaxed">
                GlycoMute recommends contacting <a href="https://support.clickbank.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">ClickBank Contact</a> for refund requests. Our refund policy details are also available at <a href="https://support.clickbank.com/refund-policy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">ClickBank Refund Policy</a>.
              </p>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#d4805c' }}>Questions About Refunds</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              Our customer service team is available to answer any questions about our refund policy or assist with your refund request. We are committed to ensuring a smooth and satisfactory refund experience for all customers. Please contact us if you have any concerns or need clarification about our refund process.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
