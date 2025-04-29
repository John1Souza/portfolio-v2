"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";

interface WorkExperience {
    title: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    type: string;
}
export default function About() {
    const { t } = useTranslation();

    const workExperience: WorkExperience[] = [
        {
            title: "Software Developer",
            company: "UI Tecnologia e Inovação",
            location: "Sobradinho-DF, Brasil",
            startDate: "Mar.2025",
            endDate: "at the moment",
            type: "Full Time"
        },
        {
            title: "IT intern",
            company: "Empresa Brasileira de Serviços Hospitalares (EBSERH)",
            location: "Brasília-DF, Brasil",
            startDate: "Jan.2024",
            endDate: "Feb.2025",
            type: "Part Time"
        },
        {
            title: "Technical Advisor",
            company: "Procuradoria Geral do Distrito Federal",
            location: "Brasília-DF, Brasil",
            startDate: "Jul.2018",
            endDate: "Dec.2023",
            type: "Full Time"
        },


    ]
    return (
        <section className="w-full md:w-4/6 max-h-full flex flex-col overflow-y-auto">
            <div className="flex flex-col gap-4 p-4">
                <h1>{t('about')}</h1>
                <p className="indent-4">
                    {t('aboutme')}
                </p>
            </div>
            <div className="flex flex-col gap-4 p-4">
                <h1>{t('workexperience')}</h1>
                {
                    workExperience.map((exp, index) => (
                        <div key={index} className="border-b border-b-slate-400 pb-6">
                            <div className="w-full flex items-center justify-between gap-4">
                                <p className="text-step-4">
                                    {exp.title}
                                </p>
                                <span className="text-step-1 font-semibold text-[#018C0F] bg-[#D7FFE0] h-[20px] px-2 rounded-lg">{exp.type}</span>
                            </div>
                            <div className="flex items-center justify-between text-step-2 text-slate-400 flex-wrap">
                                <div className="flex items-center justify-between gap-1 flex-wrap">
                                    <p className="flex gap-1 items-center">
                                        <Image
                                            src="/icons/building.svg"
                                            width={15}
                                            height={15}
                                            alt="building icon"
                                            style={{ filter: "invert(1)" }}
                                        />
                                        {exp.company}
                                    </p>
                                    <p className="flex gap-1 items-center">
                                        <Image
                                            src="/icons/location.svg"
                                            width={20}
                                            height={20}
                                            alt="building icon"
                                            style={{ filter: "invert(1)" }}
                                        />
                                        {exp.location}
                                    </p>
                                </div>
                                <p className="flex gap-1 items-center">
                                    <Image
                                        src="/icons/calendar.svg"
                                        width={15}
                                        height={15}
                                        alt="building icon"
                                        style={{ filter: "invert(1)" }}
                                    />
                                    {exp.startDate} - {exp.endDate}
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="flex flex-col p-4 gap-4">
                <h1>{t('education')}</h1>
                <p className="border-b border-b-slate-400 pb-6">
                    {t('educationdescription')}
                </p>
            </div>
        </section>
    )
}
