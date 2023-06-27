import { MdArrowForwardIos } from "react-icons/md";
import TeamLeaderboardCard from "./team-leaderboard-card";
import { useQuery } from "@tanstack/react-query";
import { getTopTeams } from "@/api/api";

export default function TopTeams() {
  const teamData = useQuery({
    queryKey: ["topteams"],
    queryFn: getTopTeams,
  });

  return (
    <div className="leaderboard flex max-w-5xl flex-col items-center gap-y-3 ">
      {teamData.data?.map((team: any) => (
        <TeamLeaderboardCard
          key={team._id}
          placement={team.placement}
          teamName={team.name}
          teamLogo={team.logo}
          teamRank={team.rank}
          teamPoints={team.points}
          played={team.matchesPlayed}
          wins={team.wins}
          losses={team.losses}
        />
      ))}
      {/* <TeamLeaderboardCard />
    <TeamLeaderboardCard />
    <TeamLeaderboardCard />
    <TeamLeaderboardCard />
    <TeamLeaderboardCard /> */}
      <a
        href=""
        className={
          teamData.isLoading
            ? "pointer-events-none mt-3 flex cursor-not-allowed items-center justify-center gap-2 rounded-lg bg-gray-800 px-6 py-2"
            : "mt-3 flex items-center justify-center gap-2 rounded-lg bg-primary600 px-6 py-2 transition-colors duration-300 ease-in-out hover:bg-gray-800 hover:text-primary600"
        }
      >
        View all <MdArrowForwardIos />
      </a>
    </div>
  );
}

// "mt-3 flex items-center justify-center gap-2 rounded-lg bg-primary600 px-6 py-2 transition-colors duration-300 ease-in-out hover:bg-gray-800 hover:text-primary600"
