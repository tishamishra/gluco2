import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Terms & Conditions | GlycoMute Official',
  description: 'GlycoMute official terms and conditions. Review the guidelines and policies for using the GlycoMute official website.',
  keywords: 'GlycoMute terms, GlycoMute conditions, GlycoMute website terms, GlycoMute legal terms',
  alternates: {
    canonical: 'https://glycomute-order.com/terms',
  },
};

export default function Terms() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center" style={{ color: '#d4805c', fontFamily: 'Jost, sans-serif' }}>
            Terms and Conditions
          </h1>
          
          <div className="prose prose-lg max-w-none" style={{ color: '#000000', fontFamily: 'Jost, sans-serif' }}>
            <p className="text-lg mb-6">
              Welcome to our website. These Terms and Conditions govern your access and use of our website and services. Please read and agree to these terms before using our site or completing a purchase.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#d4805c' }}>Acceptance of Terms</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              These Terms and Conditions form a legally binding agreement between you and GlycoMute. By accessing or using our website, you accept these terms. We reserve the right to modify these terms at any time, and continued website use indicates acceptance of changes. Please review these terms regularly to stay current with updates.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#d4805c' }}>Use of Website</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              We grant you a limited, non-exclusive, non-transferable license to access and use our website for personal, non-commercial purposes. Unauthorized use is prohibited, including copying, modifying, distributing, transmitting, displaying, or creating derivative works from our content. We may terminate your website access at any time for violations of these terms.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#d4805c' }}>Product Orders and Pricing</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              We strive to display accurate product information and pricing on our website. We reserve the right to correct pricing or product information errors, even after order placement. We may refuse or cancel orders at our discretion, including those appearing to be from dealers, resellers, or distributors. Prices may change without notice, and we are not obligated to honor prices that are clearly incorrect due to typographical errors.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#d4805c' }}>Payment Terms</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              We accept various payment methods as shown on our website. Payments are processed through secure third-party processors. You must provide accurate payment information and authorize charges for your order total. We are not responsible for fees charged by your financial institution related to purchases.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#d4805c' }}>Shipping and Delivery</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              We ship products to the address provided during checkout. We are not responsible for delays caused by shipping carriers or incorrect addresses provided by customers. Shipping times are estimates, not guarantees. Please review our shipping policy for detailed delivery timeframes and shipping options.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#d4805c' }}>Intellectual Property</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              We own all website content, including text, graphics, logos, images, and software. This content is protected by copyright, trademark, and other intellectual property laws. Unauthorized reproduction, distribution, or use of our content without express written permission is prohibited. All rights not expressly granted in these terms are reserved.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#d4805c' }}>User Conduct</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              Users must use our website lawfully and respectfully. We prohibit activities that could harm, disable, or impair our website or interfere with other users' access. We reserve the right to investigate and take appropriate legal action against violations. Accounts violating these terms may be suspended or terminated.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#d4805c' }}>Limitation of Liability</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              Our liability is limited to the maximum extent permitted by applicable law. We shall not be liable for indirect, incidental, special, or consequential damages from website or product use. Total liability for any claims shall not exceed the amount paid for the specific product. All warranties are disclaimed except those expressly stated in these terms.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#d4805c' }}>Governing Law</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              These Terms and Conditions are governed by the laws of the jurisdiction where GlycoMute operates. Disputes arising from these terms must be resolved through binding arbitration or in appropriate courts of that jurisdiction. We reserve the right to seek injunctive relief in any court of competent jurisdiction.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#d4805c' }}>Contact Information</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              We welcome questions about these Terms and Conditions. Our customer service team is available through our contact page or appropriate support channels based on your order information.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
