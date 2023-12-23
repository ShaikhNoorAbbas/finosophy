import Button from '@/components/shared/button/Button';

export default function NotFound() {
  return (
    <section className="h-screen">
      <div className="container flex h-full flex-col items-center justify-center gap-y-5">
        <h3 className="h3-bold text-center">Oops! Page Not Found...</h3>
        <Button
          href="/"
          text="Back to Home Page"
          style="py-3 px-6 text-xl font-bold text-white"
        />
      </div>
    </section>
  );
}
