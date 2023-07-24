"use client"
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

type ModalType = {
    modalTitle: string;
    mainContent: any;
    showButtons: boolean;
    show: boolean;
    setShow: (a:boolean)=>void;
    buttonComponent: React.ReactNode;
};

export default function CommonModal({ modalTitle, mainContent, showButtons, buttonComponent, show, setShow }: ModalType) {
    return (
        <Transition.Root show={show} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={() => {setShow(false)}}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-900"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>
                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="fixed inset-y-0 right-0 flex max-w-full pl-10">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-in-out duration-900"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in-out duration-500"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Dialog.Panel className={'w-screen max-w-md'}>
                                    <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                        <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                                            <div className="flex items-start justify-between">
                                                <Dialog.Title>{modalTitle}</Dialog.Title>
                                            </div>
                                            <div className="mt-8">
                                                {mainContent}
                                            </div>
                                        </div>
                                        {
                                            showButtons && <div className="border-t border-gray-300 px-4 py-6 sm:px-6">{buttonComponent}</div>
                                        }
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>

                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}