import Button from '@/components/shared/button/Button';
import CourseCard from '@/components/shared/cards/CourseCard';
import FeatureCard from '@/components/shared/cards/FeatureCard';
import SectionHeader from '@/components/shared/header/sectionHeader';
import { tgs } from '@/datasets/tgs';

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

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-[url('/assets/images/bg-img.png')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-black opacity-[.07]"></div>
        <div className="container relative z-10 grid grid-cols-2 gap-14">
          <div className="flex flex-col items-start gap-y-5">
            <span className="subheading--fill">{tg.heroSection.heading1}</span>
            <h1 className="h1-bold text-primary">{tg.heroSection.heading2}</h1>
            <span className="subheading">
              {`${tg.heroSection.heading3.split(' ').slice(0, -1).join(' ')}`}{' '}
              <span className="text-primary text-3xl font-bold">
                {`${tg.heroSection.heading3.split(' ').pop()}`}
              </span>
            </span>
            <Button
              href="#products"
              text={`Explore Products for ${tg.name}`}
              style="py-3 px-6 text-xl font-bold bg-secondary text-white"
            />
          </div>
          <div>{/* Video here... */}</div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container flex flex-col gap-y-16">
          <SectionHeader
            subheading="Overview"
            heading={`Why Finosophy for ${tg.name}?`}
          />

          <div className="grid grid-cols-3 gap-10">
            <FeatureCard
              imgSrc="https://www.letstute.com/s/pages/assets/images/growth.png"
              heading="Build Financial Knowledge
"
            />
            <FeatureCard
              imgSrc="https://www.letstute.com/s/pages/assets/images/equilibrium.png"
              heading="Manage Finance Effectively"
            />
            <FeatureCard
              imgSrc="https://www.letstute.com/s/pages/assets/images/audio-book.png"
              heading="Self-paced Learning"
            />
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="relative py-20" id="products">
        <div className="absolute inset-0 bg-[url('/assets/images/bg-img.png')] bg-cover bg-center opacity-30"></div>
        <div className="bg-primary-dark absolute inset-0 opacity-[.8]"></div>
        <div className="container relative z-10 flex flex-col gap-y-16">
          <SectionHeader
            subheading="Purchase Now!"
            heading={`Finosophy Products for ${tg.name}`}
            headingStyle="text-white"
          />

          <div className="grid grid-cols-3 gap-10">
            <CourseCard
              cardLink="#"
              imgSrc="https://www.letstute.com/s/pages/assets/images/letstute-level-1-cover.png"
            />
            <CourseCard
              cardLink="#"
              imgSrc="https://www.letstute.com/s/pages/assets/images/letstute-level-2-cover.png"
            />
            <CourseCard
              cardLink="#"
              imgSrc="https://www.letstute.com/s/pages/assets/images/letstute-level-3-cover.png"
            />
          </div>
        </div>
      </section>
    </>
  );
}
