import type { SVGProps } from 'react';

export const ClockIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 192 192"
    {...props}>
    <g transform="translate(16 16)">
      <circle
        cx={80}
        cy={80}
        r={74}
        style={{
          fill: 'none',
          stroke: '#6366f1',
          strokeWidth: 12,
          strokeLinejoin: 'round',
          strokeOpacity: 1,
        }}
      />
      <path
        d="M80 30v50l40 32"
        style={{
          fill: 'none',
          stroke: '#6366f1',
          strokeWidth: 12,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeOpacity: 1,
        }}
      />
    </g>
  </svg>
);
