import { RiFacebookFill, RiYoutubeFill, RiTwitchFill } from "react-icons/ri";
import { RxDiscordLogo } from "react-icons/rx";
import { motion } from "framer-motion";

import { useEffect } from "react";
import NavBar from "./components/navbar";
import Hero from "./components/hero";
import LeaderboardSection from "./components/leaderboard-section";

export default function Home() {
  return (
    <>
      <Hero />
      <LeaderboardSection />
    </>
  );
}
