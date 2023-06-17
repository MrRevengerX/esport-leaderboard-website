"use client";
import config from "@/sanity.config";
import { NextStudio } from "next-sanity/studio";

export const metadata = {
  title: "Dashboard",
};

export default function AdminDashboard() {
  return <NextStudio config={config} />;
}
