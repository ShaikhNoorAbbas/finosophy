import Image from 'next/image';
import Link from 'next/link';
import IconList from '../icon/IconList';
import Icon from '../icon/Icon';
import Form from '../form/Form';

export default function Footer() {
  return (
    <footer className="mt-20 bg-primary-dark">
      <div className="container">
        <div className="relative top-[-4rem] grid grid-cols-1 gap-10 rounded-b-3xl border-t-8 border-primary-dark bg-white p-10 shadow-lg sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-y-5">
            <Link href="/">
              <Image
                src="/assets/images/logo-dark.png"
                width={150}
                height={32}
                alt="Finosophy"
              />
            </Link>
            <p>
              Pathway to build financially literate & resilient students through
              scientifically curated courses.
            </p>
            <div className="flex gap-2">
              <Icon
                link="https://www.facebook.com/letstutefinosophy"
                style="bg-primary"
                icon="/assets/icons/facebook-f.svg"
              />
              <Icon
                link="https://www.instagram.com/letstute_finosophy_"
                style="bg-tertiary"
                icon="/assets/icons/instagram.svg"
              />
              <Icon
                link="https://twitter.com/finosophy_LT"
                style="bg-primary-dark"
                icon="/assets/icons/x-twitter.svg"
              />
              <Icon
                link="https://www.youtube.com/@LetstuteHindi"
                style="bg-secondary"
                icon="/assets/icons/youtube.svg"
              />
            </div>
          </div>

          <div className="flex flex-col gap-y-5">
            <h4 className="text-xl font-semibold text-primary-dark">
              Useful Links
            </h4>

            <ul className="footer-nav flex flex-col items-start gap-y-2">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/student">for Student</Link>
              </li>
              <li>
                <Link href="/youth">for Youth</Link>
              </li>
              <li>
                <Link href="/teacher">for Teacher</Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-y-5">
            <h4 className="text-xl font-semibold text-primary-dark">
              Contact Us
            </h4>
            <ul className="flex flex-col gap-y-2">
              <IconList
                icon="/assets/icons/location-dot-solid.svg"
                iconStyle="h-9 w-9 p-2"
                alt="Location"
                desc="Taikalwadi, Joshi Marg, Matunga West, Mumbai-16"
              />
              <IconList
                icon="/assets/icons/envelope-solid.svg"
                iconStyle="h-9 w-9 p-2"
                alt="Mail"
                desc="info@letstute.co.in"
              />
              <IconList
                icon="/assets/icons/phone-solid.svg"
                iconStyle="h-9 w-9 p-2"
                alt="Phone"
                desc="+91 88281 36533"
              />
            </ul>
          </div>

          <div className="flex flex-col gap-y-5">
            <h4 className="text-xl font-semibold text-primary-dark">
              Subscribe Newsletter
            </h4>

            <Form
              formStyle="flex flex-col gap-4"
              inputStyle="px-[1rem] py-[.3rem] text-base"
              inputs={[
                { id: 'name', type: 'text', name: 'name', placeholder: 'Name' },
                {
                  id: 'email',
                  type: 'email',
                  name: 'email',
                  placeholder: 'Email',
                },
              ]}
              btnStyle="self-start px-[1rem] py-[.3rem] text-base"
              btnText="Submit"
              spreadsheetId="1QacWTp_9u-HV7KwobWLYe88t3as7kNeliJKUTBDI5iU"
              sheetName="newsletter"
            />
          </div>
        </div>

        <p className="relative top-[-2rem] pb-10 text-center text-gray-400">
          Copyright © 2024 Finosophy, All rights reserved. Presented by Letstute
        </p>
      </div>
    </footer>
  );
}
