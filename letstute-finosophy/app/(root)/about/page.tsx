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
    </>
  );
}
