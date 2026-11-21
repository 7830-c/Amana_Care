import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Contact() {
  const location = useLocation();

  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    country: 'UAE',
    plan: 'Not sure yet — help me choose',
    parents: '',
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: '',
    submittedData: null,
  });

  // Pre-fill plan from URL if provided (e.g. /contact?plan=Plus)
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const planParam = params.get('plan');
    if (planParam) {
      setFormData((prev) => ({ ...prev, plan: planParam }));
    }
  }, [location]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: '', submittedData: null });

    try {
      // 1. Submit to Node.js / Express backend API
      const res = await fetch('/api/enquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.message || 'Failed to submit enquiry');
      }

      setStatus({
        loading: false,
        success: true,
        error: '',
        submittedData: json.data,
      });

      // 2. Build pre-filled WhatsApp link and open it in a new tab
      const msg =
        `Hello Amana Care,%0A` +
        `Name: ${encodeURIComponent(formData.name)}%0A` +
        `WhatsApp: ${encodeURIComponent(formData.whatsapp)}%0A` +
        `Country: ${encodeURIComponent(formData.country)}%0A` +
        `Plan of Interest: ${encodeURIComponent(formData.plan)}%0A` +
        `Parents Details: ${encodeURIComponent(formData.parents)}`;

      window.open(`https://wa.me/919999999999?text=${msg}`, '_blank');
    } catch (err) {
      console.error(err);
      setStatus({
        loading: false,
        success: false,
        error: err.message || 'Something went wrong. Please try again.',
        submittedData: null,
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-surface text-on-surface font-body antialiased selection:bg-blush-pink selection:text-deep-plum">
      {/* Header & Subpage Hero */}
      <section className="relative bg-deep-plum text-white overflow-hidden pb-16">
        <div className="absolute inset-0 z-0 bg-deep-plum">
          <div className="absolute inset-0 bg-gradient-to-b from-[#381E32] via-[#2A1125] to-[#1E0919] opacity-95" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(247,197,163,0.12),rgba(255,255,255,0))]" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-gutter-lg pt-6 md:pt-8">
          <Navbar />

          <div className="max-w-3xl flex flex-col gap-5 py-6">
            <span className="inline-flex self-start items-center rounded-full border border-white/30 px-4 py-1.5 font-label text-label-sm uppercase tracking-wider text-white/90">
              WhatsApp Enquiry
            </span>
            <h1 className="font-display text-display-lg-mobile md:text-display-lg text-white text-balance">
              Start a conversation with our Aligarh team.
            </h1>
            <p className="font-body text-body-lg text-white/90 max-w-xl text-pretty leading-relaxed">
              Fill in a few quick details below—your enquiry is saved to our team system and opens
              directly in WhatsApp with a pre-filled message so we can help your parents right away.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 max-w-6xl mx-auto px-gutter-lg py-section w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-7 rounded-2xl bg-surface-container-lowest border border-outline-variant p-8 md:p-10 flex flex-col gap-6 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <h2 className="font-headline text-headline-md text-deep-plum">Enquiry Details</h2>
              <span className="font-label text-label-sm text-secondary bg-peach/70 px-3 py-1 rounded-full">
                Direct WhatsApp Sync
              </span>
            </div>

            {status.success && (
              <div className="rounded-xl bg-soft-lime/60 border border-soft-lime p-5 flex items-start gap-3 animate-in fade-in">
                <span className="material-symbols-outlined text-green-800" style={{ fontSize: '24px' }}>
                  check_circle
                </span>
                <div>
                  <p className="font-title text-title-md text-green-900 font-semibold">
                    Enquiry saved and WhatsApp opened!
                  </p>
                  <p className="font-body text-body-sm text-green-800 mt-1">
                    Our local Aligarh team has received your enquiry. If WhatsApp didn't open
                    automatically, you can message us directly at +91 99999 99999.
                  </p>
                </div>
              </div>
            )}

            {status.error && (
              <div className="rounded-xl bg-red-50 border border-red-200 p-4 text-red-700 font-body text-body-sm">
                {status.error}
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="font-label text-label-md text-deep-plum font-semibold">
                  Your Name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="e.g. Tariq Ahmad"
                  value={formData.name}
                  onChange={handleChange}
                  className="rounded-xl border border-outline-variant bg-surface px-4 py-3 font-body text-body-md text-deep-plum focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="whatsapp" className="font-label text-label-md text-deep-plum font-semibold">
                  WhatsApp Number *
                </label>
                <input
                  id="whatsapp"
                  name="whatsapp"
                  type="tel"
                  required
                  placeholder="+971 / +44 / +91 ..."
                  value={formData.whatsapp}
                  onChange={handleChange}
                  className="rounded-xl border border-outline-variant bg-surface px-4 py-3 font-body text-body-md text-deep-plum focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="country" className="font-label text-label-md text-deep-plum font-semibold">
                  Where You Live
                </label>
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="rounded-xl border border-outline-variant bg-surface px-4 py-3 font-body text-body-md text-deep-plum focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                >
                  <option value="UAE">UAE</option>
                  <option value="UK">UK</option>
                  <option value="USA">USA</option>
                  <option value="Canada">Canada</option>
                  <option value="Saudi Arabia">Saudi Arabia</option>
                  <option value="Qatar">Qatar</option>
                  <option value="India (Outside Aligarh)">India (Delhi / Other City)</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="plan" className="font-label text-label-md text-deep-plum font-semibold">
                  Plan of Interest
                </label>
                <select
                  id="plan"
                  name="plan"
                  value={formData.plan}
                  onChange={handleChange}
                  className="rounded-xl border border-outline-variant bg-surface px-4 py-3 font-body text-body-md text-deep-plum focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                >
                  <option value="Not sure yet — help me choose">Not sure yet — help me choose</option>
                  <option value="Emergency Activation">Emergency Activation (₹999/year)</option>
                  <option value="Care Lite">Care Lite (₹999/month)</option>
                  <option value="Basic">Basic (₹2,499/month)</option>
                  <option value="Plus">Plus (₹4,499/month) — Most Chosen</option>
                  <option value="Advance">Advance (₹6,999/month)</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="parents" className="font-label text-label-md text-deep-plum font-semibold">
                Parents' Details &amp; Aligarh Locality *
              </label>
              <textarea
                id="parents"
                name="parents"
                rows="4"
                required
                placeholder="Area in Aligarh (e.g. Civil Lines, Medical Road, Dodhpur, Ramghat Road) and what kind of support your parents need."
                value={formData.parents}
                onChange={handleChange}
                className="rounded-xl border border-outline-variant bg-surface px-4 py-3 font-body text-body-md text-deep-plum focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors leading-relaxed"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status.loading}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-sunny-yellow text-deep-plum px-8 py-4 font-label text-label-lg font-semibold hover:bg-soft-lime transition-all duration-state-change shadow-md active:scale-95 disabled:opacity-50"
            >
              <span className="material-symbols-outlined" style={{ fontSize: '22px' }}>
                chat
              </span>
              <span>{status.loading ? 'Saving Enquiry...' : 'Open WhatsApp with Enquiry'}</span>
            </button>
          </form>

          {/* Sidebar */}
          <aside className="lg:col-span-5 flex flex-col gap-6">
            <div className="rounded-2xl bg-peach p-8 flex flex-col gap-3 shadow-sm border border-peach/80">
              <h2 className="font-headline text-headline-sm text-deep-plum">Service Area</h2>
              <p className="font-body text-body-md text-on-surface-variant leading-relaxed">
                Operating locally across Aligarh, Uttar Pradesh — including Civil Lines, Medical Road,
                Dodhpur, Ramghat Road, GT Road, and nearby residential colonies.
              </p>
            </div>

            <div className="rounded-2xl bg-surface-container-lowest border border-outline-variant p-8 flex flex-col gap-4 shadow-sm">
              <h2 className="font-headline text-headline-sm text-deep-plum">What Happens Next</h2>
              <ul className="flex flex-col gap-3.5 font-body text-body-md text-on-surface-variant">
                <li className="flex items-start gap-2.5">
                  <span className="w-6 h-6 rounded-full bg-sunny-yellow flex items-center justify-center shrink-0 font-bold text-xs text-deep-plum mt-0.5">
                    1
                  </span>
                  <span>We reply on WhatsApp within minutes to understand your parents' routine.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-6 h-6 rounded-full bg-sunny-yellow flex items-center justify-center shrink-0 font-bold text-xs text-deep-plum mt-0.5">
                    2
                  </span>
                  <span>We arrange a Meet-Before-You-Start introduction at your home in Aligarh.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-6 h-6 rounded-full bg-sunny-yellow flex items-center justify-center shrink-0 font-bold text-xs text-deep-plum mt-0.5">
                    3
                  </span>
                  <span>You confirm your plan—no online payment gateway or upfront fees needed.</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl bg-surface-container-low border border-outline-variant p-6 flex items-start gap-3">
              <span
                className="material-symbols-outlined text-secondary shrink-0"
                style={{ fontSize: '22px' }}
                aria-hidden="true"
              >
                info
              </span>
              <p className="font-body text-body-sm text-deep-plum leading-relaxed">
                <strong>Strictly Non-Medical:</strong> We do not offer nursing care, injections, medical
                procedures, or live-in/overnight caregiving.
              </p>
            </div>
          </aside>
        </div>
      </main>

      <Footer hideCtaBanner={true} />
    </div>
  );
}
