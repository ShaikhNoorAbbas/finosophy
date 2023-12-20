import Image from 'next/image';
import Link from 'next/link';
import IconList from '../icon/IconList';
import Icon from '../icon/Icon';
import Form from '../form/Form';

export default function Footer() {
  return (
    <footer className="bg-primary-dark mt-20">
      <div className="container">
        <div className="border-primary-dark relative top-[-4rem] grid grid-cols-4 gap-10 rounded-b-3xl border-t-8 bg-white p-10 shadow-lg">
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
                icon="assets/icons/facebook-f.svg"
              />
              <Icon
                link="#"
                style="bg-tertiary"
                icon="assets/icons/instagram.svg"
              />
              <Icon
                link="#"
                style="bg-primary-dark"
                icon="assets/icons/x-twitter.svg"
              />
              <Icon
                link="#"
                style="bg-secondary"
                icon="assets/icons/youtube.svg"
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
                <Link href="/kids">for Kids</Link>
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
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                      clipRule="evenodd"
                    />
                  </svg>
                }
                desc="Taikalwadi, Joshi Marg Mahim West, Mumbai - 400016"
              />
              <IconList
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                    <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                  </svg>
                }
                desc="info@letstute.co.in"
              />
              <IconList
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                }
                desc="+91 93214 21265"
              />
            </ul>
          </div>

          <div className="flex flex-col gap-y-5">
            <h4 className="text-primary-dark text-xl font-semibold">
              Subscribe Newsletter
            </h4>

            <Form
              formStyle="flex flex-col gap-2"
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
