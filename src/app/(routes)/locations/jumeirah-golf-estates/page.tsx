"use client";
import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/src/components/ui/card";
import { Badge } from "@/src/components/ui/badge";
import { MapPin, Home, TreePine, ShoppingBag, Car, Plane, GraduationCap, Heart } from "lucide-react";

export default function JumeirahGolfEstatesPage() {
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
              <span className="text-[#1A202C] font-normal">Jumeirah</span> Golf Estates
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[#dbbb90] to-[#C2A17B] mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-serif">
              A prestigious golf community featuring two Greg Norman-designed championship courses
            </p>
          </div>
          
          {/* Hero Image */}
          <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/images/jumeirah-golf-estates-hero.jpeg"
              alt="Jumeirah Golf Estates"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <Badge className="bg-[#dbbb90] text-white px-4 py-2 text-sm font-serif">
                Championship Golf
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
                About Jumeirah Golf Estates
              </h2>
              <div className="space-y-4 text-gray-600 font-serif leading-relaxed">
                <p>
                  Jumeirah Golf Estates is a luxury residential golf community featuring over 1,500 
                  villas, townhouses, and apartments set alongside two world-class golf courses. 
                  This prestigious development is designed by Greg Norman and offers an unparalleled 
                  golfing experience.
                </p>
                <p>
                  The community features two championship courses: Fire and Earth, with the Earth 
                  Course hosting the annual DP World Tour Championship. The development combines 
                  natural beauty with modern amenities, creating a serene environment for residents 
                  and golf enthusiasts.
                </p>
                <p>
                  With its lush landscapes, state-of-the-art facilities, and proximity to Dubai's 
                  key destinations, Jumeirah Golf Estates offers residents a perfect blend of luxury 
                  living and recreational opportunities. The community is considered one of the 
                  top lifestyle estates globally.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 text-center border border-[#dbbb90]/20">
                <Home className="w-8 h-8 text-[#dbbb90] mx-auto mb-3" />
                <h3 className="font-serif font-semibold text-gray-800 mb-2">Residential Units</h3>
                <p className="text-2xl font-bold text-[#dbbb90]">1,500+</p>
              </Card>
              <Card className="p-6 text-center border border-[#dbbb90]/20">
                <TreePine className="w-8 h-8 text-[#dbbb90] mx-auto mb-3" />
                <h3 className="font-serif font-semibold text-gray-800 mb-2">Golf Courses</h3>
                <p className="text-2xl font-bold text-[#dbbb90]">2</p>
              </Card>
              <Card className="p-6 text-center border border-[#dbbb90]/20">
                <ShoppingBag className="w-8 h-8 text-[#dbbb90] mx-auto mb-3" />
                <h3 className="font-serif font-semibold text-gray-800 mb-2">Clubhouse</h3>
                <p className="text-sm text-gray-600">Premium Facilities</p>
              </Card>
              <Card className="p-6 text-center border border-[#dbbb90]/20">
                <MapPin className="w-8 h-8 text-[#dbbb90] mx-auto mb-3" />
                <h3 className="font-serif font-semibold text-gray-800 mb-2">Location</h3>
                <p className="text-sm text-gray-600">Dubai Land</p>
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
              Championship Amenities
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-serif">
              Jumeirah Golf Estates offers world-class golf facilities and luxury amenities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 border border-[#dbbb90]/20 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#dbbb90]/10 rounded-full flex items-center justify-center mr-4">
                  <TreePine className="w-6 h-6 text-[#dbbb90]" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-gray-800">Fire Course</h3>
              </div>
              <p className="text-gray-600 font-serif">
                Greg Norman-designed championship course with challenging terrain and stunning views
              </p>
            </Card>

            <Card className="p-6 border border-[#dbbb90]/20 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#dbbb90]/10 rounded-full flex items-center justify-center mr-4">
                  <TreePine className="w-6 h-6 text-[#dbbb90]" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-gray-800">Earth Course</h3>
              </div>
              <p className="text-gray-600 font-serif">
                Host of DP World Tour Championship with pristine fairways and championship conditions
              </p>
            </Card>

            <Card className="p-6 border border-[#dbbb90]/20 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#dbbb90]/10 rounded-full flex items-center justify-center mr-4">
                  <ShoppingBag className="w-6 h-6 text-[#dbbb90]" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-gray-800">Clubhouse Facilities</h3>
              </div>
              <p className="text-gray-600 font-serif">
                Premium clubhouse with dining, pro shop, and recreational facilities
              </p>
            </Card>

            <Card className="p-6 border border-[#dbbb90]/20 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#dbbb90]/10 rounded-full flex items-center justify-center mr-4">
                  <GraduationCap className="w-6 h-6 text-[#dbbb90]" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-gray-800">Golf Academy</h3>
              </div>
              <p className="text-gray-600 font-serif">
                Professional golf instruction and training facilities for all skill levels
              </p>
            </Card>

            <Card className="p-6 border border-[#dbbb90]/20 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#dbbb90]/10 rounded-full flex items-center justify-center mr-4">
                  <Heart className="w-6 h-6 text-[#dbbb90]" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-gray-800">Wellness Center</h3>
              </div>
              <p className="text-gray-600 font-serif">
                Health and wellness facilities including spa and fitness center
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
                Convenient access to Dubai's major highways and business districts
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
              Luxury Residential Options
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-serif">
              Choose from premium residential properties with golf course views
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="overflow-hidden border border-[#dbbb90]/20 hover:shadow-lg transition-shadow">
              <div className="relative h-64">
                <Image
                  src="/images/property1.jpg"
                  alt="Golf Villas"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-3">Golf Villas</h3>
                <p className="text-gray-600 font-serif mb-4">
                  Luxury villas with golf course views and premium finishes
                </p>
                <Badge className="bg-[#dbbb90] text-white">From AED 2.5M</Badge>
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
                  Modern townhouses with contemporary design and golf course access
                </p>
                <Badge className="bg-[#dbbb90] text-white">From AED 1.8M</Badge>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border border-[#dbbb90]/20 hover:shadow-lg transition-shadow">
              <div className="relative h-64">
                <Image
                  src="/images/property3.jpeg"
                  alt="Apartments"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-3">Apartments</h3>
                <p className="text-gray-600 font-serif mb-4">
                  High-rise apartments with panoramic golf course and city views
                </p>
                <Badge className="bg-[#dbbb90] text-white">From AED 1.2M</Badge>
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
              Jumeirah Golf Estates offers excellent connectivity to Dubai's major attractions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center border border-[#dbbb90]/20">
              <MapPin className="w-8 h-8 text-[#dbbb90] mx-auto mb-3" />
              <h3 className="font-serif font-semibold text-gray-800 mb-2">Downtown Dubai</h3>
              <p className="text-sm text-gray-600">25 minutes</p>
            </Card>
            
            <Card className="p-6 text-center border border-[#dbbb90]/20">
              <MapPin className="w-8 h-8 text-[#dbbb90] mx-auto mb-3" />
              <h3 className="font-serif font-semibold text-gray-800 mb-2">Dubai Marina</h3>
              <p className="text-sm text-gray-600">30 minutes</p>
            </Card>
            
            <Card className="p-6 text-center border border-[#dbbb90]/20">
              <MapPin className="w-8 h-8 text-[#dbbb90] mx-auto mb-3" />
              <h3 className="font-serif font-semibold text-gray-800 mb-2">Dubai International Airport</h3>
              <p className="text-sm text-gray-600">35 minutes</p>
            </Card>
            
            <Card className="p-6 text-center border border-[#dbbb90]/20">
              <MapPin className="w-8 h-8 text-[#dbbb90] mx-auto mb-3" />
              <h3 className="font-serif font-semibold text-gray-800 mb-2">Dubai Hills Estate</h3>
              <p className="text-sm text-gray-600">20 minutes</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif font-normal mb-6 text-gray-800" style={{ letterSpacing: '0.05em' }}>
            Live the Golf Lifestyle at Jumeirah Golf Estates
          </h2>
          <p className="text-lg text-gray-600 mb-8 font-serif">
            Experience luxury living with championship golf at your doorstep
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
