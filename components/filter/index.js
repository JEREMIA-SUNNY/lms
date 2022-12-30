
import { Menu, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import SelectInput from '../SelectInput'
import Skillform from './skills';

const level = [
    { name: 'beginner', title: 'Beginner' },
    { name: 'intermediate', title: 'Intermediate' },
    { name: 'advance', title: 'Advance' },
]

const freePaid = [
    { name: 'all', title: 'All' },
    { name: 'free', title: 'Free' },
    { name: 'paid', title: 'Paid' },
]

const language = [
    { name: 'hindi', title: 'Hindi' },
    { name: 'english', title: 'English' },
    { name: 'Panjabi', title: 'Panjabi' },
    { name: 'Maradhi', title: 'Maradhi' }

]
const domains = [
    { name: 'Domain 1', title: 'Domain 1' },
    { name: 'Domain 2', title: 'Domain 2' },
    { name: 'Domain 3', title: 'Domain 3' },
    { name: 'Domain 4', title: 'Domain 4' }

]

const Filter = () => {
    const [activeFilter, setActiveFilter] = useState([])
    const [filters, setFilters] = useState({})

    const handleInput = (e) => {
        const { name, value } = e.target
        setFilters({ ...filters, [name]: value })
    }

    return (
        <div className="flex justify-end">
            <Menu as="div" className="mt-1">
                <Menu.Button className="text-[#419a00] hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                    </svg>
                </Menu.Button>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >

                    <Menu.Items className="w-full px-5 z-10 absolute right-0 mt-2 origin-top-right ring-opacity-5 focus:outline-none">
                        <div className='rounded-lg bg-white shadow-lg px-4 py-1 h-[300px]'>
                            <>
                                <div className='my-2 w-full flex justify-start items-center'>
                                    <p className='mx-2 text-gray-600 font-bold'>Filters: </p>
                                    {activeFilter?.map((item, i) => {
                                        return (
                                            <button key={i} type="button" className="mr-2 flex justify-start items-center py-2 px-3 text-xs font-bold text-[#419a00] border border-[#419a00] rounded-lg focus:ring-4 focus:outline-none focus:ring-green-300">
                                                <span>{item}</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        )
                                    })}
                                </div>
                                <hr className='mb-2' />
                            </>
                            <div className="w-full grid grid-cols-4 gap-4">
                                <div>
                                    <label htmlFor="domain" className="block mb-2 text-sm font-semibold text-gray-900">Domain</label>
                                    <SelectInput name='domain' id='domain' dropdowns={domains} />
                                </div>
                                <Skillform
                                    filters={filters}
                                    handleInput={handleInput} />
                                <div>
                                    <label htmlFor="Level" className="block mb-2 text-sm font-semibold text-gray-900">Level</label>
                                    <SelectInput name='Level' id='Level' dropdowns={level} />
                                </div>
                                <div>
                                    <label htmlFor="language" className="block mb-2 text-sm font-semibold text-gray-900">Language</label>
                                    <SelectInput name='language' id='language' dropdowns={language} />
                                </div>
                                <div>
                                    <label htmlFor="Paidorfree" className="block mb-2 text-sm font-semibold text-gray-900">Paid or free</label>
                                    <SelectInput name='Paidorfree' id='Paidorfree' dropdowns={freePaid} />
                                </div>
                            </div>
                            <div className='flex justify-end'>
                                <div className='mt-2 flex justify-start items-center'>
                                    <button onClick={() => { setActiveFilter([]) }} type="button" className="h-10 mr-2 py-2 px-3 text-[#419a00] border border-[#419a00] rounded-lg focus:ring-1 focus:outline-none focus:ring-green-600">
                                        <span>Clear</span>
                                    </button>
                                    <Menu.Item>
                                        <button type="button" className="h-10 mr-2 py-2 px-3 text-white bg-[#419a00] border border-[#419a00] rounded-lg focus:ring-1 focus:outline-none focus:ring-green-300">
                                            <span>Apply</span>
                                        </button>
                                    </Menu.Item>
                                </div>
                            </div>
                        </div>

                    </Menu.Items>
                    {/* </div> */}
                </Transition>
            </Menu>

        </div>
    )
}

export default Filter
