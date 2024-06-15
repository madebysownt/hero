import React, { ReactNode } from 'react';

export default function Sidebar({ children }: { children: ReactNode }) {
  return (
    <div className="fixed inset-y-0 left-0 w-64 max-lg:hidden">{children}</div>
  );
}
