import { useEffect } from 'react';

export default function SEOHead({ title, description }) {
  useEffect(() => {
    document.title = title ? `${title} | Prince Industries - Derabish, Kendrapara, Odisha` : 'Prince Industries | Cleaning & Hygiene Products Manufacturer | Derabish, Kendrapara, Odisha';
    
    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', description);
      }
    }
    window.scrollTo(0, 0);
  }, [title, description]);

  return null;
}
