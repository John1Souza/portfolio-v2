"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function TechStack() {
    const { t } = useTranslation();
    const techStack = [
        {
            name: "JavaScript",
            iconName: "js",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
            name: "TypeScript",
            iconName: "typescript",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        },
        {
            name: "React",
            iconName: "react",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
            name: "Node.js",
            iconName: "nodejs",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
            name: "Next.js",
            iconName: "nextjs",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        },
        {
            name: "Tailwind CSS",
            iconName: "tailwindcss",
        },
        {
          name: "Sass",
          iconName: "sass",
          icon: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg`,
        },
        {
            name: "CSS",
            iconName: "css",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        },
        {
            name: "Git",
            iconName: "git",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        },
        {
            name: "HTML",
            iconName: "html",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        },
        {
            name: "Bootstrap",
            iconName: "bootstrap",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
        },
        {
            name: "VS Code",
            iconName: "vscode",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
        },
        {
          name: "PHP",
          iconName: "php",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
      },
      {
          name: "Yii2",
          iconName: "yii",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yii/yii-original.svg",
      },
      {
          name: "Angular",
          iconName: "angular",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
      },
      {
          name: "MongoDB",
          iconName: "mongodb",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
      {
          name: "PostgreSQL",
          iconName: "postgresql",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
      {
          name: "jQuery",
          iconName: "jquery",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg",
      }
    ]

    return (
        <section className="flex flex-col w-full max-h-full flex-1 overflow-y-auto">
          <div className="flex flex-col justify-center items-start w-full">
              <h3 className="font-bold text-indigo-500">{t('stack')}</h3>
              <p className="text-slate-500">{t('stackdescription')}</p>
          </div>
          <div className="flex justify-center items-center flex-wrap gap-5 pt-4 max-h-full overflow-y-auto my-auto">
            {
              techStack && techStack.map((tech, index) => (
                <div key={index} className="flex flex-col justify-center items-center gap-2 p-2">
                    <Image
                      src={tech.icon ? tech.icon : `/icons/${tech.iconName}.svg`}
                      width={70}
                      height={70}
                      alt={tech.name}
                    />
                  <p className="text-slate-500">{tech.name}</p>
                </div>
              ))
            }
          </div>
        </section>
    )
}
