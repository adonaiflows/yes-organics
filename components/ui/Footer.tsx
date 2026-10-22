import { BookButton } from "./BookDialog";
import { Wordmark } from "./Wordmark";
import { links } from "@/lib/site";

export function Footer() {
  return (
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
              <a href="/shop" className="hover:text-cream">Shop</a>
            </li>
            <li>
              <a href={links.giftSpa} target="_blank" rel="noopener" className="hover:text-cream">Gift certificates</a>
            </li>
          </ul>
          <p>&copy; {new Date().getFullYear()} Yes Organic Boutique &amp; Spa</p>
        </div>
      </div>
    </footer>
  );
}
