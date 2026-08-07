// A "3D-look" illustration built from layered SVG shapes with gradients and
// offset shadows to fake depth (isometric crate + spilling beans) — no
// external 3D library needed, loads instantly, and matches the site palette.
export default function CoffeeIllustration() {
  return (
    <div className="coffee3d" aria-hidden="true">
      <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="crateTop" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#c9973f" />
            <stop offset="100%" stopColor="#9c7433" />
          </linearGradient>
          <linearGradient id="crateLeft" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#6b4a1f" />
            <stop offset="100%" stopColor="#4a3115" />
          </linearGradient>
          <linearGradient id="crateRight" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#8a611f" />
            <stop offset="100%" stopColor="#5c3f16" />
          </linearGradient>
          <radialGradient id="bean" cx="35%" cy="30%" r="75%">
            <stop offset="0%" stopColor="#e0b25c" />
            <stop offset="60%" stopColor="#8a5a1f" />
            <stop offset="100%" stopColor="#4a3115" />
          </radialGradient>
          <filter id="soft" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="14" stdDeviation="14" floodColor="#000" floodOpacity="0.35" />
          </filter>
        </defs>

        {/* ground shadow */}
        <ellipse cx="200" cy="330" rx="140" ry="24" fill="#000" opacity="0.25" />

        {/* isometric crate */}
        <g filter="url(#soft)">
          <polygon points="200,120 310,180 200,240 90,180" fill="url(#crateTop)" />
          <polygon points="90,180 200,240 200,320 90,260" fill="url(#crateLeft)" />
          <polygon points="310,180 200,240 200,320 310,260" fill="url(#crateRight)" />
          {/* slats */}
          <line x1="110" y1="192" x2="110" y2="272" stroke="#3a2712" strokeWidth="3" opacity="0.5" />
          <line x1="140" y1="209" x2="140" y2="289" stroke="#3a2712" strokeWidth="3" opacity="0.5" />
          <line x1="260" y1="209" x2="260" y2="289" stroke="#3a2712" strokeWidth="3" opacity="0.5" />
          <line x1="290" y1="192" x2="290" y2="272" stroke="#3a2712" strokeWidth="3" opacity="0.5" />
        </g>

        {/* spilling coffee beans, layered for depth */}
        {[
          [150, 130, 16, -20],
          [185, 108, 20, 10],
          [222, 122, 15, 40],
          [170, 90, 12, -50],
          [205, 150, 14, 5],
          [120, 155, 13, 25],
          [255, 150, 17, -15],
          [200, 70, 11, 60],
        ].map(([cx, cy, r, rot], i) => (
          <g key={i} transform={`translate(${cx} ${cy}) rotate(${rot})`}>
            <ellipse rx={r} ry={r * 0.72} fill="url(#bean)" />
            <path
              d={`M0 ${-r * 0.6} Q ${r * 0.15} 0 0 ${r * 0.6}`}
              stroke="#2a1c0c"
              strokeWidth={r * 0.14}
              fill="none"
              strokeLinecap="round"
            />
          </g>
        ))}
      </svg>

      <style>{`
        .coffee3d {
          width: 100%;
          max-width: 340px;
          margin: 0 auto;
          animation: float 6s ease-in-out infinite;
        }
        .coffee3d svg { width: 100%; height: auto; display: block; }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @media (prefers-reduced-motion: reduce) {
          .coffee3d { animation: none; }
        }
      `}</style>
    </div>
  );
}