"use server"
import { AuthLogin } from '@/@types/types'
import { cookies } from 'next/headers'

export async function doLogin(login: AuthLogin): Promise<AuthLogin | undefined> {
    try {
        const { email, senha } = login
        const options: RequestInit = {
            method: 'POST',
            cache: 'no-store',
            headers: {
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify({ email, senha })
        }
        const resp = await fetch(`${process.env.API_URL}/auth/login`, options)
        const data = await resp.json()

        const cookieStore = cookies()
        if (resp.status == 201) {
            const result = { user: email, ...data } as AuthLogin
            cookieStore.set('auth', JSON.stringify(result))
            return result
        }

        return undefined
    } catch (err: unknown) {
        throw new Error("Erro ao efetuar login! Tente mais tarde.")
    }
}

export async function doLogout(): Promise<void> {
    const cookieStore = cookies()
    cookieStore.getAll().map(cookie => cookieStore.delete(cookie.name))
}
