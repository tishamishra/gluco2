'use client';

import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is GlycoMute?",
      answer: "GlycoMute is a natural way to keep your blood sugar healthy and your energy steady. Made with plant ingredients, it helps control blood sugar, helps your body use insulin better, and helps keep your body balanced."
    },
    {
      question: "How does GlycoMute work?",
      answer: "GlycoMute works by helping your body's natural ways of handling sugar. The mix helps break down carbs slower, helps insulin work better, and helps keep blood sugar stable for steady energy all day."
    },
    {
      question: "Is GlycoMute safe to use?",
      answer: "Yes. GlycoMute uses only natural plant ingredients. Made in GMP-certified, FDA-approved factories in the USA. We recommend talking to your doctor before starting any new supplement."
    },
    {
      question: "Who should take GlycoMute?",
      answer: "Adults looking for natural help to keep blood sugar steady, have more stable daily energy, and have fewer ups and downs throughout the day."
    },
    {
      question: "How long does it take to see results?",
      answer: "Some people see results in 2–4 weeks of regular use, while full benefits usually show up after 60–90 days of taking it regularly."
    },
    {
      question: "Does GlycoMute contain stimulants?",
      answer: "No. The formula has no stimulants and is made to be non-addictive."
    },
    {
      question: "How should I take GlycoMute?",
      answer: "Take two capsules each day with a meal for best results."
    },
    {
      question: "Can I take GlycoMute with medications?",
      answer: "If you take prescription drugs for diabetes or insulin treatment, talk to your doctor before starting GlycoMute."
    },
    {
      question: "Are there any side effects?",
      answer: "The supplement usually works well for most people, with most reporting few or no side effects when used as directed."
    },
    {
      question: "Is there a money-back guarantee?",
      answer: "Yes, we offer a full 90-day money-back guarantee on all purchases."
    }
  ];

  return (
    <section className="bg-white py-16" id="faq">
      <div className="container mx-auto px-4">
        <div className="section-title" style={{ marginBottom: '2rem', textAlign: 'center' }}>
          <h2 style={{
            fontWeight: 900,
            letterSpacing: '-0.02em',
            textTransform: 'uppercase',
            textAlign: 'center',
            backgroundColor: '#dc2626',
            color: '#ffffff',
            padding: '1.5rem 2rem',
            borderRadius: '8px',
            display: 'inline-block',
            width: '100%',
            maxWidth: '100%'
          }}>Frequently Asked Questions About GlycoMute</h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="card bg-white">
                <button
                  className="w-full text-left flex items-center justify-between p-4 focus:outline-none"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <h3 className="text-lg font-extrabold pr-4" style={{
                    color: '#111827',
                    fontWeight: 800,
                    letterSpacing: '-0.01em'
                  }}>{faq.question}</h3>
                  <svg
                    className={`w-6 h-6 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                    style={{ color: 'var(--secondary)' }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="px-4 pb-4">
                    <p className="text-gray-700 leading-relaxed" style={{
                      fontWeight: 500,
                      letterSpacing: '0.01em'
                    }}>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
