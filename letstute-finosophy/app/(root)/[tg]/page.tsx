import Button from '@/components/shared/button/Button';
import CourseCard from '@/components/shared/cards/CourseCard';
import FeatureCard from '@/components/shared/cards/FeatureCard';
import ImgCard from '@/components/shared/cards/ImgCard';
import VideoCard from '@/components/shared/cards/VideoCard';
import SectionHeader from '@/components/shared/header/sectionHeader';
import { tgs } from '@/datasets/tgs';
import Image from 'next/image';
import { notFound } from 'next/navigation';

interface TgProps {
  params: {
    tg: string;
  };
}

export async function generateStaticParams() {
  return tgs.map((tg) => ({ tg: tg.name.toLowerCase() }));
}

export default function Tg({ params }: TgProps) {
  const [tg] = tgs.filter((tg) => tg.name.toLowerCase() === params.tg);

  if (!tg) notFound();

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-20">
        <div className="absolute inset-0 bg-[url('/assets/images/bg-img.png')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-black opacity-[.07]"></div>
        <div className="container relative z-10 grid grid-cols-2 gap-14">
          <div className="flex flex-col items-start gap-y-6">
            <span className="subheading--fill">{tg.heroSection.heading1}</span>
            <h1 className="h1-bold text-primary">{tg.heroSection.heading2}</h1>
            <span className="subheading">
              {`${tg.heroSection.heading3.split(' ').slice(0, -1).join(' ')}`}
              <br />
              <span className="text-primary text-3xl font-bold">
                {`${tg.heroSection.heading3.split(' ').pop()}`}
              </span>
            </span>
            <Button
              href="#products"
              text={`Explore Products for ${tg.name}`}
              style="py-3 px-6 text-xl font-bold text-white"
            />
          </div>
          <div className="flex items-center justify-center">
            <Image
              src={tg.heroSection.img}
              width={500}
              height={500}
              alt="Level 1 Course"
              className="w-[90%]"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container flex flex-col gap-y-16">
          <SectionHeader
            style="items-center"
            subheading="Playful Resources"
            heading="Learn With Lots of Fun!!"
            headingStyle="text-center"
          />

          <div className="grid grid-cols-3 items-start gap-10">
            <ImgCard
              headerStyle="flex-col-reverse"
              heading="Interactive Activities"
              imgSrc="/assets/images/img-card-activity.png"
              desc="Lorem ipsum dolor sit amet consectetur adipisicing elit repellat
          aliquid perspiciatis nisi rem labore."
              btnLink="/kids"
              btnText="Play Now"
            />
            <VideoCard
              headerStyle="flex-col-reverse"
              heading="High-Quality Videos"
              videoSrc="/assets/videos/superman.mp4"
              desc="Lorem ipsum dolor sit amet consectetur adipisicing elit repellat
          aliquid perspiciatis nisi rem labore."
              btnLink="/youth"
              btnText="Watch Now"
            />
            <ImgCard
              headerStyle="flex-col-reverse"
              heading="Interactive Flashcards"
              imgSrc="/assets/images/img-card-flashcard.png"
              desc="Lorem ipsum dolor sit amet consectetur adipisicing elit repellat
          aliquid perspiciatis nisi rem labore."
              btnLink="/teacher"
              btnText="Open Now"
            />
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="relative py-20" id="products">
        <div className="absolute inset-0 bg-[url('/assets/images/section-bg-img.jpg')] bg-cover bg-center opacity-30"></div>
        <div className="bg-primary-dark absolute inset-0 opacity-[.85]"></div>
        <div className="container relative z-10 flex flex-col gap-y-16">
          <SectionHeader
            style="items-center"
            subheading="Affordable"
            heading={`Finosophy Products for ${tg.name}`}
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

      {/* Features Section */}
      <section className="py-20">
        <div className="container flex flex-col gap-y-16">
          <SectionHeader
            style="items-center"
            subheading="Overview"
            heading={`Why Finosophy for ${tg.name}?`}
            headingStyle="text-center"
          />

          <div className="flex flex-wrap justify-center gap-10">
            {tg.featuresSection.features.map((feature) => (
              <FeatureCard
                key={feature.id}
                style="flex-1 min-w-[320px] max-w-[418.67px] bg-white"
                imgSrc={feature.icon}
                heading={feature.heading}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
