"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BookButton } from "./BookDialog";
import { Logo } from "./Logo";
import { nav } from "@/lib/nav";


export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // The phone menu closes when a link is chosen or Escape is pressed.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isCurrent = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-juniper/10 bg-cream/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 md:px-8">
        <Link href="/" onClick={() => setOpen(false)} className="shrink-0" aria-label="Yes Organic Boutique & Spa, home">
          <Logo />
        </Link>
        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex gap-8 text-[0.95rem]">
            {nav.map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  aria-current={isCurrent(n.href) ? "page" : undefined}
                  className="relative py-2 transition-colors hover:text-clay-deep aria-[current=page]:text-clay-deep after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-clay-deep after:transition-transform aria-[current=page]:after:scale-x-100"
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-1">
          <BookButton className="min-h-10! px-5! text-sm!">Book now</BookButton>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-11 w-11 place-items-center rounded-full transition-colors hover:bg-sand md:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 8h16M4 16h16" />}
            </svg>
          </button>
        </div>
      </div>

      <nav id="mobile-nav" aria-label="Main menu" hidden={!open} className="border-t border-juniper/10 bg-cream md:hidden">
        <ul className="mx-auto max-w-7xl px-4 py-3">
          <li>
            <Link
              href="/"
              onClick={() => setOpen(false)}
              aria-current={pathname === "/" ? "page" : undefined}
              className="flex min-h-12 items-center justify-between border-b border-juniper/10 font-display text-2xl aria-[current=page]:text-clay-deep"
            >
              Home <span aria-hidden className="text-base text-clay-deep">&rarr;</span>
            </Link>
          </li>
          {nav.map((n) => (
            <li key={n.href}>
              <Link
                href={n.href}
                onClick={() => setOpen(false)}
                aria-current={isCurrent(n.href) ? "page" : undefined}
                className="flex min-h-12 items-center justify-between border-b border-juniper/10 font-display text-2xl last:border-0 aria-[current=page]:text-clay-deep"
              >
                {n.label} <span aria-hidden className="text-base text-clay-deep">&rarr;</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
