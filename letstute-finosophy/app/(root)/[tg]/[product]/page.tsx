'use client';

import Button from '@/components/shared/button/Button';
import SectionHeader from '@/components/shared/header/sectionHeader';
import { tgs } from '@/datasets/tgs';
import { products } from '@/datasets/products';
import { notFound } from 'next/navigation';
import CourseCard from '@/components/shared/cards/CourseCard';
import Tabs from '@/components/shared/tabs/Tabs';
import Image from 'next/image';
import IconList from '@/components/shared/icon/IconList';

interface ProductProps {
  params: {
    tg: string;
    product: string;
  };
}

export default function Product({ params }: ProductProps) {
  const [tg] = tgs.filter((tg) => tg.name.toLowerCase() === params.tg);

  const allProducts = [
    ...products.academic,
    products.academicCombo,
    ...products.youth,
  ];

  const productSlug = params.product;
  const product = allProducts.find((p) => p.slug === productSlug);

  if (!product) notFound();

  const tabItems = [
    {
      label: 'Details',
      content: (
        <div className="flex flex-col gap-y-10">
          <span className="bg-tertiary-light rounded-lg p-6 text-center text-xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
            accusantium libero consequuntur voluptas omnis ullam est! Fuga
            officiis itaque blanditiis omnis commodi enim necessitatibus cumque
            illum eligendi quibusdam. Iusto, quia?
          </span>

          <div className="grid grid-cols-4 gap-10">
            <div className="flex items-center justify-center rounded-lg border-2 border-dashed p-2">
              <IconList
                icon="/assets/icons/check-badge.svg"
                iconStyle="h-9 w-9"
                alt="Check badge icon"
                desc="English Language"
                descStyle="text-xl"
              />
            </div>
            <IconList
              icon="/assets/icons/check-badge.svg"
              iconStyle="h-9 w-9"
              alt="Check badge icon"
              desc="One Year Validity"
              descStyle="text-xl"
            />
            <IconList
              icon="/assets/icons/check-badge.svg"
              iconStyle="h-9 w-9"
              alt="Check badge icon"
              desc="24/7 Course Access"
              descStyle="text-xl"
            />
            <IconList
              icon="/assets/icons/check-badge.svg"
              iconStyle="h-9 w-9"
              alt="Check badge icon"
              desc="Course Certificate"
              descStyle="text-xl"
            />
          </div>

          <div className="flex items-center justify-center">
            <Button
              href="/kids#products"
              text="Explore Products for Kids"
              style="py-3 px-6 text-xl font-bold text-white"
            />
          </div>
        </div>
      ),
    },
    { label: 'Curriculum', content: <p>Content of Tab 2</p> },
    { label: 'Reviews', content: <p>Content of Tab 3</p> },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-20">
        <div className="container">
          <div className="absolute inset-0 bg-[url('/assets/images/bg-img.png')] bg-cover bg-center opacity-30"></div>
          <div className="absolute inset-0 bg-black opacity-[.07]"></div>
          <div className="relative z-10 grid grid-cols-2 gap-14">
            <div className="flex flex-col items-start gap-y-5">
              <h2 className="h2-bold text-primary">
                {`Financial Literacy ${product.name}`}
              </h2>
              <span className="subheading--fill">
                {`Suitable for age group ${product.age} years`}
              </span>
              <span className="subheading">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptas eaque cupiditate, expedita porro nesciunt nostrum
                facilis ratione obcaecati.
              </span>
              <Button
                href="#products"
                text={`${product.price}`}
                style="py-3 px-6 text-xl font-bold text-white"
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                src={product.heroImg}
                width={500}
                height={500}
                alt="Level 1 Course"
                className="w-[85%]"
              />
            </div>
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
        <div className="bg-primary-dark absolute inset-0 opacity-[.85]"></div>
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
                style="flex-1 min-w-[385px] max-w-[418.67px]"
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
