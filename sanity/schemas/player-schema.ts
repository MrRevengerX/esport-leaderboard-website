const player = {
  name: "player",
  title: "Player",
  type: "document",
  groups: [
    {
      title: "Stats",
      name: "stats",
    },
  ],
  fields: [
    {
      name: "name",
      title: "Name",
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
      title: "IGN",
      name: "ign",
      type: "string",
    },
    {
      title: "UID",
      name: "uid",
      type: "string",
    },
    {
      title: "Device",
      name: "device",
      type: "string",
    },
    {
      title: "Respawn Stats",
      name: "respawnStats",
      type: "object",
      group: "stats",
      fields: [
        {
          title: "Kills",
          name: "kills",
          type: "number",
          initialValue: 0,
        },
        {
          title: "Deaths",
          name: "deaths",
          type: "number",
          initialValue: 0,
        },
        {
          title: "Assists",
          name: "assists",
          type: "number",
          initialValue: 0,
        },
      ],
    },
    {
      title: "SnD Stats",
      name: "sndStats",
      type: "object",
      group: "stats",
      fields: [
        {
          title: "Kills",
          name: "kills",
          type: "number",
          initialValue: 0,
        },
        {
          title: "Plant",
          name: "plant",
          type: "number",
          initialValue: 0,
        },
        {
          title: "Defuse",
          name: "defuse",
          type: "number",
          initialValue: 0,
        },
      ],
    },
    {
      title: "Lethal Kills",
      name: "lethalKills",
      type: "number",
      group: "stats",
      initialValue: 0,
    },
  ],
};

export default player;
