"use client";
import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import { IoClose } from "react-icons/io5";
export default function PlayerLeaderboardCard(props: any) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <div className="lb-item grid-cols_2_14_1 grid min-h-[60px] min-w-full cursor-pointer items-center gap-x-5 rounded-xl bg-gray-800 px-5 py-3 text-white lg:gap-x-8 lg:text-lg">
          <p className="text-center">#{props.placement}</p>
          <div className="">
            <p className="text-xs font-light text-white/60">
              {props.team.name}
            </p>
            <p>{props.ign}</p>
          </div>

          <p className="text-center">{props.points}</p>
        </div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[55] bg-black/40 data-[state=open]:animate-overlayShow" />
        <Dialog.Content className="fixed left-[50%] top-[50%] z-[60] flex translate-x-[-50%] translate-y-[-50%] flex-col items-center justify-center gap-y-6 rounded-xl bg-gray-800 p-10 text-white data-[state=open]:animate-contentShow md:px-24 lg:px-40 lg:py-14">
          <div className="flex min-w-[280px] items-center justify-center gap-x-5 rounded-xl text-white">
            <p className="text-4xl lg:text-5xl">#{props.placement}</p>
            <div className="text-xl font-medium lg:text-2xl">
              <p className="text-base font-light italic text-white/60">
                {props.team.name}
              </p>
              <Dialog.Title>{props.ign}</Dialog.Title>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <p className="col-span-3 text-center">Name : {props.name}</p>
            <p className="col-span-3 text-center">Device : {props.device}</p>
            <p className="col-span-3 mt-3 text-center">Respawn Stats</p>
            <div className="flex flex-col items-center justify-center rounded-xl bg-gray-700 px-5 py-3 text-white">
              <p className="text-2xl lg:text-3xl">{props.respawn.kills}</p>
              <p className="text-xs lg:text-sm lg:font-light">Kills</p>
            </div>
            <div className="flex flex-col items-center justify-center rounded-xl bg-gray-700 px-5 py-3 text-white">
              <p className="text-2xl lg:text-3xl">{props.respawn.deaths}</p>
              <p className="text-xs lg:text-sm lg:font-light">Deaths</p>
            </div>
            <div className="flex flex-col items-center justify-center rounded-xl bg-gray-700 px-5 py-3 text-white">
              <p className="text-2xl lg:text-3xl">{props.respawn.assists}</p>
              <p className="text-xs lg:text-sm lg:font-light">Assists</p>
            </div>
            <p className="col-span-3 mt-3 text-center">S&D Stats</p>
            <div className="flex flex-col items-center justify-center rounded-xl bg-gray-700 px-5 py-3 text-white">
              <p className="text-2xl lg:text-3xl">{props.snd.kills}</p>
              <p className="text-xs lg:text-sm lg:font-light">Kills</p>
            </div>
            <div className="flex flex-col items-center justify-center rounded-xl bg-gray-700 px-5 py-3 text-white">
              <p className="text-2xl lg:text-3xl">{props.snd.plant}</p>
              <p className="text-xs lg:text-sm lg:font-light">Plants</p>
            </div>
            <div className="flex flex-col items-center justify-center rounded-xl bg-gray-700 px-5 py-3 text-white">
              <p className="text-2xl lg:text-3xl">{props.snd.defuse}</p>
              <p className="text-xs lg:text-sm lg:font-light">Defuses</p>
            </div>
            <p className="col-span-3 mt-3 text-center">Respawn & S&D Stats</p>
            <div className="col-span-3 rounded-xl bg-gray-700 p-4 text-center text-base lg:text-lg">
              <p>Lethal : {props.lethal}</p>
            </div>

            <p className="col-span-3 -mb-5 mt-5 text-center text-xl">
              Total Points : {props.points}
            </p>
          </div>

          <Dialog.Close>
            <button className="absolute right-4 top-4 ">
              <IoClose />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
