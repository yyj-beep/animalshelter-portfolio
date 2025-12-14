// components/icons/EyeIcon.tsx
import React from 'react';

interface EyeIconProps {
  className?: string;
}

const EyeIcon: React.FC<EyeIconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M2.458 12C3.732 7.943 7.523 5 12 5
             c4.477 0 8.268 2.943 9.542 7
             -1.274 4.057-5.065 7-9.542 7
             -4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

export default EyeIcon;