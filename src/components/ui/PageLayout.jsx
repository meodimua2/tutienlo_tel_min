import React from 'react';

export default function PageLayout({ children, className = '' }) {
  return (
    <div className={`mx-auto w-full max-w-[980px] space-y-5 px-0 sm:px-4 ${className}`}>
      {children}
    </div>
  );
}
