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
            title: t("workExperience.ui_tecnologia.title"),
            company: t('workExperience.ui_tecnologia.company'),
            location: t('workExperience.ui_tecnologia.location'),
            startDate: t('dates.startDate'),
            endDate: t('dates.endDate'),
            type: t('workExperience.ui_tecnologia.type')
        },
        {
            title: t('workExperience.ebserh.title'),
            company: t('workExperience.ebserh.company'),
            location: t('workExperience.ebserh.location'),
            startDate: t('dates.startDate'),
            endDate: t('dates.endDate'),
            type: t('workExperience.ebserh.type')
        },
        {
            title: t('workExperience.pgdf.title'),
            company: t('workExperience.pgdf.company'),
            location: t('workExperience.pgdf.location'),
            startDate: t('dates.startDate'),
            endDate: t('dates.endDate'),
            type: t('workExperience.pgdf.type')
        }
    ]

    return (
        <section className="w-full md:w-4/6 max-h-full flex flex-col overflow-y-auto">
            <div className="flex flex-col gap-4">
                <h3 className="font-bold text-indigo-500">{t('about')}</h3>
                <p className="text-slate-500">
                    {t('aboutme')}
                </p>
            </div>
            <div className="flex flex-col gap-4">
                <h3 className="font-bold text-indigo-500">{t('workexperienceTitle')}</h3>
                {
                    workExperience.map((exp, index) => (
                        <div key={index} className="border-b border-b-slate-400 pb-6">
                            <div className="w-full flex items-center justify-between gap-4">
                                <p className="text-step-4 text-indigo-300">
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
            <div className="flex flex-col gap-4">
                <h3 className="font-bold text-indigo-500">{t('education')}</h3>
                <p className="border-b border-b-slate-400 pb-6 text-indigo-200">
                    {t('educationdescription')}
                </p>
            </div>
        </section>
    )
}
