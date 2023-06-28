import { staticClient } from "@/lib/sanity";

export const getTopTeams = () => {
  const query = `*[_type == "team"]| order(points desc)[0...5]{_id,name,slug,clan,"logo":logo.asset->url,placement,matchesPlayed,wins,losses,points}`;
  const teams = staticClient.fetch(query);
  return teams;
};

export const getTopPlayers = () => {
  const query = `*[_type == "player"] | order(points desc)[0...5]{...,"team": *[_type=='team' && references(^._id)][0]{name}}`;
  const players = staticClient.fetch(query);
  return players;
};

export const getTeams = () => {
  const query = `*[_type == "team"]| order(points desc){...,"logo":logo.asset->url,"players":players{player1->,player2->,player3->,player4->,player5,sub1->,sub2->}}`;
  const teams = staticClient.fetch(query);
  return teams;
};
