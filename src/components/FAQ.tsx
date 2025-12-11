'use client';

import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is GlycoMute?",
      answer: "GlycoMute is a plant-based supplement that helps keep blood sugar steady and energy even."
    },
    {
      question: "How does GlycoMute work?",
      answer: "It blends ingredients that help your body handle carbs smoothly and support a healthy insulin response."
    },
    {
      question: "Is GlycoMute safe to use?",
      answer: "Yes. It’s made in the USA in GMP and FDA-registered facilities. Check with your doctor if you’re on medication."
    },
    {
      question: "Who should take GlycoMute?",
      answer: "Adults who want support for healthy blood sugar, steadier energy, and fewer spikes or crashes."
    },
    {
      question: "How long does it take to see results?",
      answer: "Many people feel a difference in 2–4 weeks; fuller results often show in 60–90 days."
    },
    {
      question: "Does GlycoMute contain stimulants?",
      answer: "No. It’s stimulant-free and non-habit forming."
    },
    {
      question: "How should I take GlycoMute?",
      answer: "Take two capsules daily with a meal."
    },
    {
      question: "Can I take GlycoMute with medications?",
      answer: "If you take diabetes meds or insulin, talk with your doctor before using it."
    },
    {
      question: "Are there any side effects?",
      answer: "It’s generally well tolerated; most users don’t report major side effects."
    },
    {
      question: "Is there a money-back guarantee?",
      answer: "Yes. There’s a 90-day money-back guarantee."
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
