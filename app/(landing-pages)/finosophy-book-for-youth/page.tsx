import LpButton from '@/components/shared/button/LpButton';
import LpVideoCard from '@/components/shared/cards/LpVideoCard';
import LpBonusCard from '@/components/shared/cards/TgBonusCard';
import Image from 'next/image';

export default function Page() {
  return (
    <>
      {/* Section 1 */}
      <section className="mb-10 py-4 text-gray-800">
        <div className="lp-container flex flex-col items-center gap-y-4 text-center">
          <span
            className="p-2 text-xl sm:text-2xl"
            style={{ backgroundColor: '#ffff00' }}
          >
            Want To Geometrically Grow Your Company Online?
          </span>

          <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
            &quot;New FREE BOOK Shows <br /> 28 Virtually UNKNOWN Secrets
          </h1>

          <span className="text-2xl sm:text-3xl md:text-4xl">
            To Grow Any Company Online{' '}
            <span className="underline">With Sales Funnels</span>...&quot;
          </span>

          <div className="relative flex flex-col items-center">
            <Image
              src="/assets/images/lp/red.png"
              width={2000}
              height={819}
              alt="red"
              className="absolute"
            />
            <div className="z-10 w-[95%] overflow-hidden rounded-lg shadow-lg md:w-[74%]">
              <div className="flex w-full flex-col justify-center bg-secondary p-1 text-sm text-white sm:text-base md:text-lg lg:flex-row">
                <span className="px-4 font-bold">
                  <Image
                    src="/assets/icons/lp/volume-high-solid.svg"
                    width={20}
                    height={20}
                    alt="red"
                    className="inline"
                  />{' '}
                  Make Sure Your Sound Is Turned ON!
                </span>
                <span>(Please Wait For Video To Fully Load)</span>
              </div>
              <video
                className="shadow-xl"
                src="https://player.vimeo.com/progressive_redirect/download/912516567/rendition/1080p/finosphy_logo_%28intro%29_1%20%281080p%29.mp4?loc=external&signature=9e5468111115658085fc0f71459765a35e1e9410aa8da5c2fdb17f3d1a988de9"
                controls
                loop
                muted
                autoPlay
              ></video>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="mb-20">
        <div className="container flex justify-center">
          <div className="relative w-[72%] rounded-lg bg-primary-dark">
            <Image
              src="/assets/images/lp/dotcom-secrets-min.png"
              width={300}
              height={291}
              alt="red"
              className="absolute left-[-1rem] top-[-.5rem]"
            />
            <div className="ml-80 mr-10 flex flex-col items-center justify-center py-4 pr-6 text-center text-white">
              <h1 className="text-[2.6rem] font-bold">
                Send Me Your Address...
              </h1>
              <span className="mb-4 text-2xl leading-7">
                I&apos;d like to rush a FREE copy of my brand new hardcover book
                to your doorstep, ASAP!
              </span>
              <LpButton
                href="#"
                iconStyle="w-[1.25rem]"
                text1="YES! RESERVE MY FREE COPY NOW!"
                text2="Offer ends at 4.30pm (limited time deal)"
                text1Style="text-xl lg:text-2xl font-bold"
                text2Style="text-base lg:text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="mb-10 text-gray-800">
        <div className="container flex flex-col items-center gap-y-4 text-center">
          <div className="mb-7 w-full sm:w-[75%] lg:w-[50%]">
            <span className="text-3xl font-bold leading-none md:text-4xl lg:text-[2.5rem]">
              What Others Are Saying About &apos;<i>Finosophy Youth eBook?</i>{' '}
              &apos;
            </span>
          </div>

          <div className="grid w-full grid-cols-1 gap-10 sm:grid-cols-2 md:w-[74%] md:grid-cols-2">
            <LpVideoCard
              src="https://player.vimeo.com/progressive_redirect/download/912881735/rendition/720p/lp-review-1%20%28720p%29.mp4?loc=external&signature=e369cebac4e4e25d9f0e666fd1b4042da226c8026766f11f5523e4f000c517b4"
              testimonial={`"I've underlined something in almost every page! I wish I wrote this book - it's
REALLY THAT GOOD!"`}
              author="— Jeff Walker"
            />
            <LpVideoCard
              src="https://player.vimeo.com/progressive_redirect/download/912881902/rendition/720p/lp-review-2%20%28720p%29.mp4?loc=external&signature=03aa2a767c364b58ea1d0cdd203e0d0a7c02557f5a83bfc8f523fbb591860db3"
              testimonial={`"I've underlined something in almost every page! I wish I wrote this book - it's
REALLY THAT GOOD!"`}
              author="— Jeff Walker"
            />
            <LpVideoCard
              src="https://player.vimeo.com/progressive_redirect/download/912883771/rendition/720p/lp-review-3%20%28720p%29.mp4?loc=external&signature=d300b00ac15af5f8186261bea8a3b4651c55e5c27360980cb1e5644c288aa0ad"
              testimonial={`"I've underlined something in almost every page! I wish I wrote this book - it's
REALLY THAT GOOD!"`}
              author="— Jeff Walker"
            />
            <LpVideoCard
              src="https://player.vimeo.com/progressive_redirect/download/912888912/rendition/720p/lp-review-4%20%28720p%29.mp4?loc=external&signature=ef9221538fcfd070fbb6d9811c6298de8e304ba4524531a0b1ddabbe743479fd"
              testimonial={`"I've underlined something in almost every page! I wish I wrote this book - it's
REALLY THAT GOOD!"`}
              author="— Jeff Walker"
            />
          </div>

          <div className="w-full sm:w-[75%] lg:w-[50%]">
            <LpButton
              href="#"
              iconStyle="w-[1.25rem]"
              text1="YES! RESERVE MY FREE COPY NOW!"
              text2="Offer ends at 4.30pm (limited time deal)"
              text1Style="text-xl lg:text-2xl font-bold"
              text2Style="text-base lg:text-lg"
            />
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section className="bg-gray-100 py-10">
        <div className="container flex justify-center">
          <div className="flex w-full flex-col items-center gap-y-3 text-center sm:w-[75%] lg:w-[56%]">
            <span className="text-2xl leading-none sm:text-3xl lg:text-[2.7rem]">
              Claim Your FREE Book Now and
            </span>
            <span className="mb-4 text-2xl font-bold leading-none text-secondary sm:text-3xl lg:text-[2.7rem]">
              Get These FREE Bonuses!
            </span>

            <LpBonusCard
              title1Num="Bonus #1 - "
              title1="The 3 Core Funnels eBook"
              title2="Funnel Stacking, The 3 Core Funnels And How They Work Together!"
              price="Total Value: $47.00"
              src="/assets/images/lp/funnelu-trans.png"
              desc1="After almost 21 years of being online, I discovered that there are CONSISTENTLY just 3 basic funnels that are responsible for the wealth and success of most online businesses."
              bottomBonus="Get This For FREE When You Order Your Copy Of DotCom Secrets Today! "
            />
          </div>
        </div>
      </section>
    </>
  );
}
