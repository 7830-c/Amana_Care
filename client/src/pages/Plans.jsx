import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Plans() {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const navigate = useNavigate();

  const plans = [
    {
      id: 'emergency',
      name: 'Emergency Activation',
      shortTitle: 'Emergency',
      eyebrow: 'Emergency Cover',
      price: '₹999',
      unit: '/yr',
      fullPrice: '₹999/year',
      desc: '24x7 helpline, ambulance/doctor/transport coordination, up to 2 hrs caregiver help during one activation.',
      visits: 'Activation only',
      bp: '—',
      groceries: '—',
      doctor: 'Emergency only',
      emergency: 'Included',
      badge: null,
    },
    {
      id: 'care-lite',
      name: 'Care Lite',
      shortTitle: 'Care Lite',
      eyebrow: 'Weekly Check-Ins',
      price: '₹999',
      unit: '/mo',
      fullPrice: '₹999/month',
      desc: '1 weekly visit (20–30 min), basic wellbeing & safety check, weekly WhatsApp update.',
      visits: '1/week (20–30 min)',
      bp: 'Basic wellbeing',
      groceries: '—',
      doctor: '—',
      emergency: 'Included',
      badge: null,
    },
    {
      id: 'basic',
      name: 'Basic',
      shortTitle: 'Basic',
      eyebrow: 'Daily Monitoring',
      price: '₹2,499',
      unit: '/mo',
      fullPrice: '₹2,499/month',
      desc: 'Daily 20–30 min visits, BP check, medicine reminders, 5-point safety check, daily WhatsApp report.',
      visits: 'Daily (20–30 min)',
      bp: 'BP check',
      groceries: 'Reminders',
      doctor: '—',
      emergency: 'Included',
      badge: null,
    },
    {
      id: 'plus',
      name: 'Plus',
      shortTitle: 'Plus',
      eyebrow: 'Most Chosen',
      price: '₹4,499',
      unit: '/mo',
      fullPrice: '₹4,499/month',
      desc: 'All Basic + 30–45 min visits, 2 medicine & 2 grocery trips/mo, pill-box audit, doctor coordination.',
      visits: 'Daily (30–45 min)',
      bp: 'BP check',
      groceries: '2 med + 2 grocery/mo',
      doctor: 'Appointment booking',
      emergency: 'Included',
      badge: 'Most Chosen',
    },
    {
      id: 'advance',
      name: 'Advance',
      shortTitle: 'Advance',
      eyebrow: 'Comprehensive',
      price: '₹6,999',
      unit: '/mo',
      fullPrice: '₹6,999/month',
      desc: 'All Plus + 60–90 min visits, 1 doctor escort/mo, blood sugar check, admission help, 4 extra errands.',
      visits: 'Daily (60–90 min)',
      bp: 'BP + Blood sugar',
      groceries: '2 med + 2 grocery + 4 errands',
      doctor: '1 escort/mo + admission help',
      emergency: 'Priority response',
      badge: null,
    },
  ];

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
  };

  const handleContinue = () => {
    if (selectedPlan) {
      navigate(`/contact?plan=${encodeURIComponent(selectedPlan.name)}`);
    } else {
      navigate('/contact');
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
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-deep-plum/90 via-deep-plum/75 to-deep-plum/95" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-gutter-lg pt-6 md:pt-8">
          <Navbar />

          <div className="max-w-3xl flex flex-col gap-5 py-6">
            <span className="inline-flex self-start items-center rounded-full border border-white/30 px-4 py-1.5 font-label text-label-sm uppercase tracking-wider text-white/90">
              Service Plans
            </span>
            <h1 className="font-display text-display-lg-mobile md:text-display-lg text-white text-balance">
              Choose the level of support that suits your family.
            </h1>
            <p className="font-body text-body-lg text-white/90 max-w-xl text-pretty leading-relaxed">
              Tap any of the five plans below to select it, compare every inclusion, and continue
              directly to WhatsApp with our Aligarh team.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 max-w-6xl mx-auto px-gutter-lg py-section flex flex-col gap-14 w-full">
        {/* Interactive Plan Selector Grid */}
        <section aria-labelledby="plans-heading">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <h2
                id="plans-heading"
                className="font-headline text-headline-lg-mobile md:text-headline-lg text-deep-plum"
              >
                Select a plan
              </h2>
              <p className="font-body text-body-md text-on-surface-variant mt-1">
                Click any plan card to choose it before messaging us.
              </p>
            </div>
            <div
              className={`inline-flex items-center gap-2 rounded-full px-5 py-2 font-label text-label-md transition-all ${
                selectedPlan
                  ? 'bg-deep-plum text-white shadow-md'
                  : 'bg-peach text-deep-plum'
              }`}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                check_circle
              </span>
              <span>
                {selectedPlan
                  ? `Selected: ${selectedPlan.name} (${selectedPlan.fullPrice})`
                  : 'Selected: None yet — pick a plan below'}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-stretch">
            {plans.map((p) => {
              const isSelected = selectedPlan?.id === p.id;
              return (
                <article
                  key={p.id}
                  onClick={() => handleSelectPlan(p)}
                  className={`cursor-pointer rounded-2xl p-6 flex flex-col justify-between gap-6 h-full transition-all duration-state-change border ${
                    isSelected
                      ? 'bg-deep-plum text-white border-deep-plum shadow-xl scale-[1.02]'
                      : 'bg-surface-container-lowest border-outline-variant hover:border-deep-plum/50 hover:shadow-md'
                  }`}
                >
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between gap-2 min-h-[26px]">
                      {p.badge && !isSelected && (
                        <span className="inline-flex rounded-full bg-peach text-deep-plum px-2.5 py-0.5 font-label text-label-sm uppercase font-semibold">
                          {p.badge}
                        </span>
                      )}
                      {!p.badge && !isSelected && (
                        <span className="font-label text-label-sm uppercase text-on-surface-variant">
                          {p.eyebrow}
                        </span>
                      )}
                      {isSelected && (
                        <span className="inline-flex rounded-full bg-sunny-yellow text-deep-plum px-3 py-0.5 font-label text-label-sm uppercase font-bold tracking-wider">
                          Selected
                        </span>
                      )}
                    </div>

                    <h3
                      className={`font-headline text-title-lg ${
                        isSelected ? 'text-white' : 'text-deep-plum'
                      }`}
                    >
                      {p.shortTitle}
                    </h3>

                    <p
                      className={`font-headline text-headline-md tabular-nums ${
                        isSelected ? 'text-white' : 'text-deep-plum'
                      }`}
                    >
                      {p.price}
                      <span
                        className={`font-body text-body-sm ${
                          isSelected ? 'text-white/80' : 'text-on-surface-variant'
                        }`}
                      >
                        {p.unit}
                      </span>
                    </p>

                    <p
                      className={`font-body text-body-sm leading-relaxed ${
                        isSelected ? 'text-white/85' : 'text-on-surface-variant'
                      }`}
                    >
                      {p.desc}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSelectPlan(p);
                    }}
                    className={`inline-flex items-center justify-center rounded-full px-4 py-2.5 font-label text-label-md transition-colors ${
                      isSelected
                        ? 'bg-sunny-yellow text-deep-plum font-semibold shadow-sm'
                        : 'border border-primary text-primary hover:bg-primary hover:text-white'
                    }`}
                  >
                    {isSelected ? 'Selected' : 'Select Plan'}
                  </button>
                </article>
              );
            })}
          </div>

          {/* Dynamic Continue Bar */}
          <div className="mt-8 rounded-2xl bg-surface-container-low border border-outline-variant p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-sm">
            <div>
              <p className="font-title text-title-lg text-deep-plum">
                {selectedPlan
                  ? `${selectedPlan.name} Plan — ${selectedPlan.fullPrice}`
                  : 'Select a plan above to continue'}
              </p>
              <p className="font-body text-body-md text-on-surface-variant">
                No online payment needed—we finalize everything with you on WhatsApp.
              </p>
            </div>
            <button
              type="button"
              onClick={handleContinue}
              className="inline-flex items-center gap-2 rounded-full bg-primary text-on-primary hover:bg-primary-container px-8 py-4 font-label text-label-lg shrink-0 transition-colors shadow-md active:scale-95"
            >
              <span>{selectedPlan ? `Continue with ${selectedPlan.name}` : 'Continue to Contact'}</span>
              <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                arrow_forward
              </span>
            </button>
          </div>
        </section>

        {/* Responsive Comparison Table */}
        <section aria-labelledby="compare-heading" className="flex flex-col gap-6">
          <h2 id="compare-heading" className="font-headline text-headline-md text-deep-plum">
            Full Plan Comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-outline-variant bg-surface-container-lowest shadow-sm">
            <table className="w-full text-left border-collapse min-w-[720px]">
              <thead>
                <tr className="border-b border-outline-variant bg-surface-container-low">
                  <th className="p-4 font-title text-title-md text-deep-plum">Feature</th>
                  <th className="p-4 font-title text-title-md text-deep-plum">Emergency</th>
                  <th className="p-4 font-title text-title-md text-deep-plum">Care Lite</th>
                  <th className="p-4 font-title text-title-md text-deep-plum">Basic</th>
                  <th className="p-4 font-title text-title-md text-deep-plum bg-peach/40">Plus</th>
                  <th className="p-4 font-title text-title-md text-deep-plum">Advance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant font-body text-body-sm text-on-surface-variant">
                <tr>
                  <td className="p-4 font-semibold text-deep-plum">Price</td>
                  <td className="p-4 tabular-nums">₹999/yr</td>
                  <td className="p-4 tabular-nums">₹999/mo</td>
                  <td className="p-4 tabular-nums">₹2,499/mo</td>
                  <td className="p-4 tabular-nums font-bold text-deep-plum bg-peach/30">₹4,499/mo</td>
                  <td className="p-4 tabular-nums">₹6,999/mo</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-deep-plum">Home Visits</td>
                  <td className="p-4">Activation only</td>
                  <td className="p-4">1/week (20–30 min)</td>
                  <td className="p-4">Daily (20–30 min)</td>
                  <td className="p-4 bg-peach/30">Daily (30–45 min)</td>
                  <td className="p-4">Daily (60–90 min)</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-deep-plum">BP &amp; Sugar Checks</td>
                  <td className="p-4">—</td>
                  <td className="p-4">Basic wellbeing</td>
                  <td className="p-4">BP check</td>
                  <td className="p-4 bg-peach/30">BP check</td>
                  <td className="p-4">BP + Blood sugar</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-deep-plum">Medicine &amp; Groceries</td>
                  <td className="p-4">—</td>
                  <td className="p-4">—</td>
                  <td className="p-4">Reminders</td>
                  <td className="p-4 bg-peach/30">2 med + 2 grocery/mo</td>
                  <td className="p-4">2 med + 2 grocery + 4 errands</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-deep-plum">Doctor &amp; Hospital Help</td>
                  <td className="p-4">Emergency only</td>
                  <td className="p-4">—</td>
                  <td className="p-4">—</td>
                  <td className="p-4 bg-peach/30">Appointment booking</td>
                  <td className="p-4">1 escort/mo + admission help</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-deep-plum">24x7 Emergency Helpline</td>
                  <td className="p-4 text-secondary font-medium">Included</td>
                  <td className="p-4 text-secondary font-medium">Included</td>
                  <td className="p-4 text-secondary font-medium">Included</td>
                  <td className="p-4 text-secondary font-medium bg-peach/30">Included</td>
                  <td className="p-4 text-secondary font-bold">Priority response</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-deep-plum">Free Home Sample Collection</td>
                  <td className="p-4">Included</td>
                  <td className="p-4">Included</td>
                  <td className="p-4">Included</td>
                  <td className="p-4 bg-peach/30">Included</td>
                  <td className="p-4">Included</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Non-medical notice */}
        <div className="rounded-2xl bg-surface-container-low border border-outline-variant p-6 flex items-start gap-4">
          <span
            className="material-symbols-outlined text-secondary shrink-0"
            style={{ fontSize: '24px' }}
            aria-hidden="true"
          >
            info
          </span>
          <p className="font-body text-body-md text-deep-plum leading-relaxed">
            <strong>Strictly Non-Medical:</strong> None of these plans include nursing care, injections,
            medical procedures, or live-in/overnight caregiving.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
