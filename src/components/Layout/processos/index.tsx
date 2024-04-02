"use client"
import { FormProvider, useForm } from "react-hook-form";
import FormAddProcesso from "./Processo";
import { yupResolver } from '@hookform/resolvers/yup'
import { schema_processo } from "@/utils/schemas";
import { Consultor } from "@/@types/types";

export default function ProcessoWrapper({consultores} : {consultores: Consultor[]}) {
    const methods =  useForm({ resolver: yupResolver(schema_processo)})
    
    return (
        <FormProvider {...methods}>
            <FormAddProcesso consultores={consultores} />
        </FormProvider>
    );
}
