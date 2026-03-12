import type { SVGProps } from 'react';
import { memo } from 'react';

export const UserIcon = memo((props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="#6366f1"
    strokeWidth={0}
    viewBox="-3.2 -3.2 22.4 22.4"
    {...props}
  >
    <rect width={22.4} height={22.4} x={-3.2} y={-3.2} fill="#6366f1" stroke="none" rx={11.2} />
    <g fill="#fcfcfc" stroke="none">
      <path d="M8 7a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM14 12a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v3h12v-3Z" />
    </g>
  </svg>
));
