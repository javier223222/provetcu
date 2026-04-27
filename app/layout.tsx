import type { Metadata } from "next";
import { Montserrat,Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import { Analytics } from '@vercel/analytics/next';

const bricolage_grotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Provetcu | Distribuidora Vetinaria",
  description: "Distribuidores de medicamentos veterinarios y salud animal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className={`${bricolage_grotesque.variable} ${montserrat.variable} font-sans min-h-full flex flex-col`}>
        <Navbar />
        <Analytics />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
