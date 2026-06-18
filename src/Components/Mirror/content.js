import { mirrorCollections } from "../Collections/content.js";

export const mirrorProduct = {
  id: 1,
  slug: "aurelia-arc",
  collection: "Signature Collection",
  title: "Aurelia Arch Mirror",
  description:
    "A timeless statement piece inspired by classical arches and contemporary interiors, designed to bring warmth, proportion, and quiet presence into the room.",
  price: "$1,290",
  availability: "In stock and ready to ship",
  dimensions: "72 in H x 36 in W",
  finish: "Brass finish with softly beveled glass",
  materials: "Powder-coated frame, mirrored glass, brushed brass detailing",
  installation: "Wall mounted",
  productImages: [
    "/aurelia-arc.png",
    "/entryway-arch.png",
    "/gasp-wall.webp",
    "/mirror.png",
  ],
  roomPreviews: [
    {
      label: "Living Room",
      title: "An anchor for layered living rooms.",
      description:
        "Brings depth to warm neutrals, textured upholstery, and collected objects without overpowering the wall.",
      image: "/gasp-wall.webp",
    },
    {
      label: "Bedroom",
      title: "Softens a quieter private suite.",
      description:
        "The arch keeps the room feeling calm and architectural while the finish catches morning light beautifully.",
      image: "/celeste-round.jpg",
    },
    {
      label: "Entryway",
      title: "Creates a polished first impression.",
      description:
        "Tall, refined proportions help narrow spaces feel more open, elegant, and welcoming.",
      image: "/entryway-arch.png",
    },
    {
      label: "Dining Area",
      title: "Reflects candlelight with ease.",
      description:
        "A warm statement for dining spaces that want glow, structure, and visual rhythm at once.",
      image: "/lumiere-arch.webp",
    },
  ],
  features: [
    {
      title: "Craftsmanship",
      description: "Each mirror is carefully finished for lasting beauty.",
      icon: "craft",
    },
    {
      title: "Premium Materials",
      description: "Only high-quality materials are selected.",
      icon: "materials",
    },
    {
      title: "Timeless Design",
      description: "Designed to complement interiors for years to come.",
      icon: "timeless",
    },
  ],
  testimonials: [
    {
      quote:
        "The Aurelia Arch transformed our entryway completely. Elegant, timeless, and beautifully crafted.",
      author: "Sarah M.",
    },
  ],
};

const detailOverrides = {
  "aurelia-arc": {
    price: "$1,290",
    availability: "In stock and ready to ship",
    dimensions: "72 in H x 36 in W",
    finish: "Brass finish with softly beveled glass",
    materials: "Powder-coated frame, mirrored glass, brushed brass detailing",
    galleryImages: ["/aurelia-arc.png", "/entryway-arch.png", "/gasp-wall.webp", "/mirror.png"],
    roomPreviewLead: "An arched silhouette that adds calm structure and warm glow.",
    testimonial:
      "The Aurelia Arch transformed our entryway completely. Elegant, timeless, and beautifully crafted.",
  },
  "celeste-round": {
    price: "$1,080",
    availability: "Limited stock",
    dimensions: "36 in H x 36 in W",
    finish: "Bronze finish with softened edge detailing",
    materials: "Powder-coated frame, mirrored glass, bronze accents",
    galleryImages: ["/celeste-round.jpg", "/mirror.png", "/lumiere-arch.webp", "/gasp-wall.webp"],
    roomPreviewLead: "A rounded profile that feels serene, balanced, and softly reflective.",
    testimonial:
      "Celeste brought just the right amount of softness to our bedroom without losing its presence.",
  },
  "orion-slim": {
    price: "$890",
    availability: "In stock",
    dimensions: "78 in H x 24 in W",
    finish: "Matte steel with crisp linear trim",
    materials: "Steel frame, mirrored glass, minimalist mounting hardware",
    galleryImages: ["/orion-slim.jpg", "/entryway-prism.png", "/hero-bg.png", "/mirror.png"],
    roomPreviewLead: "A tall, clean line that elongates the wall and sharpens the space.",
    testimonial:
      "Orion Slim made our hallway feel more intentional and far more polished.",
  },
  "solene-halo": {
    price: "$1,150",
    availability: "Made to order",
    dimensions: "40 in H x 40 in W",
    finish: "Warm brass halo with softened glass edge",
    materials: "Brass frame, mirrored glass, concealed wall mount",
    galleryImages: ["/lumiere-arch.webp", "/gasp-wall.webp", "/aurelia-arc.png", "/mirror.png"],
    roomPreviewLead: "A luminous focal point that catches candlelight beautifully.",
    testimonial:
      "Solene Halo turned our dining room into the warmest room in the house.",
  },
  "marlow-arch": {
    price: "$1,210",
    availability: "In stock and ready to ship",
    dimensions: "70 in H x 38 in W",
    finish: "Oak frame with gallery-style brass edging",
    materials: "Oak frame, mirrored glass, brass detailing",
    galleryImages: ["/mirror.png", "/gasp-wall.webp", "/aurelia-arc.png", "/entryway-arch.png"],
    roomPreviewLead: "A collected, architectural arch with a warmer, wood-led feel.",
    testimonial:
      "Marlow Arch added just enough presence to the room without overwhelming it.",
  },
  "eira-oval": {
    price: "$960",
    availability: "In stock",
    dimensions: "42 in H x 28 in W",
    finish: "Bronze with softened oval proportions",
    materials: "Bronze frame, mirrored glass, concealed mount",
    galleryImages: ["/lumiere-arch.jpg", "/mirror.png", "/celeste-round.jpg", "/hero-bg.png"],
    roomPreviewLead: "A refined oval that softens bathrooms and vanities effortlessly.",
    testimonial:
      "Eira Oval instantly made our bathroom feel more elegant and finished.",
  },
  "noa-prism": {
    price: "$1,020",
    availability: "In stock",
    dimensions: "76 in H x 28 in W",
    finish: "Steel with sharp architectural edges",
    materials: "Steel frame, mirrored glass, hidden mounting hardware",
    galleryImages: ["/hero-bg.png", "/entryway-prism.png", "/orion-slim.jpg", "/gasp-wall.webp"],
    roomPreviewLead: "A more sculptural, modern line for dramatic entry moments.",
    testimonial:
      "Noa Prism gave our entryway the kind of quiet drama we wanted.",
  },
  "vela-vertical": {
    price: "$1,030",
    availability: "Limited stock",
    dimensions: "74 in H x 26 in W",
    finish: "Brass with a tailored vertical silhouette",
    materials: "Brass frame, mirrored glass, slim support system",
    galleryImages: ["/aurelia-arc.png", "/orion-slim.jpg", "/entryway-arch.png", "/mirror.png"],
    roomPreviewLead: "A vertical rhythm that feels elegant in narrower spaces.",
    testimonial:
      "Vela Vertical adds height and elegance without making the wall feel crowded.",
  },
  "elara-curve": {
    price: "$980",
    availability: "In stock",
    dimensions: "48 in H x 30 in W",
    finish: "Bronze with a gentle organic curve",
    materials: "Bronze frame, mirrored glass, concealed wall mount",
    galleryImages: ["/celeste-round.jpg", "/mirror.png", "/gasp-wall.webp", "/lumiere-arch.webp"],
    roomPreviewLead: "A gentle curve that reads collected and editorial in any room.",
    testimonial:
      "Elara Curve feels quietly luxurious and beautifully balanced in our living room.",
  },
};

export const mirrorDetails = mirrorCollections.map((mirror) => {
  const overrides = detailOverrides[mirror.slug] ?? detailOverrides["aurelia-arc"];

  return {
    id: mirror.id,
    slug: mirror.slug,
    collection: "Signature Collection",
    title: `${mirror.name} Mirror`,
    description:
      mirror.description +
      " Designed for homes that want the mirror to feel like part of the architecture, not just a finishing touch.",
    price: overrides.price,
    availability: overrides.availability,
    dimensions: overrides.dimensions,
    finish: overrides.finish,
    materials: overrides.materials,
    productImages: overrides.galleryImages,
    roomPreviews: [
      {
        label: "Living Room",
        title: `${mirror.name} in a layered living room.`,
        description:
          `${overrides.roomPreviewLead} It brings warmth, structure, and a quiet sense of luxury to the main seating area.`,
        image: "/gasp-wall.webp",
      },
      {
        label: "Bedroom",
        title: `${mirror.name} in a restful bedroom.`,
        description:
          "The proportions keep the room calm and considered, adding light without taking over the wall.",
        image: "/celeste-round.jpg",
      },
      {
        label: "Entryway",
        title: `${mirror.name} as an arrival moment.`,
        description:
          "Placed near the threshold, it sharpens the first impression and gives the entrance a more finished presence.",
        image: "/entryway-arch.png",
      },
      {
        label: "Dining Area",
        title: `${mirror.name} reflecting dinner light.`,
        description:
          "It enhances candlelight and creates a more atmospheric room, especially in spaces with warm finishes.",
        image: "/lumiere-arch.webp",
      },
    ],
    features: mirrorCollections.find((item) => item.slug === mirror.slug)?.bestSeller
      ? [
          {
            title: "Craftsmanship",
            description: "Each mirror is carefully finished for lasting beauty.",
            icon: "craft",
          },
          {
            title: "Premium Materials",
            description: "Only high-quality materials are selected.",
            icon: "materials",
          },
          {
            title: "Timeless Design",
            description: "Designed to complement interiors for years to come.",
            icon: "timeless",
          },
        ]
      : [
          {
            title: "Craftsmanship",
            description: "Each mirror is carefully finished for lasting beauty.",
            icon: "craft",
          },
          {
            title: "Premium Materials",
            description: "Only high-quality materials are selected.",
            icon: "materials",
          },
          {
            title: "Timeless Design",
            description: "Designed to complement interiors for years to come.",
            icon: "timeless",
          },
        ],
    testimonials: [
      {
        quote: overrides.testimonial,
        author: "Sarah M.",
      },
    ],
    specs: [
      { label: "Height", value: overrides.dimensions.split(" x ")[0] ?? "72 in" },
      { label: "Width", value: overrides.dimensions.split(" x ")[1] ?? "36 in" },
      { label: "Weight", value: "28 lb" },
      { label: "Frame Material", value: overrides.finish.split(" with ")[0] ?? "Brass" },
      { label: "Finish", value: overrides.finish },
      { label: "Installation Type", value: "Wall mounted" },
    ],
  };
});

export function getMirrorDetailBySlug(slug) {
  return mirrorDetails.find((mirror) => mirror.slug === slug);
}

export function getMirrorDetailByIdentifier(identifier) {
  const raw = String(identifier);
  const idFromComposite = raw.match(/^(\d+)-/);
  const isNumeric = /^\d+$/.test(raw);

  if (idFromComposite) {
    return mirrorDetails.find((mirror) => String(mirror.id) === idFromComposite[1]);
  }

  if (isNumeric) {
    return mirrorDetails.find((mirror) => String(mirror.id) === raw);
  }

  return getMirrorDetailBySlug(raw);
}

export function getMirrorHref(mirror) {
  return `/mirror/${mirror.id}-${mirror.slug}`;
}

export const mirrorSpecs = [
  { label: "Height", value: "72 in" },
  { label: "Width", value: "36 in" },
  { label: "Weight", value: "28 lb" },
  { label: "Frame Material", value: "Brushed brass" },
  { label: "Finish", value: "Warm satin" },
  { label: "Installation Type", value: "Wall mounted" },
];

export const relatedCollections = [
  {
    id: 2,
    slug: "celeste-round",
    name: "Celeste Round",
    description: "Soft symmetry for bedrooms, dressing spaces, and calm corners.",
    image: "/celeste-round.jpg",
  },
  {
    id: 3,
    slug: "orion-slim",
    name: "Orion Slim",
    description: "A lean profile designed for hallways and refined transitions.",
    image: "/orion-slim.jpg",
  },
  {
    id: 5,
    slug: "marlow-arch",
    name: "Marlow Arch",
    description: "An architectural silhouette with a warmer, gallery-like presence.",
    image: "/gasp-wall.webp",
  },
  {
    id: 6,
    slug: "eira-oval",
    name: "Eira Oval",
    description: "A gentle oval that softens stone, tile, and textured walls.",
    image: "/mirror.png",
  },
];
