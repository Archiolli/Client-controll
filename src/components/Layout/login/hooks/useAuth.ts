'use client'
import { action } from "@/components/buttons/SnackBar/action"
import { doLogin } from "@/controllers/Login"
// import { RequestError } from "@/errors/RequestError"
import { FormLoginType } from "@/utils/schemas"
import { useRouter } from "next/navigation"
import { useSnackbar } from "notistack"
import { useState } from "react"

export default function useLogin() {
    const [loading, setLoading] = useState<boolean>(false)
    const { enqueueSnackbar, closeSnackbar } = useSnackbar()
    const router = useRouter()

    const handleLogin = async (data: FormLoginType) => {
        try {
            setLoading(true)
            const result = await doLogin(data)
            if (!!result) {
                enqueueSnackbar(result.message, action(closeSnackbar, 'success'))
                router.push("/home")
            }
            else {
                enqueueSnackbar("Login ou senha inválido(s)", action(closeSnackbar, 'warning'))
            }
        } catch (err: unknown) {
            enqueueSnackbar((err as any).message, action(closeSnackbar, 'error'))
        } finally {
            setLoading(false)
        }
    }

    return { handleLogin, loading }
}