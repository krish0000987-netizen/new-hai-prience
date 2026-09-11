import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Sparkles, ShieldCheck, MapPin, Factory, Store, Truck, Layers, 
  CheckCircle2, ArrowRight, HeartHandshake, Award
} from 'lucide-react';
import SEOHead from '../components/SEOHead';

export default function AboutPage({ onOpenQuoteModal }) {
  const whatWeDo = [
    { title: "Chemical Manufacturing", desc: "Precision liquid and powder formulation of handwash, detergents, phenyls, and floor surface cleaners." },
    { title: "Wholesale Distribution", desc: "Bulk quantity distribution at direct factory prices for dealers, stockists, and commercial buyers." },
    { title: "Retail Supply", desc: "Ready-for-shelf packaged consumer goods designed for supermarkets, grocery stores, and local retail outlets." },
    { title: "Bulk & Drum Supply", desc: "Heavy-volume supplies in 5L, 50L, and 200L drums tailored for industrial plants and large institutions." },
    { title: "Distributor Support", desc: "Dedicated logistics support and customized ordering channels for regional distributor networks." },
    { title: "Institutional Cleaning", desc: "Formulated cleaning product suites for hospitals, hotels, schools, offices, and commercial spaces." }
  ];

  return (
    <div>
      <SEOHead 
        title="About Prince Industries - Derabish, Kendrapara, Odisha" 
        description="Learn about Prince Industries, a trusted manufacturer, wholesaler, and retailer of cleaning & hygiene products based in Derabish, Kendrapara, Odisha."
      />

      {/* Page Hero */}
      <section style={{
        padding: '4.5rem 0 3.5rem 0',
        backgroundColor: 'var(--bg-dark)',
        color: '#FFFFFF',
        position: 'relative'
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
              TRUSTED MANUFACTURER IN GANJAM, ODISHA
            </span>
            <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '3rem', fontWeight: 800, lineHeight: 1.15, marginBottom: '1rem' }}>
              About Prince Industries
            </h1>
            <p style={{ fontSize: '1.15rem', color: '#94A3B8', lineHeight: 1.7 }}>
              Prince Industries is a premier cleaning and hygiene products manufacturer, wholesaler, and retailer based in Derabish, Kendrapara, Odisha, dedicated to delivering superior sanitation and freshness for homes, businesses, and institutions.
            </p>
          </div>
        </div>
      </section>

      {/* Company Intro & Our Story */}
      <section style={{ padding: '5rem 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '3.5rem' }}>
            <div>
              <span className="section-tag">
                <HeartHandshake size={14} />
                OUR STORY & MISSION
              </span>
              <h2 className="section-title">
                Dedicated to Pure Cleanliness & Everyday Hygiene
              </h2>
              <p className="section-subtitle" style={{ marginBottom: '1.25rem' }}>
                Established as a trusted local cleaning-product manufacturer in Derabish, Kendrapara, Odisha, Prince Industries was founded with a singular commitment: producing highly effective, dependable, and affordable cleaning and hygiene solutions.
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                We understand that clean environments foster healthy living and productive workplaces. That is why our manufacturing facility in Derabish, Kendrapara utilizes quality raw materials, balanced chemical formulations, and stringent quality control protocols across our entire product line.
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '2rem' }}>
                Whether supplying individual households with skin-soothing scented handwashes, empowering local retailers with high-demand detergent stock, or fulfilling bulk disinfectant phenyl orders for institutions, Prince Industries stands for consistency, trust, and uncompromised quality.
              </p>

              <div style={{ display: 'flex', gap: '1rem' }}>
                <button onClick={() => onOpenQuoteModal()} className="btn btn-primary btn-md">
                  <span>Get a Wholesale Quote</span>
                  <ArrowRight size={16} />
                </button>
                <NavLink to="/manufacturing" className="btn btn-secondary btn-md">
                  <span>Our Manufacturing Facility</span>
                </NavLink>
              </div>
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
                  alt="Prince Industries Story in Derabish, Kendrapara Odisha"
                  style={{ width: '100%', height: '440px', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section style={{ padding: '5rem 0', backgroundColor: 'var(--bg-alt)' }}>
        <div className="container">
          <div className="section-header center">
            <span className="section-tag">
              <Factory size={14} />
              OUR CORE CAPABILITIES
            </span>
            <h2 className="section-title">
              What We Do at Prince Industries
            </h2>
            <p className="section-subtitle">
              We serve as an integrated manufacturer, wholesaler, and retail supplier across multiple distribution channels.
            </p>
          </div>

          <div className="grid-3">
            {whatWeDo.map((item, idx) => (
              <div key={idx} className="card">
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  backgroundColor: 'var(--bg-soft-green)',
                  color: 'var(--accent-green)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem',
                  fontWeight: 800
                }}>
                  {idx + 1}
                </div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section style={{ padding: '5rem 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '3rem' }}>
            <div style={{
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-xl)',
              border: '1px solid var(--border-light)'
            }}>
              <img 
                src="/assets/images/hero_cleaning_suite_1788951618765.jpg" 
                alt="Prince Industries Product Commitment"
                style={{ width: '100%', height: '420px', objectFit: 'cover' }}
              />
            </div>

            <div>
              <span className="section-tag section-tag-blue">
                <Award size={14} />
                OUR CORE COMMITMENT
              </span>
              <h2 className="section-title">
                Uncompromising Hygiene & Quality Focus
              </h2>
              <p className="section-subtitle" style={{ marginBottom: '1.5rem' }}>
                We believe that reliable cleaning products are fundamental to community health and wellness. Our manufacturing principles revolve around four core pillars:
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', gap: '0.85rem' }}>
                  <CheckCircle2 size={22} style={{ color: 'var(--accent-green)', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ color: 'var(--text-primary)', fontSize: '1rem' }}>High Active-Content Formulation:</strong>
                    <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Ensuring maximum cleaning power, thick lather, and superior germ eradication.</div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.85rem' }}>
                  <CheckCircle2 size={22} style={{ color: 'var(--accent-green)', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ color: 'var(--text-primary)', fontSize: '1rem' }}>Durable & Leak-Proof Packaging:</strong>
                    <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>High-density containers engineered for safe handling and long-distance transport.</div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.85rem' }}>
                  <CheckCircle2 size={22} style={{ color: 'var(--accent-green)', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ color: 'var(--text-primary)', fontSize: '1rem' }}>Consistent Batch Quality:</strong>
                    <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Rigorous testing for pH stability, viscosity, and scent retention in every batch.</div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.85rem' }}>
                  <CheckCircle2 size={22} style={{ color: 'var(--accent-green)', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ color: 'var(--text-primary)', fontSize: '1rem' }}>Fair Direct-Factory Pricing:</strong>
                    <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Providing unmatched value for wholesalers, retailers, and bulk buyers.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section style={{ padding: '4rem 0', backgroundColor: 'var(--bg-alt)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '780px' }}>
          <span className="section-tag">
            <MapPin size={14} />
            OUR LOCATION
          </span>
          <h2 className="section-title">
            Proudly Located in Derabish, Kendrapara, Odisha
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto 2rem auto' }}>
            Operating from Derabish in Kendrapara district, we are strategically positioned to supply high-quality cleaning products across Southern Odisha and nationwide commercial logistics routes.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <NavLink to="/gallery-contact" className="btn btn-primary btn-lg">
              <span>Talk to Prince Industries</span>
              <ArrowRight size={18} />
            </NavLink>
            <button onClick={() => onOpenQuoteModal()} className="btn btn-secondary btn-lg">
              <span>Request Wholesale Pricing</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
