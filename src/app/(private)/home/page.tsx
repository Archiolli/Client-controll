"use server"
import Home from "@/components/Layout/home"
import { getAllProcesso } from "@/controllers/Processos"
import useAuth from "@/hooks/useAuth"

export default async function Page() {
    const { backEndTokens, user } = useAuth()
    const processos = await getAllProcesso(backEndTokens.acssesToken)
    
    return (
        <Home user={user.id} processos={processos} />
    )
}