"use client";
import * as Tabs from "@radix-ui/react-tabs";
import PlayerLeaderboardCard from "./player-leaderboard-card";
import TeamLeaderboardCard from "./team-leaderboard-card";

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
        <div className="leaderboard flex max-w-5xl flex-col gap-y-3 ">
          <TeamLeaderboardCard />
          <TeamLeaderboardCard />
          <TeamLeaderboardCard />
          <TeamLeaderboardCard />
          <TeamLeaderboardCard />
        </div>
      </Tabs.Content>
      <Tabs.Content value="players">
        <div className="leaderboard flex min-w-full max-w-5xl flex-col gap-y-3">
          <PlayerLeaderboardCard />
          <PlayerLeaderboardCard />
          <PlayerLeaderboardCard />
          <PlayerLeaderboardCard />
          <PlayerLeaderboardCard />
        </div>
      </Tabs.Content>
    </Tabs.Root>
  );
}
