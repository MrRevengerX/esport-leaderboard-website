import { MdArrowForwardIos } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import { getTopPlayers } from "@/api/api";
import PlayerLeaderboardCard from "./player-leaderboard-card";
import Link from "next/link";
import PlayerLBCardSkeleton from "./skeletons/player-lb-card-skeleton";

export default function TopPlayers() {
  const playerData = useQuery({
    queryKey: ["topplayers"],
    queryFn: getTopPlayers,
  });
  return (
    <div className="leaderboard flex min-w-full max-w-[22rem] flex-col items-center gap-y-3 md:max-w-lg">
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

      <Link
        href="/players"
        className={
          playerData.isLoading
            ? "pointer-events-none mt-3 flex cursor-not-allowed items-center justify-center gap-2 rounded-lg bg-gray-800 px-6 py-2"
            : "mt-3 flex items-center justify-center gap-2 rounded-lg bg-primary600 px-6 py-2 transition-colors duration-300 ease-in-out hover:bg-gray-800 hover:text-primary600"
        }
      >
        View all <MdArrowForwardIos />
      </Link>
    </div>
  );
}

// "mt-3 flex items-center justify-center gap-2 rounded-lg bg-primary600 px-6 py-2 transition-colors duration-300 ease-in-out hover:bg-gray-800 hover:text-primary600"
