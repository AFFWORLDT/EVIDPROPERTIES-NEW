"use client";
import CommunitiesCard from "@/src/view/communities/communitiesCard";
import React from "react";

const LOCATIONS = [
  { name: "Dubai Hills Estate", href: "/locations/dubai-hills", image: "/images/Dubai-Hills-Estate.jpeg" },
  { name: "Tilal Al Ghaf", href: "/locations/tilal-al-ghaf", image: "/images/tilal-al-ghaf-hero.webp" },
  { name: "Palm Jumeirah", href: "/locations/palm-jumeirah", image: "/images/palm-jumeirah-hero.jpeg" },
  { name: "Jumeirah Golf Estates", href: "/locations/jumeirah-golf-estates", image: "/images/jumeirah-golf-estates-hero.jpeg" },
  { name: "Emirates Hills", href: "/locations/emirates-hills", image: "/images/emirates-hills-hero.jpg" },
  { name: "Al Barari", href: "/locations/al-barari", image: "/images/al-barari-hero.jpeg" },
  { name: "Dubai Marina", href: "/locations/dubai-marina", image: "/images/dubai-marina-hero.jpeg" },
  { name: "Jumeirah Islands", href: "/locations/jumeirah-islands", image: "/images/jumeirah-islands-hero.jpg" },
  { name: "The Lakes", href: "/locations/the-lakes", image: "/images/the-lakes-hero.jpeg" },
  { name: "The Meadows", href: "/locations/the-meadows", image: "/images/the-meadows-hero.jpg" },
  { name: "The Springs", href: "/locations/the-springs", image: "/images/the-springs-hero.webp" },
  { name: "Victory Heights", href: "/locations/victory-heights", image: "/images/victory-heights-hero.jpg" },
  { name: "Arabian Ranches", href: "/locations/arabian-ranches", image: "/images/arabian-ranches-hero.webp" },
  { name: "DIFC", href: "/locations/difc", image: "/images/difc-hero.jpeg" },
];

function Communities() {
  return (
    <div>
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-[#F8F6F0] via-white to-[#F2EEE8] relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/5 via-transparent to-black/5"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#dbbb90]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#C2A17B]/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-serif font-normal mb-8 text-gray-800 leading-tight" style={{ letterSpacing: '0.05em' }}>
            <span className="text-[#1A202C] font-normal">UAE</span> Communities
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#dbbb90] to-[#C2A17B] mx-auto mb-8"></div>
        </div>
      </section>
      <div className="mx-auto px-4 py-16 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-normal text-gray-800 mb-6" style={{ letterSpacing: '0.05em' }}>
            <span className="text-[#1A202C] font-normal">Neighbourhoods</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed font-serif">
            Explore Dubai’s premium communities and neighborhoods curated by Apricity Real Estate.
          </p>
        </div>
      </div>
      
      <div className="bg-gradient-to-br from-[#F8F6F0] via-white to-[#F2EEE8] py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 container mx-auto max-w-7xl">
          {LOCATIONS.map((loc) => (
            <CommunitiesCard
              key={loc.href}
              data={{
                name: loc.name,
                city: "Dubai",
                photos: [loc.image],
                latitude: 0,
                longitude: 0,
                sell_properties_count: 0,
                rent_properties_count: 0,
                projects_count: 0,
                pool_projects_count: 0,
                total_count: 0,
                assigned_agents: [],
                assigned_order: null,
                order_photo: null,
                order_description: null,
                order_created_at: null,
                order_updated_at: null,
              }}
              href={loc.href}
              image={loc.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Communities;
