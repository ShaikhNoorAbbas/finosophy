import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-primary-dark">
      <div className="container">
        <div className="border-primary-dark grid grid-cols-4 gap-10 rounded-b-3xl border-t-8 bg-white p-10 shadow-lg">
          <div className="flex flex-col gap-y-5">
            <Image
              src="/assets/images/logo.png"
              width={150}
              height={32}
              alt="Finosophy"
            />
            <p>
              Efficitur potenti maecenas consectetuer mollis tempus ornare erat
              cursus.
            </p>
            <div className="flex">fb insta x</div>
          </div>
          <div className="">
            <h4 className="text-primary-dark text-xl font-semibold">
              Useful Links
            </h4>
          </div>
          <div className="">
            <h4 className="text-primary-dark text-xl font-semibold">
              Contact Us
            </h4>
          </div>
          <div className="">
            <h4 className="text-primary-dark text-xl font-semibold">
              Subscribe Newsletter
            </h4>
          </div>
        </div>
        <p className="py-5 text-center text-gray-400">
          Copyright © 2024 Finosophy, All rights reserved. Presented by Letstute
        </p>
      </div>
    </footer>
  );
}
