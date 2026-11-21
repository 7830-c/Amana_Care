import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="flex flex-wrap items-center justify-between gap-4 md:gap-6 mb-10 md:mb-14 relative z-30">
      {/* Desktop Left Nav */}
      <nav className="hidden md:flex items-center gap-8" aria-label="Primary left">
        <Link
          to="/about"
          className={`font-body text-body-md transition-colors duration-state-change ${
            isActive('/about')
              ? 'text-white font-semibold underline underline-offset-8 decoration-2'
              : 'text-white/85 hover:text-white'
          }`}
        >
          About
        </Link>
        <Link
          to="/services"
          className={`font-body text-body-md transition-colors duration-state-change ${
            isActive('/services')
              ? 'text-white font-semibold underline underline-offset-8 decoration-2'
              : 'text-white/85 hover:text-white'
          }`}
        >
          Services
        </Link>
        <Link
          to="/plans"
          className={`font-body text-body-md transition-colors duration-state-change ${
            isActive('/plans')
              ? 'text-white font-semibold underline underline-offset-8 decoration-2'
              : 'text-white/85 hover:text-white'
          }`}
        >
          Plans
        </Link>
      </nav>

      {/* Brand Logo */}
      <Link to="/" className="flex items-center gap-2 text-white min-w-0 group">
        <span
          className="material-symbols-outlined shrink-0 text-white group-hover:scale-110 transition-transform"
          style={{ fontSize: '26px' }}
          aria-hidden="true"
        >
          cardiology
        </span>
        <span className="font-headline text-headline-sm text-white tracking-tight">
          Amana Care
        </span>
      </Link>

      {/* Mobile Bar Right (Contact + Hamburger) */}
      <div className="flex md:hidden items-center gap-2">
        <Link
          to="/contact"
          className="inline-flex items-center gap-1.5 rounded-full border border-white/60 text-white px-3.5 py-1.5 font-label text-label-sm hover:bg-white/10"
        >
          <span>Contact</span>
        </Link>
        <button
          type="button"
          aria-label="Toggle navigation menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/40 text-white hover:bg-white/10 active:scale-95 transition-all"
        >
          <span className="material-symbols-outlined" style={{ fontSize: '22px' }} aria-hidden="true">
            {mobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Desktop Right Nav */}
      <nav className="hidden md:flex items-center gap-8" aria-label="Primary right">
        <Link
          to="/sample-collection"
          className={`font-body text-body-md transition-colors duration-state-change ${
            isActive('/sample-collection')
              ? 'text-white font-semibold underline underline-offset-8 decoration-2'
              : 'text-white/85 hover:text-white'
          }`}
        >
          Sample Collection
        </Link>
        <Link
          to="/faq"
          className={`font-body text-body-md transition-colors duration-state-change ${
            isActive('/faq')
              ? 'text-white font-semibold underline underline-offset-8 decoration-2'
              : 'text-white/85 hover:text-white'
          }`}
        >
          FAQ
        </Link>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-full border border-white/60 text-white px-5 py-2.5 font-label text-label-lg hover:bg-white hover:text-deep-plum transition-all duration-state-change shadow-sm"
        >
          <span>Talk to Our Team</span>
          <span className="material-symbols-outlined" style={{ fontSize: '16px' }} aria-hidden="true">
            arrow_forward
          </span>
        </Link>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <nav
          className="w-full md:hidden rounded-lg bg-primary-container p-5 flex flex-col gap-3 shadow-lg border border-white/15 animate-in fade-in slide-in-from-top-2"
          aria-label="Mobile navigation"
        >
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className={`font-body text-body-md py-1.5 ${isActive('/') ? 'text-sunny-yellow font-semibold' : 'text-white'}`}
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setMobileMenuOpen(false)}
            className={`font-body text-body-md py-1.5 ${isActive('/about') ? 'text-sunny-yellow font-semibold' : 'text-white'}`}
          >
            About Amana Care
          </Link>
          <Link
            to="/services"
            onClick={() => setMobileMenuOpen(false)}
            className={`font-body text-body-md py-1.5 ${isActive('/services') ? 'text-sunny-yellow font-semibold' : 'text-white'}`}
          >
            Our Services
          </Link>
          <Link
            to="/plans"
            onClick={() => setMobileMenuOpen(false)}
            className={`font-body text-body-md py-1.5 ${isActive('/plans') ? 'text-sunny-yellow font-semibold' : 'text-white'}`}
          >
            Plans &amp; Pricing
          </Link>
          <Link
            to="/sample-collection"
            onClick={() => setMobileMenuOpen(false)}
            className={`font-body text-body-md py-1.5 ${isActive('/sample-collection') ? 'text-sunny-yellow font-semibold' : 'text-white'}`}
          >
            Free Sample Collection
          </Link>
          <Link
            to="/faq"
            onClick={() => setMobileMenuOpen(false)}
            className={`font-body text-body-md py-1.5 ${isActive('/faq') ? 'text-sunny-yellow font-semibold' : 'text-white'}`}
          >
            FAQ
          </Link>
          <Link
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className={`font-body text-body-md py-1.5 ${isActive('/contact') ? 'text-sunny-yellow font-semibold' : 'text-white'}`}
          >
            Contact &amp; WhatsApp Enquiry
          </Link>
          <div className="border-t border-white/15 pt-3 mt-1 flex justify-between items-center">
            <Link
              to="/admin"
              onClick={() => setMobileMenuOpen(false)}
              className="font-label text-label-sm text-white/70 hover:text-white"
            >
              Team Portal &rarr;
            </Link>
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center gap-1.5 rounded-full bg-sunny-yellow text-deep-plum px-4 py-2 font-label text-label-sm font-semibold"
            >
              <span>Talk to Our Team</span>
              <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>arrow_forward</span>
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
