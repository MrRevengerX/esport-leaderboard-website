import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";
import { CalcPlayerPositions, CalcTeamPositions } from "./sanity/actions";

const config = defineConfig({
  projectId: "va21zzyx",
  dataset: "production",
  title: "Xtreme League",
  apiVersion: "2023-06-17",
  basePath: "/admin",
  plugins: [deskTool()],
  document: {
    actions: (prev, context) => {
      return context.schemaType === "team"
        ? [...prev, CalcTeamPositions]
        : context.schemaType === "player"
        ? [...prev, CalcPlayerPositions]
        : prev;
    },
  },
  schema: { types: schemas },
});

export default config;
