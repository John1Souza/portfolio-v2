import Link from "next/link";

export default function Header(){
    return (
        <header className="hidden md:flex w-full max-w-[1280px] h-[50px] align-center justify-between border border-solid border-slate-400 rounded-b-xl bg-slate-800 pr-4 pl-4">
            <div className="h-full flex gap-8 items-center justify-center">
                <h1 className="text-step-2 mr-16">johnatas-souza</h1>
                <nav className="h-full flex items-center">
                    <ul className="flex h-full border-l border-solid border-l-slate-400">
                        <li className="active menu-items"><Link href="/">_hello</Link></li>
                        <li><Link className="h-full menu-items" href="/about">_about</Link></li>
                        <li><Link className="h-full menu-items" href="/tech-stack">_tech-stack</Link></li>
                        <li><Link className="h-full menu-items" href="/projects">_projects</Link></li>
                    </ul>
                </nav>
            </div>
            <button className="menu-buttom">_contact-me</button>
        </header>
    )
}