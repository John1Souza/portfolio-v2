import type { Metadata } from "next";
import { fira_code } from "./ui/fonts/font";
import "./globals.css";
import Footer from "./components/Footer";
import Header from "./components/Header";


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
        {children}
        <Footer />
      </body>
    </html>
  );
}
