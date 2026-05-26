const values = [
  {
    emoji: "🌿",
    color: "#7A8B52",
    title: "Origen & Calidad",
    description:
      "Trabajamos directamente con productores de café de Colombia, Etiopía y Guatemala. Cada lote se tuesta en pequeñas cantidades para preservar los matices únicos de cada terroir.",
  },
  {
    emoji: "🤝",
    color: "#3A8B7A",
    title: "Comunidad",
    description:
      "Onea es más que un café — es un punto de encuentro. Apoyamos a artistas locales, organizamos eventos culturales y creemos que los mejores momentos nacen en torno a una buena taza.",
  },
  {
    emoji: "✨",
    color: "#C47A8A",
    title: "Artesanía",
    description:
      "Nuestros baristas se forman durante meses antes de servir su primera taza. El arte del espresso, el latte art y la extracción perfecta son disciplinas que tomamos muy en serio.",
  },
];

const stats = [
  { value: "5+",   label: "Años de tostado" },
  { value: "12",   label: "Orígenes de grano" },
  { value: "50K+", label: "Tazas al mes" },
  { value: "100%", label: "Comercio justo" },
];

export default function ValuesGrid() {
  return (
    <section className="bg-cream py-20 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto flex flex-col gap-20">

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-y border-cream-border">
          {stats.map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center text-center gap-1">
              <span className="font-display font-extrabold text-4xl md:text-5xl text-chocolate">
                {value}
              </span>
              <span className="font-body text-sm text-chocolate-muted tracking-wide">
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Values grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map(({ emoji, color, title, description }, i) => (
            <article
              key={title}
              className="flex flex-col gap-5 bg-cream-dark rounded-card p-8 border border-cream-border/50
                         hover:shadow-lg transition-shadow duration-300 animate-fade-up"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              {/* Icon circle */}
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-sm"
                style={{ backgroundColor: color }}
                aria-hidden="true"
              >
                {emoji}
              </div>

              <h3 className="font-display font-bold text-xl text-chocolate">
                {title}
              </h3>
              <p className="font-body text-sm text-chocolate-muted leading-relaxed">
                {description}
              </p>
            </article>
          ))}
        </div>

        {/* Bottom quote */}
        <blockquote className="text-center max-w-2xl mx-auto">
          <p className="font-display text-2xl md:text-3xl font-bold text-chocolate italic leading-snug">
            &ldquo;El café es el pretexto perfecto para{" "}
            <span className="text-coral not-italic">vivir despacio</span>.&rdquo;
          </p>
          <footer className="mt-4 font-body text-sm text-chocolate-muted">
            — Fundadores de Onea Coffee
          </footer>
        </blockquote>

      </div>
    </section>
  );
}
