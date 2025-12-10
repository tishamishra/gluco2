import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Disclaimer | Mitolyn Official',
  description: 'Mitolyn official disclaimer. Essential details about using our website and products on the official Mitolyn online store.',
  keywords: 'Mitolyn disclaimer, Mitolyn legal disclaimer, Mitolyn product disclaimer, Mitolyn website disclaimer',
  alternates: {
    canonical: 'https://mtolyn.online/disclaimer',
  },
};

export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center" style={{ color: '#1098b7', fontFamily: 'Arial, sans-serif' }}>
            Disclaimer
          </h1>
          
          <div className="prose prose-lg max-w-none" style={{ color: '#000000', fontFamily: 'Arial, sans-serif' }}>
            <p className="text-lg mb-6">
              Mitolyn provides this disclaimer to inform users about the limitations and responsibilities associated with using our website and products. Mitolyn encourages all visitors to read this disclaimer carefully before using our website or purchasing our products.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#1098b7' }}>Product Information and Claims</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              Mitolyn makes every effort to ensure the accuracy of product information presented on our website. Mitolyn's product descriptions, images, and specifications are provided for informational purposes only. Mitolyn does not warrant that product descriptions or other content on this site are accurate, complete, reliable, current, or error-free. Mitolyn reserves the right to correct any errors, inaccuracies, or omissions and to change or update information at any time without prior notice.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#1098b7' }}>Health and Medical Disclaimer</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              Mitolyn's products are dietary supplements and are not intended to diagnose, treat, cure, or prevent any disease. Mitolyn's statements have not been evaluated by the Food and Drug Administration. Mitolyn recommends consulting with a healthcare professional before starting any new supplement regimen, especially if you have a medical condition, are taking medication, or are pregnant or nursing. Mitolyn's products are not a substitute for professional medical advice, diagnosis, or treatment.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#1098b7' }}>Individual Results May Vary</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              Mitolyn acknowledges that individual results may vary when using our products. Mitolyn's customer testimonials and reviews reflect individual experiences and may not be typical of all users. Mitolyn does not guarantee specific results, and results may depend on various factors including diet, exercise, lifestyle, and individual health conditions. Mitolyn encourages realistic expectations and consistent use as directed for best results.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#1098b7' }}>Website Content and Accuracy</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              Mitolyn strives to provide accurate and up-to-date information on our website, but makes no warranties or representations regarding the completeness, reliability, or accuracy of website content. Mitolyn disclaims all liability for any errors or omissions in website content. Mitolyn reserves the right to modify website content at any time without prior notice. Mitolyn does not guarantee that the website will be available at all times or that access will be uninterrupted.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#1098b7' }}>External Links</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              Mitolyn's website may contain links to external websites operated by third parties. Mitolyn provides these links for your convenience only and does not endorse or assume responsibility for the content, privacy policies, or practices of external websites. Mitolyn encourages you to review the terms and privacy policies of any external websites you visit. Mitolyn is not liable for any damages or losses resulting from your use of external websites.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#1098b7' }}>Limitation of Liability</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              Mitolyn's liability is limited to the maximum extent permitted by law. Mitolyn shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our website or products. Mitolyn's total liability for any claims related to our products or website shall not exceed the amount you paid for the product in question. Mitolyn disclaims all warranties, express or implied, including warranties of merchantability and fitness for a particular purpose.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#1098b7' }}>Use at Your Own Risk</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              Mitolyn's website and products are provided "as is" without warranties of any kind. Mitolyn encourages users to exercise their own judgment and discretion when using our website or products. Mitolyn is not responsible for any decisions made based on information found on our website. Mitolyn recommends consulting with qualified professionals for advice specific to your situation.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#1098b7' }}>Updates to Disclaimer</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              Mitolyn reserves the right to update this disclaimer at any time without prior notice. Mitolyn encourages you to review this disclaimer periodically to stay informed about our terms and limitations. Mitolyn's continued use of our website or products after changes to this disclaimer constitutes acceptance of the updated terms.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
