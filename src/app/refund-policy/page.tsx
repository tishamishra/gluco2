import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Refund Policy | Mitolyn Official',
  description: 'Mitolyn official refund policy. Discover our 90-day satisfaction guarantee and return procedure on the official Mitolyn site.',
  keywords: 'Mitolyn refund, Mitolyn return policy, Mitolyn money back guarantee, Mitolyn refund process',
  alternates: {
    canonical: 'https://mtolyn.online/refund-policy',
  },
};

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center" style={{ color: '#1098b7', fontFamily: 'Arial, sans-serif' }}>
            Refund Policy
          </h1>
          
          <div className="prose prose-lg max-w-none" style={{ color: '#000000', fontFamily: 'Arial, sans-serif' }}>
            <p className="text-lg mb-6">
              Mitolyn stands behind the quality of our products and your satisfaction. Mitolyn offers a comprehensive 90-day money-back guarantee on all purchases made through our official website. Mitolyn's refund policy is designed to ensure your complete satisfaction with your purchase.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#1098b7' }}>90-Day Money-Back Guarantee</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              Mitolyn provides a full 90-day money-back guarantee on all products purchased directly from our official website. Mitolyn's guarantee allows you to return any unused or partially used product within 90 days of purchase for a full refund. Mitolyn requires no questions asked and provides prompt processing of refund requests. Mitolyn's commitment to your satisfaction means you can try our products risk-free.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#1098b7' }}>How to Request a Refund</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              Mitolyn makes the refund process simple and straightforward. Mitolyn requires that you contact our customer service team through the appropriate channel based on your payment processor. Mitolyn's support team will guide you through the return process, provide return instructions, and process your refund once we receive the returned product. Mitolyn recommends keeping your order confirmation email for reference when requesting a refund.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#1098b7' }}>Refund Processing</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              Mitolyn processes refunds promptly upon receipt and inspection of returned products. Mitolyn typically processes refunds within 5-10 business days after receiving your return. Mitolyn issues refunds to the original payment method used for purchase. Mitolyn notes that it may take additional time for your financial institution to reflect the refund in your account.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#1098b7' }}>Return Shipping</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              Mitolyn provides return shipping instructions when you contact our customer service team. Mitolyn recommends using a trackable shipping method to ensure your return is received safely. Mitolyn is not responsible for return shipping costs unless the return is due to our error or a defective product. Mitolyn provides a return address upon approval of your refund request.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#1098b7' }}>Refund Eligibility</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              Mitolyn's 90-day money-back guarantee applies to all products purchased directly from our official website. Mitolyn requires that refund requests be made within 90 days of the original purchase date. Mitolyn may request return of the product, though partial refunds may be available for partially used products. Mitolyn reserves the right to refuse refunds for products purchased from unauthorized sellers or third-party retailers.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#1098b7' }}>Contact for Refunds</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              Mitolyn processes refunds through the same payment processor that handled your original transaction. Mitolyn recommends contacting the appropriate support channel based on the name that appears on your credit card statement.
            </p>

            <div className="bg-gray-50 border-l-4 border-gray-400 p-6 my-6 rounded">
              <h3 className="text-xl md:text-2xl font-bold mb-4" style={{ color: '#1098b7' }}>For Orders Processed via BuyGoods:</h3>
              <p className="text-base md:text-lg mb-4 leading-relaxed">
                mitolyn recommends contacting <a href="https://buygoods.com/contact" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">BuyGoods Contact</a> for refund requests. Mitolyn's refund policy details are also available at <a href="https://buygoods.com/refund-policy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">BuyGoods Refund Policy</a>.
              </p>
            </div>

            <div className="bg-gray-50 border-l-4 border-gray-400 p-6 my-6 rounded">
              <h3 className="text-xl md:text-2xl font-bold mb-4" style={{ color: '#1098b7' }}>For Orders Processed via ClickBank:</h3>
              <p className="text-base md:text-lg mb-4 leading-relaxed">
                mitolyn recommends contacting <a href="https://support.clickbank.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">ClickBank Contact</a> for refund requests. Mitolyn's refund policy details are also available at <a href="https://support.clickbank.com/refund-policy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">ClickBank Refund Policy</a>.
              </p>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#1098b7' }}>Questions About Refunds</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              Mitolyn's customer service team is available to answer any questions about our refund policy or assist with your refund request. Mitolyn is committed to ensuring a smooth and satisfactory refund experience for all customers. Mitolyn encourages you to contact us if you have any concerns or need clarification about our refund process.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
