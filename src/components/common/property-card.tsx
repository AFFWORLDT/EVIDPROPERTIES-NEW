import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/src/components/ui/card";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { DirhamSymbol } from "./dirham-symbol";

interface PropertyData {
  id?: string | number;
  name?: string;
  location?: {
    city?: string;
    community?: string;
  };
  newParam?: {
    price?: number;
        totalUnits?: number;

  };
  photos?: string[];
  area_id?: string;

}

export default function PropertyCard({ data }: { data?: PropertyData }) {
    const router = useRouter();
  return (
    <Card className="overflow-hidden border-none p-0 shadow-2xl hover:shadow-3xl border-2 rounded-2xl bg-white/90 backdrop-blur-sm border-white/20 transition-all duration-500 group cursor-pointer h-full flex flex-col" onClick={() => router.push(`/offPlans/details/${data?.id}`)}>
      <div className="relative w-full h-96 overflow-hidden flex-shrink-0">
        <Image
          src={data?.photos?.[0] ?? "/placeholder.jpg"}
          alt={`Image of ${data?.name}`}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
        {/* Luxury overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {data?.newParam?.totalUnits ? (
          <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm text-xs font-serif font-serif font-normal tracking-wider px-4 py-2 rounded-full shadow-lg uppercase border border-white/20">
            {data.newParam.totalUnits} UNITS
          </div>
        ) : null}
        <div className="absolute bottom-4 right-4 bg-gradient-to-r from-[#dbbb90] to-[#C2A17B] text-white text-sm font-serif font-serif font-normal px-4 py-2 rounded-full shadow-lg flex items-center gap-1">
          FROM <DirhamSymbol size={14} variant="white" /> {data?.newParam?.price && data.newParam.price > 0 ? data.newParam.price.toLocaleString() : "TBA"}
        </div>
      </div>
      <CardContent className="p-8 flex flex-col flex-grow">
        <CardTitle className="text-2xl font-serif font-serif font-normal text-[#1A202C] mb-3 tracking-wide group-hover:text-[#dbbb90] transition-colors duration-300">
          {data?.name ?? "Unnamed Property"}
        </CardTitle>
        <p className="text-sm uppercase tracking-wider text-gray-600 font-serif font-serif font-normal mt-auto">
          {`${data?.location?.sub_community ?? ""}${
            data?.location?.sub_community && data?.location?.community ? ", " : ""
          }${data?.location?.community ?? ""}${
            data?.location?.community && data?.location?.city ? ", " : ""
          }${data?.location?.city ?? ""}`}
        </p>
      </CardContent>
    </Card>
  );
}
