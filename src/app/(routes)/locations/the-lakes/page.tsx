"use client";
import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/src/components/ui/card";
import { Badge } from "@/src/components/ui/badge";
import { MapPin, Home, Waves, ShoppingBag, Car, Plane, GraduationCap, Heart } from "lucide-react";

export default function TheLakesPage() {
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
              <span className="text-[#1A202C] font-normal">The</span> Lakes
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[#dbbb90] to-[#C2A17B] mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-serif">
              A family-friendly community offering villas and townhouses around scenic lakes
            </p>
          </div>
          
          {/* Hero Image */}
          <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/images/the-lakes-hero.jpeg"
              alt="The Lakes"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <Badge className="bg-[#dbbb90] text-white px-4 py-2 text-sm font-serif">
                Family Community
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
                About The Lakes
              </h2>
              <div className="space-y-4 text-gray-600 font-serif leading-relaxed">
                <p>
                  The Lakes is a well-established family-friendly community developed by Emaar Properties, 
                  featuring villas and townhouses set around scenic man-made lakes and landscaped parks. 
                  This peaceful residential development offers residents a serene environment away from 
                  the city's hustle and bustle.
                </p>
                <p>
                  The community is designed with families in mind, offering spacious homes with private 
                  gardens, community swimming pools, sports courts, and children's play areas. The 
                  development features interconnected lakes, walking trails, and recreational facilities 
                  that promote an active and healthy lifestyle.
                </p>
                <p>
                  With its proximity to schools, shopping centers, and healthcare facilities, The Lakes 
                  provides residents with a self-sufficient living environment. The community offers 
                  easy access to Dubai's major highways while maintaining a peaceful suburban atmosphere.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 text-center border border-[#dbbb90]/20">
                <Home className="w-8 h-8 text-[#dbbb90] mx-auto mb-3" />
                <h3 className="font-serif font-semibold text-gray-800 mb-2">Residential Units</h3>
                <p className="text-2xl font-bold text-[#dbbb90]">1,200+</p>
              </Card>
              <Card className="p-6 text-center border border-[#dbbb90]/20">
                <Waves className="w-8 h-8 text-[#dbbb90] mx-auto mb-3" />
                <h3 className="font-serif font-semibold text-gray-800 mb-2">Man-Made Lakes</h3>
                <p className="text-sm text-gray-600">Scenic Waterways</p>
              </Card>
              <Card className="p-6 text-center border border-[#dbbb90]/20">
                <ShoppingBag className="w-8 h-8 text-[#dbbb90] mx-auto mb-3" />
                <h3 className="font-serif font-semibold text-gray-800 mb-2">Community Centers</h3>
                <p className="text-sm text-gray-600">Recreation Facilities</p>
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
              Family Amenities
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-serif">
              The Lakes offers comprehensive amenities designed for family living
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
                <h3 className="text-xl font-serif font-semibold text-gray-800">Sports Courts</h3>
              </div>
              <p className="text-gray-600 font-serif">
                Tennis courts, basketball courts, and other sports facilities
              </p>
            </Card>

            <Card className="p-6 border border-[#dbbb90]/20 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#dbbb90]/10 rounded-full flex items-center justify-center mr-4">
                  <MapPin className="w-6 h-6 text-[#dbbb90]" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-gray-800">Children's Play Areas</h3>
              </div>
              <p className="text-gray-600 font-serif">
                Safe and fun playgrounds for children of all ages
              </p>
            </Card>

            <Card className="p-6 border border-[#dbbb90]/20 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#dbbb90]/10 rounded-full flex items-center justify-center mr-4">
                  <GraduationCap className="w-6 h-6 text-[#dbbb90]" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-gray-800">Walking Trails</h3>
              </div>
              <p className="text-gray-600 font-serif">
                Scenic walking and jogging trails around the lakes
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
                Community centers with social spaces and event facilities
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
      {/* <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-normal mb-6 text-gray-800" style={{ letterSpacing: '0.05em' }}>
              Family Residences
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-serif">
              Choose from spacious villas and townhouses perfect for families
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="overflow-hidden border border-[#dbbb90]/20 hover:shadow-lg transition-shadow">
              <div className="relative h-64">
                <Image
                  src="/images/property1.jpg"
                  alt="Family Villas"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-3">Family Villas</h3>
                <p className="text-gray-600 font-serif mb-4">
                  Spacious villas with private gardens and lake views
                </p>
                <Badge className="bg-[#dbbb90] text-white">From AED 1.8M</Badge>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border border-[#dbbb90]/20 hover:shadow-lg transition-shadow">
              <div className="relative h-64">
                <Image
                  src="/images/property2.jpeg"
                  alt="Townhouses"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-3">Townhouses</h3>
                <p className="text-gray-600 font-serif mb-4">
                  Modern townhouses with community amenities and lake access
                </p>
                <Badge className="bg-[#dbbb90] text-white">From AED 1.2M</Badge>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border border-[#dbbb90]/20 hover:shadow-lg transition-shadow">
              <div className="relative h-64">
                <Image
                  src="/images/property3.jpeg"
                  alt="Lake View Homes"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-3">Lake View Homes</h3>
                <p className="text-gray-600 font-serif mb-4">
                  Homes with stunning lake views and waterfront access
                </p>
                <Badge className="bg-[#dbbb90] text-white">From AED 1.5M</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* Location & Connectivity */}
      <section className="py-16 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-normal mb-6 text-gray-800" style={{ letterSpacing: '0.05em' }}>
              Strategic Location
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-serif">
              The Lakes offers convenient access to Dubai's major attractions and business districts
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
            Find Your Perfect Family Home at The Lakes
          </h2>
          <p className="text-lg text-gray-600 mb-8 font-serif">
            Experience peaceful family living in Dubai's most established community
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

