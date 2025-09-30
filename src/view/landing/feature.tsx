import { getAllProperties } from "@/src/api/offPlans";
import PropertyCard from "@/src/components/common/property-card";
import { Button } from "@/src/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Feature() {
  const [property, setProperty] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchproperty = async () => {
    setLoading(true);
    const query = "sort_by=total_count&sort_order=desc&page=1&size=6";
    try {
      const res = await getAllProperties(query);
      setProperty(res?.projects);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchproperty();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F8F6F0] via-white to-[#F2EEE8] text-[#1A202C] relative overflow-hidden">
      {/* Luxury Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#dbbb90]/3 via-transparent to-[#C2A17B]/3"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#dbbb90]/20 to-transparent"></div>
      
      <main className="container mx-auto py-12 sm:py-16 md:py-20 px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
        <section className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className="inline-block mb-6">
            <span className="text-[#dbbb90] text-xs font-serif font-medium tracking-[0.3em] uppercase">
              FEATURED PROJECTS
            </span>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#dbbb90] to-transparent mx-auto mt-3"></div>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-light mb-4 sm:mb-6 md:mb-8 text-[#1A202C] leading-tight tracking-wide px-2">
            <span className="text-[#dbbb90] font-normal">Luxury</span> Unveiled
            <br />
            <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light text-gray-600 mt-1 sm:mt-2 block">
              Comfort & Sophistication
            </span>
          </h1>
          <p className="max-w-3xl mx-auto text-sm sm:text-base font-light text-gray-600 leading-relaxed font-serif px-4">
            Discover a curated selection of Dubai's most exquisite off-plan projects,
            epitomizing luxury, elegance, and unparalleled design. Each development
            represents the pinnacle of architectural excellence and refined living.
          </p>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 mb-12 sm:mb-16 items-stretch">
          {loading ? (
            // Luxury loading skeleton
            Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-6 animate-pulse">
                <div className="h-64 bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl mb-6"></div>
                <div className="h-5 bg-gray-200 rounded mb-3"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              </div>
            ))
          ) : property?.length > 0 ? (
            property.map((project: any, i) => (
              <div key={i} className="group transform transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                <PropertyCard data={project} />
              </div>
            ))
          ) : (
            // No projects found
            <div className="col-span-full text-center py-20">
              <div className="inline-block p-8 bg-white/50 backdrop-blur-sm rounded-2xl border border-white/20">
                <p className="text-gray-500 text-lg font-serif">No featured projects available at the moment.</p>
              </div>
            </div>
          )}
        </section>

        <div className="text-center">
          <Link href={"/offPlans"}>
            <Button className="group relative bg-gradient-to-r from-[#dbbb90] to-[#C2A17B] hover:from-[#C2A17B] hover:to-[#dbbb90] text-white px-12 py-6 text-lg font-serif font-medium tracking-wider rounded-none shadow-2xl hover:shadow-3xl uppercase transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 border border-[#dbbb90]/20">
              <span className="relative z-10">VIEW ALL PROJECTS</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
