'use client';

import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Who is Mitolyn designed for?",
      answer: "Mitolyn is formulated for adults seeking to naturally boost energy, support metabolic health, and maintain overall wellness. Mitolyn's plant-based formula makes it suitable for most adults looking for metabolic support. Mitolyn should not be used by individuals who are pregnant, nursing, receiving medical treatment, or taking medications without first consulting with a healthcare provider."
    },
    {
      question: "Does Mitolyn have any side effects?",
      answer: "Mitolyn is made with pure, plant-derived ingredients and is generally well tolerated. Mitolyn's natural composition minimizes the risk of adverse reactions. Some individuals may notice mild digestive adjustments or temporary energy fluctuations as the body adapts. Mitolyn recommends discontinuing use and consulting your physician if any discomfort occurs."
    },
    {
      question: "How quickly will I see results with Mitolyn?",
      answer: "Mitolyn's results vary by individual, but many users begin noticing improved energy, better mood, and enhanced mental focus within the first few weeks. Mitolyn works best when taken consistently along with a balanced diet and regular exercise. Mitolyn's cumulative benefits become more noticeable with continued use over time."
    },
    {
      question: "Can I use Mitolyn long-term?",
      answer: "Mitolyn's stimulant-free, natural formula is intended for safe, long-term daily use. Mitolyn's natural ingredients support sustainable metabolic health without dependency concerns. Mitolyn recommends discussing with your healthcare professional for personalized advice on extended use."
    },
    {
      question: "Are there any Mitolyn special offers available?",
      answer: "Mitolyn is available at discounted prices exclusively through the official website for a limited time. Mitolyn offers bundle packages and promotional savings while supplies last. Mitolyn's current pricing provides excellent value for this popular metabolic support supplement."
    },
    {
      question: "Where can I buy Mitolyn safely?",
      answer: "Mitolyn is available exclusively through the official Mitolyn website or authorized retailers to ensure authenticity and access special promotions. Mitolyn's official channels guarantee genuine products, bundle savings, and fast, secure shipping. Mitolyn recommends purchasing only from authorized sources to ensure product quality and customer support."
    }
  ];

  return (
    <>
      <section className="header3 cid-uwypPCiL9D py-12 text-center relative overflow-hidden" id="mitolyn-faq" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f3e8ff 100%)' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-1/4 w-72 h-72 bg-purple-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-1/4 w-64 h-64 bg-pink-300 rounded-full blur-3xl"></div>
        </div>
        <div className="align-center container mx-auto px-4 relative z-10">
          <div className="row justify-center">
            <div className="col-12 col-lg-12">
              <div className="inline-block bg-gradient-to-r from-purple-100 to-pink-100 rounded-3xl px-8 py-4 border-4 border-purple-300 shadow-xl">
                <h3 className="mbr-section-title mb-0 mbr-fonts-style display-2 text-3xl md:text-4xl lg:text-5xl font-bold" style={{ fontFamily: 'Arial, sans-serif', background: 'linear-gradient(135deg, #8b5cf6, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  <strong>❓ Mitolyn Frequently Asked Questions</strong>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content17 cid-uwypPCiL9D py-12" id="content17-faq" style={{ background: '#ffffff' }}>
        <div className="container mx-auto px-4">
          <div className="row justify-center">
            <div className="col-12 col-md-10">
              <div id="bootstrap-accordion_36" className="panel-group accordionStyles accordion">
                {faqs.map((faq, index) => (
                  <div key={index} className="card mb-3 rounded-2xl overflow-hidden shadow-xl border-4 border-purple-200 hover:border-purple-400 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="card-header bg-gradient-to-r from-purple-50 to-pink-50">
                      <button
                        type="button"
                        className="panel-title w-full text-left p-5 flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                      >
                        <h6 className="font-bold text-lg md:text-xl" style={{ color: '#000000', fontFamily: 'Arial, sans-serif' }}>
                          <strong>{faq.question}</strong>
                        </h6>
                        <span className="text-gray-600 text-2xl font-normal" style={{ fontFamily: 'Arial, sans-serif' }}>
                          {openIndex === index ? '−' : '+'}
                        </span>
                      </button>
                    </div>
                    {openIndex === index && (
                      <div className="panel-collapse">
                        <div className="panel-body p-5 bg-gradient-to-br from-white to-purple-50 border-t-4 border-purple-300">
                          <p className="text-base md:text-lg leading-relaxed" style={{ color: '#000000', fontFamily: 'Arial, sans-serif', textAlign: 'left' }}>
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

