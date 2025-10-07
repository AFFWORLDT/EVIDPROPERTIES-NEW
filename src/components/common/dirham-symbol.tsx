import Image from "next/image";

interface DirhamSymbolProps {
  className?: string;
  size?: number;
}

export function DirhamSymbol({ className = "", size = 16 }: DirhamSymbolProps) {
  return (
    <Image
      src="/dhiram.png"
      alt="AED"
      width={size}
      height={size}
      className={`inline-block ${className}`}
    />
  );
}
