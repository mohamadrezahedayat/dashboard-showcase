import Image from "next/image";

export default function Home() {
  return (
    <main className="basis-full">
      <div className="max-w-7xl h-dvh mx-auto grid grid-cols-3 gap-4 auto-rows-min p-6">
        <div className="border-solid border-neutral-400 border-[1px]  rounded-[20px] h-[17.5rem] xl:col-span-2 col-span-3">
          box
        </div>
        <div className="border-solid border-neutral-400 border-[1px] rounded-[20px]  h-[17.5rem] xl:col-span-1 col-span-3">
          box
        </div>
        <div className="border-solid border-neutral-400 border-[1px]  rounded-[20px] h-[17.5rem] xl:col-span-1 col-span-3">
          box
        </div>
        <div className="border-solid border-neutral-400 border-[1px]  rounded-[20px] h-[17.5rem]  xl:col-span-2 col-span-3">
          box
        </div>
        <div className="border-solid border-neutral-400 border-[1px]  rounded-[20px] h-[17.5rem]  xl:col-span-2 col-span-3">
          box
        </div>
        <div className="border-solid border-neutral-400 border-[1px]  rounded-[20px] h-[17.5rem] xl:col-span-1 col-span-3">
          box
        </div>
      </div>
    </main>
  );
}
