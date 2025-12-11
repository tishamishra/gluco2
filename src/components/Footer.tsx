import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="hover:text-yellow-400 transition-colors">
                  What is GlycoMute?
                </Link>
              </li>
              <li>
                <Link href="#ingredients" className="hover:text-yellow-400 transition-colors">
                  Ingredients of GlycoMute
                </Link>
              </li>
              <li>
                <Link href="#benefits" className="hover:text-yellow-400 transition-colors">
                  GlycoMute Benefits
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-yellow-400 transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="hover:text-yellow-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-yellow-400 transition-colors">
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-yellow-400 transition-colors">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="hover:text-yellow-400 transition-colors">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-yellow-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <p className="text-sm text-gray-400 mb-4">
            <strong>FDA Compliance</strong><br />
            All content and information found on this page are for informational purposes only and are not intended to diagnose, treat, cure or prevent any disease. The FDA hasn't evaluated the statements provided on this page. Make sure you consult with a licensed doctor before taking any supplement or making any changes to your diet or exercise plan. Individual results may vary.
          </p>
          <p className="text-sm text-gray-400 text-center">
            © Copyright 2025 - <Link href="/" className="text-yellow-400 hover:text-yellow-500">GlycoMute</Link> All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
