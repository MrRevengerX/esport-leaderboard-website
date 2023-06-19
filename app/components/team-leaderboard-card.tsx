import Image from "next/image";

export default function TeamLeaderboardCard() {
  return (
    <div className="grid-cols_1_1_6_1 grid min-h-[60px] min-w-full items-center gap-x-5 rounded-xl bg-gray-800 px-5 py-3 text-white lg:gap-x-8 lg:text-lg">
      <p className="text-center">#1</p>
      <Image
        src="/assets/svg/xtreme-league-logo.svg"
        width={50}
        height={50}
        alt=""
      />
      <p>Team Name</p>
      <p className="text-center">100</p>
    </div>
  );
}
