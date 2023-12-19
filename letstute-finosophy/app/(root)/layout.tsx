import Footer from '@/components/shared/footer/Footer';
import Header from '@/components/shared/header/header';
import Navbar from '@/components/shared/navbar/Navbar';
import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
