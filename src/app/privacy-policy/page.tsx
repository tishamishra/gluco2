import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Privacy Policy | Mitolyn Official',
  description: 'Mitolyn official privacy policy. Learn how we collect, use, and protect your personal information on the official Mitolyn USA website.',
  keywords: 'mitolyn privacy policy, mitolyn official privacy, mitolyn usa privacy',
  alternates: {
    canonical: 'https://mtolyn-us.com/privacy-policy',
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center" style={{ color: '#105bb8', fontFamily: 'Arial, sans-serif' }}>
            Privacy Policy
          </h1>
          
          <div className="prose prose-lg max-w-none" style={{ color: '#000000', fontFamily: 'Arial, sans-serif' }}>
            <p className="text-lg mb-6">
              This Privacy Policy outlines the types of information that Mitolyn collects and records, as well as how we utilize this information to serve you better.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#105bb8' }}>Information Collection and Log Files</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              Like most websites, Mitolyn follows standard industry practices by utilizing log files. These files automatically record information when visitors access our website. This is a common practice among web hosting providers and is part of standard website analytics. The data collected through log files includes Internet Protocol (IP) addresses, browser types, Internet Service Provider (ISP) details, date and time stamps, referring and exit pages, and potentially the number of clicks. This information is not connected to any personally identifiable data. We use this information to analyze trends, manage our website, track user navigation patterns, and gather demographic insights.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#105bb8' }}>Cookies and Web Beacons</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              Mitolyn utilizes 'cookies' to enhance your browsing experience. These small data files store information about your preferences and the pages you visit on our website. This data helps us optimize your experience by tailoring our website content based on your browser type and other relevant information.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#105bb8' }}>Google DoubleClick DART Cookie</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              Google serves as a third-party vendor on our website and uses cookies, specifically DART cookies, to serve ads to our visitors based on their visits to our site and other sites on the internet.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#105bb8' }}>Third-Party Advertising</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              You can review the Privacy Policies of each of our advertising partners by consulting the list provided. Third-party ad servers or ad networks use technologies such as cookies, JavaScript, or Web Beacons in their advertisements and links that appear on Mitolyn. These are sent directly to your browser and automatically receive your IP address. These technologies are used to measure the effectiveness of advertising campaigns and to personalize the advertising content you see on websites you visit.
            </p>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              Please note that Mitolyn has no access to or control over cookies used by third-party advertisers.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#105bb8' }}>Third-Party Privacy Policies</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              Mitolyn's Privacy Policy does not extend to other advertisers or websites. Therefore, we recommend that you consult the respective Privacy Policies of these third-party ad servers for more detailed information. These policies may include their practices and instructions about how to opt-out of certain options. You can find a complete list of these Privacy Policies and their links here: Privacy Policy Links.
            </p>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              You have the option to disable cookies through your individual browser settings. For more detailed information about cookie management with specific web browsers, please visit the respective browser websites.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#105bb8' }}>What Are Cookies?</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              Cookies are small text files that are placed on your device when you visit a website. They help websites remember your preferences and improve your browsing experience.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#105bb8' }}>Children's Information</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              Protecting children's privacy online is a priority for us. We encourage parents and guardians to observe, participate in, monitor, and guide their children's online activities.
            </p>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              Mitolyn does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you believe that your child has provided this kind of information on our website, we strongly encourage you to contact us immediately. We will make every effort to promptly remove such information from our records.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#105bb8' }}>Online Privacy Policy Only</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              This Privacy Policy applies only to our online activities and is valid for visitors to our website regarding the information they share and/or collect on Mitolyn. This policy does not apply to any information collected offline or via channels other than this website.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#105bb8' }}>Consent</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

