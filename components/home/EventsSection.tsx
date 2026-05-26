import { events } from "@/lib/data/events";
import SectionHeading from "@/components/ui/SectionHeading";

export default function EventsSection() {
  return (
    <section className="bg-linen-dark py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="mb-12">
          <SectionHeading
            title="Eventos en Mossitos"
            subtitle="Más que un café — un punto de encuentro del barrio."
            align="center"
          />
        </div>

        {/* Events grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {events.map((event, i) => (
            <article
              key={event.id}
              className="relative overflow-hidden rounded-card p-8 text-linen animate-fade-up"
              style={{
                backgroundColor: event.color,
                animationDelay: `${i * 0.15}s`,
              }}
            >
              {/* Decorative circle */}
              <div
                className="absolute -top-8 -right-8 w-40 h-40 rounded-full opacity-10"
                style={{ backgroundColor: "#fff" }}
                aria-hidden="true"
              />

              {/* Emoji */}
              <span className="text-5xl mb-5 block" aria-hidden="true">{event.emoji}</span>

              {/* Meta */}
              <div className="flex items-center gap-3 mb-3">
                <span className="font-body text-xs font-semibold uppercase tracking-widest bg-linen/20 px-3 py-1 rounded-full">
                  {event.dia}
                </span>
                <span className="font-body text-xs text-linen/70">
                  {event.hora}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-2xl leading-tight mb-3">
                {event.titulo}
              </h3>

              {/* Description */}
              <p className="font-body text-sm text-linen/80 leading-relaxed mb-5">
                {event.descripcion}
              </p>

              {/* Price or CTA */}
              <div className="flex items-center justify-between">
                {event.precio ? (
                  <span className="font-display font-bold text-linen/90">
                    {event.precio}
                  </span>
                ) : (
                  <span className="font-body text-sm font-medium text-linen/90 bg-linen/15 px-4 py-2 rounded-full">
                    Entrada libre
                  </span>
                )}
                <a
                  href="#reservar"
                  className="font-body text-sm font-medium text-linen underline-offset-2 hover:underline transition-all"
                >
                  Reservar →
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Footnote */}
        <p className="text-center font-body text-sm text-moss-muted mt-8">
          Eventos sujetos a disponibilidad. Escríbenos para reservar tu lugar.
        </p>
      </div>
    </section>
  );
}
