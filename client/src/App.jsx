import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Plans from './pages/Plans';
import SampleCollection from './pages/SampleCollection';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/sample-collection" element={<SampleCollection />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      {!isAdmin && <WhatsAppFloatingButton />}
    </>
  );
}
