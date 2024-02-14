'use client';

import React from 'react';
import { CouponProvider } from '@/contexts/CouponContext';
import LpHeader from '@/components/shared/header/LpHeader';
import LpFooter from '@/components/shared/footer/LpFooter';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <CouponProvider>
      <>
        <LpHeader />
        <main>{children}</main>
        <LpFooter />
      </>
    </CouponProvider>
  );
}
