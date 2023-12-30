import Image from 'next/image';
import Link from 'next/link';
import IconList from '../icon/IconList';
import Icon from '../icon/Icon';
import Form from '../form/Form';

export default function Footer() {
  return (
    <footer className="bg-primary-dark mt-20">
      <div className="container">
        <div className="border-primary-dark relative top-[-4rem] grid grid-cols-1 gap-10 rounded-b-3xl border-t-8 bg-white p-10 shadow-lg sm:grid-cols-2 lg:grid-cols-4">
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
              Efficitur potenti maecenas consectetuer mollis tempus ornare erat
              cursus.
            </p>
            <div className="flex gap-2">
              <Icon
                link="#"
                style="bg-primary"
                icon="/assets/icons/facebook-f.svg"
              />
              <Icon
                link="#"
                style="bg-tertiary"
                icon="/assets/icons/instagram.svg"
              />
              <Icon
                link="#"
                style="bg-primary-dark"
                icon="/assets/icons/x-twitter.svg"
              />
              <Icon
                link="#"
                style="bg-secondary"
                icon="/assets/icons/youtube.svg"
              />
            </div>
          </div>

          <div className="flex flex-col gap-y-5">
            <h4 className="text-primary-dark text-xl font-semibold">
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
            <h4 className="text-primary-dark text-xl font-semibold">
              Contact Us
            </h4>
            <ul className="flex flex-col gap-y-2">
              <IconList
                icon="/assets/icons/location-dot-solid.svg"
                iconStyle="h-9 w-9 p-2"
                alt="Location"
                desc="Taikalwadi, Joshi Marg Mahim West, Mumbai - 400016"
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
                desc="+91 93214 21265"
              />
            </ul>
          </div>

          <div className="flex flex-col gap-y-5">
            <h4 className="text-primary-dark text-xl font-semibold">
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
            />
          </div>
        </div>

        <p className="relative top-[-2rem] text-center text-gray-400">
          Copyright © 2024 Finosophy, All rights reserved. Presented by Letstute
        </p>
      </div>
    </footer>
  );
}
