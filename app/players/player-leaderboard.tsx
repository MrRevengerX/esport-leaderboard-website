"use client";

import { useQuery } from "@tanstack/react-query";
import { getPlayers, getTeams } from "@/api/api";
import PlayerLeaderboardCard from "../components/player-leaderboard-card";
import PlayerLBCardSkeleton from "../components/skeletons/player-lb-card-skeleton";

export default function TeamLeaderboard() {
  const playerData = useQuery({
    queryKey: ["players"],
    queryFn: getPlayers,
  });
  return (
    <div className="leaderboard flex max-w-5xl flex-col items-center gap-y-3 ">
      <div className="leaderboard flex min-w-full max-w-lg flex-col items-center gap-y-3">
        {playerData.isLoading ? (
          <>
            <PlayerLBCardSkeleton />
            <PlayerLBCardSkeleton />
            <PlayerLBCardSkeleton />
            <PlayerLBCardSkeleton />
            <PlayerLBCardSkeleton />
          </>
        ) : (
          playerData.data?.map((player: any) => (
            <PlayerLeaderboardCard
              key={player._id}
              placement={player.placement}
              name={player.name}
              ign={player.ign}
              points={player.points}
              device={player.device}
              respawn={player.respawnStats}
              snd={player.sndStats}
              lethal={player.lethalKills}
              firstblood={player.firstblood}
              team={player.team ? player.team : ""}
            />
          ))
        )}
      </div>
    </div>
  );
}
