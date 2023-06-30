"use client";

import { useEffect } from "react";
import { TbHourglassEmpty } from "react-icons/tb";

export default function Rules() {
  // useEffect(() => {
  //   window.location.replace(
  //     "https://drive.google.com/file/d/1NfIOx-Q32FYU5S4ys8QCwnbsJltXcEYN/view?usp=sharing"
  //   );
  // }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-y-6 px-5">
      <TbHourglassEmpty className="text-7xl text-primary600" />
      <h2 className="text-center text-4xl text-white">
        Hold on, we&#39;re redirecting you...
      </h2>
    </div>
  );
}
