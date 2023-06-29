import PlayerLeaderboardCard from "@/app/components/player-leaderboard-card";
import { useState } from "react";

export default function TeamMembers(props: any) {
  const [players, setPlayers] = useState([
    props.players.player1,
    props.players.player2,
    props.players.player3,
    props.players.player4,
    props.player5,
    props.sub1,
    props.sub2,
  ]);
  const filteredPlayers = players.filter((player: any) =>
    player !== undefined ? player : null
  );
  filteredPlayers.sort((a, b) => {
    return a.placement - b.placement;
  });
  console.log(filteredPlayers);
  //   console.log(numAscending);
  return (
    <>
      {filteredPlayers.map((player?: any) => (
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
          team={props.team}
        />
      ))}
      {/* {item.players.player1 && (
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
              )} */}
    </>
  );
}
