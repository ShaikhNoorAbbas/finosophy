'use client';

import Footer from '@/components/shared/footer/Footer';
import Header from '@/components/shared/header/Header';
import Navbar from '@/components/shared/navbar/Navbar';
import SideNavbar from '@/components/shared/navbar/SideNavbar';
import React, { useState } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isSideNavbar, setIsSideNavbar] = useState(false);

  return (
    <>
      <SideNavbar
        isSideNavbar={isSideNavbar}
        setIsSideNavbar={setIsSideNavbar}
      />
      <Header isSideNavbar={isSideNavbar} setIsSideNavbar={setIsSideNavbar} />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
