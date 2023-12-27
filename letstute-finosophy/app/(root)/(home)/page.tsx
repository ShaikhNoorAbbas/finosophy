import SectionHeader from '@/components/shared/header/sectionHeader';
import IconList from '@/components/shared/icon/IconList';
import Quiz from '@/components/shared/quiz/Quiz';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-white py-20 shadow-lg">
        <div className="container grid grid-cols-2">
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
          <ul className="grid grid-cols-4">
            <IconList
              icon="assets/icons/check-badge.svg"
              iconStyle="h-9 w-9"
              alt="Check badge icon"
              desc="Interactive Games"
              descStyle="text-xl font-bold text-white"
            />
            <IconList
              icon="assets/icons/check-badge.svg"
              iconStyle="h-9 w-9"
              alt="Check badge icon"
              desc="Interactive Games"
              descStyle="text-xl font-bold text-white"
            />
            <IconList
              icon="assets/icons/check-badge.svg"
              iconStyle="h-9 w-9"
              alt="Check badge icon"
              desc="Interactive Games"
              descStyle="text-xl font-bold text-white"
            />
            <IconList
              icon="assets/icons/check-badge.svg"
              iconStyle="h-9 w-9"
              alt="Check badge icon"
              desc="Interactive Games"
              descStyle="text-xl font-bold text-white"
            />
          </ul>

          <div className="flex items-center justify-center">
            <video className="w-[60%] rounded-2xl" autoPlay loop muted controls>
              <source
                src="/assets/videos/finosophy-showreel.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </section>

      {/* Tgs Section */}
      <section className="py-20">
        <div className="container"></div>
      </section>
    </>
  );
}
