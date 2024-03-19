'use client'
import React from 'react'
import { doLogout } from '@/controllers/Login'
import { CiLogout } from 'react-icons/ci'

const Navbar = ({ currentUser }: { currentUser?: string }) => {
    const handleLogout = async () => await doLogout()

    return (
        <div className='flex justify-between items-center h-full px-10 bg-gradient-to-l from-yellow-500 via-yellow-600 to-yellow-700'>
            <div className='text-white'>
                {`Olá, ${currentUser}`}
            </div>
            <div className="flex flex-col h-full justify-center items-center">
                <CiLogout onClick={handleLogout} className='text-white ml-2 text-2xl cursor-pointer' />
                {/* <p className='text-xs text-white'>&copy; Archiolli - 2024</p> */}
            </div>
        </div>
    )
}

export default Navbar