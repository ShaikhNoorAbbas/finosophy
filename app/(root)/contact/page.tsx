import ContactCard from '@/components/shared/cards/ContactCard';
import Form from '@/components/shared/form/Form';
import Map from '@/components/shared/map/Map';
import SectionHeader from '@/components/shared/header/SectionHeader';

export default function Contact() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="container">
          <div className="absolute inset-0 bg-[url('/assets/images/bg-img.png')] bg-cover bg-center opacity-30"></div>
          <div className="absolute inset-0 bg-black opacity-[.07]"></div>
          <div className="relative z-10">
            <div className="flex flex-col items-start gap-y-5">
              <h1 className="h1-bold text-primary">Contact Us</h1>
            </div>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="py-20 ">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-10">
            <ContactCard
              heading="Our Office"
              desc1="Taikalwadi, Joshi Marg"
              desc2="Matunga (W), Mumbai-16"
              style="flex-1 min-w-[320px] max-w-[418.67px] bg-primary"
            />
            <ContactCard
              heading="Call Us"
              desc1="+91 88281 36533"
              desc2="+91 75063 63600"
              style="flex-1 min-w-[320px] max-w-[418.67px] bg-secondary"
            />
            <ContactCard
              heading="Mail Us"
              desc1="info@letstute.co.in"
              desc2="info@letstute.com"
              style="flex-1 min-w-[320px] max-w-[418.67px] bg-tertiary"
            />
          </div>
        </div>
      </section>

      {/* Map/Form Section */}
      <section className="pb-20">
        <div className="container grid gap-14 md:grid-cols-2">
          <Map />
          <div className="flex flex-col gap-y-8">
            <SectionHeader
              style="items-center"
              subheading="24/7 Support"
              heading="Get in Touch Now!"
              headingStyle="text-center"
            />
            <Form
              formStyle="grid grid-cols-2 gap-6"
              inputStyle="text-bold px-4 py-2"
              inputs={[
                { id: 'name', type: 'text', name: 'name', placeholder: 'Name' },
                {
                  id: 'phone',
                  type: 'text',
                  name: 'phone',
                  placeholder: 'Phone',
                },
                {
                  id: 'email',
                  type: 'email',
                  name: 'email',
                  placeholder: 'Email',
                },
                {
                  id: 'subject',
                  type: 'text',
                  name: 'subject',
                  placeholder: 'Subject',
                },
              ]}
              textareaStyle="col-span-2 text-bold px-4 py-2"
              textareas={[
                {
                  id: 'message',
                  name: 'message',
                  cols: 30,
                  rows: 8,
                  placeholder: 'Message',
                },
              ]}
              btnStyle="col-span-2 px-6 py-3 text-lg"
              btnText="Send My Message"
              spreadsheetId="1QacWTp_9u-HV7KwobWLYe88t3as7kNeliJKUTBDI5iU"
              sheetName="contact"
            />
          </div>
        </div>
      </section>
    </>
  );
}
