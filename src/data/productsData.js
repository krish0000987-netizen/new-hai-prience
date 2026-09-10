export const PRODUCTS = [
  {
    id: "handwash-range",
    name: "Handwash Range (Liquid Handwash)",
    category: "Hand Hygiene",
    isManufacturerProduct: true,
    shortDesc: "Gentle yet powerful cleansing handwash formula enriched with moisturizing agents and lingering refreshing fragrances.",
    fullDesc: "Prince Industries manufactures premium liquid handwash formulated to eliminate 99.9% of germs while keeping hands smooth, hydrated, and pleasantly scented. Available for wholesale, retail, and bulk institutional supply.",
    image: "/assets/images/hero_handwash_luxury_1788951574303.jpg",
    backupImage: "https://images.unsplash.com/photo-1608248597263-0057e43a4522?auto=format&fit=crop&w=800&q=80",
    variants: [
      { name: "Aloe Vera", desc: "Soothing & moisturizing skin care formulation", color: "#10B981", icon: "🌱" },
      { name: "Strawberry", desc: "Rich fruity aroma for energizing cleanliness", color: "#EC4899", icon: "🍓" },
      { name: "Rose", desc: "Classic floral fragrance for premium hand hygiene", color: "#F43F5E", icon: "🌹" },
      { name: "Lime", desc: "Zesty citrus freshness with deep odor control", color: "#84CC16", icon: "🍋" },
      { name: "Fresh", desc: "Crisp aqua marine aroma for everyday protection", color: "#06B6D4", icon: "🌊" }
    ],
    packaging: ["250ml Pump Bottle", "500ml Dispenser", "1 Litre Refill", "5 Litre Canister", "Bulk Drum"],
    applications: ["Homes", "Hotels & Restaurants", "Hospitals & Clinics", "Corporate Offices", "Schools & Colleges"]
  },
  {
    id: "detergent-powder",
    name: "Detergent Powder Manufacturer",
    category: "Laundry Care",
    isManufacturerProduct: true,
    shortDesc: "High-active stain-dissolving detergent powder with active enzymes and fabric care formulation.",
    fullDesc: "Formulated for deep fabric penetration, our detergent powder removes tough grease, oil, and grime without dulling fabric colors. Delivers sparkling white washes and long-lasting floral freshness.",
    image: "/assets/images/hero_cleaning_suite_1788951618765.jpg",
    backupImage: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&w=800&q=80",
    packaging: ["200g Pouch", "500g Pouch", "1kg Premium Pack", "5kg Bag", "50kg Bulk Sack"],
    applications: ["Household Laundry", "Commercial Laundries", "Hotels & Lodges", "Institutional Washing"]
  },
  {
    id: "liquid-detergent",
    name: "Liquid Detergent",
    category: "Laundry Care",
    isManufacturerProduct: true,
    shortDesc: "Concentrated liquid detergent for top-load, front-load washing machines and delicate hand washes.",
    fullDesc: "Dissolves instantly in water without leaving chalky residue on clothes. Ideal for machine washing and expensive garments, preserving fabric texture and color intensity.",
    image: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=800&q=80",
    packaging: ["500ml Bottle", "1 Litre Jug", "5 Litre Commercial Container"],
    applications: ["Washing Machines", "Delicate Wear", "Commercial Dry Cleaners"]
  },
  {
    id: "white-phenyl",
    name: "White Phenyl (Floor Disinfectant)",
    category: "Floor Care",
    isManufacturerProduct: true,
    shortDesc: "Pine-oil based white phenyl disinfectant for sparkling clean floors and long-lasting fresh aroma.",
    fullDesc: "Prince Industries manufactures dense, high-emulsion white phenyl cleaner that kills germs, repels insects, and removes stubborn floor grime while leaving a pleasant pine fragrance.",
    image: "/assets/images/hero_slide_2.jpg",
    backupImage: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
    packaging: ["500ml Bottle", "1 Litre Bottle", "5 Litre Can", "50 Litre Bulk Drum"],
    applications: ["Homes & Apartments", "Hospitals & Nursing Homes", "Offices", "Educational Campuses"]
  },
  {
    id: "black-phenyl",
    name: "Black Phenyl Disinfectant",
    category: "Floor Care",
    isManufacturerProduct: true,
    shortDesc: "Heavy-duty Grade-1 black phenyl disinfectant for powerful sanitation of drains, exterior floors and commercial zones.",
    fullDesc: "Designed for high-intensity sanitation requirements. Provides strong deodorizing and germicidal protection for drain lines, exterior pathways, public restrooms, and industrial yards.",
    image: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&w=800&q=80",
    packaging: ["1 Litre Tin/Bottle", "5 Litre Canister", "200 Litre Industrial Barrel"],
    applications: ["Public Restrooms", "Municipal Facilities", "Industrial Plants", "Drains & Sanitation Yards"]
  },
  {
    id: "floor-cleaner",
    name: "Phenyl Floor Cleaner / Surface Cleaner",
    category: "Floor Care",
    isManufacturerProduct: true,
    shortDesc: "Multi-surface scented floor cleaner liquid for marble, granite, ceramic tiles, and vinyl.",
    fullDesc: "Fast-drying, streak-free formula that lifts dust and grime effortlessly while giving floors a radiant gloss shine and pleasant citrus/floral fragrance.",
    image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=800&q=80",
    packaging: ["500ml Squeeze Bottle", "1 Litre Container", "5 Litre Bulk Can"],
    applications: ["Living Rooms & Kitchens", "Retail Stores & Malls", "Corporate Reception Areas"]
  },
  {
    id: "floor-acid",
    name: "Floor Acid (Surface Cleaner)",
    category: "Floor Care",
    isManufacturerProduct: true,
    shortDesc: "High-strength tile stain and mineral deposit remover for heavy-duty bathroom and tile surface cleaning.",
    fullDesc: "Formulated to dissolve yellowing, lime scale, hard water stains, and cement residue on ceramic tiles and sanitaryware.",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
    packaging: ["500ml Heavy Duty Bottle", "1 Litre Container", "5 Litre Drum"],
    applications: ["Bathroom Tiles", "Construction Cleanups", "Public Facilities"]
  },
  {
    id: "dish-wash",
    name: "Dish Wash / Dishwashing Liquid",
    category: "Dish Care",
    isManufacturerProduct: true,
    shortDesc: "Power lemon dishwashing liquid and concentrated tub formulation for sparkling clean grease-free utensils.",
    fullDesc: "Cuts through tough oil and burnt food residue on stainless steel, glass, non-stick cookware, and delicate crockery without harsh scratching or drying hands.",
    image: "https://images.unsplash.com/photo-1585842378054-ee2e52f94ba2?auto=format&fit=crop&w=800&q=80",
    packaging: ["250ml Squeeze Bottle", "500ml Bottle", "1 Litre Refill", "5 Litre Can"],
    applications: ["Household Kitchens", "Restaurants & Canteens", "Hotel Kitchens", "Caterers"]
  },
  {
    id: "car-freshener",
    name: "Car Freshener",
    category: "Automotive & Air Care",
    isManufacturerProduct: true,
    shortDesc: "Long-lasting aromatic car dashboard fresheners and ambient scent diffusers.",
    fullDesc: "Eliminates musty odors, smoke, and air conditioning staleness inside vehicles, releasing clean ambient fragrances like Aqua, Citrus, and Musk.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80",
    packaging: ["100ml Spray Bottle", "50ml Gel Cup", "Hanging Perfume Card"],
    applications: ["Private Vehicles", "Taxi Fleets", "Showroom Cars", "Auto Detailing Centers"]
  }
];

export const CATEGORIES = [
  "All",
  "Hand Hygiene",
  "Laundry Care",
  "Floor Care",
  "Dish Care",
  "Automotive & Air Care"
];
