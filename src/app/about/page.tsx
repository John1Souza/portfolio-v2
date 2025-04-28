import Image from "next/image";
interface WorkExperience {
    title: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    type: string;
}
export default function About() {
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
        <section className="w-full md:w-4/6 flex flex-col justify-center flex-1 grow md:self-start p-4 overflow-y-auto">
            <div className="flex flex-col gap-4 p-4">
                <h1>About Me</h1>
                <p className="indent-4">
                    I am a software developer with a passion for web development. I have experience with JavaScript, TypeScript, React, and Java. I am always looking for new challenges and opportunities to learn.
                </p>
            </div>
            <div className="flex flex-col gap-4 p-4">
                <h1>Work Experience</h1>
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
                <h1>Education</h1>
                <p className="border-b border-b-slate-400 pb-6">
                    Systems Analysis and Development - UniCesumar
                </p>
            </div>
        </section>
    )
}
