export function SolarSystemVisualization() {
  return (
    <svg viewBox="0 0 600 400" className="w-full h-full">
      <defs>
        <radialGradient id="sunGradient" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#FDB813" />
          <stop offset="70%" stopColor="#FD8D13" />
          <stop offset="100%" stopColor="#8B5A00" />
        </radialGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Orbital paths */}
      <circle cx="300" cy="200" r="80" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      <circle cx="300" cy="200" r="120" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
      <circle cx="300" cy="200" r="160" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
      <circle cx="300" cy="200" r="200" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />

      {/* Sun */}
      <circle cx="300" cy="200" r="20" fill="url(#sunGradient)" filter="url(#glow)" />
      <circle cx="300" cy="200" r="25" fill="rgba(255,200,0,0.3)" />

      {/* Mercury - closest */}
      <circle cx="370" cy="200" r="4" fill="#8C7853" />

      {/* Venus */}
      <circle cx="300" cy="105" r="8" fill="#FFC649" />

      {/* Earth */}
      <circle cx="240" cy="140" r="8" fill="#4A9FD8" />

      {/* Mars */}
      <circle cx="180" cy="200" r="6" fill="#E27B58" />

      {/* Jupiter */}
      <circle cx="240" cy="300" r="18" fill="#C88B3A" />
      <ellipse cx="240" cy="295" rx="18" ry="3" fill="rgba(0,0,0,0.3)" />

      {/* Saturn */}
      <circle cx="360" cy="320" r="15" fill="#F4D89F" />
      <ellipse cx="360" cy="320" rx="35" ry="8" fill="none" stroke="rgba(180,140,80,0.5)" strokeWidth="3" />

      {/* Labels */}
      <text x="370" y="220" fontSize="10" fill="rgba(255,255,255,0.6)" textAnchor="middle">
        Mercury
      </text>
      <text x="300" y="85" fontSize="10" fill="rgba(255,255,255,0.6)" textAnchor="middle">
        Venus
      </text>
      <text x="220" y="120" fontSize="10" fill="rgba(255,255,255,0.6)" textAnchor="middle">
        Earth
      </text>
      <text x="150" y="220" fontSize="10" fill="rgba(255,255,255,0.6)" textAnchor="middle">
        Mars
      </text>
      <text x="220" y="330" fontSize="10" fill="rgba(255,255,255,0.6)" textAnchor="middle">
        Jupiter
      </text>
      <text x="360" y="360" fontSize="10" fill="rgba(255,255,255,0.6)" textAnchor="middle">
        Saturn
      </text>
    </svg>
  );
}
