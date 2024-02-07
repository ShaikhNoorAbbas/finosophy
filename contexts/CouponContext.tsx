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

  // Load any saved coupon code from Local Storage when the provider mounts
  useEffect(() => {
    const savedCouponCode = localStorage.getItem('couponCode');
    if (savedCouponCode) {
      setCouponCode(savedCouponCode);
    }
  }, []);

  // Save the coupon code to Local Storage whenever it changes
  useEffect(() => {
    if (couponCode) {
      localStorage.setItem('couponCode', couponCode);
    }
  }, [couponCode]);

  return (
    <CouponContext.Provider value={{ couponCode, setCouponCode }}>
      {children}
    </CouponContext.Provider>
  );
};
