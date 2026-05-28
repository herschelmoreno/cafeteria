"use client";

import { useState, FormEvent } from "react";

type ReservationState = "idle" | "submitting" | "success" | "error";

const hoursOptions = [
  "8:00", "9:00", "10:00", "11:00", "12:00",
  "13:00", "14:00", "15:00", "16:00", "17:00",
  "18:00", "19:00", "20:00", "21:00",
];

const grupoOptions = ["1", "2", "3", "4", "5", "6-8", "9-12", "12+"];

type Fields = {
  nombre: string;
  correo: string;
  grupo: string;
  fecha: string;
  hora: string;
  notas: string;
};

const empty: Fields = {
  nombre: "",
  correo: "",
  grupo: "2",
  fecha: "",
  hora: "12:00",
  notas: "",
};

export default function ReservationSection() {
  const [fields, setFields] = useState<Fields>(empty);
  const [status, setStatus] = useState<ReservationState>("idle");

  const today = new Date().toISOString().split("T")[0];

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch('/api/reservaciones', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fields),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  const inputBase =
    "w-full bg-moss-mid/40 border border-linen/20 rounded-btn px-4 py-3 font-body text-sm text-linen placeholder:text-linen/40 focus:outline-none focus:border-gold/60 focus:bg-moss-mid/60 transition-all duration-200";

  const labelBase = "block font-body text-xs font-medium text-linen/60 uppercase tracking-wider mb-2";

  return (
    <section id="reservar" className="bg-moss py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-terra/20 text-terra-light font-body text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Reservaciones
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-linen leading-tight mb-4">
            Reserva tu Mesa
          </h2>
          <p className="font-body text-linen/60 text-base leading-relaxed max-w-md mx-auto">
            Asegura tu lugar para un buen café, una cata o simplemente una tarde tranquila
            con los tuyos.
          </p>
        </div>

        {status === "error" ? (
          /* ── Error state ── */
          <div className="bg-moss-mid/50 border border-terra/30 rounded-card p-10 text-center animate-fade-up">
            <span className="text-6xl mb-4 block" aria-hidden="true">⚠️</span>
            <h3 className="font-display font-bold text-2xl text-linen mb-3">
              Algo salió mal
            </h3>
            <p className="font-body text-linen/70 text-base leading-relaxed max-w-md mx-auto mb-6">
              No pudimos registrar tu reserva en este momento. Por favor intenta nuevamente
              o contáctanos al <strong className="text-gold">+51 999 000 111</strong>.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="font-body text-sm text-linen/60 hover:text-linen underline-offset-2 hover:underline transition-colors"
            >
              Intentar de nuevo
            </button>
          </div>
        ) : status === "success" ? (
          /* ── Success state ── */
          <div className="bg-moss-mid/50 border border-linen/20 rounded-card p-10 text-center animate-fade-up">
            <span className="text-6xl mb-4 block" aria-hidden="true">☕</span>
            <h3 className="font-display font-bold text-2xl text-linen mb-3">
              ¡Nos vemos pronto, {fields.nombre.split(" ")[0]}!
            </h3>
            <p className="font-body text-linen/70 text-base leading-relaxed max-w-md mx-auto mb-6">
              Tu reserva para{" "}
              <strong className="text-gold">{fields.grupo} {parseInt(fields.grupo) === 1 ? "persona" : "personas"}</strong>{" "}
              el{" "}
              <strong className="text-gold">
                {new Date(fields.fecha + "T12:00:00").toLocaleDateString("es-PE", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                })}
              </strong>{" "}
              a las <strong className="text-gold">{fields.hora} horas</strong> está registrada.
              Te confirmamos por correo a{" "}
              <strong className="text-gold">{fields.correo}</strong> a la brevedad.
            </p>
            <button
              onClick={() => { setStatus("idle"); setFields(empty); }}
              className="font-body text-sm text-linen/60 hover:text-linen underline-offset-2 hover:underline transition-colors"
            >
              Hacer otra reserva
            </button>
          </div>
        ) : (
          /* ── Form ── */
          <form
            onSubmit={handleSubmit}
            className="bg-moss-mid/40 border border-linen/15 rounded-card p-8 md:p-10 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {/* Nombre */}
            <div className="sm:col-span-2">
              <label htmlFor="nombre" className={labelBase}>
                Nombre completo
              </label>
              <input
                id="nombre"
                name="nombre"
                type="text"
                required
                value={fields.nombre}
                onChange={handleChange}
                placeholder="Ana Sofía Castellanos"
                className={inputBase}
              />
            </div>

            {/* Correo */}
            <div className="sm:col-span-2">
              <label htmlFor="correo" className={labelBase}>
                Correo electrónico
              </label>
              <input
                id="correo"
                name="correo"
                type="email"
                required
                value={fields.correo}
                onChange={handleChange}
                placeholder="ana@email.com"
                className={inputBase}
              />
            </div>

            {/* Grupo */}
            <div>
              <label htmlFor="grupo" className={labelBase}>
                Tamaño del grupo
              </label>
              <select
                id="grupo"
                name="grupo"
                required
                value={fields.grupo}
                onChange={handleChange}
                className={inputBase}
              >
                {grupoOptions.map((g) => (
                  <option key={g} value={g}>
                    {g} {g === "1" ? "persona" : "personas"}
                  </option>
                ))}
              </select>
            </div>

            {/* Hora */}
            <div>
              <label htmlFor="hora" className={labelBase}>
                Hora preferida
              </label>
              <select
                id="hora"
                name="hora"
                required
                value={fields.hora}
                onChange={handleChange}
                className={inputBase}
              >
                {hoursOptions.map((h) => (
                  <option key={h} value={h}>{h} horas</option>
                ))}
              </select>
            </div>

            {/* Fecha */}
            <div className="sm:col-span-2">
              <label htmlFor="fecha" className={labelBase}>
                Fecha
              </label>
              <input
                id="fecha"
                name="fecha"
                type="date"
                required
                min={today}
                value={fields.fecha}
                onChange={handleChange}
                className={inputBase}
              />
            </div>

            {/* Notas */}
            <div className="sm:col-span-2">
              <label htmlFor="notas" className={labelBase}>
                Notas adicionales{" "}
                <span className="text-linen/30 normal-case">(opcional)</span>
              </label>
              <textarea
                id="notas"
                name="notas"
                rows={3}
                value={fields.notas}
                onChange={handleChange}
                placeholder="Alergias, ocasión especial, preferencias de mesa…"
                className={`${inputBase} resize-none`}
              />
            </div>

            {/* Submit */}
            <div className="sm:col-span-2">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full bg-terra hover:bg-terra-light disabled:opacity-60 disabled:cursor-not-allowed text-linen font-body font-medium py-4 rounded-btn transition-all duration-200 active:scale-[0.98] flex items-center justify-center gap-2"
              >
                {status === "submitting" ? (
                  <>
                    <span className="w-4 h-4 border-2 border-linen/40 border-t-linen rounded-full animate-spin" aria-hidden="true" />
                    Enviando…
                  </>
                ) : (
                  "Confirmar Reserva"
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
