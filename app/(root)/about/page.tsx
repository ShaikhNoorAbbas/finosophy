import FeatureCard from '@/components/shared/cards/FeatureCard';
import SectionHeader from '@/components/shared/header/SectionHeader';
import ProgressBar from '@/components/shared/progress-bar/ProgressBar';
import Image from 'next/image';

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="container">
          <div className="absolute inset-0 bg-[url('/assets/images/bg-img.png')] bg-cover bg-center opacity-30"></div>
          <div className="absolute inset-0 bg-black opacity-[.07]"></div>
          <div className="relative z-10">
            <div className="flex flex-col items-start gap-y-5">
              <h1 className="h1-bold text-primary">About Us</h1>
            </div>
          </div>
        </div>
      </section>

      {/* About Finosophy Section */}
      <section className="py-20">
        <div className="container grid items-center gap-14 md:grid-cols-2">
          <div className="flex flex-col gap-y-8">
            <SectionHeader
              subheading="About Finosophy"
              heading="Financial Education Made Easy"
            />
            <p className="text-lg">
              Pathway to build financially literate & resilient students through
              scientifically curated course with lesson plans, interactive
              games, flashcards & live projects.
            </p>

            <div className="flex flex-col gap-5">
              <ProgressBar
                heading="Financial Basics"
                percentage={90}
                bgColor="#753cbe"
                textColor="#fff"
              />
              <ProgressBar
                heading="Affordability"
                percentage={95}
                bgColor="#f4313f"
                textColor="#fff"
              />
              <ProgressBar
                heading="Financial Planning"
                percentage={85}
                bgColor="#00a09b"
                textColor="#fff"
              />
              <ProgressBar
                heading="Long-term Benefits"
                percentage={99}
                bgColor="#e6b103"
                textColor="#fff"
              />
            </div>
          </div>

          <div>
            <Image
              src={'/assets/images/about-hero-img.jpg'}
              width={500}
              height={500}
              alt="About image"
              className="w-full rounded-3xl"
            />
          </div>
        </div>
      </section>

      {/* About Letstute Section */}
      <section className="bg-white py-20">
        <div className="container flex flex-col gap-y-16">
          <div className="flex flex-col gap-y-8">
            <SectionHeader
              style="items-center"
              subheading="About Letstute"
              heading="EdTech Company Based in Mumbai"
              headingStyle="text-center"
            />
            <p className="text-center text-lg">
              Letstute (Universal Learning Aid Pvt Ltd) is an E-learning company
              based in Mumbai, India. Letstute today is 10 years old. Our goal
              from the beginning is to create a meaningful and a positive impact
              in the education segment by providing quality education content to
              everyone who wants to explore, visualize and apply their learning
              to real life.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-14 md:grid-cols-2">
            <FeatureCard
              style="bg-white"
              imgSrc="/assets/icons/eye-solid.svg"
              imgStyle="w-[35px]"
              heading="Our Vision"
              desc="Our vision is to make sure that we provide our students with quality education.
              We encourage our students to gain more and more knowledge along with providing them with our excellent education sources."
            />
            <FeatureCard
              style="bg-white"
              imgSrc="/assets/icons/flag-solid.svg"
              imgStyle="w-[35px]"
              heading="Our Goal"
              desc="Our goal is to fulfill your dreams of turning your passion into a beautiful profession!
              We do believe in providing not just good education but also to make sure that our students perceive their dreams after completing the courses."
            />
          </div>
        </div>
      </section>
    </>
  );
}
