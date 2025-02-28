'use client'

import Link from "next/link";
import { useState } from "react";

export default function Header(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    return (
        <header className="flex w-full max-w-[1280px] h-[50px] align-center justify-between border border-solid border-slate-400 rounded-t-lg bg-slate-900 pr-4 pl-4 fixed top-0 z-50 m-0 m-auto">
            <div className="h-full flex gap-8 items-center justify-center z-50">
                <h1 className="text-step-2 mr-16">johnatas-souza</h1>
                <nav className="hidden md:flex h-full items-center">
                    <ul className="flex flex-col md:flex-row h-full nth-1:border-l nth-1:border-solid nth-1:border-l-slate-400">
                        <li className="active menu-items"><Link href="/">_hello</Link></li>
                        <li><Link className="h-full menu-items" href="/about">_about</Link></li>
                        <li><Link className="h-full menu-items" href="/tech-stack">_tech-stack</Link></li>
                        <li><Link className="h-full menu-items" href="/projects">_projects</Link></li>
                    </ul>
                </nav>
                {isMenuOpen && (
                    //className="w-full h-dvh flex md:hidden items-start justify-center //bg-slate-900fixed inset-0"
                    <nav style={{ display: isMenuOpen ? 'flex' : 'none'}, { height: "calc(100vh - 100px)"}} className="fixed top-[50px] left-0 w-full bg-slate-900 flex flex-col justify-start items-center md:hidden overflow-hidden border-r border-solid border-r-slate-400 border-l border-l-slate-400"
                    > 
                        <ul className="w-full flex flex-col md:flex-row">
                            <li className="text-slate-500 h-full menu-items-mobile"># navigate: </li>
                            <li className="menu-items-mobile"><Link href="/">_hello</Link></li>
                            <li><Link className="h-full menu-items-mobile" href="/about">_about</Link></li>
                            <li><Link className="h-full menu-items-mobile" href="/tech-stack">_tech-stack</Link></li>
                            <li><Link className="h-full menu-items-mobile" href="/projects">_projects</Link></li>
                        </ul>
                    </nav>
                )}
                
            </div>
            <button className="hidden md:block menu-buttom">_contact-me</button>
            <button className="flex flex-col gap-1 items-center justify-center md:hidden cursor-pointer" onClick={toggleMenu}>
                <span
                    className={`w-[24px] h-[2px] bg-slate-500 transition-all duration-300 ${
                    isMenuOpen
                        ? "rotate-45 translate-y-[6px]" // Linha superior vira parte do "X"
                        : ""
                    }`}
                ></span>
                <span
                    className={`w-[24px] h-[2px] bg-slate-500 transition-all duration-300 ${
                    isMenuOpen ? "opacity-0" : "" // Linha do meio desaparece
                    }`}
                ></span>
                <span
                    className={`w-[24px] h-[2px] bg-slate-500 transition-all duration-300 ${
                    isMenuOpen
                        ? "-rotate-45 -translate-y-[6px]" // Linha inferior vira parte do "X"
                        : ""
                    }`}
                ></span>
            </button>
        </header>
    )
}