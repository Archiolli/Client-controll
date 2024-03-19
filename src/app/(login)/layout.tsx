import React, { PropsWithChildren } from 'react'
import { Inter, Amita, Montserrat_Alternates } from 'next/font/google'
// import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })



export const montSerrat = Montserrat_Alternates({
    subsets: ['latin'],
    weight: "500"
})

export default function Layout({ children }: PropsWithChildren) {
    return (
        <body
            className={`h-screen ${inter.className}`}
            style={{ display: 'grid', gridTemplateRows: '60px 1fr' }}
        >
            <header className='bg-gray-200'>
                {/* <Navbar /> */}
            </header>

            <main className="flex-grow bg-gray-200">{children}</main>
        </body>
    )
}