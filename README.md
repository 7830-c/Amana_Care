# Amana Care — Full-Stack MERN Website & Prototype

> **Non-medical elder support in Aligarh, Uttar Pradesh**  
> *"Because being far away should never mean being helpless."*

Built from the Google Stitch design system and converted into a production-ready, full-stack **MERN (MongoDB, Express, React, Node.js)** web application with zero-config **Vercel** deployment.

---

## 🌟 Overview & Key Features

1. **Complete 7-Page Website**:
   - **Home (`/`)**: Hero with video call visual, The Distance problem, Amana Care bridge, 6 pastel service cards, 5 plan previews, dark stats banner (24x7, 5 plans, 100% verified), free home sample collection feature, 6 trust badges, 3 far-away child question cards, pre-footer CTA & footer with torn-paper dividers.
   - **About (`/about`)**: Our story, 4 promises (Consistent Faces, Radical Honesty, Respect & Dignity, Direct Updates), and strict non-medical boundary notice.
   - **Services (`/services`)**: 6 core non-medical elder care services + free home lab sample collection add-on.
   - **Plans & Pricing (`/plans`)**: Interactive plan selector (Emergency, Care Lite, Basic, Plus [Most Chosen], Advance), live selection pill, and responsive full comparison matrix.
   - **Home Sample Collection (`/sample-collection`)**: 3-step process, free coordination vs actual lab fees explanation, and direct WhatsApp booking.
   - **FAQ (`/faq`)**: 7 expandable accordion answers addressing caregiver verification, NRI updates, pricing, and boundaries.
   - **Contact & WhatsApp Enquiry (`/contact`)**: Form with country selection (UAE, UK, USA, Canada, India), locality details, direct API sync with MongoDB, and instant pre-filled WhatsApp link opener.
   - **Team Leads Portal (`/admin`)**: Dedicated dashboard for the team to view submitted enquiries, search/filter by status and plan, update lead statuses, write team notes, and click to WhatsApp clients directly.

2. **Google Stitch Handcrafted Design System**:
   - **Colors**: Cream (`#FBF8F1`), Deep Plum (`#3D0F2F`), Blush Pink (`#FBD0DE`), Sunny Yellow (`#F3FA6E`), Peach (`#FBE6DA`), Soft Lime (`#E6F2A3`), Care Orange (`#F26A3D`).
   - **Typography**: Newsreader (warm editorial headline serif) + Figtree (clean, friendly body sans-serif).
   - **Iconography**: Material Symbols Outlined.
   - **Signature Torn Paper Dividers**: SVG jagged borders separating dark plum and cream sections.

3. **Backend & Architecture**:
   - **Express.js API** in `server/app.js` with endpoints for enquiries, plans, services, and healthchecks.
   - **MongoDB Atlas integration** via Mongoose with auto-fallback to resilient in-memory storage (allowing the prototype to run seamlessly with or without a live database URI).
   - **Vercel Serverless Ready**: `api/index.js` exports the Express app, and `vercel.json` configures routing and rewrites.

---

## 🚀 Quick Start (Local Development)

### 1. Install Dependencies
```bash
# From the project root:
npm install
cd server && npm install
cd ../client && npm install
cd ..
```

### 2. Configure Environment Variables (Optional)
Copy `.env.example` to `.env`:
```env
PORT=5000
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/amanacare?retryWrites=true&w=majority
WHATSAPP_PHONE=919999999999
```
*(Note: If `MONGODB_URI` is omitted, the application automatically uses resilient prototype storage with sample data.)*

### 3. Run the Development Servers
```bash
npm run dev
```
- **Frontend**: [http://localhost:5173](http://localhost:5173)
- **Backend API**: [http://localhost:5000/api/health](http://localhost:5000/api/health)
- **Team Portal**: [http://localhost:5173/admin](http://localhost:5173/admin)

---

## ☁️ Deploy to Vercel

### Option A: Via Vercel CLI
```bash
npm i -g vercel
vercel
```

### Option B: Via GitHub & Vercel Dashboard
1. Push this repository to GitHub.
2. In [Vercel Dashboard](https://vercel.com), click **Add New Project** and select this repo.
3. Keep default settings (the included `vercel.json` automatically configures the frontend build and `/api` serverless routes).
4. Add environment variables if using MongoDB Atlas (`MONGODB_URI`).
5. Click **Deploy**!

---

## 📁 Project Structure

```
AmanaCare/
├── api/
│   └── index.js             # Vercel Serverless Function entry point
├── client/                  # Frontend (React + Vite + Tailwind CSS)
│   ├── public/              # Static assets & cropped high-res photography
│   ├── src/
│   │   ├── components/      # Navbar, Footer, TornDivider, WhatsApp button
│   │   ├── pages/           # Home, About, Services, Plans, Sample, FAQ, Contact, Admin
│   │   ├── App.jsx          # Route definitions & layout
│   │   ├── main.jsx         # React DOM mount point
│   │   └── index.css        # Tailwind directives & styles
│   ├── tailwind.config.js   # Stitch colors, typography & spacing
│   └── vite.config.js       # Vite bundler & API proxy
├── server/                  # Backend (Node.js + Express)
│   ├── models/              # Mongoose Enquiry schema
│   ├── app.js               # Express application & API routes
│   └── index.js             # Local/production server launcher
├── vercel.json              # Vercel deployment configuration
├── package.json             # Root scripts
└── README.md
```

---

## 👥 Sharing the Prototype With Your Team
1. Share the **Live Website link**: team members can click around all 7 pages, test the interactive plan selector, and submit test enquiries.
2. Direct your team to `/admin`: they can view submitted customer enquiries in real-time, filter by country (UAE, UK, USA, Canada, India), change lead statuses, and test the 1-click WhatsApp customer contact button!
