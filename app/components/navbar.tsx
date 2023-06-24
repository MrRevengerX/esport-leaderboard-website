"use client";

import { RiFacebookFill, RiYoutubeFill, RiTwitchFill } from "react-icons/ri";
import { RxDiscordLogo } from "react-icons/rx";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  function scrollToTop() {
    window.scrollTo(0, 0);
  }
  return (
    <nav className="fixed z-50 min-w-full p-3 lg:pt-8">
      <div className="flex justify-between rounded-2xl border border-primary600/40 bg-gray-900/30 p-3 backdrop-blur-sm lg:mx-auto lg:max-w-7xl">
        <div className="hidden items-center gap-4 text-2xl text-white lg:flex">
          <a href="https://www.facebook.com/MrRevengerX" target="_blank">
            <RiFacebookFill className="transition-colors duration-300 ease-in-out hover:text-primary600" />
          </a>
          <a href="https://www.youtube.com/@RevengerX" target="_blank">
            <RiYoutubeFill className="transition-colors duration-300 ease-in-out hover:text-primary600" />
          </a>
          <a href="https://www.twitch.tv/mrrevengerx" target="_blank">
            <RiTwitchFill className="transition-colors duration-300 ease-in-out hover:text-primary600" />
          </a>
          <a href="https://discord.gg/3hXAbmx5fY" target="_blank">
            <RxDiscordLogo className="transition-colors duration-300 ease-in-out hover:text-primary600" />
          </a>
        </div>
        <Image
          onClick={scrollToTop}
          src="/assets/svg/xtreme-league-logo.svg"
          width={50}
          height={50}
          alt=""
          className="cursor-pointer"
        />

        <Link
          href="/register"
          target="_blank"
          className="rounded-lg bg-primary600 px-6 py-2 text-base text-gray-900 transition-colors duration-300 ease-in-out hover:bg-gray-800 hover:text-primary600 lg:px-8 lg:uppercase"
        >
          Register
        </Link>
      </div>
    </nav>
  );
}
