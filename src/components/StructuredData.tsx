export default function StructuredData() {
  const baseUrl = "https://glycomutez.com";

  // Product Schema
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "GlycoMute",
    "description": "GlycoMute gives you natural help to keep your blood sugar steady and your energy even all day. This plant-based mix helps control blood sugar, helps your body use insulin better, and helps keep your body working well.",
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
          "name": "Sarah K."
        },
        "reviewBody": "GlycoMute changed how I manage my blood sugar. I have steady energy all day, and my food cravings have dropped a lot. I feel more balanced and confident about my health."
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
        "reviewBody": "Excellent supplement for blood sugar support. Ordering from the official GlycoMute site was simple and delivery was quick. My blood sugar readings are now much more stable."
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
          "text": "GlycoMute is a plant-based supplement made to help keep your blood sugar healthy and your energy steady every day. Made with natural plant extracts, it helps your body use sugar better, helps insulin work better, and helps keep your body balanced."
        }
      },
      {
        "@type": "Question",
        "name": "How does GlycoMute work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "GlycoMute works with your body to keep blood sugar in a steady, healthy range. It's not a replacement for good food and exercise—it's a daily helper that makes those habits work better by helping break down carbs better, helping your cells respond to insulin better, and keeping blood sugar stable for all-day energy."
        }
      },
      {
        "@type": "Question",
        "name": "Where can I buy GlycoMute?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "GlycoMute is only available on our official website. Visit our site to place your order and get special discount prices and limited-time deals."
        }
      },
      {
        "@type": "Question",
        "name": "Is GlycoMute safe to use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. GlycoMute has only natural plant ingredients. It's made in GMP-certified, FDA-approved factories in the United States. Always talk to your doctor before starting any new supplement."
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

