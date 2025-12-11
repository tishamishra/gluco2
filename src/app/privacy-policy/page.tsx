import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Privacy Policy | GlycoMute Official',
  description: 'GlycoMute official privacy policy. Understand how we gather, utilize, and safeguard your personal data on the official GlycoMute website.',
  keywords: 'GlycoMute privacy, GlycoMute data protection, GlycoMute privacy policy, GlycoMute personal information',
  alternates: {
    canonical: 'https://glycomute-order.com/privacy-policy',
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center" style={{ color: '#d4805c', fontFamily: 'Jost, sans-serif' }}>
            Privacy Policy
          </h1>
          
          <div className="prose prose-lg max-w-none" style={{ color: '#000000', fontFamily: 'Jost, sans-serif' }}>
            <p className="text-lg mb-6">
              We are dedicated to safeguarding your privacy and maintaining the security of your personal data. This Privacy Policy explains our practices for collecting, utilizing, storing, and securing your information when you browse our website or complete a purchase.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#d4805c' }}>Information We Collect</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              We collect information you provide directly during purchases, account creation, or customer service interactions. This includes personal details like your name, email, shipping and billing addresses, phone number, and payment data. Additionally, we automatically gather technical information during website visits, including IP addresses, browser types, device details, and browsing behavior.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#d4805c' }}>How We Use Your Information</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              We utilize your personal information to process orders, communicate about purchases, respond to inquiries, and deliver customer support services. With your consent, we may also send marketing materials about products and promotions. Technical data helps us enhance website functionality, analyze user patterns, and improve your overall browsing experience.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#d4805c' }}>Information Sharing and Disclosure</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              We never sell, rent, or trade your personal information to outside parties. We share data only with trusted service providers who help operate our website, handle payments, ship orders, and support business functions. These partners must maintain confidentiality and use information only for specified purposes. We may disclose information when legally required or to protect our rights and customer safety.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#d4805c' }}>Cookies and Tracking Technologies</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              We employ cookies and similar tracking tools to improve your browsing experience and gather data about website interactions. Cookies help us remember preferences, analyze traffic patterns, and customize content. We use both temporary session cookies that expire when you close your browser and persistent cookies that remain until deleted. You can manage cookie preferences via browser settings, though disabling them may restrict some website functionality.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#d4805c' }}>Data Security</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              We implement industry-standard security protocols to prevent unauthorized access, modification, disclosure, or destruction of your personal data. SSL encryption technology protects payment information during transmission. Data is stored on secure servers with limited access, and we regularly audit security practices to maintain ongoing protection.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#d4805c' }}>Your Rights and Choices</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              We respect your privacy rights and give you control over your personal data. You can access, update, or delete account information anytime through account settings or by contacting customer service. Marketing communications can be opted out via unsubscribe links in emails or by contacting us directly. We honor requests to access, correct, or delete personal information per applicable privacy regulations.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#d4805c' }}>Children's Privacy</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              Our website is not designed for individuals under 18 years of age. We do not intentionally collect personal information from minors without parental permission. Parents and guardians should monitor children's online activities and contact us immediately if you suspect we have inadvertently collected information from a child.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#d4805c' }}>Changes to This Privacy Policy</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              We may periodically update this Privacy Policy to reflect changes in practices or legal requirements. Material changes will be communicated by posting the updated policy on our website and revising the "Last Updated" date. Please review this policy regularly to stay informed about how we protect your information.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#d4805c' }}>Contact Us</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              We welcome questions, concerns, or requests about this Privacy Policy or our privacy practices. Our customer service team is available through our contact page or the appropriate support channel based on your order details.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
