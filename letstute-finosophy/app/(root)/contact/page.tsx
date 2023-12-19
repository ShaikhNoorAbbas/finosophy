import ContactCard from '@/components/shared/cards/ContactCard';
import Form from '@/components/shared/form/Form';
import Map from '@/components/shared/map/Map';
import SectionHeader from '@/components/shared/header/sectionHeader';

export default function Contact() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="container">
          <div className="absolute inset-0 bg-[url('/assets/images/bg-img.png')] bg-cover bg-center opacity-30"></div>
          <div className="absolute inset-0 bg-black opacity-[.07]"></div>
          <div className="relative z-10 grid grid-cols-2 gap-14 ">
            <div className="flex flex-col items-start gap-y-5">
              <h2 className="h1-bold text-primary">Contact Us</h2>
            </div>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="py-20 ">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-10">
            <ContactCard
              heading="Our School"
              desc1="Jln Cempaka Wangi No 22,"
              desc2="Jakarta - Indonesia"
              style="flex-1 min-w-[320px] max-w-[418.67px] bg-primary"
            />
            <ContactCard
              heading="Call Us"
              desc1="+6221.2002.2012"
              desc2="+6221.2002.2021"
              style="flex-1 min-w-[320px] max-w-[418.67px] bg-secondary"
            />
            <ContactCard
              heading="Mail Us"
              desc1="support@yourdomain.tld"
              desc2="hello@yourdomain.tld"
              style="flex-1 min-w-[320px] max-w-[418.67px] bg-tertiary"
            />
          </div>
        </div>
      </section>

      {/* Map/Form Section */}
      <section className="pb-20">
        <div className="container grid grid-cols-2 gap-20">
          <Map />
          <div>
            <SectionHeader
              subheading="24/7 Support"
              heading="Get in Touch Now!"
            />
            <Form />
          </div>
        </div>
      </section>
    </>
  );
}
