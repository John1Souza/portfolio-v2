// lib/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    pt: {
      translation: {
        welcome: "Olá a todos, eu sou",
        navigate: "# navegar: ",
        contact: "_contato",
        loadinginicial: "Preparando a sua experiência...",
        loadingrotas: "Carregando...",
        githublink: "linkGithub = ",
        gameinstructions: "// complete o jogo para continuar",
        findprofile: "// encontre o meu perfil no Github:",
        const: 'const',
        about: 'Sobre mim',
        aboutme: "Sou um desenvolvedor de software apaixonado por desenvolvimento de software. Tenho experiência com JavaScript, TypeScript, React e Java. Estou sempre em busca de novos desafios e oportunidades de aprendizado.",
        usekeyboard: "// use o teclado",
        wasd: "// WASD para jogar",
        pause: "Pausar",
        resume: "Resumir",
        gameover: "Perdeu",
        score: "Pontuação: ",
        restart: "Reiniciar",
        stack: "Tecnologias que uso",
        stackdescription: "Tecnologias com as quais tenho trabalhado recentemente",
        projects: "Projetos",
        workexperience: "Experiência Profissional",
        education: "Educação",
        educationdescription: "Análise e Desenvolvimento de Sistemas - UniCesumar",
        headerhome: "_ola",
        headerabout: "_sobre",
        headertechstack: "_tecnologias",
        headerprojects: "_projetos",
        headercontact: "_contato",
        findmein: "Me encontre em:",
      }
    },
    en: {
      translation: {
        welcome: "Hi all, I am",
        navigate: "# navigate: ",
        contact: "_contact-me",
        loadinginicial: "Preparing your experience...",
        loadingrotas: "Preparing your experience...",
        githublink: "githublink = ",
        gameinstructions: "// complete the game to continue",
        findprofile: "// find my profile on Github:",
        const: 'const',
        about: 'About me',
        aboutme: "I am a software developer with a passion for web development. I have experience with JavaScript, TypeScript, React, and Java. I am always looking for new challenges and opportunities to learn.",
        usekeyboard: "// use the keyboard",
        wasd: "// WASD to play",
        pause: "Pause",
        resume: "Resume",
        gameover: "Game Over",
        score: "Score: ",
        restart: "Restart",
        stack: "My Tech Stack",
        stackdescription: "Technologies I’ve been working with recently",
        projects: "Projetos",
        workexperience: "Work Experience",
        education: "Education",
        educationdescription: "Systems Analysis and Development - UniCesumar",
        headerhome: "_hello",
        headerabout: "_about",
        headertechstack: "_tech-stack",
        headerprojects: "_projects",
        headercontact: "_contact",
        findmein: "Find me in:",
      }
    }
  },
  lng: 'pt',
  fallbackLng: 'pt',
  interpolation: {
    escapeValue: false
  },
  react: { useSuspense: false }
});

export default i18n;