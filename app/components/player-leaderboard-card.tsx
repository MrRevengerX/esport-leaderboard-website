"use client";
import Image from "next/image";

export default function PlayerLeaderboardCard() {
  return (
    <div className="lb-item grid-cols_2_14_1 grid min-h-[60px] min-w-full cursor-pointer items-center gap-x-5 rounded-xl bg-gray-800 px-5 py-3 text-white lg:gap-x-8 lg:text-lg">
      <p className="text-center">#</p>
      <div className="">
        <p className="text-xs font-light text-white/60">Clan</p>
        <p>Player Name</p>
      </div>

      <p className="w-7 text-center">00</p>
    </div>
  );
}
