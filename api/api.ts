import { staticClient } from "@/lib/sanity";

export async function getTopTeams() {
  const query = `*[_type == "team"]| order(points desc)[0...5]{_id,name,"slug":slug.current,clan,"logo":logo.asset->url,placement,matchesPlayed,wins,losses,points}`;
  const teams = await staticClient.fetch(query);
  return teams;
}

export async function getTopPlayers() {
  const query = `*[_type == "player"] | order(points desc)[0...5]{...,"team": *[_type=='team' && references(^._id)][0]{name}}`;
  const players = await staticClient.fetch(query);
  return players;
}

export async function getTeams() {
  const query = `*[_type == "team"]| order(points desc){_id,name,"slug":slug.current,clan,"logo":logo.asset->url,placement,matchesPlayed,wins,losses,points}`;
  const teams = await staticClient.fetch(query);
  return teams;
}

export async function getPlayers() {
  const query = `*[_type == "player"] | order(points desc){...,"team": *[_type=='team' && references(^._id)][0]{name}}`;
  const players = await staticClient.fetch(query);
  return players;
}

export function getTeamBySlug(slug: string) {
  const query = `*[_type == "team" && slug.current == "${slug}"]{...,"logo":logo.asset->url,"players":players{player1->,player2->,player3->,player4->,player5,sub1->,sub2->}}`;
  const teams = staticClient.fetch(query);
  return teams;
}
