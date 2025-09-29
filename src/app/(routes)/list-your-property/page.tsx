"use client";
import React from 'react';
import HeroSection from '../../../view/list-property/HeroSection';
import WhyApricity from '../../../view/list-property/WhyApricity';
import HowItWorks from '../../../view/list-property/HowItWorks';
import ClientTestimonials from '../../../view/list-property/ClientTestimonials';
import ContactForm from '../../../view/list-property/ContactForm';
import NewsletterSection from '../../../view/list-property/NewsletterSection';

export default function ListYourPropertyPage() {
  return (
    <div className="bg-white">
      <HeroSection />
      <WhyApricity />
      <HowItWorks />
      <ClientTestimonials />
      <ContactForm />
      <NewsletterSection />
    </div>
  );
}
