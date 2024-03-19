export type AuthRegister = {
    nome: string,
    email: string
    senha: string
}

export type AuthLogin = {
    user?: {
        nome: string
    }
    email: string
    senha: string
    exp: string
}
