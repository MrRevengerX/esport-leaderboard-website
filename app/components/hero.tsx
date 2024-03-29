"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center gap-7  text-white md:gap-12 md:px-10 ">
      <div className="text-5xl font-medium uppercase tracking-wider md:text-7xl">
        <h1 className="">Ascend to</h1>
        <h1 className="mt-2 text-primary600">Greatness</h1>
      </div>
      <p className="mb-3 max-w-xs text-center font-light tracking-wide md:max-w-md md:text-xl">
        Conquer the Leaderboard & Reign Supreme in Mobile Gaming!
      </p>
      <div className="">
        <a
          onClick={() => {
            window.scrollTo(0, 800);
          }}
          className="flex cursor-pointer items-center gap-2 rounded-lg bg-primary600 px-8 py-3 tracking-wider text-gray-900 transition-colors duration-300 ease-in-out hover:bg-gray-800 hover:text-primary600 md:text-xl"
        >
          Leaderboard
        </a>
      </div>

      <Image
        src="/assets/png/background.jpg"
        fill
        className="-z-10 block bg-gray-900 object-cover"
        alt=""
      />
    </div>
  );
}
