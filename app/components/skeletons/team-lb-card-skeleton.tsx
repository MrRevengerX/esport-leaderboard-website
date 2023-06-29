import Image from "next/image";

export default function TeamLBCardSekeleton() {
  return (
    <div className="grid-cols_1_1_6_1 grid min-h-[60px] min-w-full cursor-pointer items-center gap-x-5 rounded-xl bg-gray-800 px-5 py-3 text-white lg:gap-x-8 lg:text-lg">
      <div className="mx-auto h-6 w-6  animate-pulse rounded-md bg-gray-700 lg:h-7 lg:w-7"></div>

      <div className="mx-[1px] h-8 w-8 animate-pulse rounded-md bg-gray-700 lg:h-12 lg:w-12"></div>

      <div className="">
        <p className="mb-2 h-2.5 w-10 animate-pulse bg-gray-700 lg:w-10"></p>
        <p className="mb-1 h-4 w-32 animate-pulse bg-gray-700 lg:w-48"></p>
      </div>
      <div className="flex animate-pulse items-end justify-center">
        <p className="h-4 w-6  animate-pulse place-items-end bg-gray-700 lg:w-6"></p>
      </div>
    </div>
  );
}
