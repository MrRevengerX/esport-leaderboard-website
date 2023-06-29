"use client";
import config from "@/sanity.config";
import { NextStudio } from "next-sanity/studio";

export default function AdminDashboard() {
  return (
    <div className="absolute left-0 top-0 z-[100] w-screen">
      <NextStudio config={config} />;
    </div>
  );
}
