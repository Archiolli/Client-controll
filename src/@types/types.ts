export type AuthRegister = {
    nome: string,
    email: string
    senha: string
}

export type AuthLogin = {
    email: string
    senha: string
}

export type LoginResponse = {
    user: {
        id: number
        nome: string
        email: string
    }
    backEndTokens: {
        acssesToken: string
        refreshToken: string
    }
    exp: string
}

export type Consultor = {
    id: number
    nome: string
    userId: number
}

export type Vistos = { 
    id: number
    tipo: string,
    userId: number
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