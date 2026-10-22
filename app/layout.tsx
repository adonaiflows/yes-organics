import type { Metadata, Viewport } from "next";
import { Figtree, Fraunces } from "next/font/google";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { BookDialog } from "@/components/ui/BookDialog";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

const title = "Yes Organic Boutique & Spa | Organic Facials, Natural Nails & Massage in Albuquerque";
const description =
  "Albuquerque's apothecary-style spa and natural nail salon. Organic facials, herbal consultations, lash & brow, waxing, natural manicures, pedicures and massage, plus handmade organic skincare. Open 7 days.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Yes Organic Boutique & Spa",
    type: "website",
    // TODO: replace with a real spa photo once the client's images are uploaded.
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Yes Organic Boutique & Spa, Albuquerque" }],
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#f6f0e5",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${figtree.variable}`}>
      <body className="font-sans">
        <SmoothScroll />
        {children}
        <BookDialog />
      </body>
    </html>
  );
}
