import type { Metadata } from "next";
import { fira_code } from "./ui/fonts/font";
import "./globals.css";
import Footer from "./components/Footer";
import LoadingInicial from "./components/LoadingInicial";
import Header from "./components/Header";
import ClientLayout from "./components/ClientLayout";
import ChangeLangButton from "./components/ChangeLangButton";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "A new version of my portfolio",
  alternates: {
    languages: {
      'pt': '/',
      'en': '/',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt'>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${fira_code.className} antialiased bg-slate-950 relative`}
      >
        <ClientLayout>
          <ChangeLangButton />
          <Header />
          <LoadingInicial />
          <main className="flex max-height-full justify-start flex-1 overflow-y-auto bg-slate-900 px-4 bg-slate-800/10 bg-clip-padding backdrop-filter backdrop-blur-sm pt-4">
            {children}
          </main>
          <Footer />
        </ClientLayout>
      </body>
    </html>
  );
}