'use client'
import React from 'react'
import { navItems } from '../../../../utils/routes'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const Nav = () => {
    const pathname = usePathname()
  return (
    <>
        <div className='flex justify-between items-center'>
            <h1 className='text-2xl p-5 font-bold'>Spoonjoy</h1>
            <ul className='hidden sm:flex sm:space-x-5 sm:mr-5'>
                {navItems.map(({label,href}) => (
                    <li key={label}>
                        <Link
                            href={href}
                            className={`cursor-pointer transition duration-200 hover:text-green-500 hover:underline text-lg ${
                                pathname === href ? 'font-bold text-green-500' : ''
                            }`}
                            >
                            {label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    </>
  )
}

export default Nav