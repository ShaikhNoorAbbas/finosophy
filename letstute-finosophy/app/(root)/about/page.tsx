import SectionHeader from '@/components/shared/header/sectionHeader';
import Image from 'next/image';

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="container">
          <div className="absolute inset-0 bg-[url('/assets/images/bg-img.png')] bg-cover bg-center opacity-30"></div>
          <div className="absolute inset-0 bg-black opacity-[.07]"></div>
          <div className="relative z-10 grid grid-cols-2 gap-14">
            <div className="flex flex-col items-start gap-y-5">
              <h2 className="h1-bold text-primary">About Us</h2>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container grid gap-14 md:grid-cols-2">
          <div className="flex flex-col gap-y-8">
            <SectionHeader
              subheading="About Finosophy"
              heading="The right environment for growing"
            />
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
              laudantium! Molestias, inventore nesciunt aliquam iusto harum nisi
              eum enim illo!
            </p>
          </div>

          <div>
            <Image
              src={'/assets/images/about.jpg'}
              width={500}
              height={500}
              alt="About image"
              className="w-full rounded-3xl"
            />
          </div>
        </div>
      </section>
    </>
  );
}
