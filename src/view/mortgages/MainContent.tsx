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
            <h2 className="text-4xl font-serif font-normal text-gray-800 mb-6" style={{ letterSpacing: '0.05em' }}>
              Mortgage Advice, Made Simple
            </h2>
            
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="font-serif font-normal" style={{ letterSpacing: '0.05em' }}>
                At Apricity Real Estate, our mortgage team helps you navigate the mortgage with clarity and confidence. We translate banking terms, compare real options across leading UAE lenders, and coordinate every step—from pre-approval to handover—so your financing never holds up your move.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
