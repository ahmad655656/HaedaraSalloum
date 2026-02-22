'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import Link from 'next/link';
import { CiMenuFries } from 'react-icons/ci' 
import { links } from '@/constants/navlinks';

const MobileNav = () => {
    const pathname = usePathname();

    return (
        <Sheet>
            <SheetTrigger className="flex items-center justify-center p-2 rounded-full hover:bg-accent-Default/10 transition-all">
                <CiMenuFries className="text-[32px] text-accent-Default dark:text-white" />
            </SheetTrigger>

            <SheetContent className="flex flex-col items-center justify-start py-16 px-6 gap-12 bg-white dark:bg-gray-900 text-gray-900 dark:text-white h-full border-l border-gray-200 dark:border-gray-800">
                
                {/* Header / Logo */}
                <Link href="/" className="w-full flex justify-center">
                    <h1 className="text-2xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white hover:text-accent-Default dark:hover:text-accent-Default transition-colors">
                        Haedara <span className="text-accent-Default">Salloum</span>
                    </h1>
                </Link>

                {/* Navigation Links */}
                <nav className="flex flex-col items-center justify-center gap-6 w-full">
                    {links.map((link, index) => (
                        <Link 
                            href={link.path} 
                            key={index} 
                            className={`
                                w-full text-center text-xl md:text-2xl font-medium capitalize py-3 rounded-lg transition-all
                                ${link.path === pathname 
                                    ? "text-accent-Default bg-accent-Default/10 dark:bg-accent-Default/20 border-l-4 border-accent-Default"
                                    : "text-gray-700 dark:text-gray-300 hover:text-accent-Default dark:hover:text-accent-Default hover:bg-accent-Default/10 dark:hover:bg-accent-Default/20"}
                            `}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Footer / Extra Space */}
                <div className="mt-auto text-center text-sm text-gray-500 dark:text-gray-400">
                    &copy; {new Date().getFullYear()} Haedara Salloum. All rights reserved.
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav