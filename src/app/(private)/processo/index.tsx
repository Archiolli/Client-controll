import { Consultor } from "@/@types/types"
import Processos from "@/components/Processos"
import Home from "@/components/home"
import { getAllConsultores } from "@/controllers/Consultor"
import useAuth from "@/hooks/useAuth"

export default async function Page() {
    const { backEndTokens, user } = useAuth()
    const consultores : Consultor[] = await getAllConsultores(backEndTokens.acssesToken)
    return (
        <Processos consultores={consultores} user={user.id}/>
    )
}