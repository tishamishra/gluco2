export default function StructuredData() {
  const baseUrl = "https://glycomute-order.com";

  // Product Schema
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "GlycoMute",
    "description": "GlycoMute offers a natural approach to maintaining optimal blood sugar levels and consistent daily energy. This botanical blend helps regulate glucose processing, enhances insulin function, and supports overall metabolic health.",
    "brand": {
      "@type": "Brand",
      "name": "GlycoMute"
    },
    "image": [
      "https://ik.imagekit.io/affin/glycomute/glycomute-supplement.png"
    ],
    "offers": {
      "@type": "Offer",
      "url": "https://sweetfend.com/c/order-now.php?affiliate=ubro12&pid=pre1&tid=ubro12",
      "priceCurrency": "USD",
      "price": "39.00",
      "priceValidUntil": "2025-12-31",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "GlycoMute Official"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "95045"
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
          "name": "Olivia C."
        },
        "reviewBody": "GlycoMute completely changed my approach to blood sugar management. My energy levels are now steady throughout the day, and my cravings have significantly reduced. I feel healthier and more in control."
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
          "name": "David T."
        },
        "reviewBody": "Excellent blood sugar support supplement. Ordering from the official GlycoMute website was simple and my order arrived quickly. My readings have become much more stable."
      }
    ]
  };

  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "GlycoMute Official",
    "url": baseUrl,
    "logo": "https://ik.imagekit.io/affin/glycomute/glycomute-favicon-logo-485x94.webp?updatedAt=1765391043064",
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
    "name": "GlycoMute Official",
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

  // Navigation Menu Schema
  const navigationSchema = {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    "name": "Main Navigation",
    "url": baseUrl,
    "hasPart": [
      {
        "@type": "SiteNavigationElement",
        "name": "About",
        "url": `${baseUrl}#about`
      },
      {
        "@type": "SiteNavigationElement",
        "name": "Ingredients",
        "url": `${baseUrl}#ingredients`
      },
      {
        "@type": "SiteNavigationElement",
        "name": "Benefits",
        "url": `${baseUrl}#benefits`
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
        "name": "What is GlycoMute?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "GlycoMute provides a natural solution for maintaining healthy blood sugar and consistent energy levels. Formulated with botanical ingredients, it assists in glucose regulation, improves insulin sensitivity, and supports metabolic balance."
        }
      },
      {
        "@type": "Question",
        "name": "How does GlycoMute work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "GlycoMute functions by enhancing your body's innate glucose management mechanisms. The blend assists in moderating carb breakdown, improves insulin efficiency, and helps maintain stable blood sugar for sustained daily vitality."
        }
      },
      {
        "@type": "Question",
        "name": "Where can I buy GlycoMute?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "GlycoMute can only be purchased directly from our official website. Browse our digital storefront to complete your order and take advantage of current discount pricing and exclusive deals."
        }
      },
      {
        "@type": "Question",
        "name": "Is GlycoMute safe to use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. GlycoMute uses exclusively natural botanical components. Manufacturing occurs in GMP-compliant, FDA-registered facilities located in the USA. We recommend consulting with your physician before beginning any new supplement regimen."
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(navigationSchema) }}
      />
    </>
  );
}

