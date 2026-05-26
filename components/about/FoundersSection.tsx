import Image from "next/image";

const timeline = [
  {
    year: "2018",
    title: "El encuentro",
    desc: "Ana Sofía y Diego se conocen en la Feria Mistura. Él lleva sus panes de masa madre; ella busca el café perfecto. El match fue inmediato.",
  },
  {
    year: "2019",
    title: "La búsqueda del local",
    desc: "Recorren Lima durante meses buscando el espacio ideal. Nada convence — demasiado frío, demasiado ruidoso, demasiado impersonal.",
  },
  {
    year: "2020",
    title: "El pasaje que nadie quería",
    desc: "Encuentran el local en Psje. San Bernardo, Surco. El suelo estaba cubierto de musgo. A todos les pareció desolador. A ellos, perfecto. Abre Mossitos.",
  },
  {
    year: "2024",
    title: "Noches y mañanas",
    desc: "Llegan las Noches de Karaoke y las Catas de Café. El local que era solo una cafetería se convierte en el punto de encuentro del barrio.",
  },
];

export default function FoundersSection() {
  return (
    <section className="bg-linen py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* ── Intro ── */}
        <div className="max-w-2xl mb-16">
          <span className="inline-block font-body text-xs font-semibold text-terra uppercase tracking-widest mb-4">
            Nuestra Historia
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-moss leading-tight mb-6">
            El café que nació<br />de un pasaje con musgo.
          </h2>
          <p className="font-body text-moss-light text-lg leading-relaxed">
            En el barrio de San Lorenzo, Santiago de Surco, hay un pasaje que la mayoría
            de la gente pasa de largo. Nosotros lo vimos diferente.
          </p>
        </div>

        {/* ── Founders ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Ana Sofía */}
          <div className="flex flex-col sm:flex-row gap-8 items-start">
            <div className="relative w-40 h-40 shrink-0 rounded-card overflow-hidden">
              <Image
                src="/images/founder-ana-sofia.webp"
                alt="Ana Sofía Castellanos, co-fundadora de Café Mossitos"
                fill
                className="object-cover object-top"
                sizes="160px"
              />
            </div>
            <div>
              <h3 className="font-display font-bold text-2xl text-moss mb-1">
                Ana Sofía Castellanos
              </h3>
              <p className="font-body text-sm text-terra font-medium mb-4">
                Co-fundadora · Barista Certificada
              </p>
              <p className="font-body text-moss-light text-base leading-relaxed">
                Arquitecta limeña de 34 años, nacida en Miraflores. Dejó un estudio de
                arquitectura para seguir su pasión por el café de especialidad después
                de un viaje a los cafetales de Villa Rica, Junín, en 2017. Allí conoció
                de primera mano a los productores y entendió que el café peruano merecía
                más reconocimiento — y un lugar digno donde servirse.
              </p>
            </div>
          </div>

          {/* Diego */}
          <div className="flex flex-col sm:flex-row gap-8 items-start">
            <div className="relative w-40 h-40 shrink-0 rounded-card overflow-hidden">
              <Image
                src="/images/founder-diego.webp"
                alt="Diego Ríos, co-fundador de Café Mossitos"
                fill
                className="object-cover object-top"
                sizes="160px"
              />
            </div>
            <div>
              <h3 className="font-display font-bold text-2xl text-moss mb-1">
                Diego Ríos
              </h3>
              <p className="font-body text-sm text-terra font-medium mb-4">
                Co-fundador · Chef y Panadero
              </p>
              <p className="font-body text-moss-light text-base leading-relaxed">
                Chef cajamarquino de 38 años, criado entre los campos de café de su
                familia. Estudió cocina en Le Cordon Bleu Lima y se especializó en
                panadería artesanal. Regresó a Lima convencido de que los mejores
                sabores peruanos pertenecen a la mesa de todos — no solo a los
                restaurantes de moda.
              </p>
            </div>
          </div>
        </div>

        {/* ── The full story ── */}
        <div className="bg-linen-dark rounded-card p-10 mb-20 border border-linen-border/60">
          <h3 className="font-display font-bold text-2xl text-moss mb-5 leading-tight">
            La historia del pasaje que no queríamos perder
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-body text-moss-light text-base leading-relaxed">
            <div className="flex flex-col gap-4">
              <p>
                Se conocieron en la Feria Mistura de 2018. Diego llevaba sus panes
                de masa madre; Ana Sofía buscaba el café perfecto para acompañarlos.
                La conversación que empezó entre mesas de chefs y productores no
                terminó hasta que decidieron que tenían que hacer algo juntos.
              </p>
              <p>
                Pasaron meses buscando el local ideal en Lima. Todo parecía demasiado
                formal, demasiado costoso, demasiado lejos de ser el tipo de lugar
                que imaginaban.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <p>
                En 2020, encontraron un local en el pasaje San Bernardo, Surco —
                abandonado, con el suelo cubierto de musgo y plantas silvestres.
                A otros les pareció desolador. A ellos les pareció perfecto.
              </p>
              <p>
                Lo llamaron <strong className="text-moss">Mossitos</strong> — por el
                musgo que cubría el patio cuando lo encontraron. Lo llenaron de luz,
                plantas, madera y el mejor café de la región. Hoy, cada taza que
                servimos lleva un poco de esa historia.
              </p>
            </div>
          </div>
        </div>

        {/* ── Timeline ── */}
        <div>
          <h3 className="font-display font-bold text-2xl text-moss mb-10 text-center">
            Cómo llegamos hasta aquí
          </h3>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-linen-border md:-translate-x-px" aria-hidden="true" />

            <div className="flex flex-col gap-10">
              {timeline.map((item, i) => {
                const isRight = i % 2 === 0;
                return (
                  <div
                    key={item.year}
                    className={`relative flex gap-8 md:gap-0 ${isRight ? "md:flex-row" : "md:flex-row-reverse"}`}
                  >
                    {/* Content */}
                    <div className={`flex-1 md:px-12 pl-16 md:pl-0 ${isRight ? "md:text-right" : "md:text-left"}`}>
                      <span className="font-display font-bold text-3xl text-terra/40 block mb-1">
                        {item.year}
                      </span>
                      <h4 className="font-display font-bold text-xl text-moss mb-2">
                        {item.title}
                      </h4>
                      <p className="font-body text-base text-moss-light leading-relaxed max-w-xs ml-auto">
                        {item.desc}
                      </p>
                    </div>

                    {/* Dot */}
                    <div className="absolute left-4 md:left-1/2 top-2 w-4 h-4 rounded-full bg-terra border-2 border-linen md:-translate-x-2 shadow-sm" aria-hidden="true" />

                    {/* Spacer for opposite side */}
                    <div className="hidden md:block flex-1" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
