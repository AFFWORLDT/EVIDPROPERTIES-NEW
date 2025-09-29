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
              <span className="text-[#dbbb90] font-medium">Mortgages</span>
            </nav>
          </div>

          {/* Premium Badge */}
          <div className="inline-block mb-6">
            <span className="bg-[#dbbb90]/20 text-[#dbbb90] px-4 py-2 rounded-full text-sm font-serif font-medium tracking-wider uppercase border border-[#dbbb90]/30">
              Apricity Premium Service
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light text-white mb-8 leading-tight text-left">
            <span className="text-[#dbbb90] font-normal">Premium</span> Mortgage Solutions
            <br />
            <span className="text-3xl md:text-4xl lg:text-5xl font-light text-white/90 mt-2 block">
              Your Gateway to Dubai's Luxury Real Estate
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-4xl leading-relaxed text-left font-serif">
            Experience the <span className="text-[#dbbb90] font-medium">Apricity Real Estate</span> difference with our exclusive mortgage services. 
            Get the best rates, personalized guidance, and seamless approval process for your dream property in Dubai.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap gap-8 mb-10">
            <div className="flex items-center space-x-3 text-white/90">
              <Shield className="w-6 h-6 text-[#dbbb90]" />
              <span className="font-serif">Bank Partnerships</span>
            </div>
            <div className="flex items-center space-x-3 text-white/90">
              <TrendingUp className="w-6 h-6 text-[#dbbb90]" />
              <span className="font-serif">Best Rates</span>
            </div>
            <div className="flex items-center space-x-3 text-white/90">
              <Award className="w-6 h-6 text-[#dbbb90]" />
              <span className="font-serif">Expert Guidance</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 text-left">
            <Button className="group relative bg-gradient-to-r from-[#dbbb90] to-[#C2A17B] hover:from-[#C2A17B] hover:to-[#dbbb90] text-white px-10 py-6 text-lg font-serif font-medium tracking-wider rounded-none shadow-2xl hover:shadow-3xl uppercase transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 border border-[#dbbb90]/20">
              <span className="relative z-10">Get Pre-Approved Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Button>
            <Button variant="outline" className="group bg-white/10 hover:bg-white/20 text-white border-white/30 hover:border-[#dbbb90] px-10 py-6 text-lg font-serif font-medium tracking-wider rounded-none transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 backdrop-blur-sm">
              <Calculator className="w-5 h-5 mr-2" />
              <span>Mortgage Calculator</span>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/20">
            <div className="text-center">
              <div className="text-3xl font-serif font-light text-[#dbbb90] mb-2">500+</div>
              <div className="text-white/80 font-serif text-sm uppercase tracking-wider">Properties Financed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-serif font-light text-[#dbbb90] mb-2">2.5%</div>
              <div className="text-white/80 font-serif text-sm uppercase tracking-wider">Starting Interest Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-serif font-light text-[#dbbb90] mb-2">24hrs</div>
              <div className="text-white/80 font-serif text-sm uppercase tracking-wider">Pre-Approval Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
