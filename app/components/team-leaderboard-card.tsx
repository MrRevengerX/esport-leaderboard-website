import Image from "next/image";

export default function TeamLeaderboardCard() {
  return (
    <div className="lb-item grid-cols_1_1_6_1 grid min-h-[60px] min-w-full items-center gap-x-5 rounded-xl bg-gray-800 px-5 py-3 text-white lg:gap-x-8 lg:text-lg">
      <p className="text-center">#</p>
      <Image src="/assets/png/team-shield.png" width={50} height={50} alt="" />
      <p>Team Name</p>
      <p className="text-center">00</p>
    </div>
  );
}
