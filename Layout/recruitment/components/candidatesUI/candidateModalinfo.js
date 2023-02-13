


import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import CandidateDetailTabs from './candidateDetailTabs'
import CandidateInfoCard from './candidateInfoCard'

const CandidateModalInfo = ({ title, ui, width = 'w-[1160px]', moduleHeight = 'h-[80vh]', item }) => {
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
        <>
            <button onClick={openModal} className='p-0 m-p outline-none focus:outline-none '>
                <CandidateInfoCard item={item} />
            </button>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" onClose={openModal} className="relative z-50">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className={`${width} transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all`}>
                                    <div className='flex justify-between items-center'>
                                        <h3 className="mb-4 text-lg font-medium leading-6 text-gray-900">
                                            Candidate Details
                                        </h3>
                                        <button onClick={closeModal} type="button" className="text-gray-700 border border-gray-300 focus:ring-1 focus:outline-none focus:ring-gray-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                            <span className="sr-only">Icon close</span>
                                        </button>
                                    </div>
                                    <div className={`${moduleHeight}`}>
                                        <CandidateDetailTabs />
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>

        </>
    )
}

export default CandidateModalInfo;