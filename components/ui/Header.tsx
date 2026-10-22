import { BookButton } from "./BookDialog";
import { Wordmark } from "./Wordmark";

const nav = [
  { href: "#services", label: "Services" },
  { href: "#apothecary", label: "Apothecary" },
  { href: "#team", label: "Team" },
  { href: "#visit", label: "Visit" },
];

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-juniper/10 bg-cream/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 md:px-8">
        <a href="#top" className="shrink-0">
          <Wordmark />
        </a>
        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex gap-8 text-[0.95rem]">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="py-2 transition-colors hover:text-clay-deep">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <BookButton className="min-h-10! px-5! text-sm!">Book now</BookButton>
      </div>
    </header>
  );
}
