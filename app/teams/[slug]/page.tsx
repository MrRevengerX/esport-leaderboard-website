"use client";

import { getTeamBySlug } from "@/api/api";
import TeamPageContent from "@/app/admin/[[...index]]/team-page-content";
import PlayerLeaderboardCard from "@/app/components/player-leaderboard-card";
import TeamLeaderboardCard from "@/app/components/team-leaderboard-card";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useState } from "react";

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <div className="flex min-h-screen flex-col items-center gap-6 bg-gray-900 px-4 py-32 text-white">
      <TeamPageContent slug={params.slug} />
    </div>
  );
}
