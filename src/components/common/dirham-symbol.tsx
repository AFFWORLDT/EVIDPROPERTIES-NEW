import Image from "next/image";

interface DirhamSymbolProps {
  className?: string;
  size?: number;
  variant?: "default" | "white";
}

export function DirhamSymbol({ className = "", size = 16, variant = "default" }: DirhamSymbolProps) {
  const imageSrc = variant === "white" ? "/white_dhiram.webp" : "/dhiram.png";
  
  return (
    <Image
      src={imageSrc}
      alt="AED"
      width={size}
      height={size}
      className={`inline-block ${className}`}
    />
  );
}
