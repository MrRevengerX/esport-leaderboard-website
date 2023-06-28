import { createClient } from "@sanity/client";

export const staticClient = createClient({
  projectId: "va21zzyx",
  dataset: "production",
  apiVersion: "2023-06-17", // use current UTC date - see "specifying API version"!
  token: process.env.NEXT_PUBLIC_SANITY_API_KEY, // or leave blank for unauthenticated usage
  useCdn: true, // `false` if you want to ensure fresh data
});

export const dynamicClient = createClient({
  projectId: "va21zzyx",
  dataset: "production",
  apiVersion: "2023-06-17", // use current UTC date - see "specifying API version"!
  token: process.env.NEXT_PUBLIC_SANITY_API_KEY_EDITOR, // or leave blank for unauthenticated usage
  useCdn: false, // `false` if you want to ensure fresh data
});
