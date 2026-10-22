"use client";

import { useMemo, useState } from "react";
import { categories, products, type Category } from "@/lib/products";
import { ProductCard } from "./ProductCard";

export function ShopGrid() {
  const [cat, setCat] = useState<Category | "all">("all");
  const [q, setQ] = useState("");

  const shown = useMemo(() => {
    const term = q.trim().toLowerCase();
    return products.filter((p) => (cat === "all" || p.category === cat) && (!term || p.name.toLowerCase().includes(term)));
  }, [cat, q]);

  return (
    <div>
      <div className="flex flex-col gap-4">
        <div role="group" aria-label="Filter by category" className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 [scrollbar-width:none] md:mx-0 md:flex-wrap md:overflow-visible md:px-0">
          {categories.map((c) => (
            <button
              key={c.id}
              type="button"
              aria-pressed={cat === c.id}
              onClick={() => setCat(c.id)}
              className="min-h-11 shrink-0 rounded-full border border-juniper/20 px-5 text-[0.95rem] whitespace-nowrap transition-colors hover:border-juniper aria-pressed:border-juniper aria-pressed:bg-juniper aria-pressed:text-cream"
            >
              {c.label}
            </button>
          ))}
        </div>
        <label className="relative block md:w-80">
          <span className="sr-only">Search products</span>
          <svg viewBox="0 0 24 24" className="pointer-events-none absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-muted" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
            <circle cx="11" cy="11" r="7" />
            <path d="M20 20l-3.5-3.5" />
          </svg>
          <input
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search the apothecary"
            className="min-h-11 w-full rounded-full border border-juniper/20 bg-white/70 pr-4 pl-10 text-[0.95rem] placeholder:text-muted focus:border-juniper focus:outline-none"
          />
        </label>
      </div>

      <p className="mt-6 text-sm text-muted" role="status">
        {shown.length} {shown.length === 1 ? "product" : "products"}
      </p>

      <ul className="mt-4 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
        {shown.map((p) => (
          <li key={p.url}>
            <ProductCard product={p} />
          </li>
        ))}
      </ul>
      {shown.length === 0 && <p className="mt-10 text-center text-muted">Nothing matches that search. Try another word.</p>}
    </div>
  );
}
