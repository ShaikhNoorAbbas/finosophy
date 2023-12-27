import SectionHeader from '@/components/shared/header/sectionHeader';
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

      {/* ShowReel Section */}
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
            <li className="">
              <span className="flex items-center gap-4">
                <Image
                  src={'/assets/icons/check-badge.svg'}
                  alt="->"
                  width={35}
                  height={35}
                  className="text-tertiary inline-block"
                />
                <span className="text-xl font-bold text-white">
                  Interactive Games
                </span>
              </span>
            </li>
            <li className="">
              <span className="flex items-center gap-4">
                <Image
                  src={'/assets/icons/check-badge.svg'}
                  alt="->"
                  width={35}
                  height={35}
                  className="text-tertiary inline-block"
                />
                <span className="text-xl font-bold text-white">
                  Interactive Flashcards
                </span>
              </span>
            </li>
            <li className="">
              <span className="flex items-center gap-4">
                <Image
                  src={'/assets/icons/check-badge.svg'}
                  alt="->"
                  width={35}
                  height={35}
                  className="text-tertiary inline-block"
                />
                <span className="text-xl font-bold text-white">
                  Test/Assessments
                </span>
              </span>
            </li>
            <li className="">
              <span className="flex items-center gap-4">
                <Image
                  src={'/assets/icons/check-badge.svg'}
                  alt="->"
                  width={35}
                  height={35}
                  className="text-tertiary inline-block"
                />
                <span className="text-xl font-bold text-white">
                  Pre-Recorded Videos
                </span>
              </span>
            </li>
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
    </>
  );
}
