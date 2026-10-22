// TODO: swap for the client's real logo (Yes-Organic-Boutique-Spa-Logo_1.png) once it is uploaded.
export function Wordmark({ light = false }: { light?: boolean }) {
  return (
    <span className={`flex flex-col leading-none ${light ? "text-cream" : "text-juniper"}`}>
      <span className="font-display text-2xl tracking-tight">
        Yes <span className="italic">Organic</span>
      </span>
      <span className={`mt-1 text-[0.62rem] tracking-[0.32em] uppercase ${light ? "text-cream/70" : "text-sage-deep"}`}>
        Boutique &amp; Spa
      </span>
    </span>
  );
}
