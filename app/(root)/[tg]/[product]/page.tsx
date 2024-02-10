'use client';

import Button from '@/components/shared/button/Button';
import SectionHeader from '@/components/shared/header/SectionHeader';
import { tgs } from '@/datasets/tgs';
import { notFound } from 'next/navigation';
import CourseCard from '@/components/shared/cards/CourseCard';
import Tabs from '@/components/shared/tabs/Tabs';
import Image from 'next/image';
import IconList from '@/components/shared/icon/IconList';
import Accordion from '@/components/shared/accordion/Accordion';
import React, { useContext } from 'react';
import { CouponContext } from '@/contexts/CouponContext';

interface ProductProps {
  params: {
    tg: string;
    product: string;
  };
}

// export function generateStaticParams() {
//   const tgValues = tgs.map((tg) => tg.name.toLowerCase());
//   const productSlugs = tgs.flatMap((tg) =>
//     tg.coursesSection.products.map((product) => product.slug)
//   );

//   return tgValues.flatMap((tg) =>
//     productSlugs.map((product) => ({ tg, product }))
//   );
// }

function discountPriceStr(
  btnText: string,
  price: string,
  discountPrice: string
): React.ReactElement {
  return (
    <span>
      {btnText}{' '}
      <span className="line-through decoration-primary decoration-2">
        ₹{price}/-
      </span>{' '}
      ₹{discountPrice}/-
    </span>
  );
}

export default function Product({ params }: ProductProps) {
  const { couponCode }: any = useContext(CouponContext);

  const [tg] = tgs.filter((tg) => tg.name.toLowerCase() === params.tg);

  if (!tg) notFound();

  const product = tg.coursesSection.products.find(
    (product) => product.slug === params.product
  );

  if (!product) notFound();

  const tabItems = [
    {
      label: 'Details',
      content: (
        <div className="flex flex-col gap-y-14">
          <span className="rounded-lg border-t-4 border-tertiary bg-tertiary-light p-6 text-center text-lg lg:text-xl">
            {product.desc}
          </span>

          <div className="grid grid-cols-1 justify-center gap-6 md:grid-cols-2 lg:grid-cols-3">
            {product.features.map((feature, i) => (
              <IconList
                key={i}
                icon="/assets/icons/check-badge.svg"
                iconStyle="h-9 w-9"
                alt="Check badge icon"
                desc={feature}
                descStyle="text-xl"
              />
            ))}

            <IconList
              icon="/assets/icons/check-badge.svg"
              iconStyle="h-9 w-9"
              alt="Check badge icon"
              desc="24/7 Content Access"
              descStyle="text-xl"
            />
          </div>

          <div className="flex items-center justify-center">
            <Button
              href={
                couponCode ? product.discountPurchaseLink : product.purchaseLink
              }
              text={
                couponCode
                  ? discountPriceStr(
                      product.purchaseBtnText,
                      product.price,
                      product.discountPrice
                    )
                  : `${product.purchaseBtnText} ₹${product.price}/-`
              }
              style="py-3 px-6 text-xl font-bold text-white text-center"
            />
          </div>
        </div>
      ),
    },
    {
      label: 'Curriculum',
      content: (
        <div className="grid grid-cols-1 items-start gap-5 lg:grid-cols-2">
          {product.curriculum.map((item, i) =>
            i === 1 || i === 0 ? (
              <Accordion key={i} title={`${item.chapter}`} defaultOpen>
                <ul className="">
                  {item.topics.map((topic, i) => (
                    <li key={i} className="ml-2 list-outside list-disc">
                      {topic}
                    </li>
                  ))}
                </ul>
              </Accordion>
            ) : (
              <Accordion key={i} title={`${item.chapter}`}>
                <ul className="">
                  {item.topics.map((topic, i) => (
                    <li key={i} className="list-inside list-disc">
                      {topic}
                    </li>
                  ))}
                </ul>
              </Accordion>
            )
          )}
        </div>
      ),
    },
    { label: 'Reviews', content: <p>Reviews here...</p> },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-20">
        <div className="absolute inset-0 bg-[url('/assets/images/bg-img.png')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-black opacity-[.07]"></div>
        <div className="container relative z-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="slide-in-left flex flex-col items-center gap-y-4 text-center md:items-start md:text-left lg:gap-y-6">
            <h2 className="h2-bold text-primary">
              {`Financial Literacy ${product.name}`}
            </h2>
            <span className="subheading--fill">
              {`Suitable for age group ${product.age} years`}
            </span>
            <ul className="grid grid-cols-2 gap-4">
              <IconList
                icon="/assets/icons/globe.svg"
                iconStyle="w-7 lg:w-8"
                alt="Check badge icon"
                desc="English Language"
                descStyle="text:lg lg:text-xl font-semibold"
              />
              <IconList
                icon="/assets/icons/award.svg"
                iconStyle="w-7 lg:w-8"
                alt="Check badge icon"
                desc="Course Certificate"
                descStyle="text:lg lg:text-xl font-semibold"
              />
              <IconList
                icon="/assets/icons/laptop-2.svg"
                iconStyle="w-7 lg:w-8"
                alt="Check badge icon"
                desc="24/7 Access"
                descStyle="text:lg lg:text-xl font-semibold"
              />
              <IconList
                icon="/assets/icons/clock.svg"
                iconStyle="w-7 lg:w-8"
                alt="Check badge icon"
                desc={`${
                  product.name === 'Youth Book' ||
                  product.name === 'Youth eBook'
                    ? 'Lifetime'
                    : '1 Year'
                } Validity`}
                descStyle="text:lg lg:text-xl font-semibold"
              />
            </ul>
            <Button
              href={
                couponCode ? product.discountPurchaseLink : product.purchaseLink
              }
              text={
                couponCode
                  ? discountPriceStr(
                      product.purchaseBtnText,
                      product.price,
                      product.discountPrice
                    )
                  : `${product.purchaseBtnText} ₹${product.price}/-`
              }
              style="py-3 px-6 text-xl font-bold text-white text-center"
            />
          </div>

          <div className="slide-in-right flex items-center justify-center">
            <Image
              src={product.heroImg}
              width={500}
              height={500}
              alt="Level 1 Course"
              className="w-[80%] sm:w-[50%] lg:w-[100%]"
            />
          </div>
        </div>
      </section>

      {/* Course Info Section */}
      <section className="py-20">
        <div className="container">
          <Tabs items={tabItems} />
        </div>
      </section>

      {/* More Products Section */}
      <section className="relative py-20" id="products">
        <div className="absolute inset-0 bg-[url('/assets/images/section-bg-img.jpg')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-primary-dark opacity-[.85]"></div>
        <div className="container relative z-10 flex flex-col gap-y-16">
          <SectionHeader
            style="items-center"
            subheading="Affordable"
            heading={`More Products for ${tg.name}`}
            headingStyle="text-center text-white"
          />

          <div className="flex flex-wrap justify-center gap-x-10 gap-y-20">
            {tg.coursesSection.products.map((product, i) => (
              <CourseCard
                key={i}
                style="flex-1 min-w-[340px] max-w-[418.67px]"
                imgSrc={product.thumbnail}
                heading={product.name}
                listItems={product.features}
                link={`/${params.tg}/${product.slug}`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
