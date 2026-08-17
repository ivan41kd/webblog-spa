import type { SVGProps } from 'react';

export const BurgerIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="#6366f1"
    viewBox="0 0 24 24"
    {...props}>
    <g strokeLinecap="round" strokeWidth={2}>
      <path d="M4 18h16M4 12h16M4 6h16" />
    </g>
  </svg>
);
