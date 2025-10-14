"use client";
import { Button } from "@/src/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export function CallToAction() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-[#F8F5EF]">
]      <div className="absolute bottom-0 inset-x-0 w-full h-96 opacity-40">
        <Image
          src="/images/dubai-skyline-30.svg" 
          alt="Dubai Skyline"
          fill
          className="object-bottom"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-10 lg:px-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm uppercase text-gray-600 font-serif font-normal mb-2" style={{ letterSpacing: '0.05em' }}>
            JOIN THE ELITE
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-normal mb-4 text-gray-800" style={{ letterSpacing: '0.05em' }}>
            Elevate Your Real Estate Journey
          </h2>
          <p className="text-base md:text-lg font-serif font-normal max-w-4xl mx-auto mb-12 leading-relaxed text-gray-700" style={{ letterSpacing: '0.05em' }}>
            Ready to embark on a luxurious real estate experience tailored just
            for you? Take the first step towards unparalleled living.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href={"/contactUs"}>
              <Button className="w-48 h-11 bg-[#dbbb90] hover:bg-[#C2A17B] text-white font-serif font-normal py-2 px-4 rounded-none transition-colors uppercase" style={{ letterSpacing: '0.05em' }}>
                CONTACT US
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
