import { memo, type SVGProps } from 'react';

export const CompanyIcon = memo((props: SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 240 240" {...props}>
      <circle cx={120} cy={120} r={108} stroke="#6366f1" strokeDasharray="8 12" strokeWidth={16} />
      <path stroke="#6366f1" strokeLinecap="round" strokeWidth={24} d="M60 100q60-60 120 0t0 40" />
      <circle cx={180} cy={140} r={12} fill="#6366f1" />
    </svg>
  );
});
