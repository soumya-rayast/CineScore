import Link from 'next/link'
import React from 'react'
import Switch from './Switch'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
const Header = () => {
    return (
        <header className="bg-gray-900 text-white shadow-md">
            <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
                {/* Navigation Links */}
                {/* Logo */}
                <div className="flex items-center gap-6">
                    <Link href={'/'} className="flex items-center gap-1">
                        <span className="text-3xl font-extrabold bg-gradient-to-r from-red-500 to-yellow-500 text-white py-1 px-4 rounded-xl shadow-md">
                            Cine
                        </span>
                        <span className="text-2xl hidden sm:inline font-bold text-gray-200 tracking-wide">
                            Score
                        </span>
                    </Link>
                </div>

                <nav>
                    <ul className="flex gap-6 text-lg items-center ">

                        <SignedIn >
                            <UserButton />
                        </SignedIn>
                        <SignedOut >
                            <Link
                                href={'/sign-in'}
                                className="hover:text-amber-400 transition-colors"
                            >
                                Sign In
                            </Link>
                        </SignedOut>
                        <li className="hidden sm:block">
                            <Link
                                href={'/'}
                                className="hover:text-amber-400 transition-colors"
                            >
                                Home
                            </Link>
                        </li>
                        <li className="hidden sm:block">
                            <Link
                                href={'/about'}
                                className="hover:text-amber-400 transition-colors"
                            >
                                About
                            </Link>
                        </li>
                        <Switch />
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
