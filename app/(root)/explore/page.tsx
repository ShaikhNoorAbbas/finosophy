import ExploreCard from '@/components/shared/cards/ExploreCard';

export default function Explore() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="container">
          <div className="absolute inset-0 bg-[url('/assets/images/bg-img.png')] bg-cover bg-center opacity-30"></div>
          <div className="absolute inset-0 bg-black opacity-[.07]"></div>
          <div className="relative z-10 grid grid-cols-2 gap-14">
            <div className="flex flex-col items-start gap-y-5">
              <h1 className="h1-bold text-primary">Explore Program</h1>
            </div>
          </div>
        </div>
      </section>

      {/* Games Category Section */}
      <div className="py-20">
        <div className="container flex flex-col gap-y-16">
          <ExploreCard
            bgColor="#e3d8f2"
            headingBg="#753cbe"
            heading="Interactive Games"
          >
            <div className=""></div>
          </ExploreCard>

          <ExploreCard
            bgColor="#fdd6d9"
            headingBg="#f4313f"
            heading="Interactive Flashcards"
          >
            <div className="grid grid-cols-4 gap-10">
              <div className="relative" style={{ paddingBottom: '177.78%' }}>
                <iframe
                  className="absolute inset-0 h-full w-full rounded-lg shadow-lg"
                  src="http://creations.letstute.com/articulate/demo/story.html"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="relative" style={{ paddingBottom: '177.78%' }}>
                <iframe
                  className="absolute inset-0 h-full w-full rounded-lg shadow-lg"
                  src="http://creations.letstute.com/articulate/demo/story.html"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="relative" style={{ paddingBottom: '177.78%' }}>
                <iframe
                  className="absolute inset-0 h-full w-full rounded-lg shadow-lg"
                  src="http://creations.letstute.com/articulate/demo/story.html"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="relative" style={{ paddingBottom: '177.78%' }}>
                <iframe
                  className="absolute inset-0 h-full w-full rounded-lg shadow-lg"
                  src="http://creations.letstute.com/articulate/demo/story.html"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </ExploreCard>

          <ExploreCard
            bgColor="#cceceb"
            headingBg="#00a09b"
            heading="High-Quality Videos"
          >
            <div className=""></div>
          </ExploreCard>
        </div>
      </div>
    </>
  );
}
