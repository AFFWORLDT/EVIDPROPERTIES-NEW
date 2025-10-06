"use client";

import React from 'react';
import { 
  Home, 
  Camera, 
  TrendingUp, 
  Check, 
  BarChart3, 
  FileCheck 
} from 'lucide-react';

export default function WhyWorkWithUs() {
  const features = [
    {
      icon: <Home className="w-6 h-6" />,
      title: "Personalised borrowing plan",
      description: "We review your goals, budget, and timeline to outline the most suitable structures (fixed, variable, offset, and Sharia-compliant options)."
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Market-wide lender comparison",
      description: "We source competitive rates, fees, and terms from multiple banks—not just one—so you can choose with confidence."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Pre-approval, fast-tracked",
      description: "We assemble and submit your documents and guide you on eligibility (LTV, DTI, income proof, credit checks) to secure a strong pre-approval before you make an offer."
    },
    {
      icon: <Check className="w-6 h-6" />,
      title: "Clear costs & timelines",
      description: "From valuation and arrangement fees to insurance and transfer costs, we map out what's due and when—no surprises."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "End-to-end coordination",
      description: "We liaise with the bank, broker, developer/seller, and conveyancer to keep your file moving and your milestones on track."
    },
    {
      icon: <FileCheck className="w-6 h-6" />,
      title: "Specialist scenarios",
      description: "Support for first-time buyers, non-residents/expats, self-employed income, buy-to-let and portfolio investors, off-plan and post-handover plans, and refinancing/equity-release."
    },
    {
      icon: <Home className="w-6 h-6" />,
      title: "Ongoing guidance",
      description: "If markets shift, we review your options—rate switches, partial settlements, or refinance routes—to help you stay efficient over time."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1A202C] mb-4">
            How we help
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-[#1A202C] rounded-full flex items-center justify-center text-white mb-6">
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-bold text-[#1A202C] mb-4">
                {feature.title}
              </h3>
              
              <p className="text-[#1A202C] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
