import React from 'react';
import { NavLink } from 'react-router-dom';
import { MapPin, Phone, Mail, Sparkles, ShieldCheck } from 'lucide-react';

export default function Footer({ onOpenQuoteModal }) {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          {/* Brand Info */}
          <div className="footer-brand">
            <div className="brand-logo">
              <div className="brand-icon">
                <span>P</span>
              </div>
              <div className="brand-text">
                <span className="brand-name">PRINCE INDUSTRIES</span>
                <span className="brand-tagline">Quality Cleaning. Everyday Hygiene.</span>
              </div>
            </div>
            <p style={{ fontSize: '0.925rem', lineHeight: '1.7', color: '#94A3B8' }}>
              Prince Industries is a trusted manufacturer, wholesaler, and retailer of quality cleaning and hygiene products in Aska, Ganjam, Odisha. Manufacturing high-performance cleaning solutions for homes, businesses, and institutions.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#10B981', fontWeight: 600, fontSize: '0.875rem' }}>
              <ShieldCheck size={18} />
              <span>Certified Manufacturing Quality Standard</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><NavLink to="/" className="footer-link">Home</NavLink></li>
              <li><NavLink to="/about" className="footer-link">About Prince Industries</NavLink></li>
              <li><NavLink to="/products" className="footer-link">Product Catalogue</NavLink></li>
              <li><NavLink to="/handwash" className="footer-link">Handwash Range</NavLink></li>
              <li><NavLink to="/cleaning-products" className="footer-link">Cleaning & Phenyl</NavLink></li>
              <li><NavLink to="/detergent" className="footer-link">Detergent & Laundry</NavLink></li>
              <li><NavLink to="/manufacturing" className="footer-link">Manufacturing Facility</NavLink></li>
              <li><NavLink to="/wholesale" className="footer-link">Wholesale & Bulk Supply</NavLink></li>
              <li><NavLink to="/industries" className="footer-link">Industries Served</NavLink></li>
              <li><NavLink to="/gallery-contact" className="footer-link">Gallery & Contact</NavLink></li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="footer-title">Products</h4>
            <ul className="footer-links">
              <li><NavLink to="/handwash" className="footer-link">Handwash Manufacturer</NavLink></li>
              <li><NavLink to="/detergent" className="footer-link">Detergent Powder</NavLink></li>
              <li><NavLink to="/detergent" className="footer-link">Liquid Detergent</NavLink></li>
              <li><NavLink to="/cleaning-products" className="footer-link">White Phenyl</NavLink></li>
              <li><NavLink to="/cleaning-products" className="footer-link">Black Phenyl</NavLink></li>
              <li><NavLink to="/cleaning-products" className="footer-link">Floor Cleaner</NavLink></li>
              <li><NavLink to="/cleaning-products" className="footer-link">Floor Acid</NavLink></li>
              <li><NavLink to="/cleaning-products" className="footer-link">Dish Wash</NavLink></li>
              <li><NavLink to="/products" className="footer-link">Car Freshener</NavLink></li>
            </ul>
          </div>

          {/* Contact Location */}
          <div>
            <h4 className="footer-title">Manufacturing Location</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.925rem' }}>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <MapPin size={20} style={{ color: '#10B981', flexShrink: 0, marginTop: '2px' }} />
                <span>
                  <strong>Prince Industries</strong><br />
                  Aska, Ganjam District,<br />
                  Odisha, India - 761111
                </span>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <Phone size={18} style={{ color: '#38BDF8', flexShrink: 0 }} />
                <span>Wholesale Direct Enquiry Available</span>
              </div>
              <div style={{ paddingTop: '0.5rem' }}>
                <button 
                  onClick={() => onOpenQuoteModal()} 
                  className="btn btn-primary btn-sm"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <Sparkles size={15} />
                  <span>Request B2B Quote</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Prince Industries. All Rights Reserved. Aska, Ganjam, Odisha.</p>
          <div style={{ display: 'flex', gap: '1.5rem', color: '#64748B' }}>
            <span>Manufacturer</span>
            <span>•</span>
            <span>Wholesaler</span>
            <span>•</span>
            <span>Retailer</span>
            <span>•</span>
            <span>Bulk Supplier</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
