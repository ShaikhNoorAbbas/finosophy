export default function Category() {
  return (
    <div className="relative py-20">
      <div className="absolute inset-0 bg-[url('/assets/images/bg-img.png')] bg-cover bg-center opacity-30"></div>
      <div className="absolute inset-0 bg-black opacity-[.07]"></div>
      <div className="container relative z-10 grid grid-cols-2 gap-14">
        <div className="flex flex-col items-start gap-y-5">
          <span className="subheading--fill">
            Seeking Financial Education for Your Kid?
          </span>
          <h1 className="h1-bold text-primary">
            Everything You Need is Here!!
          </h1>
          <span className="subheading">
            Make Your Child Financially Confident with{' '}
            <span className="text-primary text-3xl font-bold">Finosophy</span>
          </span>
        </div>
        <div>{/* Other content */}</div>
      </div>
    </div>
  );
}
