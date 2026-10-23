import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { RoyalCarpetIntro } from './components/RoyalCarpetIntro';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { MenuPage } from './pages/MenuPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';

/**
 * Root Application component routing all 6 pages of Royal Caterers India.
 */
export const App: React.FC = () => {
  return (
    <BrowserRouter
      basename={import.meta.env.BASE_URL}
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <RoyalCarpetIntro />
      <ScrollToTop />
      <Navbar />
      <main id="main-content" tabIndex={-1} className="w-full pt-20 bg-[#FAF8F2] text-black min-h-[calc(100vh-80px)] focus:outline-none">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/about" element={<Navigate to="/about-us" replace />} />
          <Route path="/catering-services" element={<ServicesPage />} />
          <Route path="/services" element={<Navigate to="/catering-services" replace />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact-booking" element={<ContactPage />} />
          <Route path="/contact" element={<Navigate to="/contact-booking" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
