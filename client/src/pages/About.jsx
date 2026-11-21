import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
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
              About Amana Care
            </span>
            <h1 className="font-display text-display-lg-mobile md:text-display-lg text-white text-balance">
              Built for families who live far from Aligarh, yet care deeply every day.
            </h1>
            <p className="font-body text-body-lg text-white/90 max-w-xl text-pretty leading-relaxed">
              We are a local, non-medical elder support team acting as a dependable physical presence
              for parents whose children live in the UAE, UK, USA, Canada, or other Indian cities.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1">
        {/* Our Story */}
        <section className="max-w-6xl mx-auto px-gutter-lg py-section">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 flex flex-col gap-6">
              <span className="inline-flex self-start items-center rounded-full border border-outline-variant bg-surface-container-lowest px-4 py-1.5 font-label text-label-sm uppercase tracking-wider text-on-surface-variant">
                Our Story
              </span>
              <h2 className="font-headline text-headline-lg-mobile md:text-headline-lg text-deep-plum text-balance">
                Why a phone call is never quite enough.
              </h2>
              <p className="font-body text-body-lg text-on-surface-variant text-pretty leading-relaxed">
                Parents rarely want to worry their children. Even when medicines are running low, a BP
                reading feels off, or a hospital queue feels overwhelming, they often say "everything
                is fine" on the phone.
              </p>
              <p className="font-body text-body-md text-on-surface-variant text-pretty leading-relaxed">
                Amana Care was started in Aligarh to give families an honest, consistent pair of local
                hands and eyes—someone who visits regularly, notices the small things, and keeps you
                informed on WhatsApp.
              </p>
            </div>
            <div className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden border border-outline-variant shadow-md aspect-square max-w-md mx-auto bg-surface-container-low">
                <img
                  src="/images/caregiver_home_visit.jpg"
                  alt="Caregiver visiting elderly couple at home in Aligarh"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Four Promises */}
        <section className="max-w-6xl mx-auto px-gutter-lg py-section">
          <div className="mb-10 flex flex-col items-start gap-3">
            <span className="inline-flex items-center rounded-full border border-outline-variant bg-surface-container-lowest px-4 py-1.5 font-label text-label-sm uppercase tracking-wider text-on-surface-variant">
              Four Promises
            </span>
            <h2 className="font-headline text-headline-lg-mobile md:text-headline-lg text-deep-plum">
              What we promise every family.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {/* 01 Consistent Faces */}
            <article className="rounded-2xl bg-blush-pink text-deep-plum p-8 flex flex-col gap-3 h-full shadow-sm hover:shadow-md transition-shadow">
              <span className="font-label text-label-sm text-on-surface-variant">01</span>
              <h3 className="font-headline text-title-lg text-deep-plum">Consistent Faces</h3>
              <p className="font-body text-body-md text-on-surface-variant leading-relaxed">
                Your parents see the same familiar caregiver, not a rotating stranger each week.
              </p>
            </article>

            {/* 02 Radical Honesty */}
            <article className="rounded-2xl bg-sunny-yellow text-deep-plum p-8 flex flex-col gap-3 h-full shadow-sm hover:shadow-md transition-shadow">
              <span className="font-label text-label-sm text-on-surface-variant">02</span>
              <h3 className="font-headline text-title-lg text-deep-plum">Radical Honesty</h3>
              <p className="font-body text-body-md text-on-surface-variant leading-relaxed">
                We clearly state what we do and what we do not do—no medical claims or hidden fees.
              </p>
            </article>

            {/* 03 Respect & Dignity */}
            <article className="rounded-2xl bg-peach text-deep-plum p-8 flex flex-col gap-3 h-full shadow-sm hover:shadow-md transition-shadow">
              <span className="font-label text-label-sm text-on-surface-variant">03</span>
              <h3 className="font-headline text-title-lg text-deep-plum">Respect &amp; Dignity</h3>
              <p className="font-body text-body-md text-on-surface-variant leading-relaxed">
                Every visit is unhurried, respectful of your parents' independence, and warm.
              </p>
            </article>

            {/* 04 Direct Updates */}
            <article className="rounded-2xl bg-soft-lime text-deep-plum p-8 flex flex-col gap-3 h-full shadow-sm hover:shadow-md transition-shadow">
              <span className="font-label text-label-sm text-on-surface-variant">04</span>
              <h3 className="font-headline text-title-lg text-deep-plum">Direct Updates</h3>
              <p className="font-body text-body-md text-on-surface-variant leading-relaxed">
                Clear WhatsApp reports after visits so you never have to guess how things went.
              </p>
            </article>
          </div>

          <div className="mt-8 rounded-2xl bg-surface-container-low border border-outline-variant p-6 flex items-start gap-4">
            <span
              className="material-symbols-outlined text-secondary shrink-0"
              style={{ fontSize: '24px' }}
              aria-hidden="true"
            >
              info
            </span>
            <p className="font-body text-body-md text-deep-plum text-pretty leading-relaxed">
              <strong>Strict Non-Medical Boundary:</strong> Amana Care does not offer nursing care,
              injections, medical procedures, or live-in/overnight caregiving.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
