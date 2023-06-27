import { staticClient } from "@/lib/sanity";

export const getTopTeams = () => {
  const query = `*[_type == "team" && placement > 0 && placement <= 5]{_id,name,slug,clan,"logo":logo.asset->url,placement,matchesPlayed,wins,losses,points}`;
  const teams = staticClient.fetch(query);
  return teams;
};

export const getTopPlayers = () => {
  const query = `*[_type == "player" && placement > 0 && placement <= 5] | order(placement asc){...,"team": *[_type=='team' && references(^._id)][0]{name}}`;
  const players = staticClient.fetch(query);
  return players;
};
