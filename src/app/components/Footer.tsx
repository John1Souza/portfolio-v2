import Link from "next/link";
import Image from "next/image";

export default function Footer(){
    return (
        <footer className="hidden md:flex w-full max-w-[1280px] h-[50px] align-center justify-between border border-solid border-slate-400 rounded-t-xl bg-slate-800 pr-4 pl-4">
            <div className="h-full flex gap-8 items-center justify-center">
                <h1 className="text-step-2 mr-16">Find-me in:</h1>
                <nav className="h-full flex items-center">
                    <ul className="flex h-full border-l border-solid border-l-slate-400">
                        <li><Link className="icons" href="/"><Image src="/icons/x.svg" alt="x image" width={24} height={24}/></Link></li>
                        <li><Link className="icons" href="https://www.instagram.com/johnatassouza.dev/"><Image src="/icons/instagram.svg" alt="instagram image" width={24} height={24}/></Link></li>
                        <li><Link className="icons" href="https://www.linkedin.com/in/johnatas-pereira-de-souza-7153b3240/"><Image src="/icons/linkedin.svg" alt="linkedin image" width={24} height={24}/></Link></li>
                    </ul>
                </nav>
            </div>
            <button><Link className="menu-buttom" href="https://github.com/John1Souza">@John1Souza<Image src="/icons/git.svg" alt="x image" width={24} height={24}/></Link></button>
        </footer>
    )
}