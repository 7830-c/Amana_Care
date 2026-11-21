import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TornDivider from '../components/TornDivider';

export default function Services() {
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
              Our Services
            </span>
            <h1 className="font-display text-display-lg-mobile md:text-display-lg text-white text-balance">
              Six core ways we stand beside your parents in Aligarh.
            </h1>
            <p className="font-body text-body-lg text-white/90 max-w-xl text-pretty leading-relaxed">
              Practical, everyday non-medical support—plus free home lab sample collection coordination
              across all plans.
            </p>
          </div>
        </div>

        <TornDivider direction="down" fillColor="fill-cream" className="absolute bottom-0 left-0" />
      </section>

      {/* Main Content */}
      <main className="flex-1 max-w-6xl mx-auto px-gutter-lg py-section flex flex-col gap-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Service 1 */}
          <article className="rounded-2xl bg-blush-pink text-deep-plum p-8 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <span className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                <span className="material-symbols-outlined text-deep-plum" style={{ fontSize: '22px' }}>
                  home
                </span>
              </span>
              <span className="font-label text-label-sm text-on-surface-variant font-bold">01</span>
            </div>
            <h2 className="font-headline text-headline-sm text-deep-plum">Regular Home Visits</h2>
            <p className="font-body text-body-md text-on-surface-variant leading-relaxed">
              A consistent staff member visits to spend time with parents, share tea or conversation,
              and spot subtle changes in mood, appetite, or daily routine.
            </p>
          </article>

          {/* Service 2 */}
          <article className="rounded-2xl bg-sunny-yellow text-deep-plum p-8 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <span className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                <span className="material-symbols-outlined text-deep-plum" style={{ fontSize: '22px' }}>
                  monitor_heart
                </span>
              </span>
              <span className="font-label text-label-sm text-on-surface-variant font-bold">02</span>
            </div>
            <h2 className="font-headline text-headline-sm text-deep-plum">Wellbeing Monitoring</h2>
            <p className="font-body text-body-md text-on-surface-variant leading-relaxed">
              Basic blood pressure checks (and blood sugar checks on the Advance plan) logged consistently
              to track trends and share with family.
            </p>
          </article>

          {/* Service 3 */}
          <article className="rounded-2xl bg-peach text-deep-plum p-8 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <span className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                <span className="material-symbols-outlined text-deep-plum" style={{ fontSize: '22px' }}>
                  medication
                </span>
              </span>
              <span className="font-label text-label-sm text-on-surface-variant font-bold">03</span>
            </div>
            <h2 className="font-headline text-headline-sm text-deep-plum">Medicine Reminders</h2>
            <p className="font-body text-body-md text-on-surface-variant leading-relaxed">
              Verifying that the right medicines are taken on time, auditing pill-boxes weekly on Plus
              &amp; Advance, and alerting family when refills are needed.
            </p>
          </article>

          {/* Service 4 */}
          <article className="rounded-2xl bg-soft-lime text-deep-plum p-8 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <span className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                <span className="material-symbols-outlined text-deep-plum" style={{ fontSize: '22px' }}>
                  chat
                </span>
              </span>
              <span className="font-label text-label-sm text-on-surface-variant font-bold">04</span>
            </div>
            <h2 className="font-headline text-headline-sm text-deep-plum">Family Updates</h2>
            <p className="font-body text-body-md text-on-surface-variant leading-relaxed">
              Structured WhatsApp visit reports (and photos, depending on the plan) sent after visits
              so children abroad stay calmly informed.
            </p>
          </article>

          {/* Service 5 */}
          <article className="rounded-2xl bg-blush-pink text-deep-plum p-8 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <span className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                <span className="material-symbols-outlined text-deep-plum" style={{ fontSize: '22px' }}>
                  calendar_month
                </span>
              </span>
              <span className="font-label text-label-sm text-on-surface-variant font-bold">05</span>
            </div>
            <h2 className="font-headline text-headline-sm text-deep-plum">
              Doctor &amp; Hospital Coordination
            </h2>
            <p className="font-body text-body-md text-on-surface-variant leading-relaxed">
              Booking clinic appointments, handling hospital paperwork, collecting test reports, and
              escorting parents when they need a steady hand.
            </p>
          </article>

          {/* Service 6 */}
          <article className="rounded-2xl bg-sunny-yellow text-deep-plum p-8 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <span className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                <span className="material-symbols-outlined text-deep-plum" style={{ fontSize: '22px' }}>
                  emergency
                </span>
              </span>
              <span className="font-label text-label-sm text-on-surface-variant font-bold">06</span>
            </div>
            <h2 className="font-headline text-headline-sm text-deep-plum">Emergency Coordination</h2>
            <p className="font-body text-body-md text-on-surface-variant leading-relaxed">
              A 24x7 helpline that arranges ambulances, local transport, doctor or hospital assistance,
              and immediate alerts to your family.
            </p>
          </article>
        </div>

        {/* Free Add-on Card */}
        <div className="rounded-2xl bg-peach p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm border border-peach/80">
          <div>
            <span className="font-label text-label-sm uppercase tracking-wider text-secondary font-bold">
              Free Add-On
            </span>
            <h2 className="font-headline text-headline-sm text-deep-plum mt-1">
              Free Home Sample Collection
            </h2>
            <p className="font-body text-body-md text-on-surface-variant mt-1 leading-relaxed">
              We coordinate sample pickup, lab delivery, and WhatsApp report sharing at no extra charge—you
              only pay the lab directly.
            </p>
          </div>
          <Link
            to="/sample-collection"
            className="inline-flex items-center gap-2 rounded-full bg-primary text-on-primary hover:bg-primary-container px-7 py-3.5 font-label text-label-lg shrink-0 transition-colors shadow-sm"
          >
            <span>How It Works</span>
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
              arrow_forward
            </span>
          </Link>
        </div>

        {/* Boundary info */}
        <div className="rounded-2xl bg-surface-container-low border border-outline-variant p-6 flex items-start gap-4">
          <span
            className="material-symbols-outlined text-secondary shrink-0"
            style={{ fontSize: '24px' }}
            aria-hidden="true"
          >
            info
          </span>
          <p className="font-body text-body-md text-deep-plum leading-relaxed">
            <strong>Strictly Non-Medical:</strong> We do not provide nursing care, injections, medical
            procedures, or live-in/overnight caregiving.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
