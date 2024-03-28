import React, { PropsWithChildren } from 'react'
import { Inter, Domine } from 'next/font/google'
// import Navbar from '@/components/Navbar'
import useAuth from '@/hooks/useAuth'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })
const domine = Domine({ subsets: ['latin'] })

export default function Layout({ children }: PropsWithChildren) {
    const { user } = useAuth()

    return (
        <body
            className={`h-screen ${domine.className}`}
            style={{ display: 'grid', gridTemplateRows: '60px 1fr' }}
        >
            <header className='flex-grow bg-white'>
                <Navbar currentUser={user?.nome} />
            </header>
            <main className="flex-grow bg-white">{children}</main>
        </body>
    )
}