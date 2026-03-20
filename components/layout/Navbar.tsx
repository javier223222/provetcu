'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { NAV_ITEMS } from '@/lib/constants';


export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white shadow-sm transition-all">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

                
                <div className="flex items-center">
                    <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-90">

                        <div className="relative h-16 w-48 shrink-0">
                            <Image
                                src="/logo.png"
                                alt="Provetcu Salud Animal Logo"
                                fill
                                className="object-contain"
                                sizes="(max-width: 768px) 192px, 192px"
                                priority
                            />
                        </div>
                    </Link>
                </div>

                
                <nav className="hidden md:flex items-center gap-8">
                    {NAV_ITEMS.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`text-[15px] font-semibold transition-colors hover:text-red-800 ${isActive ? 'text-red-800' : 'text-slate-900'
                                    }`}
                            >
                                {item.name}
                            </Link>
                        );
                    })}
                    <Link
                        href="/catalogo"
                        className="rounded-full bg-red-800 px-6 py-2.5 text-[15px] font-semibold text-white transition-all hover:bg-red-900 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-red-800 focus:ring-offset-2"
                    >
                        Ver Productos
                    </Link>
                </nav>
                <div className="flex items-center md:hidden">
                    <button
                        type="button"
                        className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-600"
                        aria-expanded={isMobileMenuOpen}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <span className="sr-only">Abrir menú principal</span>
                        {isMobileMenuOpen ? (
                            <X className="block h-6 w-6" aria-hidden="true" />
                        ) : (
                            <Menu className="block h-6 w-6" aria-hidden="true" />
                        )}
                    </button>
                </div>
            </div>
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 border-b border-gray-100 bg-gray-50 opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="space-y-1 px-4 pb-4 pt-2">
                    {NAV_ITEMS.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`block rounded-md px-3 py-2.5 text-[15px] font-semibold transition-colors ${isActive
                                    ? 'bg-red-50 text-red-800'
                                    : 'text-slate-900 hover:bg-gray-100 hover:text-red-800'
                                    }`}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        );
                    })}
                    <div className="mt-4 px-3">
                        <Link
                            href="/catalogo"
                            className="flex w-full items-center justify-center rounded-md bg-red-800 px-4 py-2.5 text-[15px] font-semibold text-white hover:bg-red-900 transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Ver Productos
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
