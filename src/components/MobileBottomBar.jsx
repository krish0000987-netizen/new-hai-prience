import React from 'react';
import { Phone, MessageCircle, Send } from 'lucide-react';

export default function MobileBottomBar({ onOpenQuoteModal }) {
  return (
    <div className="mobile-bottom-bar" role="navigation" aria-label="Mobile quick actions">
      <a href="tel:+919178052340" className="mobile-bottom-btn call" aria-label="Call Prince Industries">
        <Phone size={18} />
        <span>CALL NOW</span>
      </a>

      <a 
        href="https://wa.me/919178052340?text=Hello%20Prince%20Industries,%20I%20want%20to%20enquire%20about%20your%20cleaning%20products" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="mobile-bottom-btn whatsapp"
        aria-label="WhatsApp Prince Industries"
      >
        <MessageCircle size={18} />
        <span>WHATSAPP</span>
      </a>

      <button onClick={() => onOpenQuoteModal()} className="mobile-bottom-btn quote" aria-label="Request a quote">
        <Send size={18} />
        <span>GET QUOTE</span>
      </button>
    </div>
  );
}
