import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center gap-7  text-white md:gap-12 md:px-10 ">
      <div className="text-5xl font-medium uppercase tracking-wider md:text-7xl">
        <h1 className="">Ascend to</h1>
        <h1 className="mt-2 text-primary600">Greatness</h1>
      </div>
      <p className="mb-3 max-w-xs text-center font-light tracking-wide md:max-w-md md:text-xl">
        Conquer the Leaderboard & Reign Supreme in Mobile Gaming!
      </p>
      <div className="">
        <Link
          href="https://challonge.com/xtreme_league_s2"
          target="_blank"
          className="challonge-btn flex items-center gap-2 rounded-lg bg-[#ff7324] px-8 py-3 tracking-wider text-gray-900 transition-colors duration-300 ease-in-out hover:bg-gray-800 hover:text-[#ff7324] md:text-xl"
        >
          <svg
            width="18px"
            height="18px"
            className="challonge-logo fill-gray-900"
            viewBox="0 0 78 84"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Page-1" stroke="none" stroke-width="1">
              <g
                id="logo_challonge_dark"
                transform="translate(0.000000, 1.000000)"
              >
                <g id="g3250" transform="translate(0.177760, 0.000000)">
                  <g id="g3254">
                    <path
                      d="M75.496,17.625 C53.644,23.23 34.261,33.146 18.695,49.873 C22.621,54.124 27.111,55.428 32.439,56.423 C43.882,44.618 57.909,37.12 73.704,32.568 C77.585,31.448 75.627,21.115 75.496,17.625 L75.496,17.625 Z"
                      id="path3256"
                    ></path>
                    <path
                      d="M17.925,18.311 C1.571,27.753 -4.033,48.672 5.408,65.025 C10.283,73.468 18.218,79.046 27.002,81.166 C53.507,87.551 75.657,59.281 74.72,34.476 C59.661,38.948 46.573,46.268 35.865,57.025 C67.325,62.447 38.969,84.632 18.814,71.009 C4.357,61.237 2.67,42.902 10.885,29.184 C15.932,20.755 22.997,17.538 31.518,13.903 C26.866,14.379 22.236,15.821 17.925,18.311 L17.925,18.311 Z"
                      id="path3258"
                    ></path>
                    <path
                      d="M75.387,0 C46.351,8.964 14.974,17.076 13.165,35.94 C12.763,38.743 13.354,41.802 15.305,45.18 C15.93,46.261 16.568,47.228 17.222,48.099 C32.134,31.207 51.189,21.179 73.827,15.408 C77.742,14.41 75.519,3.489 75.387,-5.32907052e-15 L75.387,0 Z"
                      id="path3260"
                    ></path>
                  </g>
                </g>
              </g>
            </g>
          </svg>
          Matchups
        </Link>
      </div>

      <Image
        src="/assets/png/background.jpg"
        fill
        className="-z-10 block bg-gray-900 object-cover"
        alt=""
      />
    </div>
  );
}
