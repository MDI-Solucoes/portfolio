import Image from "next/image";

const Header = () => {
  return (
    <header className="flex h-28 w-full p-10 items-center">
      <div className="flex space-x-8">
        <a href="#" className="">
          <Image
            src="/icons/github.svg"
            alt="Github logo"
            className="w-5 h-5 "
            priority
            width={1}
            height={1}
          />
        </a>
        <a href="#">
          <Image
            src="/icons/linkedin.svg"
            alt="LinkedIn logo"
            className="w-5 h-5"
            priority
            width={1}
            height={1}
          />
        </a>
        <a href="#" className="flex space-x-2">
          <Image
            src="/icons/globe.svg"
            alt="Globe logo"
            className="w-5 h-5"
            priority
            width={1}
            height={1}
          />
          <span className="font-bold text-xs my-auto">PT-BR</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
