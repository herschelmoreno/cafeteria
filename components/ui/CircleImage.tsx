import { cn } from "@/lib/utils";

type CircleSize = "xs" | "sm" | "md" | "lg" | "xl";

const sizes: Record<CircleSize, { circle: string; emoji: string }> = {
  xs: { circle: "w-14 h-14",   emoji: "text-2xl" },
  sm: { circle: "w-20 h-20",   emoji: "text-3xl" },
  md: { circle: "w-32 h-32",   emoji: "text-5xl" },
  lg: { circle: "w-48 h-48",   emoji: "text-7xl" },
  xl: { circle: "w-60 h-60",   emoji: "text-8xl" },
};

interface CircleImageProps {
  color: string;
  emoji: string;
  alt?: string;
  size?: CircleSize;
  className?: string;
  float?: boolean;
}

export default function CircleImage({
  color,
  emoji,
  alt,
  size = "md",
  className,
  float = false,
}: CircleImageProps) {
  const { circle, emoji: emojiSize } = sizes[size];

  return (
    <div
      className={cn(
        "rounded-full flex items-center justify-center relative select-none shadow-xl",
        circle,
        float && "animate-float",
        className
      )}
      style={{ backgroundColor: color }}
      role="img"
      aria-label={alt}
    >
      {/* Inner radial highlight — makes the circle feel 3-D */}
      <div
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 33% 28%, rgba(255,255,255,0.28) 0%, transparent 58%)",
        }}
      />
      <span className={cn("relative z-10", emojiSize)} aria-hidden="true">
        {emoji}
      </span>
    </div>
  );
}
