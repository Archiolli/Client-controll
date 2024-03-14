import { AuthLogin, AuthRegister } from '@/@types/types'
import { cookies } from 'next/headers'
import { doLogin } from '../Login'

export async function doRegister(register: AuthRegister): Promise<AuthRegister | undefined> {
    try {
        const { nome, email, senha } = register
        const options: RequestInit = {
            method: 'POST',
            cache: 'no-store',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nome, email, senha })
        }
        const resp = await fetch(`${process.env.API_URL}/auth/register`, options)
        const login = {
            email: email,
            senha: senha
        }

        if (resp.status == 201) {
            const log = await doLogin(login)
            log ? log : undefined
        }

        return undefined
    } catch (err: unknown) {
        throw new Error(`Erro ao efetuar login! Tente mais tarde. ${err}`)
    }
}
