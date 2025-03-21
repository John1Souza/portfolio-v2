import Link from "next/link";
import SnakeGame from "./components/SnakeGame";


export default function Home() {
  return (
    <main className="w-full h-full flex items-center justify-between bg-slate-900 grow p-4 bg-slate-800/10 bg-clip-padding backdrop-filter backdrop-blur-sm grow">  
      <section className="md:w-1/2 flex flex-col text-left gap-20">
        <div>
          <p className="text-slate-500">Hi all. I am</p>
          <h1>Johnatas Souza</h1>
          <h3 className="text-indigo-500 font-bold"> Software Developer</h3>
        </div>
        <div>
          <p className="text-slate-500 hidden md:block"> // complete the game to continue</p>
          <p className="text-slate-500"> // find my profile on Github:</p>
          <p className="font-semibold"><span className="text-indigo-500">const</span> <span className="text-teal-400">githublink = </span><Link className="text-rose-400 underline" href="https://github.com/John1Souza">https://github.com/John1Souza</Link></p>
        </div>
      </section>
      <section className="hidden md:flex w-1/2 flex lg:flex-row flex-col-reverse text-left gap-4 p-2 bg-slate-800/10 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm border border-slate-500">
        <SnakeGame />
          <div className="h-1/3 bg-slate-950">
            <p className="text-slate-500 text-step-1"> // use keyboard</p>
            <p className="text-slate-500 text-step-1"> // WASD to play</p>
            <div className="flex flex-col items-center gap-2">
              <span className="flex bg-black w-[50] h-[32] rounded-md justify-center border border-solid border-slate-400">
                W
              </span>
              <div className="flex gap-2">
                <span className="flex bg-black w-[50] h-[32] rounded-md justify-center border border-solid border-slate-400">
                  A
                </span>
                <span className="flex bg-black w-[50] h-[32] rounded-md justify-center border border-solid border-slate-400">
                  S
                </span>
                <span className="flex bg-black w-[50] h-[32] rounded-md justify-center border border-solid border-slate-400">
                  D
                </span>
              </div>
            </div>
          </div>
      </section>
    </main>
  );
}
