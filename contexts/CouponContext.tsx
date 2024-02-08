import React, { createContext, useState, useEffect, ReactNode } from 'react';

interface CouponContextType {
  couponCode: string;
  setCouponCode: (code: string) => void;
}

export const CouponContext = createContext<CouponContextType | undefined>(
  undefined
);

export const CouponProvider = ({ children }: { children: ReactNode }) => {
  const [couponCode, setCouponCode] = useState('');

  useEffect(() => {
    const storedCouponCode = localStorage.getItem('couponCode');

    if (storedCouponCode === 'FINO25') {
      setCouponCode(storedCouponCode);
    }
  }, []);

  return (
    <CouponContext.Provider value={{ couponCode, setCouponCode }}>
      {children}
    </CouponContext.Provider>
  );
};
