import React, { useState } from 'react';
import { Sparkles, Store, Factory, Building2, Truck, Phone, MessageCircle, Send, CheckCircle2, User, Mail, MapPin, Package } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { PRODUCTS } from '../data/productsData';

export default function WholesalePage({ onOpenQuoteModal }) {
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    phone: '',
    email: '',
    city: 'Derabish, Kendrapara',
    product: 'Full Wholesale Range',
    quantity: 'Bulk Cartons / Drums',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const targetAudience = [
    { title: "Retailers & Kirana Stores", desc: "High-margin shelf items like 250ml handwashes, detergent powders, and 500ml floor cleaners." },
    { title: "Wholesalers & Dealers", desc: "Bulk carton pricing and continuous stock replenishment for regional resale networks." },
    { title: "Distributors", desc: "Exclusive district distribution rights and structured pricing tiers for Odisha markets." },
    { title: "Hotels & Hospitality", desc: "Aromatic liquid handwash refills, dish wash liquids, and fragrant floor cleaners." },
    { title: "Hospitals & Clinics", desc: "Disinfectant white and black phenyls engineered for high sanitization standards." },
    { title: "Educational Institutions", desc: "Safe floor surface cleaners and bulk hygiene packs for schools and colleges." },
    { title: "Commercial Offices", desc: "5 Litre canister refills for office washrooms and daily facility maintenance." },
    { title: "Facility Cleaning Services", desc: "Heavy-volume supplies for professional cleaning contractors." }
  ];

  return (
    <div>
      <SEOHead 
        title="Wholesale & Bulk Cleaning Product Supplier - Odisha" 
        description="Direct manufacturer wholesale supply of handwash, detergent powder, phenyl, floor cleaner in Derabish, Kendrapara, Odisha. Request B2B pricing quote."
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
              <Store size={14} />
              DIRECT B2B & WHOLESALE SUPPLY
            </span>
            <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '3rem', fontWeight: 800, lineHeight: 1.15, marginBottom: '1rem' }}>
              Reliable Cleaning Product Supply for Businesses
            </h1>
            <p style={{ fontSize: '1.15rem', color: '#94A3B8', lineHeight: 1.7 }}>
              Partner directly with Prince Industries in Derabish, Kendrapara, Odisha for direct manufacturer rates, bulk volume supply, and prompt delivery schedules.
            </p>
          </div>
        </div>
      </section>

      {/* Target Audiences */}
      <section style={{ padding: '5rem 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div className="section-header center">
            <span className="section-tag">
              <Building2 size={14} />
              WHOLESALE CLIENTELE
            </span>
            <h2 className="section-title">
              Who We Supply Wholesale & Bulk To
            </h2>
            <p className="section-subtitle">
              We cater to business buyers with tailored packaging, competitive bulk margins, and customized logistic arrangements.
            </p>
          </div>

          <div className="grid-4">
            {targetAudience.map((item, idx) => (
              <div key={idx} className="card">
                <div style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '8px',
                  backgroundColor: 'var(--bg-soft-green)',
                  color: 'var(--accent-green)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem',
                  fontWeight: 700
                }}>
                  <CheckCircle2 size={20} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.4rem', color: 'var(--text-primary)' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Embedded Wholesale Form Section */}
      <section style={{ padding: '5rem 0', backgroundColor: 'var(--bg-alt)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="card" style={{ padding: '3rem' }}>
            <div className="section-header center" style={{ marginBottom: '2rem' }}>
              <span className="section-tag">
                <Send size={14} />
                B2B ENQUIRY FORM
              </span>
              <h2 className="section-title">
                Request a Wholesale Price List & Quote
              </h2>
              <p className="section-subtitle">
                Fill out your requirement below to receive direct factory pricing and catalog details from our Kendrapara sales team.
              </p>
            </div>

            {submitted ? (
              <div style={{ textAlign: 'center', padding: '2.5rem 1rem' }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  backgroundColor: '#ECFDF5',
                  color: '#10B981',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem auto'
                }}>
                  <CheckCircle2 size={36} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.75rem' }}>
                  Wholesale Enquiry Submitted!
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                  Thank you, <strong>{formData.fullName}</strong>. Our wholesale manager will review your inquiry for <strong>{formData.product}</strong> and contact you via phone ({formData.phone}).
                </p>
                <button onClick={() => setSubmitted(false)} className="btn btn-secondary btn-md">
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div className="form-grid-2">
                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Enter your full name"
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        border: '1px solid var(--border-light)',
                        borderRadius: '8px',
                        fontSize: '0.925rem',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                      Business / Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      placeholder="e.g. Kendrapara Traders"
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        border: '1px solid var(--border-light)',
                        borderRadius: '8px',
                        fontSize: '0.925rem',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>

                <div className="form-grid-2">
                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +91 91780 52340"
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        border: '1px solid var(--border-light)',
                        borderRadius: '8px',
                        fontSize: '0.925rem',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@business.com"
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        border: '1px solid var(--border-light)',
                        borderRadius: '8px',
                        fontSize: '0.925rem',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>

                <div className="form-grid-2">
                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                      Product Required
                    </label>
                    <select
                      value={formData.product}
                      onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        border: '1px solid var(--border-light)',
                        borderRadius: '8px',
                        fontSize: '0.925rem',
                        outline: 'none',
                        backgroundColor: '#FFFFFF'
                      }}
                    >
                      <option value="Full Wholesale Range">Full Wholesale Product Portfolio</option>
                      {PRODUCTS.map(p => (
                        <option key={p.id} value={p.name}>{p.name}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                      City / Location
                    </label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="Kendrapara, Cuttack, Jagatsinghpur..."
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        border: '1px solid var(--border-light)',
                        borderRadius: '8px',
                        fontSize: '0.925rem',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                    Requirement Details / Order Volumes
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Specify target carton numbers, drum requirements, payment terms, or distribution area..."
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid var(--border-light)',
                      borderRadius: '8px',
                      fontSize: '0.925rem',
                      outline: 'none',
                      fontFamily: 'inherit'
                    }}
                  />
                </div>

                <div className="btn-group-responsive" style={{ marginTop: '0.5rem' }}>
                  <button type="submit" className="btn btn-primary btn-lg" style={{ flexGrow: 1 }}>
                    <Send size={18} />
                    <span>Request Wholesale Quote</span>
                  </button>
                  <a href="tel:+919178052340" className="btn btn-secondary btn-lg">
                    <Phone size={18} />
                    <span>Call Sales Desk</span>
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
