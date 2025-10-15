"use client";
import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/src/components/ui/card";
import { Badge } from "@/src/components/ui/badge";
import { MapPin, Home, Waves, ShoppingBag, Car, Plane, GraduationCap, Heart } from "lucide-react";

export default function TheSpringsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F8F6F0] via-white to-[#F2EEE8]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/10"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#dbbb90]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#C2A17B]/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-6xl md:text-7xl font-serif font-normal mb-6 text-gray-800 leading-tight" style={{ letterSpacing: '0.05em' }}>
              <span className="text-[#1A202C] font-normal">The</span> Springs
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[#dbbb90] to-[#C2A17B] mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-serif">
              A gated community featuring townhouses set amidst scenic waterways and lush greenery
            </p>
          </div>
          
          {/* Hero Image */}
          <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/images/the-springs-hero.webp"
              alt="The Springs"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <Badge className="bg-[#dbbb90] text-white px-4 py-2 text-sm font-serif">
                Gated Community
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif font-normal mb-6 text-gray-800" style={{ letterSpacing: '0.05em' }}>
                About The Springs
              </h2>
              <div className="space-y-4 text-gray-600 font-serif leading-relaxed">
                <p>
                  The Springs is a gated community developed by Emaar Properties, featuring townhouses 
                  and villas set amidst scenic waterways and landscaped gardens. This peaceful residential 
                  development offers residents a serene environment with interconnected lakes and lush greenery.
                </p>
                <p>
                  The community is designed with families and professionals in mind, offering spacious 
                  homes with private gardens and access to community amenities. The Springs provides 
                  a tranquil suburban lifestyle while maintaining easy access to Dubai's urban centers.
                </p>
                <p>
                  With its swimming pools, parks, and retail centers, The Springs creates a self-sufficient 
                  living environment. The community fosters a close-knit neighborhood atmosphere with 
                  its well-planned layout and recreational facilities.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 text-center border border-[#dbbb90]/20">
                <Home className="w-8 h-8 text-[#dbbb90] mx-auto mb-3" />
                <h3 className="font-serif font-semibold text-gray-800 mb-2">Townhouses</h3>
                <p className="text-2xl font-bold text-[#dbbb90]">1,000+</p>
              </Card>
              <Card className="p-6 text-center border border-[#dbbb90]/20">
                <Waves className="w-8 h-8 text-[#dbbb90] mx-auto mb-3" />
                <h3 className="font-serif font-semibold text-gray-800 mb-2">Interconnected Lakes</h3>
                <p className="text-sm text-gray-600">Scenic Waterways</p>
              </Card>
              <Card className="p-6 text-center border border-[#dbbb90]/20">
                <ShoppingBag className="w-8 h-8 text-[#dbbb90] mx-auto mb-3" />
                <h3 className="font-serif font-semibold text-gray-800 mb-2">Community Pools</h3>
                <p className="text-sm text-gray-600">Swimming Facilities</p>
              </Card>
              <Card className="p-6 text-center border border-[#dbbb90]/20">
                <MapPin className="w-8 h-8 text-[#dbbb90] mx-auto mb-3" />
                <h3 className="font-serif font-semibold text-gray-800 mb-2">Location</h3>
                <p className="text-sm text-gray-600">Dubai Hills</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-16 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-normal mb-6 text-gray-800" style={{ letterSpacing: '0.05em' }}>
              Community Amenities
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-serif">
              The Springs offers comprehensive amenities for comfortable living
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 border border-[#dbbb90]/20 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#dbbb90]/10 rounded-full flex items-center justify-center mr-4">
                  <Waves className="w-6 h-6 text-[#dbbb90]" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-gray-800">Community Swimming Pools</h3>
              </div>
              <p className="text-gray-600 font-serif">
                Multiple swimming pools for residents to enjoy year-round
              </p>
            </Card>

            <Card className="p-6 border border-[#dbbb90]/20 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#dbbb90]/10 rounded-full flex items-center justify-center mr-4">
                  <ShoppingBag className="w-6 h-6 text-[#dbbb90]" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-gray-800">Parks & Gardens</h3>
              </div>
              <p className="text-gray-600 font-serif">
                Landscaped parks and gardens throughout the community
              </p>
            </Card>

            <Card className="p-6 border border-[#dbbb90]/20 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#dbbb90]/10 rounded-full flex items-center justify-center mr-4">
                  <MapPin className="w-6 h-6 text-[#dbbb90]" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-gray-800">Retail Centers</h3>
              </div>
              <p className="text-gray-600 font-serif">
                Shopping centers and retail outlets within the community
              </p>
            </Card>

            <Card className="p-6 border border-[#dbbb90]/20 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#dbbb90]/10 rounded-full flex items-center justify-center mr-4">
                  <GraduationCap className="w-6 h-6 text-[#dbbb90]" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-gray-800">Fitness Centers</h3>
              </div>
              <p className="text-gray-600 font-serif">
                Community fitness centers and sports facilities
              </p>
            </Card>

            <Card className="p-6 border border-[#dbbb90]/20 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#dbbb90]/10 rounded-full flex items-center justify-center mr-4">
                  <Heart className="w-6 h-6 text-[#dbbb90]" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-gray-800">Community Centers</h3>
              </div>
              <p className="text-gray-600 font-serif">
                Social spaces and community centers for residents
              </p>
            </Card>

            <Card className="p-6 border border-[#dbbb90]/20 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#dbbb90]/10 rounded-full flex items-center justify-center mr-4">
                  <Car className="w-6 h-6 text-[#dbbb90]" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-gray-800">Easy Access</h3>
              </div>
              <p className="text-gray-600 font-serif">
                Convenient access to major highways and Dubai's key destinations
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Property Types Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-normal mb-6 text-gray-800" style={{ letterSpacing: '0.05em' }}>
              Townhouse Living
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-serif">
              Choose from modern townhouses and villas in a gated community setting
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="overflow-hidden border border-[#dbbb90]/20 hover:shadow-lg transition-shadow">
              <div className="relative h-64">
                <Image
                  src="/images/property1.jpg"
                  alt="Townhouses"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-3">Townhouses</h3>
                <p className="text-gray-600 font-serif mb-4">
                  Modern townhouses with private gardens and community amenities
                </p>
                <Badge className="bg-[#dbbb90] text-white">From AED 1M</Badge>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border border-[#dbbb90]/20 hover:shadow-lg transition-shadow">
              <div className="relative h-64">
                <Image
                  src="/images/property2.jpeg"
                  alt="Waterfront Townhouses"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-3">Waterfront Townhouses</h3>
                <p className="text-gray-600 font-serif mb-4">
                  Townhouses with lake views and waterfront access
                </p>
                <Badge className="bg-[#dbbb90] text-white">From AED 1.3M</Badge>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border border-[#dbbb90]/20 hover:shadow-lg transition-shadow">
              <div className="relative h-64">
                <Image
                  src="/images/property3.jpeg"
                  alt="Garden Villas"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-3">Garden Villas</h3>
                <p className="text-gray-600 font-serif mb-4">
                  Villas surrounded by landscaped gardens and natural beauty
                </p>
                <Badge className="bg-[#dbbb90] text-white">From AED 1.8M</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location & Connectivity */}
      <section className="py-16 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-normal mb-6 text-gray-800" style={{ letterSpacing: '0.05em' }}>
              Strategic Location
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-serif">
              The Springs offers convenient access to Dubai's major attractions and business districts
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center border border-[#dbbb90]/20">
              <MapPin className="w-8 h-8 text-[#dbbb90] mx-auto mb-3" />
              <h3 className="font-serif font-semibold text-gray-800 mb-2">Downtown Dubai</h3>
              <p className="text-sm text-gray-600">20 minutes</p>
            </Card>
            
            <Card className="p-6 text-center border border-[#dbbb90]/20">
              <MapPin className="w-8 h-8 text-[#dbbb90] mx-auto mb-3" />
              <h3 className="font-serif font-semibold text-gray-800 mb-2">Dubai Marina</h3>
              <p className="text-sm text-gray-600">25 minutes</p>
            </Card>
            
            <Card className="p-6 text-center border border-[#dbbb90]/20">
              <MapPin className="w-8 h-8 text-[#dbbb90] mx-auto mb-3" />
              <h3 className="font-serif font-semibold text-gray-800 mb-2">Dubai International Airport</h3>
              <p className="text-sm text-gray-600">30 minutes</p>
            </Card>
            
            <Card className="p-6 text-center border border-[#dbbb90]/20">
              <MapPin className="w-8 h-8 text-[#dbbb90] mx-auto mb-3" />
              <h3 className="font-serif font-semibold text-gray-800 mb-2">Dubai Hills Mall</h3>
              <p className="text-sm text-gray-600">10 minutes</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif font-normal mb-6 text-gray-800" style={{ letterSpacing: '0.05em' }}>
            Experience Gated Community Living at The Springs
          </h2>
          <p className="text-lg text-gray-600 mb-8 font-serif">
            Discover peaceful living in Dubai's most established gated community
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#dbbb90] text-white px-8 py-4 rounded-lg font-serif font-semibold hover:bg-[#C2A17B] transition-colors">
              View Properties
            </button>
            <button className="border border-[#dbbb90] text-[#dbbb90] px-8 py-4 rounded-lg font-serif font-semibold hover:bg-[#dbbb90] hover:text-white transition-colors">
              Contact Agent
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
