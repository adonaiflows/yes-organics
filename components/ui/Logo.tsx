"use client";

import { useState } from "react";
import { Wordmark } from "./Wordmark";

// The client's real logo, loaded from their current site until the file is uploaded and served from /public.
// TODO: replace LOGO_URL with /images/logo.png once the original file is in the repo.
const LOGO_URL = "https://yesorganicboutique.com/wp-content/uploads/2021/06/Yes-Organic-Boutique-Spa-Logo_1.png";

export function Logo() {
  const [failed, setFailed] = useState(false);
  if (failed) return <Wordmark />;
  return (
    // eslint-disable-next-line @next/next/no-img-element -- remote file on the client's old host, not optimisable here
    <img
      src={LOGO_URL}
      alt="Yes Organic Boutique & Spa"
      className="h-12 w-auto max-w-[11rem] object-contain"
      onError={() => setFailed(true)}
    />
  );
}
