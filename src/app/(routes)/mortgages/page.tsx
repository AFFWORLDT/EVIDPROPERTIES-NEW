"use client";

import React from 'react';
import Head from 'next/head';
import HeroSection from '@/src/view/mortgages/HeroSection';
import MainContent from '@/src/view/mortgages/MainContent';
import MortgageCalculator from '@/src/view/mortgages/MortgageCalculator';
import WhyWorkWithUs from '@/src/view/mortgages/WhyWorkWithUs';
import OurServices from '@/src/view/mortgages/OurServices';
import FAQSection from '@/src/view/mortgages/FAQSection';
import ContactForm from '@/src/view/list-property/ContactForm';
import ClientTestimonials from '@/src/view/list-property/ClientTestimonials';

export default function MortgagesPage() {
  return (
    <>
      <Head>
        <title>Premium Mortgage Services Dubai | Best Home Loans UAE | Apricity Real Estate</title>
        <meta name="description" content="Get the best mortgage rates in Dubai with Apricity Real Estate. Expert mortgage advisors, 24hr pre-approval, competitive rates from 2.5%. Trusted by 500+ clients for luxury property financing in UAE." />
        <meta name="keywords" content="mortgage Dubai, home loans UAE, property financing Dubai, mortgage calculator, best mortgage rates Dubai, Apricity Real Estate, luxury property loans, mortgage advisor Dubai, UAE mortgage broker" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Apricity Real Estate" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Premium Mortgage Services Dubai | Best Home Loans UAE | Apricity Real Estate" />
        <meta property="og:description" content="Get the best mortgage rates in Dubai with Apricity Real Estate. Expert mortgage advisors, 24hr pre-approval, competitive rates from 2.5%. Trusted by 500+ clients." />
        <meta property="og:url" content="https://apricityrealestate.ae/mortgages" />
        <meta property="og:site_name" content="Apricity Real Estate" />
        <meta property="og:image" content="https://apricityrealestate.ae/images/mortgage-og-image.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Premium Mortgage Services Dubai | Apricity Real Estate" />
        <meta name="twitter:description" content="Get the best mortgage rates in Dubai with Apricity Real Estate. Expert advisors, 24hr pre-approval, rates from 2.5%." />
        <meta name="twitter:image" content="https://apricityrealestate.ae/images/mortgage-twitter-image.jpg" />
        
        {/* Additional SEO */}
        <meta name="geo.region" content="AE-DU" />
        <meta name="geo.placename" content="Dubai" />
        <meta name="geo.position" content="25.2048;55.2708" />
        <meta name="ICBM" content="25.2048, 55.2708" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FinancialService",
            "name": "Apricity Real Estate Mortgage Services",
            "description": "Premium mortgage and home loan services in Dubai, UAE",
            "url": "https://apricityrealestate.ae/mortgages",
            "telephone": "+971-55-877-7152",
            "email": "info@apricityrealestate.ae",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Dubai",
              "addressCountry": "AE"
            },
            "serviceType": "Mortgage Services",
            "areaServed": "Dubai, UAE",
            "offers": {
              "@type": "Offer",
              "description": "Mortgage rates starting from 2.5%",
              "price": "2.5",
              "priceCurrency": "AED"
            }
          })}
        </script>
      </Head>
      
      <div className="bg-white">
        <HeroSection />
        <MainContent />
        <MortgageCalculator />
        <WhyWorkWithUs />
        <OurServices />
        <ClientTestimonials />
        <FAQSection />
        <ContactForm />
      </div>
    </>
  );
}
