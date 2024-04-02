"use client"
import { useFormContext } from "react-hook-form";
import { FormProcesso } from "@/utils/schemas";
import { AuthLogin, Consultor } from "@/@types/types";
import useSaveProcesso from "./hooks/addProcesso";
import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { MdCheckCircleOutline, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { BiArrowToBottom } from "react-icons/bi";
import { PiArrowSquareDownThin } from "react-icons/pi";
import { FaArrowDown, FaCheck } from "react-icons/fa6";
import SelectStatus from "./SelectStatus";
import SelectConsultor from "./SelectConsultor";


export default function FormAddProcesso({ consultores }: { consultores: Consultor[] }) {
    const { handleAddProcesso, loading } = useSaveProcesso()
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useFormContext<FormProcesso>()


    const status: string[] = ['Ok', 'Providência necessária', 'Aguardando resposta do consultor', 'Aguardando cliente',
        'Aguardando providencia de terceiro', 'Não possuímos ou processo parado']

    const [selected, setSelected] = useState(status[0])
    const [query, setQuery] = useState('')

    const filteredPeople =
        query === ''
            ? status
            : status.filter((stts) =>
                stts
                    .toLowerCase()
                    .replace(/\s+/g, '')
                    .includes(query.toLowerCase().replace(/\s+/g, ''))
            )




    return (
        <form>
            <div className="flex justify-between w-full">
                <div className="relative h-10 w-full min-w-[200px]">
                    <input className="peer h-full w-full rounded-[7px] border border-yellow-400 border-t-transparent bg-transparent px-3 py-2.5  text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-yellow-400 placeholder-shown:border-t-yellow-400 focus:border-2 focus:border-yellow-400 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                        type="text"
                        placeholder="Nome do cliente"
                        {...register("nome")}
                    />
                    <label
                        className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-yellow-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-yellow-400 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-yellow-400 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-yellow-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-yellow-400 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-yellow-400 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-yellow-400 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-yellow-400">
                        Nome
                    </label>
                </div>
                <div className="relative h-10 w-full min-w-[200px]">
                    <input className="peer h-full w-full rounded-[7px] border border-yellow-400 border-t-transparent bg-transparent px-3 py-2.5  text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-yellow-400 placeholder-shown:border-t-yellow-400 focus:border-2 focus:border-yellow-400 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                        type="text"
                        placeholder="Empresa aberta"
                        {...register("empresaAberta")}
                    />
                    <label
                        className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-yellow-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-yellow-400 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-yellow-400 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-yellow-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-yellow-400 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-yellow-400 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-yellow-400 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-yellow-400">
                        Empresa Aberta
                    </label>
                </div>
            </div>

            <div className="flex justify-between w-full">

                <div className="relative h-10 w-full min-w-[200px]">
                    <input className="peer h-full w-full rounded-[7px] border border-yellow-400 border-t-transparent bg-transparent px-3 py-2.5  text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-yellow-400 placeholder-shown:border-t-yellow-400 focus:border-2 focus:border-yellow-400 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                        type="text"
                        placeholder="Diploma"
                        {...register("diploma")}
                    />
                    <label
                        className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-yellow-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-yellow-400 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-yellow-400 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-yellow-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-yellow-400 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-yellow-400 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-yellow-400 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-yellow-400">
                        Diploma
                    </label>
                </div>
                <div className="relative h-10 w-full min-w-[200px]">
                    <input className="peer h-full w-full rounded-[7px] border border-yellow-400 border-t-transparent bg-transparent px-3 py-2.5  text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-yellow-400 placeholder-shown:border-t-yellow-400 focus:border-2 focus:border-yellow-400 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                        type="text"
                        placeholder="Histórico"
                        {...register("historico")}
                    />
                    <label
                        className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-yellow-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-yellow-400 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-yellow-400 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-yellow-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-yellow-400 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-yellow-400 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-yellow-400 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-yellow-400">
                        Histtórico
                    </label>
                </div>
            </div>
            <div className="flex justify-between w-full">

                <div className="relative h-10 w-full min-w-[200px]">
                    <input className="peer h-full w-full rounded-[7px] border border-yellow-400 border-t-transparent bg-transparent px-3 py-2.5  text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-yellow-400 placeholder-shown:border-t-yellow-400 focus:border-2 focus:border-yellow-400 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                        type="text"
                        placeholder="Prazo de aplicação"
                        {...register("prazoAplicacao")}
                    />
                    <label
                        className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-yellow-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-yellow-400 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-yellow-400 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-yellow-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-yellow-400 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-yellow-400 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-yellow-400 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-yellow-400">
                        Prazo de aplicação
                    </label>
                </div>
                <div className="relative h-10 w-full min-w-[200px]">
                    <input className="peer h-full w-full rounded-[7px] border border-yellow-400 border-t-transparent bg-transparent px-3 py-2.5  text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-yellow-400 placeholder-shown:border-t-yellow-400 focus:border-2 focus:border-yellow-400 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                        type="text"
                        placeholder="Prioridade"
                        {...register("prioridade")}
                    />
                    <label
                        className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-yellow-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-yellow-400 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-yellow-400 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-yellow-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-yellow-400 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-yellow-400 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-yellow-400 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-yellow-400">
                        Prioridade
                    </label>
                </div>
            </div>
            <div className="flex justify-between w-full">

                <div className="relative h-10 w-full min-w-[200px]">
                    <input className="peer h-full w-full rounded-[7px] border border-yellow-400 border-t-transparent bg-transparent px-3 py-2.5  text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-yellow-400 placeholder-shown:border-t-yellow-400 focus:border-2 focus:border-yellow-400 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                        type="text"
                        placeholder="LOR"
                        {...register("lor")}
                    />
                    <label
                        className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-yellow-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-yellow-400 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-yellow-400 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-yellow-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-yellow-400 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-yellow-400 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-yellow-400 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-yellow-400">
                        LOR
                    </label>
                </div>
                <div className="relative h-10 w-full min-w-[200px]">
                    <input className="peer h-full w-full rounded-[7px] border border-yellow-400 border-t-transparent bg-transparent px-3 py-2.5  text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-yellow-400 placeholder-shown:border-t-yellow-400 focus:border-2 focus:border-yellow-400 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                        type="text"
                        placeholder="Equivalência"
                        {...register("equivalencia")}
                    />
                    <label
                        className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-yellow-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-yellow-400 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-yellow-400 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-yellow-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-yellow-400 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-yellow-400 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-yellow-400 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-yellow-400">
                        Equivalência
                    </label>
                </div>
            </div>
            <div className="flex justify-between w-full">

                <div className="relative h-10 w-full min-w-[200px]">
                    <input className="peer h-full w-full rounded-[7px] border border-yellow-400 border-t-transparent bg-transparent px-3 py-2.5  text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-yellow-400 placeholder-shown:border-t-yellow-400 focus:border-2 focus:border-yellow-400 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                        type="text"
                        placeholder="Docs"
                        {...register("docs")}
                    />
                    <label
                        className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-yellow-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-yellow-400 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-yellow-400 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-yellow-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-yellow-400 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-yellow-400 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-yellow-400 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-yellow-400">
                        Docs
                    </label>
                </div>
                <div className="relative h-10 w-full min-w-[200px]">
                    <input className="peer h-full w-full rounded-[7px] border border-yellow-400 border-t-transparent bg-transparent px-3 py-2.5  text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-yellow-400 placeholder-shown:border-t-yellow-400 focus:border-2 focus:border-yellow-400 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                        type="text"
                        placeholder="Buisiness Plan"
                        {...register("buisinessPlan")}
                    />
                    <label
                        className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-yellow-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-yellow-400 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-yellow-400 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-yellow-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-yellow-400 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-yellow-400 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-yellow-400 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-yellow-400">
                        Buisiness Plan
                    </label>
                </div>
            </div>
            <div className="flex justify-between w-full">
                <div className="relative h-10 w-full min-w-[200px]">
                    <input className="peer h-full w-full rounded-[7px] border border-yellow-400 border-t-transparent bg-transparent px-3 py-2.5  text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-yellow-400 placeholder-shown:border-t-yellow-400 focus:border-2 focus:border-yellow-400 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                        type="text"
                        placeholder="Observação"
                        {...register("observacao")}
                    />
                    <label
                        className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-yellow-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-yellow-400 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-yellow-400 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-yellow-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-yellow-400 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-yellow-400 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-yellow-400 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-yellow-400">
                        Observação
                    </label>
                </div>


            </div>
            <div className="flex justify-between w-full">
                <SelectStatus />

                <SelectConsultor consultor={consultores} />

            </div>
            <button type="submit">
                Enviar
            </button>
        </form>
    )
}
