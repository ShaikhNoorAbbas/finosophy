'use client';

import React from 'react';
import { CouponProvider } from '@/contexts/CouponContext';
import LpHeader from '@/components/shared/header/LpHeader';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <CouponProvider>
      <>
        <LpHeader />
        <main>{children}</main>
      </>
    </CouponProvider>
  );
}
