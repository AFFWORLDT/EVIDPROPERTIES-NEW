import { getAllBuyProperties } from "@/src/api/buy";
import { PropertyCard } from "@/src/components/common/card";
import { Button } from "@/src/components/ui/button";
import { DirhamSymbol } from "@/src/components/common/dirham-symbol";
import Link from "next/link";
import React from "react";

export default function Property() {
  const [property, setProperty] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const fetchproperty = async () => {
    setLoading(true);
    const query = "sort_by=total_count&sort_order=desc&page=1&size=3";
    try {
      const res = await getAllBuyProperties(query);
      setProperty(res?.properties || []);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchproperty();
  }, []);

  const handleFavorite = (item: any) => {
    console.log("Added to favorites:", item);
    // Add your favorite logic here
  };

  return (
    <div className="min-h-screen bg-[#F2EEE8] text-[#1A202C]">
      <main className="container mx-auto py-8 sm:py-12 px-3 sm:px-4 md:px-6 lg:px-8">
        <section className="text-center mb-8 sm:mb-12">
          <h2 className="text-black text-sm font-light tracking-widest mb-2 uppercase">
            FEATURED PROPERTIES
          </h2>
          <h1 className="text-3xl sm:text-4xl font-mono mb-4 text-[#1A202C] tracking-wide">
            Properties for Sale in UAE
          </h1>
          <p className="max-w-2xl mx-auto text-sm font-light text-gray-700 leading-relaxed">
            Explore our selection of ready made properties in the UAE with guidance from one of our experienced experts
          </p>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12 items-stretch">
          {loading ? (
            // Loading skeleton
            Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="bg-white rounded-lg shadow-md p-6 animate-pulse">
                <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              </div>
            ))
          ) : property?.length > 0 ? (
            property.map((obj: any, i) => (
              <PropertyCard
                photos={obj?.photos?.[0] || "/images/placeholder.jpg"}
                title={`${obj?.location?.community || ""}${obj?.location?.community && obj?.location?.city ? ", " : ""}${obj?.location?.city || ""}`.trim() || "Dubai, UAE"}
                location={`${obj?.location?.city || ""} ${obj?.location?.community || ""} ${obj?.location?.sub_community || ""}`.trim() || "Dubai, UAE"}
                price={obj?.price ? (
                  <span className="flex items-center gap-1">
                    <DirhamSymbol size={16} />
                    {obj.price.toLocaleString()}
                  </span>
                ) : "Price on Request"}
                bedrooms={obj?.bedRooms || 0}
                bathrooms={obj?.bathrooms || 0}
                area={obj?.size ? `${obj.size.toLocaleString()} sqft` : "Area not specified"}
                propertyId={obj?.id || obj?.ownPortal_agent_Id || "N/A"}
                key={i}
              />
            ))
          ) : (
            // No properties found
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 text-lg">No featured properties available at the moment.</p>
            </div>
          )}
        </section>

        <div className="text-center">
         <Link href={"/buy"}>
           <Button className="bg-[#D4B88C] hover:bg-[#C2A77B] text-white px-8 py-6 text-lg font-light tracking-wider rounded-none shadow-md uppercase">
            VIEW ALL PROPERTIES
          </Button>
         </Link>
        </div>
      </main>
    </div>
  );
}
