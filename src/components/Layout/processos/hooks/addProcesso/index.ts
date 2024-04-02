"use client";
import { RequestError } from "@/Error";
import { action } from "@/components/buttons/SnackBar/action";
import { useData } from "@/context/DataContext";
import { addProcesso } from "@/controllers/Processos";
import { FormProcesso } from "@/utils/schemas";
import { useSnackbar } from "notistack";
import { useState } from "react";
import { useFormContext } from "react-hook-form";

export default function useSaveProcesso() {
    const [loading, setLoading] = useState(false);
    const { backEndTokens, data } = useData();
    const { resetField } = useFormContext<FormProcesso>();
    const { enqueueSnackbar, closeSnackbar } = useSnackbar()

    const handleAddProcesso = async (processo: FormProcesso) => {
        try {
            setLoading(true)
            const result = await addProcesso(backEndTokens.acssesToken, processo)
            if (!!result) {
                enqueueSnackbar("Processo salva com sucesso!", action(closeSnackbar, 'success'))
            }
            else {
                enqueueSnackbar("Erro ao salvar processo! Tente mais tarde.", action(closeSnackbar, 'error'))
            }
        } catch (err: unknown) {
            enqueueSnackbar((err as RequestError).message, action(closeSnackbar, 'error'))
        } finally {
            setLoading(false)
        }
    }
    return { handleAddProcesso, loading }
}