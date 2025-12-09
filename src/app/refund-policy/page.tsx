import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Refund Policy | Mitolyn Official',
  description: 'Mitolyn official refund policy. Learn about our 30-day money-back guarantee and return process on the official Mitolyn website.',
  keywords: 'mitolyn refund, mitolyn buy refund, mitolyn official refund policy',
  alternates: {
    canonical: 'https://mtolyn-us.com/refund-policy',
  },
};

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center" style={{ color: '#105bb8', fontFamily: 'Arial, sans-serif' }}>
            Refund Policy
          </h1>
          
          <div className="prose prose-lg max-w-none" style={{ color: '#000000', fontFamily: 'Arial, sans-serif' }}>
            <p className="text-lg mb-6">
              At Mitolyn, we are committed to ensuring that every customer is fully satisfied with their purchase. That's why we offer a straightforward 30-day money-back guarantee on all products purchased through our website.
            </p>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              If for any reason you're not completely happy with your purchase within this period, simply reach out to our support team. We'll guide you through the return process, provide a return address, and issue a full refund or exchange, no questions asked.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#105bb8' }}>Extended Refund Periods</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              Some products may come with an extended refund period. We encourage you to review the product's sales page or packaging for any specific refund terms related to that item.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#105bb8' }}>Partner Return Policies</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              For additional information on return policies provided by our partners, please refer to the links below:
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-6 rounded">
              <h3 className="text-xl md:text-2xl font-bold mb-4" style={{ color: '#105bb8' }}>For Orders Processed via BuyGoods:</h3>
              <p className="text-base md:text-lg mb-4">
                <a href="https://buygoods.com/refund-policy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">BuyGoods Refund Policy</a>
              </p>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-6 rounded">
              <h3 className="text-xl md:text-2xl font-bold mb-4" style={{ color: '#105bb8' }}>For Orders Processed via ClickBank:</h3>
              <p className="text-base md:text-lg mb-4">
                <a href="https://support.clickbank.com/refund-policy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">ClickBank Refund Policy</a>
              </p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8 rounded">
              <p className="text-base md:text-lg leading-relaxed font-semibold">
                Our support team is here to make the return process as smooth as possible, ensuring you feel confident and satisfied with your experience at Mitolyn.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

