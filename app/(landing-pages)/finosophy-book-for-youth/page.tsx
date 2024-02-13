import Image from 'next/image';

export default function Page() {
  return (
    <>
      <section className="py-4 text-gray-800">
        <div className="container flex flex-col items-center gap-y-4 text-center">
          <span className="text-2xl" style={{ backgroundColor: '#ffff00' }}>
            Want To Geometrically Grow Your Company Online?
          </span>
          <h1 className="text-6xl font-bold">
            &quot;New FREE BOOK Shows <br /> 28 Virtually UNKNOWN Secrets
          </h1>
          <span className="text-4xl">
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
            <div className="z-10 w-[74%] overflow-hidden rounded-lg shadow-lg">
              <div className="w-full bg-secondary text-xl text-white">
                <span className="font-bold">
                  <Image
                    src="/assets/icons/lp/volume-high-solid.svg"
                    width={20}
                    height={20}
                    alt="red"
                    className="inline"
                  />{' '}
                  Make Sure Your Sound Is Turned ON!
                </span>{' '}
                (Please Wait For Video To Fully Load)
              </div>
              <video
                className="shadow-lg"
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
    </>
  );
}
