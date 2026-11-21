import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-surface text-on-surface font-body antialiased selection:bg-blush-pink selection:text-deep-plum">
      {/* 1. HERO SECTION */}
      <section className="relative bg-deep-plum text-white overflow-hidden min-h-[600px] md:min-h-[680px] flex flex-col justify-between pb-12">
        <div className="absolute inset-0 z-0 bg-deep-plum">
          <div className="absolute inset-0 bg-gradient-to-b from-[#381E32] via-[#2A1125] to-[#1E0919] opacity-95" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(247,197,163,0.12),rgba(255,255,255,0))]" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-6xl mx-auto px-gutter-lg pt-6 md:pt-8 w-full flex-1 flex flex-col justify-between">
          <Navbar />

          <div className="max-w-3xl my-auto py-8">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[68px] leading-[1.1] text-white tracking-tight text-balance mb-6">
              Because being far away should never mean being{' '}
              <span className="italic font-normal">helpless</span>
              <span className="text-care-orange font-bold not-italic ml-1">+</span>
            </h1>

            <p className="font-body text-body-lg text-white/90 max-w-xl text-pretty mb-8 leading-relaxed">
              Your family. Your parents. Our local presence. Non-medical elder support in Aligarh —
              regular visits, wellbeing checks, practical help and emergency coordination.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full bg-primary-container text-white border border-white/20 hover:bg-white hover:text-deep-plum px-7 py-3.5 font-label text-label-lg transition-all duration-state-change shadow-sm"
              >
                <span>Explore Our Services</span>
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                  arrow_forward
                </span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2.5 rounded-full bg-sunny-yellow text-deep-plum hover:bg-soft-lime px-7 py-3.5 font-label text-label-lg font-semibold transition-all duration-state-change shadow-sm active:scale-95"
              >
                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                  chat
                </span>
                <span>Talk to Our Team</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE DISTANCE IS REAL */}
      <section className="max-w-6xl mx-auto px-gutter-lg py-section">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden border border-outline-variant/60 shadow-lg bg-surface-container-low aspect-[4/5] max-w-md mx-auto">
              <img
                src="/images/concern_woman.jpg"
                alt="Elderly mother holding phone with concern"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-5">
            <span className="inline-flex self-start items-center rounded-full border border-outline-variant bg-surface-container-lowest px-4 py-1.5 font-label text-label-sm uppercase tracking-wider text-on-surface-variant">
              The Distance is Real
            </span>

            <h2 className="font-headline text-headline-lg-mobile md:text-headline-lg text-deep-plum text-balance">
              Your concern is even bigger.
            </h2>

            <p className="font-body text-body-lg text-on-surface-variant text-pretty leading-relaxed">
              A phone call can tell you that everything is fine. But sometimes, you need someone who can
              actually be there.
            </p>

            <div className="flex flex-col divide-y divide-outline-variant/50 pt-2 font-body text-body-md text-deep-plum">
              {[
                'When your parents need help with everyday activities.',
                'When medicines need checking or reminders.',
                'When a doctor or hospital visit needs coordination.',
                'When an unexpected situation leaves you worried from another country.',
                'When you simply wish someone could visit and check that everything is alright.',
              ].map((item, idx) => (
                <div key={idx} className="py-3 flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-sunny-yellow text-deep-plum flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>
                      check
                    </span>
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-2xl bg-peach/80 border border-peach p-6">
              <p className="font-body text-body-lg text-deep-plum text-pretty">
                You cannot always be physically present. But you can make sure someone local is there to
                support them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT IS AMANA CARE */}
      <section className="max-w-6xl mx-auto px-gutter-lg py-section border-t border-outline-variant/40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-7 flex flex-col gap-5 order-2 lg:order-1">
            <span className="inline-flex self-start items-center rounded-full border border-outline-variant bg-surface-container-lowest px-4 py-1.5 font-label text-label-sm uppercase tracking-wider text-on-surface-variant">
              What is Amana Care?
            </span>

            <h2 className="font-headline text-headline-lg-mobile md:text-headline-lg text-deep-plum text-balance">
              Amana Care is a bridge between parents and the children who love them.
            </h2>

            <p className="font-body text-body-lg text-on-surface-variant text-pretty leading-relaxed">
              A local, non-medical elder support service for families whose elderly parents live in
              Aligarh. We don't replace your presence — we help bridge the distance.
            </p>

            <div className="flex flex-col divide-y divide-outline-variant/50 pt-2 font-body text-body-md text-deep-plum">
              {[
                'Regular home visits with companionship and tea.',
                'Basic wellbeing and BP checks, where included in the plan.',
                'Medicine reminders and weekly pill-box verification.',
                'Home safety observations & environment check.',
                'Direct family updates through WhatsApp with photos.',
                'Doctor appointment scheduling and hospital coordination.',
                'Emergency assistance and 24x7 local coordination.',
              ].map((item, idx) => (
                <div key={idx} className="py-3 flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-sunny-yellow text-deep-plum flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>
                      check
                    </span>
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-3">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full border border-deep-plum text-deep-plum hover:bg-deep-plum hover:text-white px-7 py-3 font-label text-label-lg transition-all duration-state-change"
              >
                <span>About Amana Care</span>
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="rounded-3xl overflow-hidden border border-outline-variant/60 shadow-lg bg-surface-container-low aspect-[4/5] max-w-md mx-auto">
              <img
                src="/images/family_bridge.jpg"
                alt="Grandparents with grandchildren looking at album"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. SIX SERVICES CARDS */}
      <section className="max-w-6xl mx-auto px-gutter-lg py-section">
        <div className="flex flex-col items-start gap-3 mb-10">
          <span className="inline-flex items-center rounded-full border border-outline-variant bg-surface-container-lowest px-4 py-1.5 font-label text-label-sm uppercase tracking-wider text-on-surface-variant">
            What We Do
          </span>
          <h2 className="font-headline text-headline-lg-mobile md:text-headline-lg text-deep-plum text-balance">
            More than a visit. A reassuring connection.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Blush Pink */}
          <article className="rounded-2xl bg-blush-pink text-deep-plum p-8 flex flex-col justify-between gap-6 hover:shadow-md transition-shadow">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                  <span className="material-symbols-outlined text-deep-plum" style={{ fontSize: '22px' }}>
                    home
                  </span>
                </span>
                <span className="font-label text-label-sm text-on-surface-variant">01</span>
              </div>
              <h3 className="font-headline text-title-lg text-deep-plum">Regular Home Visits</h3>
              <p className="font-body text-body-md text-on-surface-variant leading-relaxed">
                A familiar local presence to check on your parents, spend time with them, and understand
                their everyday needs.
              </p>
            </div>
          </article>

          {/* Card 2: Sunny Yellow */}
          <article className="rounded-2xl bg-sunny-yellow text-deep-plum p-8 flex flex-col justify-between gap-6 hover:shadow-md transition-shadow">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                  <span className="material-symbols-outlined text-deep-plum" style={{ fontSize: '22px' }}>
                    monitor_heart
                  </span>
                </span>
                <span className="font-label text-label-sm text-on-surface-variant">02</span>
              </div>
              <h3 className="font-headline text-title-lg text-deep-plum">Wellbeing Monitoring</h3>
              <p className="font-body text-body-md text-on-surface-variant leading-relaxed">
                Basic BP monitoring and other non-medical checks according to the selected service plan.
              </p>
            </div>
          </article>

          {/* Card 3: Peach */}
          <article className="rounded-2xl bg-peach text-deep-plum p-8 flex flex-col justify-between gap-6 hover:shadow-md transition-shadow">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                  <span className="material-symbols-outlined text-deep-plum" style={{ fontSize: '22px' }}>
                    medication
                  </span>
                </span>
                <span className="font-label text-label-sm text-on-surface-variant">03</span>
              </div>
              <h3 className="font-headline text-title-lg text-deep-plum">Medicine Reminders</h3>
              <p className="font-body text-body-md text-on-surface-variant leading-relaxed">
                Helping parents stay mindful of their medication routine and informing family members about
                refills and concerns.
              </p>
            </div>
          </article>

          {/* Card 4: Soft Lime */}
          <article className="rounded-2xl bg-soft-lime text-deep-plum p-8 flex flex-col justify-between gap-6 hover:shadow-md transition-shadow">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                  <span className="material-symbols-outlined text-deep-plum" style={{ fontSize: '22px' }}>
                    chat
                  </span>
                </span>
                <span className="font-label text-label-sm text-on-surface-variant">04</span>
              </div>
              <h3 className="font-headline text-title-lg text-deep-plum">Family Updates</h3>
              <p className="font-body text-body-md text-on-surface-variant leading-relaxed">
                Stay informed through WhatsApp updates, including visit reports and photographs according
                to the plan.
              </p>
            </div>
          </article>

          {/* Card 5: Blush Pink */}
          <article className="rounded-2xl bg-blush-pink text-deep-plum p-8 flex flex-col justify-between gap-6 hover:shadow-md transition-shadow">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                  <span className="material-symbols-outlined text-deep-plum" style={{ fontSize: '22px' }}>
                    calendar_month
                  </span>
                </span>
                <span className="font-label text-label-sm text-on-surface-variant">05</span>
              </div>
              <h3 className="font-headline text-title-lg text-deep-plum">Doctor &amp; Hospital Help</h3>
              <p className="font-body text-body-md text-on-surface-variant leading-relaxed">
                Assistance with appointment arrangements, doctor visits and hospital-related coordination
                in Aligarh.
              </p>
            </div>
          </article>

          {/* Card 6: Sunny Yellow */}
          <article className="rounded-2xl bg-sunny-yellow text-deep-plum p-8 flex flex-col justify-between gap-6 hover:shadow-md transition-shadow">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                  <span className="material-symbols-outlined text-deep-plum" style={{ fontSize: '22px' }}>
                    emergency
                  </span>
                </span>
                <span className="font-label text-label-sm text-on-surface-variant">06</span>
              </div>
              <h3 className="font-headline text-title-lg text-deep-plum">Emergency Coordination</h3>
              <p className="font-body text-body-md text-on-surface-variant leading-relaxed">
                Help coordinate ambulance arrangements, hospital assistance and urgent family notifications
                when an emergency occurs.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* 5. SERVICE PLANS PREVIEW */}
      <section className="max-w-6xl mx-auto px-gutter-lg py-section">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="inline-flex items-center rounded-full border border-outline-variant bg-surface-container-lowest px-4 py-1.5 font-label text-label-sm uppercase tracking-wider text-on-surface-variant mb-2">
              Our Service Plans
            </span>
            <h2 className="font-headline text-headline-lg-mobile md:text-headline-lg text-deep-plum text-balance">
              Choose the support that suits your family.
            </h2>
          </div>
          <Link
            to="/plans"
            className="inline-flex items-center gap-2 rounded-full bg-sunny-yellow text-deep-plum px-6 py-3 font-label text-label-lg font-semibold hover:bg-soft-lime transition-all shrink-0"
          >
            <span>Compare all plans</span>
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
              arrow_forward
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-stretch">
          {/* Plan 1: Emergency */}
          <div className="rounded-2xl bg-blush-pink text-deep-plum p-6 flex flex-col justify-between gap-6 border border-blush-pink/60">
            <div className="flex flex-col gap-3">
              <h3 className="font-headline text-title-lg text-deep-plum">Emergency Activation</h3>
              <p className="font-body text-body-sm text-on-surface-variant">
                For families looking for emergency coordination without regular visits.
              </p>
              <p className="font-headline text-3xl text-deep-plum tabular-nums pt-2">
                ₹999<span className="font-body text-body-sm text-on-surface-variant">/year</span>
              </p>
            </div>
            <Link
              to="/contact?plan=Emergency%20Activation"
              className="inline-flex items-center justify-center gap-1.5 rounded-full bg-deep-plum text-white px-4 py-2.5 font-label text-label-sm hover:bg-primary-container transition-colors"
            >
              <span>View details</span>
              <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>arrow_forward</span>
            </Link>
          </div>

          {/* Plan 2: Care Lite */}
          <div className="rounded-2xl bg-peach text-deep-plum p-6 flex flex-col justify-between gap-6 border border-peach/60">
            <div className="flex flex-col gap-3">
              <h3 className="font-headline text-title-lg text-deep-plum">Care Lite</h3>
              <p className="font-body text-body-sm text-on-surface-variant">
                For largely independent parents who would benefit from weekly check-ins.
              </p>
              <p className="font-headline text-3xl text-deep-plum tabular-nums pt-2">
                ₹999<span className="font-body text-body-sm text-on-surface-variant">/month</span>
              </p>
            </div>
            <Link
              to="/contact?plan=Care%20Lite"
              className="inline-flex items-center justify-center gap-1.5 rounded-full bg-deep-plum text-white px-4 py-2.5 font-label text-label-sm hover:bg-primary-container transition-colors"
            >
              <span>View details</span>
              <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>arrow_forward</span>
            </Link>
          </div>

          {/* Plan 3: Basic */}
          <div className="rounded-2xl bg-soft-lime text-deep-plum p-6 flex flex-col justify-between gap-6 border border-soft-lime/60">
            <div className="flex flex-col gap-3">
              <h3 className="font-headline text-title-lg text-deep-plum">Basic</h3>
              <p className="font-body text-body-sm text-on-surface-variant">
                For families who want consistent daily monitoring and routine verification.
              </p>
              <p className="font-headline text-3xl text-deep-plum tabular-nums pt-2">
                ₹2,499<span className="font-body text-body-sm text-on-surface-variant">/month</span>
              </p>
            </div>
            <Link
              to="/contact?plan=Basic"
              className="inline-flex items-center justify-center gap-1.5 rounded-full bg-deep-plum text-white px-4 py-2.5 font-label text-label-sm hover:bg-primary-container transition-colors"
            >
              <span>View details</span>
              <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>arrow_forward</span>
            </Link>
          </div>

          {/* Plan 4: Plus (Most Chosen) */}
          <div className="rounded-2xl bg-sunny-yellow text-deep-plum p-6 flex flex-col justify-between gap-6 relative border-2 border-deep-plum shadow-md">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-deep-plum text-white px-3 py-0.5 font-label text-label-sm uppercase tracking-wider text-[10px]">
              Most Chosen
            </span>
            <div className="flex flex-col gap-3 pt-1">
              <h3 className="font-headline text-title-lg text-deep-plum">Plus</h3>
              <p className="font-body text-body-sm text-on-surface-variant">
                For parents who need additional practical assistance and errand runs.
              </p>
              <p className="font-headline text-3xl text-deep-plum tabular-nums pt-2">
                ₹4,499<span className="font-body text-body-sm text-on-surface-variant">/month</span>
              </p>
            </div>
            <Link
              to="/contact?plan=Plus"
              className="inline-flex items-center justify-center gap-1.5 rounded-full bg-deep-plum text-white px-4 py-2.5 font-label text-label-sm hover:bg-primary-container transition-colors"
            >
              <span>View details</span>
              <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>arrow_forward</span>
            </Link>
          </div>

          {/* Plan 5: Advance */}
          <div className="rounded-2xl bg-deep-plum text-white p-6 flex flex-col justify-between gap-6 border border-deep-plum shadow-lg">
            <div className="flex flex-col gap-3">
              <h3 className="font-headline text-title-lg text-white">Advance</h3>
              <p className="font-body text-body-sm text-white/80">
                For families looking for a comprehensive support arrangement with hospital escort.
              </p>
              <p className="font-headline text-3xl text-white tabular-nums pt-2">
                ₹6,999<span className="font-body text-body-sm text-white/70">/month</span>
              </p>
            </div>
            <Link
              to="/contact?plan=Advance"
              className="inline-flex items-center justify-center gap-1.5 rounded-full bg-sunny-yellow text-deep-plum px-4 py-2.5 font-label text-label-sm font-semibold hover:bg-white transition-colors"
            >
              <span>View details</span>
              <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>arrow_forward</span>
            </Link>
          </div>
        </div>

        <p className="text-center font-body text-body-sm text-on-surface-variant mt-6">
          Service terms, limits and additional charges apply. Please contact our team for complete plan
          details.
        </p>
      </section>

      {/* 6. DARK STATS BANNER */}
      <section className="bg-deep-plum text-white overflow-hidden py-16 my-10">
        <div className="max-w-6xl mx-auto px-gutter-lg grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
              Helping your parents stay safe, seen and <span className="italic font-normal">cared for</span>.
            </h2>
            <p className="font-body text-body-lg text-white/85 max-w-lg leading-relaxed">
              At the heart of our commitment is a belief that peace of mind begins with someone being
              there.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-4 border-t border-white/15">
              <div>
                <p className="font-headline text-3xl sm:text-4xl text-sunny-yellow">24x7</p>
                <p className="font-body text-body-sm text-white/80 mt-1">Emergency helpline</p>
              </div>
              <div>
                <p className="font-headline text-3xl sm:text-4xl text-sunny-yellow">5</p>
                <p className="font-body text-body-sm text-white/80 mt-1">Flexible care plans</p>
              </div>
              <div>
                <p className="font-headline text-3xl sm:text-4xl text-sunny-yellow">100%</p>
                <p className="font-body text-body-sm text-white/80 mt-1">Police-verified staff</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden border border-white/20 shadow-xl max-w-md mx-auto aspect-[4/3] bg-surface-container-high/20">
              <img
                src="/images/caregiver_kitchen.jpg"
                alt="Caregiver assisting elderly lady in kitchen"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 7. HOME SAMPLE COLLECTION BANNER */}
      <section className="max-w-6xl mx-auto px-gutter-lg py-section">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden border border-outline-variant/60 shadow-lg bg-surface-container-low aspect-[4/5] max-w-md mx-auto">
              <img
                src="/images/stethoscope_visit.jpg"
                alt="Caregiver doing wellness check with stethoscope"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-5">
            <span className="inline-flex self-start items-center rounded-full border border-outline-variant bg-surface-container-lowest px-4 py-1.5 font-label text-label-sm uppercase tracking-wider text-on-surface-variant">
              Care That Starts at Home
            </span>

            <h2 className="font-headline text-headline-lg-mobile md:text-headline-lg text-deep-plum text-balance">
              Home sample collection, without the travel.
            </h2>

            <p className="font-body text-body-lg text-on-surface-variant text-pretty leading-relaxed">
              Getting a medical test done shouldn't always require an elderly parent to travel. We
              coordinate home sample collection and delivery to the laboratory your family chooses.
            </p>

            <div className="flex flex-col divide-y divide-outline-variant/50 pt-2 font-body text-body-md text-deep-plum">
              {[
                'Sample collection coordination — free',
                'Sample delivery to the lab — free',
                'Report collection and sharing — free',
              ].map((item, idx) => (
                <div key={idx} className="py-3 flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-sunny-yellow text-deep-plum flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>
                      check
                    </span>
                  </span>
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>

            <p className="font-body text-body-sm text-on-surface-variant italic">
              Laboratory test charges are paid separately by the client directly to the laboratory.
            </p>

            <div className="pt-2">
              <Link
                to="/sample-collection"
                className="inline-flex items-center gap-2 rounded-full bg-deep-plum text-white hover:bg-primary-container px-7 py-3.5 font-label text-label-lg transition-all duration-state-change"
              >
                <span>How it works</span>
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8. TRUST IS EARNED */}
      <section className="max-w-6xl mx-auto px-gutter-lg py-section">
        <div className="text-center max-w-2xl mx-auto flex flex-col items-center gap-3 mb-12">
          <span className="inline-flex items-center rounded-full border border-outline-variant bg-surface-container-lowest px-4 py-1.5 font-label text-label-sm uppercase tracking-wider text-on-surface-variant">
            Trust is Earned
          </span>
          <h2 className="font-headline text-headline-lg-mobile md:text-headline-lg text-deep-plum text-balance">
            Inviting someone into your parents' home deserves confidence.
          </h2>
          <p className="font-body text-body-md text-on-surface-variant">
            We understand that. Our employee handbook outlines these trust measures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'Police verification',
              desc: 'Every member of our staff is police-verified.',
              icon: 'verified_user',
              bg: 'bg-soft-lime',
            },
            {
              title: 'Company ID cards',
              desc: 'Our team carries company identification at every visit.',
              icon: 'badge',
              bg: 'bg-sunny-yellow',
            },
            {
              title: 'GPS-tracked visits',
              desc: 'Visits are tracked so you know they happened.',
              icon: 'location_on',
              bg: 'bg-soft-lime',
            },
            {
              title: 'Meet before you start',
              desc: 'Meet the staff member before service begins.',
              icon: 'handshake',
              bg: 'bg-soft-lime',
            },
            {
              title: 'Staff replacement',
              desc: 'Parents uncomfortable? We replace the staff member.',
              icon: 'swap_horiz',
              bg: 'bg-sunny-yellow',
            },
            {
              title: 'Insurance arrangements',
              desc: 'Insurance arrangements are in place for our service.',
              icon: 'shield',
              bg: 'bg-soft-lime',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-surface-container-lowest border border-outline-variant/80 p-6 flex items-start gap-4 shadow-sm"
            >
              <span
                className={`w-12 h-12 rounded-full ${item.bg} text-deep-plum flex items-center justify-center shrink-0 shadow-sm`}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '22px' }}>
                  {item.icon}
                </span>
              </span>
              <div>
                <h3 className="font-headline text-title-md text-deep-plum">{item.title}</h3>
                <p className="font-body text-body-sm text-on-surface-variant mt-1 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. QUESTIONS EVERY FAR-AWAY CHILD ASKS */}
      <section className="max-w-6xl mx-auto px-gutter-lg py-section">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-10">
          <h2 className="font-headline text-headline-lg-mobile md:text-headline-lg text-deep-plum text-balance max-w-xl">
            Questions every far-away child asks.
          </h2>
          <Link
            to="/faq"
            className="inline-flex items-center gap-1.5 rounded-full bg-sunny-yellow text-deep-plum px-6 py-2.5 font-label text-label-sm font-semibold uppercase tracking-wider hover:bg-soft-lime transition-all shrink-0"
          >
            <span>See all FAQs</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Blush Pink */}
          <div className="rounded-2xl bg-blush-pink p-8 flex flex-col justify-between gap-8">
            <h3 className="font-headline text-2xl text-deep-plum leading-snug">
              “Who checks on them?”
            </h3>
            <div className="rounded-xl bg-white/90 p-5 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-6 rounded-full bg-blush-pink flex items-center justify-center font-bold text-[11px] text-deep-plum">
                  T
                </span>
                <span className="font-label text-label-sm font-semibold text-deep-plum">The daily worry</span>
              </div>
              <p className="font-body text-body-sm text-on-surface-variant leading-relaxed">
                A phone call can say "all fine". A familiar face notices what a call never will.
              </p>
            </div>
          </div>

          {/* Card 2: Sunny Yellow */}
          <div className="rounded-2xl bg-sunny-yellow p-8 flex flex-col justify-between gap-8">
            <h3 className="font-headline text-2xl text-deep-plum leading-snug">
              “Who helps when they need to visit a doctor?”
            </h3>
            <div className="rounded-xl bg-white/90 p-5 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-6 rounded-full bg-sunny-yellow flex items-center justify-center font-bold text-[11px] text-deep-plum">
                  T
                </span>
                <span className="font-label text-label-sm font-semibold text-deep-plum">The practical worry</span>
              </div>
              <p className="font-body text-body-sm text-on-surface-variant leading-relaxed">
                Appointments, transport and hospital formalities — handled by someone local.
              </p>
            </div>
          </div>

          {/* Card 3: Peach */}
          <div className="rounded-2xl bg-peach p-8 flex flex-col justify-between gap-8">
            <h3 className="font-headline text-2xl text-deep-plum leading-snug">
              “Who can be physically present when I cannot?”
            </h3>
            <div className="rounded-xl bg-white/90 p-5 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-6 rounded-full bg-peach flex items-center justify-center font-bold text-[11px] text-deep-plum">
                  T
                </span>
                <span className="font-label text-label-sm font-semibold text-deep-plum">The helpless feeling</span>
              </div>
              <p className="font-body text-body-sm text-on-surface-variant leading-relaxed">
                Amana Care — a dependable local presence, one WhatsApp message away.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
