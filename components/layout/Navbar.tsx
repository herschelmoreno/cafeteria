import Link from "next/link";

const navLinks = [
  { label: "Inicio",    href: "/" },
  { label: "Menú",      href: "/menu" },
  { label: "Nosotros",  href: "/about" },
  { label: "Reservar",  href: "/#reservar" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-linen/95 border-b border-linen-border/60 backdrop-blur-sm">
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between gap-6">

        {/* ── Logo ── */}
        <Link
          href="/"
          className="flex items-center gap-2.5 shrink-0 group"
          aria-label="Café Mossitos — ir al inicio"
        >
          <span className="w-8 h-8 flex items-center justify-center rounded-full bg-moss text-linen text-base font-bold transition-transform duration-200 group-hover:rotate-12 font-display">
            M
          </span>
          <span className="font-display font-bold text-xl text-moss tracking-tight">
            Mossitos<span className="text-terra">.</span>
          </span>
        </Link>

        {/* ── Nav Links (desktop) ── */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                className="link-underline font-body text-sm font-medium text-moss-light hover:text-moss transition-colors duration-150"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* ── CTA (desktop) ── */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="tel:+51999000111"
            className="font-body text-sm font-medium text-moss-light hover:text-moss transition-colors duration-150 flex items-center gap-1.5"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.02 1.18 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14z" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>+51 999 000 111</span>
          </Link>
        </div>

        {/* ── Mobile menu toggle ── */}
        <button
          className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg text-moss hover:bg-linen-deeper transition-colors"
          aria-label="Abrir menú"
          type="button"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="w-5 h-5"
            aria-hidden="true"
          >
            <path d="M3 12h18M3 6h18M3 18h18" strokeLinecap="round" />
          </svg>
        </button>

      </nav>
    </header>
  );
}
