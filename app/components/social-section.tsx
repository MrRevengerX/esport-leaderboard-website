import { RiFacebookFill, RiYoutubeFill, RiTwitchFill } from "react-icons/ri";
import { RxDiscordLogo } from "react-icons/rx";

export default function SocialSection() {
  return (
    <div className=" flex flex-col items-center justify-center gap-y-8 py-12 text-white  ">
      <h1 className="text-3xl">Stay Connected</h1>
      <div className="grid min-w-[200px] grid-cols-1 items-center justify-center gap-y-5 md:grid-cols-2 md:gap-5 lg:text-lg">
        <a
          className="flex  cursor-pointer items-center justify-center gap-x-6 rounded-lg bg-gray-800 px-10 py-4 transition-colors duration-300 ease-in-out hover:bg-primary600 hover:text-gray-900 lg:py-5"
          target="_blank"
          href="https://www.facebook.com/MrRevengerX"
        >
          <RiFacebookFill /> Facebook
        </a>
        <a
          className=" flex cursor-pointer items-center justify-center gap-x-6 rounded-lg bg-gray-800 px-10 py-4 transition-colors duration-300 ease-in-out hover:bg-primary600 hover:text-gray-900 lg:py-5"
          target="_blank"
          href="https://www.youtube.com/@RevengerX"
        >
          <RiYoutubeFill /> YouTube
        </a>
        <a
          className=" flex cursor-pointer items-center justify-center gap-x-6 rounded-lg bg-gray-800 px-10 py-4 transition-colors duration-300 ease-in-out hover:bg-primary600 hover:text-gray-900 lg:py-5"
          target="_blank"
          href="https://www.twitch.tv/mrrevengerx"
        >
          <RiTwitchFill /> Twitch
        </a>
        <a
          className=" flex cursor-pointer items-center justify-center gap-x-6 rounded-lg bg-gray-800 px-10 py-4 transition-colors duration-300 ease-in-out hover:bg-primary600 hover:text-gray-900 lg:py-5"
          target="_blank"
          href="https://discord.gg/3hXAbmx5fY"
        >
          <RxDiscordLogo /> Discord
        </a>
      </div>
    </div>
  );
}
