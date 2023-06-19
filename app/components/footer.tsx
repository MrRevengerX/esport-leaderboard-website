import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center gap-4 p-6 text-white md:w-full md:flex-row md:justify-between md:px-10 lg:mx-auto lg:max-w-6xl">
      <Image
        src="/assets/svg/rev-logo.svg"
        alt="logo"
        width={100}
        height={100}
        className="order-2 md:order-1"
      />
      <p className="order-1 text-sm font-light md:order-2">
        © 2023{" "}
        <a
          href="https://revengerx.dev"
          className="transition-colors duration-300 ease-in-out hover:text-primary600"
          target="_blank"
        >
          RevengerX.
        </a>
      </p>
    </footer>
  );
}
