'use client';

import React, { useState } from 'react';
import { useCoupon } from '@/context/CouponContext';

export default function CouponForm() {
  const { setCoupon } = useCoupon();
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setCoupon(inputValue);
    setInputValue('');
  };

  return (
    <div className="fixed bottom-0 left-0 z-50 w-full bg-primary-dark">
      <div className="container flex items-center justify-center">
        <form className="flex gap-2 py-2" onSubmit={handleSubmit}>
          <input
            type="text"
            name="coupon-code"
            placeholder="Enter coupon code"
            className="rounded-lg px-2 py-1"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            type="submit"
            className="bg-gradient inline-block rounded-lg px-2 py-1 text-center text-white shadow-md"
          >
            Apply
          </button>
        </form>
      </div>
    </div>
  );
}
