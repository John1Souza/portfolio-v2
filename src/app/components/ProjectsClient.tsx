'use client';

import { useTranslation } from "react-i18next";
import { Repo } from "../projects/page";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ProjectsClient({ pageRepos }: { pageRepos: Repo[] }) {
    const { t } = useTranslation();

    return (
        <section className="w-full max-h-full flex flex-col gap-4 bg-slate-900 text-white pb-4">
            <div className="flex flex-col items-start justify-center gap-2 mb-4 w-full flex-wrap">
                <h3 className="font-bold text-indigo-500">{t('projects')}</h3>
                <p className="text-slate-500">{t('projectsSubtitle')}</p>
            </div>
            <div className="max-h-full flex items-center justify-center gap-4 flex-wrap flex-1 grow overflow-y-auto">
                {pageRepos && pageRepos.map((repo: Repo) => (
                    repo ?
                        <motion.div
                            key={repo.id}
                            whileHover={{ y: 3 }}
                            className="max-w-[282px] h-[400px] flex flex-col items-center justify-start gap-2 bg-slate-800 p-4 shadow-md duration-300 ease-in-out p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                            <Image
                                src={`/images/${repo.name}.webp`}
                                alt={repo.name}
                                width={1060}
                                height={500}
                                className="w-full h-1/2 rounded-lg mb-4"
                            />
                            <h6 className="text-indigo-300">{repo.name.substring(0, 1).toUpperCase() + repo.name.substring(1)}</h6>
                            <button className="btn btn-primary border-none border-slate-500 bg-slate-700 hover:bg-slate-600 text-white rounded-md px-2 py-2">
                                <a href={`https://john1souza.github.io/${repo.name}`} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                                    {t('viewProject')}
                                </a>
                            </button>
                        </motion.div> : null
                ))}
            </div>
        </section>
    )
}