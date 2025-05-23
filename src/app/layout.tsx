import type { Metadata } from "next";
import { Antonio, Geist, Geist_Mono, Inter, Oswald } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Provider from "./_components/Provider";

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
          data-theme="light"
          className={`${inter.variable} ${oswald.variable} ${antonio.variable} ${geist.variable} ${geistMono.variable}`}
        >
          {children}
        </body>
      </Provider>
    </html>
  );
}
