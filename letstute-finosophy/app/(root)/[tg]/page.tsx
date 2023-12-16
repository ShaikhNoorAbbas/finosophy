import FeatureCard from '@/components/shared/feature-card/FeatureCard';
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
              <span className="text-secondary text-3xl font-bold">
                {`${tg.heroSection.heading3.split(' ').pop()}`}
              </span>
            </span>
          </div>
          <div>{/* Video here... */}</div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container flex flex-col gap-y-16">
          <div className="flex flex-col items-center gap-y-3">
            <span className="subheading--secondary">Overview</span>
            <h2 className="h2-bold text-primary">
              Why Finosophy for {tg.name}
            </h2>
          </div>

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
    </>
  );
}
