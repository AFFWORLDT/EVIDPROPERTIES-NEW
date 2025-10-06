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
            <h2 className="text-4xl font-bold text-[#1A202C] mb-6">
              Why Apricity Mortgage Services?
            </h2>
            
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#1A202C] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-lg text-[#1A202C] font-medium">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            <div className="mb-8">
              <p className="text-[#1A202C] text-lg leading-relaxed">
                Ready to explore your options? Book a no-obligation chat with the apricity mortgage team and get a financing plan that fits the way you want to live and invest in Dubai.
              </p>
            </div>

            <Button className="bg-[#1A202C] hover:bg-[#1A202C]/90 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-colors duration-200">
              Get a free consultation →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
