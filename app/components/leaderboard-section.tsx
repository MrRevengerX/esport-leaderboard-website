import LBTabs from "./leaderboard-tabs";
import PlayerLeaderboardCard from "./player-leaderboard-card";
import TeamLeaderboardCard from "./team-leaderboard-card";

export default function LeaderboardSection() {
  return (
    <div
      id="#lb"
      className="flex flex-col items-center justify-center gap-16 bg-gray-900 px-4 py-32"
    >
      <h1 className="text-center text-4xl font-semibold text-white md:text-5xl lg:text-6xl">
        <span className="outline-text">Xtreme</span> Ranks
      </h1>
      <LBTabs />
    </div>
  );
}
