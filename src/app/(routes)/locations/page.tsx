"use client";
import Link from "next/link";
import { MapPin } from "lucide-react";

const LOCATIONS = [
  { name: "Dubai Hills Estate", href: "/locations/dubai-hills" },
  { name: "Tilal Al Ghaf", href: "/locations/tilal-al-ghaf" },
  { name: "Palm Jumeirah", href: "/locations/palm-jumeirah" },
  { name: "Jumeirah Golf Estates", href: "/locations/jumeirah-golf-estates" },
  { name: "Emirates Hills", href: "/locations/emirates-hills" },
  { name: "Al Barari", href: "/locations/al-barari" },
  { name: "Dubai Marina", href: "/locations/dubai-marina" },
  { name: "Jumeirah Islands", href: "/locations/jumeirah-islands" },
  { name: "The Lakes", href: "/locations/the-lakes" },
  { name: "The Meadows", href: "/locations/the-meadows" },
  { name: "The Springs", href: "/locations/the-springs" },
  { name: "Victory Heights", href: "/locations/victory-heights" },
  { name: "Arabian Ranches", href: "/locations/arabian-ranches" },
  { name: "Business Bay", href: "/locations/business-bay" },
  { name: "DIFC", href: "/locations/difc" },
];

export default function LocationsIndexPage() {
  return (
    <div>
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-[#F8F6F0] via-white to-[#F2EEE8] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/5 via-transparent to-black/5"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#dbbb90]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#C2A17B]/10 rounded-full blur-3xl"></div>
        <div className="relative z-10 mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-serif font-normal mb-8 text-gray-800 leading-tight" style={{ letterSpacing: '0.05em' }}>
            Dubai Locations
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#dbbb90] to-[#C2A17B] mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-serif">
            Explore premium neighborhoods and communities across Dubai
          </p>
        </div>
      </section>

      <div className="mx-auto px-4 py-16 max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {LOCATIONS.map((loc) => (
            <Link
              key={loc.href}
              href={loc.href}
              className="flex items-center gap-3 p-4 rounded-xl border border-[#dbbb90]/20 bg-white/60 hover:bg-white shadow-sm hover:shadow-md transition"
            >
              <MapPin className="w-5 h-5 text-[#dbbb90]" />
              <span className="font-serif text-gray-800">{loc.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}


