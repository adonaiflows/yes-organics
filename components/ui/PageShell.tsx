import { Reveal } from "./Reveal";

// Page content. The skip link, header, <main> and footer live in app/layout.tsx so they persist
// between pages (and Next scrolls a new page to its top instead of to the old footer).
export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Reveal />
    </>
  );
}

// The opening block of an inner page: eyebrow, one h1, a lede, then the page's CTAs.
export function PageIntro({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow: React.ReactNode;
  title: React.ReactNode;
  lede: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-10 pb-10 md:px-8 md:pt-16 md:pb-14">
      <p className="text-xs tracking-[0.22em] text-sage-deep uppercase">{eyebrow}</p>
      <h1 className="mt-4 max-w-4xl font-display text-[2.6rem] leading-[1.02] tracking-tight sm:text-6xl md:text-7xl">{title}</h1>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{lede}</p>
      {children && <div className="mt-7 flex flex-wrap items-center gap-3">{children}</div>}
    </section>
  );
}

export const secondaryBtn =
  "inline-flex min-h-12 items-center rounded-full border border-juniper/25 px-6 text-[0.95rem] transition-colors hover:border-juniper";
