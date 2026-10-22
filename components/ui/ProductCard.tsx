"use client";

import { useState } from "react";
import type { Product } from "@/lib/products";

// Photos load straight from the client's Square store. If one fails, an apothecary-style label stands in.
export function ProductCard({ product }: { product: Product }) {
  const [failed, setFailed] = useState(false);
  return (
    <a
      href={product.url}
      target="_blank"
      rel="noopener"
      className="group flex h-full flex-col rounded-3xl border border-juniper/10 bg-white/60 p-3 transition-colors hover:border-clay-deep/40 hover:bg-white"
    >
      <span className="relative block aspect-square overflow-hidden rounded-2xl bg-white">
        {failed ? (
          <span className="absolute inset-2 grid place-items-center overflow-hidden rounded-xl border border-juniper/15 bg-sand/60 p-3 sm:inset-3 sm:p-4 text-center">
            <span>
              <span aria-hidden className="block text-sage-deep">&#10045;</span>
              <span className="mt-2 block font-display text-sm leading-tight sm:text-lg">{product.name}</span>
            </span>
          </span>
        ) : (
          // eslint-disable-next-line @next/next/no-img-element -- served and resized by Square's CDN
          <img
            src={product.image}
            alt={product.name}
            width={480}
            height={480}
            loading="lazy"
            decoding="async"
            onError={() => setFailed(true)}
            className="h-full w-full object-contain p-2 transition-transform duration-500 group-hover:scale-[1.04]"
          />
        )}
      </span>
      <span className="flex flex-1 flex-col justify-between gap-3 px-2 pt-4 pb-2">
        <span className="font-display text-base leading-snug sm:text-lg">{product.name}</span>
        <span className="flex items-center justify-between text-sm">
          <span className="text-muted">Price on Square</span>
          <span className="font-medium text-clay-deep">
            Shop <span aria-hidden className="inline-block transition-transform group-hover:translate-x-1">&rarr;</span>
          </span>
        </span>
      </span>
    </a>
  );
}
