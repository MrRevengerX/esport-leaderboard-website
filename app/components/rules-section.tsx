import Image from "next/image";
import Link from "next/link";
import { FiBookOpen } from "react-icons/fi";
export default function RulesSection() {
  return (
    <div className="flex flex-col items-center justify-center gap-y-10 bg-primary600 px-4 py-12 md:flex-row md:gap-x-10 md:gap-y-0 lg:gap-x-16">
      <Image
        src="/assets/svg/lady-of-justice.svg"
        width={120}
        height={60}
        alt=""
        className="lg:w-48"
      />
      <div className="flex flex-col items-center gap-y-5 text-center md:max-w-md lg:max-w-xl lg:items-start lg:text-left">
        <div className="text-4xl font-semibold lg:flex lg:gap-x-3 lg:text-5xl">
          <h1 className="">
            Play <span className="outline-text-dark">Fair</span>,
          </h1>
          <h1>Play Smart!</h1>
        </div>
        <p className="font-light">
          Access the game rules now! Click the button above to download and
          understand the guidelines for fair and strategic gameplay.
        </p>
        <Link
          href="/rules"
          target="_blank"
          className="flex items-center gap-x-2 rounded-lg bg-gray-900 px-8 py-3 text-primary600 outline outline-2 transition-colors duration-300 ease-in-out hover:bg-primary600 hover:text-gray-900"
        >
          <FiBookOpen />
          Rule Book
        </Link>
      </div>
    </div>
  );
}
