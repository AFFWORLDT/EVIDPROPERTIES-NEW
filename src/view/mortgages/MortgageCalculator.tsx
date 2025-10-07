"use client";

import React, { useState } from 'react';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Calculator, TrendingUp, Shield, Clock, DollarSign, Percent, Calendar, Home } from 'lucide-react';
import { DirhamSymbol } from '../../components/common/dirham-symbol';

export default function MortgageCalculator() {
  const [totalPrice, setTotalPrice] = useState(2000000);
  const [downPayment, setDownPayment] = useState(20);
  const [interestRate, setInterestRate] = useState(2.5);
  const [loanPeriod, setLoanPeriod] = useState(25);

  const calculateMonthlyPayment = () => {
    const loanAmount = totalPrice * (1 - downPayment / 100);
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanPeriod * 12;
    
    if (monthlyRate === 0) {
      return loanAmount / numberOfPayments;
    }
    
    const monthlyPayment = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
                          (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    
    return monthlyPayment;
  };

  const calculateTotalInterest = () => {
    const monthlyPayment = calculateMonthlyPayment();
    const loanAmount = totalPrice * (1 - downPayment / 100);
    return (monthlyPayment * loanPeriod * 12) - loanAmount;
  };

  const monthlyPayment = calculateMonthlyPayment();
  const totalInterest = calculateTotalInterest();
  const loanAmount = totalPrice * (1 - downPayment / 100);

  return (
    <section className="py-20 bg-gradient-to-br from-[#F8F6F0] via-white to-[#F2EEE8] relative overflow-hidden">
      {/* Luxury Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#dbbb90]/3 via-transparent to-[#C2A17B]/3"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#dbbb90]/20 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="text-[#dbbb90] text-xs font-serif font-medium tracking-[0.3em] uppercase">
              APRICITY MORTGAGE CALCULATOR
            </span>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#dbbb90] to-transparent mx-auto mt-3"></div>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light mb-8 text-[#1A202C] leading-tight tracking-wide">
            <span className="text-[#dbbb90] font-normal">Calculate</span> Your Dream
            <br />
            <span className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-600 mt-2 block">
              Mortgage Payments Instantly
            </span>
          </h2>
          <p className="max-w-3xl mx-auto text-base font-light text-gray-600 leading-relaxed font-serif">
            Get instant calculations for your mortgage payments with <span className="text-[#dbbb90] font-medium">Apricity Real Estate's</span> 
            premium calculator. Plan your investment with confidence and precision.
          </p>
        </div>

        {/* Bank Partners */}
        <div className="text-center mb-16">
          <h3 className="text-xl font-serif font-medium text-gray-700 mb-8 uppercase tracking-wider">
            Trusted by Leading Banks in Dubai & UAE
          </h3>
          
          {/* Bank Logos */}
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            <div className="bg-white/80 backdrop-blur-sm px-6 py-4 rounded-xl shadow-lg border border-white/20">
              <div className="text-red-600 font-bold text-lg">ADCB</div>
              <div className="text-xs text-gray-500">بنك أبوظبي التجاري</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm px-6 py-4 rounded-xl shadow-lg border border-white/20">
              <div className="text-blue-600 font-bold text-lg">Emirates NBD</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm px-6 py-4 rounded-xl shadow-lg border border-white/20">
              <div className="text-blue-600 font-bold text-lg">ADIB</div>
              <div className="text-xs text-gray-500">مصرف أبوظبي الإسلامي</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm px-6 py-4 rounded-xl shadow-lg border border-white/20">
              <div className="text-blue-600 font-bold text-lg">Mashreq</div>
              <div className="text-xs text-gray-500">المشرق</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm px-6 py-4 rounded-xl shadow-lg border border-white/20">
              <div className="text-red-600 font-bold text-lg">FAB</div>
              <div className="text-xs text-gray-500">بنك أبوظبي الأول</div>
            </div>
          </div>
        </div>

        {/* Premium Mortgage Calculator */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-2xl border border-white/20">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Calculator Inputs */}
              <div>
                <div className="flex items-center mb-8">
                  <Calculator className="w-8 h-8 text-[#dbbb90] mr-3" />
                  <h3 className="text-3xl font-serif font-light text-[#1A202C]">
                    Mortgage Calculator
                  </h3>
                </div>
                <p className="text-gray-600 mb-8 font-serif leading-relaxed">
                  Calculate your monthly payments with <span className="text-[#dbbb90] font-medium">Apricity Real Estate's</span> 
                  advanced mortgage calculator. Get instant results and plan your investment.
                </p>

                <div className="space-y-6">
                  <div>
                    <label className="flex items-center text-sm font-serif font-medium text-gray-700 mb-3">
                      <DollarSign className="w-4 h-4 text-[#dbbb90] mr-2" />
                      Property Value (<DirhamSymbol size={14} />)
                    </label>
                    <Input
                      type="number"
                      value={totalPrice}
                      onChange={(e) => setTotalPrice(Number(e.target.value))}
                      className="w-full h-14 text-lg border-[#dbbb90]/30 focus:border-[#dbbb90] rounded-xl font-serif"
                      placeholder="Enter property value"
                    />
                  </div>
                  
                  <div>
                    <label className="flex items-center text-sm font-serif font-medium text-gray-700 mb-3">
                      <Percent className="w-4 h-4 text-[#dbbb90] mr-2" />
                      Down Payment (%)
                    </label>
                    <Input
                      type="number"
                      value={downPayment}
                      onChange={(e) => setDownPayment(Number(e.target.value))}
                      className="w-full h-14 text-lg border-[#dbbb90]/30 focus:border-[#dbbb90] rounded-xl font-serif"
                      placeholder="Enter down payment percentage"
                    />
                  </div>
                  
                  <div>
                    <label className="flex items-center text-sm font-serif font-medium text-gray-700 mb-3">
                      <TrendingUp className="w-4 h-4 text-[#dbbb90] mr-2" />
                      Interest Rate (%)
                    </label>
                    <Input
                      type="number"
                      step="0.01"
                      value={interestRate}
                      onChange={(e) => setInterestRate(Number(e.target.value))}
                      className="w-full h-14 text-lg border-[#dbbb90]/30 focus:border-[#dbbb90] rounded-xl font-serif"
                      placeholder="Enter interest rate"
                    />
                  </div>
                  
                  <div>
                    <label className="flex items-center text-sm font-serif font-medium text-gray-700 mb-3">
                      <Calendar className="w-4 h-4 text-[#dbbb90] mr-2" />
                      Loan Period (Years)
                    </label>
                    <Input
                      type="number"
                      value={loanPeriod}
                      onChange={(e) => setLoanPeriod(Number(e.target.value))}
                      className="w-full h-14 text-lg border-[#dbbb90]/30 focus:border-[#dbbb90] rounded-xl font-serif"
                      placeholder="Enter loan period"
                    />
                  </div>
                </div>
              </div>

              {/* Results Display */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-[#dbbb90]/10 to-[#C2A17B]/10 rounded-2xl p-8 border border-[#dbbb90]/20">
                  <h4 className="text-xl font-serif font-medium text-[#1A202C] mb-6 text-center">
                    Your Monthly Payment
                  </h4>
                  <div className="text-center">
                    <div className="text-4xl font-serif font-light text-[#dbbb90] mb-2 flex items-center justify-center gap-2">
                      <DirhamSymbol size={24} />
                      {monthlyPayment.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                    </div>
                    <div className="text-gray-600 font-serif">per month</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <div className="text-sm text-gray-600 font-serif mb-2">Loan Amount</div>
                    <div className="text-xl font-serif font-medium text-[#1A202C] flex items-center gap-1">
                      <DirhamSymbol size={16} />
                      {loanAmount.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                    </div>
                  </div>
                  <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <div className="text-sm text-gray-600 font-serif mb-2">Total Interest</div>
                    <div className="text-xl font-serif font-medium text-[#1A202C] flex items-center gap-1">
                      <DirhamSymbol size={16} />
                      {totalInterest.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                    </div>
                  </div>
                </div>

                <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-sm text-gray-600 font-serif mb-2">Total Payment</div>
                  <div className="text-xl font-serif font-medium text-[#1A202C] flex items-center gap-1">
                    <DirhamSymbol size={16} />
                    {(loanAmount + totalInterest).toLocaleString('en-US', { maximumFractionDigits: 0 })}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-4">
                  <Button className="w-full group relative bg-gradient-to-r from-[#dbbb90] to-[#C2A17B] hover:from-[#C2A17B] hover:to-[#dbbb90] text-white px-8 py-6 text-lg font-serif font-medium tracking-wider rounded-xl shadow-xl hover:shadow-2xl uppercase transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 border border-[#dbbb90]/20">
                    <span className="relative z-10">Get Pre-Approved with Apricity</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </Button>
                  
                  <Button variant="outline" className="w-full bg-white/50 hover:bg-white/70 text-[#1A202C] border-[#dbbb90]/30 hover:border-[#dbbb90] px-8 py-6 text-lg font-serif font-medium tracking-wider rounded-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 backdrop-blur-sm">
                    <Shield className="w-5 h-5 mr-2" />
                    <span>Free Consultation</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
