import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Phone, MapPin, Menu, X, Sparkles, Send, ChevronDown, Layers, Droplets, ShieldCheck, Shirt, Package, Home, Info, Factory, Store, Building2, Image } from 'lucide-react';

export default function Header({ onOpenQuoteModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setProductsDropdownOpen(false);
  }, [location]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const productSubLinks = [
    { path: '/products', label: 'All Products Catalogue', icon: Layers, desc: 'View full manufacturing range' },
    { path: '/handwash', label: 'Handwash Range', icon: Droplets, desc: 'Aloe Vera, Strawberry, Rose, Lime, Fresh' },
    { path: '/cleaning-products', label: 'Cleaning Products & Phenyl', icon: ShieldCheck, desc: 'White/Black Phenyl, Floor Cleaner, Dish Wash' },
    { path: '/detergent', label: 'Detergent & Laundry Care', icon: Shirt, desc: 'Active Detergent Powder & Liquid Detergent' },
  ];

  const mobileNavItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/about', label: 'About Us', icon: Info },
    { path: '/products', label: 'All Products Catalogue', icon: Layers },
    { path: '/handwash', label: 'Handwash Range', icon: Droplets },
    { path: '/cleaning-products', label: 'Cleaning Products & Phenyl', icon: ShieldCheck },
    { path: '/detergent', label: 'Detergent & Laundry', icon: Shirt },
    { path: '/manufacturing', label: 'Manufacturing Facility', icon: Factory },
    { path: '/wholesale', label: 'Wholesale & Bulk Supply', icon: Store },
    { path: '/industries', label: 'Industries Served', icon: Building2 },
    { path: '/gallery-contact', label: 'Gallery & Contact', icon: Image },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container top-bar-content">
          <div className="top-bar-info">
            <div className="top-bar-item">
              <MapPin size={14} style={{ color: '#34D399' }} />
              <span>Derabish, Kendrapara, Odisha, India</span>
            </div>
            <div className="top-bar-item top-bar-tagline">
              <Sparkles size={14} style={{ color: '#34D399' }} />
              <span>Trusted Cleaning & Hygiene Products Manufacturer</span>
            </div>
          </div>
          <div className="top-bar-info">
            <a href="tel:+919178052340" className="top-bar-item hover:text-white transition-colors" style={{ color: 'inherit' }}>
              <Phone size={14} style={{ color: '#34D399' }} />
              <span>+91 91780 52340</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <nav className="navbar">
            {/* Logo */}
            <NavLink to="/" className="brand-logo">
              <img 
                src="/assets/images/logo.png" 
                alt="Prince Industries Logo" 
                className="brand-logo-img"
              />
              <div className="brand-text">
                <span className="brand-name">PRINCE INDUSTRIES</span>
                <span className="brand-tagline">Quality • Trust • Cleanliness</span>
              </div>
            </NavLink>

            {/* Desktop Navigation */}
            <ul className="nav-links">
              <li>
                <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} end>
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                  About
                </NavLink>
              </li>

              {/* Products Dropdown */}
              <li 
                style={{ position: 'relative' }}
                onMouseEnter={() => setProductsDropdownOpen(true)}
                onMouseLeave={() => setProductsDropdownOpen(false)}
              >
                <NavLink 
                  to="/products" 
                  className={({ isActive }) => `nav-link ${isActive || location.pathname.includes('/handwash') || location.pathname.includes('/cleaning-products') || location.pathname.includes('/detergent') ? 'active' : ''}`}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}
                >
                  <span>Products</span>
                  <ChevronDown size={14} style={{ transform: productsDropdownOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s' }} />
                </NavLink>

                {/* Dropdown Menu */}
                {productsDropdownOpen && (
                  <div className="dropdown-menu">
                    {productSubLinks.map((sub) => {
                      const Icon = sub.icon;
                      return (
                        <NavLink
                          key={sub.path}
                          to={sub.path}
                          className="dropdown-item"
                        >
                          <div className="dropdown-icon">
                            <Icon size={18} />
                          </div>
                          <div>
                            <div className="dropdown-title">{sub.label}</div>
                            <div className="dropdown-desc">{sub.desc}</div>
                          </div>
                        </NavLink>
                      );
                    })}
                  </div>
                )}
              </li>

              <li>
                <NavLink to="/manufacturing" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                  Manufacturing
                </NavLink>
              </li>

              <li>
                <NavLink to="/wholesale" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                  Wholesale
                </NavLink>
              </li>

              <li>
                <NavLink to="/industries" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                  Industries
                </NavLink>
              </li>

              <li>
                <NavLink to="/gallery-contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                  Gallery & Contact
                </NavLink>
              </li>
            </ul>

            {/* Desktop / Responsive Action Buttons */}
            <div className="header-actions">
              <a href="tel:+919178052340" className="btn btn-secondary btn-sm header-call-btn" aria-label="Call sales desk">
                <Phone size={15} />
                <span>Call Now</span>
              </a>

              <button 
                onClick={() => onOpenQuoteModal()} 
                className="btn btn-primary btn-sm header-quote-btn"
                aria-label="Request quote"
              >
                <Send size={15} />
                <span>Get a Quote</span>
              </button>
              
              {/* Mobile Hamburger Toggle */}
              <button 
                className="mobile-menu-btn" 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                style={{ width: '44px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Full Screen Menu Drawer (Outside sticky header for proper full-viewport fixed positioning) */}
      {mobileMenuOpen && (
        <div className="mobile-drawer-overlay" onClick={() => setMobileMenuOpen(false)}>
          <div className="mobile-drawer-container" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-drawer-header">
              <div className="brand-logo">
                <img 
                  src="/assets/images/logo.png" 
                  alt="Prince Industries Logo" 
                  className="brand-logo-img"
                  style={{ height: '42px', width: 'auto' }}
                />
                <div className="brand-text">
                  <span className="brand-name" style={{ fontSize: '1.2rem' }}>PRINCE INDUSTRIES</span>
                  <span className="brand-tagline" style={{ fontSize: '0.62rem' }}>Quality • Trust • Cleanliness</span>
                </div>
              </div>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close navigation drawer"
                style={{
                  background: 'var(--bg-alt)',
                  border: 'none',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-primary)',
                  cursor: 'pointer'
                }}
              >
                <X size={22} />
              </button>
            </div>

            <div className="mobile-drawer-body">
              <div className="mobile-nav-list">
                {mobileNavItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
                      onClick={() => setMobileMenuOpen(false)}
                      end={item.path === '/'}
                    >
                      <Icon size={20} className="mobile-nav-icon" />
                      <span>{item.label}</span>
                    </NavLink>
                  );
                })}
              </div>

              <div className="mobile-drawer-actions">
                <button 
                  onClick={() => { setMobileMenuOpen(false); onOpenQuoteModal(); }} 
                  className="btn btn-primary btn-lg" 
                  style={{ width: '100%', minHeight: '48px', justifyContent: 'center' }}
                >
                  <Send size={18} />
                  <span>Get a Wholesale Quote</span>
                </button>
                <a 
                  href="tel:+919178052340" 
                  className="btn btn-secondary btn-lg" 
                  style={{ width: '100%', justifyContent: 'center', minHeight: '48px' }}
                >
                  <Phone size={18} />
                  <span>Call Direct (+91 91780 52340)</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
