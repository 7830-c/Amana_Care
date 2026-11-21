import React from 'react';
import { Link } from 'react-router-dom';
import TornDivider from './TornDivider';

export default function Footer({ hideCtaBanner = false }) {
  return (
    <footer className="bg-deep-plum text-white mt-12 relative">
      {/* Torn Top Divider */}
      <TornDivider direction="up" fillColor="fill-cream" />

      <div className="max-w-6xl mx-auto px-gutter-lg pt-12 pb-16 flex flex-col gap-12">
        {/* Pre-footer Call to Action (When not hidden) */}
        {!hideCtaBanner && (
          <div className="rounded-2xl bg-gradient-to-br from-primary-container/80 to-deep-plum border border-white/10 p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 text-white shadow-xl">
            <div className="max-w-xl flex flex-col gap-3">
              <span className="font-label text-label-sm text-sunny-yellow uppercase tracking-wider">Amana Care Aligarh</span>
              <h2 className="font-headline text-headline-lg-mobile md:text-headline-lg text-white text-balance">
                A little closer, even when you are far away.
              </h2>
              <p className="font-body text-body-lg text-white/85 text-pretty">
                Your parents have spent years being there for you. Now, when distance makes it difficult for you to be there every day, let us help bridge that gap.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-sunny-yellow text-deep-plum hover:bg-soft-lime px-7 py-4 font-label text-label-lg font-semibold transition-all shadow-md active:scale-95"
              >
                <span>Talk to Our Team</span>
                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>arrow_forward</span>
              </Link>
              <a
                href="https://wa.me/919999999999?text=Hello%20Amana%20Care%2C%20I%20would%20like%20to%20learn%20more%20about%20your%20elder%20support%20services%20in%20Aligarh."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/50 text-white hover:bg-white/10 px-6 py-4 font-label text-label-lg transition-all"
              >
                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>chat</span>
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        )}

        {/* Links Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-white/10 pt-10">
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-white" style={{ fontSize: '26px' }}>cardiology</span>
              <span className="font-headline text-headline-sm text-white">Amana Care</span>
            </div>
            <p className="font-body text-body-md text-white/75 max-w-sm">
              Non-medical elder support in Aligarh — a dependable, physical local presence for families whose children live abroad or in other Indian cities.
            </p>
            <p className="font-label text-label-sm text-sunny-yellow italic">
              "Your family's care, on your trust."
            </p>
          </div>

          {/* Explore Links */}
          <div className="md:col-span-2 flex flex-col gap-3">
            <h4 className="font-label text-label-sm uppercase tracking-wider text-white/50 font-bold">Explore</h4>
            <Link to="/" className="font-body text-body-md text-white/80 hover:text-white transition-colors">Home</Link>
            <Link to="/about" className="font-body text-body-md text-white/80 hover:text-white transition-colors">About</Link>
            <Link to="/services" className="font-body text-body-md text-white/80 hover:text-white transition-colors">Services</Link>
            <Link to="/plans" className="font-body text-body-md text-white/80 hover:text-white transition-colors">Plans &amp; Pricing</Link>
            <Link to="/sample-collection" className="font-body text-body-md text-white/80 hover:text-white transition-colors">Sample Collection</Link>
            <Link to="/faq" className="font-body text-body-md text-white/80 hover:text-white transition-colors">FAQ</Link>
          </div>

          {/* Services Links */}
          <div className="md:col-span-2 flex flex-col gap-3">
            <h4 className="font-label text-label-sm uppercase tracking-wider text-white/50 font-bold">Services</h4>
            <span className="font-body text-body-sm text-white/80">Home Visits</span>
            <span className="font-body text-body-sm text-white/80">Wellbeing Checks</span>
            <span className="font-body text-body-sm text-white/80">Medicine Reminders</span>
            <span className="font-body text-body-sm text-white/80">Emergency Assistance</span>
            <span className="font-body text-body-sm text-white/80">Doctor Coordination</span>
            <span className="font-body text-body-sm text-white/80">Free Lab Coordination</span>
          </div>

          {/* Contact & Service Area */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <h4 className="font-label text-label-sm uppercase tracking-wider text-white/50 font-bold">Service Area</h4>
            <p className="font-body text-body-sm text-white/80">
              Aligarh, Uttar Pradesh, India
            </p>
            <p className="font-body text-body-sm text-white/70">
              Civil Lines, Medical Road, Dodhpur, Ramghat Road, GT Road &amp; surrounding localities.
            </p>
            <div className="pt-2 flex flex-col gap-1.5 font-body text-body-sm">
              <span className="text-white/90">WhatsApp: +91 99999 99999</span>
              <span className="text-white/70">Support: support@amanacare.in</span>
            </div>
            <Link
              to="/admin"
              className="inline-flex items-center gap-1.5 font-label text-label-sm text-sunny-yellow/90 hover:text-sunny-yellow mt-2"
            >
              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>admin_panel_settings</span>
              <span>Team Leads Portal</span>
            </Link>
          </div>
        </div>

        {/* Legal Disclaimer & Copyright */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 font-body text-body-sm text-white/60">
          <p>© {new Date().getFullYear()} Amana Care. All rights reserved.</p>
          <p className="max-w-xl text-left md:text-right">
            <strong>Strict Non-Medical Notice:</strong> Amana Care provides non-medical elder assistance and coordination only. We do not offer nursing, medical diagnoses, injections, procedures, or live-in/overnight caregiving.
          </p>
        </div>
      </div>
    </footer>
  );
}
