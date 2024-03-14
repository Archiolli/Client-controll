import { AuthLogin } from "@/@types/types"
import { redirect } from "next/navigation"
import { cookies } from "next/headers"
import moment from 'moment'

export default function useAuth(){
    const cookieStore = cookies()
    const cookie = cookieStore.get("auth")?.value

    if(!!cookie){
        const auth:AuthLogin = JSON.parse(cookie)
        if(moment(auth.exp) < moment()){
            redirect("/")
        }
        return auth
    }

    redirect("/")
}