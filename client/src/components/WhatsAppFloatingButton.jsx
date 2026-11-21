import React from 'react';

export default function WhatsAppFloatingButton() {
  const whatsappUrl =
    'https://wa.me/919999999999?text=Hello%20Amana%20Care%2C%20I%20would%20like%20to%20learn%20more%20about%20your%20elder%20support%20services%20in%20Aligarh.';

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Amana Care on WhatsApp"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2.5 rounded-full bg-[#25D366] text-white px-5 py-3 shadow-2xl hover:scale-105 active:scale-95 transition-all duration-state-change font-label text-label-md group"
    >
      <span className="material-symbols-outlined text-white" style={{ fontSize: '24px' }}>
        chat
      </span>
      <span className="font-semibold text-white tracking-wide">Talk on WhatsApp</span>
    </a>
  );
}
