"use client";

import { useQuery } from "@tanstack/react-query";
import TeamLeaderboardCard from "../components/team-leaderboard-card";
import { getTeams } from "@/api/api";
import TeamLBCardSekeleton from "../components/skeletons/team-lb-card-skeleton";

export default function PlayerLeaderboard() {
  const teamData = useQuery({
    queryKey: ["teams"],
    queryFn: getTeams,
  });
  return (
    <div className="leaderboard flex max-w-5xl flex-col items-center gap-y-3 ">
      {teamData.isLoading ? (
        <>
          <TeamLBCardSekeleton />
          <TeamLBCardSekeleton />
          <TeamLBCardSekeleton />
          <TeamLBCardSekeleton />
          <TeamLBCardSekeleton />
        </>
      ) : (
        teamData.data?.map((team: any) => (
          <TeamLeaderboardCard
            key={team._id}
            placement={team.placement}
            teamName={team.name}
            clan={team.clan}
            slug={team.slug}
            teamLogo={team.logo}
            teamRank={team.rank}
            teamPoints={team.points}
            played={team.matchesPlayed}
            wins={team.wins}
            losses={team.losses}
          />
        ))
      )}
    </div>
  );
}
