import Image from "next/image"

export default function TechStack(){
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
        <section className="flex flex-col items-center justify-center w-full flex-1 p-4">
          <div className="flex flex-col justify-center items-start w-full grow">
              <h1>My Tech Stack</h1>
              <p>Technologies I’ve been working with recently</p>
          </div>
          <div className="flex justify-center items-center grow flex-wrap gap-10">
            {
              techStack && techStack.map((tech, index) => (
                <div key={index} className="flex flex-col justify-center items-center gap-2 p-2">
                    <Image
                      src={tech.icon ? tech.icon : `/icons/${tech.iconName}.svg`}
                      width={100}
                      height={100}
                      alt={tech.name}
                    />
                  <p>{tech.name}</p>
                </div>
              ))
            }
          </div>
        </section>
    )
}
