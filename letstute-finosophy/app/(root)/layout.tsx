'use client';

import Footer from '@/components/shared/footer/Footer';
import Header from '@/components/shared/header/header';
import Navbar from '@/components/shared/navbar/Navbar';
import SideNavbar from '@/components/shared/navbar/SideNavbar';
import React, { useState } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isSideNavbar, setIsSideNavbar] = useState(false);

  return (
    <>
      <SideNavbar
        setIsSideNavbar={setIsSideNavbar}
        isSideNavbar={isSideNavbar}
      />
      <Header setIsSideNavbar={setIsSideNavbar} isSideNavbar={isSideNavbar} />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
