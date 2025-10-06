"use client";

import React from 'react';
import Image from 'next/image';

export default function MainContent() {
  return (
    <section className="py-20 bg-white">
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
              Mortgage Advice, Made Simple
            </h2>
            
            <div className="space-y-6 text-[#1A202C] leading-relaxed">
              <p>
                At Apricity Real Estate, our mortgage team helps you navigate the mortgage with clarity and confidence. We translate banking terms, compare real options across leading UAE lenders, and coordinate every step—from pre-approval to handover—so your financing never holds up your move.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
