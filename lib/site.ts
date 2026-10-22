// Every fact here comes from docs/client-brief.md (read from yesorganicboutique.com on 2026-10-22).
// Do not add services, prices, reviews or claims that are not in the brief.

export const SITE_URL = "https://yesorganicboutique.com";

export const links = {
  bookSpa: "https://square.site/book/2VS8KVY1E14DG/yes-organic-boutique-and-spa-albuquerque-nm",
  bookNails: "https://square.site/appointments/book/AW5Z538T7DYVF/yes-natural-nail-boutique-albuquerque-nm",
  shop: "https://yes-organic-boutique-and-spa-109565.square.site",
  etsy: "https://www.etsy.com/shop/YesOrganicBoutique",
  giftSpa: "https://squareup.com/gift/6FJMY29BESQQP/order",
  giftNails: "https://squareup.com/gift/2KR45S3PG3V52/order",
  map: "https://g.page/yesorganicboutique?share",
  facebook: "https://www.facebook.com/yesorganicboutique",
  instagram: "https://www.instagram.com/yesorganicboutique/",
};

export const locations = [
  {
    name: "Yes Organic Boutique & Spa",
    offers: "Facials, herbal consultations, lash & brow, waxing and the apothecary shop",
    street: "3420 Lomas Blvd. NE",
    city: "Albuquerque, NM 87106",
    // TODO: confirm with the client. A 602 (Phoenix) area code for an Albuquerque spa may be outdated.
    phone: "(602) 295-2278",
    tel: "+16022952278",
    email: "yesorganicboutiqueandspa@gmail.com",
    hours: "Monday – Sunday, 10:00 am – 6:00 pm",
    book: links.bookSpa,
    map: links.map,
  },
  {
    name: "Yes Natural Nail Boutique",
    offers: "Natural manicures, pedicures and massage",
    street: "625 Amherst Dr NE",
    city: "Albuquerque, NM 87106",
    phone: "(505) 219-8122",
    tel: "+15052198122",
    email: "yesnaturalnailboutique@gmail.com",
    // TODO: hours for the nail boutique are not on the current site; ask the client.
    hours: null,
    book: links.bookNails,
    map: "https://www.google.com/maps/search/?api=1&query=625+Amherst+Dr+NE+Albuquerque+NM+87106",
  },
] as const;

// TODO: confirm with the client that these quotes from the current site can be reused.
export const reviews = [
  { quote: "I am thrilled to find a place with 100% natural products that are fresh, safe and affordable!", by: "RT" },
  { quote: "Friendly & very welcoming as always!", by: "MT" },
  { quote: "The room was relaxing and clean.", by: "Yelp review" },
];

export type Item = { name: string; time?: string; price: string; note?: string };
export type Menu = {
  id: string;
  label: string;
  title: string;
  intro: string;
  where: "spa" | "nails";
  groups: { heading?: string; items: Item[] }[];
};

export const menus: Menu[] = [
  {
    id: "facials",
    label: "Facials",
    title: "Luxury organic facials",
    intro: "Made with Eminence Organic Skin Care and products blended here in the shop.",
    where: "spa",
    groups: [
      {
        items: [
          { name: "Yes Signature Organic Facial", time: "60 min", price: "$95" },
          { name: "Exfoliation Facial", time: "70 min", price: "$105" },
          { name: "Yam & Pumpkin Pro Enzyme 20% Peel", time: "70 min", price: "$105" },
          { name: "Eight Greens Facial", time: "70 min", price: "$105" },
          { name: "Mangosteen Lactic Acid Pro Peel Treatment", time: "70 min", price: "$105" },
          { name: "Effleurage Facial", time: "70 min", price: "$105" },
          { name: "Arctic Berry Peel and Peptide Illuminating Treatment", time: "70 min", price: "$105" },
          { name: "Acne Advanced Pro Treatment – Salicylic Acid Peel 15%", time: "70 min", price: "$115" },
          { name: "Clear Skin Treatment", time: "70 min", price: "$105" },
          { name: "Microgreens Detox Facial", time: "70 min", price: "$115" },
          { name: "Pumpkin Latte Hydration Facial", time: "70 min", price: "$115" },
          { name: "Eminence Back Treatment", time: "45 min", price: "$95" },
          { name: "Strawberry Delight Ultra-Hydration Facial", time: "75 min", price: "$115" },
          { name: "The Gemstone Energizing Facial", time: "70 min", price: "$110" },
          { name: "Superfood Enzyme Facial", time: "75 min", price: "$125" },
          { name: "Illuminating Facial with Gua Sha", time: "75 min", price: "$115" },
        ],
      },
      {
        heading: "Add-ons",
        items: [
          { name: "Gua Sha Stone Treatment", price: "$25" },
          { name: "Organic Eye Treatment", price: "$30" },
        ],
      },
    ],
  },
  {
    id: "clinical",
    label: "Clinical",
    title: "Clinical facial treatments",
    intro: "Results-focused treatments, finished with organic skincare.",
    where: "spa",
    groups: [
      {
        items: [
          { name: "Microdermabrasion", time: "60 min", price: "$125" },
          { name: "Galvanic Facial", time: "60 min", price: "$125" },
          { name: "High Frequency Facial", time: "60 min", price: "$125" },
          { name: "Dermaplaning Facial", time: "75 min", price: "$160" },
          { name: "Hydrodermabrasion", time: "75 min", price: "$150" },
          { name: "Nano Needling Glow Treatment", time: "60 min", price: "$150" },
          {
            name: "Nano Needling Glow Package",
            price: "$500",
            note: "A series booked every two weeks. $100 nonrefundable deposit at booking, applied to the total.",
          },
        ],
      },
    ],
  },
  {
    id: "lash-brow",
    label: "Lash & Brow",
    title: "Lash & brow bar",
    intro: "Lifts, tints and lamination for the lashes and brows you already have.",
    where: "spa",
    groups: [
      {
        heading: "Lashes",
        items: [
          { name: "Lash Tint", price: "$35" },
          { name: "Lash Lift", price: "$70" },
          { name: "Lash Lift & Tint", price: "$100" },
        ],
      },
      {
        heading: "Brows",
        items: [
          { name: "Brow Wax", price: "$20" },
          { name: "Brow Tint", price: "$30" },
          { name: "Brow Wax & Tint", price: "$45" },
          { name: "Brow Lamination", price: "$45" },
        ],
      },
    ],
  },
  {
    id: "waxing",
    label: "Waxing",
    title: "Waxing",
    intro: "Face and body waxing, by appointment.",
    where: "spa",
    groups: [
      {
        heading: "Body",
        items: [
          { name: "Modified Bikini Wax", price: "$50" },
          { name: "Full Back Wax", price: "$45" },
          { name: "Full Leg Wax", price: "$65" },
          { name: "Partial Leg Wax", price: "$55" },
          { name: "Underarm Wax", price: "$30" },
        ],
      },
      {
        heading: "Face",
        items: [
          { name: "Brow Wax", price: "$20" },
          { name: "Chin Wax", price: "$20" },
          { name: "Lip Wax", price: "$20" },
          { name: "Full Face Wax", price: "$45" },
        ],
      },
    ],
  },
  {
    id: "nails",
    label: "Nails",
    title: "Natural nail care",
    intro: "Healthy nails only: we don't offer acrylic or dip powder nails, or their removal.",
    where: "nails",
    groups: [
      {
        heading: "Manicures",
        items: [
          { name: "Just Clean-Up Manicure", price: "$30", note: "Add $5 for a shiny buff" },
          { name: "Classic Manicure", price: "$40" },
          { name: "IBX Clean Up Manicure", price: "$45" },
          { name: "Yes Signature Spa Manicure", price: "$50", note: "With gel polish $65" },
          { name: "IBX Classic Manicure", price: "$55" },
          { name: "Classic Gel Manicure", price: "$55" },
          { name: "IBX Gel Manicure", price: "$70" },
        ],
      },
      {
        heading: "Pedicures",
        items: [
          { name: "Just Clean-Up Pedicure", price: "$45", note: "Add $5 for a shiny buff" },
          { name: "Classic Pedicure", price: "$60" },
          // TODO: confirm with the client; the current site lists the gel pedicure below the regular one.
          { name: "Yes Signature Spa Gel Pedicure", price: "$75" },
          { name: "Stone Crop Spa Pedicure", price: "$75" },
          { name: "Yes Signature Spa Pedicure", price: "$85" },
          { name: "Add Bio Seaweed Gel", price: "$20" },
        ],
      },
    ],
  },
  {
    id: "massage",
    label: "Massage",
    title: "Massage & energy work",
    intro: "Head-to-toe relief, from deep tissue to Reiki.",
    where: "nails",
    groups: [
      {
        items: [
          { name: "Yes Signature Massage", time: "60 / 90 / 120 min", price: "$105 / $145 / $197.50" },
          { name: "Yes Signature Hot Stone Massage", time: "60 / 90 min", price: "$135 / $175" },
          { name: "Yes Deep Tissue Massage", time: "60 / 90 min", price: "$130 / $170" },
          { name: "Cupping Therapy Treatment", time: "60 min", price: "$80", note: "Not for pregnancy" },
          { name: "Hot Oil Scalp Massage", time: "30 min", price: "$50" },
          { name: "Cranial Sacral Therapy", time: "60 min", price: "$95" },
          { name: "Reiki Energy Treatment", time: "60 min", price: "$95" },
        ],
      },
      {
        heading: "Massage add-ons",
        items: [
          { name: "Hot Oil Scalp Treatment", time: "30 min", price: "$50" },
          { name: "Cupping Therapy", time: "30 min", price: "$40" },
        ],
      },
    ],
  },
  {
    id: "herbal",
    label: "Herbal",
    title: "Herbal consultations",
    intro: "Time with our herbalist to talk through your skin and wellbeing.",
    where: "spa",
    groups: [
      {
        items: [
          { name: "Herbal Consultation", time: "30 min", price: "$30" },
          { name: "Herbal Consultation", time: "60 min", price: "$60" },
        ],
      },
    ],
  },
];

// The current site's Specials page lists no dates. TODO: ask the client which are still running.
export const specials: Item[] = [
  { name: "Stress Relief Adaptogen Facial", time: "60 min", price: "$110" },
  { name: "Microbiome Repairing Kombucha Facial", time: "75 min", price: "$135" },
  { name: "Illuminating Facial with Gua Sha", time: "75 min", price: "$115" },
  { name: "Reiki Energy Treatment", time: "60 min", price: "$80" },
  { name: "Cranial Sacral Treatment", time: "60 min", price: "$95" },
  { name: "Seasonal Spa Pedicure", time: "75 min", price: "$70", note: "With gel, 90 min, $85" },
];

export const team = [
  { name: "Indigo Verton", role: "Owner & Esthetician", note: "Full-body waxing, lash lifts, lash and brow tints, brow lamination. Very limited appointments." },
  { name: "Briana Lisignoli", role: "Spa Manager", note: "Herbalist with 15+ years in the industry." },
  { name: "Dominique", role: "Esthetician", note: "Holistic skincare. Born and raised in Santa Fe, fluent in Spanish." },
  { name: "Bryana", role: "Massage Therapist & Esthetician", note: "Reiki, massage and esthetics, with a love of herbalism." },
  { name: "Alysha", role: "Esthetician", note: "In esthetics since 2019, focused on natural healing treatments." },
  { name: "Deja", role: "Esthetician", note: "Natural and organic skincare." },
  { name: "Rose", role: "Massage Therapist", note: "Nine years of practice. Certified craniosacral therapist." },
  { name: "Crystal Bell Tom", role: "Nail Technician", note: "A cosmetologist for 21 years, originally from New Mexico." },
  { name: "Shawna", role: "Nail Technician", note: "18 years of manicures, gels and pedicures." },
  { name: "Samantha Leo", role: "Nail Technician", note: "Doing nails since 2017. From Los Lunas, NM." },
  { name: "Lindsay Plotkin", role: "Nail Technician", note: "Graduated Vogue Beauty College, Santa Fe." },
  { name: "Renee Quintana", role: "Nail Technician", note: "Born and raised in Santa Fe." },
];

export const policy =
  "Please reschedule or cancel at least 1 day before your appointment. Appointments cancelled within 24 hours are charged 100% of the service fee.";
