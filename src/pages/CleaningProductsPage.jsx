import React from 'react';
import { Sparkles, ShieldCheck, CheckCircle2, Send, Droplets, Layers, ArrowRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';

export default function CleaningProductsPage({ onOpenQuoteModal }) {
  const cleaningProducts = [
    {
      id: "white-phenyl",
      name: "White Phenyl (Pine Oil Disinfectant)",
      category: "Floor Care & Hygiene",
      image: "/assets/images/hero_slide_2.jpg",
      tagline: "High-Emulsion Pine Disinfectant Floor Cleaner",
      description: "Prince Industries manufactures dense, high-grade white phenyl formulated with rich pine oils. It effectively kills household germs, eliminates foul odors, repels flies and insects, and leaves floors sparkling white with a natural pine fragrance.",
      usages: ["Marble & Granite Floors", "Ceramic Tiles", "Hospital & Clinic Corridors", "School & College Classrooms"],
      packaging: "500ml Bottle | 1 Litre Bottle | 5 Litre Can | 50 Litre Bulk Drum"
    },
    {
      id: "black-phenyl",
      name: "Black Phenyl (Grade-1 Disinfectant)",
      category: "Heavy-Duty Sanitation",
      image: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&w=800&q=80",
      tagline: "Heavy-Duty Disinfectant for Commercial & Exterior Spaces",
      description: "Our Grade-1 black phenyl is specially engineered for intense sanitization requirements. It features powerful coal-tar oil active ingredients designed to disinfect drains, municipal public toilets, slaughterhouses, factory yards, and heavy-footfall sanitation lines.",
      usages: ["Drain Lines & Sewage Outlets", "Public Restrooms & Toilets", "Industrial Waste Yards", "Municipal Sanitation Zones"],
      packaging: "1 Litre Bottle | 5 Litre Canister | 200 Litre Industrial Barrel"
    },
    {
      id: "floor-cleaner",
      name: "Phenyl Floor Cleaner / Surface Cleaner",
      category: "Surface & Floor Care",
      image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=800&q=80",
      tagline: "Multi-Surface Scented Gloss Cleaner",
      description: "A fast-drying, streak-free surface cleaner that effortlessly lifts dust, footprints, sticky spills, and grease from modern flooring surfaces. Infused with pleasant citrus and floral perfume notes to keep living and work spaces fresh all day.",
      usages: ["Living Rooms & Bedrooms", "Corporate Offices & Reception Desks", "Hotel Lobbies & Hallways", "Shopping Malls"],
      packaging: "500ml Squeeze Bottle | 1 Litre Container | 5 Litre Bulk Can"
    },
    {
      id: "floor-acid",
      name: "Floor Acid (Surface Stain Remover)",
      category: "Tile & Sanitary Care",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
      tagline: "Heavy Tile Stain & Scale Deposit Dissolver",
      description: "Formulated for tough cleaning challenges, our floor acid rapidly dissolves stubborn yellow water marks, hard water lime scale, rust stains, and post-construction cement residue from ceramic tiles and sanitary porcelain.",
      usages: ["Bathroom Floor & Wall Tiles", "Sanitary Utensils & Urinals", "Post-Construction Cleanup Sites"],
      packaging: "500ml Heavy Duty Bottle | 1 Litre Container | 5 Litre Drum"
    },
    {
      id: "dish-wash",
      name: "Dish Wash / Dishwashing Liquid",
      category: "Kitchen Hygiene",
      image: "https://images.unsplash.com/photo-1585842378054-ee2e52f94ba2?auto=format&fit=crop&w=800&q=80",
      tagline: "Power Lemon Grease-Cutting Liquid",
      description: "Conquers stubborn oil, ghee, burnt grease, and food odor on all cooking utensils. Formulated with high-foaming surfactants that rinse off completely without leaving white chalky film or irritating hands.",
      usages: ["Stainless Steel Cookware", "Glassware & Fine Crockery", "Non-Stick Frying Pans", "Restaurant Kitchen Equipment"],
      packaging: "250ml Squeeze Bottle | 500ml Bottle | 1 Litre Refill | 5 Litre Can"
    }
  ];

  return (
    <div>
      <SEOHead 
        title="White Phenyl, Black Phenyl, Floor Cleaner & Dish Wash Manufacturer" 
        description="Prince Industries manufactures high-grade White Phenyl, Black Phenyl, Floor Cleaner, Floor Acid, and Dish Wash Liquid in Aska, Ganjam, Odisha."
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
              SURFACE & DISINFECTANT CLEANING RANGE
            </span>
            <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '3rem', fontWeight: 800, lineHeight: 1.15, marginBottom: '1rem' }}>
              Powerful Cleaning for Everyday Spaces
            </h1>
            <p style={{ fontSize: '1.15rem', color: '#94A3B8', lineHeight: 1.7 }}>
              Engineered for residential, commercial, and institutional sanitation needs. High-concentration white/black phenyls, glossy floor cleaners, stain acids, and grease-cutting dish liquids.
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
                      borderRadius: 'var(--radius-md)',
                      overflow: 'hidden',
                      boxShadow: 'var(--shadow-lg)',
                      border: '1px solid var(--border-light)'
                    }}>
                      <img 
                        src={p.image} 
                        alt={p.name}
                        style={{ width: '100%', height: '360px', objectFit: 'cover' }}
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
