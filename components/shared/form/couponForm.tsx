import React, { useContext, useState, useEffect } from 'react';
import { CouponContext } from '@/contexts/CouponContext';

export default function CouponForm() {
  const { couponCode, setCouponCode }: any = useContext(CouponContext);

  const [inputCode, setInputCode] = useState('');
  const [applied, setApplied] = useState(false);
  const [placeholderText, setPlaceholderText] = useState('Enter coupon code');

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

      setCouponCode(inputCode);
      setApplied(true);
      setInputCode('');
      setPlaceholderText(`${inputCode} applied!`);
    } else {
      setApplied(false);
      setInputCode('');
      setPlaceholderText(`Invalid code`);
    }
  };

  const handleRemove = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    localStorage.removeItem('couponCode');

    setCouponCode('');
    setApplied(false);
    setInputCode('');
    setPlaceholderText('Enter coupon code');
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
