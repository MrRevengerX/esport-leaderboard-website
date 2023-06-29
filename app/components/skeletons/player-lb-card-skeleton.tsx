import Image from "next/image";

export default function PlayerLBCardSkeleton() {
  return (
    <div className="grid-cols_2_14_1 grid min-h-[60px] min-w-full cursor-pointer items-center gap-x-5 rounded-xl bg-gray-800 px-5 py-3 text-white lg:gap-x-8 lg:text-lg">
      <div className="mx-auto h-6 w-6  animate-pulse rounded-md bg-gray-700 lg:h-7 lg:w-7"></div>
      <div>
        <div className="mb-2 h-2.5 w-10 animate-pulse bg-gray-700 lg:w-10"></div>
        <div className="mb-1 h-4 w-32 animate-pulse bg-gray-700 lg:w-48"></div>
      </div>

      <div className="h-4 w-6  animate-pulse place-items-end bg-gray-700 lg:w-6"></div>
    </div>
  );
}
