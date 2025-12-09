import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import "./socicon.css";
import "./mobirise-sections.css";

export const metadata: Metadata = {
  title: "Mitolyn Official - Natural Fat Loss Support | USA",
  description: "Mitolyn official website supplement. Buy Mitolyn for fat loss, weight loss & energy boost. Read reviews, learn benefits & order today. USA official website.",
  keywords: "mitolyn, mitolyn official, mitolyn buy, mitolyn fat loss, mitolyn reviews, mitolyn official website supplement, mitolyn usa official website",
  openGraph: {
    title: "Mitolyn Official - Natural Fat Loss Support | USA",
    description: "Mitolyn official website supplement. Buy Mitolyn for fat loss, weight loss & energy boost. Read reviews & order today.",
    url: "https://mtolyn-us.com/",
    siteName: "Mitolyn Official",
    type: "website",
    images: [
      {
        url: "https://ik.imagekit.io/nang9yead/mitolyn-500x500.png",
        width: 500,
        height: 500,
        alt: "Mitolyn Official Supplement",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mitolyn Official - Natural Fat Loss Support",
    description: "Mitolyn official website supplement. Buy Mitolyn for fat loss & weight loss. Read reviews & order today.",
    images: ["https://ik.imagekit.io/nang9yead/mitolyn-500x500.png"],
  },
  alternates: {
    canonical: "https://mtolyn-us.com/",
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
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="msvalidate.01" content="" />
        <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="Mitolyn Official" />
        <meta name="language" content="English" />
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />
      </head>
      <body className="antialiased" style={{ fontFamily: 'Arial, sans-serif' }}>
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
