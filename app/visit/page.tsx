import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { PageIntro, PageShell, secondaryBtn } from "@/components/ui/PageShell";
import { BookButton } from "@/components/ui/BookDialog";
import { GiftCertificates, LocationCards, NextLink, Policy } from "@/components/ui/blocks";
import { locations } from "@/lib/site";
import Link from "next/link";

const title = "Visit & Book | Two Albuquerque Locations | Yes Organic Boutique & Spa";
const description = `Find Yes Organic Boutique & Spa at ${locations[0].street} and Yes Natural Nail Boutique at ${locations[1].street}, Albuquerque. Hours, phone numbers and online booking.`;

export const metadata: Metadata = pageMeta("/visit", title, description);

export default function Visit() {
  return (
    <PageShell>
      <PageIntro
        eyebrow="Albuquerque, New Mexico"
        title={
          <>
            Two places <span className="text-clay-deep italic">to unwind</span>
          </>
        }
        lede="The spa and apothecary on Lomas, and the natural nail boutique on Amherst. Each location books on its own Square page."
      >
        <BookButton />
        <Link href="/services" className={secondaryBtn}>
          Services &amp; prices
        </Link>
      </PageIntro>

      <section id="book" aria-label="Locations" className="mx-auto max-w-7xl scroll-mt-20 px-4 pb-16 md:px-8 md:pb-20">
        <LocationCards headingLevel="h2" />
        <div className="mt-8">
          <Policy nails />
        </div>
      </section>

      <section aria-labelledby="gift-title" className="bg-sand/60 py-14 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 md:px-8 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div>
            <h2 id="gift-title" className="font-display text-3xl tracking-tight md:text-5xl">
              Give the gift <span className="text-clay-deep italic">of time</span>
            </h2>
            <p className="mt-4 max-w-md text-muted">One gift certificate for the shop and spa, another for nails and massage.</p>
          </div>
          <GiftCertificates />
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
        <NextLink href="/services" label="Services & prices" body="Every facial, nail and massage treatment, with times and prices." />
      </div>
    </PageShell>
  );
}
