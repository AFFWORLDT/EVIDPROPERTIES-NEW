"use client";

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FAQSection() {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const faqs = [
    {
      question: "How does Apricity Real Estate help with mortgage affordability calculations?",
      answer: "At Apricity Real Estate, our expert mortgage advisors provide personalized affordability calculations based on your unique financial situation. We work with over 20 major banks in Dubai to ensure you get the best possible terms. Your mortgage eligibility depends on factors like income (typically 7x annual income cap), employment type, nationality, and credit history. Our team provides comprehensive guidance tailored to your circumstances, helping you understand exactly how much you can borrow and what your monthly payments will be."
    },
    {
      question: "What makes Apricity Real Estate's mortgage services different?",
      answer: "Apricity Real Estate stands out with our premium mortgage advisory services. We offer exclusive partnerships with leading UAE banks, competitive interest rates starting from 2.5%, and 24-hour pre-approval processing. Our experienced team provides end-to-end support, from initial consultation to loan approval, ensuring a seamless experience. We've successfully financed over 500+ luxury properties in Dubai, making us the trusted choice for discerning clients seeking premium real estate financing solutions."
    },

    {
      question: "Why do banks require security checks for mortgages in Dubai?",
      answer: "Security checks are essential for banks to assess your creditworthiness and financial stability. These checks include credit history review, employment verification, income assessment, and background checks. At Apricity Real Estate, we guide you through this process, ensuring all documentation is properly prepared to maximize your approval chances. Our relationships with major banks help streamline this process, often resulting in faster approvals and better terms."
    },
    {
      question: "Can housing allowances and bonuses be included in mortgage calculations?",
      answer: "Yes, many banks in Dubai consider housing allowances and regular bonuses as part of your income for mortgage calculations. Typically, 50-100% of housing allowances and 30-50% of documented bonuses can be included. At Apricity Real Estate, we work with banks that offer the most favorable terms for including these income sources, helping you maximize your borrowing capacity. We ensure all income sources are properly documented to meet bank requirements."
    },
    {
      question: "What is an NOC and when is it required?",
      answer: "NOC (No Objection Certificate) is a document confirming no legal objections to a property transaction. It's typically required for certain property types, developments, or when dealing with specific authorities. At Apricity Real Estate, our legal team handles all NOC requirements, ensuring smooth property transactions. We work closely with developers, authorities, and banks to obtain necessary certificates, saving you time and potential complications."
    },
    {
      question: "Is mortgage protection insurance available in Dubai?",
      answer: "Yes, comprehensive mortgage protection insurance is available in the UAE, covering mortgage payments in case of accident, sickness, or unemployment. At Apricity Real Estate, we partner with leading insurance providers to offer competitive protection plans. This insurance provides peace of mind and is often required by banks for certain loan amounts. Our advisors help you choose the right coverage level based on your specific needs and budget."
    },
    {
      question: "Can non-resident investors get mortgages for Dubai properties?",
      answer: "Absolutely! Non-resident investors can obtain mortgages in Dubai, though terms may differ from resident loans. Typically, non-residents need higher down payments (25-50%) and may face different interest rates. At Apricity Real Estate, we specialize in helping international investors secure financing for Dubai properties. Our extensive network of international banks and our expertise in cross-border transactions make us the ideal partner for non-resident property investments."
    },
    {
      question: "How does Apricity Real Estate handle off-plan property financing?",
      answer: "Apricity Real Estate has extensive experience with off-plan property financing in Dubai. We work with banks that offer construction-linked payment plans, where you only pay interest during construction and principal payments begin upon completion. Our team ensures proper documentation, handles developer agreements, and manages the entire financing process. We've successfully financed numerous off-plan projects across Dubai's most prestigious developments."
    },
    {
      question: "What insurance requirements exist for UAE mortgages?",
      answer: "Most UAE banks require property insurance (building insurance) and may require life insurance for the mortgage amount. At Apricity Real Estate, we coordinate with insurance providers to ensure you meet all bank requirements while getting competitive rates. Our insurance partners offer comprehensive coverage options, and we handle all documentation to ensure smooth loan processing. We also help you understand optional coverage that might benefit your specific situation."
    },
    {
      question: "How long does the mortgage approval process take with Apricity Real Estate?",
      answer: "With Apricity Real Estate's streamlined process and bank partnerships, we typically achieve pre-approval within 24 hours and full approval within 5-7 business days. Our experienced team ensures all documentation is complete and accurate from the start, avoiding delays. We maintain direct relationships with bank decision-makers, allowing for faster processing and better communication throughout the approval process."
    },
    {
      question: "What are the current mortgage interest rates in Dubai?",
      answer: "Current mortgage rates in Dubai start from 2.5% for residents and vary based on loan-to-value ratio, property type, and borrower profile. At Apricity Real Estate, we negotiate competitive rates with our partner banks, often securing rates below market average for our clients. Rates are typically lower for completed properties compared to off-plan, and residents generally receive better rates than non-residents. Our advisors provide real-time rate information and help you secure the best possible terms."
    }
  ];

  const toggleFAQ = (index: number) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#F8F6F0] via-white to-[#F2EEE8] relative overflow-hidden">
      {/* Luxury Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#dbbb90]/3 via-transparent to-[#C2A17B]/3"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#dbbb90]/20 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="text-[#dbbb90] text-xs font-serif font-medium tracking-[0.3em] uppercase">
                APRICITY MORTGAGE FAQS
              </span>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#dbbb90] to-transparent mx-auto mt-3"></div>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light mb-8 text-[#1A202C] leading-tight tracking-wide">
              <span className="text-[#dbbb90] font-normal">Expert</span> Answers to
              <br />
              <span className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-600 mt-2 block">
                Your Mortgage Questions
              </span>
            </h2>
            <p className="max-w-3xl mx-auto text-base font-light text-gray-600 leading-relaxed font-serif">
              Get comprehensive answers to all your mortgage questions from <span className="text-[#dbbb90] font-medium">Apricity Real Estate's</span> 
              expert team. We're here to guide you through every step of your mortgage journey.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gradient-to-r hover:from-[#dbbb90]/5 hover:to-transparent transition-all duration-300"
                >
                  <span className="font-serif font-medium text-[#1A202C] pr-6 text-lg leading-relaxed">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#dbbb90]/10 flex items-center justify-center group-hover:bg-[#dbbb90]/20 transition-colors duration-300">
                    {expandedIndex === index ? (
                      <Minus className="w-5 h-5 text-[#dbbb90]" />
                    ) : (
                      <Plus className="w-5 h-5 text-[#dbbb90]" />
                    )}
                  </div>
                </button>
                
                {expandedIndex === index && (
                  <div className="px-8 pb-6">
                    <div className="border-t border-[#dbbb90]/20 pt-6">
                      <p className="text-gray-700 leading-relaxed font-serif text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl">
              <h3 className="text-2xl font-serif font-light text-[#1A202C] mb-4">
                Still Have Questions?
              </h3>
              <p className="text-gray-600 font-serif mb-6">
                Our <span className="text-[#dbbb90] font-medium">Apricity Real Estate</span> mortgage experts are here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group relative bg-gradient-to-r from-[#dbbb90] to-[#C2A17B] hover:from-[#C2A17B] hover:to-[#dbbb90] text-white px-8 py-4 text-lg font-serif font-medium tracking-wider rounded-xl shadow-xl hover:shadow-2xl uppercase transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 border border-[#dbbb90]/20">
                  <span className="relative z-10">Get Expert Consultation</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </button>
                <button className="bg-white/50 hover:bg-white/70 text-[#1A202C] border border-[#dbbb90]/30 hover:border-[#dbbb90] px-8 py-4 text-lg font-serif font-medium tracking-wider rounded-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 backdrop-blur-sm">
                  <span>Call +971-55-877-7152</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
