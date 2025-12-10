export default function StructuredData() {
  const baseUrl = "https://mtolyn-us.us";

  // Product Schema
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Mitolyn",
    "description": "Mitolyn official website supplement for fat loss and weight loss. Natural dietary supplement that supports mitochondrial health, boosts metabolism, and enhances fat burning.",
    "brand": {
      "@type": "Brand",
      "name": "Mitolyn"
    },
    "image": [
      "https://ik.imagekit.io/affin/mitolyn-supplement.webp?updatedAt=1765361274900"
    ],
    "offers": {
      "@type": "Offer",
      "url": "https://b9c6ckcm0x6mdy38yird8e5uex.hop.clickbank.net/?&traffic_source=bing",
      "priceCurrency": "USD",
      "price": "39.00",
      "priceValidUntil": "2025-12-31",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Mitolyn Official"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "999"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Sarah M."
        },
        "reviewBody": "Mitolyn has been amazing for my weight loss journey. I've lost 15 pounds in 2 months and have so much more energy."
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Michael R."
        },
        "reviewBody": "Best fat loss supplement I've tried. The official Mitolyn website made ordering easy and delivery was fast."
      }
    ]
  };

  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Mitolyn Official",
    "url": baseUrl,
    "logo": "https://ik.imagekit.io/affin/mitolyn-favicon-logo-485x94.webp?updatedAt=1765361274883",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "url": `${baseUrl}/contact-us`
    },
    "sameAs": []
  };

  // Website Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Mitolyn Official",
    "url": baseUrl,
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${baseUrl}/?s={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  // BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": baseUrl
      }
    ]
  };

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Mitolyn?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Mitolyn is a natural dietary supplement designed to support mitochondrial health, boost metabolism, and enhance fat burning. It's made from plant-based ingredients and helps with weight loss and energy levels."
        }
      },
      {
        "@type": "Question",
        "name": "How does Mitolyn work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Mitolyn works by targeting your mitochondria - the energy factories inside every cell. When they work at peak performance, your body naturally burns more fat and provides energy boost."
        }
      },
      {
        "@type": "Question",
        "name": "Where can I buy Mitolyn?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can buy Mitolyn from the official Mitolyn USA website. Visit our website to order and get the best prices with discounts."
        }
      },
      {
        "@type": "Question",
        "name": "Is Mitolyn safe?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Mitolyn is made from natural plant-based ingredients. It's GMP certified, FDA approved facility, and made in the USA. However, consult with a healthcare professional before use."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}

