import TeamLeaderboardCard from "./team-leaderboard-card";

export default function LeaderboardSection() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-gray-900 px-4">
      <h1 className="text-center text-4xl font-semibold text-white md:text-5xl lg:text-6xl">
        <span className="outline-text">Xtreme</span> Ranks
      </h1>
      <div className="flex max-w-5xl flex-col gap-y-3 ">
        <TeamLeaderboardCard />
        <TeamLeaderboardCard />
        <TeamLeaderboardCard />
      </div>
    </div>
  );
}
