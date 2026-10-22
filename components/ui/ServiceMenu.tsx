"use client";

import { useRef, useState } from "react";
import { links, menus } from "@/lib/site";

// Tabbed price menu. Every panel is in the server HTML; tabs only toggle which one shows.
export function ServiceMenu() {
  const [active, setActive] = useState(menus[0].id);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKey = (e: React.KeyboardEvent, i: number) => {
    const d = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!d) return;
    e.preventDefault();
    const next = (i + d + menus.length) % menus.length;
    setActive(menus[next].id);
    tabs.current[next]?.focus();
  };

  return (
    <div>
      <div role="tablist" aria-label="Service menus" className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 [scrollbar-width:none]">
        {menus.map((m, i) => (
          <button
            key={m.id}
            ref={(el) => void (tabs.current[i] = el)}
            role="tab"
            id={`tab-${m.id}`}
            aria-selected={active === m.id}
            aria-controls={`panel-${m.id}`}
            tabIndex={active === m.id ? 0 : -1}
            onClick={() => setActive(m.id)}
            onKeyDown={(e) => onKey(e, i)}
            className="min-h-11 shrink-0 rounded-full border border-juniper/20 px-5 text-[0.95rem] whitespace-nowrap transition-colors hover:border-juniper aria-selected:border-juniper aria-selected:bg-juniper aria-selected:text-cream"
          >
            {m.label}
          </button>
        ))}
      </div>

      {menus.map((m) => (
        <div
          key={m.id}
          role="tabpanel"
          id={`panel-${m.id}`}
          aria-labelledby={`tab-${m.id}`}
          hidden={active !== m.id}
          className="mt-8 grid gap-10 lg:grid-cols-[1fr_2fr]"
        >
          <div>
            <h3 className="font-display text-3xl md:text-4xl">{m.title}</h3>
            <p className="mt-3 max-w-sm text-muted">{m.intro}</p>
            <a
              href={m.where === "spa" ? links.bookSpa : links.bookNails}
              target="_blank"
              rel="noopener"
              className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-full bg-clay-deep px-7 font-medium text-cream transition-colors hover:bg-juniper"
            >
              Book {m.label.toLowerCase()}
              <span aria-hidden>&rarr;</span>
            </a>
            <p className="mt-3 text-sm text-muted">
              At {m.where === "spa" ? "the Spa, 3420 Lomas Blvd. NE" : "the Nail Boutique, 625 Amherst Dr NE"}
            </p>
          </div>
          <div className="grid gap-8">
            {m.groups.map((g, gi) => (
              <div key={gi}>
                {g.heading && <h4 className="mb-2 text-xs tracking-[0.18em] text-sage-deep uppercase">{g.heading}</h4>}
                <ul className="divide-y divide-juniper/10 border-y border-juniper/10">
                  {g.items.map((it, ii) => (
                    <li key={ii} className="flex items-baseline justify-between gap-4 py-3.5">
                      <span>
                        <span className="block">{it.name}</span>
                        {(it.time || it.note) && (
                          <span className="block text-sm text-muted">{[it.time, it.note].filter(Boolean).join(" · ")}</span>
                        )}
                      </span>
                      <span className="shrink-0 font-display text-lg tabular-nums">{it.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
