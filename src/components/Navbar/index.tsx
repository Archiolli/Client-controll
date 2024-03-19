'use client'
import React from 'react'
import { doLogout } from '@/controllers/Login'
import { CiLogout } from 'react-icons/ci'

const Navbar = ({ currentUser }: { currentUser?: string }) => {
    const handleLogout = async () => await doLogout()

    return (
        <div className='flex justify-between items-center h-full px-5 bg-gradient-to-l from-yellow-500 via-yellow-600 to-yellow-700'>
            <div className='text-white'>
                {`Olá ${currentUser}`}
            </div>
            <div className="flex h-full items-center">
                <p className='text-xs text-white'>&copy; Archiolli - 2024</p>
                <CiLogout onClick={handleLogout} className='text-white ml-2 text-2xl cursor-pointer' />
            </div>
        </div>
    )
}

export default Navbar