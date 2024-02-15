import Image from 'next/image';

export default function LpFooter() {
  return (
    <>
      <div className="w-full border-t-8 border-secondary bg-gray-800 p-10 text-center text-white">
        <div className="container">
          <div className="flex justify-center">
            <Image
              src="/assets/images/logo.png"
              width={150}
              height={32}
              alt="Logo"
              className="w-[140px]"
            />
          </div>

          <div className="py-3">
            <p>
              ClickFunnels is a website and funnel builder company that helps
              existing businesses sell their products and services online. We
              make no claims or representation that by using ClickFunnels you
              will earn money or make your money back. Testimonials shown are
              real experiences from paying users of ClickFunnels. Their
              business’s results are not typical, and your business’s experience
              will vary based upon the effort and education of your business’s
              employees and management, the business model that is implemented,
              and market forces beyond anyone’s control.
            </p>
          </div>

          <div className="py-3">
            <p>
              California residents can obtain information about the categories
              of personal information collected, and the business purposes for
              which the information is collected, by clicking here.
            </p>
          </div>

          <div>
            <p>
              Etison LLC - © 2024 All Rights Reserved | 3443 W Bavaria St Eagle,
              ID 83616
            </p>
          </div>

          <ul className="flex justify-center gap-2 pt-5">
            <li className="cursor-pointer text-secondary underline">Terms</li>
            <span>-</span>
            <li className="cursor-pointer text-secondary underline">Support</li>
            <span>-</span>

            <li className="cursor-pointer text-secondary underline">Privacy</li>
            <span>-</span>

            <li className="cursor-pointer text-secondary underline">Careers</li>
            <span>-</span>

            <li className="cursor-pointer text-secondary underline">
              Cookie Preferences
            </li>
            <span>-</span>

            <li className="cursor-pointer text-secondary underline ">
              Your First Funnel Challenge
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
