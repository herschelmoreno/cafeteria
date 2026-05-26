import CircleImage from "@/components/ui/CircleImage";
import CTAButton from "@/components/ui/CTAButton";

export default function AboutHero() {
  return (
    <section className="relative bg-cream-dark overflow-hidden grain py-20 px-6 lg:px-10">
      {/* Decorative blob */}
      <div
        className="absolute right-0 top-0 w-96 h-96 rounded-full pointer-events-none opacity-20"
        style={{
          background: "radial-gradient(circle, #D4A017 0%, transparent 70%)",
          transform: "translate(30%, -30%)",
        }}
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Copy */}
        <div className="flex flex-col gap-7">
          <span className="font-body text-xs font-semibold uppercase tracking-widest text-chocolate-muted animate-fade-up">
            Nuestra historia
          </span>
          <h1
            className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl
                       text-chocolate leading-[1.08] tracking-tight animate-fade-up delay-100"
          >
            Más que café —{" "}
            <span className="text-coral">una experiencia</span>
          </h1>
          <p className="font-body text-chocolate-muted text-base md:text-lg leading-relaxed animate-fade-up delay-200">
            Onea nació en 2019 de un sueño sencillo: que cada persona pueda comenzar su día con
            algo verdaderamente excepcional. Seleccionamos granos de origen único de productores
            de Colombia, Etiopía y Guatemala, y los tostamos en pequeños lotes para preservar
            cada matiz de sabor.
          </p>
          <p className="font-body text-chocolate-muted text-base leading-relaxed animate-fade-up delay-300">
            Nuestros baristas son artesanos. Cada taza pasa por manos que han perfeccionado su
            técnica durante años, porque creemos que la perfección merece tiempo.
          </p>
          <div className="animate-fade-up delay-400">
            <CTAButton label="Ver nuestro menú" href="/menu" variant="primary" size="md" showPlay />
          </div>
        </div>

        {/* Visual cluster */}
        <div className="flex items-center justify-center">
          <div className="relative w-72 h-72 md:w-80 md:h-80">
            {/* Large center circle */}
            <CircleImage
              color="#C96A30"
              emoji="☕"
              alt="Taza de café artesanal"
              size="xl"
              float
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
            {/* Small satellite circles */}
            <CircleImage
              color="#7A8B52"
              emoji="🌱"
              alt="Ingredientes naturales"
              size="sm"
              className="absolute top-2 right-2 animate-fade-up delay-200"
            />
            <CircleImage
              color="#D4A017"
              emoji="🥐"
              alt="Panadería fresca"
              size="sm"
              className="absolute bottom-4 left-0 animate-fade-up delay-400"
            />
            <CircleImage
              color="#C47A8A"
              emoji="💛"
              alt="Hecho con amor"
              size="xs"
              className="absolute top-8 left-4 animate-fade-up delay-600"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
