import { createClient } from "next-sanity";

export const staticClient = createClient({
  projectId: "va21zzyx",
  dataset: "production",
  apiVersion: "2023-06-17", // use current UTC date - see "specifying API version"!
  token: process.env.SANITY_API_KEY, // or leave blank for unauthenticated usage
  useCdn: true, // `false` if you want to ensure fresh data
});
