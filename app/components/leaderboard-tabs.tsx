"use client";
import * as Tabs from "@radix-ui/react-tabs";
import PlayerLeaderboardCard from "./player-leaderboard-card";
import TeamLeaderboardCard from "./team-leaderboard-card";
import { MdArrowForwardIos } from "react-icons/md";

import { getTopTeams } from "@/api/api";

import { useQuery } from "@tanstack/react-query";
import TopTeams from "./top-teams";
import TopPlayers from "./top-players";

export default function LBTabs() {
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
        <TopTeams />
      </Tabs.Content>
      <Tabs.Content value="players">
        <TopPlayers />
      </Tabs.Content>
    </Tabs.Root>
  );
}
