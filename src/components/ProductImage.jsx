const screen = "#6366f1";
const dark = "#1f2937";

function Art({ type }) {
  switch (type) {
    case "phone":
      return (
        <g>
          <rect x="140" y="40" width="120" height="220" rx="24" fill={dark} />
          <rect x="148" y="50" width="104" height="200" rx="18" fill={screen} />
          <rect x="190" y="56" width="20" height="6" rx="3" fill={dark} />
          <rect x="158" y="80" width="84" height="40" rx="10" fill="#fff" opacity="0.9" />
          <rect x="158" y="130" width="38" height="38" rx="10" fill="#fff" opacity="0.6" />
          <rect x="204" y="130" width="38" height="38" rx="10" fill="#fff" opacity="0.6" />
          <rect x="158" y="178" width="38" height="38" rx="10" fill="#fff" opacity="0.6" />
          <rect x="204" y="178" width="38" height="38" rx="10" fill="#fff" opacity="0.6" />
        </g>
      );
    case "tablet":
      return (
        <g>
          <rect x="95" y="50" width="210" height="200" rx="20" fill={dark} />
          <rect x="106" y="61" width="188" height="178" rx="12" fill={screen} />
          <circle cx="200" cy="150" r="42" fill="#fff" opacity="0.85" />
          <rect x="124" y="82" width="70" height="10" rx="5" fill="#fff" opacity="0.7" />
          <rect x="124" y="208" width="152" height="10" rx="5" fill="#fff" opacity="0.5" />
        </g>
      );
    case "laptop":
    case "gaming":
      return (
        <g>
          <rect x="105" y="62" width="190" height="124" rx="10" fill={dark} />
          <rect x="114" y="71" width="172" height="106" rx="5" fill={type === "gaming" ? "#111827" : screen} />
          {type === "gaming" ? (
            <g>
              <rect x="130" y="90" width="60" height="8" rx="4" fill="#22d3ee" />
              <rect x="130" y="108" width="100" height="8" rx="4" fill="#a78bfa" />
              <rect x="130" y="126" width="80" height="8" rx="4" fill="#f472b6" />
            </g>
          ) : (
            <g>
              <rect x="130" y="90" width="80" height="10" rx="5" fill="#fff" opacity="0.85" />
              <rect x="130" y="110" width="120" height="8" rx="4" fill="#fff" opacity="0.55" />
              <rect x="130" y="128" width="100" height="8" rx="4" fill="#fff" opacity="0.55" />
            </g>
          )}
          <path d="M70 196 H330 L318 212 Q316 216 310 216 H90 Q84 216 82 212 Z" fill="#9ca3af" />
          <rect x="175" y="196" width="50" height="5" rx="2.5" fill="#6b7280" />
          {type === "gaming" && <rect x="90" y="214" width="220" height="4" rx="2" fill="#a78bfa" />}
        </g>
      );
    case "headphones":
      return (
        <g>
          <path d="M115 180 A85 85 0 0 1 285 180" fill="none" stroke={dark} strokeWidth="16" strokeLinecap="round" />
          <rect x="95" y="150" width="46" height="90" rx="22" fill={screen} />
          <rect x="259" y="150" width="46" height="90" rx="22" fill={screen} />
          <rect x="104" y="162" width="28" height="66" rx="14" fill={dark} opacity="0.35" />
          <rect x="268" y="162" width="28" height="66" rx="14" fill={dark} opacity="0.35" />
        </g>
      );
    case "earbuds":
      return (
        <g>
          <rect x="125" y="110" width="150" height="120" rx="34" fill={dark} />
          <path d="M125 160 H275" stroke="#4b5563" strokeWidth="3" />
          <circle cx="200" cy="195" r="6" fill="#22c55e" />
          <ellipse cx="165" cy="85" rx="22" ry="28" fill="#fff" stroke="#9ca3af" strokeWidth="3" />
          <rect x="158" y="100" width="14" height="40" rx="7" fill="#fff" stroke="#9ca3af" strokeWidth="3" />
          <ellipse cx="235" cy="85" rx="22" ry="28" fill="#fff" stroke="#9ca3af" strokeWidth="3" />
          <rect x="228" y="100" width="14" height="40" rx="7" fill="#fff" stroke="#9ca3af" strokeWidth="3" />
        </g>
      );
    case "watch":
      return (
        <g>
          <rect x="170" y="25" width="60" height="250" rx="16" fill="#4b5563" />
          <rect x="135" y="85" width="130" height="130" rx="36" fill={dark} />
          <rect x="145" y="95" width="110" height="110" rx="28" fill={screen} />
          <rect x="262" y="130" width="8" height="30" rx="4" fill="#6b7280" />
          <text x="200" y="158" textAnchor="middle" fontSize="30" fontWeight="700" fill="#fff" fontFamily="system-ui, sans-serif">10:09</text>
          <rect x="170" y="172" width="60" height="8" rx="4" fill="#fff" opacity="0.6" />
        </g>
      );
    case "classicwatch":
      return (
        <g>
          <rect x="172" y="25" width="56" height="250" rx="14" fill="#78350f" />
          <circle cx="200" cy="150" r="72" fill="#d4a017" />
          <circle cx="200" cy="150" r="62" fill="#fffbeb" />
          {[0, 90, 180, 270].map((a) => (
            <rect key={a} x="197" y="94" width="6" height="14" rx="3" fill={dark} transform={`rotate(${a} 200 150)`} />
          ))}
          <line x1="200" y1="150" x2="200" y2="108" stroke={dark} strokeWidth="5" strokeLinecap="round" />
          <line x1="200" y1="150" x2="230" y2="162" stroke={dark} strokeWidth="4" strokeLinecap="round" />
          <circle cx="200" cy="150" r="5" fill="#d4a017" />
        </g>
      );
    case "powerbank":
      return (
        <g>
          <rect x="135" y="45" width="130" height="210" rx="24" fill={dark} />
          <rect x="150" y="65" width="100" height="14" rx="7" fill="#374151" />
          <circle cx="165" cy="115" r="7" fill="#22c55e" />
          <circle cx="190" cy="115" r="7" fill="#22c55e" />
          <circle cx="215" cy="115" r="7" fill="#22c55e" />
          <circle cx="240" cy="115" r="7" fill="#4b5563" />
          <path d="M208 150 L186 192 H202 L194 230 L222 184 H206 Z" fill="#fbbf24" />
        </g>
      );
    case "charger":
      return (
        <g>
          <circle cx="200" cy="160" r="88" fill={dark} />
          <circle cx="200" cy="160" r="66" fill="#374151" />
          <circle cx="200" cy="160" r="44" fill="none" stroke={screen} strokeWidth="6" />
          <path d="M208 132 L188 166 H202 L194 190 L216 154 H202 Z" fill="#fbbf24" />
          <rect x="165" y="240" width="70" height="10" rx="5" fill="#9ca3af" />
        </g>
      );
    case "speaker":
      return (
        <g>
          <rect x="95" y="85" width="210" height="130" rx="50" fill={dark} />
          {[135, 165, 200, 235, 265].map((x) => (
            [115, 150, 185].map((y) => <circle key={`${x}-${y}`} cx={x} cy={y} r="5" fill="#6b7280" />)
          ))}
          <circle cx="155" cy="85" r="0" />
          <rect x="175" y="215" width="50" height="8" rx="4" fill={screen} />
        </g>
      );
    default:
      return <rect x="140" y="90" width="120" height="120" rx="24" fill={dark} />;
  }
}

export default function ProductImage({ product, className = "" }) {
  if (product.image) {
    return (
      <img
        className={`product-img ${className}`}
        src={product.image}
        alt={product.name}
        loading="lazy"
      />
    );
  }

  return (
    <svg
      className={`product-img ${className}`}
      viewBox="0 0 400 300"
      role="img"
      aria-label={product.name}
      preserveAspectRatio="xMidYMid slice"
    >
      <rect width="400" height="300" fill={product.color || "#eef2ff"} />
      <ellipse cx="200" cy="272" rx="90" ry="9" fill="#000" opacity="0.08" />
      <Art type={product.type} />
    </svg>
  );
}