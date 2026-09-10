import React from 'react';
import { NavLink } from 'react-router-dom';
import { Send, Eye, Package, ShieldCheck } from 'lucide-react';

export default function ProductCard({ product, onOpenQuoteModal }) {
  return (
    <div className="card" style={{ height: '100%' }}>
      {/* Image Banner */}
      <div style={{
        position: 'relative',
        width: '100%',
        height: '220px',
        borderRadius: '10px',
        overflow: 'hidden',
        marginBottom: '1.25rem',
        backgroundColor: '#F8FAFC'
      }}>
        <img 
          src={product.image || product.backupImage} 
          alt={product.name}
          onError={(e) => {
            if (product.backupImage && e.target.src !== product.backupImage) {
              e.target.src = product.backupImage;
            }
          }}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.5s ease'
          }}
          className="product-card-img"
        />
        {product.isManufacturerProduct && (
          <span style={{
            position: 'absolute',
            top: '0.75rem',
            left: '0.75rem',
            backgroundColor: 'rgba(5, 150, 105, 0.9)',
            backdropFilter: 'blur(4px)',
            color: '#FFFFFF',
            fontSize: '0.75rem',
            fontWeight: 700,
            padding: '0.3rem 0.75rem',
            borderRadius: '9999px',
            display: 'flex',
            alignItems: 'center',
            gap: '0.3rem'
          }}>
            <ShieldCheck size={12} />
            Direct Manufacturer
          </span>
        )}
        <span style={{
          position: 'absolute',
          bottom: '0.75rem',
          right: '0.75rem',
          backgroundColor: 'rgba(15, 23, 42, 0.8)',
          color: '#FFFFFF',
          fontSize: '0.75rem',
          fontWeight: 600,
          padding: '0.25rem 0.6rem',
          borderRadius: '6px'
        }}>
          {product.category}
        </span>
      </div>

      {/* Content */}
      <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <h3 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '1.25rem',
          fontWeight: 700,
          color: 'var(--text-primary)',
          marginBottom: '0.5rem',
          lineHeight: '1.3'
        }}>
          {product.name}
        </h3>

        <p style={{
          fontSize: '0.9rem',
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
            <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
              Available Scents:
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
              {product.variants.map((v, idx) => (
                <span key={idx} style={{
                  fontSize: '0.75rem',
                  padding: '0.2rem 0.55rem',
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
            fontSize: '0.8rem',
            color: 'var(--text-muted)',
            marginBottom: '1.25rem',
            paddingTop: '0.6rem',
            borderTop: '1px dashed var(--border-light)'
          }}>
            <Package size={14} style={{ color: 'var(--accent-blue)' }} />
            <span>Packs: {product.packaging.slice(0, 3).join(', ')}...</span>
          </div>
        )}

        {/* Buttons */}
        <div className="product-card-actions">
          <NavLink to={`/products`} className="btn btn-secondary btn-sm" style={{ justifyContent: 'center' }}>
            <Eye size={14} />
            <span>View Details</span>
          </NavLink>
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
  );
}
