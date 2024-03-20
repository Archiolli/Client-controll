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
            <header className='bg-white'>
                {/* <Navbar /> */}
            </header>

            <main className="flex-grow bg-white">{children}</main>
        </body>
    )
}