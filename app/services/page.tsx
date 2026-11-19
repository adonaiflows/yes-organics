import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { PageIntro, PageShell, secondaryBtn } from "@/components/ui/PageShell";
import { BookButton } from "@/components/ui/BookDialog";
import { ServiceMenu } from "@/components/ui/ServiceMenu";
import { NextLink, Policy, Specials } from "@/components/ui/blocks";
import Link from "next/link";

const title = "Services & Prices | Organic Facials, Nails & Massage | Yes Organic Boutique & Spa";
const description =
  "Prices for organic facials, clinical treatments, herbal consultations, lash & brow, waxing, natural manicures and pedicures, massage and Reiki at Yes Organic Boutique & Spa in Albuquerque.";

export const metadata: Metadata = pageMeta("/services", title, description);

export default function Services() {
  return (
    <PageShell>
      <PageIntro
        eyebrow="By appointment · Two Albuquerque locations"
        title={
          <>
            Services <span className="text-clay-deep italic">&amp; prices</span>
          </>
        }
        lede="Organic facials, herbal consultations, lash and brow, and waxing at the spa. Natural manicures, pedicures and massage at the nail boutique. Pick a menu to see every treatment and price."
      >
        <BookButton />
        <Link href="/visit" className={secondaryBtn}>
          Locations &amp; hours
        </Link>
      </PageIntro>

      <section aria-label="Service menus" className="bg-white/45 py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <ServiceMenu />
          <div className="mt-12">
            <Policy nails />
          </div>
        </div>
      </section>

      <Specials />

      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
        <NextLink href="/shop" label="Shop the apothecary" body="Handmade organic skincare and Eminence Organics, to take the spa home." />
      </div>
    </PageShell>
  );
}
