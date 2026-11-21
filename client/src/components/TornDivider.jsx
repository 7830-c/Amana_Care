import React from 'react';

/**
 * Torn paper jagged edge SVG divider.
 * @param {'down' | 'up'} direction - 'down' points down into light section; 'up' covers top of dark section.
 * @param {string} fillColor - Tailwind fill color class, defaults to 'fill-cream'
 * @param {string} className - Additional CSS classes
 */
export default function TornDivider({ direction = 'down', fillColor = 'fill-cream', className = '' }) {
  if (direction === 'up') {
    return (
      <svg
        viewBox="0 0 1440 48"
        preserveAspectRatio="none"
        className={`w-full h-8 md:h-11 block ${fillColor} relative z-10 ${className}`}
        aria-hidden="true"
      >
        <path d="M0,0 L1440,0 L1440,26 L1404,12 L1368,30 L1332,14 L1296,36 L1260,12 L1224,30 L1188,16 L1152,34 L1116,12 L1080,28 L1044,14 L1008,34 L972,12 L936,30 L900,16 L864,34 L828,10 L792,28 L756,14 L720,34 L684,12 L648,30 L612,16 L576,36 L540,12 L504,28 L468,14 L432,34 L396,14 L360,32 L324,10 L288,28 L252,16 L216,36 L180,12 L144,30 L108,16 L72,34 L36,12 L0,24 Z" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 1440 48"
      preserveAspectRatio="none"
      className={`w-full h-8 md:h-11 block ${fillColor} relative z-10 ${className}`}
      aria-hidden="true"
    >
      <path d="M0,24 L36,38 L72,14 L108,34 L144,18 L180,40 L216,12 L252,32 L288,20 L324,42 L360,16 L396,36 L432,14 L468,38 L504,22 L540,40 L576,12 L612,34 L648,18 L684,38 L720,16 L756,36 L792,20 L828,42 L864,14 L900,34 L936,18 L972,38 L1008,16 L1044,36 L1080,22 L1116,40 L1152,14 L1188,34 L1224,18 L1260,38 L1296,12 L1332,36 L1368,20 L1404,34 L1440,18 L1440,48 L0,48 Z" />
    </svg>
  );
}
