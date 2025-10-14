"use client";

import { getPropertyById } from "@/src/api/offPlans";
import Image from "next/image";
import { useEffect, useState } from "react";
import moment from "moment";
import EnquireForm from "@/src/components/common/enquireForm";
import { useCurrency } from "@/src/lib/currency";
import { Dialog, DialogContent, DialogTitle } from "@/src/components/ui/dialog";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react/dist/iconify.js";
import LocationSection from "./Location";

export default function DetailPage({ id }: any) {
  const { currency, formatFromAED } = useCurrency();
  const [property, setProperty] = useState<any>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [heroImageIndex, setHeroImageIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  useEffect(() => {
    async function fetchProperty() {
      const data = await getPropertyById(id);
      setProperty(data?.projects?.[0]);
    }
    fetchProperty();
  }, [id]);

  useEffect(() => {
    if (!property?.photos || property.photos.length <= 1) return;

    const interval = setInterval(() => {
      setHeroImageIndex(
        (prevIndex) => (prevIndex + 1) % property.photos.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [property?.photos]);

  const nextImage = () => {
    setSelectedImageIndex((prev) =>
      prev === property.photos.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) =>
      prev === 0 ? property.photos.length - 1 : prev - 1
    );
  };

  const goToImage = (index: number) => {
    setSelectedImageIndex(index);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  if (!property?.photos || property.photos.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <div className="luxury-bg">
      <section 
        className="relative h-screen w-full flex items-center justify-center text-center overflow-hidden"
        onMouseMove={handleMouseMove}
      >
        <div className="absolute inset-0 w-full h-full">
          <div className="relative w-full h-full">
            {property?.photos?.map((photo: string, index: number) => (
              <Image
                key={index}
                src={photo}
                alt="Luxury Living in Dubai"
                layout="fill"
                objectFit="cover"
                quality={85}
                priority={index === 0}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                  index === heroImageIndex
                    ? "opacity-100 z-10"
                    : "opacity-0 z-0"
                }`}
                style={{
                  transform: index === heroImageIndex 
                    ? `scale(1.1) translate(${(mousePosition.x - 50) * 0.02}%, ${(mousePosition.y - 50) * 0.02}%)`
                    : 'scale(1)',
                  transformOrigin: 'center center'
                }}
              />
            ))}
          </div>
          <div className="absolute inset-0 bg-black/20 z-20" />
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
            {property?.photos?.map((_: any, index: number) => (
              <button
                key={index}
                onClick={() => setHeroImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === heroImageIndex
                    ? "bg-white scale-125"
                    : "bg-white/50 hover:bg-white/75"
                }`}
              />
            ))}
          </div>
        </div>
        <div className="relative z-30 text-white px-4 sm:px-6 md:px-8 mt-[50vh] sm:mt-[55vh] md:mt-[60vh]">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-normal mb-2 sm:mb-4 leading-tight tracking-wide">
            {property?.name}
          </h1>
          <p className="text-sm sm:text-base md:text-lg font-serif font-normal mb-8 sm:mb-12 tracking-wider uppercase text-white">
            {property?.location?.sub_community}, {property?.location?.community}, {property?.location?.city}
          </p>
        </div>
      </section>

      <section className="bg-white py-8 sm:py-12 md:py-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 md:gap-8 text-sm sm:text-base md:text-lg font-serif font-normal uppercase text-primary mb-8 sm:mb-12">
            <a
              className="hover:underline cursor-pointer"
              onClick={() => setIsOpen(true)}
            >
              Enquire Now
            </a>
            <span className="text-gray-300">|</span>
            <a href="#" className="hover:underline">
              <Icon icon="lucide:heart" className="w-4 h-4 inline-block" />
            </a>
            {property?.agent && (
              <>
                <span className="text-gray-300 hidden sm:inline">|</span>
                <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 bg-gradient-to-r from-[#F8F6F0] to-[#F2EEE8] px-3 sm:px-4 py-3 rounded-xl border border-[#E5E1D8] shadow-lg w-full sm:w-auto">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-3 border-[#dbbb90] shadow-md">
                      {property.agent.avatar ? (
                        <Image
                          src={property.agent.avatar}
                          alt={property.agent.name}
                          width={48}
                          height={48}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-[#dbbb90] to-[#C2A17B] flex items-center justify-center">
                          <span className="text-lg font-serif font-normal text-white">
                            {property.agent.name?.charAt(0) || 'A'}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex flex-col text-center sm:text-left">
                    <span className="text-xs sm:text-sm font-serif font-normal text-gray-800 uppercase tracking-wide">
                      {property.agent.name}
                    </span>
                    <span className="text-xs text-[#dbbb90] font-serif font-normal uppercase tracking-wider">
                      Property Specialist
                    </span>
                  </div>
                  <div className="flex gap-2 justify-center sm:justify-start">
                    <a
                      href={`https://wa.me/${property.agent.phone?.replace(/[^0-9]/g, '')}?text=Hi ${property.agent.name}, I'm interested in ${property.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                    >
                      <Icon icon="iconoir:whatsapp-solid" className="w-5 h-5 text-white" />
                    </a>
                    <a
                      href={`tel:${property.agent.phone}`}
                      className="w-10 h-10 bg-[#dbbb90] hover:bg-[#C2A17B] rounded-full flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                    >
                      <Icon icon="line-md:phone-call-filled" className="w-5 h-5 text-white" />
                    </a>
                    <a
                      href={`mailto:${property.agent.email}?subject=Inquiry about ${property.name}`}
                      className="w-10 h-10 bg-gray-700 hover:bg-gray-800 rounded-full flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                    >
                      <Icon icon="material-symbols:mail-outline" className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>
              </>
            )}
          </div>

          <hr className="border-t border-gray-200 mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center mb-8 sm:mb-12">
            <div className="border-b md:border-b-0 md:border-r border-gray-200 pb-6 md:pb-0 md:pr-4">
              <h3 className="text-sm font-serif font-normal uppercase text-primary mb-3 md:mb-2 border-b border-primary inline-block pb-1">
                From
              </h3>
              <p className="text-sm font-serif font-normal text-gray-700">
                {property?.newParam?.price
                  ? formatFromAED(property.newParam.price)
                  : property?.price_from
                  ? formatFromAED(property.price_from)
                  : property?.price
                  ? formatFromAED(property.price)
                  : "Price on request"}
              </p>
            </div>
            <div className="border-b md:border-b-0 md:border-r border-gray-200 pb-6 md:pb-0 px-0 md:px-4">
              <h3 className="text-sm font-serif font-normal uppercase text-primary mb-3 md:mb-2 border-b border-primary inline-block pb-1">
                Completion Date
              </h3>
              <p className="text-sm font-serif font-normal text-gray-700">
                {property?.newParam?.handoverTime
                  ? moment(property?.newParam?.handoverTime).format("MMMM YYYY")
                  : property?.completionDate
                  ? moment(property?.completionDate).format("MMMM YYYY")
                  : property?.handoverTime
                  ? moment(property?.handoverTime).format("MMMM YYYY")
                  : "TBA"}
              </p>
            </div>
            <div className="pt-6 md:pt-0">
              <h3 className="text-sm font-serif font-normal uppercase text-primary mb-3 md:mb-2 border-b border-primary inline-block pb-1">
                Construction Stage
              </h3>
              <p className="text-sm font-serif font-normal text-gray-700">
                {property?.constructionStage || property?.completionStatus || "Off-plan"}
              </p>
            </div>
          </div>

          <hr className="border-t border-gray-200 mb-12" />

          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-gray-800 mb-6 sm:mb-8">
              Description
            </h2>
            <div className="px-4 sm:px-0">
              <p className={`text-sm sm:text-base font-serif font-normal text-gray-600 leading-relaxed mb-4 ${
                isDescriptionExpanded ? '' : 'line-clamp-4'
              }`}>
                {property?.description}
              </p>
              {property?.description && property.description.length > 200 && (
                <button
                  onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
                  className="text-[#dbbb90] hover:text-[#C2A17B] font-serif font-normal text-sm transition-colors duration-300 font-serif"
                >
                  {isDescriptionExpanded ? 'Read Less' : 'Read More'}
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Image Carousel Section */}
      <section className="bg-white py-8 sm:py-12 md:py-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {property?.photos && property.photos.length > 0 && (
            <div className="mb-8 sm:mb-12 md:mb-16">
              {/* Main Carousel Container */}
              <div className="relative group">
                {/* Main Image Display */}
                <div className="relative h-[250px] sm:h-[350px] md:h-[500px] lg:h-[600px] mb-4 sm:mb-6 overflow-hidden rounded-lg">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={selectedImageIndex}
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={property.photos[selectedImageIndex]}
                        alt={`${property.name} - Image ${
                          selectedImageIndex + 1
                        }`}
                        layout="fill"
                        objectFit="cover"
                        quality={90}
                      />
                    </motion.div>
                  </AnimatePresence>

                  {/* Navigation Arrows */}
                  {property.photos.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-white rounded-full w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center transition-all duration-200 opacity-70 sm:opacity-0 group-hover:opacity-100 z-10 bg-black/20 sm:bg-transparent"
                      >
                        <Icon icon="teenyicons:left-outline" fontSize={20} className="sm:hidden" />
                        <Icon icon="teenyicons:left-outline" fontSize={30} className="hidden sm:block" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-white rounded-full w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center transition-all duration-200 opacity-70 sm:opacity-0 group-hover:opacity-100 z-10 bg-black/20 sm:bg-transparent"
                      >
                        <Icon icon="teenyicons:right-outline" fontSize={20} className="sm:hidden" />
                        <Icon icon="teenyicons:right-outline" fontSize={30} className="hidden sm:block" />
                      </button>
                    </>
                  )}
                </div>

                {/* Thumbnail Carousel */}
                <div className="relative">
                  <div className="flex gap-2 sm:gap-3 md:gap-4 overflow-x-auto scrollbar-hide pb-2">
                    <div className="flex gap-2 sm:gap-3 md:gap-4 min-w-max">
                      {property.photos.map((photo: string, index: number) => (
                        <button
                          key={index}
                          onClick={() => goToImage(index)}
                          className={`relative flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 overflow-hidden rounded transition-all duration-200 ${
                            selectedImageIndex === index
                              ? "ring-2 ring-primary opacity-100 scale-105"
                              : "opacity-70 hover:opacity-90 hover:scale-102"
                          }`}
                        >
                          <Image
                            src={photo || "/placeholder.svg"}
                            alt={`${property.name} thumbnail ${index + 1}`}
                            layout="fill"
                            objectFit="cover"
                            quality={75}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Scroll Indicators for Thumbnails */}
                  <div className="flex justify-center mt-4 space-x-1">
                    {Array.from({
                      length: Math.ceil(property.photos.length / 5),
                    }).map((_, pageIndex) => (
                      <div
                        key={pageIndex}
                        className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                          Math.floor(selectedImageIndex / 5) === pageIndex
                            ? "bg-primary"
                            : "bg-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        {property?.newParam?.permitQRCode && (
          <div className="flex justify-center">
            <div className="bg-[#F2EEE8] border border-white rounded-lg p-4 flex items-center gap-4 shadow-sm max-w-sm">
              {/* QR Code with Palm Tree Emblem */}
              <div className="relative">
                <div className="w-32 h-32 bg-white rounded-lg flex items-center justify-center border-2 border-gray-200 overflow-hidden">
                  <Image
                    src={property?.newParam?.permitQRCode}
                    alt="QR Code"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Verification Text */}
              <div className="text-gray-700">
                <p className="text-sm">
                  This Listing has been verified by{" "}
                  <span className="font-serif font-normal">Dubai Land Department</span>
                </p>
              </div>
            </div>
          </div>
        )}


        <div className="my-4 sm:my-5">
          <LocationSection property={property} />
        </div>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <AnimatePresence>
            <DialogContent className="w-[95vw] max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl bg-[#F2EEE8] rounded-none px-4 sm:px-6 md:px-8 py-4 mx-auto my-4">
              <motion.div
                key="dialog"
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <DialogTitle className="mb-4 sm:mb-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                  <div className="flex-1">
                    <h2 className="text-xl sm:text-2xl font-mono font-thin text-black text-center sm:text-left">
                      Take the First Step
                    </h2>
                    <p className="font-mono font-thin text-center sm:text-left text-sm sm:text-[15px] text-neutral-400 mt-2">
                      Get a free consultation, personalized investment strategy,
                      and exclusive access to Dubai best properties.
                    </p>
                  </div>
                  <Icon
                    icon={"material-symbols-light:cancel-outline"}
                    fontSize={25}
                    className="text-neutral-400 cursor-pointer flex-shrink-0"
                    onClick={() => setIsOpen(false)}
                  />
                </DialogTitle>

                <EnquireForm type="offPlan" />
              </motion.div>
            </DialogContent>
          </AnimatePresence>
        </Dialog>
      </section>
    </div>
  );
}
