"use client";

import { useEffect, useRef } from "react";
import { links } from "@/lib/site";

const OPEN_EVENT = "yes:book";

// The spa and the nail boutique book through separate Square pages, so "Book" first asks which one.
// Without JS the button is a plain link to the #book section, which lists both.
export function BookButton({
  children = "Book an appointment",
  variant = "solid",
  className = "",
}: {
  children?: React.ReactNode;
  variant?: "solid" | "outline" | "light";
  className?: string;
}) {
  const styles = {
    solid: "bg-clay-deep text-cream hover:bg-juniper",
    outline: "border border-clay-deep/50 text-clay-deep hover:bg-clay-deep hover:text-cream",
    light: "bg-cream text-juniper hover:bg-sand",
  }[variant];
  return (
    <a
      href="#book"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        window.dispatchEvent(new Event(OPEN_EVENT));
      }}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-7 text-[0.95rem] font-medium tracking-wide transition-colors focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-clay-deep ${styles} ${className}`}
    >
      {children}
    </a>
  );
}

export function BookDialog() {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const open = () => ref.current?.showModal();
    window.addEventListener(OPEN_EVENT, open);
    return () => window.removeEventListener(OPEN_EVENT, open);
  }, []);

  const choices = [
    {
      href: links.bookSpa,
      title: "The Spa",
      body: "Facials, clinical treatments, herbal consultations, lash & brow, waxing",
      where: "3420 Lomas Blvd. NE",
    },
    {
      href: links.bookNails,
      title: "The Nail Boutique",
      body: "Natural manicures, pedicures and massage",
      where: "625 Amherst Dr NE",
    },
  ];

  return (
    <dialog
      ref={ref}
      aria-labelledby="book-title"
      onClick={(e) => e.target === ref.current && ref.current?.close()}
      className="m-auto w-[min(92vw,34rem)] rounded-3xl bg-cream p-0 text-juniper shadow-2xl backdrop:bg-juniper/50 backdrop:backdrop-blur-sm"
    >
      <div className="p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <h2 id="book-title" className="font-display text-3xl">What are you booking?</h2>
          <button
            type="button"
            onClick={() => ref.current?.close()}
            className="-mt-1 -mr-2 grid h-11 w-11 place-items-center rounded-full text-muted hover:bg-sand"
            aria-label="Close"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>
        <p className="mt-2 text-muted">Each location has its own booking page. You&rsquo;ll pick a time on Square.</p>
        <ul className="mt-6 grid gap-3">
          {choices.map((c) => (
            <li key={c.title}>
              <a
                href={c.href}
                target="_blank"
                rel="noopener"
                className="group flex items-center justify-between gap-4 rounded-2xl border border-juniper/15 bg-white/60 p-5 transition-colors hover:border-clay-deep hover:bg-white"
              >
                <span>
                  <span className="block font-display text-xl">{c.title}</span>
                  <span className="mt-1 block text-[0.95rem] text-muted">{c.body}</span>
                  <span className="mt-2 block text-xs tracking-[0.14em] text-sage-deep uppercase">{c.where}</span>
                </span>
                <span aria-hidden className="text-2xl text-clay-deep transition-transform group-hover:translate-x-1">&rarr;</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </dialog>
  );
}
