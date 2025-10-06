import { Input } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin, Youtube, Phone, Mail, MapPin } from "lucide-react";

const sitemapLinks = [
  { href: "/buy", label: "Buy" },
  { href: "/offPlans", label: "Off-Plan" },
  { href: "/rent", label: "Rent" },
  { href: "/communities", label: "Communities" },
  { href: "/whyDubai", label: "Why Dubai" },
  { href: "/service", label: "Services" },
  { href: "/contactUs", label: "Contact Us" },
];

export default function Footer() {
  return (
    <footer className="bg-white text-gray-900 relative overflow-hidden border-t border-gray-100">
      {/* Luxury Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#dbbb90]/3 via-transparent to-[#C2A17B]/3"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#dbbb90]/20 to-transparent"></div>
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
            
            {/* Logo & Brand Section */}
            <div className="lg:col-span-1">
              <Link href="/" className="group block mb-6">
                <Image
                  src="/logo.png"
                  alt="Apricity Realestate Logo"
                  width={200}
                  height={70}
                  className="object-contain transition-all duration-300 group-hover:scale-105 group-hover:brightness-90 h-12 w-auto sm:h-14 md:h-16 lg:h-20 xl:h-24 filter drop-shadow-sm"
                  priority
                />
              </Link>
              <p className="text-gray-700 text-xs sm:text-sm leading-relaxed font-serif mb-4 sm:mb-6">
                Discover luxury living in Dubai's most prestigious communities. 
                Your gateway to exceptional real estate opportunities.
              </p>
              
              {/* Social Media Icons */}
              <div className="mb-6">
                <h4 className="text-[#dbbb90] font-serif font-medium text-sm uppercase tracking-wider mb-3">
                  Follow Us
                </h4>
                <div className="flex space-x-2 sm:space-x-3">
                  <Link 
                    href="#" 
                    className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 hover:bg-[#dbbb90] rounded-full flex items-center justify-center transition-all duration-300 group"
                  >
                    <Facebook className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 group-hover:text-white" />
                  </Link>
                  <Link 
                    href="#" 
                    className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 hover:bg-[#dbbb90] rounded-full flex items-center justify-center transition-all duration-300 group"
                  >
                    <Instagram className="w-5 h-5 text-gray-600 group-hover:text-white" />
                  </Link>
                  <Link 
                    href="#" 
                    className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 hover:bg-[#dbbb90] rounded-full flex items-center justify-center transition-all duration-300 group"
                  >
                    <Twitter className="w-5 h-5 text-gray-600 group-hover:text-white" />
                  </Link>
                  <Link 
                    href="#" 
                    className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 hover:bg-[#dbbb90] rounded-full flex items-center justify-center transition-all duration-300 group"
                  >
                    <Linkedin className="w-5 h-5 text-gray-600 group-hover:text-white" />
                  </Link>
                  <Link 
                    href="#" 
                    className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 hover:bg-[#dbbb90] rounded-full flex items-center justify-center transition-all duration-300 group"
                  >
                    <Youtube className="w-5 h-5 text-gray-600 group-hover:text-white" />
                  </Link>
                </div>
              </div>
              
              {/* Newsletter */}
              <div className="space-y-3">
                <h4 className="text-[#dbbb90] font-serif font-medium text-sm uppercase tracking-wider">
                  Stay Connected
                </h4>
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                  <Input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 bg-gray-50 text-gray-900 border-gray-200 placeholder:text-gray-500 focus:border-[#dbbb90] rounded-none h-9 sm:h-10 text-xs sm:text-sm"
                  />
                  <Button className="bg-[#dbbb90] hover:bg-[#C2A17B] text-white px-3 sm:px-4 h-9 sm:h-10 rounded-none text-xs sm:text-sm font-serif uppercase tracking-wider">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-1">
              <h4 className="text-[#dbbb90] font-serif font-medium text-sm uppercase tracking-wider mb-6">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {sitemapLinks.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.href}
                      className="text-gray-700 hover:text-[#dbbb90] transition-colors duration-300 text-sm font-serif relative group"
                    >
                      <span className="relative z-10">{link.label}</span>
                      <span className="absolute left-0 bottom-0 w-0 h-px bg-[#dbbb90] transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="lg:col-span-1">
              <h4 className="text-[#dbbb90] font-serif font-medium text-sm uppercase tracking-wider mb-6">
                Services
              </h4>
              <ul className="space-y-3">
                <li><Link href="/mortgages" className="text-gray-700 hover:text-[#dbbb90] transition-colors duration-300 text-sm font-serif">Mortgages</Link></li>
                <li><Link href="/conveyancing" className="text-gray-700 hover:text-[#dbbb90] transition-colors duration-300 text-sm font-serif">Conveyancing</Link></li>
                <li><Link href="/property-management" className="text-gray-700 hover:text-[#dbbb90] transition-colors duration-300 text-sm font-serif">Property Management</Link></li>
                <li><Link href="/short-term-rental" className="text-gray-700 hover:text-[#dbbb90] transition-colors duration-300 text-sm font-serif">Short-term Rental</Link></li>
                <li><Link href="/list-your-property" className="text-gray-700 hover:text-[#dbbb90] transition-colors duration-300 text-sm font-serif">List Your Property</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="lg:col-span-1">
              <h4 className="text-[#dbbb90] font-serif font-medium text-sm uppercase tracking-wider mb-6">
                Contact
              </h4>
              <address className="not-italic space-y-4 text-sm">
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-[#dbbb90]/10 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                    <MapPin className="w-3 h-3 text-[#dbbb90]" />
                  </div>
                  <p className="text-gray-700 font-serif">Dubai, UAE</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-[#dbbb90]/10 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                    <Phone className="w-3 h-3 text-[#dbbb90]" />
                  </div>
                  <a
                    href="tel:+971558777152"
                    className="text-gray-700 hover:text-[#dbbb90] transition-colors duration-300 font-serif"
                  >
                    +971-55-877-7152
                  </a>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-[#dbbb90]/10 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                    <Mail className="w-3 h-3 text-[#dbbb90]" />
                  </div>
                  <a
                    href="mailto:athomson@apricityrealestate.ae"
                    className="text-gray-700 hover:text-[#dbbb90] transition-colors duration-300 font-serif break-all"
                  >
                    athomson@apricityrealestate.ae
                  </a>
                </div>
              </address>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200">
          <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-6">
            <div className="flex flex-col sm:flex-row items-center justify-between space-y-3 sm:space-y-0">
              
              {/* Logo and Copyright */}
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
                <Link href="/" className="group">
                  <Image
                    src="/logo.png"
                    alt="Apricity Realestate Logo"
                    width={150}
                    height={50}
                    className="object-contain transition-all duration-300 group-hover:scale-105 group-hover:brightness-90 h-6 sm:h-8 w-auto filter drop-shadow-sm"
                  />
                </Link>
                <p className="text-gray-500 text-xs sm:text-sm font-serif text-center sm:text-left">
                  &copy; 2025 Apricity Realestate. All Rights Reserved.
                </p>
              </div>

              {/* Legal Links */}
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm">
                <Link href="/privacy-policy" className="text-gray-500 hover:text-[#dbbb90] transition-colors duration-300 font-serif">
                  Privacy Policy
                </Link>
                <Link href="/terms-conditions" className="text-gray-500 hover:text-[#dbbb90] transition-colors duration-300 font-serif">
                  Terms & Conditions
                </Link>
                <Link href="/cookie-policy" className="text-gray-500 hover:text-[#dbbb90] transition-colors duration-300 font-serif">
                  Cookie Policy
                </Link>
                <Link href="/disclaimer" className="text-gray-500 hover:text-[#dbbb90] transition-colors duration-300 font-serif">
                  Disclaimer
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
