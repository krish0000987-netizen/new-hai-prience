import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Sparkles, CheckCircle2, ShieldCheck, ArrowRight, Phone, Send, Factory, 
  Store, Building2, Hotel, School, Utensils, Home, HeartHandshake, Layers
} from 'lucide-react';
import HeroSlideshow from '../components/HeroSlideshow';
import TrustStrip from '../components/TrustStrip';
import ProductCard from '../components/ProductCard';
import SEOHead from '../components/SEOHead';
import { PRODUCTS } from '../data/productsData';

export default function HomePage({ onOpenQuoteModal }) {
  const whyChooseUs = [
    { title: "Reliable Product Quality", desc: "Strict quality-controlled chemical formulations engineered for maximum efficacy and skin safety.", icon: ShieldCheck },
    { title: "Wide Product Range", desc: "Comprehensive inventory spanning handwash, detergents, phenyls, floor cleaners, and dish wash.", icon: Layers },
    { title: "Wholesale Supply", desc: "Direct factory pricing with high volume margins for regional wholesalers, dealers, and stockists.", icon: Factory },
    { title: "Retail Availability", desc: "Eye-catching, consumer-ready retail packaging crafted to excel on supermarket and store shelves.", icon: Store },
    { title: "Bulk Order Support", desc: "Custom packaging options in 5L canisters to 200L drums tailored for commercial buyers.", icon: Send },
    { title: "Competitive Pricing", desc: "Transparent, cost-effective pricing models offering exceptional value without compromising purity.", icon: Sparkles },
    { title: "Consistent Supply", desc: "Dependable dispatch routines ensuring your retail shelves or business facility never runs out of stock.", icon: CheckCircle2 },
    { title: "Customer-Focused Service", desc: "Dedicated support team in Aska, Ganjam to assist with order customizations and logistics.", icon: HeartHandshake }
  ];

  const handwashVariants = [
    { name: "Aloe Vera", desc: "Soothing & moisturizing skin formulation", color: "#10B981", badge: "Skin Care", icon: "🌱" },
    { name: "Strawberry", desc: "Rich fruity fragrance for energizing wash", color: "#EC4899", badge: "Fruity Scent", icon: "🍓" },
    { name: "Rose", desc: "Elegant floral aroma for premium hand hygiene", color: "#F43F5E", badge: "Floral Luxury", icon: "🌹" },
    { name: "Lime", desc: "Fresh citrus zest with anti-odor protection", color: "#84CC16", badge: "Citrus Fresh", icon: "🍋" },
    { name: "Fresh", desc: "Clean aqua aroma for crisp everyday defense", color: "#06B6D4", badge: "Classic Hygiene", icon: "🌊" }
  ];

  const customerSegments = [
    { title: "Homes", desc: "Safe, aromatic everyday hygiene for family spaces.", icon: Home },
    { title: "Retail Stores", desc: "High-margin FMCG products ready for retail shelves.", icon: Store },
    { title: "Corporate Offices", desc: "Pristine floor sanitization & premium restroom hand wash.", icon: Building2 },
    { title: "Hotels & Lodges", desc: "Superior guest room handwash & floor cleaning standards.", icon: Hotel },
    { title: "Restaurants & Cafes", desc: "Grease-cutting dish wash & kitchen hygiene solutions.", icon: Utensils },
    { title: "Schools & Colleges", desc: "Safe bulk disinfectants for high-footfall educational halls.", icon: School }
  ];

  return (
    <div>
      <SEOHead 
        title="Trusted Cleaning & Hygiene Products Manufacturer" 
        description="Prince Industries manufactures & supplies handwash, detergent powder, liquid detergent, white & black phenyl, floor cleaners, dish wash in Aska, Ganjam, Odisha."
      />

      {/* 1. Hero Slideshow */}
      <HeroSlideshow onOpenQuoteModal={onOpenQuoteModal} />

      {/* 2. Trust Strip */}
      <TrustStrip />

      {/* 3. Introduction Section */}
      <section className="section-pad" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '3.5rem' }}>
            <div>
              <span className="section-tag">
                <Sparkles size={14} />
                ABOUT PRINCE INDUSTRIES
              </span>
              <h2 className="section-title">
                Quality Cleaning Products Built for Everyday Hygiene
              </h2>
              <p className="section-subtitle" style={{ marginBottom: '1.25rem' }}>
                Prince Industries is a premier, trusted manufacturer, wholesaler, and retailer of cleaning and hygiene products situated in <strong>Aska, Ganjam, Odisha</strong>. We specialize in producing an extensive lineup of hygiene essentials tailored to meet the demanding requirements of households, retail networks, commercial enterprises, and institutions.
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '2rem' }}>
                From moisturizing liquid handwashes enriched with delightful natural fragrances to active stain-busting detergent powders, high-emulsion pine white phenyls, heavy-duty black phenyls, sparkling floor cleaners, and grease-cutting dish wash liquids — every product is formulated with precision and commitment to purity.
              </p>

              <div className="form-grid-2" style={{ marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--accent-green)' }} />
                  <span>Direct Factory Manufacturing</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--accent-green)' }} />
                  <span>Wholesale & Bulk Supply Ready</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--accent-green)' }} />
                  <span>Serving Aska, Ganjam & Odisha</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--accent-green)' }} />
                  <span>Competitive Wholesale Pricing</span>
                </div>
              </div>

              <div className="btn-group-responsive">
                <NavLink to="/about" className="btn btn-primary btn-md">
                  <span>Learn More About Us</span>
                  <ArrowRight size={16} />
                </NavLink>
                <NavLink to="/wholesale" className="btn btn-secondary btn-md">
                  <span>Wholesale Opportunities</span>
                </NavLink>
              </div>
            </div>

            <div style={{ position: 'relative' }}>
              <div style={{
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-xl)',
                border: '1px solid var(--border-light)',
                position: 'relative'
              }}>
                <img 
                  src="/assets/images/hero_handwash_lineup_1788951637808.jpg" 
                  alt="Prince Industries Cleaning Products Manufacturing in Aska Odisha"
                  className="responsive-feature-img"
                />
              </div>

              {/* Floating Credibility Badge */}
              <div className="floating-badge">
                <div style={{
                  width: '44px',
                  height: '44px',
                  backgroundColor: 'var(--bg-soft-green)',
                  color: 'var(--accent-green)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <div style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text-primary)' }}>100% Quality Assurance</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Aska, Ganjam, Odisha Manufacturing</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Product Categories Section */}
      <section className="section-pad" style={{ backgroundColor: 'var(--bg-alt)' }}>
        <div className="container">
          <div className="section-header center">
            <span className="section-tag">
              <Layers size={14} />
              EXPLORE OUR PRODUCT RANGE
            </span>
            <h2 className="section-title">
              Complete Manufacturing & Product Portfolio
            </h2>
            <p className="section-subtitle">
              Explore our core product lineup manufactured for household everyday use, retail resale, and bulk commercial cleaning.
            </p>
          </div>

          <div className="grid-3">
            {PRODUCTS.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onOpenQuoteModal={onOpenQuoteModal} 
              />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <NavLink to="/products" className="btn btn-primary btn-lg">
              <span>View Full Product Catalogue</span>
              <ArrowRight size={18} />
            </NavLink>
          </div>
        </div>
      </section>

      {/* 5. Why Choose Prince Industries */}
      <section className="section-pad" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div className="section-header center">
            <span className="section-tag">
              <ShieldCheck size={14} />
              WHY CHOOSE US
            </span>
            <h2 className="section-title">
              The Prince Industries Manufacturing Edge
            </h2>
            <p className="section-subtitle">
              Why business owners, distributors, retailers, and households across Odisha trust us for their cleaning product requirements.
            </p>
          </div>

          <div className="grid-4">
            {whyChooseUs.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="card" style={{ height: '100%' }}>
                  <div style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '10px',
                    backgroundColor: 'var(--bg-soft-green)',
                    color: 'var(--accent-green)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.25rem'
                  }}>
                    <Icon size={24} />
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Featured Handwash Range Section */}
      <section className="section-pad" style={{ backgroundColor: 'var(--bg-alt)', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '3.5rem' }}>
            <div>
              <span className="section-tag">
                <Sparkles size={14} />
                FEATURED HYGIENE RANGE
              </span>
              <h2 className="section-title">
                Handwash Lineup in 5 Refreshing Scents
              </h2>
              <p className="section-subtitle" style={{ marginBottom: '2rem' }}>
                Formulated to deliver mild skin care, rich rich lather, and 99.9% germ protection for everyday hand hygiene. Available in 5 signature fragrance variants.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.2rem' }}>
                {handwashVariants.map((v, idx) => (
                  <div key={idx} style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.85rem 1.25rem',
                    backgroundColor: '#FFFFFF',
                    borderRadius: '12px',
                    border: '1px solid var(--border-light)',
                    boxShadow: 'var(--shadow-sm)'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                      <span style={{ fontSize: '1.4rem' }}>{v.icon}</span>
                      <div>
                        <strong style={{ color: 'var(--text-primary)', fontSize: '1rem' }}>{v.name} Variant</strong>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{v.desc}</div>
                      </div>
                    </div>
                    <span style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      padding: '0.25rem 0.65rem',
                      borderRadius: '9999px',
                      backgroundColor: 'var(--bg-soft-green)',
                      color: v.color
                    }}>
                      {v.badge}
                    </span>
                  </div>
                ))}
              </div>

              <div className="btn-group-responsive">
                <NavLink to="/handwash" className="btn btn-primary btn-md">
                  <span>Explore Handwash Catalogue</span>
                  <ArrowRight size={16} />
                </NavLink>
                <button onClick={() => onOpenQuoteModal('Handwash Range')} className="btn btn-secondary btn-md">
                  <span>Enquire Handwash Bulk Supply</span>
                </button>
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
                  src="/assets/images/hero_handwash_luxury_1788951574303.jpg" 
                  alt="Prince Industries Premium Handwash Range"
                  className="responsive-feature-img"
                  style={{ height: '480px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Applications / Customer Segments */}
      <section className="section-pad" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div className="section-header center">
            <span className="section-tag section-tag-blue">
              <Building2 size={14} />
              WHO WE SERVE
            </span>
            <h2 className="section-title">
              Tailored Cleaning Solutions for Every Environment
            </h2>
            <p className="section-subtitle">
              We cater to diverse sectors spanning residential homes, retail resale channels, hospitality, healthcare, and educational institutions.
            </p>
          </div>

          <div className="grid-3">
            {customerSegments.map((seg, idx) => {
              const Icon = seg.icon;
              return (
                <div key={idx} className="card" style={{ flexDirection: 'row', alignItems: 'flex-start', gap: '1.25rem' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    backgroundColor: 'var(--bg-soft-blue)',
                    color: 'var(--accent-blue)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.35rem', color: 'var(--text-primary)' }}>
                      {seg.title}
                    </h3>
                    <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                      {seg.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. Manufacturing Capability Banner */}
      <section className="section-pad" style={{
        backgroundColor: 'var(--bg-dark)',
        color: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div className="grid-2" style={{ alignItems: 'center', gap: '3rem' }}>
            <div>
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
                STATE-OF-THE-ART PRODUCTION
              </span>
              <h2 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                fontWeight: 800,
                lineHeight: 1.2,
                marginBottom: '1.25rem',
                color: '#FFFFFF'
              }}>
                Quality Controlled Chemical & Liquid Manufacturing Facility
              </h2>
              <p style={{ color: '#94A3B8', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                Located in Aska, Ganjam, Odisha, our manufacturing infrastructure employs precision liquid homogenization, chemical testing, and automated filling lines to maintain high purity and batch consistency.
              </p>

              <div className="btn-group-responsive">
                <NavLink to="/manufacturing" className="btn btn-primary btn-lg">
                  <span>Explore Manufacturing Process</span>
                  <ArrowRight size={18} />
                </NavLink>
                <button onClick={() => onOpenQuoteModal()} className="btn btn-secondary btn-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: '#FFFFFF', borderColor: 'rgba(255, 255, 255, 0.2)' }}>
                  <span>Discuss Bulk Manufacturing</span>
                </button>
              </div>
            </div>

            <div>
              <div style={{
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)'
              }}>
                <img 
                  src="/assets/images/hero_manufacturing_plant_1788951656578.jpg" 
                  alt="Prince Industries Chemical Manufacturing Facility"
                  className="responsive-feature-img"
                  style={{ height: '360px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Wholesale / Bulk Order CTA */}
      <section className="section-pad" style={{ backgroundColor: 'var(--bg-soft-green)', borderTop: '1px solid rgba(5, 150, 105, 0.2)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '840px' }}>
          <span className="section-tag" style={{ backgroundColor: '#FFFFFF' }}>
            <Factory size={14} />
            B2B & WHOLESALE OPPORTUNITY
          </span>
          <h2 className="section-title" style={{ marginBottom: '1.25rem' }}>
            Looking for Reliable Cleaning Products in Bulk?
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto 2rem auto', fontSize: '1.15rem' }}>
            We provide direct manufacturer pricing, customizable bulk drums, and prompt delivery options for distributors, stockists, and commercial buyers across Odisha.
          </p>

          <div className="btn-group-responsive" style={{ justifyContent: 'center' }}>
            <button onClick={() => onOpenQuoteModal()} className="btn btn-primary btn-lg">
              <Send size={18} />
              <span>Request Wholesale Quote</span>
            </button>
            <a href="tel:+919876543210" className="btn btn-secondary btn-lg" style={{ backgroundColor: '#FFFFFF' }}>
              <Phone size={18} />
              <span>Call Direct: Sales Desk</span>
            </a>
          </div>
        </div>
      </section>

      {/* 10. Final CTA */}
      <section className="section-pad" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
          <div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.4rem, 3.5vw, 1.85rem)', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
              Let's Build a Cleaner, Fresher Everyday.
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>
              Contact Prince Industries today for direct retail orders, wholesale inquiries, or custom bulk packaging.
            </p>
          </div>

          <div className="btn-group-responsive">
            <NavLink to="/gallery-contact" className="btn btn-primary btn-lg">
              <span>Contact Prince Industries</span>
              <ArrowRight size={18} />
            </NavLink>
            <a href="tel:+919876543210" className="btn btn-secondary btn-lg">
              <Phone size={18} />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
