import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { PageIntro, PageShell, secondaryBtn } from "@/components/ui/PageShell";
import { BookButton } from "@/components/ui/BookDialog";
import { NextLink, Reviews, TeamGrid } from "@/components/ui/blocks";
import { team } from "@/lib/site";
import Link from "next/link";

const title = "Meet the Team | Estheticians, Herbalists & Nail Techs | Yes Organic Boutique & Spa";
const description =
  "Meet the estheticians, herbalists, massage therapists and natural nail technicians at Yes Organic Boutique & Spa and Yes Natural Nail Boutique in Albuquerque.";

export const metadata: Metadata = pageMeta("/team", title, description);

export default function Team() {
  return (
    <PageShell>
      <PageIntro
        eyebrow={`Meet the team · ${team.length} people`}
        title={
          <>
            Estheticians, herbalists, nail techs <span className="text-clay-deep italic">&amp; healers</span>
          </>
        }
        lede="The people behind your facial, your pedicure and your massage, across the spa on Lomas and the nail boutique on Amherst."
      >
        <BookButton />
        <Link href="/services" className={secondaryBtn}>
          Services &amp; prices
        </Link>
      </PageIntro>

      <section aria-label="Our team" className="bg-sand/60 py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <TeamGrid />
        </div>
      </section>

      <Reviews />

      <div className="mx-auto max-w-7xl px-4 pb-16 md:px-8 md:pb-20">
        <NextLink href="/visit" label="Visit us" body="Addresses, hours and booking for both Albuquerque locations." />
      </div>
    </PageShell>
  );
}
