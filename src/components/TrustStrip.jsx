import React from 'react';
import { Factory, Store, ShoppingBag, Truck, ShieldCheck, MapPin } from 'lucide-react';

export default function TrustStrip() {
  const trustItems = [
    { icon: Factory, label: "Direct Manufacturer", desc: "Formulated & Produced in Aska" },
    { icon: Store, label: "Wholesale Supplier", desc: "Competitive B2B Factory Pricing" },
    { icon: ShoppingBag, label: "Retail Availability", desc: "Premium Consumer Packaging" },
    { icon: Truck, label: "Bulk Order Logistics", desc: "Reliable Supply Across Odisha" },
    { icon: ShieldCheck, label: "Hygiene Standard", desc: "Quality Controlled Formulations" }
  ];

  return (
    <section style={{
      backgroundColor: 'var(--bg-alt)',
      borderTop: '1px solid var(--border-light)',
      borderBottom: '1px solid var(--border-light)',
      padding: '2rem 0'
    }}>
      <div className="container">
        <div className="trust-strip-grid">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '0.75rem 1rem',
                backgroundColor: '#FFFFFF',
                borderRadius: '12px',
                border: '1px solid var(--border-light)',
                boxShadow: 'var(--shadow-sm)'
              }}>
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  backgroundColor: 'var(--bg-soft-green)',
                  color: 'var(--accent-green)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Icon size={22} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.2 }}>
                    {item.label}
                  </h4>
                  <p style={{ fontSize: '0.775rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
