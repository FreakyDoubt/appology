import { cn } from "@/lib/utils";

interface FloatingStickerProps {
  src: string;
  alt: string;
  className?: string;
  delay?: boolean;
  size?: "sm" | "md" | "lg";
}

const FloatingSticker = ({ src, alt, className, delay = false, size = "md" }: FloatingStickerProps) => {
  const sizeClasses = {
    sm: "w-16 h-16 md:w-20 md:h-20",
    md: "w-24 h-24 md:w-32 md:h-32",
    lg: "w-32 h-32 md:w-40 md:h-40",
  };

  return (
    <img
      src={src}
      alt={alt}
      className={cn(
        "drop-shadow-lg transition-transform hover:scale-110",
        delay ? "animate-float-delayed" : "animate-float",
        sizeClasses[size],
        className
      )}
      style={{
        filter: "drop-shadow(0 8px 32px rgba(255, 140, 105, 0.3))",
      }}
    />
  );
};

export default FloatingSticker;
