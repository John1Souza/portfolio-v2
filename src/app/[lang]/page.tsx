"use client";

import Link from "next/link";
import SnakeGame from "../components/SnakeGame";
import { useTranslation } from "react-i18next";
import ChangeLangButton from "../components/ChangeLangButton";

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
    <ChangeLangButton />
        <section className="md:w-1/2 flex flex-col text-left gap-20">
          <div>
            <p className="text-slate-500">{t('welcome')}</p>
            <h1>Johnatas Souza</h1>
            <h3 className="text-indigo-500 font-bold">{t('about')}</h3>
          </div>
          <div>
          <p className="text-slate-500">Tecnologias com as quais tenho trabalhado recentemente</p>
          <p className="text-slate-500">{t('findprofile')}</p>
            <p className="font-semibold"><span className="text-indigo-500">{t('const')}</span> <span className="text-teal-400">{t('githublink')}</span><Link className="text-rose-400 underline" href="https://github.com/John1Souza">https://github.com/John1Souza</Link></p>
          </div>
        </section>
        <section className="hidden md:flex w-1/2 flex lg:flex-row flex-col-reverse text-left gap-4 p-2 bg-slate-800/10 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm border border-slate-500">
          <SnakeGame />
          <div className="h-1/3 bg-slate-950">
            <p className="text-slate-500 text-step-1"> {t('usekeyboard')}</p>
            <p className="text-slate-500 text-step-1"> {t('wasd')}</p>
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
    </>
  );
}
