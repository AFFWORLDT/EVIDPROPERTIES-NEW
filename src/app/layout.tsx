import type React from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";

const trajanPro = localFont({
  src: [
    {
      path: "../../public/fonts/TrajanPro3Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/TrajanPro3-Bold.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-trajan",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Apricity Real Estate",
  description: "Premium real estate solutions in Dubai",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  icons: {
    icon: "/icon-logo.jpeg",
    shortcut: "/icon-logo.jpeg",
    apple: "/icon-logo.jpeg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${trajanPro.variable} antialiased`}>
      <body className="luxury-bg">
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-VVLDLMET2X"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-VVLDLMET2X');
            `,
          }}
        />
        {/* End Google tag (gtag.js) */}
        
        {/* Meta Pixel Code */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1143057474701966');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1143057474701966&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}
        {children}
      </body>
    </html>
  );
}
