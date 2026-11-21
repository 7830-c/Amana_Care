const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();

const Enquiry = require('./models/Enquiry');

const app = express();

app.use(cors());
app.use(express.json());

// In-Memory store fallback for prototype & local testing when MongoDB is not connected
let isMongoConnected = false;
let fallbackEnquiries = [
  {
    _id: 'mock_1',
    name: 'Tariq Ahmad',
    whatsapp: '+971 50 123 4567',
    country: 'UAE (Dubai)',
    plan: 'Plus',
    parents: 'Parents living in Civil Lines near AMU Circle. Father needs regular BP checks & medicine reminder.',
    status: 'intro_scheduled',
    notes: 'Intro visit set for next Sunday with Tariq on video call.',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2).toISOString(),
  },
  {
    _id: 'mock_2',
    name: 'Dr. Samina Khan',
    whatsapp: '+44 7700 900077',
    country: 'UK (London)',
    plan: 'Basic',
    parents: 'Mother alone in Dodhpur. Needs weekly check-ins, grocery run coordination, and peace of mind.',
    status: 'contacted',
    notes: 'Spoke on WhatsApp. Mother prefers female caregiver.',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 18).toISOString(),
  },
  {
    _id: 'mock_3',
    name: 'Farhan Siddiqui',
    whatsapp: '+1 416 555 0199',
    country: 'Canada (Toronto)',
    plan: 'Emergency Activation',
    parents: 'Medical Road. Looking for 24x7 emergency backup while away.',
    status: 'new',
    notes: 'Awaiting phone confirmation.',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 4).toISOString(),
  },
];

// Database connection helper
const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) {
    isMongoConnected = true;
    return;
  }
  const mongoUri = process.env.MONGODB_URI;
  if (!mongoUri) {
    console.log('[AmanaCare API] MONGODB_URI not set. Running with in-memory resilient storage for rapid prototype testing.');
    isMongoConnected = false;
    return;
  }
  try {
    await mongoose.connect(mongoUri, {
      serverSelectionTimeoutMS: 5000,
    });
    isMongoConnected = true;
    console.log('[AmanaCare API] Connected to MongoDB Atlas');
  } catch (err) {
    console.error('[AmanaCare API] MongoDB connection error:', err.message);
    isMongoConnected = false;
  }
};

// Connect asynchronously
connectDB();

// Health Check
app.get('/api/health', async (req, res) => {
  res.json({
    status: 'online',
    app: 'Amana Care API',
    database: isMongoConnected ? 'MongoDB Atlas' : 'In-Memory Resilient Store (Prototype Mode)',
    timestamp: new Date().toISOString(),
  });
});

// Plans Data
const PLANS_DATA = [
  {
    id: 'emergency',
    title: 'Emergency Activation',
    eyebrow: 'Emergency Cover',
    price: '₹999',
    unit: '/year',
    billing: 'Annual',
    badge: null,
    summary: '24x7 helpline, ambulance/doctor/transport coordination, up to 2 hrs caregiver help during activation.',
    features: [
      '24x7 emergency helpline access',
      'Ambulance & local transport coordination',
      'Doctor & hospital assistance',
      'Up to 2 hrs physical caregiver assistance during one emergency activation',
      'Instant family WhatsApp notifications',
      'Free home sample collection coordination',
    ],
  },
  {
    id: 'care-lite',
    title: 'Care Lite',
    eyebrow: 'Weekly Check-Ins',
    price: '₹999',
    unit: '/month',
    billing: 'Monthly',
    badge: null,
    summary: '1 weekly visit (20–30 min), basic wellbeing & safety check, weekly WhatsApp update.',
    features: [
      '1 weekly home visit (20–30 minutes)',
      'Basic wellbeing & home safety observation',
      'Weekly structured WhatsApp report with photo',
      '24x7 emergency helpline included',
      'Free home sample collection coordination',
      'Consistent police-verified local caregiver',
    ],
  },
  {
    id: 'basic',
    title: 'Basic',
    eyebrow: 'Daily Monitoring',
    price: '₹2,499',
    unit: '/month',
    billing: 'Monthly',
    badge: null,
    summary: 'Daily 20–30 min visits, BP check, medicine reminders, 5-point safety check, daily WhatsApp report.',
    features: [
      'Daily home visits (20–30 minutes)',
      'Daily blood pressure monitoring logged',
      'Medicine routine checking & reminders',
      '5-point home safety observation',
      'Daily WhatsApp report after every visit',
      '24x7 emergency helpline included',
      'Free home sample collection coordination',
    ],
  },
  {
    id: 'plus',
    title: 'Plus',
    eyebrow: 'Most Chosen',
    price: '₹4,499',
    unit: '/month',
    billing: 'Monthly',
    badge: 'Most Chosen',
    summary: 'All Basic + 30–45 min visits, 2 medicine & 2 grocery trips/mo, pill-box audit, doctor coordination.',
    features: [
      'Daily visits (30–45 minutes) with companionship',
      'Daily blood pressure logs & weekly review',
      'Weekly pill-box organizer verification',
      '2 local medicine pickup errands per month',
      '2 grocery or essentials shopping trips per month',
      'Doctor appointment scheduling & hospital paperwork',
      'Daily WhatsApp updates with visit photos',
      '24x7 emergency helpline & priority ambulance support',
      'Free home sample collection coordination',
    ],
  },
  {
    id: 'advance',
    title: 'Advance',
    eyebrow: 'Comprehensive Care',
    price: '₹6,999',
    unit: '/month',
    billing: 'Monthly',
    badge: 'Most Comprehensive',
    summary: 'All Plus + 60–90 min visits, 1 doctor escort/mo, blood sugar check, admission help, 4 extra errands.',
    features: [
      'Daily unhurried visits (60–90 minutes)',
      'Blood pressure + blood sugar check support',
      '1 dedicated caregiver doctor/clinic escort per month',
      'Hospital admission & discharge paperwork help',
      'Weekly pill-box audit & prescription refill coordination',
      '4 custom errands (bank, bills, pharmacy, groceries)',
      'Comprehensive weekly health trend summary for children abroad',
      'Priority 24x7 emergency coordination',
      'Free home sample collection coordination',
    ],
  },
];

app.get('/api/plans', (req, res) => {
  res.json({ success: true, data: PLANS_DATA });
});

// Services Data
const SERVICES_DATA = [
  {
    id: 'home-visits',
    num: '01',
    title: 'Regular Home Visits',
    color: 'blush-pink',
    icon: 'home',
    description: 'A consistent staff member visits to spend time with parents, share tea or conversation, and spot subtle changes in mood, appetite, or daily routine.',
  },
  {
    id: 'wellbeing',
    num: '02',
    title: 'Wellbeing Monitoring',
    color: 'sunny-yellow',
    icon: 'monitor_heart',
    description: 'Basic blood pressure checks (and blood sugar checks on the Advance plan) logged consistently to track trends and share with family.',
  },
  {
    id: 'medicine',
    num: '03',
    title: 'Medicine Reminders',
    color: 'peach',
    icon: 'medication',
    description: 'Verifying that the right medicines are taken on time, auditing pill-boxes weekly on Plus & Advance, and alerting family when refills are needed.',
  },
  {
    id: 'family-updates',
    num: '04',
    title: 'Family Updates',
    color: 'soft-lime',
    icon: 'chat',
    description: 'Structured WhatsApp visit reports (and photos, depending on the plan) sent after visits so children abroad stay calmly informed.',
  },
  {
    id: 'hospital-coordination',
    num: '05',
    title: 'Doctor & Hospital Coordination',
    color: 'blush-pink',
    icon: 'calendar_month',
    description: 'Booking clinic appointments, handling hospital paperwork, collecting test reports, and escorting parents when they need a steady hand.',
  },
  {
    id: 'emergency-coordination',
    num: '06',
    title: 'Emergency Coordination',
    color: 'sunny-yellow',
    icon: 'emergency',
    description: 'A 24x7 helpline that arranges ambulances, local transport, doctor or hospital assistance, and immediate alerts to your family.',
  },
];

app.get('/api/services', (req, res) => {
  res.json({ success: true, data: SERVICES_DATA });
});

// FAQs Data
const FAQS_DATA = [
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

app.get('/api/faqs', (req, res) => {
  res.json({ success: true, data: FAQS_DATA });
});

// Create Customer Enquiry
app.post('/api/enquiries', async (req, res) => {
  try {
    const { name, whatsapp, country, plan, parents } = req.body;
    if (!name || !whatsapp || !parents) {
      return res.status(400).json({
        success: false,
        message: 'Name, WhatsApp number, and parents details are required.',
      });
    }

    const newEnquiryData = {
      name: name.trim(),
      whatsapp: whatsapp.trim(),
      country: country || 'UAE',
      plan: plan || 'Not sure yet — help me choose',
      parents: parents.trim(),
      status: 'new',
      notes: '',
      createdAt: new Date(),
    };

    if (isMongoConnected) {
      const doc = await Enquiry.create(newEnquiryData);
      return res.status(201).json({
        success: true,
        message: 'Enquiry submitted successfully.',
        data: doc,
      });
    } else {
      const mockDoc = {
        _id: 'mock_' + Date.now(),
        ...newEnquiryData,
        createdAt: newEnquiryData.createdAt.toISOString(),
      };
      fallbackEnquiries.unshift(mockDoc);
      return res.status(201).json({
        success: true,
        message: 'Enquiry saved to prototype store.',
        data: mockDoc,
      });
    }
  } catch (error) {
    console.error('Error creating enquiry:', error);
    res.status(500).json({ success: false, message: 'Server error while processing enquiry.' });
  }
});

// List Enquiries (For Team Admin Portal)
app.get('/api/enquiries', async (req, res) => {
  try {
    const { status, plan, search } = req.query;

    if (isMongoConnected) {
      const filter = {};
      if (status && status !== 'all') filter.status = status;
      if (plan && plan !== 'all') filter.plan = plan;
      if (search) {
        filter.$or = [
          { name: { $regex: search, $options: 'i' } },
          { whatsapp: { $regex: search, $options: 'i' } },
          { parents: { $regex: search, $options: 'i' } },
          { country: { $regex: search, $options: 'i' } },
        ];
      }
      const list = await Enquiry.find(filter).sort({ createdAt: -1 });
      return res.json({ success: true, count: list.length, data: list });
    } else {
      let filtered = [...fallbackEnquiries];
      if (status && status !== 'all') {
        filtered = filtered.filter(item => item.status === status);
      }
      if (plan && plan !== 'all') {
        filtered = filtered.filter(item => item.plan === plan);
      }
      if (search) {
        const s = search.toLowerCase();
        filtered = filtered.filter(item =>
          item.name.toLowerCase().includes(s) ||
          item.whatsapp.toLowerCase().includes(s) ||
          item.parents.toLowerCase().includes(s) ||
          item.country.toLowerCase().includes(s)
        );
      }
      return res.json({ success: true, count: filtered.length, data: filtered });
    }
  } catch (error) {
    console.error('Error fetching enquiries:', error);
    res.status(500).json({ success: false, message: 'Server error while fetching enquiries.' });
  }
});

// Update Enquiry Status or Team Notes
app.patch('/api/enquiries/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { status, notes } = req.body;

    if (isMongoConnected) {
      const doc = await Enquiry.findByIdAndUpdate(
        id,
        { ...(status && { status }), ...(notes !== undefined && { notes }) },
        { new: true }
      );
      if (!doc) return res.status(404).json({ success: false, message: 'Enquiry not found.' });
      return res.json({ success: true, data: doc });
    } else {
      const index = fallbackEnquiries.findIndex(item => item._id === id);
      if (index === -1) return res.status(404).json({ success: false, message: 'Enquiry not found.' });
      if (status) fallbackEnquiries[index].status = status;
      if (notes !== undefined) fallbackEnquiries[index].notes = notes;
      return res.json({ success: true, data: fallbackEnquiries[index] });
    }
  } catch (error) {
    console.error('Error updating enquiry:', error);
    res.status(500).json({ success: false, message: 'Server error while updating enquiry.' });
  }
});

// Delete Enquiry
app.delete('/api/enquiries/:id', async (req, res) => {
  try {
    const { id } = req.params;
    if (isMongoConnected) {
      await Enquiry.findByIdAndDelete(id);
    } else {
      fallbackEnquiries = fallbackEnquiries.filter(item => item._id !== id);
    }
    res.json({ success: true, message: 'Enquiry deleted.' });
  } catch (error) {
    console.error('Error deleting enquiry:', error);
    res.status(500).json({ success: false, message: 'Server error.' });
  }
});

module.exports = app;
