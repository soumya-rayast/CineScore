"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import React from 'react'

const NavbarItem = ({ title, param }) => {
    const genre = usePathname().split('/')[2];
    return (
        <div>
            <Link 
            className={`hover:text-amber-600 font-semibold ${
                genre === param 
                ? 'underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg'
                :''
            }`}
            href={`/top/${param}`}
            >
            {title}
            </Link>
        </div>
    )
}

export default NavbarItem
