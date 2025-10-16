"use client";
import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/src/components/ui/card";
import { Badge } from "@/src/components/ui/badge";
import { MapPin, Home, Waves, ShoppingBag, Car, Plane, GraduationCap, Heart } from "lucide-react";

export default function PalmJumeirahPage() {
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
              <span className="text-[#1A202C] font-normal">Palm</span> Jumeirah
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[#dbbb90] to-[#C2A17B] mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-serif">
              The world's most iconic man-made island offering unparalleled luxury waterfront living
            </p>
          </div>
          
          {/* Hero Image */}
          <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/images/palm-jumeirah-hero.jpeg"
              alt="Palm Jumeirah"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <Badge className="bg-[#dbbb90] text-white px-4 py-2 text-sm font-serif">
                Iconic Island
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
                About Palm Jumeirah
              </h2>
              <div className="space-y-4 text-gray-600 font-serif leading-relaxed">
                <p>
                  Palm Jumeirah is the world's most iconic man-made island, shaped like a palm tree 
                  and visible from space. This engineering marvel was developed by Nakheel Properties 
                  and has become synonymous with luxury living in Dubai.
                </p>
                <p>
                  The island features luxury hotels, upscale residences, high-end retail outlets, 
                  and exclusive beaches. It's home to world-renowned landmarks including Atlantis 
                  The Palm, Nakheel Mall, and numerous luxury resorts and spas.
                </p>
                <p>
                  With its unique design featuring a trunk, 17 fronds, and a crescent, Palm Jumeirah 
                  offers residents and visitors an unparalleled waterfront lifestyle. The island 
                  provides private beaches, marinas, and a vibrant nightlife scene, making it 
                  one of Dubai's most sought-after addresses.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 text-center border border-[#dbbb90]/20">
                <Home className="w-8 h-8 text-[#dbbb90] mx-auto mb-3" />
                <h3 className="font-serif font-semibold text-gray-800 mb-2">Residential Units</h3>
                <p className="text-2xl font-bold text-[#dbbb90]">4,000+</p>
              </Card>
              <Card className="p-6 text-center border border-[#dbbb90]/20">
                <Waves className="w-8 h-8 text-[#dbbb90] mx-auto mb-3" />
                <h3 className="font-serif font-semibold text-gray-800 mb-2">Beachfront</h3>
                <p className="text-sm text-gray-600">Private Beaches</p>
              </Card>
              <Card className="p-6 text-center border border-[#dbbb90]/20">
                <ShoppingBag className="w-8 h-8 text-[#dbbb90] mx-auto mb-3" />
                <h3 className="font-serif font-semibold text-gray-800 mb-2">Nakheel Mall</h3>
                <p className="text-sm text-gray-600">Luxury Shopping</p>
              </Card>
              <Card className="p-6 text-center border border-[#dbbb90]/20">
                <MapPin className="w-8 h-8 text-[#dbbb90] mx-auto mb-3" />
                <h3 className="font-serif font-semibold text-gray-800 mb-2">Location</h3>
                <p className="text-sm text-gray-600">Arabian Gulf</p>
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
              World-Class Amenities
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-serif">
              Palm Jumeirah offers unparalleled luxury amenities and entertainment options
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 border border-[#dbbb90]/20 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#dbbb90]/10 rounded-full flex items-center justify-center mr-4">
                  <Waves className="w-6 h-6 text-[#dbbb90]" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-gray-800">Atlantis The Palm</h3>
              </div>
              <p className="text-gray-600 font-serif">
                Iconic luxury resort with Aquaventure waterpark and world-class dining
              </p>
            </Card>

            <Card className="p-6 border border-[#dbbb90]/20 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#dbbb90]/10 rounded-full flex items-center justify-center mr-4">
                  <ShoppingBag className="w-6 h-6 text-[#dbbb90]" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-gray-800">Nakheel Mall</h3>
              </div>
              <p className="text-gray-600 font-serif">
                Luxury shopping destination with international brands and fine dining
              </p>
            </Card>

            <Card className="p-6 border border-[#dbbb90]/20 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#dbbb90]/10 rounded-full flex items-center justify-center mr-4">
                  <MapPin className="w-6 h-6 text-[#dbbb90]" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-gray-800">Private Beaches</h3>
              </div>
              <p className="text-gray-600 font-serif">
                Exclusive beachfront access with pristine white sand and crystal-clear waters
              </p>
            </Card>

            <Card className="p-6 border border-[#dbbb90]/20 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#dbbb90]/10 rounded-full flex items-center justify-center mr-4">
                  <GraduationCap className="w-6 h-6 text-[#dbbb90]" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-gray-800">Marina Facilities</h3>
              </div>
              <p className="text-gray-600 font-serif">
                World-class marina with yacht berths and water sports facilities
              </p>
            </Card>

            <Card className="p-6 border border-[#dbbb90]/20 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#dbbb90]/10 rounded-full flex items-center justify-center mr-4">
                  <Heart className="w-6 h-6 text-[#dbbb90]" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-gray-800">Luxury Spas</h3>
              </div>
              <p className="text-gray-600 font-serif">
                Premium spa and wellness facilities for ultimate relaxation
              </p>
            </Card>

            <Card className="p-6 border border-[#dbbb90]/20 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#dbbb90]/10 rounded-full flex items-center justify-center mr-4">
                  <Car className="w-6 h-6 text-[#dbbb90]" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-gray-800">Monorail Access</h3>
              </div>
              <p className="text-gray-600 font-serif">
                Palm Monorail connecting the island to mainland Dubai
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
              Luxury Residential Options
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-serif">
              Experience the ultimate in waterfront luxury living on Palm Jumeirah
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="overflow-hidden border border-[#dbbb90]/20 hover:shadow-lg transition-shadow">
              <div className="relative h-64">
                <Image
                  src="/images/property1.jpg"
                  alt="Luxury Villas"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-3">Beachfront Villas</h3>
                <p className="text-gray-600 font-serif mb-4">
                  Exclusive villas with private beach access and stunning sea views
                </p>
                <Badge className="bg-[#dbbb90] text-white">From AED 15M</Badge>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border border-[#dbbb90]/20 hover:shadow-lg transition-shadow">
              <div className="relative h-64">
                <Image
                  src="/images/property2.jpeg"
                  alt="Luxury Apartments"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-3">Luxury Apartments</h3>
                <p className="text-gray-600 font-serif mb-4">
                  High-end apartments with panoramic views and premium amenities
                </p>
                <Badge className="bg-[#dbbb90] text-white">From AED 3M</Badge>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border border-[#dbbb90]/20 hover:shadow-lg transition-shadow">
              <div className="relative h-64">
                <Image
                  src="/images/property3.jpeg"
                  alt="Penthouses"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-3">Penthouses</h3>
                <p className="text-gray-600 font-serif mb-4">
                  Ultra-luxury penthouses with private terraces and 360-degree views
                </p>
                <Badge className="bg-[#dbbb90] text-white">From AED 8M</Badge>
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
              Palm Jumeirah offers convenient access to Dubai's major attractions and business districts
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
              <p className="text-sm text-gray-600">15 minutes</p>
            </Card>
            
            <Card className="p-6 text-center border border-[#dbbb90]/20">
              <MapPin className="w-8 h-8 text-[#dbbb90] mx-auto mb-3" />
              <h3 className="font-serif font-semibold text-gray-800 mb-2">Dubai International Airport</h3>
              <p className="text-sm text-gray-600">30 minutes</p>
            </Card>
            
            <Card className="p-6 text-center border border-[#dbbb90]/20">
              <MapPin className="w-8 h-8 text-[#dbbb90] mx-auto mb-3" />
              <h3 className="font-serif font-semibold text-gray-800 mb-2">DIFC</h3>
              <p className="text-sm text-gray-600">25 minutes</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif font-normal mb-6 text-gray-800" style={{ letterSpacing: '0.05em' }}>
            Own a Piece of Paradise on Palm Jumeirah
          </h2>
          <p className="text-lg text-gray-600 mb-8 font-serif">
            Experience the ultimate in luxury waterfront living on the world's most iconic island
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

