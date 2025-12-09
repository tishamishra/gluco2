import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Terms & Conditions | Mitolyn Official',
  description: 'Mitolyn official terms and conditions. Read the rules and regulations for using the Mitolyn USA official website.',
  keywords: 'mitolyn terms, mitolyn official terms, mitolyn usa terms',
  alternates: {
    canonical: 'https://mtolyn-us.com/terms',
  },
};

export default function Terms() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center" style={{ color: '#105bb8', fontFamily: 'Arial, sans-serif' }}>
            Terms and Conditions
          </h1>
          
          <div className="prose prose-lg max-w-none" style={{ color: '#000000', fontFamily: 'Arial, sans-serif' }}>
            <p className="text-lg mb-6">
              Welcome to Mitolyn!
            </p>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              These terms and conditions outline the rules and regulations for the use of Mitolyn's Website.
            </p>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              By accessing this website, we assume you accept these terms and conditions. Do not continue to use Mitolyn if you do not agree to take all of the terms and conditions stated on this page.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#105bb8' }}>Terminology</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              The following terminology applies to these Terms and Conditions, Privacy Statement, and Disclaimer Notice: "Client", "You" and "Your" refers to you, the person accessing this website and compliant to the Company's terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves. All terms refer to the offer, acceptance, and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client's needs in respect of provision of the Company's stated services.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#105bb8' }}>Cookies</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              We employ the use of cookies. By accessing Mitolyn, you agreed to use cookies in agreement with Mitolyn's Privacy Policy.
            </p>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#105bb8' }}>License</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              Unless otherwise stated, Mitolyn and/or its licensors own the intellectual property rights for all material on Mitolyn. All intellectual property rights are reserved. You may access this from Mitolyn for your own personal use, subject to restrictions set in these terms and conditions.
            </p>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              You must not:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2 text-base md:text-lg">
              <li>Republish material from Mitolyn</li>
              <li>Sell, rent, or sub-license material from Mitolyn</li>
              <li>Reproduce, duplicate, or copy material from Mitolyn</li>
              <li>Redistribute content from Mitolyn</li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#105bb8' }}>Comments</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas. Mitolyn does not filter, edit, publish, or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of Mitolyn, its agents, and/or affiliates. Comments reflect the views and opinions of the person who posts their views and opinions.
            </p>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              Mitolyn reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive, or causes breach of these Terms and Conditions.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#105bb8' }}>Hyperlinking to our Content</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              The following organizations may link to our Website without prior written approval:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2 text-base md:text-lg">
              <li>Government agencies</li>
              <li>Search engines</li>
              <li>News organizations</li>
              <li>Online directory distributors</li>
              <li>System-wide Accredited Businesses (except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups)</li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#105bb8' }}>iFrames</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              Without prior approval and written permission, you may not create frames around our Web pages that alter in any way the visual presentation or appearance of our Website.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#105bb8' }}>Content Liability</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              We shall not be held responsible for any content that appears on your Website. You agree to protect and defend us against all claims that arise on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene, or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#105bb8' }}>Your Privacy</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              Please read our <a href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</a>.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#105bb8' }}>Reservation of Rights</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amend these terms and conditions and its linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#105bb8' }}>Removal of Links from Our Website</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              If you find any link on our Website that is offensive for any reason, you are free to contact and inform us at any moment. We will consider requests to remove links, but we are not obligated to do so or to respond to you directly.
            </p>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              We do not ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we promise to ensure that the website remains available or that the material on the website is kept up to date.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" style={{ color: '#105bb8' }}>Disclaimer</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              To the maximum extent permitted by applicable law, we exclude all representations, warranties, and conditions relating to our website and the use of this website. Nothing in this disclaimer will limit or exclude our or your liability for death or personal injury, limit or exclude our or your liability for fraud or fraudulent misrepresentation, limit any of our or your liabilities in any way that is not permitted under applicable law, or exclude any of our or your liabilities that may not be excluded under applicable law.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

