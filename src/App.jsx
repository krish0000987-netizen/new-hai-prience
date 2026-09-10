import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';
import MobileBottomBar from './components/MobileBottomBar';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import HandwashPage from './pages/HandwashPage';
import CleaningProductsPage from './pages/CleaningProductsPage';
import DetergentPage from './pages/DetergentPage';
import ManufacturingPage from './pages/ManufacturingPage';
import WholesalePage from './pages/WholesalePage';
import IndustriesPage from './pages/IndustriesPage';
import GalleryContactPage from './pages/GalleryContactPage';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');

  const handleOpenQuoteModal = (productName = '') => {
    setSelectedProduct(productName);
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setIsQuoteModalOpen(false);
    setSelectedProduct('');
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header onOpenQuoteModal={handleOpenQuoteModal} />

      <main style={{ flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<HomePage onOpenQuoteModal={handleOpenQuoteModal} />} />
          <Route path="/about" element={<AboutPage onOpenQuoteModal={handleOpenQuoteModal} />} />
          <Route path="/products" element={<ProductsPage onOpenQuoteModal={handleOpenQuoteModal} />} />
          <Route path="/handwash" element={<HandwashPage onOpenQuoteModal={handleOpenQuoteModal} />} />
          <Route path="/cleaning-products" element={<CleaningProductsPage onOpenQuoteModal={handleOpenQuoteModal} />} />
          <Route path="/detergent" element={<DetergentPage onOpenQuoteModal={handleOpenQuoteModal} />} />
          <Route path="/manufacturing" element={<ManufacturingPage onOpenQuoteModal={handleOpenQuoteModal} />} />
          <Route path="/wholesale" element={<WholesalePage onOpenQuoteModal={handleOpenQuoteModal} />} />
          <Route path="/industries" element={<IndustriesPage onOpenQuoteModal={handleOpenQuoteModal} />} />
          <Route path="/gallery-contact" element={<GalleryContactPage onOpenQuoteModal={handleOpenQuoteModal} />} />
        </Routes>
      </main>

      <Footer onOpenQuoteModal={handleOpenQuoteModal} />

      <MobileBottomBar onOpenQuoteModal={handleOpenQuoteModal} />

      <QuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={handleCloseQuoteModal} 
        selectedProductName={selectedProduct} 
      />
    </div>
  );
}
