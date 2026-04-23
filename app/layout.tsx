import type { Metadata } from "next";
import { Montserrat,Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
      <body className={`${inter.className} min-h-full flex flex-col`}>
        <Navbar />
        <Analytics />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
