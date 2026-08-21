export type NailArtVariant =
  | 'chrome'
  | 'french'
  | 'ombre'
  | 'matte'
  | 'painted'
  | 'glitter';

interface NailArtProps {
  variant: NailArtVariant;
  className?: string;
}

// The fan occupies the central ~70% of the viewBox so that `slice` cropping — the
// tiles range from taller-than-wide to wider-than-tall — never cuts an outer nail
// off. Identical composition for every variant; only the finish changes.
const NAILS = [
  { x: -46, y: 14, r: -13, w: 35, l: 68 },
  { x: 0, y: 0, r: 0, w: 40, l: 84 },
  { x: 46, y: 14, r: 13, w: 35, l: 68 },
];

function nailPath(w: number, l: number) {
  const hw = w / 2;
  return `M ${-hw} 0 C ${-hw} ${-l * 0.5}, ${-hw * 0.86} ${-l * 0.88}, 0 ${-l} C ${hw * 0.86} ${-l * 0.88}, ${hw} ${-l * 0.5}, ${hw} 0 Q 0 ${l * 0.15}, ${-hw} 0 Z`;
}

// Deterministic speck field for the glitter finish (no Math.random — must be stable
// between server render and hydration). [x, y, radius]; y runs cuticle -> tip.
const SPECKS: [number, number, number][] = [
  [-0.30, 0.94, 2.1], [0.26, 0.90, 1.9], [-0.04, 0.86, 2.3], [0.38, 0.82, 1.6],
  [-0.40, 0.78, 1.8], [0.10, 0.74, 2.0], [-0.20, 0.70, 1.7], [0.32, 0.66, 1.8],
  [-0.34, 0.60, 1.4], [0.06, 0.56, 1.6], [0.24, 0.50, 1.3], [-0.16, 0.46, 1.4],
  [0.36, 0.40, 1.1], [-0.28, 0.36, 1.1], [0.12, 0.30, 1.0], [-0.08, 0.22, 0.8],
  [0.28, 0.18, 0.8], [-0.22, 0.12, 0.7],
];

export default function NailArt({ variant, className = '' }: NailArtProps) {
  const uid = `na-${variant}`;

  return (
    <svg
      viewBox="0 0 180 216"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <defs>
        <linearGradient id={`${uid}-chrome`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fff8f4" />
          <stop offset="30%" stopColor="#cf9fa6" />
          <stop offset="55%" stopColor="#6d4a68" />
          <stop offset="78%" stopColor="#e8bfb8" />
          <stop offset="100%" stopColor="#fdf0ea" />
        </linearGradient>
        <linearGradient id={`${uid}-ombre`} x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#2f0d45" />
          <stop offset="38%" stopColor="#8c3f6e" />
          <stop offset="72%" stopColor="#e59aa4" />
          <stop offset="100%" stopColor="#fff1e9" />
        </linearGradient>
        <linearGradient id={`${uid}-glitter`} x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#240b2c" />
          <stop offset="55%" stopColor="#6d3a66" />
          <stop offset="100%" stopColor="#e0aabb" />
        </linearGradient>
        <linearGradient id={`${uid}-finger`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f4d3c3" stopOpacity="0.34" />
          <stop offset="100%" stopColor="#f4d3c3" stopOpacity="0.04" />
        </linearGradient>

        {NAILS.map((n, i) => (
          <clipPath key={i} id={`${uid}-clip-${i}`}>
            <path d={nailPath(n.w, n.l)} />
          </clipPath>
        ))}
      </defs>

      <g transform="translate(90 150)">
        {NAILS.map((n, i) => {
          const hw = n.w / 2;
          const clip = `url(#${uid}-clip-${i})`;

          const base =
            variant === 'chrome'
              ? `url(#${uid}-chrome)`
              : variant === 'ombre'
              ? `url(#${uid}-ombre)`
              : variant === 'glitter'
              ? `url(#${uid}-glitter)`
              : variant === 'matte'
              ? '#a4718c'
              : variant === 'french'
              ? '#f6ded3'
              : '#f2d2c7';

          return (
            <g key={i} transform={`translate(${n.x} ${n.y}) rotate(${n.r})`}>
              {/* fingertip behind the nail */}
              <rect
                x={-n.w * 0.64}
                y={-n.l * 0.18}
                width={n.w * 1.28}
                height={n.l * 0.18 + 90}
                rx={n.w * 0.64}
                fill={`url(#${uid}-finger)`}
              />

              <path d={nailPath(n.w, n.l)} fill={base} />

              <g clipPath={clip}>
                {variant === 'chrome' && (
                  <>
                    {/* mirror horizon — bright field, hard dark band, bright tip */}
                    <path
                      d={`M ${-hw * 1.4} ${-n.l * 0.30} L ${hw * 1.4} ${-n.l * 0.38} L ${hw * 1.4} ${-n.l * 0.10} L ${-hw * 1.4} ${-n.l * 0.04} Z`}
                      fill="#ffffff"
                      opacity="0.9"
                    />
                    <path
                      d={`M ${-hw * 1.4} ${-n.l * 0.62} L ${hw * 1.4} ${-n.l * 0.70} L ${hw * 1.4} ${-n.l * 0.40} L ${-hw * 1.4} ${-n.l * 0.32} Z`}
                      fill="#2b0f36"
                      opacity="0.78"
                    />
                    <path
                      d={`M ${-hw * 1.4} ${-n.l * 1.05} L ${hw * 1.4} ${-n.l * 1.05} L ${hw * 1.4} ${-n.l * 0.82} L ${-hw * 1.4} ${-n.l * 0.74} Z`}
                      fill="#ffffff"
                      opacity="0.72"
                    />
                  </>
                )}

                {variant === 'french' && (
                  <path
                    d={`M ${-hw * 1.3} ${-n.l * 0.72} Q 0 ${-n.l * 0.46} ${hw * 1.3} ${-n.l * 0.72} L ${hw * 1.3} ${-n.l * 1.2} L ${-hw * 1.3} ${-n.l * 1.2} Z`}
                    fill="#ffffff"
                  />
                )}

                {variant === 'glitter' &&
                  SPECKS.map(([sx, sy, sr], k) => (
                    <circle
                      key={k}
                      cx={sx * n.w}
                      cy={-sy * n.l}
                      r={sr * 0.75}
                      fill={k % 3 === 0 ? '#ffe6bf' : '#ffffff'}
                      opacity={0.35 + sy * 0.6}
                    />
                  ))}

                {variant === 'painted' && (
                  <g transform={`translate(0 ${-n.l * 0.58})`}>
                    {[0, 72, 144, 216, 288].map((a) => (
                      <ellipse
                        key={a}
                        cx="0"
                        cy={-n.w * 0.25}
                        rx={n.w * 0.14}
                        ry={n.w * 0.26}
                        fill="#b83c6d"
                        opacity="0.95"
                        transform={`rotate(${a})`}
                      />
                    ))}
                    <circle cx="0" cy="0" r={n.w * 0.1} fill="#ffd58f" />
                    <path
                      d={`M ${-n.w * 0.5} ${n.l * 0.26} q ${n.w * 0.42} ${-n.l * 0.11} ${n.w * 0.92} ${n.l * 0.05}`}
                      stroke="#b83c6d"
                      strokeWidth={n.w * 0.045}
                      fill="none"
                      opacity="0.65"
                    />
                  </g>
                )}

                {/* specular gloss — omitted entirely on the matte finish */}
                {variant !== 'matte' && (
                  <ellipse
                    cx={-n.w * 0.24}
                    cy={-n.l * 0.6}
                    rx={n.w * 0.11}
                    ry={n.l * 0.25}
                    fill="#ffffff"
                    opacity={variant === 'chrome' ? 0.3 : 0.2}
                    transform={`rotate(-8 ${-n.w * 0.24} ${-n.l * 0.6})`}
                  />
                )}
              </g>

              <path
                d={nailPath(n.w, n.l)}
                fill="none"
                stroke="#ffffff"
                strokeOpacity={variant === 'matte' ? 0.1 : 0.32}
                strokeWidth="0.9"
              />
            </g>
          );
        })}
      </g>
    </svg>
  );
}
