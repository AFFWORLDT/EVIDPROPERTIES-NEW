"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, Phone, Menu, MessageCircle } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { Card, CardContent } from "@/src/components/ui/card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/src/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { getAllCommunities } from "@/src/api/communities";
import { cn } from "@/src/lib/utils";

const communities = [
  {
    id: 1,
    name: "Dubai Marina",
    description: "Where Yachting Meets Urban Living",
    imageQuery: "/images/dubai-marina.webp",
  },
  {
    id: 2,
    name: "Business Bay",
    description: "A Hub of Bustling Activity and Affordable Investment",
    imageQuery: "/images/Palm-Jumeirah.webp",
  },
  {
    id: 3,
    name: "Downtown Dubai",
    description: "Where Iconic Landmarks Meet Luxurious Living",
    imageQuery: "/images/Dubai-Creek-Harbour.webp",
  },
  {
    id: 4,
    name: "Dubai Hills Estate",
    description: "Tranquility Meets Luxury Living",
    imageQuery: "/images/Dubai-Hills-Estate.webp",
  },
  {
    id: 5,
    name: "Palm Jumeirah",
    description: "Iconic Man-Made Island with Luxury Residences",
    imageQuery: "/images/dubai-marina.webp",
  },
  {
    id: 6,
    name: "Jumeirah Lake Towers",
    description: "Vibrant Community with Lake Views",
    imageQuery: "/images/Dubai-Creek-Harbour.webp",
  },
];

export default function Component() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [communities, setCommunities] = useState<any[]>([]);

  const plugin = useRef(
    Autoplay({ delay: 1000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const scrollTo = useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api]
  );

  useEffect(() => {
    const fetchCommunities = async () => {
      try {
        const res = await getAllCommunities(1, 12);
        if (res?.communities?.length) {
          // Filter out Deira from communities
          const communitiesWithoutDeira = res.communities.filter((community: any) =>
            community.name?.toLowerCase() !== 'deira'
          );
          setCommunities(communitiesWithoutDeira);
        }
      } catch (error) {
        console.log("Error fetching communities:", error);
        // Fallback to static data if API fails, also filter out Deira
        const staticCommunitiesWithoutDeira = communities.filter((community: any) =>
          community.name?.toLowerCase() !== 'deira'
        );
        setCommunities(staticCommunitiesWithoutDeira);
      }
    };
    fetchCommunities();
  }, []);
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 text-center px-3 sm:px-4">
        <p className="text-[#D4B88C] text-sm uppercase tracking-widest mb-2 font-serif font-normal">
          COMMUNITIES
        </p>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-mono text-gray-800 mb-4 sm:mb-6 tracking-wide px-2">
          Discover Dubai&apos;s Finest
        </h1>
        <p className="max-w-4xl mx-auto text-gray-600 text-xs sm:text-sm tracking-tight font-serif font-normal px-4">
          Explore the diverse tapestry of Dubai&apos;s most sought-after areas
          and communities. From serene waterfront retreats to bustling urban
          hubs, our curated selection showcases the essence of luxury living in
          each locale.
        </p>
      </section>

      {/* Communities Section - Carousel */}
      <section className="relative pb-12 sm:pb-16 px-3 sm:px-4 md:px-8 lg:px-12">
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[plugin.current]}
          className="w-full"
        >
          <CarouselContent className="-ml-6">
            {communities?.map((community: any, idx: number) => (
              <CarouselItem
                key={`${community.id ?? idx}-${idx}`}
                className="pl-3 sm:pl-6 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <Card className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[650px] rounded-none overflow-hidden shadow-lg group border-none">
                  <CardContent className="p-0 h-full">
                    <Image
                      src={community.photos[0]}
                      alt={community.name}
                      fill
                      style={{ objectFit: "cover" }}
                      className="transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-3 sm:p-4 md:p-6 flex flex-col justify-end text-white">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-serif font-normal mb-1 sm:mb-2" style={{ letterSpacing: '0.05em' }}>
                        {community.name}
                      </h3>
                      
                      <p className="text-xs sm:text-sm mb-2 sm:mb-3 md:mb-4 font-serif font-normal leading-relaxed" style={{ letterSpacing: '0.05em' }}>
                        {community.order_description || `${community.city} - Luxury living at its finest`}
                      </p>
                      <div className="w-full border-[0.5px] border-white/30 mb-2 sm:mb-3 md:mb-4" />
                      <Link
                        href={`/communities/details/${encodeURIComponent(community.name)}`}
                        className={cn(
                          "relative pb-1 transition-all duration-300 text-[#dbbb90] uppercase text-base font-serif",
                          "after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0",
                          "after:bg-[#dbbb90] after:transition-all after:duration-300 hover:after:w-20"
                        )}
                      >
                        EXPLORE
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* CarouselPrevious and CarouselNext can be added here if navigation arrows are desired */}
        </Carousel>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === current - 1
                  ? "bg-gold-accent"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              onClick={() => {
                plugin.current.stop(); // Stop autoplay on manual click
                scrollTo(index);
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        <div className="w-full flex justify-center items-center mt-11 mb-4">
          
        <Link href={"/communities"}>
           <Button className="w-48 h-11 bg-[#dbbb90] hover:bg-[#C2A17B] text-white font-serif font-normal tracking-wider py-2 px-4 rounded-none transition-colors uppercase">
            View All Communities
          </Button>
        </Link>
        </div>
      </section>
    </div>
  );
}
