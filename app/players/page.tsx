import { Metadata } from "next";

import TeamLeaderboard from "./player-leaderboard";

export const metadata: Metadata = {
  title: "Players",
  description:
    "Unveil the exceptional talent and skills of our tournament's players! Check out their impressive stats and rankings, and witness their expertise, precision, and dedication in action as they showcase their prowess in thrilling matches.",
};

export default function Players() {
  return (
    <div className="flex min-h-screen flex-col items-center gap-8 bg-gray-900 px-4 py-36 text-white">
      <h1 className="text-center text-4xl font-semibold md:text-5xl lg:text-6xl">
        <span className="outline-text">Xtreme</span> Ranks
      </h1>
      <h2 className="text-center text-3xl font-thin">Players</h2>
      <TeamLeaderboard />
    </div>
  );
}
