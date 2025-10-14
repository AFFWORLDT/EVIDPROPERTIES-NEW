"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from '../../components/ui/button';
import { Calculator, Shield, TrendingUp, Award } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Enhanced Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/bgImage.webp"
          alt="Luxury Mortgage Services in Dubai - Apricity Real Estate"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#dbbb90]/10 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-5xl">
          {/* Breadcrumb */}
          <div className="mb-8">
            <nav className="text-white/90 text-sm font-serif">
              <span className="hover:text-[#dbbb90] transition-colors">Home</span>
              <span className="mx-2 text-[#dbbb90]">/</span>
              <span className="hover:text-[#dbbb90] transition-colors">Services</span>
              <span className="mx-2 text-[#dbbb90]">/</span>
              <span className="text-[#dbbb90] font-serif font-normal">Mortgages</span>
            </nav>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-normal text-white mb-8 leading-tight text-left" style={{ letterSpacing: '0.05em' }}>
            <span className="text-white font-normal">Premium</span> <span className="text-white">Mortgage Solutions</span>
            <br />
            <span className="text-3xl md:text-4xl lg:text-5xl font-normal text-white/90 mt-2 block" style={{ letterSpacing: '0.05em' }}>
              Your Gateway to Dubai Real Estate
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-4xl leading-relaxed text-left font-serif font-normal" style={{ letterSpacing: '0.05em' }}>
            Experience the difference with our exclusive mortgage services. 
            Get the best rates, personalized guidance, and seamless approval process for your dream property in Dubai.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap gap-8 mb-10">
            <div className="flex items-center space-x-3 text-white/90">
              <Shield className="w-6 h-6 text-white" />
              <span className="font-serif font-normal" style={{ letterSpacing: '0.05em' }}>Bank Partnerships</span>
            </div>
            <div className="flex items-center space-x-3 text-white/90">
              <TrendingUp className="w-6 h-6 text-white" />
              <span className="font-serif font-normal" style={{ letterSpacing: '0.05em' }}>Best Rates</span>
            </div>
            <div className="flex items-center space-x-3 text-white/90">
              <Award className="w-6 h-6 text-white" />
              <span className="font-serif font-normal" style={{ letterSpacing: '0.05em' }}>Expert Guidance</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 text-left">
            <Button className="group relative bg-gradient-to-r from-[#dbbb90] to-[#C2A17B] hover:from-[#C2A17B] hover:to-[#dbbb90] text-white px-10 py-6 text-lg font-serif font-normal rounded-none shadow-2xl hover:shadow-3xl uppercase transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 border border-[#dbbb90]/20" style={{ letterSpacing: '0.05em' }}>
              <span className="relative z-10">Get Pre-Approved Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Button>
            <Button variant="outline" className="group bg-white/10 hover:bg-white/20 text-white border-white/30 hover:border-[#dbbb90] px-10 py-6 text-lg font-serif font-normal rounded-none transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 backdrop-blur-sm" style={{ letterSpacing: '0.05em' }}>
              <Calculator className="w-5 h-5 mr-2" />
              <span>Mortgage Calculator</span>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/20">
            <div className="text-center">
              <div className="text-3xl font-serif font-normal text-white mb-2" style={{ letterSpacing: '0.05em' }}>500+</div>
              <div className="text-white/80 font-serif text-sm font-normal" style={{ letterSpacing: '0.05em' }}>Properties Financed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-serif font-normal text-white mb-2" style={{ letterSpacing: '0.05em' }}>3.75%</div>
              <div className="text-white/80 font-serif text-sm font-normal" style={{ letterSpacing: '0.05em' }}>Starting Interest Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-serif font-normal text-white mb-2" style={{ letterSpacing: '0.05em' }}>24hrs</div>
              <div className="text-white/80 font-serif text-sm font-normal" style={{ letterSpacing: '0.05em' }}>Pre-Approval Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
