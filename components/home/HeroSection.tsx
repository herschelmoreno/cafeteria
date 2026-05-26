import CTAButton from "@/components/ui/CTAButton";
import CircleImage from "@/components/ui/CircleImage";
import CategorySidebar from "@/components/home/CategorySidebar";

export default function HeroSection() {
  return (
    <section className="relative bg-cream-dark overflow-hidden grain">
      {/* Decorative warm radial glow behind the drink */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 70% at 60% 50%, rgba(201,106,48,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_auto] gap-8 lg:gap-12 items-center">

          {/* ── LEFT: Copy ── */}
          <div className="flex flex-col gap-6 max-w-lg">
            {/* Eyebrow */}
            <span
              className="inline-flex w-fit items-center gap-2 bg-amber/15 text-chocolate-light
                         text-xs font-body font-semibold tracking-widest uppercase px-4 py-2 rounded-btn
                         animate-fade-up"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber inline-block" />
              Especialidad del día
            </span>

            {/* Main headline */}
            <h1
              className="font-display font-extrabold text-chocolate leading-[1.08] tracking-tight
                         text-4xl sm:text-5xl lg:text-6xl
                         animate-fade-up delay-100"
            >
              When Life Gives You Lemons,{" "}
              <em className="not-italic text-coral">Trade Them For Coffee!</em>
            </h1>

            {/* Body */}
            <p
              className="font-body text-chocolate-muted text-base md:text-lg leading-relaxed
                         animate-fade-up delay-200"
            >
              Shake up your taste buds with a chocolate delight. Chill out with our
              chocolicious shakes — pure cocoa goodness in every sip.
            </p>

            {/* CTA */}
            <div className="animate-fade-up delay-300 mt-2">
              <CTAButton
                label="Get Promo"
                href="/menu"
                variant="primary"
                size="lg"
                showPlay
              />
            </div>
          </div>

          {/* ── CENTER: Hero Drink ── */}
          <div className="flex flex-col items-center gap-4 order-first lg:order-none">
            {/* Outer decorative spinning ring */}
            <div className="relative flex items-center justify-center">
              {/* Dashed rotating ring */}
              <div
                className="absolute w-72 h-72 md:w-80 md:h-80 rounded-full border-2 border-dashed border-orange-hero/30 animate-spin-slow pointer-events-none"
              />
              {/* Inner solid ring — spins opposite */}
              <div
                className="absolute w-60 h-60 md:w-64 md:h-64 rounded-full border border-orange-hero/15 animate-spin-rev pointer-events-none"
              />

              {/* The hero drink circle */}
              <CircleImage
                color="#C96A30"
                emoji="🍫"
                alt="Deliciosa bebida de chocolate"
                size="xl"
                float
                className="shadow-2xl"
              />
            </div>

            {/* Decorative heart-loop beneath */}
            <svg
              className="w-20 h-8 text-chocolate-muted/30 mt-2"
              viewBox="0 0 80 32"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M8 16 C8 8 20 4 28 12 C36 20 44 20 52 12 C60 4 72 8 72 16" />
              <path d="M40 24 C40 24 44 20 48 22" />
            </svg>
          </div>

          {/* ── RIGHT: Categories ── */}
          <div className="hidden lg:flex">
            <CategorySidebar />
          </div>

        </div>

        {/* Mobile categories */}
        <div className="lg:hidden mt-10 flex justify-center">
          <CategorySidebar />
        </div>
      </div>
    </section>
  );
}
