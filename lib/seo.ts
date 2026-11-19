import type { Metadata } from "next";

// Child pages replace the root openGraph object, so each page sets its own image too.
// TODO: replace og.png with a real spa photo once the client's images are uploaded.
export function pageMeta(path: string, title: string, description: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: "Yes Organic Boutique & Spa",
      type: "website",
      images: [{ url: "/og.png", width: 1200, height: 630, alt: "Yes Organic Boutique & Spa, Albuquerque" }],
    },
  };
}
