import Link from "next/link";
import { cn } from "@/lib/utils";

interface CTAButtonProps {
  label: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  showPlay?: boolean;
}

const variants = {
  primary: "bg-moss text-linen hover:bg-moss-mid border-2 border-moss",
  outline: "bg-transparent text-moss border-2 border-moss hover:bg-moss hover:text-linen",
  ghost:   "bg-transparent text-moss hover:bg-linen-deeper border-2 border-transparent",
};

const sizeClasses = {
  sm: "px-5 py-2.5 text-sm gap-2",
  md: "px-7 py-3.5 text-base gap-2.5",
  lg: "px-9 py-4 text-lg gap-3",
};

export default function CTAButton({
  label,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className,
  showPlay = false,
}: CTAButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-btn font-body font-medium",
    "transition-all duration-200 ease-out active:scale-95 cursor-pointer",
    variants[variant],
    sizeClasses[size],
    className
  );

  const content = (
    <>
      <span>{label}</span>
      {showPlay && (
        <span
          className={cn(
            "flex items-center justify-center rounded-full w-7 h-7 shrink-0",
            variant === "primary" ? "bg-terra text-linen" : "bg-moss text-linen"
          )}
          aria-hidden="true"
        >
          <svg viewBox="0 0 10 10" fill="currentColor" className="w-3 h-3 translate-x-px">
            <path d="M2 1.5l6 3.5-6 3.5V1.5z" />
          </svg>
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes} type="button">
      {content}
    </button>
  );
}
