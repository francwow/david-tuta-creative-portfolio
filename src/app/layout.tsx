import type { Metadata } from "next";
import { Antonio, Geist, Geist_Mono, Inter, Oswald } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Provider from "./_components/Provider";
import HomeImg from "./_components/home/HomeImg";
import HeroImg from "./_components/home/HeroImg";
import Header from "./_components/header/Header";
import Footer from "./_components/footer/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--inter" });
const oswald = Oswald({ subsets: ["latin"], variable: "--oswald" });
const antonio = Antonio({ subsets: ["latin"], variable: "--antonio" });
const geist = Geist({ subsets: ["latin"], variable: "--geist" });
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--geist-mono",
});

const materialSymbols = localFont({
  variable: "--font-family-symbols", // Variable name (to reference after in CSS/styles)
  style: "normal",
  src: "../../node_modules/material-symbols/material-symbols-rounded.woff2", // This is a reference to woff2 file from NPM package "material-symbols"
  display: "block",
  weight: "100 700",
});

export const metadata: Metadata = {
  title: "David Tuta",
  description:
    "David Tuta es un creador de experiencias audiovisuales colombiano.",
  keywords: [
    "David Tuta",
    "filmmaker",
    "audiovisual",
    "creative",
    "portfolio",
    "Colombia",
    "video production",
  ],
  authors: [{ name: "David Tuta" }],
  creator: "David Tuta",
  openGraph: {
    title: "David Tuta - Creative Portfolio",
    description:
      "David Tuta es un creador de experiencias audiovisuales colombiano.",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "David Tuta - Creative Portfolio",
    description:
      "David Tuta es un creador de experiencias audiovisuales colombiano.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${materialSymbols.variable}`} lang="es">
      <Provider>
        <body
          className={`${inter.variable} ${oswald.variable} ${antonio.variable} ${geist.variable} ${geistMono.variable}  bg-sky-950`}
        >
          {/* Skip to content link for accessibility */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-yellow-500 text-sky-950 px-4 py-2 rounded-lg font-semibold z-[9999] focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            Skip to main content
          </a>

          <div className="block lg:hidden absolute inset-0">
            <HomeImg device="mobile" />
          </div>
          <div className="hidden lg:block absolute inset-0">
            <HomeImg device="desktop" />
          </div>
          <HeroImg />
          <div id="main-content">{children}</div>
          <Header />
          <div className="hidden lg:block">
            <Footer />
          </div>
        </body>
      </Provider>
    </html>
  );
}
