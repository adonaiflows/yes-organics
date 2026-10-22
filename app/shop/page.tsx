import type { Metadata } from "next";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { BookButton } from "@/components/ui/BookDialog";
import { ShopGrid } from "@/components/ui/ShopGrid";
import { SQUARE_STORE, products } from "@/lib/products";
import { links, locations } from "@/lib/site";

const title = "Shop Organic Skincare & Apothecary | Yes Organic Boutique & Spa";
const description =
  "Handmade organic balms, salves, oils and toners, plus Eminence Organic Skin Care, from Yes Organic Boutique & Spa in Albuquerque. Shop online or pick up curbside.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/shop" },
  openGraph: { title, description, url: "/shop", images: [{ url: "/og.png", width: 1200, height: 630, alt: "Yes Organic Boutique & Spa" }] },
};

export default function Shop() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-juniper focus:px-4 focus:py-2 focus:text-cream">
        Skip to content
      </a>
      <Header base="/" />

      <main id="main" className="pt-16">
        <section className="mx-auto max-w-7xl px-4 pt-12 pb-10 md:px-8 md:pt-16">
          <p className="text-xs tracking-[0.22em] text-sage-deep uppercase">The apothecary &middot; {products.length} products</p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[1.02] tracking-tight md:text-7xl">
            Shop organic <span className="text-clay-deep italic">skincare</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            Our handmade balms, salves, oils and toners, mixed here from natural and organic ingredients, alongside Eminence
            Organic Skin Care. Choose a product to see its price and check out securely on Square.
          </p>
        </section>

        <section aria-label="Products" className="mx-auto max-w-7xl px-4 pb-20 md:px-8">
          <ShopGrid />
        </section>

        <section aria-labelledby="ways-title" className="bg-sand/60 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <h2 id="ways-title" className="font-display text-3xl tracking-tight md:text-5xl">
              More ways <span className="text-clay-deep italic">to shop</span>
            </h2>
            <ul className="mt-10 grid gap-4 md:grid-cols-3">
              <li className="rounded-3xl bg-cream/80 p-7">
                <h3 className="font-display text-xl">Blend your own</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">
                  Visit the apothecary at {locations[0].street} to create a custom product with organic ingredients. Bottles are
                  priced by the ounce.
                </p>
              </li>
              <li className="rounded-3xl bg-cream/80 p-7">
                <h3 className="font-display text-xl">Curbside pickup</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">
                  Call{" "}
                  <a href={`tel:${locations[0].tel}`} className="underline decoration-juniper/30 underline-offset-4 hover:decoration-clay-deep">
                    {locations[0].phone}
                  </a>{" "}
                  to set a time. Eminence items that are out of stock or not in the shop can be shipped to you.
                </p>
              </li>
              <li className="rounded-3xl bg-cream/80 p-7">
                <h3 className="font-display text-xl">Gift certificates</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">For the shop and spa, or for nails and massage. Gift certificates are non-refundable.</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <a href={links.giftSpa} target="_blank" rel="noopener" className="inline-flex min-h-11 items-center rounded-full bg-sand px-4 text-sm transition-colors hover:bg-sand-deep">
                    Store &amp; spa &rarr;
                  </a>
                  <a href={links.giftNails} target="_blank" rel="noopener" className="inline-flex min-h-11 items-center rounded-full bg-sand px-4 text-sm transition-colors hover:bg-sand-deep">
                    Nails &amp; massage &rarr;
                  </a>
                </div>
              </li>
            </ul>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <BookButton>Book a facial</BookButton>
              <a href={SQUARE_STORE} target="_blank" rel="noopener" className="inline-flex min-h-12 items-center rounded-full border border-juniper/25 px-6 transition-colors hover:border-juniper">
                Open the Square store
              </a>
              <a href={links.etsy} target="_blank" rel="noopener" className="inline-flex min-h-12 items-center rounded-full border border-juniper/25 px-6 transition-colors hover:border-juniper">
                Our Etsy shop
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
