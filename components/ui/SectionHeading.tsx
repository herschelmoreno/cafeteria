import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  size?: "sm" | "md" | "lg";
  className?: string;
  tag?: "h1" | "h2" | "h3";
}

const sizeMap = {
  sm: "text-2xl md:text-3xl",
  md: "text-3xl md:text-4xl",
  lg: "text-4xl md:text-5xl",
};

export default function SectionHeading({
  title,
  subtitle,
  align = "left",
  size = "md",
  className,
  tag: Tag = "h2",
}: SectionHeadingProps) {
  const alignClass = {
    left:   "text-left",
    center: "text-center items-center",
    right:  "text-right items-end",
  }[align];

  return (
    <div className={cn("flex flex-col gap-3", alignClass, className)}>
      <Tag
        className={cn(
          "font-display font-bold text-moss leading-tight tracking-tight",
          sizeMap[size]
        )}
      >
        {title}
      </Tag>
      {subtitle && (
        <p className="text-moss-muted font-body text-base md:text-lg leading-relaxed max-w-xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
