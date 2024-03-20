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
