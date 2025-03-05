import Image from "next/image";

export default function Home() {
  return (
    <main className="text-white">
      <section className="grid grid-cols-2 gap-2">
        <div className="h-[100%] flex flex-col items-center justify-center">
          <p className="text-center text-lg sm:text-2xl font-bold">The most efficient url shortner</p>
          <p className="text-center text-xs sm:text-xl">Most straight-forward url shortner</p>
        </div>
        <div className="relative h-[100%]">
          <Image src={"/vector.jpg"} height={300} width={300} alt={"gif of scissor"}></Image>
        </div>
      </section>
    </main>
  );
}
