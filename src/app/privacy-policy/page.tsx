import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Privacy Policy | Mitolyn Official',
  description: 'Mitolyn official privacy policy. Learn how we collect, use, and protect your personal information on the official Mitolyn USA website.',
  keywords: 'mitolyn privacy policy, mitolyn official privacy, mitolyn usa privacy',
  alternates: {
    canonical: 'https://mtolyn-us.us/privacy-policy',
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center" style={{ color: '#1098b7', fontFamily: 'Arial, sans-serif' }}>
            Privacy Policy
          </h1>
          
          <div className="prose prose-lg max-w-none" style={{ color: '#000000', fontFamily: 'Arial, sans-serif' }}>
            <p className="text-lg mb-6">
              Mitolyn is committed to protecting your privacy and ensuring the security of your personal information. Mitolyn's Privacy Policy outlines how we collect, use, store, and protect your data when you visit our website or make a purchase.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#1098b7' }}>Information We Collect</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              Mitolyn collects information that you provide directly when you make a purchase, create an account, or contact our customer service team. Mitolyn gathers personal details including your name, email address, shipping address, billing address, phone number, and payment information. Mitolyn also automatically collects certain technical information when you visit our website, such as your IP address, browser type, device information, and browsing patterns.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#1098b7' }}>How We Use Your Information</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              Mitolyn uses your personal information to process and fulfill your orders, communicate with you about your purchases, respond to your inquiries, and provide customer support. Mitolyn may also use your information to send you marketing communications about our products and special offers, but only if you have opted in to receive such communications. Mitolyn uses technical information to improve our website functionality, analyze usage patterns, and enhance your browsing experience.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#1098b7' }}>Information Sharing and Disclosure</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              Mitolyn does not sell, rent, or trade your personal information to third parties. Mitolyn shares your information only with trusted service providers who assist us in operating our website, processing payments, shipping orders, and conducting business operations. Mitolyn requires these partners to maintain the confidentiality of your information and use it solely for the purposes we specify. Mitolyn may also disclose your information if required by law or to protect our rights and the safety of our customers.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#1098b7' }}>Cookies and Tracking Technologies</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              Mitolyn uses cookies and similar tracking technologies to enhance your browsing experience and collect information about how you interact with our website. Mitolyn's cookies help us remember your preferences, analyze website traffic, and personalize content. Mitolyn uses both session cookies, which expire when you close your browser, and persistent cookies, which remain on your device until deleted. You can control cookie preferences through your browser settings, though disabling cookies may limit certain website features.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#1098b7' }}>Data Security</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              Mitolyn implements industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. Mitolyn uses secure socket layer (SSL) encryption technology to safeguard your payment information during transmission. Mitolyn stores your data on secure servers with restricted access and regularly reviews our security practices to ensure ongoing protection of your information.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#1098b7' }}>Your Rights and Choices</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              Mitolyn respects your privacy rights and provides you with control over your personal information. Mitolyn allows you to access, update, or delete your account information at any time through your account settings or by contacting our customer service team. Mitolyn provides options to opt out of marketing communications by clicking the unsubscribe link in our emails or contacting us directly. Mitolyn honors requests to access, correct, or delete your personal information in accordance with applicable privacy laws.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#1098b7' }}>Children's Privacy</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              Mitolyn's website is not intended for children under the age of 18. Mitolyn does not knowingly collect personal information from children without parental consent. Mitolyn encourages parents and guardians to monitor their children's online activities and contact us immediately if you believe we have inadvertently collected information from a child.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#1098b7' }}>Changes to This Privacy Policy</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              Mitolyn may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. Mitolyn will notify you of any material changes by posting the updated policy on our website and updating the "Last Updated" date. Mitolyn encourages you to review this Privacy Policy regularly to stay informed about how we protect your information.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#1098b7' }}>Contact Us</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              Mitolyn welcomes your questions, concerns, or requests regarding this Privacy Policy or our privacy practices. Mitolyn's customer service team is available to assist you through our contact page or by reaching out to the appropriate support channel based on your order information.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
