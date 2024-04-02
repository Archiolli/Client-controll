"use client"
import { useFormContext } from "react-hook-form";
import { FormProcesso } from "@/utils/schemas";
import { AuthLogin, Consultor } from "@/@types/types";
import useSaveProcesso from "./hooks/addProcesso";
import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { MdCheckCircleOutline, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaArrowDown, FaCheck } from "react-icons/fa6";


export default function SelectConsultor({ consultor }: { consultor: Consultor[] }) {

    const nameConsultor = consultor.map((val) => {
        return val.nome
    })

    const [selected, setSelected] = useState(nameConsultor[0])
    const [query, setQuery] = useState('')

    const filteredPeople =
        query === ''
            ? consultor
            : consultor.filter((stts) =>
                stts.nome
                    .toLowerCase()
                    .replace(/\s+/g, '')
                    .includes(query.toLowerCase().replace(/\s+/g, ''))
            )


    

    return (
        <Combobox value={selected} onChange={setSelected}>
            <div className="w-full">
                <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left sm:text-sm border-1 border-yellow-400">
                    <Combobox.Input
                        className="w-full py-2 pl-3 pr-10 text-sm leading-5 text-yellow-500 border-1 outline-none focus:border-yellow-400"
                        onChange={(event) => setQuery(event.target.value)}
                    />
                    <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                        <MdOutlineKeyboardArrowDown
                            className="h-5 w-5 text-yellow-400"
                            aria-hidden="true"
                        />
                    </Combobox.Button>
                </div>
                <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    afterLeave={() => setQuery('')}
                >
                    <Combobox.Options className="absolute mt-1 max-h-60 w-1/2 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-yellow-500/100 focus:outline-none sm:text-sm border-yellow-500">
                        {filteredPeople.length === 0 && query !== '' ? (
                            <div className="relative cursor-default select-none px-4 py-2 text-yellow-500">
                                Nothing found.
                            </div>
                        ) : (
                            filteredPeople.map((stts) => (
                                <Combobox.Option
                                    className={({ active }) =>
                                        `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-yellow-500 bg-opacity-80 text-white' : 'text-yellow-500'
                                        }`
                                    }
                                    value={stts.nome}
                                >
                                    {({ selected, active }) => (
                                        <>
                                            <span
                                                className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                    }`}
                                            >
                                                {stts.nome}
                                            </span>
                                            {selected ? (
                                                <span
                                                    className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-white' : 'text-yellow-500'
                                                        }`}
                                                >
                                                    <FaCheck className="h-5 w-5" aria-hidden="true" />
                                                </span>
                                            ) : null}
                                        </>
                                    )}
                                </Combobox.Option>
                            ))
                        )}
                    </Combobox.Options>
                </Transition>
            </div>
        </Combobox>
    )
}
