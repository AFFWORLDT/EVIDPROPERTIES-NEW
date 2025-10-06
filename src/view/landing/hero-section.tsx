import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select";
import { Input } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";
import { useState } from "react";

export default function HeroSection() {
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  const [isPriceOpen, setIsPriceOpen] = useState(false);

  const handlePriceChange = (field: "min" | "max", value: string) => {
    setPriceRange((prev) => ({ ...prev, [field]: value }));
  };

  const getPriceDisplayValue = () => {
    if (priceRange.min && priceRange.max) {
      return `${parseInt(priceRange.min).toLocaleString()} - ${parseInt(
        priceRange.max
      ).toLocaleString()}`;
    } else if (priceRange.min) {
      return `${parseInt(priceRange.min).toLocaleString()}`;
    } else if (priceRange.max) {
      return `Up to ${parseInt(priceRange.max).toLocaleString()} `;
    }
    return "Price";
  };

  // Price options starting from 250,000
  const priceOptions = [
    { value: "250000", label: "250,000" },
    { value: "500000", label: "500,000" },
    { value: "750000", label: "750,000" },
    { value: "1000000", label: "1,000,000" },
    { value: "1500000", label: "1,500,000" },
    { value: "2000000", label: "2,000,000" },
    { value: "2500000", label: "2,500,000" },
    { value: "3000000", label: "3,000,000" },
    { value: "4000000", label: "4,000,000" },
    { value: "5000000", label: "5,000,000" },
    { value: "7500000", label: "7,500,000" },
    { value: "10000000", label: "10,000,000" },
    { value: "15000000", label: "15,000,000" },
    { value: "20000000", label: "20,000,000" },
    { value: "30000000", label: "30,000,000" },
    { value: "40000000", label: "40,000,000" },
    { value: "50000000", label: "50,000,000" },
    { value: "60000000", label: "60,000,000" },
    { value: "70000000", label: "70,000,000" },
    { value: "80000000", label: "80,000,000" },
    { value: "90000000", label: "90,000,000" },
    { value: "100000000", label: "100,000,000" },
  ];

  return (
<section className="relative min-h-screen w-full flex flex-col justify-between text-center bg-gradient-to-br from-[#F8F6F0] via-white to-[#F2EEE8]">
  {/* Background Video */}
  <div className="absolute inset-0 w-full h-full">
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      className="w-full h-full object-cover z-0"
      style={{ filter: "brightness(1.2) contrast(1.1) saturate(1.1)" }}
    >
      <source src="/HERO2.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>

  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/10 z-10" />

  {/* Hero Content */}
<<<<<<< HEAD
  <div className="relative z-20 w-full h-full flex flex-col items-center justify-center px-4 pt-96">
    <div className="text-center">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl font-normal mb-4 text-[#1A202C] font-serif leading-tight tracking-tight" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 20px rgba(219,187,144,0.5)' }}>
        Real Estate – Refined for you
        
      </h1>
      
      <p className="text-sm sm:text-lg lg:text-xl uppercase text-[#dbbb90] leading-tight tracking-widest font-serif font-bold" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
        A boutique real estate company curating properties with care and integrity
=======
  <div className="relative z-20 w-full h-full flex flex-col items-center justify-center px-4 pt-32 sm:pt-48 md:pt-64 lg:pt-80 xl:pt-96">
    <div className="text-center max-w-4xl mx-auto">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-3 sm:mb-4 md:mb-6 text-white font-serif leading-tight tracking-tight px-2" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 20px rgba(219,187,144,0.5)' }}>
        Luxury Living Reimagined
      </h1>
      
      <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl uppercase text-[#dbbb90] leading-tight tracking-widest font-serif font-bold px-4" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
        EMBRACE TO A JOURNEY OF PURE SOPHISTICATION
>>>>>>> c10c545b6889a07a130a0f12a70e76e6c1f6012c
      </p>
    </div>
  </div>

  {/* Search Form */}
  <div className="relative z-20 text-white w-full mb-4 sm:mb-6 md:mb-8 lg:mb-12 flex justify-center items-center px-2 sm:px-4">
    <div className="w-full max-w-5xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-2 sm:gap-3 md:gap-4 p-3 sm:p-4 md:p-6 bg-white/95 sm:bg-black/20 backdrop-blur-md rounded-lg sm:rounded-xl md:rounded-2xl border border-white/20 shadow-2xl">
        
            {/* Location */}
            <div className="lg:col-span-1 relative">
              <div className="absolute top-2 left-3 text-xs text-white/70 max-sm:text-gray-500 z-10 font-serif">
                Location
              </div>
              <Select>
                <SelectTrigger className="w-full h-10 sm:h-12 md:h-14 text-white max-sm:text-black focus:ring-offset-0 focus:ring-transparent bg-white/10 max-sm:bg-white border border-white/30 max-sm:border-gray-300 rounded-lg pt-4 sm:pt-5 pb-2 hover:border-[#dbbb90]/50 transition-colors text-sm sm:text-base">
                  <SelectValue placeholder="Any" className="max-sm:hidden pt-2" />
                </SelectTrigger>
                <SelectContent className="bg-white text-gray-900">
                  <SelectItem value="any">Any</SelectItem>
                  <SelectItem value="dubai-marina">Dubai Marina</SelectItem>
                  <SelectItem value="downtown-dubai">Downtown Dubai</SelectItem>
                  <SelectItem value="palm-jumeirah">Palm Jumeirah</SelectItem>
                  <SelectItem value="business-bay">Business Bay</SelectItem>
                  <SelectItem value="jlt">JLT</SelectItem>
                  {/* <SelectItem value="deira">Deira</SelectItem> */}
                </SelectContent>
              </Select>
            </div>

            {/* Type */}
            <div className="lg:col-span-1 relative">
              <div className="absolute top-2 left-3 text-xs text-white/70 max-sm:text-gray-500 z-10 font-serif">
                Type
              </div>
              <Select>
                <SelectTrigger className="w-full h-10 sm:h-12 md:h-14 text-white max-sm:text-black bg-white/10 max-sm:bg-white border border-white/30 max-sm:border-gray-300 rounded-none  focus:ring-offset-0 focus:ring-transparent pt-4 sm:pt-5 pb-2 text-sm sm:text-base">
                  <SelectValue placeholder="Any" className="max-sm:hidden pt-2" />
                </SelectTrigger>
                <SelectContent className="bg-white text-gray-900">
                  <SelectItem value="any">Any</SelectItem>
                  <SelectItem value="apartment">Apartment</SelectItem>
                  <SelectItem value="villa">Villa</SelectItem>
                  <SelectItem value="penthouse">Penthouse</SelectItem>
                  <SelectItem value="townhouse">Townhouse</SelectItem>
                  <SelectItem value="studio">Studio</SelectItem>
                  <SelectItem value="Plot">Plot</SelectItem>
                  <SelectItem value="Office">Office</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Price */}
            <div className="lg:col-span-1 relative">
              <div className="absolute top-2 left-3 text-xs text-white/70 max-sm:text-gray-500 z-10 font-serif">
                Price
              </div>
              <div
                className="relative w-full h-10 sm:h-12 md:h-14 text-white max-sm:text-black bg-white/10 max-sm:bg-white border border-white/30 max-sm:border-gray-300 rounded-none  focus:ring-offset-0 focus:ring-transparent cursor-pointer flex items-center px-3 pt-4 sm:pt-5 pb-2 text-sm sm:text-base"
                onClick={() => setIsPriceOpen(!isPriceOpen)}
              >
                <span className="text-white max-sm:text-black max-sm:hidden pt-2">
                  {getPriceDisplayValue()}
                </span>
              </div>

              {isPriceOpen && (
                <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 shadow-lg z-50 p-4 w-72 max-sm:w-full">
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <label className="block text-xs text-gray-500 mb-2">
                        Min Price
                      </label>
                      <Select
                        value={priceRange.min}
                        onValueChange={(value) =>
                          handlePriceChange("min", value)
                        }
                      >
                        <SelectTrigger className="w-full h-10 text-gray-900 border-gray-300 rounded-none focus-visible:ring-0 focus-visible:ring-offset-0 border">
                          <SelectValue placeholder="Any" />
                        </SelectTrigger>
                        <SelectContent className="bg-white text-gray-900 max-h-48 overflow-y-auto">
                          <SelectItem value="any">Any</SelectItem>
                          {priceOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex-1">
                      <label className="block text-xs text-gray-500 mb-2">
                        Max Price
                      </label>
                      <Select
                        value={priceRange.max}
                        onValueChange={(value) =>
                          handlePriceChange("max", value)
                        }
                      >
                        <SelectTrigger className="w-full h-10 text-gray-900 border-gray-300 rounded-none focus-visible:ring-0 focus-visible:ring-offset-0 border">
                          <SelectValue placeholder="Any" />
                        </SelectTrigger>
                        <SelectContent className="bg-white text-gray-900 max-h-48 overflow-y-auto">
                          <SelectItem value="any">Any</SelectItem>
                          {priceOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Bedrooms */}
            <div className="lg:col-span-1 relative">
              <div className="absolute top-2 left-3 text-xs text-white/70 max-sm:text-gray-500 z-10 font-serif">
                Bedrooms
              </div>
              <Select>
                <SelectTrigger className="w-full h-10 sm:h-12 md:h-14 text-white max-sm:text-black bg-white/10 max-sm:bg-white border max-sm:border-gray-300 border-white/30 rounded-none  focus:ring-offset-0 focus:ring-transparent pt-4 sm:pt-5 pb-2 text-sm sm:text-base">
                  <SelectValue placeholder="Any" className="max-sm:hidden pt-2" />
                </SelectTrigger>
                <SelectContent className="bg-white text-gray-900">
                  <SelectItem value="any">Any</SelectItem>
                  <SelectItem value="studio">Studio</SelectItem>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="4">4</SelectItem>
                  <SelectItem value="5">5</SelectItem>
                  <SelectItem value="6+">6+</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Ref Number */}
            <div className="lg:col-span-1 relative">
              <div className="absolute top-2 left-3 text-xs text-white/70 max-sm:text-gray-500 z-10 font-serif">
                Ref Number
              </div>
              <Input
                type="text"
                placeholder=""
                className="w-full h-10 sm:h-12 md:h-14 text-white max-sm:text-black bg-white/10 max-sm:bg-white border max-sm:border-gray-300 border-white/30 rounded-none  placeholder:text-white/70 max-sm:placeholder:text-black/70 focus-visible:ring-offset-0 focus-visible:ring-transparent pt-4 sm:pt-5 pb-2 text-sm sm:text-base"
              />
            </div>

            {/* Search Button */}
            <div className="lg:col-span-1 sm:col-span-2">
              <Button className="w-full bg-gradient-to-r from-[#dbbb90] to-[#C2A17B] hover:from-[#C2A17B] hover:to-[#B8956A] text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 h-10 sm:h-12 md:h-14 uppercase tracking-wider text-xs sm:text-sm md:text-base shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
