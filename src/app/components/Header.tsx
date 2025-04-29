'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useTranslation } from "react-i18next";

interface NavMenu {
    name: string;
    href: string;
}


export default function Header() {
    const { t } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();
    const currentLang = pathname.split('/')[1] || 'pt';

    const navLinks: NavMenu[] = [
        { name: t('headerhome'), href: "/" },
        { name: t('headerabout'), href: "/about" },
        { name: t('headertechstack'), href: "/tech-stack" },
        { name: t('headerprojects'), href: "/projects" },
    ]

    const isActive = (href: string) => {
        const pathAfterLang = pathname.split('/').slice(2).join('/') || '';
        const normalizedHref = href.replace(/^\/|\/$/g, '');

        if (href === '/') {
            return pathAfterLang === '';
        }

        return pathAfterLang === normalizedHref;
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    return (
        <header className="flex w-full max-w-[1280px] h-[50px] align-center justify-between border border-solid border-slate-400 rounded-b-lg bg-slate-900 pr-4 pl-4 fixed top-0 z-10 m-0 m-auto">
            <div className="h-full flex gap-8 items-center justify-center z-50">
                <h1 className="text-step-2 mr-16 text-slate-400">johnatas-souza</h1>
                <nav className="hidden md:flex h-full items-center">
                    <ul className="flex flex-col md:flex-row h-full nth-1:border-l nth-1:border-solid nth-1:border-l-slate-400">
                        {
                            navLinks.map((link, index) =>
                            (
                                <li key={index}>
                                    <Link className={`h-full menu-items ${isActive(link.href)
                                        ? 'border-b-2 border-[#ffa400]' : ''
                                        }`} href={`/${currentLang}${link.href}`} prefetch={true}>
                                        {link.name}
                                    </Link>
                                </li>
                            )
                            )
                        }
                    </ul>
                </nav>
                {isMenuOpen && (
                    //className="w-full h-dvh flex md:hidden items-start justify-center //bg-slate-900fixed inset-0"
                    <nav style={{ display: isMenuOpen ? 'flex' : 'none' }, { height: "calc(100vh - 100px)" }} className="fixed top-[50px] left-0 w-full bg-slate-900 flex flex-col justify-start items-center md:hidden overflow-hidden border-r border-solid border-r-slate-400 border-l border-l-slate-400"
                    >
                        <ul className="w-full flex flex-col md:flex-row">
                            <li className=" text-step-3 text-slate-500 h-full menu-items-mobile">{t('navigate')}</li>
                            {
                                navLinks.map((link, index) =>
                                (
                                    <li onClick={toggleMenu} key={index}>
                                        <Link className={`h-full menu-items-mobile 
                                        ${isActive(link.href) ? 'border-2 border-[#ffa400]' : ''
                                            }`} href={link.href} prefetch={true}>{link.name}</Link></li>
                                ))
                            }
                        </ul>
                    </nav>
                )}
            </div>
            <button className="hidden md:block">
                <Link className={`h-full menu-items border-s-1 border-slate-400 ${isActive("/contact")
                    ? 'border-2 border-[#ffa400]' : ''
                    }`} href={`/${currentLang}/contact`} prefetch={true}>
                    {t('contact')}
                </Link>
            </button>
            <button className="flex flex-col gap-1 items-center justify-center md:hidden cursor-pointer" onClick={toggleMenu}>
                <span
                    className={`w-[24px] h-[2px] bg-slate-500 transition-all duration-300 ${isMenuOpen
                        ? "rotate-45 translate-y-[6px]"
                        : ""
                        }`}
                ></span>
                <span
                    className={`w-[24px] h-[2px] bg-slate-500 transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""
                        }`}
                ></span>
                <span
                    className={`w-[24px] h-[2px] bg-slate-500 transition-all duration-300 ${isMenuOpen
                        ? "-rotate-45 -translate-y-[6px]"
                        : ""
                        }`}
                ></span>
            </button>
        </header >
    )
}
