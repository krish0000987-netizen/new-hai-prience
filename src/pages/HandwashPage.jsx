import React from 'react';
import { NavLink } from 'react-router-dom';
import { Sparkles, ShieldCheck, Heart, Droplets, CheckCircle2, ArrowRight, Package, Send } from 'lucide-react';
import SEOHead from '../components/SEOHead';

export default function HandwashPage({ onOpenQuoteModal }) {
  const variants = [
    {
      id: "aloe-vera",
      name: "Aloe Vera Handwash",
      tagline: "Moisturizing & Soothing Skin Care",
      desc: "Enriched with aloe botanical extracts designed to keep skin hydrated, soft, and supple after every hand wash.",
      color: "#10B981",
      bgColor: "#ECFDF5",
      icon: "🌱",
      packaging: ["250ml Pump", "500ml Dispenser", "1L Refill", "5L Can"]
    },
    {
      id: "strawberry",
      name: "Strawberry Handwash",
      tagline: "Energizing Sweet Fruity Aroma",
      desc: "Delightful fresh berry fragrance that turns everyday hand washing into a refreshing sensory experience.",
      color: "#EC4899",
      bgColor: "#FDF2F8",
      icon: "🍓",
      packaging: ["250ml Pump", "500ml Dispenser", "1L Refill", "5L Can"]
    },
    {
      id: "rose",
      name: "Rose Handwash",
      tagline: "Elegant & Luxurious Floral Scent",
      desc: "Classic rose floral notes formulation suitable for premium hotel washrooms, corporate suites, and home bathrooms.",
      color: "#F43F5E",
      bgColor: "#FFF1F2",
      icon: "🌹",
      packaging: ["250ml Pump", "500ml Dispenser", "1L Refill", "5L Can"]
    },
    {
      id: "lime",
      name: "Lime Handwash",
      tagline: "Zesty Citrus Odor Control",
      desc: "High-citrus freshness engineered to eliminate tough kitchen odors, food smells, and oil grease from hands.",
      color: "#84CC16",
      bgColor: "#F7FEE7",
      icon: "🍋",
      packaging: ["250ml Pump", "500ml Dispenser", "1L Refill", "5L Can"]
    },
    {
      id: "fresh",
      name: "Fresh Aqua Handwash",
      tagline: "Crisp Marine Cleanliness",
      desc: "Ocean breeze scent formulation delivering deep germ protection and instant aqua freshness for high-footfall restrooms.",
      color: "#06B6D4",
      bgColor: "#ECFEFF",
      icon: "🌊",
      packaging: ["250ml Pump", "500ml Dispenser", "1L Refill", "5L Can"]
    }
  ];

  return (
    <div>
      <SEOHead 
        title="Liquid Handwash Range - Aloe Vera, Strawberry, Rose, Lime, Fresh" 
        description="Explore Prince Industries handwash range manufactured in Derabish, Kendrapara, Odisha. Available in Aloe Vera, Strawberry, Rose, Lime, and Fresh variants."
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
              PREMIUM HAND HYGIENE RANGE
            </span>
            <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '3rem', fontWeight: 800, lineHeight: 1.15, marginBottom: '1rem' }}>
              Everyday Hand Hygiene with a Fresh Touch
            </h1>
            <p style={{ fontSize: '1.15rem', color: '#94A3B8', lineHeight: 1.7 }}>
              Manufactured with skin-friendly moisturizing agents and long-lasting fragrances, our liquid handwash range protects hands while leaving them pleasantly scented.
            </p>
          </div>
        </div>
      </section>

      {/* Main Fragrance Variants Showcase */}
      <section style={{ padding: '5rem 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div className="section-header center">
            <span className="section-tag">
              <Droplets size={14} />
              SIGNATURE FRAGRANCES
            </span>
            <h2 className="section-title">
              Our 5 Distinct Fragrance Variants
            </h2>
            <p className="section-subtitle">
              Each variant is meticulously crafted for rich lathering, skin conditioning, and long-lasting aroma.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {variants.map((v, idx) => (
              <div key={v.id} className="card" style={{
                backgroundColor: '#FFFFFF',
                borderLeft: `6px solid ${v.color}`,
                padding: '2.2rem'
              }}>
                <div className="grid-2" style={{ alignItems: 'center', gap: '2rem' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                      <span style={{ fontSize: '2rem' }}>{v.icon}</span>
                      <span style={{
                        padding: '0.25rem 0.75rem',
                        borderRadius: '9999px',
                        backgroundColor: v.bgColor,
                        color: v.color,
                        fontWeight: 700,
                        fontSize: '0.8rem'
                      }}>
                        {v.tagline}
                      </span>
                    </div>

                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
                      {v.name}
                    </h3>

                    <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                      {v.desc}
                    </p>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                      <Package size={16} style={{ color: 'var(--text-muted)' }} />
                      <strong style={{ fontSize: '0.85rem', color: 'var(--text-primary)' }}>Available Packs:</strong>
                      {v.packaging.map((pack, pIdx) => (
                        <span key={pIdx} style={{
                          fontSize: '0.8rem',
                          padding: '0.2rem 0.6rem',
                          backgroundColor: 'var(--bg-alt)',
                          borderRadius: '6px',
                          border: '1px solid var(--border-light)',
                          color: 'var(--text-secondary)'
                        }}>
                          {pack}
                        </span>
                      ))}
                    </div>

                    <button 
                      onClick={() => onOpenQuoteModal(`Handwash - ${v.name}`)}
                      className="btn btn-primary btn-sm"
                    >
                      <Send size={15} />
                      <span>Enquire {v.name} Bulk Order</span>
                    </button>
                  </div>

                  <div style={{ textAlign: 'center' }}>
                    <img 
                      src="/assets/images/hero_handwash_luxury_1788951574303.jpg" 
                      alt={v.name}
                      style={{
                        maxWidth: '100%',
                        maxHeight: '260px',
                        objectFit: 'cover',
                        borderRadius: 'var(--radius-md)',
                        boxShadow: 'var(--shadow-md)',
                        margin: '0 auto'
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Segments for Handwash */}
      <section style={{ padding: '5rem 0', backgroundColor: 'var(--bg-alt)' }}>
        <div className="container">
          <div className="section-header center">
            <span className="section-tag section-tag-blue">
              <ShieldCheck size={14} />
              VERSATILE APPLICATIONS
            </span>
            <h2 className="section-title">
              Trusted for Hand Hygiene Across Settings
            </h2>
            <p className="section-subtitle">
              We supply retail bottles for home use as well as 5L containers and wall dispenser refills for commercial establishments.
            </p>
          </div>

          <div className="grid-3">
            <div className="card">
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>Homes & Families</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>Gentle 250ml pump bottles for kitchen and bathroom sinks, keeping every family member safe and fresh.</p>
            </div>
            <div className="card">
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>Hotels & Hospitality</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>Luxurious Rose and Aloe Vera handwash for guest room washrooms and fine dining restrooms.</p>
            </div>
            <div className="card">
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>Offices & Corporate</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>5 Litre bulk refill canisters for automatic and manual wall-mounted soap dispensers in office complexes.</p>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <button onClick={() => onOpenQuoteModal('Handwash Range')} className="btn btn-primary btn-lg">
              <Send size={18} />
              <span>Enquire About Handwash Supply</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
