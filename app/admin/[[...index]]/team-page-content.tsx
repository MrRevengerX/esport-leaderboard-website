import { getTeamBySlug } from "@/api/api";
import PlayerLeaderboardCard from "@/app/components/player-leaderboard-card";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import TeamMembers from "./team-members";

export default function TeamPageContent(props: any) {
  const slug = props.slug;
  const teamData = useQuery({
    queryKey: ["teamsData", slug],
    queryFn: ({ queryKey }) => getTeamBySlug(queryKey[1]),
  });
  const data = teamData.data;
  console.log(data);
  return (
    <>
      {data?.map((item: any) => (
        <>
          <Image
            src={item.logo ? `${item.logo}` : "/assets/png/team-shield.png"}
            width={item.logo ? 140 : 80}
            height={item.logo ? 140 : 80}
            alt=""
            className="rounded-md"
          />
          <div className="flex items-center gap-x-4">
            <p className="text-4xl">#{item.placement}</p>
            <div>
              <p className="text-sm font-light text-white/60">{item.clan}</p>
              <h1 className="text-3xl">{item.name}</h1>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div className="flex flex-col items-center justify-center rounded-xl bg-gray-700 px-5 py-3 text-white">
              <p className="text-2xl lg:text-3xl">{item.matchesPlayed}</p>
              <p className="text-xs lg:text-sm lg:font-light">Played</p>
            </div>
            <div className="flex flex-col items-center justify-center rounded-xl bg-gray-700 px-5 py-3 text-white">
              <p className="text-2xl lg:text-3xl">{item.wins}</p>
              <p className="text-xs lg:text-sm lg:font-light">Wins</p>
            </div>
            <div className="flex flex-col items-center justify-center rounded-xl bg-gray-700 px-5 py-3 text-white">
              <p className="text-2xl lg:text-3xl">{item.losses}</p>
              <p className="text-xs lg:text-sm lg:font-light">Loss</p>
            </div>
            <div className="col-span-3 rounded-xl bg-gray-700 p-4 text-center text-xs lg:text-lg">
              <p>Total Points : {item.points}</p>
            </div>
          </div>
          <div className="">
            <h2 className="mb-8 mt-4 text-center text-xl font-light">
              Team Members
            </h2>
            <div className="flex max-w-5xl flex-col items-center gap-y-3 ">
              <TeamMembers players={item.players} team={item} />
            </div>
          </div>
        </>
      ))}
    </>
  );
}
