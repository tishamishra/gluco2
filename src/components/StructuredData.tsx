export default function StructuredData() {
  const baseUrl = "https://mtolyn.online";

  // Product Schema
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Mitolyn",
    "description": "Mitolyn is a premium natural supplement designed for effective weight control and energy enhancement. This botanical formula promotes cellular health, boosts metabolic function, and optimizes fat burning processes.",
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
        "reviewBody": "Mitolyn transformed my approach to weight control. I've lost 18 pounds over two months and now experience much higher energy levels throughout the day."
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
        "reviewBody": "Best fat-burning supplement I've tried. Ordering from the official Mitolyn site was straightforward and delivery arrived faster than expected."
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
          "text": "Mitolyn is a plant-based dietary supplement formulated to optimize cellular energy production, boost metabolic rate, and enhance fat burning. Made from natural botanical extracts, it helps support healthy weight control and increased daily energy."
        }
      },
      {
        "@type": "Question",
        "name": "How does Mitolyn work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Mitolyn works by targeting your mitochondria - the energy generators inside each cell. When functioning optimally, your body naturally burns more stored fat and experiences improved energy output."
        }
      },
      {
        "@type": "Question",
        "name": "Where can I buy Mitolyn?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Mitolyn is available exclusively through the official Mitolyn online store. Browse our website to place orders and access current promotional pricing and special deals."
        }
      },
      {
        "@type": "Question",
        "name": "Is Mitolyn safe to use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Mitolyn contains only natural plant-based components. It's produced in GMP-certified facilities, FDA-registered manufacturing sites, and made in the United States. Always consult your healthcare professional before starting any supplement."
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

