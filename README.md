# Yes Organic Boutique & Spa

Marketing site rebuild for yesorganicboutique.com. Next.js (App Router) + TypeScript + Tailwind, with a react-three-fiber hero scene.

- `npm run dev` / `npm run build` / `npm run lint`
- Client facts: `docs/client-brief.md`. All site copy and prices live in `lib/site.ts`; edit there.
- Booking goes to the two Square booking pages (spa vs nail boutique). The "Book" buttons open a chooser.
- The 3D hero (`components/three/`) loads only on desktop; phones and reduced-motion get `public/posters/botanical-drop.webp`.
- Open `TODO:` items mark facts awaiting the client (phone number, nail boutique hours, review permission, photos and logo).
