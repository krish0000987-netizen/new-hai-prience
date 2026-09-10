import React from 'react';
import { Sparkles, Home, Store, Building2, Hotel, Utensils, School, Factory, Truck, CheckCircle2, Send } from 'lucide-react';
import SEOHead from '../components/SEOHead';

export default function IndustriesPage({ onOpenQuoteModal }) {
  const sectors = [
    {
      id: "households",
      title: "Households & Residential",
      subtitle: "Safe, Fragrant Everyday Hygiene",
      image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=800&q=80",
      desc: "Our products keep family living spaces safe, sanitized, and fresh. From moisturizing handwash pumps to pleasant-scented white phenyl floor cleaners and lemon dishwashing liquids.",
      recommended: ["Liquid Handwash (Aloe Vera, Strawberry, Rose, Lime, Fresh)", "White Phenyl Disinfectant", "Dish Wash Liquid", "Detergent Powder"]
    },
    {
      id: "retail",
      title: "Retail Stores & Supermarkets",
      subtitle: "Consumer Packaged Stock Ready for Resale",
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80",
      desc: "We provide attractive, tamper-evident consumer packaging (250ml, 500ml, 1kg) designed to attract buyers on retail shelves with great profit margins for store owners.",
      recommended: ["250ml & 500ml Handwash Bottles", "1kg Detergent Powder Packs", "500ml White & Black Phenyls", "Car Fresheners"]
    },
    {
      id: "offices",
      title: "Corporate Offices & Business Parks",
      subtitle: "Sanitized Floors & Fresh Restroom Hygiene",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
      desc: "High footfall office corridors demand streak-free, quick-drying floor cleaners and bulk handwash refills for wall dispensers to maintain a professional environment.",
      recommended: ["5 Litre Handwash Refills", "Phenyl Floor Cleaner", "White Phenyl", "Glass & Surface Cleaners"]
    },
    {
      id: "hotels",
      title: "Hotels & Hospitality",
      subtitle: "Premium Guest Washroom Standards",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
      desc: "Delight hotel guests with fragrant Rose & Aloe Vera handwash in rooms and sparkling sanitized lobby floors that convey luxury and cleanliness.",
      recommended: ["Rose & Aloe Vera Handwash", "Floor Cleaner", "Dishwashing Liquid for Room Service Utensils"]
    },
    {
      id: "restaurants",
      title: "Restaurants, Cafes & Commercial Kitchens",
      subtitle: "Grease-Cutting Power & Kitchen Hygiene",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      desc: "Commercial kitchens require rapid oil and grease elimination. Our high-lather dish wash and floor cleaners keep food preparation zones sanitary.",
      recommended: ["Power Lemon Dish Wash", "Floor Acid for Tile Cleaning", "Lime Handwash for Chefs"]
    },
    {
      id: "schools",
      title: "Schools, Colleges & Hospitals",
      subtitle: "High-Sanitation Germ Protection",
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80",
      desc: "High-density institutional halls require continuous germ killing. Grade-1 Black Phenyl and Pine White Phenyl ensure deep disinfection against pathogens.",
      recommended: ["Black Phenyl Disinfectant", "White Phenyl", "Bulk Liquid Handwash (5L Cans)"]
    },
    {
      id: "commercial",
      title: "Commercial Malls & Industrial Plants",
      subtitle: "Heavy-Duty Floor & Sanitation Maintenance",
      image: "/assets/images/hero_manufacturing_plant_1788951656578.jpg",
      desc: "Large square-footage commercial zones require bulk 50L to 200L chemical drum supplies for scrubbers and daily sanitation teams.",
      recommended: ["200L Black Phenyl Drums", "50L White Phenyl Drums", "Bulk Liquid Detergents"]
    },
    {
      id: "distributors",
      title: "Distributors & Wholesalers",
      subtitle: "Regional High-Volume Supply Packages",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
      desc: "We support wholesale distributors with priority batch dispatch, flexible order quantities, and reliable recurring supply across Ganjam and Odisha.",
      recommended: ["Full Product Suite", "Wholesale Cartons & Pallets"]
    }
  ];

  return (
    <div>
      <SEOHead 
        title="Cleaning Solutions for Industries & Sectors" 
        description="Prince Industries supplies cleaning solutions tailored for households, retail, offices, hotels, restaurants, schools, and commercial facilities in Odisha."
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
              VERSATILE SECTOR APPLICATIONS
            </span>
            <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '3rem', fontWeight: 800, lineHeight: 1.15, marginBottom: '1rem' }}>
              Cleaning Solutions for Homes & Businesses
            </h1>
            <p style={{ fontSize: '1.15rem', color: '#94A3B8', lineHeight: 1.7 }}>
              Tailored product formulations and bulk packaging options customized for residential, retail, corporate, hospitality, and institutional clients.
            </p>
          </div>
        </div>
      </section>

      {/* Sector Cards */}
      <section style={{ padding: '5rem 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div className="grid-2">
            {sectors.map((sec) => (
              <div key={sec.id} className="card" style={{ padding: '2rem' }}>
                <div style={{
                  width: '100%',
                  height: '200px',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  marginBottom: '1.25rem'
                }}>
                  <img 
                    src={sec.image} 
                    alt={sec.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>

                <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent-green)', textTransform: 'uppercase', marginBottom: '0.2rem' }}>
                  {sec.subtitle}
                </div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.6rem' }}>
                  {sec.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  {sec.desc}
                </p>

                <div style={{ marginBottom: '1.5rem' }}>
                  <strong style={{ display: 'block', fontSize: '0.825rem', color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                    Recommended Product Formulations:
                  </strong>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                    {sec.recommended.map((rec, rIdx) => (
                      <span key={rIdx} style={{
                        fontSize: '0.75rem',
                        padding: '0.25rem 0.6rem',
                        backgroundColor: 'var(--bg-soft-green)',
                        color: 'var(--accent-green)',
                        borderRadius: '6px',
                        fontWeight: 600
                      }}>
                        {rec}
                      </span>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={() => onOpenQuoteModal(`Sector Inquiry: ${sec.title}`)}
                  className="btn btn-secondary btn-sm"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <Send size={14} />
                  <span>Enquire Sector Supply</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
