import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Send, Eye, Package, ShieldCheck, ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';

export default function ProductCard({ product, onOpenQuoteModal }) {
  const allImages = product.galleryImages && product.galleryImages.length > 0
    ? product.galleryImages
    : [product.image];
  const [activeIdx, setActiveIdx] = useState(0);
  const [showLightbox, setShowLightbox] = useState(false);

  const currentImg = allImages[activeIdx];
  // Isolated studio bottle shots on white background
  const isWhiteBottle = 
    currentImg.includes('toilet_cleaner') ||
    currentImg.includes('floor_acid') ||
    currentImg.includes('white_phenyl_neem') ||
    currentImg.includes('neem_bottle');

  const prev = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setActiveIdx(i => (i - 1 + allImages.length) % allImages.length);
  };
  const next = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setActiveIdx(i => (i + 1) % allImages.length);
  };

  return (
    <>
      <div className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        {/* Image Banner */}
        <div 
          onClick={() => setShowLightbox(true)}
          style={{
            position: 'relative',
            width: '100%',
            height: '240px',
            borderRadius: '10px',
            overflow: 'hidden',
            marginBottom: '1.25rem',
            backgroundColor: isWhiteBottle ? '#FFFFFF' : '#0F172A',
            flexShrink: 0,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          title="Click to view full image"
        >
          <img
            src={currentImg}
            alt={product.name}
            style={{
              width: '100%',
              height: '100%',
              objectFit: isWhiteBottle ? 'contain' : 'cover',
              objectPosition: 'center',
              padding: isWhiteBottle ? '0.6rem' : '0',
              transition: 'transform 0.3s ease, opacity 0.3s ease',
            }}
            className="product-card-img"
          />

          {/* Zoom In Badge on Hover */}
          <div style={{
            position: 'absolute',
            top: '0.75rem',
            right: '0.75rem',
            backgroundColor: 'rgba(15, 23, 42, 0.65)',
            color: '#FFFFFF',
            borderRadius: '50%',
            width: '28px',
            height: '28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backdropFilter: 'blur(4px)',
            opacity: 0.85,
            transition: 'all 0.2s ease',
            zIndex: 2
          }}>
            <ZoomIn size={14} />
          </div>

          {/* Prev/Next arrows if multiple images */}
          {allImages.length > 1 && (
            <>
              <button
                onClick={prev}
                style={{
                  position: 'absolute', left: '0.4rem', top: '50%', transform: 'translateY(-50%)',
                  backgroundColor: 'rgba(15,23,42,0.65)', border: 'none', borderRadius: '50%',
                  width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#fff', cursor: 'pointer', zIndex: 3, backdropFilter: 'blur(4px)'
                }}
                title="Previous photo"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={next}
                style={{
                  position: 'absolute', right: '0.4rem', top: '50%', transform: 'translateY(-50%)',
                  backgroundColor: 'rgba(15,23,42,0.65)', border: 'none', borderRadius: '50%',
                  width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#fff', cursor: 'pointer', zIndex: 3, backdropFilter: 'blur(4px)'
                }}
                title="Next photo"
              >
                <ChevronRight size={16} />
              </button>
              {/* Dot indicators */}
              <div style={{
                position: 'absolute', bottom: '0.5rem', left: '50%', transform: 'translateX(-50%)',
                display: 'flex', gap: '0.35rem', zIndex: 3,
                backgroundColor: 'rgba(15, 23, 42, 0.4)', padding: '0.2rem 0.5rem', borderRadius: '10px'
              }}>
                {allImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={(e) => { e.stopPropagation(); e.preventDefault(); setActiveIdx(i); }}
                    style={{
                      width: i === activeIdx ? '16px' : '6px',
                      height: '6px',
                      borderRadius: '3px',
                      backgroundColor: i === activeIdx ? '#10B981' : 'rgba(255,255,255,0.7)',
                      border: 'none',
                      cursor: 'pointer',
                      padding: 0,
                      transition: 'all 0.25s ease'
                    }}
                  />
                ))}
              </div>
            </>
          )}

          {product.isManufacturerProduct && (
            <span style={{
              position: 'absolute',
              top: '0.75rem',
              left: '0.75rem',
              backgroundColor: 'rgba(5, 150, 105, 0.95)',
              backdropFilter: 'blur(4px)',
              color: '#FFFFFF',
              fontSize: '0.72rem',
              fontWeight: 700,
              padding: '0.28rem 0.7rem',
              borderRadius: '9999px',
              display: 'flex',
              alignItems: 'center',
              gap: '0.3rem',
              zIndex: 2,
              boxShadow: '0 2px 6px rgba(0,0,0,0.2)'
            }}>
              <ShieldCheck size={12} />
              Direct Manufacturer
            </span>
          )}
          <span style={{
            position: 'absolute',
            bottom: allImages.length > 1 ? '1.8rem' : '0.75rem',
            right: '0.75rem',
            backgroundColor: 'rgba(15, 23, 42, 0.82)',
            backdropFilter: 'blur(4px)',
            color: '#FFFFFF',
            fontSize: '0.72rem',
            fontWeight: 600,
            padding: '0.2rem 0.55rem',
            borderRadius: '6px',
            zIndex: 2
          }}>
            {product.category}
          </span>
        </div>

        {/* Content */}
        <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
          <h3 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1.2rem',
            fontWeight: 700,
            color: 'var(--text-primary)',
            marginBottom: '0.5rem',
            lineHeight: '1.3'
          }}>
            {product.name}
          </h3>

          <p style={{
            fontSize: '0.875rem',
            color: 'var(--text-secondary)',
            marginBottom: '1rem',
            lineHeight: '1.6',
            flexGrow: 1
          }}>
            {product.shortDesc}
          </p>

          {/* Fragrance variants if present */}
          {product.variants && (
            <div style={{ marginBottom: '1.25rem' }}>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                Available Scents / Variants:
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem' }}>
                {product.variants.map((v, idx) => (
                  <span key={idx} style={{
                    fontSize: '0.72rem',
                    padding: '0.2rem 0.5rem',
                    backgroundColor: 'var(--bg-soft-green)',
                    color: 'var(--accent-green)',
                    borderRadius: '6px',
                    fontWeight: 600
                  }}>
                    {v.icon} {v.name}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Packaging details */}
          {product.packaging && (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.78rem',
              color: 'var(--text-muted)',
              marginBottom: '1.25rem',
              paddingTop: '0.6rem',
              borderTop: '1px dashed var(--border-light)'
            }}>
              <Package size={13} style={{ color: 'var(--accent-blue)', flexShrink: 0 }} />
              <span>Packs: {product.packaging.slice(0, 3).join(', ')}{product.packaging.length > 3 ? '...' : ''}</span>
            </div>
          )}

          {/* Buttons */}
          <div className="product-card-actions">
            <button 
              onClick={() => setShowLightbox(true)}
              className="btn btn-secondary btn-sm" 
              style={{ justifyContent: 'center' }}
            >
              <Eye size={14} />
              <span>View Photo</span>
            </button>
            <button
              onClick={() => onOpenQuoteModal(product.name)}
              className="btn btn-primary btn-sm"
              style={{ justifyContent: 'center' }}
            >
              <Send size={14} />
              <span>Enquire Now</span>
            </button>
          </div>
        </div>
      </div>

      {/* High-Resolution Photo Lightbox Modal */}
      {showLightbox && (
        <div 
          onClick={() => setShowLightbox(false)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(15, 23, 42, 0.92)',
            backdropFilter: 'blur(8px)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
            animation: 'fadeIn 0.2s ease-out'
          }}
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              maxWidth: '850px',
              width: '100%',
              backgroundColor: '#FFFFFF',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
            }}
          >
            {/* Modal Header */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '1.25rem 1.5rem',
              borderBottom: '1px solid var(--border-light)',
              backgroundColor: '#F8FAFC'
            }}>
              <div>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', fontWeight: 800, margin: 0, color: 'var(--text-primary)' }}>
                  {product.name}
                </h4>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  Prince Industries Authentic Product Photo {allImages.length > 1 ? `(${activeIdx + 1} of ${allImages.length})` : ''}
                </div>
              </div>
              <button
                onClick={() => setShowLightbox(false)}
                style={{
                  backgroundColor: '#E2E8F0',
                  border: 'none',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: 'var(--text-primary)'
                }}
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Image Display */}
            <div style={{
              position: 'relative',
              width: '100%',
              height: 'clamp(240px, 48vh, 460px)',
              backgroundColor: isWhiteBottle ? '#FFFFFF' : '#0B1329',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0.75rem'
            }}>
              <img
                src={currentImg}
                alt={product.name}
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  objectFit: 'contain'
                }}
              />

              {allImages.length > 1 && (
                <>
                  <button
                    onClick={prev}
                    style={{
                      position: 'absolute', left: '0.5rem', top: '50%', transform: 'translateY(-50%)',
                      backgroundColor: 'rgba(15,23,42,0.75)', border: 'none', borderRadius: '50%',
                      width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: '#fff', cursor: 'pointer', zIndex: 10
                    }}
                  >
                    <ChevronLeft size={22} />
                  </button>
                  <button
                    onClick={next}
                    style={{
                      position: 'absolute', right: '0.5rem', top: '50%', transform: 'translateY(-50%)',
                      backgroundColor: 'rgba(15,23,42,0.75)', border: 'none', borderRadius: '50%',
                      width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: '#fff', cursor: 'pointer', zIndex: 10
                    }}
                  >
                    <ChevronRight size={22} />
                  </button>
                </>
              )}
            </div>

            {/* Modal Footer */}
            <div style={{
              padding: '0.85rem 1.25rem',
              backgroundColor: '#F8FAFC',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '0.75rem',
              flexWrap: 'wrap',
              borderTop: '1px solid var(--border-light)'
            }}>
              <div style={{ fontSize: '0.825rem', color: 'var(--text-secondary)' }}>
                Direct Manufacturer: <strong>Prince Industries, Kendrapara, Odisha</strong>
              </div>
              <button
                onClick={() => {
                  setShowLightbox(false);
                  onOpenQuoteModal(product.name);
                }}
                className="btn btn-primary btn-sm"
              >
                <Send size={14} />
                <span>Enquire Bulk Supply</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
