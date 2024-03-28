"use client";
import { useData } from "@/context/DataContext";
import { getAllProcesso } from "@/controllers/Processos";
import { FormProcesso } from "@/utils/schemas";
import { useState } from "react";
import { useFormContext } from "react-hook-form";

export default function useSaveProcesso() {
    const [loading, setLoading] = useState(false);
    const { backEndTokens } = useData();
    const { resetField } = useFormContext<FormProcesso>();

    const handleAddProcesso = async (data: FormProcesso) => {

        // const result = await getAllProcesso()

        return { handleAddProcesso, loading };
    }
}