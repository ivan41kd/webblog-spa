import type { SVGProps } from 'react';

export const BasketIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="#6366f1"
    {...props}>
    <g fill="#0F0F0F">
      <path
        fillRule="evenodd"
        d="M8.531 1A5 5 0 0 0 3.57 6.62l1.719 13.752A3 3 0 0 0 8.266 23h7.468a3 3 0 0 0 2.977-2.628l1.72-13.752A5 5 0 0 0 15.468 1H8.53Zm-2.83 4a3 3 0 0 1 2.83-2h6.938a3 3 0 0 1 2.83 2H5.7Zm-.068 2 1.64 13.124a1 1 0 0 0 .993.876h7.468a1 1 0 0 0 .993-.876L18.367 7H5.633Z"
        clipRule="evenodd"
      />
      <path d="M15.002 10.998a1 1 0 0 0-1.414 0L12 12.586l-1.58-1.58a1 1 0 0 0-1.414 1.414l1.58 1.58L9 15.586A1 1 0 0 0 10.414 17L12 15.414l1.588 1.588a1 1 0 1 0 1.414-1.414L13.414 14l1.588-1.588a1 1 0 0 0 0-1.414Z" />
    </g>
  </svg>
);
