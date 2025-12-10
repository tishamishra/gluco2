import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Terms & Conditions | Mitolyn Official',
  description: 'Mitolyn official terms and conditions. Review the guidelines and policies for using the Mitolyn official website.',
  keywords: 'Mitolyn terms, Mitolyn conditions, Mitolyn website terms, Mitolyn legal terms',
  alternates: {
    canonical: 'https://mtolyn.online/terms',
  },
};

export default function Terms() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center" style={{ color: '#1098b7', fontFamily: 'Arial, sans-serif' }}>
            Terms and Conditions
          </h1>
          
          <div className="prose prose-lg max-w-none" style={{ color: '#000000', fontFamily: 'Arial, sans-serif' }}>
            <p className="text-lg mb-6">
              Mitolyn welcomes you to our website. Mitolyn's Terms and Conditions govern your access to and use of our website and services. Mitolyn requires that you read and agree to these terms before using our website or making a purchase.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#1098b7' }}>Acceptance of Terms</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              Mitolyn's Terms and Conditions constitute a legally binding agreement between you and mitolyn. Mitolyn requires that you accept these terms by accessing or using our website. Mitolyn reserves the right to modify these terms at any time, and your continued use of our website constitutes acceptance of any changes. Mitolyn encourages you to review these terms regularly to stay informed of updates.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#1098b7' }}>Use of Website</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              Mitolyn grants you a limited, non-exclusive, non-transferable license to access and use our website for personal, non-commercial purposes. Mitolyn prohibits any unauthorized use of our website, including but not limited to copying, modifying, distributing, transmitting, displaying, or creating derivative works from our content. Mitolyn reserves the right to terminate your access to our website at any time for violation of these terms.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#1098b7' }}>Product Orders and Pricing</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              Mitolyn makes every effort to display accurate product information and pricing on our website. Mitolyn reserves the right to correct any errors in pricing or product information, even after an order has been placed. Mitolyn may refuse or cancel any order at our discretion, including orders that appear to be placed by dealers, resellers, or distributors. Mitolyn's prices are subject to change without notice, and mitolyn is not obligated to honor prices that are clearly incorrect due to typographical errors.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#1098b7' }}>Payment Terms</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              Mitolyn accepts various payment methods as indicated on our website. Mitolyn processes payments through secure third-party payment processors. Mitolyn requires that you provide accurate payment information and authorize us to charge your payment method for the total amount of your order. Mitolyn is not responsible for any fees charged by your financial institution related to your purchase.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#1098b7' }}>Shipping and Delivery</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              Mitolyn ships products to the address you provide during checkout. Mitolyn is not responsible for delays caused by shipping carriers or incorrect shipping addresses provided by customers. Mitolyn's shipping times are estimates and not guarantees. Mitolyn recommends reviewing our shipping policy for detailed information about delivery times and shipping options.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#1098b7' }}>Intellectual Property</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              Mitolyn owns all content on our website, including text, graphics, logos, images, and software. Mitolyn's content is protected by copyright, trademark, and other intellectual property laws. Mitolyn prohibits any unauthorized reproduction, distribution, or use of our content without express written permission. Mitolyn reserves all rights not expressly granted in these terms.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#1098b7' }}>User Conduct</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              Mitolyn expects users to use our website in a lawful and respectful manner. Mitolyn prohibits any activity that could harm, disable, or impair our website or interfere with other users' access. Mitolyn reserves the right to investigate and take appropriate legal action against any violations of these terms. Mitolyn may suspend or terminate accounts that violate these terms.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#1098b7' }}>Limitation of Liability</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              Mitolyn's liability is limited to the maximum extent permitted by applicable law. Mitolyn shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our website or products. Mitolyn's total liability for any claims shall not exceed the amount you paid for the product in question. Mitolyn disclaims all warranties except those expressly stated in these terms.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#1098b7' }}>Governing Law</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              Mitolyn's Terms and Conditions are governed by the laws of the jurisdiction in which mitolyn operates. Mitolyn requires that any disputes arising from these terms be resolved through binding arbitration or in the appropriate courts of that jurisdiction. Mitolyn reserves the right to seek injunctive relief in any court of competent jurisdiction.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#1098b7' }}>Contact Information</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              Mitolyn welcomes questions about these Terms and Conditions. Mitolyn's customer service team is available to assist you through our contact page or the appropriate support channels based on your order information.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
