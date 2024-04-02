"use server"
import { Consultor, Processo } from "@/@types/types";


export async function getAllConsultores(token: string): Promise<Consultor[]> {
    try {
        const option: RequestInit = {
            headers: {
                "authorization": `Bearer ${token}`
            },
            cache: 'no-store'
        }
        const resp = await fetch(`${process.env.API_URL}/consultor`, option)
        const data = await resp.json()
        return resp.status == 200 ? data as Consultor[] : []
    }
    catch (err: unknown) {
        return []
    }
}
