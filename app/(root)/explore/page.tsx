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
      <div className="pb-20 pt-24">
        <div className="container flex flex-col gap-y-24">
          <ExploreCard
            bgColor="#e3d8f2"
            headingBg="#753cbe"
            heading="Interactive Games"
          >
            <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 md:gap-10">
              <div className="relative" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute inset-0 h-full w-full rounded-lg shadow-lg"
                  style={{ outline: '3px solid #753cbe' }}
                  src="/assets/course-samples/level-1-chapter-5-game/story.html"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="relative" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute inset-0 h-full w-full rounded-lg shadow-lg"
                  style={{ outline: '3px solid #753cbe' }}
                  src="/assets/course-samples/level-3-chapter-5-game/story.html"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </ExploreCard>

          <ExploreCard
            bgColor="#fdd6d9"
            headingBg="#f4313f"
            heading="Interactive Flashcards"
          >
            <div className="grid grid-cols-1 gap-7 sm:grid-cols-3 md:gap-10">
              <div className="relative" style={{ paddingBottom: '177.78%' }}>
                <iframe
                  className="absolute inset-0 h-full w-full rounded-lg shadow-lg"
                  style={{ outline: '3px solid #f4313f' }}
                  src="/assets/course-samples/level-1-chapter-5-flashcard/story.html"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="relative" style={{ paddingBottom: '177.78%' }}>
                <iframe
                  className="absolute inset-0 h-full w-full rounded-lg shadow-lg"
                  style={{ outline: '3px solid #f4313f' }}
                  src="/assets/course-samples/level-3-chapter-7-flashcard/story.html"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="relative" style={{ paddingBottom: '177.78%' }}>
                <iframe
                  className="absolute inset-0 h-full w-full rounded-lg shadow-lg"
                  style={{ outline: '3px solid #f4313f' }}
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
            <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 md:gap-10">
              <div className="relative" style={{ paddingBottom: '56.25%' }}>
                <video
                  className="absolute inset-0 h-full w-full rounded-lg shadow-lg"
                  style={{ outline: '3px solid #00a09b' }}
                  src="https://player.vimeo.com/progressive_redirect/download/908957775/rendition/1080p/level-3-course-video%20%281080p%29.mp4?loc=external&signature=992eb095d8d85d63ed1a8e998abed2663c9bbdb20bca5696004fc26086a9b693"
                  controls
                  loop
                  muted
                  autoPlay
                ></video>
              </div>
              <div className="relative" style={{ paddingBottom: '56.25%' }}>
                <video
                  className="absolute inset-0 h-full w-full rounded-lg shadow-lg"
                  style={{ outline: '3px solid #00a09b' }}
                  src="https://player.vimeo.com/progressive_redirect/playback/908957560/rendition/1080p/file.mp4?loc=external&log_user=0&signature=d4333f0db40330d5f655230835659a02259659e1956051ffdc3e5f7a3fc1cee0"
                  controls
                  loop
                  muted
                  autoPlay
                ></video>
              </div>
            </div>
          </ExploreCard>
        </div>
      </div>
    </>
  );
}
