import PlayerLeaderboardCard from "@/app/components/player-leaderboard-card";
import { useState } from "react";

export default function TeamMembers(props: any) {
  const [players, setPlayers] = useState([
    props.players.player1,
    props.players.player2,
    props.players.player3,
    props.players.player4,
    props.players.player5,
    props.players.sub1,
    props.players.sub2,
  ]);
  const filteredPlayers = players.filter((player: any) =>
    player !== undefined ? player : null
  );
  filteredPlayers.sort((a, b) => {
    return a.placement - b.placement;
  });
  console.log("ssss", props.players.player2.subtitute);
  //   console.log(numAscending);
  return (
    <>
      {filteredPlayers.map(
        (player?: any) =>
          !player.subtitute && (
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
          )
      )}
      {props.players.sub1?.subtitute && <h6 className="mt-3">Substitutes</h6>}
      {filteredPlayers.map(
        (player?: any) =>
          player.subtitute && (
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
          )
      )}
    </>
  );
}
