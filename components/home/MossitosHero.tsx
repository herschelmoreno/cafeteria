import Image from "next/image";
import Link from "next/link";

export default function MossitosHero() {
  return (
    <section className="relative h-[90vh] min-h-[560px] max-h-[800px] flex items-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/hero-interior.webp"
        alt="Interior acogedor de Café Mossitos"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Overlay gradient — moss tinted */}
      <div className="absolute inset-0 bg-gradient-to-r from-moss/90 via-moss/70 to-moss/30" />

      {/* Grain texture */}
      <div className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: "180px 180px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-6 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-terra" aria-hidden="true" />
            <span className="font-body text-sm font-medium text-linen/80 tracking-widest uppercase">
              Pasaje San Bernardo · Santiago de Surco
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display font-extrabold text-linen leading-tight tracking-tight mb-6 animate-fade-up delay-100"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}>
            El café que{" "}
            <em className="not-italic text-gold">siempre</em>{" "}
            <br className="hidden sm:block" />
            quisiste tener cerca.
          </h1>

          {/* Subheadline */}
          <p className="font-body text-linen/80 text-lg leading-relaxed mb-8 max-w-lg animate-fade-up delay-200">
            Café de especialidad peruano, pasteles frescos del día y almuerzos ligeros
            en el rincón más acogedor de Surco. Abierto todos los días.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 animate-fade-up delay-300">
            <a
              href="#reservar"
              className="inline-flex items-center gap-2 bg-terra text-linen font-body font-medium px-8 py-4 rounded-btn hover:bg-terra-light transition-all duration-200 active:scale-95"
            >
              Reservar una Mesa
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 bg-linen/10 border-2 border-linen/40 text-linen font-body font-medium px-8 py-4 rounded-btn hover:bg-linen/20 transition-all duration-200 active:scale-95 backdrop-blur-sm"
            >
              Ver el Menú
            </Link>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-linen/20 animate-fade-up delay-400">
            {[
              { value: "5+", label: "años en Surco" },
              { value: "100%", label: "café peruano" },
              { value: "S/16", label: "desde este precio" },
            ].map(({ value, label }) => (
              <div key={label} className="flex flex-col">
                <span className="font-display font-bold text-2xl text-gold">{value}</span>
                <span className="font-body text-sm text-linen/60">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in delay-800">
        <div className="w-px h-12 bg-linen/20" />
        <span className="font-body text-xs text-linen/40 tracking-widest uppercase">Scroll</span>
      </div>
    </section>
  );
}
