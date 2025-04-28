import type { Metadata } from "next";
import { fira_code } from "./ui/fonts/font";
import "./globals.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LoadingInicial from "./components/LoadingInicial";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "A new version of my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${fira_code.className} antialiased bg-slate-950`}
      >
        <Header />
        <LoadingInicial />
        <main className="w-full min-h-[calc(100vh-100px)] flex items-center justify-between bg-slate-900 p-4 bg-slate-800/10 bg-clip-padding backdrop-filter backdrop-blur-sm grow overflow-y-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
