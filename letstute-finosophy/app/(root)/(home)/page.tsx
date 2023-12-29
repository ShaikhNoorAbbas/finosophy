import Button from '@/components/shared/button/Button';
import ImgCard from '@/components/shared/cards/ImgCard';
import SectionHeader from '@/components/shared/header/sectionHeader';
import IconList from '@/components/shared/icon/IconList';
import Quiz from '@/components/shared/quiz/Quiz';
import Quote from '@/components/shared/quote/Quote';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-[url('/assets/images/bg-img.png')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-black opacity-[.07]"></div>
        <div className="container relative z-10 grid grid-cols-2 gap-14">
          <Image
            src="/assets/images/hero-img-default.png"
            width={1500}
            height={1300}
            alt="Hero image default"
            className="z-10"
          />
          <Quiz />
        </div>
      </section>

      {/* Showreel Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-[url('/assets/images/section-bg-img.jpg')] bg-cover bg-center opacity-30"></div>
        <div className="bg-primary-dark absolute inset-0 opacity-[.85]"></div>
        <div className="container relative z-10 flex flex-col gap-y-16">
          <SectionHeader
            style="items-center"
            subheading="Introduction"
            heading="What is Finosophy?"
            headingStyle="text-center text-white"
          />

          <div className="grid grid-cols-2 items-center gap-14">
            <div className="flex items-center justify-center">
              <video className="w-full rounded-lg" autoPlay loop muted controls>
                <source
                  src="/assets/videos/finosophy-showreel.mp4"
                  type="video/mp4"
                />
              </video>
            </div>

            <ul className="flex flex-col gap-8">
              <IconList
                icon="assets/icons/check-badge.svg"
                iconStyle="h-9 w-9"
                alt="Check badge icon"
                desc="Fun & interactive way to learn financial literacy."
                descStyle="text-xl font-bold text-white"
              />
              <IconList
                icon="assets/icons/check-badge.svg"
                iconStyle="h-9 w-9"
                alt="Check badge icon"
                desc="Learn money management, investing, budgeting."
                descStyle="text-xl font-bold text-white"
              />
              <IconList
                icon="assets/icons/check-badge.svg"
                iconStyle="h-9 w-9"
                alt="Check badge icon"
                desc="Online courses suitable for all age groups."
                descStyle="text-xl font-bold text-white"
              />
              <IconList
                icon="assets/icons/check-badge.svg"
                iconStyle="h-9 w-9"
                alt="Check badge icon"
                desc="Best & easy way to step into financial world."
                descStyle="text-xl font-bold text-white"
              />
              <IconList
                icon="assets/icons/check-badge.svg"
                iconStyle="h-9 w-9"
                alt="Check badge icon"
                desc="Videos, Games, Flashcards, Assessments etc."
                descStyle="text-xl font-bold text-white"
              />
            </ul>
          </div>

          <div className="flex items-center justify-center">
            <Button
              href="/kids#products"
              text="Explore Products for Kids"
              style="py-3 px-6 text-xl font-bold text-white"
            />
          </div>
        </div>
      </section>

      {/* Tgs Section */}
      <section className="py-20">
        <div className="container flex flex-col gap-y-16">
          <Quote />

          <div className="grid grid-cols-4 gap-10">
            <ImgCard
              style="bg-tertiary"
              headerStyle="flex-col"
              heading="for Kids"
              imgSrc="/assets/images/img-card-kids.jpg"
              desc="Lorem ipsum dolor sit amet consectetur adipisicing elit repellat
          aliquid perspiciatis nisi rem labore."
              btnLink="/kids"
              btnText="Learn more"
            />
            <ImgCard
              style="bg-tertiary"
              headerStyle="flex-col"
              heading="for Youth"
              imgSrc="/assets/images/img-card-youth.jpg"
              desc="Lorem ipsum dolor sit amet consectetur adipisicing elit repellat
          aliquid perspiciatis nisi rem labore."
              btnLink="/youth"
              btnText="Learn more"
            />
            <ImgCard
              style="bg-tertiary"
              headerStyle="flex-col"
              heading="for Teacher"
              imgSrc="/assets/images/img-card-teacher.jpg"
              desc="Lorem ipsum dolor sit amet consectetur adipisicing elit repellat
          aliquid perspiciatis nisi rem labore."
              btnLink="/teacher"
              btnText="Learn more"
            />
            <ImgCard
              style="bg-tertiary"
              headerStyle="flex-col"
              heading="for School"
              imgSrc="/assets/images/img-card-school.jpg"
              desc="Lorem ipsum dolor sit amet consectetur adipisicing elit repellat
          aliquid perspiciatis nisi rem labore."
              btnLink="/school"
              btnText="Learn more"
            />
          </div>
        </div>
      </section>
    </>
  );
}
