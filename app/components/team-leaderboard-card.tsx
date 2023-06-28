import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import { MdArrowForwardIos } from "react-icons/md";
import { IoClose } from "react-icons/io5";

export default function TeamLeaderboardCard(props: any) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <div className="lb-item grid-cols_1_1_6_1 grid min-h-[60px] min-w-full cursor-pointer items-center gap-x-5 rounded-xl bg-gray-800 px-5 py-3 text-white lg:gap-x-8 lg:text-lg">
          <p className="text-center">#{props.placement}</p>
          <Image
            src={
              props.teamLogo
                ? `${props.teamLogo}`
                : "/assets/png/team-shield.png"
            }
            width={50}
            height={50}
            alt=""
            className="rounded-md"
          />

          <div className="">
            {props.clan && (
              <p className="text-xs font-light text-white/60">{props.clan}</p>
            )}

            <p>{props.teamName}</p>
          </div>

          <p className="text-center">{props.teamPoints}</p>
        </div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[55] bg-black/50 backdrop-blur-sm data-[state=open]:animate-overlayShow" />
        <Dialog.Content className="fixed left-[50%] top-[50%] z-[60] flex translate-x-[-50%] translate-y-[-50%] flex-col items-center justify-center gap-y-6 rounded-xl bg-gray-800 p-10 text-white data-[state=open]:animate-contentShow lg:px-32 lg:py-14">
          <div className="flex min-w-[280px] flex-col items-center justify-center rounded-xl text-white">
            <p className="text-3xl lg:text-4xl">#{props.placement}</p>
          </div>
          <div className="flex items-center justify-center gap-4 text-2xl font-medium lg:text-3xl">
            <Image
              src={
                props.teamLogo
                  ? `${props.teamLogo}`
                  : "/assets/png/team-shield.png"
              }
              alt=""
              width={50}
              height={50}
              className="rounded-md"
            />
            <div className="">
              {props.clan && (
                <p className="text-xs font-light text-white/60">{props.clan}</p>
              )}
              <Dialog.Title>{props.teamName}</Dialog.Title>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div className="flex flex-col items-center justify-center rounded-xl bg-gray-700 px-5 py-3 text-white">
              <p className="text-2xl lg:text-3xl">{props.played}</p>
              <p className="text-xs lg:text-sm lg:font-light">Played</p>
            </div>
            <div className="flex flex-col items-center justify-center rounded-xl bg-gray-700 px-5 py-3 text-white">
              <p className="text-2xl lg:text-3xl">{props.wins}</p>
              <p className="text-xs lg:text-sm lg:font-light">Wins</p>
            </div>
            <div className="flex flex-col items-center justify-center rounded-xl bg-gray-700 px-5 py-3 text-white">
              <p className="text-2xl lg:text-3xl">{props.losses}</p>
              <p className="text-xs lg:text-sm lg:font-light">Loss</p>
            </div>
            <div className="col-span-3 rounded-xl bg-gray-700 p-4 text-center text-xs lg:text-lg">
              <p>Total Points : {props.teamPoints}</p>
            </div>
          </div>

          <Dialog.Close>
            <div className="-mb-5 mt-3 flex items-center justify-center gap-2 rounded-lg bg-primary600 px-6 py-2 transition-colors duration-300 ease-in-out hover:bg-gray-800 hover:text-primary600">
              More details <MdArrowForwardIos />
            </div>
          </Dialog.Close>
          <Dialog.Close>
            <div className="absolute right-4 top-4">
              <IoClose />
            </div>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
