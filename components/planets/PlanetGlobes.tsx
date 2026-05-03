export function MarsGlobe() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <defs>
        <radialGradient id="marsGradient" cx="35%" cy="35%">
          <stop offset="0%" stopColor="#E27B58" />
          <stop offset="50%" stopColor="#C1440E" />
          <stop offset="100%" stopColor="#6D2817" />
        </radialGradient>
        <filter id="marsShine">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
        </filter>
      </defs>
      <circle cx="100" cy="100" r="90" fill="url(#marsGradient)" />
      <circle cx="100" cy="100" r="90" fill="rgba(0,0,0,0.1)" />
      <ellipse cx="70" cy="80" rx="25" ry="20" fill="rgba(0,0,0,0.3)" />
      <ellipse cx="120" cy="130" rx="30" ry="15" fill="rgba(0,0,0,0.2)" />
      <ellipse cx="100" cy="50" rx="20" ry="10" fill="rgba(255,255,255,0.1)" filter="url(#marsShine)" />
    </svg>
  );
}

export function JupiterGlobe() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <defs>
        <radialGradient id="jupiterGradient" cx="35%" cy="35%">
          <stop offset="0%" stopColor="#C88B3A" />
          <stop offset="50%" stopColor="#A67035" />
          <stop offset="100%" stopColor="#6B4423" />
        </radialGradient>
      </defs>
      <circle cx="100" cy="100" r="90" fill="url(#jupiterGradient)" />
      <ellipse cx="100" cy="85" rx="85" ry="8" fill="rgba(0,0,0,0.3)" />
      <ellipse cx="100" cy="110" rx="85" ry="6" fill="rgba(0,0,0,0.25)" />
      <ellipse cx="100" cy="70" rx="20" ry="10" fill="rgba(255,255,255,0.15)" />
    </svg>
  );
}

export function EarthGlobe() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <defs>
        <radialGradient id="earthGradient" cx="35%" cy="35%">
          <stop offset="0%" stopColor="#4A9FD8" />
          <stop offset="50%" stopColor="#1E7BB8" />
          <stop offset="100%" stopColor="#0A4A7F" />
        </radialGradient>
      </defs>
      <circle cx="100" cy="100" r="90" fill="url(#earthGradient)" />
      <path d="M60 100 Q70 90 80 100 T100 100" fill="#2D5016" opacity="0.6" />
      <path d="M110 80 Q120 85 130 90" fill="#2D5016" opacity="0.5" />
      <ellipse cx="100" cy="40" rx="25" ry="15" fill="rgba(255,255,255,0.2)" />
    </svg>
  );
}

export function VenusGlobe() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <defs>
        <radialGradient id="venusGradient" cx="35%" cy="35%">
          <stop offset="0%" stopColor="#FFC649" />
          <stop offset="50%" stopColor="#E8A844" />
          <stop offset="100%" stopColor="#C4852D" />
        </radialGradient>
      </defs>
      <circle cx="100" cy="100" r="90" fill="url(#venusGradient)" />
      <circle cx="100" cy="100" r="90" fill="rgba(255,180,0,0.2)" />
      <path d="M50 100 Q100 110 150 100" fill="rgba(0,0,0,0.15)" />
    </svg>
  );
}

export function SaturnGlobe() {
  return (
    <svg viewBox="0 0 240 200" className="w-full h-full">
      <defs>
        <radialGradient id="saturnGradient" cx="35%" cy="35%">
          <stop offset="0%" stopColor="#F4D89F" />
          <stop offset="50%" stopColor="#D4A76A" />
          <stop offset="100%" stopColor="#A88052" />
        </radialGradient>
      </defs>
      <ellipse cx="120" cy="60" rx="85" ry="75" fill="url(#saturnGradient)" />
      <ellipse cx="120" cy="60" rx="85" ry="75" fill="rgba(0,0,0,0.1)" />
      <ellipse cx="120" cy="100" rx="120" ry="20" fill="none" stroke="rgba(180,140,80,0.6)" strokeWidth="8" />
      <ellipse cx="120" cy="50" rx="15" ry="10" fill="rgba(255,255,255,0.15)" />
    </svg>
  );
}

export function UranusGlobe() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <defs>
        <radialGradient id="uranusGradient" cx="35%" cy="35%">
          <stop offset="0%" stopColor="#4FD0E7" />
          <stop offset="50%" stopColor="#2BA3C8" />
          <stop offset="100%" stopColor="#1A6B8A" />
        </radialGradient>
      </defs>
      <circle cx="100" cy="100" r="90" fill="url(#uranusGradient)" />
      <circle cx="100" cy="100" r="90" fill="rgba(100,200,220,0.15)" />
      <ellipse cx="100" cy="85" rx="75" ry="12" fill="rgba(255,255,255,0.1)" opacity="0.5" />
    </svg>
  );
}
