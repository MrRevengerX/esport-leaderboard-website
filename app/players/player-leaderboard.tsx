"use client";

import { useQuery } from "@tanstack/react-query";
import TeamLeaderboardCard from "../components/team-leaderboard-card";
import { getPlayers, getTeams } from "@/api/api";
import PlayerLeaderboardCard from "../components/player-leaderboard-card";

export default function TeamLeaderboard() {
  const playerData = useQuery({
    queryKey: ["players"],
    queryFn: getPlayers,
  });
  return (
    <div className="leaderboard flex max-w-5xl flex-col items-center gap-y-3 ">
      <div className="leaderboard flex min-w-full max-w-5xl flex-col items-center gap-y-3">
        {playerData.data?.map((player: any) => (
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
            team={player.team ? player.team : ""}
          />
        ))}
      </div>
    </div>
  );
}
