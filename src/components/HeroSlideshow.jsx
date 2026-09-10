import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Sparkles, Send, ArrowRight } from 'lucide-react';

export default function HeroSlideshow({ onOpenQuoteModal }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = [
    {
      image: "/assets/images/hero_slide_1.jpg",
      tag: "TRUSTED MANUFACTURER IN ODISHA",
      headline: "Powerful Cleaning. Everyday Freshness.",
      subheading: "Quality cleaning and hygiene products manufactured for homes, businesses, and institutions across Odisha.",
      ctaPrimaryText: "Explore Products",
      ctaPrimaryLink: "/products",
      ctaSecondaryText: "Get a Wholesale Quote",
      ctaSecondaryAction: true
    },
    {
      image: "/assets/images/hero_slide_2.jpg",
      tag: "COMPLETE CLEANING RANGE",
      headline: "Reliable Cleaning Products for Every Need",
      subheading: "High-grade detergent powder, liquid detergent, white & black phenyl, and floor cleaners.",
      ctaPrimaryText: "View Product Range",
      ctaPrimaryLink: "/cleaning-products",
      ctaSecondaryText: "Wholesale Catalogue",
      ctaSecondaryLink: "/wholesale"
    },
    {
      image: "/assets/images/hero_slide_3.jpg",
      tag: "HYGIENE & HAND CARE",
      headline: "Freshness You Can Trust",
      subheading: "Premium handwash range available in Aloe Vera, Strawberry, Rose, Lime, and Fresh variants.",
      ctaPrimaryText: "Explore Handwash Range",
      ctaPrimaryLink: "/handwash",
      ctaSecondaryText: "Enquire Handwash Supply",
      ctaSecondaryAction: true
    },
    {
      image: "/assets/images/hero_slide_4.jpg",
      tag: "MANUFACTURING EXCELLENCE",
      headline: "Manufactured with Care. Supplied with Confidence.",
      subheading: "State-of-the-art liquid formulation and automated bottling facility in Aska, Ganjam, Odisha.",
      ctaPrimaryText: "About Prince Industries",
      ctaPrimaryLink: "/about",
      ctaSecondaryText: "Our Production Process",
      ctaSecondaryLink: "/manufacturing"
    },
    {
      image: "/assets/images/hero_cleaning_suite_1788951618765.jpg",
      tag: "B2B & INSTITUTIONAL SUPPLY",
      headline: "From Retail Shelves to Bulk Supply",
      subheading: "Direct factory pricing for retailers, distributors, hotels, schools, and commercial buyers.",
      ctaPrimaryText: "Contact Us",
      ctaPrimaryLink: "/gallery-contact",
      ctaSecondaryText: "Request B2B Pricing",
      ctaSecondaryAction: true
    }
  ];

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const touchStartX = React.useRef(0);
  const touchEndX = React.useRef(0);

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 45) {
      handleNext();
    } else if (distance < -45) {
      handlePrev();
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  return (
    <section 
      className="hero-slideshow-container"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '480px',
        height: 'clamp(520px, 80vh, 720px)',
        overflow: 'hidden',
        backgroundColor: '#0F172A'
      }}
    >
      {slides.map((slide, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={index}
            style={{
              position: 'absolute',
              inset: 0,
              opacity: isActive ? 1 : 0,
              visibility: isActive ? 'visible' : 'hidden',
              transition: 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
              zIndex: isActive ? 2 : 1
            }}
          >
            {/* Background Image with Subtle Cinematic Zoom */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transform: isActive ? 'scale(1.05)' : 'scale(1.0)',
                transition: 'transform 4.5s ease-out'
              }}
            />

            {/* Dark & Gradient Overlay for Contrast */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(90deg, rgba(15, 23, 42, 0.92) 0%, rgba(15, 23, 42, 0.72) 50%, rgba(15, 23, 42, 0.4) 100%)'
              }}
            />

            {/* Content Container */}
            <div className="container" style={{ height: '100%', display: 'flex', alignItems: 'center', position: 'relative', zIndex: 10 }}>
              <div style={{ maxWidth: '680px', color: '#FFFFFF', paddingTop: '1.5rem', paddingBottom: '2.5rem' }}>
                
                {/* Tag Badge */}
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.35rem 0.85rem',
                  backgroundColor: 'rgba(16, 185, 129, 0.25)',
                  backdropFilter: 'blur(8px)',
                  color: '#34D399',
                  borderRadius: '9999px',
                  border: '1px solid rgba(52, 211, 153, 0.4)',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  letterSpacing: '0.06em',
                  marginBottom: '1rem'
                }}>
                  <Sparkles size={14} />
                  <span>{slide.tag}</span>
                </div>

                {/* Headline */}
                <h1 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(1.9rem, 5vw, 3.5rem)',
                  fontWeight: 800,
                  lineHeight: 1.15,
                  letterSpacing: '-0.03em',
                  marginBottom: '1rem',
                  color: '#FFFFFF'
                }}>
                  {slide.headline}
                </h1>

                {/* Subheading */}
                <p style={{
                  fontSize: 'clamp(0.925rem, 2.2vw, 1.2rem)',
                  color: '#CBD5E1',
                  lineHeight: 1.6,
                  marginBottom: '1.75rem'
                }}>
                  {slide.subheading}
                </p>

                {/* CTAs */}
                <div className="btn-group-responsive">
                  <NavLink to={slide.ctaPrimaryLink} className="btn btn-primary btn-lg">
                    <span>{slide.ctaPrimaryText}</span>
                    <ArrowRight size={18} />
                  </NavLink>

                  {slide.ctaSecondaryAction ? (
                    <button onClick={() => onOpenQuoteModal()} className="btn btn-secondary btn-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)', color: '#FFFFFF', borderColor: 'rgba(255, 255, 255, 0.3)', backdropFilter: 'blur(8px)' }}>
                      <Send size={18} />
                      <span>{slide.ctaSecondaryText}</span>
                    </button>
                  ) : (
                    <NavLink to={slide.ctaSecondaryLink} className="btn btn-secondary btn-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)', color: '#FFFFFF', borderColor: 'rgba(255, 255, 255, 0.3)', backdropFilter: 'blur(8px)' }}>
                      <span>{slide.ctaSecondaryText}</span>
                    </NavLink>
                  )}
                </div>

              </div>
            </div>
          </div>
        );
      })}

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        aria-label="Previous Slide"
        className="hero-nav-arrow"
        style={{ left: '1.5rem' }}
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={handleNext}
        aria-label="Next Slide"
        className="hero-nav-arrow"
        style={{ right: '1.5rem' }}
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide Indicators */}
      <div style={{
        position: 'absolute',
        bottom: '1.25rem',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 20,
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem'
      }}>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            style={{
              width: currentSlide === index ? '28px' : '9px',
              height: '9px',
              borderRadius: '9999px',
              backgroundColor: currentSlide === index ? '#10B981' : 'rgba(255, 255, 255, 0.4)',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          />
        ))}
      </div>
    </section>
  );
}
