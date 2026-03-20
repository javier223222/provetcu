import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

const montserrat = Montserrat({
  subsets: ["latin"],
  
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
      <body className={`${montserrat.className} min-h-full flex flex-col`}>
        <Navbar />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
