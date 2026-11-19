import Link from "next/link";
import { BookButton } from "@/components/ui/BookDialog";
import { Ticker } from "@/components/ui/Ticker";
import { PageShell, secondaryBtn } from "@/components/ui/PageShell";
import { GiftCertificates, Reviews, Specials, TeamGrid } from "@/components/ui/blocks";
import { ProductCard } from "@/components/ui/ProductCard";
import { products } from "@/lib/products";
import { HeroVisual } from "@/components/three/HeroVisual";
import { links, locations, reviews, team } from "@/lib/site";

// A few of the shop's own handmade products for the home page.
const featured = ["Healing Salve", "Facial Oil", "Flower Power Toner", "Golden Glow Balm"]
  .map((n) => products.find((p) => p.name === n))
  .filter((p) => p !== undefined);

const pillars = [
  {
    n: "01",
    href: "/services#facials",
    title: "Organic facials",
    body: "Sixteen luxury facials, clinical treatments and herbal consultations, from $95.",
    tint: "bg-sand",
  },
  {
    n: "02",
    href: "/services#lash-brow",
    title: "Lash & brow bar",
    body: "Lifts, tints, brow lamination and gentle face and body waxing.",
    tint: "bg-[#e6dccb]",
  },
  {
    n: "03",
    href: "/services#nails",
    title: "Natural nails",
    body: "Healthy manicures and pedicures. No acrylics, no dip powder.",
    tint: "bg-[#dfe2cf]",
  },
  {
    n: "04",
    href: "/services#massage",
    title: "Massage & Reiki",
    body: "Signature, hot stone and deep tissue massage, cupping, craniosacral and Reiki.",
    tint: "bg-[#ecd6c7]",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "DaySpa",
  name: "Yes Organic Boutique & Spa",
  url: "https://yesorganicboutique.com",
  email: locations[0].email,
  telephone: locations[0].phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: "3420 Lomas Blvd. NE",
    addressLocality: "Albuquerque",
    addressRegion: "NM",
    postalCode: "87106",
    addressCountry: "US",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "10:00",
    closes: "18:00",
  },
  sameAs: [links.facebook, links.instagram],
};


export default function Home() {
  return (
    <PageShell>
        {/* Hero */}
        <section id="top" className="relative overflow-hidden">
          <div className="mx-auto grid max-w-7xl items-center gap-6 px-4 pt-8 pb-14 md:px-8 lg:min-h-[calc(100svh-4rem)] lg:grid-cols-[1.1fr_1fr] lg:gap-10 lg:py-12">
            <div className="relative z-10">
              <p className="text-xs tracking-[0.22em] text-sage-deep uppercase">Albuquerque, New Mexico &middot; Open 7 days</p>
              <h1 className="mt-4 font-display text-[2.6rem] leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
                Organic facials, natural nails <span className="text-clay-deep italic">&amp;&nbsp;massage.</span>
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
                Albuquerque&rsquo;s apothecary-style spa and natural nail salon. We hand-blend organic skincare in our shop and use it,
                with Eminence Organics, in our treatments.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <BookButton />
                <Link href="/services" className={secondaryBtn}>
                  Services &amp; prices
                </Link>
              </div>
              <figure className="mt-9 flex max-w-md items-start gap-3 border-l-2 border-clay/60 pl-4">
                <blockquote className="font-display text-lg leading-snug italic">&ldquo;{reviews[0].quote}&rdquo;</blockquote>
              </figure>
              <p className="mt-2 pl-[1.1rem] text-sm text-muted">&mdash; {reviews[0].by}</p>
            </div>

            <div className="relative mx-auto mt-6 aspect-[4/5] w-full max-w-[19rem] sm:max-w-md lg:mt-0 lg:max-w-none">
              <div className="arch absolute inset-0 bg-gradient-to-b from-sand via-[#efe3cf] to-sand-deep" aria-hidden />
              <div className="arch absolute inset-4 border border-juniper/10" aria-hidden />
              <div className="absolute inset-0">
                <HeroVisual />
              </div>
              <p className="absolute right-0 bottom-6 left-0 text-center text-[0.65rem] tracking-[0.3em] text-juniper/60 uppercase">
                Handmade &middot; Organic &middot; Local where we can
              </p>
            </div>
          </div>
        </section>

        <Ticker
          className="border-y border-juniper/10 bg-juniper py-4 font-display text-xl text-cream italic"
          items={["Organic facials", "Herbal consultations", "Lash & brow bar", "Waxing", "Natural nails", "Massage", "Reiki", "Apothecary"]}
        />

        <Reviews />

        {/* What we do */}
        <section aria-labelledby="pillars-title" className="mx-auto max-w-7xl px-4 pb-20 md:px-8 md:pb-28">
          <div className="flex items-end justify-between gap-4" data-reveal>
            <h2 id="pillars-title" className="font-display text-4xl tracking-tight md:text-5xl">
              What we <span className="text-clay-deep italic">do</span>
            </h2>
            <Link href="/services" className="shrink-0 text-[0.95rem] font-medium text-clay-deep">
              All services &amp; prices <span aria-hidden>&rarr;</span>
            </Link>
          </div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p) => (
              <li key={p.n} data-reveal>
                <Link href={p.href} className={`arch group flex h-full min-h-[16rem] flex-col sm:min-h-[22rem] justify-end p-7 transition-transform hover:-translate-y-1 ${p.tint}`}>
                  <span className="font-display text-sm text-clay-deep">{p.n}</span>
                  <span className="mt-2 font-display text-2xl">{p.title}</span>
                  <span className="mt-2 text-[0.95rem] leading-relaxed text-muted">{p.body}</span>
                  <span className="mt-5 text-sm font-medium text-clay-deep">
                    See prices <span aria-hidden className="inline-block transition-transform group-hover:translate-x-1">&rarr;</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <Specials />

        {/* Apothecary */}
        <section id="apothecary" aria-labelledby="apothecary-title" className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="arch relative order-2 aspect-[4/5] max-h-[36rem] overflow-hidden bg-[#e6dccb] lg:order-1" aria-hidden data-reveal>
              {/* TODO: replace with the client's apothecary jars photo (Yes-Organic-Boutique-Spa-Ingredients-Jars.jpg). */}
              <svg viewBox="0 0 400 500" className="absolute inset-0 h-full w-full text-sage-deep/70" fill="none" stroke="currentColor" strokeWidth="1.4">
                <path d="M200 470 C 198 360 205 260 200 120" />
                {[150, 200, 250, 300, 350, 400].map((y, i) => (
                  <g key={y}>
                    <path d={`M200 ${y} C ${240 + i * 4} ${y - 30} ${270 + i * 6} ${y - 40} ${290 + i * 6} ${y - 70} C ${255} ${y - 60} ${222} ${y - 40} 200 ${y}`} />
                    <path d={`M200 ${y + 22} C ${160 - i * 4} ${y - 8} ${130 - i * 6} ${y - 18} ${110 - i * 6} ${y - 48} C ${145} ${y - 38} ${178} ${y - 18} 200 ${y + 22}`} />
                  </g>
                ))}
                <circle cx="200" cy="105" r="12" className="text-clay" stroke="currentColor" />
              </svg>
            </div>
            <div className="order-1 lg:order-2" data-reveal>
              <p className="text-xs tracking-[0.22em] text-sage-deep uppercase">The boutique</p>
              <h2 id="apothecary-title" className="mt-3 font-display text-4xl tracking-tight md:text-6xl">
                Handmade organic <span className="text-clay-deep italic">skincare</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted">
                We&rsquo;re always mixing up new products from natural and organic ingredients, sourced locally when we can. Visit the
                apothecary to blend a custom product of your own, with bottles priced by the ounce.
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                We also carry Eminence Organic Skin Care. If an item is out of stock or not in the shop, we can ship it to you. Prefer
                curbside? Call {locations[0].phone} to set a pickup time.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/shop" className="inline-flex min-h-12 items-center rounded-full bg-clay-deep px-7 font-medium text-cream transition-colors hover:bg-juniper">
                  Shop the apothecary
                </Link>
                <a href={links.etsy} target="_blank" rel="noopener" className="inline-flex min-h-12 items-center rounded-full border border-juniper/25 px-6 transition-colors hover:border-juniper">
                  Our Etsy shop
                </a>
              </div>
              <div className="mt-10">
                <GiftCertificates />
              </div>
            </div>
          </div>
          <div className="mt-16" data-reveal>
            <div className="flex items-end justify-between gap-4">
              <h3 className="font-display text-2xl md:text-3xl">From the apothecary</h3>
              <Link href="/shop" className="shrink-0 text-[0.95rem] font-medium text-clay-deep">
                See all {products.length} products <span aria-hidden>&rarr;</span>
              </Link>
            </div>
            <ul className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
              {featured.map((p) => (
                <li key={p.url}>
                  <ProductCard product={p} />
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Team teaser */}
        <section aria-labelledby="team-title" className="bg-sand/60 py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <div className="flex flex-wrap items-end justify-between gap-4" data-reveal>
              <div>
                <p className="text-xs tracking-[0.22em] text-sage-deep uppercase">Meet the team</p>
                <h2 id="team-title" className="mt-3 max-w-3xl font-display text-4xl tracking-tight md:text-5xl">
                  Estheticians, herbalists, nail techs <span className="text-clay-deep italic">&amp; healers</span>
                </h2>
              </div>
              <Link href="/team" className="shrink-0 text-[0.95rem] font-medium text-clay-deep">
                Meet all {team.length} <span aria-hidden>&rarr;</span>
              </Link>
            </div>
            <div className="mt-12">
              <TeamGrid limit={3} />
            </div>
          </div>
        </section>

        {/* Visit teaser */}
        <section aria-labelledby="visit-title" className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
          <div className="flex flex-wrap items-end justify-between gap-4" data-reveal>
            <h2 id="visit-title" className="font-display text-4xl tracking-tight md:text-6xl">
              Two places <span className="text-clay-deep italic">to unwind</span>
            </h2>
            <Link href="/visit" className="shrink-0 text-[0.95rem] font-medium text-clay-deep">
              Hours, directions &amp; booking <span aria-hidden>&rarr;</span>
            </Link>
          </div>
          <ul className="mt-10 grid gap-4 md:grid-cols-2">
            {locations.map((l) => (
              <li key={l.name} data-reveal>
                <Link
                  href="/visit"
                  className="group flex h-full flex-col rounded-3xl border border-juniper/10 bg-white/55 p-7 transition-colors hover:border-juniper/30 md:p-9"
                >
                  <span className="font-display text-2xl md:text-3xl">{l.name}</span>
                  <span className="mt-2 text-muted">{l.offers}</span>
                  <span className="mt-5 text-[0.95rem]">
                    {l.street}, {l.city}
                  </span>
                  <span className="text-[0.95rem] text-muted">{l.hours ?? "Call for hours"}</span>
                  <span className="mt-5 text-sm font-medium text-clay-deep">
                    Visit &amp; book <span aria-hidden className="inline-block transition-transform group-hover:translate-x-1">&rarr;</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </PageShell>
  );
}
