import type { Metadata } from "next";
import { fira_code } from "../ui/fonts/font";
import "../globals.css";
import Footer from "../components/Footer";
import LoadingInicial from "../components/LoadingInicial";
import I18nProvider from "../providers/I18nProvider";
import Header from "../components/Header";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "A new version of my portfolio",
};

export default function RootLayout({
  children,
  params: { lng }
}: Readonly<{
  children: React.ReactNode;
  params: { lng: string };
}>) {
  return (
    <html lang={lng} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${fira_code.className} antialiased bg-slate-950`}
      >
        <I18nProvider lng={lng}>
          <Header />
          <LoadingInicial />
          <main className="w-full min-h-[calc(100vh-100px)] flex items-center justify-between bg-slate-900 p-4 bg-slate-800/10 bg-clip-padding backdrop-filter backdrop-blur-sm flex-1 grow">
            {children}
          </main>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
