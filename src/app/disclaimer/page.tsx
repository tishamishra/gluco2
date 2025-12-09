import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Disclaimer | Mitolyn Official',
  description: 'Mitolyn official disclaimer. Important information about the use of our website and products on the official Mitolyn USA website.',
  keywords: 'mitolyn disclaimer, mitolyn official disclaimer',
  alternates: {
    canonical: 'https://mtolyn-us.com/disclaimer',
  },
};

export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center" style={{ color: '#105bb8', fontFamily: 'Arial, sans-serif' }}>
            Disclaimer
          </h1>
          
          <div className="prose prose-lg max-w-none" style={{ color: '#000000', fontFamily: 'Arial, sans-serif' }}>
            <p className="text-lg mb-6">
              Disclaimer for Mitolyn
            </p>

            <p className="text-base md:text-lg mb-6 leading-relaxed">
              Mitolyn makes no warranties, express or implied, regarding the completeness, reliability, or accuracy of the information presented on this website. Any action you take based on the information you find on this website (Mitolyn) is strictly at your own risk. Mitolyn will not be liable for any losses and/or damages in connection with the use of our website.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#105bb8' }}>External Links</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              From our website, you can visit other websites by following hyperlinks to such external sites. While we strive to provide only quality links to useful and ethical websites, we have no control over the content and nature of these sites. These links to other websites do not imply a recommendation for all the content found on these sites. Site owners and content may change without notice, and changes may occur before we have the opportunity to remove a link that may have become outdated or inappropriate.
            </p>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              Please be aware that when you leave our website, other sites may have different privacy policies and terms which are beyond our control. Please be sure to check the Privacy Policies of these sites as well as their "Terms of Service" before engaging in any business or uploading any information.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#105bb8' }}>Consent</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              By using our website, you hereby consent to our disclaimer and agree to its terms.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#105bb8' }}>Updates</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              Should we update, amend, or make any changes to this document, those changes will be prominently posted here.
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8 rounded">
              <p className="text-base md:text-lg leading-relaxed font-semibold">
                <strong>Important Notice:</strong> Mitolyn does not make any warranties about the completeness, reliability, or accuracy of the information on this website. Any action you take upon the information you find on this website (Mitolyn) is strictly at your own risk. Mitolyn will not be liable for any losses and/or damages in connection with the use of our website.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

