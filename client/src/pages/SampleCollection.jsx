import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function SampleCollection() {
  const whatsappUrl =
    'https://wa.me/919999999999?text=Hello%20Amana%20Care%2C%20I%20would%20like%20to%20book%20free%20home%20sample%20collection.';

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
              Free Add-On Service
            </span>
            <h1 className="font-display text-display-lg-mobile md:text-display-lg text-white text-balance">
              Free Home Sample Collection in Aligarh.
            </h1>
            <p className="font-body text-body-lg text-white/90 max-w-xl text-pretty leading-relaxed">
              We coordinate lab sample pickup, delivery to your family's chosen lab, and digital report
              sharing at zero coordination fee. You only pay the lab directly for the tests.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 max-w-6xl mx-auto px-gutter-lg py-section flex flex-col gap-12">
        {/* 3 Step Process */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <article className="rounded-2xl bg-peach p-8 flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow">
            <span className="font-label text-label-sm text-on-surface-variant font-bold uppercase tracking-wider">
              Step 01
            </span>
            <h2 className="font-headline text-headline-sm text-deep-plum">Tell Us on WhatsApp</h2>
            <p className="font-body text-body-md text-on-surface-variant leading-relaxed">
              Share the test prescription and your family's preferred diagnostic lab in Aligarh.
            </p>
          </article>

          <article className="rounded-2xl bg-sunny-yellow p-8 flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow">
            <span className="font-label text-label-sm text-on-surface-variant font-bold uppercase tracking-wider">
              Step 02
            </span>
            <h2 className="font-headline text-headline-sm text-deep-plum">Home Pickup &amp; Delivery</h2>
            <p className="font-body text-body-md text-on-surface-variant leading-relaxed">
              We coordinate the trained lab phlebotomist visit to your parents' home and ensure safe
              delivery.
            </p>
          </article>

          <article className="rounded-2xl bg-soft-lime p-8 flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow">
            <span className="font-label text-label-sm text-on-surface-variant font-bold uppercase tracking-wider">
              Step 03
            </span>
            <h2 className="font-headline text-headline-sm text-deep-plum">Reports Shared With You</h2>
            <p className="font-body text-body-md text-on-surface-variant leading-relaxed">
              We collect and send the digital reports to your family on WhatsApp—with zero markup from
              Amana Care.
            </p>
          </article>
        </div>

        {/* Free vs Paid Comparison Card */}
        <div className="rounded-2xl bg-surface-container-lowest border border-outline-variant p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-sm">
          <div>
            <h2 className="font-headline text-headline-md text-deep-plum">What is free vs. what you pay</h2>
            <p className="font-body text-body-md text-on-surface-variant mt-2 max-w-2xl leading-relaxed">
              Amana Care's coordination, scheduling, and WhatsApp report sharing are 100% free across all
              plans. Diagnostic test charges are paid directly to the lab at their actual bill.
            </p>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary text-on-primary hover:bg-primary-container px-8 py-4 font-label text-label-lg shrink-0 transition-colors shadow-md active:scale-95"
          >
            <span>Book via WhatsApp</span>
            <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
              arrow_forward
            </span>
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
