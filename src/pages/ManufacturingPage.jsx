import React from 'react';
import { Sparkles, Factory, ShieldCheck, CheckCircle2, ArrowRight, Package, Warehouse, Truck, FlaskConical, RotateCw, PackageCheck } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { MANUFACTURING_STEPS, CAPABILITIES } from '../data/manufacturingData';

export default function ManufacturingPage({ onOpenQuoteModal }) {
  const iconMap = {
    ShieldCheck: ShieldCheck,
    FlaskConical: FlaskConical,
    RotateCw: RotateCw,
    CheckCircle2: CheckCircle2,
    PackageCheck: PackageCheck,
    Warehouse: Warehouse,
    Truck: Truck
  };

  return (
    <div>
      <SEOHead 
        title="Manufacturing Quality & Facility - Aska, Odisha" 
        description="Learn about Prince Industries modern manufacturing facility in Aska, Ganjam, Odisha. Raw materials, liquid processing, quality control, packaging, warehouse dispatch."
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
              <Factory size={14} />
              STATE-OF-THE-ART MANUFACTURING
            </span>
            <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '3rem', fontWeight: 800, lineHeight: 1.15, marginBottom: '1rem' }}>
              Manufacturing Quality You Can Rely On
            </h1>
            <p style={{ fontSize: '1.15rem', color: '#94A3B8', lineHeight: 1.7 }}>
              Precision chemical liquid formulation, automated powder blending, strict quality assurance, and organized warehousing based in Aska, Ganjam, Odisha.
            </p>
          </div>
        </div>
      </section>

      {/* Overview & Facility */}
      <section style={{ padding: '5rem 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '3.5rem' }}>
            <div>
              <span className="section-tag">
                <ShieldCheck size={14} />
                PRODUCTION STANDARDS
              </span>
              <h2 className="section-title">
                Controlled Environment & Quality Formulation
              </h2>
              <p className="section-subtitle" style={{ marginBottom: '1.25rem' }}>
                At Prince Industries, our production methodology combines tested chemical recipes with modern mixing technology. We operate under strict cleanliness standards to ensure every batch of handwash, phenyl, floor cleaner, and detergent achieves maximum cleaning efficacy and long shelf stability.
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '2rem' }}>
                Whether manufacturing 250ml retail pump bottles or 200L commercial barrels, our process enforces standardized pH ratios, precise scent integration, and leak-proof container sealing.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, fontSize: '0.9rem' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--accent-green)' }} />
                  <span>High-Grade Emulsifiers</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, fontSize: '0.9rem' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--accent-green)' }} />
                  <span>Viscosity Testing</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, fontSize: '0.9rem' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--accent-green)' }} />
                  <span>Leakage Proof Sealing</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, fontSize: '0.9rem' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--accent-green)' }} />
                  <span>Batch Serial Control</span>
                </div>
              </div>

              <button onClick={() => onOpenQuoteModal()} className="btn btn-primary btn-md">
                <span>Discuss Custom Bulk Manufacturing</span>
                <ArrowRight size={16} />
              </button>
            </div>

            <div>
              <div style={{
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-xl)',
                border: '1px solid var(--border-light)'
              }}>
                <img 
                  src="/assets/images/hero_manufacturing_plant_1788951656578.jpg" 
                  alt="Prince Industries Chemical Manufacturing Facility"
                  style={{ width: '100%', height: '440px', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Production Flowchart Steps */}
      <section style={{ padding: '5rem 0', backgroundColor: 'var(--bg-alt)' }}>
        <div className="container">
          <div className="section-header center">
            <span className="section-tag">
              <RotateCw size={14} />
              STEP-BY-STEP PROCESS
            </span>
            <h2 className="section-title">
              Our 7-Step Production Flowchart
            </h2>
            <p className="section-subtitle">
              From raw material verification to final dispatch, every step is designed for safety, consistency, and reliability.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', maxWidth: '860px', margin: '0 auto' }}>
            {MANUFACTURING_STEPS.map((step) => {
              const IconComp = iconMap[step.icon] || CheckCircle2;
              return (
                <div key={step.step} className="card" style={{ flexDirection: 'row', alignItems: 'center', gap: '1.5rem', padding: '1.5rem 1.75rem' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--bg-soft-green)',
                    color: 'var(--accent-green)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 800,
                    fontSize: '1.2rem',
                    flexShrink: 0
                  }}>
                    {step.step}
                  </div>
                  <div style={{ flexGrow: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
                      <IconComp size={16} style={{ color: 'var(--accent-green)' }} />
                      <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                        {step.title}
                      </h3>
                    </div>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Broader Manufacturing Capabilities */}
      <section style={{ padding: '5rem 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div className="section-header center">
            <span className="section-tag section-tag-blue">
              <Package size={14} />
              MANUFACTURING CAPABILITIES
            </span>
            <h2 className="section-title">
              Flexible Supply Models for B2B Partners
            </h2>
          </div>

          <div className="grid-3">
            {CAPABILITIES.map((cap, idx) => (
              <div key={idx} className="card">
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                  {cap.title}
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {cap.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <button onClick={() => onOpenQuoteModal()} className="btn btn-primary btn-lg">
              <Sparkles size={18} />
              <span>Discuss Your Bulk Requirement</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
