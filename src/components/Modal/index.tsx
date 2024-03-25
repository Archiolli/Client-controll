"use client"
import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { Processo } from '@/@types/types';


type ModalProps = {
    processo: Processo[]; // Substitua Processo[] pelo tipo real de dados que você está passando
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
                            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                                <Dialog.Title as="h3" className="text-2xl font-medium leading-8 text-black border-b-1 border-b-yellow-700">
                                    Informações completas do cliente xxxxxxxx   
                                </Dialog.Title>
                                <div className="mt-2">  
                                    <p className="text-sm text-black">
                                        Your payment has been successfully submitted. We’ve sent
                                        you an email with all of the details of your order.
                                    </p>
                                </div>

                                <div className="mt-4">
                                    {/* <button
                                        type="button"
                                        className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Got it, thanks!
                                    </button> */}
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
