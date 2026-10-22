import { Header } from "@/components/ui/Header";
import { BookButton } from "@/components/ui/BookDialog";
import { ServiceMenu } from "@/components/ui/ServiceMenu";
import { Ticker } from "@/components/ui/Ticker";
import { Reveal } from "@/components/ui/Reveal";
import { Wordmark } from "@/components/ui/Wordmark";
import { HeroVisual } from "@/components/three/HeroVisual";
import { links, locations, policy, reviews, specials, team } from "@/lib/site";

const pillars = [
  {
    n: "01",
    title: "Organic facials",
    body: "Sixteen luxury facials, clinical treatments and herbal consultations, from $95.",
    tint: "bg-sand",
  },
  {
    n: "02",
    title: "Lash & brow bar",
    body: "Lifts, tints, brow lamination and gentle face and body waxing.",
    tint: "bg-[#e6dccb]",
  },
  {
    n: "03",
    title: "Natural nails",
    body: "Healthy manicures and pedicures. No acrylics, no dip powder.",
    tint: "bg-[#dfe2cf]",
  },
  {
    n: "04",
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

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("");
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-juniper focus:px-4 focus:py-2 focus:text-cream">
        Skip to content
      </a>
      <Header />
      <Reveal />

      <main id="main">
        {/* Hero */}
        <section id="top" className="relative overflow-hidden pt-16">
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
                <a
                  href="#services"
                  className="inline-flex min-h-12 items-center rounded-full border border-juniper/25 px-6 text-[0.95rem] transition-colors hover:border-juniper"
                >
                  Services &amp; prices
                </a>
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

        {/* Social proof */}
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

        {/* What we do */}
        <section aria-labelledby="pillars-title" className="mx-auto max-w-7xl px-4 pb-20 md:px-8 md:pb-28">
          <h2 id="pillars-title" className="sr-only">What we do</h2>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p) => (
              <li key={p.n} data-reveal>
                <a href="#services" className={`arch group flex h-full min-h-[16rem] flex-col sm:min-h-[22rem] justify-end p-7 transition-transform hover:-translate-y-1 ${p.tint}`}>
                  <span className="font-display text-sm text-clay-deep">{p.n}</span>
                  <span className="mt-2 font-display text-2xl">{p.title}</span>
                  <span className="mt-2 text-[0.95rem] leading-relaxed text-muted">{p.body}</span>
                  <span className="mt-5 text-sm font-medium text-clay-deep">
                    See prices <span aria-hidden className="inline-block transition-transform group-hover:translate-x-1">&rarr;</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* Menu */}
        <section id="services" aria-labelledby="services-title" className="bg-white/45 py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <p className="text-xs tracking-[0.22em] text-sage-deep uppercase">By appointment</p>
            <h2 id="services-title" className="mt-3 font-display text-4xl tracking-tight md:text-6xl">
              Services <span className="text-clay-deep italic">&amp; prices</span>
            </h2>
            <div className="mt-10">
              <ServiceMenu />
            </div>
            <p className="mt-12 max-w-2xl text-sm text-muted">{policy}</p>
          </div>
        </section>

        {/* Specials */}
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
                <a href={links.shop} target="_blank" rel="noopener" className="inline-flex min-h-12 items-center rounded-full bg-clay-deep px-7 font-medium text-cream transition-colors hover:bg-juniper">
                  Shop online
                </a>
                <a href={links.etsy} target="_blank" rel="noopener" className="inline-flex min-h-12 items-center rounded-full border border-juniper/25 px-6 transition-colors hover:border-juniper">
                  Our Etsy shop
                </a>
              </div>
              <div className="mt-10 rounded-3xl border border-juniper/10 bg-white/50 p-6">
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
            </div>
          </div>
        </section>

        {/* Team */}
        <section id="team" aria-labelledby="team-title" className="bg-sand/60 py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <p className="text-xs tracking-[0.22em] text-sage-deep uppercase">Meet the team</p>
            <h2 id="team-title" className="mt-3 max-w-3xl font-display text-4xl tracking-tight md:text-5xl">
              Estheticians, herbalists, nail techs <span className="text-clay-deep italic">&amp; healers</span>
            </h2>
            {/* TODO: add staff photos once uploaded; initials stand in until then. */}
            <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {team.map((t) => (
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
          </div>
        </section>

        {/* Visit / book */}
        <section id="visit" aria-labelledby="visit-title" className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
          <span id="book" />
          <h2 id="visit-title" className="font-display text-4xl tracking-tight md:text-6xl">
            Two places <span className="text-clay-deep italic">to unwind</span>
          </h2>
          <ul className="mt-12 grid gap-6 lg:grid-cols-2">
            {locations.map((l) => (
              <li key={l.name} className="flex flex-col rounded-3xl border border-juniper/10 bg-white/55 p-7 md:p-9" data-reveal>
                <h3 className="font-display text-2xl md:text-3xl">{l.name}</h3>
                <p className="mt-2 text-muted">{l.offers}</p>
                <dl className="mt-6 grid gap-4 text-[0.95rem] sm:grid-cols-2">
                  <div>
                    <dt className="text-xs tracking-[0.16em] text-sage-deep uppercase">Address</dt>
                    <dd className="mt-1">
                      <a href={l.map} target="_blank" rel="noopener" className="underline decoration-juniper/30 underline-offset-4 hover:decoration-clay-deep">
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
                      <a href={`tel:${l.tel}`} className="underline decoration-juniper/30 underline-offset-4 hover:decoration-clay-deep">
                        {l.phone}
                      </a>
                    </dd>
                  </div>
                  <div className="sm:col-span-2">
                    <dt className="text-xs tracking-[0.16em] text-sage-deep uppercase">Email</dt>
                    <dd className="mt-1 [overflow-wrap:anywhere]">
                      <a href={`mailto:${l.email}`} className="underline decoration-juniper/30 underline-offset-4 hover:decoration-clay-deep">
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
          <p className="mt-8 max-w-2xl text-sm text-muted">
            {policy} As a natural nail salon, we don&rsquo;t offer acrylic or dip powder nails, or their removal.
          </p>
        </section>
      </main>

      <footer className="bg-juniper text-cream">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-8">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <h2 className="max-w-xl font-display text-4xl tracking-tight md:text-6xl">
              Make time <span className="italic text-[#e6a585]">for yourself.</span>
            </h2>
            <BookButton variant="light" />
          </div>
          <div className="mt-16 flex flex-col justify-between gap-8 border-t border-cream/15 pt-8 text-sm text-cream/70 md:flex-row">
            <Wordmark light />
            <ul className="flex flex-wrap gap-6">
              <li>
                <a href={links.instagram} target="_blank" rel="noopener" className="hover:text-cream">Instagram</a>
              </li>
              <li>
                <a href={links.facebook} target="_blank" rel="noopener" className="hover:text-cream">Facebook</a>
              </li>
              <li>
                <a href={links.shop} target="_blank" rel="noopener" className="hover:text-cream">Shop</a>
              </li>
              <li>
                <a href={links.giftSpa} target="_blank" rel="noopener" className="hover:text-cream">Gift certificates</a>
              </li>
            </ul>
            <p>&copy; {new Date().getFullYear()} Yes Organic Boutique &amp; Spa</p>
          </div>
        </div>
      </footer>
    </>
  );
}
