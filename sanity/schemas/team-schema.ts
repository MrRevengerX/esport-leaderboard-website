const team = {
  title: "Team",
  name: "team",
  type: "document",
  groups: [
    {
      title: "Score",
      name: "score",
    },
  ],
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
        slugify: (input: string) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    },
    {
      title: "Clan",
      name: "clan",
      type: "string",
    },
    {
      title: "Logo",
      name: "logo",
      type: "image",
    },
    {
      title: "Players",
      name: "players",
      type: "object",
      fields: [
        {
          title: "Player 1 (Leader)",
          name: "player1",
          type: "reference",
          to: [{ type: "player" }],
        },
        {
          title: "Player 2",
          name: "player2",
          type: "reference",
          to: [{ type: "player" }],
        },
        {
          title: "Player 3",
          name: "player3",
          type: "reference",
          to: [{ type: "player" }],
        },
        {
          title: "Player 4",
          name: "player4",
          type: "reference",
          to: [{ type: "player" }],
        },
        {
          title: "Player 5",
          name: "player5",
          type: "reference",
          to: [{ type: "player" }],
        },
        {
          title: "Substitute 1",
          name: "sub1",
          type: "reference",
          to: [{ type: "player" }],
        },
        {
          title: "Substitute 2",
          name: "sub2",
          type: "reference",
          to: [{ type: "player" }],
        },
      ],
    },
    {
      title: "Placement",
      name: "placement",
      type: "number",
      initialValue: 0,
      group: "score",
    },
    {
      title: "Matches Played",
      name: "matchesPlayed",
      type: "number",
      initialValue: 0,
      group: "score",
    },
    {
      title: "Wins",
      name: "wins",
      type: "number",
      initialValue: 0,
      group: "score",
    },
    {
      title: "Losses",
      name: "losses",
      type: "number",
      initialValue: 0,
      group: "score",
    },
    {
      title: "Points",
      name: "points",
      type: "number",
      initialValue: 0,
      group: "score",
    },
  ],
};

export default team;
