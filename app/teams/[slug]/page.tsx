"use client";

import { getTeamBySlug } from "@/api/api";
import PlayerLeaderboardCard from "@/app/components/player-leaderboard-card";
import TeamLeaderboardCard from "@/app/components/team-leaderboard-card";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useState } from "react";

export default function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const teamData = useQuery({
    queryKey: ["teamsData", slug],
    queryFn: ({ queryKey }) => getTeamBySlug(queryKey[1]),
  });
  const data = teamData.data;
  console.log(data);
  return (
    <div className="flex min-h-screen flex-col items-center gap-6 bg-gray-900 px-4 py-32 text-white">
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
            <div className="">
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
            <div className="leaderboard flex max-w-5xl flex-col items-center gap-y-3 ">
              {item.players.player1 && (
                <PlayerLeaderboardCard
                  key={item.players.player1._id}
                  placement={item.players.player1.placement}
                  name={item.players.player1.name}
                  ign={item.players.player1.ign}
                  points={item.players.player1.points}
                  device={item.players.player1.device}
                  respawn={item.players.player1.respawnStats}
                  snd={item.players.player1.sndStats}
                  lethal={item.players.player1.lethalKills}
                  team={item}
                />
              )}
              {item.players.player2 && (
                <PlayerLeaderboardCard
                  key={item.players.player2._id}
                  placement={item.players.player2.placement}
                  name={item.players.player2.name}
                  ign={item.players.player2.ign}
                  points={item.players.player2.points}
                  device={item.players.player2.device}
                  respawn={item.players.player2.respawnStats}
                  snd={item.players.player2.sndStats}
                  lethal={item.players.player2.lethalKills}
                  team={item}
                />
              )}
              {item.players.player3 && (
                <PlayerLeaderboardCard
                  key={item.players.player3._id}
                  placement={item.players.player3.placement}
                  name={item.players.player3.name}
                  ign={item.players.player3.ign}
                  points={item.players.player3.points}
                  device={item.players.player3.device}
                  respawn={item.players.player3.respawnStats}
                  snd={item.players.player3.sndStats}
                  lethal={item.players.player3.lethalKills}
                  team={item}
                />
              )}
              {item.players.player4 && (
                <PlayerLeaderboardCard
                  key={item.players.player4._id}
                  placement={item.players.player4.placement}
                  name={item.players.player4.name}
                  ign={item.players.player4.ign}
                  points={item.players.player4.points}
                  device={item.players.player4.device}
                  respawn={item.players.player4.respawnStats}
                  snd={item.players.player4.sndStats}
                  lethal={item.players.player4.lethalKills}
                  team={item}
                />
              )}
              {item.players.player5 && (
                <PlayerLeaderboardCard
                  key={item.players.player5._id}
                  placement={item.players.player5.placement}
                  name={item.players.player5.name}
                  ign={item.players.player5.ign}
                  points={item.players.player5.points}
                  device={item.players.player5.device}
                  respawn={item.players.player5.respawnStats}
                  snd={item.players.player5.sndStats}
                  lethal={item.players.player5.lethalKills}
                  team={item}
                />
              )}
              {item.players.sub1 && (
                <PlayerLeaderboardCard
                  key={item.players.sub1._id}
                  placement={item.players.sub1.placement}
                  name={item.players.sub1.name}
                  ign={item.players.sub1.ign}
                  points={item.players.sub1.points}
                  device={item.players.sub1.device}
                  respawn={item.players.sub1.respawnStats}
                  snd={item.players.sub1.sndStats}
                  lethal={item.players.sub1.lethalKills}
                  team={item}
                />
              )}
              {item.players.sub2 && (
                <PlayerLeaderboardCard
                  key={item.players.sub2._id}
                  placement={item.players.sub2.placement}
                  name={item.players.sub2.name}
                  ign={item.players.sub2.ign}
                  points={item.players.sub2.points}
                  device={item.players.sub2.device}
                  respawn={item.players.sub2.respawnStats}
                  snd={item.players.sub2.sndStats}
                  lethal={item.players.sub2.lethalKills}
                  team={item}
                />
              )}
            </div>
          </div>
        </>
      ))}
    </div>
  );
}
