import React, { PropsWithChildren } from 'react'
import { Inter } from 'next/font/google'
// import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Layout({ children }: PropsWithChildren) {
    return (
        <body
            className={`h-screen ${inter.className}`}
            style={{ display: 'grid', gridTemplateRows: '60px 1fr' }}
        >
            <header className='bg-blue-100'>
                {/* <Navbar /> */}
            </header>

            <main className="flex-grow bg-blue-100">{children}</main>
        </body>
    )
}