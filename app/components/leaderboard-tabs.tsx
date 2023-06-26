"use client";
import * as Tabs from "@radix-ui/react-tabs";
import PlayerLeaderboardCard from "./player-leaderboard-card";
import TeamLeaderboardCard from "./team-leaderboard-card";
import { MdArrowForwardIos } from "react-icons/md";

import { getTopTeams } from "@/api/api";

import { useQuery } from "@tanstack/react-query";

export default function LBTabs() {
  const teamData = useQuery({
    queryKey: ["teams"],
    queryFn: getTopTeams,
  });

  console.log(teamData);
  return (
    <Tabs.Root
      className="flex max-w-5xl flex-col items-center gap-y-7"
      defaultValue="teams"
    >
      <Tabs.List className="flex gap-x-3 rounded-xl bg-gray-800 p-2 font-medium text-white">
        <Tabs.Trigger
          className="rounded-md px-8 py-1 transition-colors duration-300 ease-in-out data-[state=active]:bg-primary600 data-[state=active]:text-gray-900"
          value="teams"
        >
          <p>Teams</p>
        </Tabs.Trigger>
        <Tabs.Trigger
          className="rounded-md px-8 py-1 transition-colors duration-300 ease-in-out data-[state=active]:bg-primary600 data-[state=active]:text-gray-900"
          value="players"
        >
          <p>Players</p>
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="teams">
        <div className="leaderboard flex max-w-5xl flex-col items-center gap-y-3 ">
          {teamData.data?.map((team: any) => (
            <TeamLeaderboardCard
              key={team.id}
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
            className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-primary600 px-6 py-2 transition-colors duration-300 ease-in-out hover:bg-gray-800 hover:text-primary600"
          >
            View all <MdArrowForwardIos />
          </a>
        </div>
      </Tabs.Content>
      <Tabs.Content value="players">
        <div className="leaderboard flex min-w-full max-w-5xl flex-col items-center gap-y-3">
          <PlayerLeaderboardCard />
          <PlayerLeaderboardCard />
          <PlayerLeaderboardCard />
          <PlayerLeaderboardCard />
          <PlayerLeaderboardCard />
          <a
            href=""
            className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-primary600 px-6 py-2 transition-colors duration-300 ease-in-out hover:bg-gray-800 hover:text-primary600"
          >
            View all <MdArrowForwardIos />
          </a>
        </div>
      </Tabs.Content>
    </Tabs.Root>
  );
}
