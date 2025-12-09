import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Contact Us | Mitolyn Official',
  description: 'Contact Mitolyn official customer support. Get help with orders, tracking, refunds, and product questions on the official Mitolyn USA website.',
  keywords: 'mitolyn contact, mitolyn official contact, mitolyn usa support',
  alternates: {
    canonical: 'https://mtolyn-us.com/contact-us',
  },
};

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center" style={{ color: '#105bb8', fontFamily: 'Arial, sans-serif' }}>
            Contact Us
          </h1>
          
          <div className="prose prose-lg max-w-none" style={{ color: '#000000', fontFamily: 'Arial, sans-serif' }}>
            <p className="text-lg mb-6">
              We're here to help with any questions or concerns. To ensure your inquiry reaches the right team, please use the guidelines below for email inquiries.
            </p>
            <p className="text-base md:text-lg mb-8 leading-relaxed">
              If you have already placed an order, you can <a href="/order-tracking" className="text-blue-600 hover:underline">click here to view your tracking number</a> and check the status of your shipment.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#105bb8' }}>Frequently Asked Questions</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              Before sending us a message, please take a moment to review our Quick Answers below, which may address your question. This helps speed up response times and ensures you get the information you need as quickly as possible.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#105bb8' }}>Selecting the Right Department</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              For the fastest service, please choose the appropriate contact based on the payment information on your credit card statement:
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-6 rounded">
              <h3 className="text-xl md:text-2xl font-bold mb-4" style={{ color: '#105bb8' }}>If Your Credit Card Statement Shows BuyGoods:</h3>
              <p className="text-base md:text-lg mb-4">
                Reach out to us here for assistance: <a href="https://buygoods.com/contact" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold">BuyGoods Contact</a>
              </p>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-6 rounded">
              <h3 className="text-xl md:text-2xl font-bold mb-4" style={{ color: '#105bb8' }}>If Your Credit Card Statement Shows ClickBank:</h3>
              <p className="text-base md:text-lg mb-4">
                For support, please use: <a href="https://support.clickbank.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold">ClickBank Contact</a>
              </p>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#105bb8' }}>Additional Support</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              Our customer service team is available to help you with any inquiries, from order tracking and product questions to refund requests and account details. By selecting the correct option, you help us respond quickly and accurately. Please allow a brief period for processing, and we will get back to you as soon as possible with the answers you need.
            </p>

            <div className="bg-gray-50 border-l-4 border-gray-400 p-6 my-8 rounded">
              <p className="text-base md:text-lg leading-relaxed font-semibold">
                Thank you for choosing Mitolyn, and we look forward to assisting you!
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

