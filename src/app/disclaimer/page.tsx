import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Disclaimer | GlycoMute Official',
  description: 'GlycoMute official disclaimer. Essential details about using our website and products on the official GlycoMute online store.',
  keywords: 'GlycoMute disclaimer, GlycoMute legal disclaimer, GlycoMute product disclaimer, GlycoMute website disclaimer',
  alternates: {
    canonical: 'https://glycomute-order.com/disclaimer',
  },
};

export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center" style={{ color: '#d4805c', fontFamily: 'Jost, sans-serif' }}>
            Disclaimer
          </h1>
          
          <div className="prose prose-lg max-w-none" style={{ color: '#000000', fontFamily: 'Jost, sans-serif' }}>
            <p className="text-lg mb-6">
              This disclaimer outlines important information regarding the use of our website and products. We strongly recommend reviewing these terms thoroughly before accessing our site or making any purchases.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#d4805c' }}>Product Information and Claims</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              We strive to maintain accurate product details throughout our website. All product descriptions, visual content, and technical specifications serve informational purposes exclusively. We cannot guarantee that all website content is completely accurate, comprehensive, reliable, up-to-date, or free from errors. We retain the right to modify, correct, or update any information at our discretion without advance notification.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#d4805c' }}>Health and Medical Disclaimer</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              Our products are nutritional supplements and should not be used to diagnose, treat, cure, or prevent any medical condition. These statements have not been reviewed by the FDA. We strongly advise speaking with your healthcare provider before beginning any supplement program, particularly if you have existing health concerns, take prescription medications, or are pregnant or breastfeeding. Our supplements do not replace professional medical guidance, diagnosis, or treatment.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#d4805c' }}>Individual Results May Vary</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              Individual outcomes can differ significantly when using our supplements. Customer testimonials represent personal experiences and may not reflect typical results for all users. We cannot promise specific outcomes, as results depend on numerous factors such as dietary habits, physical activity, lifestyle choices, and personal health status. We recommend maintaining realistic expectations and following usage instructions consistently for optimal benefits.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#d4805c' }}>Website Content and Accuracy</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              While we work to maintain current and accurate website information, we provide no warranties concerning the completeness, reliability, or precision of our content. We accept no responsibility for any errors or missing information on our site. We may alter website content at any time without advance warning. We cannot ensure continuous website availability or guarantee uninterrupted access.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#d4805c' }}>External Links</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              Our website may include links to third-party sites. These links are provided solely for convenience and do not constitute endorsement of external content, privacy practices, or policies. We recommend reviewing terms and privacy policies of any external sites you access. We bear no responsibility for damages or losses arising from your interaction with external websites.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#d4805c' }}>Limitation of Liability</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              Our legal liability is restricted to the fullest extent allowed by applicable law. We will not be held responsible for indirect, incidental, special, consequential, or punitive damages resulting from website or product use. Total liability for any claims cannot exceed the purchase price of the specific product. All warranties, whether express or implied, including merchantability and fitness warranties, are disclaimed.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#d4805c' }}>Use at Your Own Risk</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              Our website and products are offered "as is" with no warranties whatsoever. Users should apply their own judgment and careful consideration when utilizing our website or products. We accept no responsibility for decisions made based on our website information. We advise consulting qualified professionals for personalized guidance.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#d4805c' }}>Updates to Disclaimer</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              We may revise this disclaimer at any time without advance notification. Please review this document regularly to remain informed about our current terms and limitations. Continued use of our website or products following disclaimer updates indicates acceptance of the modified terms.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
