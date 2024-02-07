'use client';

import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from 'react';

interface CouponContextType {
  coupon: string;
  setCoupon: (coupon: string) => void;
}

const CouponContext = createContext<CouponContextType | undefined>(undefined);

export const useCoupon = () => {
  const context = useContext(CouponContext);

  if (context === undefined) {
    throw new Error('useCoupon must be used within a CouponProvider');
  }

  return context;
};

export const CouponProvider = ({ children }: { children: ReactNode }) => {
  const [coupon, setCoupon] = useState<string>('');

  useEffect(() => {
    const storedCoupon = localStorage.getItem('coupon');

    if (storedCoupon) {
      setCoupon(storedCoupon);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('coupon', coupon);
  }, [coupon]);

  return (
    <CouponContext.Provider value={{ coupon, setCoupon }}>
      {children}
    </CouponContext.Provider>
  );
};
