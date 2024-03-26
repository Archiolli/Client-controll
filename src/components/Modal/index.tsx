import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { Processo } from '@/@types/types';

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
                            <div className="inline-block w-full max-w-6xl p-16 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                                <Dialog.Title as="h3" className="text-2xl font-medium leading-8 text-black border-b-1 border-b-yellow-700">
                                    Informações completas do cliente {processo?.nome}
                                </Dialog.Title>
                                <div className="mt-8">
                                    <table className="min-w-max w-full table-auto border-l border-r border-gray-200">
                                        <thead className="border-t border-b border-gray-200">
                                            <tr className="bg-white uppercase text-sm leading-normal">
                                                <th className="py-3 px-6 text-left">buisinessPlan</th>
                                                <th className="py-3 px-6 text-left">Nome</th>
                                                <th className="py-3 px-6 text-center">lor</th>
                                                <th className="py-3 px-6 text-center">prioridade</th>
                                                <th className="py-3 px-6 text-center">empresaAberta</th>
                                                <th className="py-3 px-6 text-center">Detalhes</th>
                                                <th className="py-3 px-6 text-center">Detalhes</th>
                                                <th className="py-3 px-6 text-center">Detalhes</th>
                                                </tr>
                                        </thead>
                                        <tbody className="text-sm font-light ">

                                            <tr className="border-b border-gray-200 bg-white ">
                                                <td className="py-3 px-6 text-left">
                                                    <span className="font-medium">{processo?.buisinessPlan}</span>
                                                </td>
                                                <td className="py-3 px-6 text-left">
                                                    <span>{processo?.nome}</span>
                                                </td>
                                                <td className="py-3 px-6 text-center">
                                                    <span>{processo?.lor}</span>
                                                </td>
                                                <td className="py-3 px-6 text-center">
                                                    <span>{processo?.prioridade}</span>
                                                </td>
                                                <td className="py-3 px-6 text-center">
                                                    <span>{processo?.empresaAberta}</span>
                                                </td>
                                            </tr>

                                        </tbody>
                                    </table>
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
