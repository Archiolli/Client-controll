"use client"
import { FormProvider, useForm } from "react-hook-form";
import FormAddProcesso from "./Processo";
import { yupResolver } from '@hookform/resolvers/yup'
import { schema_processo } from "@/utils/schemas";

export default function ProcessoWrapper() {
    const methods =  useForm({ resolver: yupResolver(schema_processo)})
    return (
        <FormProvider {...methods}>
            <FormAddProcesso />
        </FormProvider>
    );
}
