'use client';

import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What exactly is Mitolyn?",
      answer: "Mitolyn is a natural supplement that targets the root cause of slow metabolism - your mitochondria. Think of it like a tune-up for your cellular engines. When your mitochondria are working properly, your body burns fat more efficiently and produces more energy. The formula combines six carefully selected plant-based ingredients, each chosen for their ability to support mitochondrial health. It's not a stimulant or a quick fix - it's a way to actually fix what's broken so your body can do what it's supposed to do."
    },
    {
      question: "Is Mitolyn safe to use?",
      answer: "Absolutely. Everything in Mitolyn is 100% natural and plant-based. No weird chemicals, no synthetic stimulants, nothing artificial. It's made right here in the USA in facilities that are FDA-registered and GMP-certified, which means they follow the strictest quality standards. Plus, it's completely free of soy, dairy, and GMOs. If you're looking for a clean, safe supplement, this is it."
    },
    {
      question: "Where is Mitolyn manufactured?",
      answer: "Mitolyn is made in the United States in facilities that are both FDA-registered and GMP-certified. That means every batch goes through rigorous testing to make sure you're getting a pure, potent product. We use only high-quality, non-GMO ingredients, and we stand behind every bottle that goes out."
    },
    {
      question: "How does Mitolyn support weight loss?",
      answer: "It's all about fixing your mitochondria. When those cellular engines are running strong, your metabolism speeds up and your body becomes more efficient at burning stored fat. It's not about suppressing your appetite or giving you jitters - it's about making your cells work better. Over time, as your mitochondria function improves, you'll notice fat melting away, especially from those stubborn areas that never seem to respond to diet and exercise alone."
    },
    {
      question: "How should I take Mitolyn for the best results?",
      answer: "Keep it simple - just one capsule a day with a meal. The key is consistency. Make it part of your daily routine, like brushing your teeth. While Mitolyn works on its own, you'll see the best results when you combine it with a healthy lifestyle. That doesn't mean you need to go on some extreme diet or live at the gym - just eat reasonably well and stay active. The supplement does the heavy lifting, but a little help from you goes a long way."
    }
  ];

  return (
    <>
      <section className="header3 cid-tB88MG5MRU py-10 text-center" id="header3-1p" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
        <div className="align-center container mx-auto px-4">
          <div className="row justify-center">
            <div className="col-12 col-lg-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white" style={{ fontFamily: 'Arial, sans-serif' }}>
                <strong>Mitolyn Frequently Asked Questions</strong>
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="content16 cid-tTNurdHq8c py-12 bg-gradient-to-br from-blue-50 via-white to-purple-50" id="content16-69">
        <div className="container mx-auto px-4">
          <div className="row justify-center">
            <div className="col-12 col-md-10">
              <div id="bootstrap-accordion_36" className="panel-group accordionStyles accordion">
                {faqs.map((faq, index) => (
                  <div key={index} className="card mb-4 rounded-2xl overflow-hidden shadow-lg border-4 border-blue-300 hover:border-blue-500 transition-all duration-300">
                    <div className="card-header bg-gradient-to-r from-blue-100 to-purple-100">
                      <button
                        type="button"
                        className="panel-title w-full text-left p-6 flex justify-between items-center hover:bg-gradient-to-r hover:from-blue-200 hover:to-purple-200 transition-all duration-300"
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                      >
                        <h6 className="font-extrabold text-xl md:text-2xl" style={{ color: '#000000', fontFamily: 'Arial, sans-serif' }}>
                          <strong>{faq.question}</strong>
                        </h6>
                        <span className="text-purple-600 text-4xl font-bold">
                          {openIndex === index ? '−' : '+'}
                        </span>
                      </button>
                    </div>
                    {openIndex === index && (
                      <div className="panel-collapse">
                        <div className="panel-body p-6 bg-white">
                          <p className="text-lg leading-relaxed" style={{ color: '#000000', fontFamily: 'Arial, sans-serif', textAlign: 'left' }}>
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

      <section className="content5 cid-uwxDbNctQa py-16 bg-gradient-to-br from-green-50 via-white to-teal-50" id="content5-8m">
        <div className="container mx-auto px-4">
          <div className="row justify-center">
            <div className="col-md-12 col-lg-10">
              <div className="bg-white rounded-2xl p-10 shadow-2xl border-4 border-green-400">
                <h4 className="text-3xl md:text-4xl font-extrabold mb-6" style={{ color: '#000000', fontFamily: 'Arial, sans-serif', textAlign: 'left' }}>Is My Credit Card Information Safe?</h4>
                <p className="text-lg md:text-xl leading-relaxed" style={{ color: '#000000', fontFamily: 'Arial, sans-serif', textAlign: 'left' }}>
                I know online security is a big concern, and it should be. That's why we take it seriously. We use bank-level encryption to protect your information, and our servers are secured with the same technology that financial institutions use. Your credit card details and personal information are encrypted the moment you enter them, so they stay safe throughout the entire transaction process.
                <br /><br />
                <strong>Here's the bottom line</strong>:<br />
                We've built our entire checkout process around keeping your information safe. You can shop with complete confidence knowing we're using industry-standard security practices. Your data is protected, period.
                <br /><br />
                <strong>And remember</strong>:<br />
                With our 90-day money-back guarantee, you're not just protected online - you're protected if the product doesn't work for you. We're that confident you'll love it, and we want you to feel completely comfortable giving it a try.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

