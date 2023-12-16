import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-primary-dark flex py-5">
      <div className="container">
        <Image
          src="/assets/images/logo.png"
          width={150}
          height={32}
          alt="Finosophy"
        />
      </div>
    </header>
  );
}
