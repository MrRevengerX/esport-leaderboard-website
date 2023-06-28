import { dynamicClient } from "@/lib/sanity";

export async function TeamPosUpdate() {
  const query = `*[_type == "team" && points > 0] | order(points desc)`;
  const data = await dynamicClient.fetch(query);

  const patch = data.map((item: any, index: number) => {
    return {
      patch: {
        id: item._id,
        set: {
          placement: index + 1,
        },
      },
    };
  });

  dynamicClient.transaction(patch).commit();
}

export async function PlayerPosUpdate() {
  const query = `*[_type == "player" && points > 0] | order(points desc)`;
  const data = await dynamicClient.fetch(query);
  const patch = data.map((item: any, index: number) => {
    return {
      patch: {
        id: item._id,
        set: {
          placement: index + 1,
        },
      },
    };
  });

  dynamicClient.transaction(patch).commit();
}

export function CalcTeamPositions() {
  return {
    label: "Team positions",
    onHandle: () => {
      TeamPosUpdate();
    },
  };
}

export function CalcPlayerPositions() {
  return {
    label: "Player positions",
    onHandle: () => {
      PlayerPosUpdate();
    },
  };
}
