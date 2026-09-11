import React from 'react';
import { Sparkles, CheckCircle2, Send, Package, Shirt, ArrowRight, ShieldCheck } from 'lucide-react';
import SEOHead from '../components/SEOHead';

export default function DetergentPage({ onOpenQuoteModal }) {
  const detergentBenefits = [
    { title: "Deep Stain Penetration", desc: "Active stain-dissolving enzymes target grease, oil, mud, and collar dirt swiftly." },
    { title: "Fabric & Color Care", desc: "Gentle on natural cottons, synthetics, and delicate woolens without causing color fading." },
    { title: "Instant Water Solubility", desc: "Leaves zero chalky white residue or chemical streaks on washed clothes." },
    { title: "Long-Lasting Floral Scent", desc: "Infused with pleasant fragrance capsules that stay fresh even after drying." },
    { title: "High-Lather Washing", desc: "Produces rich lather in both hard and soft water conditions across Odisha." },
    { title: "Cost-Effective Bulk Pricing", desc: "Direct manufacturer supply in 1kg packs, 5kg bags, and 50kg wholesale sacks." }
  ];

  return (
    <div>
      <SEOHead 
        title="Detergent Powder & Liquid Detergent Manufacturer" 
        description="Prince Industries manufactures high-performance Detergent Powder and Liquid Detergent in Derabish, Kendrapara, Odisha. High stain removal, long-lasting aroma."
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
              LAUNDRY CARE MANUFACTURING
            </span>
            <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '3rem', fontWeight: 800, lineHeight: 1.15, marginBottom: '1rem' }}>
              Everyday Laundry Care That Works
            </h1>
            <p style={{ fontSize: '1.15rem', color: '#94A3B8', lineHeight: 1.7 }}>
              Engineered for superior stain removal, fabric protection, and long-lasting floral freshness. Available in detergent powder bags and concentrated liquid detergent jugs.
            </p>
          </div>
        </div>
      </section>

      {/* Product Breakdown */}
      <section style={{ padding: '5rem 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          {/* Detergent Powder */}
          <div className="card" style={{ marginBottom: '3.5rem', padding: '2.5rem' }}>
            <div className="grid-2" style={{ alignItems: 'center', gap: '3rem' }}>
              <div>
                <span className="section-tag">
                  <Shirt size={14} />
                  DETERGENT POWDER MANUFACTURER
                </span>
                <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
                  High-Active Detergent Powder
                </h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                  Formulated with active oxygen bleach and fabric conditioners, our detergent powder removes tough everyday stains, collar grease, and sweat odor while preserving fabric strength.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-primary)', fontWeight: 600 }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--accent-green)' }} />
                    <span>Bucket & Machine Wash</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-primary)', fontWeight: 600 }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--accent-green)' }} />
                    <span>Bright Whites & Colors</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-primary)', fontWeight: 600 }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--accent-green)' }} />
                    <span>Anti-Greying Formula</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-primary)', fontWeight: 600 }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--accent-green)' }} />
                    <span>Fresh Floral Scent</span>
                  </div>
                </div>

                <div style={{
                  padding: '0.75rem 1rem',
                  backgroundColor: 'var(--bg-alt)',
                  borderRadius: '8px',
                  fontSize: '0.85rem',
                  color: 'var(--text-muted)',
                  marginBottom: '1.5rem',
                  border: '1px solid var(--border-light)'
                }}>
                  <strong>Pack Sizes:</strong> 200g Pouch | 500g Pouch | 1kg Premium Pack | 5kg Bag | 50kg Bulk Sack
                </div>

                <button 
                  onClick={() => onOpenQuoteModal('Detergent Powder Manufacturer')}
                  className="btn btn-primary btn-md"
                >
                  <Send size={16} />
                  <span>Enquire Detergent Powder Wholesale</span>
                </button>
              </div>

              <div>
                <div style={{
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-lg)',
                  border: '1px solid var(--border-light)'
                }}>
                  <img 
                    src="/assets/images/hero_cleaning_suite_1788951618765.jpg" 
                    alt="Detergent Powder Prince Industries"
                    style={{ width: '100%', height: '360px', objectFit: 'cover' }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Liquid Detergent */}
          <div className="card" style={{ padding: '2.5rem' }}>
            <div className="grid-2" style={{ alignItems: 'center', gap: '3rem' }}>
              <div style={{ order: 2 }}>
                <span className="section-tag section-tag-blue">
                  <Shirt size={14} />
                  LIQUID DETERGENT
                </span>
                <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
                  Concentrated Machine & Hand Wash Liquid
                </h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                  A liquid wash formula optimized for top-load and front-load automatic washing machines. Dissolves 100% in water without leaving powder particles inside clothes or machine drums.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-primary)', fontWeight: 600 }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--accent-blue)' }} />
                    <span>Front & Top Load Safe</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-primary)', fontWeight: 600 }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--accent-blue)' }} />
                    <span>Delicate Fabric Care</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-primary)', fontWeight: 600 }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--accent-blue)' }} />
                    <span>Instant Solubility</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-primary)', fontWeight: 600 }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--accent-blue)' }} />
                    <span>Color Protection</span>
                  </div>
                </div>

                <div style={{
                  padding: '0.75rem 1rem',
                  backgroundColor: 'var(--bg-alt)',
                  borderRadius: '8px',
                  fontSize: '0.85rem',
                  color: 'var(--text-muted)',
                  marginBottom: '1.5rem',
                  border: '1px solid var(--border-light)'
                }}>
                  <strong>Pack Sizes:</strong> 500ml Bottle | 1 Litre Jug | 5 Litre Commercial Container
                </div>

                <button 
                  onClick={() => onOpenQuoteModal('Liquid Detergent')}
                  className="btn btn-blue btn-md"
                >
                  <Send size={16} />
                  <span>Enquire Liquid Detergent Wholesale</span>
                </button>
              </div>

              <div style={{ order: 1 }}>
                <div style={{
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-lg)',
                  border: '1px solid var(--border-light)'
                }}>
                  <img 
                    src="https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=800&q=80" 
                    alt="Liquid Detergent Prince Industries"
                    style={{ width: '100%', height: '360px', objectFit: 'cover' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detergent Benefits Grid */}
      <section style={{ padding: '5rem 0', backgroundColor: 'var(--bg-alt)' }}>
        <div className="container">
          <div className="section-header center">
            <span className="section-tag">
              <ShieldCheck size={14} />
              FORMULATION HIGHLIGHTS
            </span>
            <h2 className="section-title">
              Why Customers & Commercial Laundries Prefer Our Detergents
            </h2>
          </div>

          <div className="grid-3">
            {detergentBenefits.map((b, idx) => (
              <div key={idx} className="card">
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.4rem', color: 'var(--text-primary)' }}>
                  {b.title}
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {b.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <button onClick={() => onOpenQuoteModal('Detergent Range')} className="btn btn-primary btn-lg">
              <Send size={18} />
              <span>Enquire for Bulk Laundry Supply</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
