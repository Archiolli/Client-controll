"use server"
import { Processo } from "@/@types/types";
import { FormProcesso } from '@/utils/schemas';


export async function getAllProcesso(token: string): Promise<Processo[]> {
    try {
        const option: RequestInit = {
            headers: {
                "authorization": `Bearer ${token}`
            },
            cache: 'no-store'
        }
        const resp = await fetch(`${process.env.API_URL}/processo`, option)
        const data = await resp.json()
        return resp.status == 200 ? data as Processo[] : []

    }
    catch (err: unknown) {
        return []
    }
}


export async function addProcesso(token: string, processo: FormProcesso): Promise<Processo | undefined> {
    try {
        const option: RequestInit = {
            method: "POST",
            body: JSON.stringify(processo),
            headers: {
                "authorization": `Bearer ${token}`,
                "content-type": "application/json"
            }

        }
        const resp = await fetch(`${process.env.API_URL}/processo`, option)
        const data = await resp.json()
        return resp.status == 201 ? data.data as Processo : undefined
    }
    catch (err: unknown) {
        return undefined
    }
}
