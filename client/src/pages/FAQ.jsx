import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TornDivider from '../components/TornDivider';

export default function FAQ() {
  const [openIndexes, setOpenIndexes] = useState([0]); // First one open by default

  const faqs = [
    {
      q: '1. Do you provide nursing care, injections, or overnight stays?',
      a: 'No. Amana Care is strictly non-medical. We do not offer nursing care, injections, medical procedures, or live-in/overnight caregiving.',
    },
    {
      q: '2. How are caregivers verified before visiting my parents?',
      a: 'Every staff member is 100% police-verified, carries an official company ID card, uses GPS-tracked check-ins, and meets your parents before regular visits start.',
    },
    {
      q: '3. What if my parents are not comfortable with the assigned caregiver?',
      a: 'We provide free staff replacement whenever your parents want a different caregiver, at no extra charge.',
    },
    {
      q: '4. How do NRIs in the UAE, UK, USA, or Canada stay updated?',
      a: 'We send WhatsApp visit reports (and photos depending on the plan) after visits, and alert you immediately if anything needs attention.',
    },
    {
      q: '5. How does the 24x7 emergency coordination work?',
      a: 'Our 24x7 helpline arranges ambulances, local transport, doctor/hospital coordination, and keeps your family updated in real time.',
    },
    {
      q: '6. Is home sample collection really free?',
      a: 'Yes. Our coordination, lab delivery, and WhatsApp report sharing carry zero fee. You only pay the diagnostic lab directly for the tests.',
    },
    {
      q: '7. How do we sign up and pay?',
      a: 'There is no online payment gateway. Message our team on WhatsApp, choose a plan, meet the caregiver in Aligarh, and finalize everything over chat.',
    },
  ];

  const toggleIndex = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-surface text-on-surface font-body antialiased selection:bg-blush-pink selection:text-deep-plum">
      {/* Header & Subpage Hero */}
      <section className="relative bg-deep-plum text-white overflow-hidden pb-16">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero_video_call.jpg"
            alt="Elderly couple at home in Aligarh"
            className="w-full h-full object-cover opacity-20 filter contrast-125"
            onError={(e) => {
              e.currentTarget.src =
                'https://lh3.googleusercontent.com/aida/ALJJyrD0uck9I3EfVJSYbW8ziD-gekYrWGngmYpzy5fnmGwbrCI00ub05-ZX7ZcVOhCh-xebzY19BtHXqhrHvTKab8zFwNCROjLcMXzy9ewzaieMG6Y3GYPXWnTw4Qon-z6JVFpfMEDwlyXkgzr_7_x-PY2nos6Yr2EsTMkGU0nSmy33NkzEYkbaj6eJvcI-q78xMqNNyIYno1QBg-ARDUhAH_Cm7R2zcUUClRmLXuLc5_5RITaUsz6Dv1FSiXieUbodC7suGQ';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-deep-plum/90 via-deep-plum/75 to-deep-plum/95" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-gutter-lg pt-6 md:pt-8">
          <Navbar />

          <div className="max-w-3xl flex flex-col gap-5 py-6">
            <span className="inline-flex self-start items-center rounded-full border border-white/30 px-4 py-1.5 font-label text-label-sm uppercase tracking-wider text-white/90">
              Honest Answers
            </span>
            <h1 className="font-display text-display-lg-mobile md:text-display-lg text-white text-balance">
              Seven honest answers to families' questions.
            </h1>
          </div>
        </div>

        <TornDivider direction="down" fillColor="fill-cream" className="absolute bottom-0 left-0" />
      </section>

      {/* Main Content */}
      <main className="flex-1 max-w-4xl mx-auto px-gutter-lg py-section w-full flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndexes.includes(index);
            return (
              <div
                key={index}
                className="rounded-2xl bg-surface-container-lowest border border-outline-variant p-6 transition-all duration-state-change shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(index)}
                  className="w-full flex items-center justify-between gap-4 text-left font-title text-title-md text-deep-plum hover:text-primary-container focus:outline-none"
                >
                  <span className="font-semibold text-lg">{faq.q}</span>
                  <span
                    className={`material-symbols-outlined text-on-surface-variant transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 text-deep-plum' : ''
                    }`}
                    style={{ fontSize: '22px' }}
                    aria-hidden="true"
                  >
                    expand_more
                  </span>
                </button>

                {isOpen && (
                  <div className="pt-4 border-t border-outline-variant/60 mt-4 animate-in fade-in slide-in-from-top-1">
                    <p className="font-body text-body-md text-on-surface-variant leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-8 rounded-2xl bg-peach/80 border border-peach p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="font-headline text-title-md text-deep-plum">Still have questions?</h3>
            <p className="font-body text-body-sm text-on-surface-variant">
              Our team in Aligarh is happy to answer anything specific about your parents' area or routine.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-deep-plum text-white hover:bg-primary-container px-6 py-3 font-label text-label-md shrink-0 transition-colors shadow-sm"
          >
            <span>Ask Us on WhatsApp</span>
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
              arrow_forward
            </span>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
