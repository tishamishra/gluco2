import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "GlycoMute™ Official | Daily Blood Sugar Wellness Formula",
  description: "Experience natural glucose balance with GlycoMute. Read authentic testimonials, explore proven benefits, and purchase GlycoMute for optimal blood sugar control and sustained vitality.",
  keywords: "GlycoMute, GlycoMute official, GlycoMute buy, GlycoMute blood sugar, GlycoMute reviews, GlycoMute official website, GlycoMute online store, GlycoMute glucose support, GlycoMute supplement",
  openGraph: {
    title: "GlycoMute™ Official | Daily Blood Sugar Wellness Formula",
    description: "Experience natural glucose balance with GlycoMute. Read authentic testimonials, explore proven benefits, and purchase GlycoMute for optimal blood sugar control and sustained vitality.",
    url: "https://glycomute-order.com/",
    siteName: "GlycoMute Official",
    type: "website",
    images: [
      {
        url: "https://ik.imagekit.io/affin/glycomute/glycomute-supplement.png",
        width: 500,
        height: 500,
        alt: "GlycoMute Official Supplement",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GlycoMute™ Official | Daily Blood Sugar Wellness Formula",
    description: "Experience natural glucose balance with GlycoMute. Browse customer stories and purchase GlycoMute for optimal blood sugar management and lasting energy.",
    images: ["https://ik.imagekit.io/affin/glycomute/glycomute-supplement.png"],
  },
  alternates: {
    canonical: "https://glycomute-order.com/",
  },
  icons: {
    icon: [
      { url: "https://ik.imagekit.io/affin/glycomute/glycomute-favicon-logo-485x94.webp?updatedAt=1765391043064", type: "image/png" },
      { url: "https://ik.imagekit.io/affin/glycomute/glycomute-favicon-logo-485x94.webp?updatedAt=1765391043064", sizes: "32x32", type: "image/png" },
      { url: "https://ik.imagekit.io/affin/glycomute/glycomute-favicon-logo-485x94.webp?updatedAt=1765391043064", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "https://ik.imagekit.io/affin/glycomute/glycomute-favicon-logo-485x94.webp?updatedAt=1765391043064", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "https://ik.imagekit.io/affin/glycomute/glycomute-favicon-logo-485x94.webp?updatedAt=1765391043064",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Jost:100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i&display=swap" rel="stylesheet" />
        <link rel="icon" type="image/png" href="https://ik.imagekit.io/affin/glycomute/glycomute-favicon-logo-485x94.webp?updatedAt=1765391043064" sizes="32x32" />
        <link rel="icon" type="image/png" href="https://ik.imagekit.io/affin/glycomute/glycomute-favicon-logo-485x94.webp?updatedAt=1765391043064" sizes="16x16" />
        <link rel="shortcut icon" type="image/png" href="https://ik.imagekit.io/affin/glycomute/glycomute-favicon-logo-485x94.webp?updatedAt=1765391043064" />
        <link rel="apple-touch-icon" type="image/png" href="https://ik.imagekit.io/affin/glycomute/glycomute-favicon-logo-485x94.webp?updatedAt=1765391043064" sizes="180x180" />
        <meta name="msvalidate.01" content="DF238DB2B8BB655EFD6CF96236274D79" />
        <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="GlycoMute Official" />
        <meta name="language" content="English" />
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />
      </head>
      <body className="antialiased" style={{ fontFamily: 'Jost, sans-serif' }}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
        <Script id="disable-context-menu">
          {`
            document.addEventListener('contextmenu', event => event.preventDefault());
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
