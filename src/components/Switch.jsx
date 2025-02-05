"use client"
import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'
import { MdDarkMode, MdLightMode } from 'react-icons/md';

const Switch = () => {
    const { theme, setTheme, systemTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const currentTheme = theme === 'system' ? systemTheme : theme;
    useEffect(() => setMounted(true), []);

    return (
        <div>
            {
                mounted &&
                (
                    currentTheme === 'dark' ? (
                        <MdLightMode onClick={() => setTheme('Light')}
                            className='text-xl cursor-pointer hover:text-amber-500'
                        />
                    ) : (
                        <MdDarkMode
                            onClick={() => setTheme('dark')}
                            className='text-xl cursor-pointer hover:text-amber-500'
                        />
                    )
                )
            }
        </div>
    )
}

export default Switch
