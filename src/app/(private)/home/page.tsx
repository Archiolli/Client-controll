import Home from "@/components/home"
import useAuth from "@/hooks/useAuth"

export default function Page() {
    useAuth()
    return (
        <Home />
    )
}