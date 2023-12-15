'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { tg } from '@/data/tg';

interface TgProps {
  params: {
    tg: keyof typeof tg;
  };
}

export default function Tg({ params }: TgProps) {
  const data = tg[params.tg];
  const router = useRouter();

  useEffect(() => {
    if (!data) {
      router.push('/404');
    }
  }, [data, router]);

  if (!data) {
    return null;
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-[url('/assets/images/bg-img.png')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-black opacity-[.07]"></div>
        <div className="container relative z-10 grid grid-cols-2 gap-14">
          <div className="flex flex-col items-start gap-y-5">
            <span className="subheading--fill">
              {data.heroSection.heading1}
            </span>
            <h1 className="h1-bold text-primary">
              {data.heroSection.heading2}
            </h1>
            <span className="subheading">
              {`${data.heroSection.heading3.split(' ').slice(0, -1).join(' ')}`}{' '}
              <span className="text-secondary text-3xl font-bold">
                {`${data.heroSection.heading3.split(' ').pop()}`}
              </span>
            </span>
          </div>
          <div>{/* Video here... */}</div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container">
          <div className="flex flex-col items-center gap-y-3">
            <span className="subheading--secondary">Overview</span>
            <h2 className="h2-bold text-primary">
              Why Finosophy for{' '}
              {params.tg.split('')[0].toUpperCase() + params.tg.slice(1)}?
            </h2>
          </div>
        </div>
      </section>
    </>
  );
}
