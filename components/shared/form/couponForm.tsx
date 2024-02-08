import React, { useContext, useState, useEffect } from 'react';
import { CouponContext } from '@/contexts/CouponContext';

export default function CouponForm() {
  const { couponCode, setCouponCode }: any = useContext(CouponContext);

  const [inputCode, setInputCode] = useState('');
  const [placeholderText, setPlaceholderText] = useState('Enter coupon code');
  const [applied, setApplied] = useState(false);

  useEffect(() => {
    if (couponCode) {
      setApplied(true);
      setPlaceholderText(`${couponCode} applied!`);
    }
  }, [couponCode]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputCode === 'FINO25') {
      localStorage.setItem('couponCode', inputCode);
      setApplied(true);
      setCouponCode(inputCode);
      setPlaceholderText(`${inputCode} applied!`);
    } else {
      setPlaceholderText(`Invalid code`);
      setApplied(false);
      setInputCode('');
    }
  };

  const handleRemove = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    localStorage.removeItem('couponCode');
    setCouponCode('');
    setPlaceholderText('Enter coupon code');
    setApplied(false);
    setInputCode('');
  };

  return (
    <div className="fixed bottom-0 left-0 z-50 w-full bg-primary-dark">
      <div className="container flex items-center justify-center">
        <form
          className="flex gap-2 py-2"
          onSubmit={applied ? handleRemove : handleSubmit}
        >
          <input
            type="text"
            name="coupon-code"
            placeholder={placeholderText}
            className="rounded-lg px-2 py-1"
            value={inputCode}
            onChange={(e) => setInputCode(e.target.value)}
            disabled={applied}
          />
          <button className="bg-gradient inline-block rounded-lg px-2 py-1 text-center text-white shadow-md">
            {applied ? 'Remove' : 'Apply'}
          </button>
        </form>
      </div>
    </div>
  );
}
