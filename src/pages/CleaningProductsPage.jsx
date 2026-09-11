import React from 'react';
import { Sparkles, ShieldCheck, CheckCircle2, Send, Droplets, Layers, ArrowRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';

export default function CleaningProductsPage({ onOpenQuoteModal }) {
  const cleaningProducts = [
    {
      id: "white-phenyl",
      name: "White Phenyl (Pine Oil Disinfectant)",
      category: "Floor Care & Hygiene",
      image: "/assets/images/product_white_phenyl_neem.jpg",
      isBottle: true,
      tagline: "Natural Neem Infused Floor Disinfectant — 1 Litre",
      description: "Prince Industries manufactures dense, high-grade white phenyl formulated with rich pine oils and natural neem extracts. It effectively kills 99.9% household germs & bacteria, eliminates foul odors, repels flies and insects, and leaves floors sparkling clean with a lasting fresh fragrance.",
      usages: ["Marble & Granite Floors", "Ceramic Tiles", "Hospital & Clinic Corridors", "School & College Classrooms"],
      packaging: "500ml Bottle | 1 Litre Bottle | 5 Litre Can | 50 Litre Bulk Drum"
    },
    {
      id: "black-phenyl",
      name: "Prince Kobra Black Phenyl (Disinfectant)",
      category: "Heavy-Duty Sanitation",
      image: "/assets/images/product_black_phenyl_kobra.jpg",
      isBottle: false,
      tagline: "Powerful Disinfectant Phenyl — 1L Bottle & 5L Canister",
      description: "Our heavy-duty Prince Kobra Black Phenyl is specially engineered for intense sanitization requirements. It features powerful germicidal active ingredients that disinfect drains, exterior floors, public restrooms, industrial yards, and high-footfall commercial sanitation zones.",
      usages: ["Drain Lines & Sewage Outlets", "Public Restrooms & Toilets", "Industrial Waste Yards", "Municipal Sanitation Zones"],
      packaging: "1 Litre Bottle | 5 Litre Canister | 200 Litre Industrial Barrel"
    },
    {
      id: "toilet-cleaner",
      name: "Prince Toilet Cleaner (Power Plus 10X & Pro Max)",
      category: "Sanitary & Bathroom Care",
      image: "/assets/images/product_toilet_cleaner.jpg",
      isBottle: true,
      tagline: "10X Germ Kill Thick Formula — 500ml Angular Nozzle Bottle",
      description: "Prince Industries manufactures a thick, concentrated gel toilet cleaner designed to cling to vertical bowl surfaces for deep sanitization. Eliminates tough yellow deposits, hard water lime scale, removes 99.9% germs, and imparts a refreshing pine and ocean blue aroma.",
      usages: ["Western & Indian Toilet Bowls", "Urinals & Restroom Basins", "Hotel & Lodge Restrooms", "Hospital Sanitation"],
      packaging: "500ml Squeeze Dispenser Bottle | 1 Litre Refill | 5 Litre Commercial Can"
    },
    {
      id: "floor-cleaner",
      name: "Royal Neem Phenyl Floor Cleaner / Surface Cleaner",
      category: "Surface & Floor Care",
      image: "/assets/images/product_black_phenyl_neem_bottle.jpg",
      isBottle: true,
      tagline: "Multi-Surface Scented Gloss Cleaner — 1 Litre",
      description: "A fast-drying, streak-free surface cleaner that effortlessly lifts dust, footprints, sticky spills, and grease from modern flooring surfaces. Infused with natural neem fragrance to keep living and work spaces fresh and germ-free all day.",
      usages: ["Living Rooms & Bedrooms", "Corporate Offices & Reception Desks", "Hotel Lobbies & Hallways", "Shopping Malls"],
      packaging: "500ml Squeeze Bottle | 1 Litre Container | 5 Litre Bulk Can"
    },
    {
      id: "floor-acid",
      name: "Prince Floor Acid (Heavy-Duty Stain Remover)",
      category: "Tile & Sanitary Care",
      image: "/assets/images/product_floor_acid.jpg",
      isBottle: true,
      tagline: "Heavy Tile Stain & Mineral Deposit Dissolver — 1 Litre",
      description: "Formulated for tough cleaning challenges, our high-strength floor acid rapidly dissolves stubborn yellow water marks, hard water lime scale, rust stains, and post-construction cement residue from ceramic tiles and sanitary porcelain.",
      usages: ["Bathroom Floor & Wall Tiles", "Sanitary Utensils & Urinals", "Post-Construction Cleanup Sites"],
      packaging: "500ml Heavy Duty Bottle | 1 Litre Container | 5 Litre Drum"
    },
    {
      id: "dish-wash",
      name: "Vin Drop Dishwash Liquid Lemon",
      category: "Kitchen Hygiene",
      image: "/assets/images/product_dishwash_lemon.jpg",
      isBottle: false,
      tagline: "Power Lemon Grease-Cutting Formula — 225ml",
      description: "Conquers stubborn oil, ghee, burnt grease, and food odor on all cooking utensils. Formulated with natural lemon power and high-foaming surfactants that rinse off completely without leaving white chalky film or irritating hands.",
      usages: ["Stainless Steel Cookware", "Glassware & Fine Crockery", "Non-Stick Frying Pans", "Restaurant Kitchen Equipment"],
      packaging: "225ml Dispenser Bottle | 500ml Bottle | 1 Litre Refill | 5 Litre Can"
    }
  ];

  return (
    <div>
      <SEOHead 
        title="White Phenyl, Black Phenyl, Toilet Cleaner & Dish Wash Manufacturer" 
        description="Prince Industries manufactures high-grade White Phenyl, Black Phenyl, Toilet Cleaner, Floor Acid, and Dish Wash Liquid in Derabish, Kendrapara, Odisha."
      />

      {/* Hero */}
      <section style={{
        padding: '4.5rem 0 3.5rem 0',
        backgroundColor: 'var(--bg-dark)',
        color: '#FFFFFF'
      }}>
        <div className="container">
          <div style={{ maxWidth: '760px' }}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.4rem 1rem',
              backgroundColor: 'rgba(52, 211, 153, 0.2)',
              color: '#34D399',
              borderRadius: '9999px',
              fontSize: '0.825rem',
              fontWeight: 700,
              marginBottom: '1rem'
            }}>
              <Sparkles size={14} />
              AUTHENTIC MANUFACTURED CLEANING RANGE
            </span>
            <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '3rem', fontWeight: 800, lineHeight: 1.15, marginBottom: '1rem' }}>
              Powerful Cleaning for Everyday Spaces
            </h1>
            <p style={{ fontSize: '1.15rem', color: '#94A3B8', lineHeight: 1.7 }}>
              Directly manufactured at our plant in Derabish, Kendrapara, Odisha. High-emulsion white phenyls, Kobra black phenyl, thick-gel toilet cleaners, stain-dissolving acids, and Vin Drop lemon dishwash.
            </p>
          </div>
        </div>
      </section>

      {/* Product Sections */}
      <section style={{ padding: '5rem 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            {cleaningProducts.map((p, idx) => (
              <div key={p.id} className="card" style={{ padding: '2.5rem' }}>
                <div className="grid-2" style={{ alignItems: 'center', gap: '3rem' }}>
                  <div style={{ order: idx % 2 === 1 ? 2 : 1 }}>
                    <span className="section-tag">
                      <Layers size={14} />
                      {p.category}
                    </span>
                    <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                      {p.name}
                    </h2>
                    <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--accent-green)', marginBottom: '1rem' }}>
                      {p.tagline}
                    </div>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                      {p.description}
                    </p>

                    {/* Common Applications */}
                    <div style={{ marginBottom: '1.5rem' }}>
                      <strong style={{ display: 'block', fontSize: '0.875rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                        Ideal Applications:
                      </strong>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                        {p.usages.map((u, uIdx) => (
                          <div key={uIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                            <CheckCircle2 size={15} style={{ color: 'var(--accent-green)', flexShrink: 0 }} />
                            <span>{u}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Packaging */}
                    <div style={{
                      padding: '0.75rem 1rem',
                      backgroundColor: 'var(--bg-alt)',
                      borderRadius: '8px',
                      fontSize: '0.85rem',
                      color: 'var(--text-muted)',
                      marginBottom: '1.5rem',
                      border: '1px solid var(--border-light)'
                    }}>
                      <strong>Packaging Options:</strong> {p.packaging}
                    </div>

                    <button 
                      onClick={() => onOpenQuoteModal(p.name)}
                      className="btn btn-primary btn-md"
                    >
                      <Send size={16} />
                      <span>Enquire Bulk Supply for {p.name}</span>
                    </button>
                  </div>

                  <div style={{ order: idx % 2 === 1 ? 1 : 2 }}>
                    <div style={{
                      borderRadius: 'var(--radius-lg)',
                      overflow: 'hidden',
                      boxShadow: 'var(--shadow-lg)',
                      border: '1px solid var(--border-light)',
                      backgroundColor: p.isBottle ? '#FFFFFF' : '#0F172A',
                      height: '380px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: p.isBottle ? '1.25rem' : '0'
                    }}>
                      <img 
                        src={p.image} 
                        alt={p.name}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: p.isBottle ? 'contain' : 'cover'
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
