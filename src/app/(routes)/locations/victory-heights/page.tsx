"use client";
import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/src/components/ui/card";
import { Badge } from "@/src/components/ui/badge";
import { MapPin, Home, TreePine, ShoppingBag, Car, Plane, GraduationCap, Heart } from "lucide-react";

export default function VictoryHeightsPage() {
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
              <span className="text-[#1A202C] font-normal">Victory</span> Heights
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[#dbbb90] to-[#C2A17B] mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-serif">
              A golf course community within Dubai Sports City offering luxury living and sports facilities
            </p>
          </div>
          
          {/* Hero Image */}
          <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/images/victory-heights-hero.jpg"
              alt="Victory Heights"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <Badge className="bg-[#dbbb90] text-white px-4 py-2 text-sm font-serif">
                Golf Community
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
                About Victory Heights
              </h2>
              <div className="space-y-4 text-gray-600 font-serif leading-relaxed">
                <p>
                  Victory Heights is a prestigious residential community located within Dubai Sports City, 
                  featuring villas and townhouses set around the Els Club Golf Course. This unique 
                  development offers residents a blend of luxury living and sports facilities.
                </p>
                <p>
                  The community emphasizes a healthy and active lifestyle with its golf course, parks, 
                  walking trails, and sports facilities. Victory Heights provides residents with access 
                  to world-class sporting amenities while maintaining a peaceful residential environment.
                </p>
                <p>
                  With its proximity to Dubai Sports City's facilities including cricket stadium, 
                  football academy, and other sports venues, Victory Heights offers residents a 
                  unique living experience that combines luxury with an active lifestyle.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 text-center border border-[#dbbb90]/20">
                <Home className="w-8 h-8 text-[#dbbb90] mx-auto mb-3" />
                <h3 className="font-serif font-semibold text-gray-800 mb-2">Residential Units</h3>
                <p className="text-2xl font-bold text-[#dbbb90]">800+</p>
              </Card>
              <Card className="p-6 text-center border border-[#dbbb90]/20">
                <TreePine className="w-8 h-8 text-[#dbbb90] mx-auto mb-3" />
                <h3 className="font-serif font-semibold text-gray-800 mb-2">Golf Course</h3>
                <p className="text-sm text-gray-600">Els Club</p>
              </Card>
              <Card className="p-6 text-center border border-[#dbbb90]/20">
                <ShoppingBag className="w-8 h-8 text-[#dbbb90] mx-auto mb-3" />
                <h3 className="font-serif font-semibold text-gray-800 mb-2">Sports Facilities</h3>
                <p className="text-sm text-gray-600">Multiple</p>
              </Card>
              <Card className="p-6 text-center border border-[#dbbb90]/20">
                <MapPin className="w-8 h-8 text-[#dbbb90] mx-auto mb-3" />
                <h3 className="font-serif font-semibold text-gray-800 mb-2">Location</h3>
                <p className="text-sm text-gray-600">Dubai Sports City</p>
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
              Sports Amenities
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-serif">
              Victory Heights offers world-class sports facilities and recreational amenities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 border border-[#dbbb90]/20 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#dbbb90]/10 rounded-full flex items-center justify-center mr-4">
                  <TreePine className="w-6 h-6 text-[#dbbb90]" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-gray-800">Els Club Golf Course</h3>
              </div>
              <p className="text-gray-600 font-serif">
                Championship golf course designed by Ernie Els with stunning views
              </p>
            </Card>

            <Card className="p-6 border border-[#dbbb90]/20 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#dbbb90]/10 rounded-full flex items-center justify-center mr-4">
                  <ShoppingBag className="w-6 h-6 text-[#dbbb90]" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-gray-800">Sports Facilities</h3>
              </div>
              <p className="text-gray-600 font-serif">
                Access to cricket stadium, football academy, and other sports venues
              </p>
            </Card>

            <Card className="p-6 border border-[#dbbb90]/20 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#dbbb90]/10 rounded-full flex items-center justify-center mr-4">
                  <MapPin className="w-6 h-6 text-[#dbbb90]" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-gray-800">Parks & Walking Trails</h3>
              </div>
              <p className="text-gray-600 font-serif">
                Scenic parks and walking trails for fitness enthusiasts
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
                Professional golf instruction and training facilities
              </p>
            </Card>

            <Card className="p-6 border border-[#dbbb90]/20 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#dbbb90]/10 rounded-full flex items-center justify-center mr-4">
                  <Heart className="w-6 h-6 text-[#dbbb90]" />
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
              Sports Living Residences
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-serif">
              Choose from villas and townhouses with golf course views and sports amenities
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
                  Luxury villas with golf course views and premium amenities
                </p>
                <Badge className="bg-[#dbbb90] text-white">From AED 2M</Badge>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border border-[#dbbb90]/20 hover:shadow-lg transition-shadow">
              <div className="relative h-64">
                <Image
                  src="/images/property2.jpeg"
                  alt="Sports Townhouses"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-3">Sports Townhouses</h3>
                <p className="text-gray-600 font-serif mb-4">
                  Modern townhouses with access to sports facilities
                </p>
                <Badge className="bg-[#dbbb90] text-white">From AED 1.5M</Badge>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border border-[#dbbb90]/20 hover:shadow-lg transition-shadow">
              <div className="relative h-64">
                <Image
                  src="/images/property3.jpeg"
                  alt="Executive Residences"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-3">Executive Residences</h3>
                <p className="text-gray-600 font-serif mb-4">
                  Premium residences with golf course access and luxury finishes
                </p>
                <Badge className="bg-[#dbbb90] text-white">From AED 2.5M</Badge>
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
              Victory Heights offers convenient access to Dubai's major attractions and sports facilities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center border border-[#dbbb90]/20">
              <MapPin className="w-8 h-8 text-[#dbbb90] mx-auto mb-3" />
              <h3 className="font-serif font-semibold text-gray-800 mb-2">Downtown Dubai</h3>
              <p className="text-sm text-gray-600">30 minutes</p>
            </Card>
            
            <Card className="p-6 text-center border border-[#dbbb90]/20">
              <MapPin className="w-8 h-8 text-[#dbbb90] mx-auto mb-3" />
              <h3 className="font-serif font-semibold text-gray-800 mb-2">Dubai Marina</h3>
              <p className="text-sm text-gray-600">35 minutes</p>
            </Card>
            
            <Card className="p-6 text-center border border-[#dbbb90]/20">
              <MapPin className="w-8 h-8 text-[#dbbb90] mx-auto mb-3" />
              <h3 className="font-serif font-semibold text-gray-800 mb-2">Dubai International Airport</h3>
              <p className="text-sm text-gray-600">40 minutes</p>
            </Card>
            
            <Card className="p-6 text-center border border-[#dbbb90]/20">
              <MapPin className="w-8 h-8 text-[#dbbb90] mx-auto mb-3" />
              <h3 className="font-serif font-semibold text-gray-800 mb-2">Dubai Sports City</h3>
              <p className="text-sm text-gray-600">5 minutes</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif font-normal mb-6 text-gray-800" style={{ letterSpacing: '0.05em' }}>
            Live the Sports Lifestyle at Victory Heights
          </h2>
          <p className="text-lg text-gray-600 mb-8 font-serif">
            Experience luxury living with championship golf and sports facilities
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

