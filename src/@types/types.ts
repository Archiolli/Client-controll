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


export type Processo = {
    id: number,
    nome: string,
    docs: string,
    consultorId: number,
    observacao: string,
    prazoAplicacao: string,
    prioridade: string,
    empresaAberta: string,
    buisinessPlan: string,
    diploma: string,
    historico: string,
    equivalencia: string,
    lor: string,
    status: string,
    userId: number,
    vistoId: number
}