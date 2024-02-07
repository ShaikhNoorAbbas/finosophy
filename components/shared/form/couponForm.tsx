import React, { useContext, useState, useEffect } from 'react';
import { CouponContext } from '@/contexts/CouponContext';

export default function CouponForm() {
  const [inputCode, setInputCode] = useState('');
  const [applied, setApplied] = useState(false); // Track if coupon is applied
  const context = useContext(CouponContext);

  if (!context) {
    throw new Error('CouponForm must be used within a CouponProvider');
  }

  const { couponCode, setCouponCode } = context;

  useEffect(() => {
    setApplied(!!couponCode); // This will set 'applied' to true if 'couponCode' is not null or empty
  }, [couponCode]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCouponCode(inputCode);
    // No need to set 'applied' here since it's handled by the useEffect based on 'couponCode'
  };

  const handleRemove = () => {
    localStorage.removeItem('couponCode');
    setCouponCode('');
    setInputCode('');
    // 'applied' will be set to false by the useEffect when 'couponCode' changes
  };

  // Determine the placeholder text based on 'applied' state
  const placeholderText = applied
    ? `${couponCode} applied!`
    : 'Enter coupon code';

  return (
    <div className="fixed bottom-0 left-0 z-50 w-full bg-primary-dark">
      <div className="container flex items-center justify-center">
        <form className="flex gap-2 py-2" onSubmit={handleSubmit}>
          <input
            type="text"
            name="coupon-code"
            placeholder={placeholderText}
            className="rounded-lg px-2 py-1"
            value={inputCode}
            onChange={(e) => setInputCode(e.target.value)}
            disabled={applied}
          />
          <button
            type={applied ? 'button' : 'submit'}
            className="bg-gradient inline-block rounded-lg px-2 py-1 text-center text-white shadow-md"
            onClick={applied ? handleRemove : undefined}
          >
            {applied ? 'Remove' : 'Apply'}
          </button>
        </form>
      </div>
    </div>
  );
}
