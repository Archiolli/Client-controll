"use server"
import { Consultor } from "@/@types/types"
import ProcessoWrapper from "@/components/Layout/processos"
import { getAllConsultores } from "@/controllers/Consultor"
import useAuth from "@/hooks/useAuth"

export default async function Page() {
    const { backEndTokens } = useAuth()
    const consultores : Consultor[] = await getAllConsultores(backEndTokens.acssesToken)
    
    return (
        <ProcessoWrapper consultores={consultores} />
    )
}