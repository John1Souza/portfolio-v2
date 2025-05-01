'use client';

import Link from "next/link";
import SnakeGame from "./SnakeGame";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function ClientPage() {
    const { t } = useTranslation();

    return (
        <>
            <section className="md:w-1/2 flex flex-col text-left gap-20 my-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className=""
                >
                    <p className="text-slate-500">{t('welcome')}</p>
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 text-slate-500">
                        Johnatas Souza
                    </h2>
                    <h3 className="text-indigo-500 font-bold">
                        {t('about')}
                    </h3>
                </motion.div>
                <div>
                    <p className="text-slate-500">{t('stackdescription')}</p>
                    <p className="text-slate-500">{t('findprofile')}</p>
                    <p className="font-semibold"><span className="text-indigo-500">{t('const')}</span> <span className="text-teal-400">{t('githublink')}</span><Link className="text-rose-400 underline" href="https://github.com/John1Souza">https://github.com/John1Souza</Link></p>
                </div>
            </section>
            <section className="md:max-h-[550px] hidden md:flex w-1/2 flex lg:flex-row flex-col-reverse text-left gap-4 bg-slate-800/10 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm border border-slate-500 my-auto">
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
    )
}