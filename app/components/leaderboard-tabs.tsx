"use client";
import * as Tabs from "@radix-ui/react-tabs";
import PlayerLeaderboardCard from "./player-leaderboard-card";
import TeamLeaderboardCard from "./team-leaderboard-card";
import Link from "next/link";

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
        <div className="leaderboard relative flex max-w-5xl flex-col items-center justify-center gap-y-3 p-2">
          <div className="absolute flex h-full w-full items-center justify-center rounded-2xl bg-gray-800/80">
            <Link
              href="/register"
              target="_blank"
              className="rounded-lg bg-primary600 px-8 py-3 tracking-wider text-gray-900 transition-colors duration-300 ease-in-out hover:bg-gray-800 hover:text-primary600 md:text-xl lg:px-5 lg:text-base"
            >
              Register Now
            </Link>
          </div>
          <TeamLeaderboardCard />
          <TeamLeaderboardCard />
          <TeamLeaderboardCard />
          <TeamLeaderboardCard />
          <TeamLeaderboardCard />
        </div>
      </Tabs.Content>
      <Tabs.Content value="players">
        <div className="leaderboard relative flex min-w-full max-w-5xl flex-col items-center justify-center gap-y-3 p-2">
          <div className="absolute flex h-full w-full items-center justify-center rounded-2xl bg-gray-800/80">
            <Link
              href="/register"
              target="_blank"
              className="rounded-lg bg-primary600 px-8 py-3 tracking-wider text-gray-900 transition-colors duration-300 ease-in-out hover:bg-gray-800 hover:text-primary600 md:text-xl lg:px-5 lg:text-base"
            >
              Register Now
            </Link>
          </div>
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
