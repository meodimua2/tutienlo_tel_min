import React from 'react';

export default function PageLayout({ children, className = '' }) {
  return (
    <div className={`space-y-5 ${className}`}>
      {children}
    </div>
  );
}
