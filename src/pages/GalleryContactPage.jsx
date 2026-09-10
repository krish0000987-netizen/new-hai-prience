import React, { useState } from 'react';
import { Sparkles, MapPin, Phone, Mail, Send, CheckCircle2, Image as ImageIcon, X, Maximize2 } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { GALLERY_ITEMS, GALLERY_CATEGORIES } from '../data/galleryData';
import { PRODUCTS } from '../data/productsData';

export default function GalleryContactPage({ onOpenQuoteModal }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxImage, setLightboxImage] = useState(null);

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    businessName: '',
    product: 'Handwash Range (Liquid Handwash)',
    quantity: 'Wholesale / Retail Order',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const filteredGallery = GALLERY_ITEMS.filter((item) => 
    activeCategory === "All" || item.category === activeCategory
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <SEOHead 
        title="Product Gallery & Contact Us - Prince Industries Aska" 
        description="View photo gallery of Prince Industries cleaning products, manufacturing facility, warehouse & contact our sales desk in Aska, Ganjam, Odisha."
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
              <ImageIcon size={14} />
              PRODUCT GALLERY & DIRECT CONTACT
            </span>
            <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '3rem', fontWeight: 800, lineHeight: 1.15, marginBottom: '1rem' }}>
              Product Gallery & Contact Prince Industries
            </h1>
            <p style={{ fontSize: '1.15rem', color: '#94A3B8', lineHeight: 1.7 }}>
              Browse our product photography, manufacturing infrastructure, and connect directly with our team in Aska, Ganjam, Odisha.
            </p>
          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section style={{ padding: '5rem 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div className="section-header center">
            <span className="section-tag">
              <ImageIcon size={14} />
              VISUAL SHOWCASE
            </span>
            <h2 className="section-title">
              Prince Industries Photo Gallery
            </h2>
            <p className="section-subtitle">
              High-resolution photography showcasing our products, scent formulations, and clean production environment.
            </p>

            {/* Category Filter Pills */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
              {GALLERY_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: '0.45rem 1rem',
                    borderRadius: '8px',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    backgroundColor: activeCategory === cat ? 'var(--accent-green)' : 'var(--bg-alt)',
                    color: activeCategory === cat ? '#FFFFFF' : 'var(--text-primary)'
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Masonry / Grid Gallery */}
          <div className="grid-3">
            {filteredGallery.map((item) => (
              <div 
                key={item.id} 
                className="card"
                onClick={() => setLightboxImage(item)}
                style={{ cursor: 'pointer', padding: '0.75rem', overflow: 'hidden' }}
              >
                <div style={{
                  position: 'relative',
                  width: '100%',
                  height: '240px',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  marginBottom: '0.75rem'
                }}>
                  <img 
                    src={item.image} 
                    alt={item.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                    className="product-card-img"
                  />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundColor: 'rgba(15, 23, 42, 0.4)',
                    opacity: 0,
                    transition: 'opacity 0.3s',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFFFFF'
                  }}
                  className="gallery-hover-overlay"
                  >
                    <Maximize2 size={24} />
                  </div>
                </div>
                <div style={{ padding: '0.5rem' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-green)', textTransform: 'uppercase' }}>
                    {item.category}
                  </span>
                  <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '0.1rem' }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div className="modal-overlay" onClick={() => setLightboxImage(null)}>
          <div 
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--radius-lg)',
              maxWidth: '850px',
              width: '100%',
              padding: '1.5rem',
              boxShadow: 'var(--shadow-xl)',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="modal-close" 
              onClick={() => setLightboxImage(null)}
              aria-label="Close Lightbox"
            >
              <X size={20} />
            </button>
            <div style={{ borderRadius: '12px', overflow: 'hidden', maxHeight: '70vh' }}>
              <img 
                src={lightboxImage.image} 
                alt={lightboxImage.title}
                style={{ width: '100%', height: '100%', objectFit: 'contain', maxHeight: '70vh' }}
              />
            </div>
            <div style={{ marginTop: '1rem', textAlign: 'center' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', fontWeight: 800 }}>{lightboxImage.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.25rem' }}>{lightboxImage.caption}</p>
            </div>
          </div>
        </div>
      )}

      {/* CONTACT SECTION */}
      <section style={{ padding: '5rem 0', backgroundColor: 'var(--bg-alt)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="section-header center">
            <span className="section-tag">
              <Mail size={14} />
              GET IN TOUCH
            </span>
            <h2 className="section-title">
              Let's Talk About Your Cleaning Product Requirements
            </h2>
            <p className="section-subtitle">
              Whether you are an individual customer, retail owner, stockist, or commercial buyer, we are ready to assist you.
            </p>
          </div>

          <div className="grid-2" style={{ gap: '3rem' }}>
            {/* Contact Details & Map Card */}
            <div>
              <div className="card" style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 800, marginBottom: '1.25rem' }}>
                  Prince Industries Office & Plant
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      backgroundColor: 'var(--bg-soft-green)',
                      color: 'var(--accent-green)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <MapPin size={20} />
                    </div>
                    <div>
                      <strong style={{ display: 'block', fontSize: '0.95rem', color: 'var(--text-primary)' }}>Manufacturing Address:</strong>
                      <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                        Prince Industries<br />
                        Aska, Ganjam District, Odisha, India - 761111
                      </span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      backgroundColor: 'var(--bg-soft-blue)',
                      color: 'var(--accent-blue)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <Phone size={20} />
                    </div>
                    <div>
                      <strong style={{ display: 'block', fontSize: '0.95rem', color: 'var(--text-primary)' }}>Sales & Wholesale Hotline:</strong>
                      <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Available for Direct Telephone Inquiries</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Card */}
              <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
                <div style={{
                  padding: '1.25rem',
                  backgroundColor: 'var(--bg-dark)',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <MapPin size={18} style={{ color: '#34D399' }} />
                  <span style={{ fontWeight: 700, fontSize: '0.95rem' }}>Aska, Ganjam, Odisha Location</span>
                </div>
                <div style={{ padding: '1.75rem', backgroundColor: '#FFFFFF', textAlign: 'center' }}>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                    Situated in Aska, Ganjam, Odisha, our plant serves regional supply hubs in Berhampur, Bhanjanagar, Phulbani, Bhubaneswar, and surrounding commercial corridors.
                  </p>
                  <button onClick={() => onOpenQuoteModal()} className="btn btn-primary btn-md" style={{ width: '100%', justifyContent: 'center' }}>
                    <Send size={16} />
                    <span>Get a Wholesale Quote</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card" style={{ padding: '2.5rem' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>
                Send Us a Direct Message
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                Have a product query or bulk order request? Fill out the form below.
              </p>

              {submitted ? (
                <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                  <div style={{
                    width: '56px',
                    height: '56px',
                    backgroundColor: '#ECFDF5',
                    color: '#10B981',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1rem auto'
                  }}>
                    <CheckCircle2 size={32} />
                  </div>
                  <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.5rem' }}>
                    Message Sent Successfully!
                  </h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                    Thank you, <strong>{formData.fullName}</strong>. Our team in Aska will respond to your query regarding <strong>{formData.product}</strong> promptly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 700, marginBottom: '0.3rem' }}>Full Name *</label>
                    <input 
                      type="text" 
                      required 
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Your full name"
                      style={{ width: '100%', padding: '0.7rem', border: '1px solid var(--border-light)', borderRadius: '8px', fontSize: '0.9rem', outline: 'none' }}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 700, marginBottom: '0.3rem' }}>Phone Number *</label>
                      <input 
                        type="tel" 
                        required 
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        style={{ width: '100%', padding: '0.7rem', border: '1px solid var(--border-light)', borderRadius: '8px', fontSize: '0.9rem', outline: 'none' }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 700, marginBottom: '0.3rem' }}>Email Address</label>
                      <input 
                        type="email" 
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@email.com"
                        style={{ width: '100%', padding: '0.7rem', border: '1px solid var(--border-light)', borderRadius: '8px', fontSize: '0.9rem', outline: 'none' }}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 700, marginBottom: '0.3rem' }}>Business Name</label>
                      <input 
                        type="text" 
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        placeholder="Business / Retail store name"
                        style={{ width: '100%', padding: '0.7rem', border: '1px solid var(--border-light)', borderRadius: '8px', fontSize: '0.9rem', outline: 'none' }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 700, marginBottom: '0.3rem' }}>Product Interested In</label>
                      <select 
                        value={formData.product}
                        onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                        style={{ width: '100%', padding: '0.7rem', border: '1px solid var(--border-light)', borderRadius: '8px', fontSize: '0.9rem', outline: 'none', backgroundColor: '#FFFFFF' }}
                      >
                        {PRODUCTS.map(p => (
                          <option key={p.id} value={p.name}>{p.name}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 700, marginBottom: '0.3rem' }}>Message / Quantity *</label>
                    <textarea 
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Specify your inquiry, product requirement or bulk quantity..."
                      style={{ width: '100%', padding: '0.7rem', border: '1px solid var(--border-light)', borderRadius: '8px', fontSize: '0.9rem', outline: 'none', fontFamily: 'inherit' }}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary btn-lg" style={{ marginTop: '0.5rem' }}>
                    <Send size={18} />
                    <span>Send Enquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
