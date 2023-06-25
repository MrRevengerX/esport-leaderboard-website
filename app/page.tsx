import { RiFacebookFill, RiYoutubeFill, RiTwitchFill } from "react-icons/ri";
import { RxDiscordLogo } from "react-icons/rx";
import { motion } from "framer-motion";

import { useEffect } from "react";
import NavBar from "./components/navbar";
import Hero from "./components/hero";
import LeaderboardSection from "./components/leaderboard-section";
import RulesSection from "./components/rules-section";
import SocialSection from "./components/social-section";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <NavBar />

      <Hero />
      <LeaderboardSection />
      <RulesSection />
      <SocialSection />
      <Footer />
    </>
  );
}
