import Link from "next/link";
import { BookButton } from "./BookDialog";
import { links, locations, policy, reviews, specials, team } from "@/lib/site";

// Sections shared between the home page and the inner pages. All facts come from lib/site.ts.

export function Reviews() {
  return (
    <section aria-labelledby="love-title" className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
      <h2 id="love-title" className="max-w-2xl font-display text-4xl tracking-tight md:text-5xl" data-reveal>
        We love our customers, <span className="text-clay-deep italic">and they love us.</span>
      </h2>
      <ul className="mt-12 grid gap-6 md:grid-cols-3">
        {reviews.map((r) => (
          <li key={r.quote} className="flex flex-col justify-between rounded-3xl border border-juniper/10 bg-white/50 p-7" data-reveal>
            <span aria-hidden className="font-display text-5xl leading-none text-clay/70">&ldquo;</span>
            <blockquote className="mt-2 font-display text-xl leading-snug">{r.quote}</blockquote>
            <p className="mt-6 text-sm tracking-[0.14em] text-muted uppercase">{r.by}</p>
          </li>
        ))}
      </ul>
      <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted" data-reveal>
        <li className="flex items-center gap-2">
          <span aria-hidden className="text-sage-deep">&#10045;</span> Authorized Eminence Organic Skin Care dealer
        </li>
        <li className="flex items-center gap-2">
          <span aria-hidden className="text-sage-deep">&#10045;</span> New Mexico True Certified
        </li>
        <li className="flex items-center gap-2">
          <span aria-hidden className="text-sage-deep">&#10045;</span> Two Albuquerque locations
        </li>
      </ul>
    </section>
  );
}

export function Specials() {
  return (
    <section aria-labelledby="specials-title" className="bg-juniper py-20 text-cream md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 md:px-8 lg:grid-cols-[1fr_1.4fr]">
        <div data-reveal>
          <p className="text-xs tracking-[0.22em] text-sage uppercase">Seasonal</p>
          <h2 id="specials-title" className="mt-3 font-display text-4xl tracking-tight md:text-5xl">
            Spa <span className="italic text-[#e6a585]">specials</span>
          </h2>
          <p className="mt-4 max-w-sm text-cream/75">Limited treatments from the spa and the nail boutique. Lash and brow specials coming soon.</p>
          <div className="mt-8">
            <BookButton variant="light">Book a special</BookButton>
          </div>
        </div>
        <ul className="grid gap-x-10 sm:grid-cols-2" data-reveal>
          {specials.map((s) => (
            <li key={s.name} className="flex items-baseline justify-between gap-4 border-b border-cream/15 py-5">
              <span>
                <span className="block font-display text-lg">{s.name}</span>
                <span className="block text-sm text-cream/65">{[s.time, s.note].filter(Boolean).join(" · ")}</span>
              </span>
              <span className="font-display text-lg">{s.price}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("");
}

export function TeamGrid({ limit }: { limit?: number }) {
  const people = limit ? team.slice(0, limit) : team;
  return (
    // TODO: add staff photos once uploaded; initials stand in until then.
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {people.map((t) => (
        <li key={t.name} className="flex gap-4 rounded-3xl bg-cream/80 p-5" data-reveal>
          <span aria-hidden className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-juniper font-display text-lg text-cream">
            {initials(t.name)}
          </span>
          <span>
            <span className="block font-display text-lg leading-tight">{t.name}</span>
            <span className="block text-xs tracking-[0.14em] text-clay-deep uppercase">{t.role}</span>
            <span className="mt-2 block text-[0.95rem] leading-relaxed text-muted">{t.note}</span>
          </span>
        </li>
      ))}
    </ul>
  );
}

const linkUnderline = "underline decoration-juniper/30 underline-offset-4 hover:decoration-clay-deep";

// Full location cards with address, hours, phone, email and a booking link each.
export function LocationCards({ headingLevel = "h3" }: { headingLevel?: "h2" | "h3" }) {
  const H = headingLevel;
  return (
    <ul className="grid gap-6 lg:grid-cols-2">
      {locations.map((l) => (
        <li key={l.name} className="flex flex-col rounded-3xl border border-juniper/10 bg-white/55 p-7 md:p-9" data-reveal>
          <H className="font-display text-2xl md:text-3xl">{l.name}</H>
          <p className="mt-2 text-muted">{l.offers}</p>
          <dl className="mt-6 grid gap-4 text-[0.95rem] sm:grid-cols-2">
            <div>
              <dt className="text-xs tracking-[0.16em] text-sage-deep uppercase">Address</dt>
              <dd className="mt-1">
                <a href={l.map} target="_blank" rel="noopener" className={linkUnderline}>
                  {l.street}
                  <br />
                  {l.city}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs tracking-[0.16em] text-sage-deep uppercase">Hours</dt>
              <dd className="mt-1">{l.hours ?? "Call for hours"}</dd>
            </div>
            <div>
              <dt className="text-xs tracking-[0.16em] text-sage-deep uppercase">Phone</dt>
              <dd className="mt-1">
                <a href={`tel:${l.tel}`} className={linkUnderline}>
                  {l.phone}
                </a>
              </dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="text-xs tracking-[0.16em] text-sage-deep uppercase">Email</dt>
              <dd className="mt-1 [overflow-wrap:anywhere]">
                <a href={`mailto:${l.email}`} className={linkUnderline}>
                  {l.email}
                </a>
              </dd>
            </div>
          </dl>
          <a
            href={l.book}
            target="_blank"
            rel="noopener"
            className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 self-start rounded-full bg-clay-deep px-7 font-medium text-cream transition-colors hover:bg-juniper"
          >
            Book at {l.name.includes("Nail") ? "the Nail Boutique" : "the Spa"} <span aria-hidden>&rarr;</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export function GiftCertificates() {
  return (
    <div className="rounded-3xl border border-juniper/10 bg-white/50 p-6">
      <h3 className="font-display text-xl">Gift certificates</h3>
      <p className="mt-1 text-sm text-muted">Bought online through Square. Gift certificates are non-refundable.</p>
      <ul className="mt-4 grid gap-2 sm:grid-cols-2">
        <li>
          <a href={links.giftSpa} target="_blank" rel="noopener" className="flex min-h-11 items-center justify-between rounded-xl bg-sand px-4 text-[0.95rem] transition-colors hover:bg-sand-deep">
            Store &amp; spa <span aria-hidden>&rarr;</span>
          </a>
        </li>
        <li>
          <a href={links.giftNails} target="_blank" rel="noopener" className="flex min-h-11 items-center justify-between rounded-xl bg-sand px-4 text-[0.95rem] transition-colors hover:bg-sand-deep">
            Nails &amp; massage <span aria-hidden>&rarr;</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export function Policy({ nails = false }: { nails?: boolean }) {
  return (
    <p className="max-w-2xl text-sm text-muted">
      {policy}
      {nails && " As a natural nail salon, we don’t offer acrylic or dip powder nails, or their removal."}
    </p>
  );
}

// "Next page" teaser used at the bottom of inner pages so every page leads somewhere.
export function NextLink({ href, label, body }: { href: string; label: string; body: string }) {
  return (
    <Link
      href={href}
      className="group flex items-center justify-between gap-6 rounded-3xl bg-sand/70 p-7 transition-colors hover:bg-sand md:p-9"
    >
      <span>
        <span className="block text-xs tracking-[0.2em] text-sage-deep uppercase">Next</span>
        <span className="mt-1 block font-display text-3xl md:text-4xl">{label}</span>
        <span className="mt-1 block text-muted">{body}</span>
      </span>
      <span aria-hidden className="text-3xl text-clay-deep transition-transform group-hover:translate-x-1">&rarr;</span>
    </Link>
  );
}
