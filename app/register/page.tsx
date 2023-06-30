"use client";

import { useEffect } from "react";
import { TbHourglassEmpty } from "react-icons/tb";

export default function Registration() {
  useEffect(() => {
    window.location.replace("https://forms.gle/xt4vzQC7GLVEdvvK8");
  }, []);
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-y-6 px-5">
      <TbHourglassEmpty className="text-7xl text-primary600" />
      <h2 className="text-center text-4xl text-white">
        Hold on, we&#39;re redirecting you...
      </h2>
    </div>
  );
}
