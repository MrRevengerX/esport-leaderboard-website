const player = {
  name: "player",
  title: "Player",
  type: "document",
  groups: [
    {
      title: "Stats",
      name: "stats",
    },
    {
      title: "Points",
      name: "points",
    },
  ],
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      title: "IGN",
      name: "ign",
      type: "string",
    },
    {
      title: "Device",
      name: "device",
      type: "string",
    },
    {
      title: "UID",
      name: "uid",
      type: "string",
    },
    {
      title: "Subsitute",
      description: "On this option if the player is a subtitute player",
      initialValue: false,
      name: "subtitute",
      type: "boolean",
    },
    {
      title: "Placement",
      name: "placement",
      type: "number",
      initialValue: 0,
      group: "points",
    },
    {
      title: "Points",
      name: "points",
      type: "number",
      initialValue: 0,
      group: "points",
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
    {
      title: "Firstblood",
      name: "firstblood",
      type: "number",
      group: "stats",
      initialValue: 0,
    },
  ],
};

export default player;
