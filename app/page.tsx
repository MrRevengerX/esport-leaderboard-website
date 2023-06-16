"use client";
import Image from "next/image";
import { RiFacebookFill, RiYoutubeFill, RiTwitchFill } from "react-icons/ri";
import { RxDiscordLogo } from "react-icons/rx";
import { motion } from "framer-motion";

import { useEffect } from "react";

export default function Home() {
  return (
    <>
      <div className="flex min-h-screen select-none flex-col items-center justify-center gap-10 bg-gray-900 font-poppins text-white md:gap-12 md:px-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className=""
        >
          <Image
            src="/assets/svg/xtreme-league-logo.svg"
            width={300}
            height={300}
            alt={"tournament logo"}
            className="w-28"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center text-6xl font-semibold uppercase md:text-8xl"
        >
          Coming <span className="outline-text text-primary600">Soon!</span>
        </motion.h1>

        <div className="flex flex-col items-center gap-2 md:text-xl">
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            Stay Connected
          </motion.h3>
          <div className="flex gap-2 text-xl md:gap-3 md:text-2xl">
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.5 }}
              href="https://www.facebook.com/MrRevengerX"
              target="_blank"
            >
              <RiFacebookFill className="transition-colors duration-300 ease-in-out hover:text-primary600" />
            </motion.a>
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.7 }}
              href="https://www.youtube.com/@RevengerX"
              target="_blank"
            >
              <RiYoutubeFill className="transition-colors duration-300 ease-in-out hover:text-primary600" />
            </motion.a>
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.9 }}
              href="https://www.twitch.tv/mrrevengerx"
              target="_blank"
            >
              <RiTwitchFill className="transition-colors duration-300 ease-in-out hover:text-primary600" />
            </motion.a>
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 2.1 }}
              href="https://discord.gg/3hXAbmx5fY"
              target="_blank"
            >
              <RxDiscordLogo className="transition-colors duration-300 ease-in-out hover:text-primary600" />
            </motion.a>
          </div>
        </div>
      </div>
    </>
  );
}
