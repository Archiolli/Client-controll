"use client"
import { Children, useRef, useState } from 'react';
import Container from "../../Container";
import Image from "next/image";
import imageExpl from "../../../../public/images/image.png"
import { CiCircleInfo } from "react-icons/ci";
import { Consultor, Processo } from "@/@types/types";
import Modal from './Modal';
import Link from 'next/link';

export default function Home({ consultores, user, processos }: { consultores?: Consultor[], user: number, processos: Processo[] }) {

    const [valueForm, setValueForm] = useState<Processo | undefined>()
    const modalRef = useRef<any>()

    const openModal = (prop: Processo) => {
        setValueForm(prop);
        if (modalRef.current) {
            modalRef.current.openModal()
        }
    }
    return (
        <Container>
            <div className="justify-start items-start flex h-full w-full p-10">
                <div className="bg-white justify-start w-full items-start overflow-hidden">
                    <div className="w-full ">
                        <div className="flex w-full justify-between items-start">
                            <p className="text-2xl font-medium text-black pb-8">Processos em andamento</p>
                            <Link href="/processo">
                                <button
                                    className="select-none rounded-lg bg-gradient-to-l from-yellow-500 via-yellow-600 to-yellow-700 py-3 px-6 text-center align-middle text-xs uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                >
                                    Novo
                                </button>
                            </Link>
                        </div>
                        <div className="bg-white shadow-md rounded">
                            <table className="min-w-max w-full table-auto border-l border-r border-gray-200">
                                <thead className="border-t border-b border-gray-200">
                                    <tr className="bg-white uppercase text-sm leading-normal">
                                        <th className="py-3 px-6 text-left">Empresa</th>
                                        <th className="py-3 px-6 text-left">Cliente</th>
                                        <th className="py-3 px-6 text-center">Status</th>
                                        <th className="py-3 px-6 text-center">Detalhes</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm font-light ">

                                    {!!processos && (Children.toArray((
                                        processos?.map((val) => {
                                            return (
                                                <tr className="border-b border-gray-200 bg-white ">
                                                    <td className="py-3 px-6 text-left">
                                                        <div className="flex items-center">
                                                            <div className="mr-2">
                                                                <Image className=" h-6 rounded-full w-full" alt="sg" src={imageExpl} />
                                                            </div>
                                                            <span className="font-medium">{val.empresaResp}</span>
                                                        </div>
                                                    </td>
                                                    <td className="py-3 px-6 text-left">
                                                        <div className="flex items-center">
                                                            <span>{val.nome}</span>
                                                        </div>
                                                    </td>
                                                    <td className="py-3 px-6 text-center">
                                                        <div className="flex items-center justify-center">
                                                            <span className={`text-white py-1 px-3 rounded-full text-sm
                                                        ${val.status === "Ok" ? 'bg-green-500' : val.status === "Providência necessária" ? 'bg-red-500' :
                                                                    val.status === "Aguardando resposta do consultor" ? 'bg-orange-800' : val.status === "Aguardando cliente" ? 'bg-yellow-500' :
                                                                        val.status === "Aguardando providencia de terceiro" ? 'bg-blue-500' :
                                                                            val.status === "Não possuímos ou processo parado" ? 'bg-gray-700' : 'bg-slate-400'}
                                                        `}>{val.status}</span>
                                                        </div>
                                                    </td>
                                                    <td className="py-3 px-6 text-center">
                                                        <div className="flex items-center justify-center">
                                                            <CiCircleInfo onClick={() => openModal(val)} className="text-3xl text-black hover:cursor-pointer hover:text-yellow-700" />
                                                        </div>
                                                    </td>
                                                </tr>
                                            )
                                        }))))}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <Modal processo={valueForm} ref={modalRef} />
        </Container>
    );
}
