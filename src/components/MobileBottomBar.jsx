import React from 'react';
import { Phone, MessageCircle, Send } from 'lucide-react';

export default function MobileBottomBar({ onOpenQuoteModal }) {
  return (
    <div className="mobile-bottom-bar">
      <a href="tel:+919876543210" className="mobile-bottom-btn call">
        <Phone size={18} />
        <span>CALL NOW</span>
      </a>

      <a href="https://wa.me/919876543210?text=Hello%20Prince%20Industries,%20I%20want%20to%20enquire%20about%20cleaning%20products" target="_blank" rel="noopener noreferrer" className="mobile-bottom-btn whatsapp">
        <MessageCircle size={18} />
        <span>WHATSAPP</span>
      </a>

      <button onClick={() => onOpenQuoteModal()} className="mobile-bottom-btn quote">
        <Send size={18} />
        <span>GET QUOTE</span>
      </button>
    </div>
  );
}
