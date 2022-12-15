
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';

const filterMenu = [
    'Filter 1',
    'Filter 2',
    'Filter 3',
    'Filter 4',
    'Filter 5',
    'Filter 6',
    'Filter 7',
    'Filter 8',
    'Filter 9',
    'Filter 10',
    'Filter 11',
    'Filter 12',
]

const Filter = () => {
    return (
        <div className="flex justify-end">
            <Menu as="div" className="inline-block text-left">
                <div>
                    <Menu.Button className="inline-flex w-full justify-center py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#419a00"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z" /></svg>
                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="px-5 z-10 absolute right-0 mt-2 w-full origin-top-right ring-opacity-5 focus:outline-none">
                        <div className="rounded-lg bg-white shadow-lg px-1 py-1 w-full grid grid-cols-4 gap-2">
                            {filterMenu?.map(item => {
                                return (
                                    <Menu.Item key={item}>
                                        {({ active }) => (
                                            <button
                                                className={`${active ? 'text-[#419a00]' : 'text-gray-900'
                                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                            >
                                                {item}
                                            </button>
                                        )}
                                    </Menu.Item>
                                )
                            })}
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    )
}

export default Filter
