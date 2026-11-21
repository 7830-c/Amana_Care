import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Admin() {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterPlan, setFilterPlan] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [systemHealth, setSystemHealth] = useState(null);

  const fetchEnquiries = async () => {
    setLoading(true);
    try {
      const url = new URL('/api/enquiries', window.location.origin);
      if (filterStatus !== 'all') url.searchParams.set('status', filterStatus);
      if (filterPlan !== 'all') url.searchParams.set('plan', filterPlan);
      if (searchTerm) url.searchParams.set('search', searchTerm);

      const res = await fetch(url);
      const data = await res.json();
      if (data.success) {
        setEnquiries(data.data || []);
      }
    } catch (err) {
      console.error('Failed to load enquiries', err);
    } finally {
      setLoading(false);
    }
  };

  const fetchHealth = async () => {
    try {
      const res = await fetch('/api/health');
      const data = await res.json();
      setSystemHealth(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchHealth();
    fetchEnquiries();
  }, [filterStatus, filterPlan, searchTerm]);

  const handleStatusChange = async (id, newStatus) => {
    try {
      const res = await fetch(`/api/enquiries/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });
      const data = await res.json();
      if (data.success) {
        setEnquiries((prev) =>
          prev.map((item) => (item._id === id ? { ...item, status: newStatus } : item))
        );
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleNotesChange = async (id, notes) => {
    try {
      await fetch(`/api/enquiries/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ notes }),
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this enquiry?')) return;
    try {
      const res = await fetch(`/api/enquiries/${id}`, { method: 'DELETE' });
      if (res.ok) {
        setEnquiries((prev) => prev.filter((item) => item._id !== id));
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleSeedDemo = async () => {
    const demoItems = [
      {
        name: 'Adnan Zafar',
        whatsapp: '+971 55 987 6543',
        country: 'UAE (Abu Dhabi)',
        plan: 'Plus',
        parents: 'Parents living in Civil Lines near Amir Nishan. Need daily BP check and grocery escort.',
      },
      {
        name: 'Sobia Farooq',
        whatsapp: '+1 415 678 1234',
        country: 'USA (San Francisco)',
        plan: 'Advance',
        parents: 'Mother alone in Dodhpur. Needs weekly pill-box organizer check & hospital checkup escort.',
      },
    ];

    for (const item of demoItems) {
      await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item),
      });
    }
    fetchEnquiries();
  };

  const statusColors = {
    new: 'bg-sunny-yellow text-deep-plum font-semibold',
    contacted: 'bg-peach text-deep-plum font-semibold',
    intro_scheduled: 'bg-soft-lime text-deep-plum font-semibold',
    subscribed: 'bg-green-100 text-green-900 font-bold',
    closed: 'bg-gray-200 text-gray-800',
  };

  return (
    <div className="min-h-screen bg-surface-container-low font-body text-deep-plum">
      {/* Top Header */}
      <header className="bg-deep-plum text-white px-6 py-4 shadow-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-2 group">
              <span className="material-symbols-outlined text-white" style={{ fontSize: '24px' }}>
                cardiology
              </span>
              <span className="font-headline text-xl text-white font-bold">Amana Care</span>
            </Link>
            <span className="text-white/40">|</span>
            <span className="font-label text-sm uppercase tracking-wider text-sunny-yellow font-semibold">
              Team Leads Portal
            </span>
          </div>

          <div className="flex items-center gap-4">
            {systemHealth && (
              <div className="text-xs bg-white/10 px-3 py-1.5 rounded-full text-white/80 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                <span>{systemHealth.database}</span>
              </div>
            )}
            <Link
              to="/"
              className="text-sm font-label text-white/80 hover:text-white underline underline-offset-4"
            >
              &larr; View Live Site
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8 flex flex-col gap-8">
        {/* Metric Summary Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="rounded-2xl bg-white p-5 border border-outline-variant shadow-sm">
            <p className="font-label text-xs uppercase text-on-surface-variant font-bold">Total Leads</p>
            <p className="font-headline text-3xl font-bold text-deep-plum mt-1">{enquiries.length}</p>
          </div>
          <div className="rounded-2xl bg-sunny-yellow/30 p-5 border border-sunny-yellow shadow-sm">
            <p className="font-label text-xs uppercase text-deep-plum font-bold">New Inquiries</p>
            <p className="font-headline text-3xl font-bold text-deep-plum mt-1">
              {enquiries.filter((e) => e.status === 'new').length}
            </p>
          </div>
          <div className="rounded-2xl bg-soft-lime/40 p-5 border border-soft-lime shadow-sm">
            <p className="font-label text-xs uppercase text-deep-plum font-bold">Intro Scheduled</p>
            <p className="font-headline text-3xl font-bold text-deep-plum mt-1">
              {enquiries.filter((e) => e.status === 'intro_scheduled').length}
            </p>
          </div>
          <div className="rounded-2xl bg-peach/40 p-5 border border-peach shadow-sm">
            <p className="font-label text-xs uppercase text-deep-plum font-bold">Active Subscriptions</p>
            <p className="font-headline text-3xl font-bold text-deep-plum mt-1">
              {enquiries.filter((e) => e.status === 'subscribed').length}
            </p>
          </div>
        </div>

        {/* Action / Filter Bar */}
        <div className="rounded-2xl bg-white p-6 border border-outline-variant shadow-sm flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <input
              type="text"
              placeholder="Search by name, phone, locality..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="rounded-xl border border-outline-variant bg-surface px-4 py-2 font-body text-sm w-full sm:w-64 focus:outline-none focus:border-primary"
            />

            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="rounded-xl border border-outline-variant bg-surface px-3 py-2 font-body text-sm focus:outline-none"
            >
              <option value="all">All Statuses</option>
              <option value="new">New</option>
              <option value="contacted">Contacted</option>
              <option value="intro_scheduled">Intro Scheduled</option>
              <option value="subscribed">Subscribed</option>
              <option value="closed">Closed</option>
            </select>

            <select
              value={filterPlan}
              onChange={(e) => setFilterPlan(e.target.value)}
              className="rounded-xl border border-outline-variant bg-surface px-3 py-2 font-body text-sm focus:outline-none"
            >
              <option value="all">All Plans</option>
              <option value="Emergency Activation">Emergency Activation</option>
              <option value="Care Lite">Care Lite</option>
              <option value="Basic">Basic</option>
              <option value="Plus">Plus</option>
              <option value="Advance">Advance</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleSeedDemo}
              className="inline-flex items-center gap-1.5 rounded-full border border-primary text-primary hover:bg-primary/5 px-4 py-2 font-label text-xs font-semibold"
            >
              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>
                add
              </span>
              <span>Add Demo Lead</span>
            </button>
            <button
              type="button"
              onClick={fetchEnquiries}
              className="inline-flex items-center gap-1.5 rounded-full bg-deep-plum text-white px-4 py-2 font-label text-xs font-semibold hover:bg-primary-container"
            >
              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>
                refresh
              </span>
              <span>Refresh</span>
            </button>
          </div>
        </div>

        {/* Leads Table / Cards */}
        {loading ? (
          <div className="text-center py-12 text-on-surface-variant">Loading enquiries...</div>
        ) : enquiries.length === 0 ? (
          <div className="text-center py-16 rounded-2xl bg-white border border-outline-variant p-8">
            <span className="material-symbols-outlined text-4xl text-outline mb-2">inbox</span>
            <h3 className="font-headline text-xl">No enquiries found</h3>
            <p className="font-body text-sm text-on-surface-variant mt-1">
              Submit an enquiry on the Contact page or click "Add Demo Lead" above.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            {enquiries.map((item) => (
              <div
                key={item._id}
                className="rounded-2xl bg-white border border-outline-variant p-6 shadow-sm flex flex-col lg:flex-row justify-between gap-6 hover:shadow-md transition-shadow"
              >
                {/* Left: Lead Details */}
                <div className="flex-1 flex flex-col gap-3">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-headline text-xl text-deep-plum font-bold">{item.name}</h3>
                    <span
                      className={`font-label text-xs px-3 py-1 rounded-full uppercase tracking-wider ${
                        statusColors[item.status] || 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {item.status?.replace('_', ' ')}
                    </span>
                    <span className="font-label text-xs px-2.5 py-0.5 rounded-full bg-peach text-deep-plum font-semibold">
                      {item.plan}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-on-surface-variant">
                    <span className="flex items-center gap-1 font-semibold text-deep-plum">
                      <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>
                        call
                      </span>
                      {item.whatsapp}
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>
                        public
                      </span>
                      {item.country}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-outline">
                      <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>
                        schedule
                      </span>
                      {new Date(item.createdAt).toLocaleDateString()} at{' '}
                      {new Date(item.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>

                  <div className="rounded-xl bg-surface p-4 border border-outline-variant/60">
                    <p className="font-label text-xs font-bold uppercase text-outline mb-1">
                      Parents &amp; Locality
                    </p>
                    <p className="font-body text-sm text-deep-plum leading-relaxed">{item.parents}</p>
                  </div>
                </div>

                {/* Right: Team Actions & Notes */}
                <div className="lg:w-80 flex flex-col justify-between gap-4 border-t lg:border-t-0 lg:border-l border-outline-variant/60 pt-4 lg:pt-0 lg:pl-6">
                  <div className="flex flex-col gap-2">
                    <label className="font-label text-xs uppercase font-bold text-outline">
                      Update Status
                    </label>
                    <select
                      value={item.status}
                      onChange={(e) => handleStatusChange(item._id, e.target.value)}
                      className="rounded-xl border border-outline-variant bg-surface px-3 py-2 text-sm font-label focus:outline-none"
                    >
                      <option value="new">New</option>
                      <option value="contacted">Contacted</option>
                      <option value="intro_scheduled">Intro Scheduled</option>
                      <option value="subscribed">Subscribed</option>
                      <option value="closed">Closed</option>
                    </select>

                    <label className="font-label text-xs uppercase font-bold text-outline mt-2">
                      Team Notes
                    </label>
                    <textarea
                      rows="2"
                      placeholder="Add internal notes..."
                      defaultValue={item.notes || ''}
                      onBlur={(e) => handleNotesChange(item._id, e.target.value)}
                      className="rounded-xl border border-outline-variant bg-surface p-2.5 text-xs font-body focus:outline-none"
                    ></textarea>
                  </div>

                  <div className="flex items-center justify-between gap-2 pt-2 border-t border-outline-variant/40">
                    <a
                      href={`https://wa.me/${item.whatsapp.replace(/[^0-9]/g, '')}?text=Hello%20${encodeURIComponent(
                        item.name
                      )}%2C%20thank%20you%20for%20contacting%20Amana%20Care%20regarding%20elder%20support%20in%20Aligarh.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-[#25D366] text-white hover:bg-[#1EBE5D] px-4 py-2 font-label text-xs font-semibold shadow-sm transition-colors"
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>
                        chat
                      </span>
                      <span>WhatsApp Client</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => handleDelete(item._id)}
                      className="text-xs text-red-600 hover:text-red-800 p-2"
                      title="Delete enquiry"
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                        delete
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
