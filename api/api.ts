import { staticClient } from "@/lib/sanity";

export const getTopTeams = () => {
  const query = `*[_type == "team" && placement > 0]{name,slug,clan,"logo":logo.asset->url,placement,matchesPlayed,wins,losses,points}`;
  const teams = staticClient.fetch(query);
  return teams;
};
