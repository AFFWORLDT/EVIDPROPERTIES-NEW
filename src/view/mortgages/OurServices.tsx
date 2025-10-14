"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from '../../components/ui/button';
import { Check } from 'lucide-react';

export default function OurServices() {
  const benefits = [
    "Boutique service, senior expertise, Dubai market know-how",
    "Transparent advice focused on total cost—not just the headline rate",
    "A calm, step-by-step experience tailored to your purchase"
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/images/building.jpg"
                alt="Professional mortgage consultation"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl font-serif font-normal text-gray-800 mb-6" style={{ letterSpacing: '0.05em' }}>
              Why Apricity Mortgage Services?
            </h2>
            
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-lg text-gray-700 font-serif font-normal" style={{ letterSpacing: '0.05em' }}>
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            <div className="mb-8">
              <p className="text-gray-700 text-lg leading-relaxed font-serif font-normal" style={{ letterSpacing: '0.05em' }}>
                Ready to explore your options? Book a no-obligation chat with the apricity mortgage team and get a financing plan that fits the way you want to live and invest in Dubai.
              </p>
            </div>

            <Button className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 text-lg font-serif font-normal rounded-lg transition-colors duration-200" style={{ letterSpacing: '0.05em' }}>
              Get a free consultation →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
