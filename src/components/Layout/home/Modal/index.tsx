import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { Processo } from '@/@types/types';
import { GoPencil } from "react-icons/go";

type ModalProps = {
    processo: Processo | undefined;
}

const Modal = forwardRef(({ processo }: ModalProps, ref) => {
    const [isOpen, setIsOpen] = useState(false);

    useImperativeHandle(ref, () => ({
        openModal() {
            setIsOpen(true);
        },
        closeModal() {
            setIsOpen(false);
        }
    }));

    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="fixed inset-0 z-50 overflow-y-auto" onClose={() => setIsOpen(false)}>
                    <div className="min-h-screen px-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
                        </Transition.Child>

                        <span
                            className="inline-block h-screen align-middle"
                            aria-hidden="true"
                        >
                        </span>

                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <div className="inline-block w-full max-w-2xl p-10 my-10 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                                <Dialog.Title as="h3" className="text-2xl font-medium leading-8 text-black border-b-1 border-b-yellow-700 pb-3">
                                    {processo?.nome}
                                </Dialog.Title>
                                <div className="min-w-max w-full flex justify-between font-medium uppercase">
                                    <div className="bg-white text-sm text-justify flex flex-col  w-full" >
                                        <div className="py-3 px-6 flex justify-between"><span>Profissão: Add prfissao</span><GoPencil className='cursor-pointer' /></div>
                                        <div className="py-3 px-6 flex justify-between"><span>Docs: {processo?.docs}</span><GoPencil className='cursor-pointer' /></div>
                                        <div className="py-3 px-6 flex justify-between"><span>Consultor: {processo?.consultor.nome}</span><GoPencil className='cursor-pointer' /></div>
                                        <div className="py-3 px-6 flex justify-between"><span>Visto: {processo?.visto.tipo}</span><GoPencil className='cursor-pointer' /></div>
                                        <div className="py-3 px-6 flex justify-between"><span>Fase: {processo?.status}</span><GoPencil className='cursor-pointer' /></div>
                                        <div className="py-3 px-6 flex justify-between"><span>Observação: {processo?.observacao}</span><GoPencil className='cursor-pointer' /></div>
                                        <div className="py-3 px-6 flex justify-between"><span>Prazo de aplicação:  {processo?.prazoAplicacao}</span><GoPencil className='cursor-pointer' /></div>
                                        <div className="py-3 px-6 flex justify-between"><span>Prioridade: {processo?.prioridade}</span><GoPencil className='cursor-pointer' /></div>
                                        <div className="py-3 px-6 flex justify-between"><span>Empresa aberta: {processo?.empresaAberta}</span><GoPencil className='cursor-pointer' /></div>
                                        <div className="py-3 px-6 flex justify-between"><span>Buisiness Plan: {processo?.businessPlan}</span><GoPencil className='cursor-pointer' /></div>
                                        <div className="py-3 px-6 flex justify-between"><span>Diploma, histórico e equivalência: {processo?.diploma}</span><GoPencil className='cursor-pointer' /></div>
                                        <div className="py-3 px-6 flex justify-between"><span>LOR: {processo?.lor}</span><GoPencil className='cursor-pointer' /></div>
                                    </div>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
});

export default Modal;
