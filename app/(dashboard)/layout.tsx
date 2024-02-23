import DashboardNavbar from '@/components/shared/navbar/DashboardNavbar';
import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen flex-col md:flex-row">
      <div className="w-full flex-none md:w-64">
        <DashboardNavbar />
      </div>
      <main className="grow p-4">{children}</main>
    </div>
  );
};

export default Layout;
