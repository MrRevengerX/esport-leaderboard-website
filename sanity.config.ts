import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

const config = defineConfig({
  projectId: "va21zzyx",
  dataset: "production",
  title: "Xtreme League",
  apiVersion: "2023-06-17",
  basePath: "/admin",
  plugins: [deskTool()],
});

export default config;
