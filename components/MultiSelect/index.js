
import { Fragment, useState } from 'react'
import { Combobox, Transition } from '@headlessui/react'

// export default function Example() {
const MultiSelect = ({ title, list, keyname, selected, setSelected, selectedList }) => {
    const [query, setQuery] = useState('')

    const filteredList =
        query === ''
            ? list
            : list.filter((person) =>
                person[keyname]
                    .toLowerCase()
                    .replace(/\s+/g, '')
                    .includes(query.toLowerCase().replace(/\s+/g, ''))
            )


    return (
        <div className='z-10'>
            <Combobox value={selected} onChange={setSelected}>
                <div className="relative mt-1">
                    <div className="relative w-full">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                        </div>
                        <Combobox.Input
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#419a00] focus:border-[#419a00] block w-full pl-10 p-2.5"
                            placeholder={`Search for ${title}`} required displayValue={(item) => selected[keyname] || ''}
                            onChange={(event) => setQuery(event.target.value)}
                        />
                    </div>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        afterLeave={() => setQuery('')}
                    >
                        <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-lg bg-white py-1 text-base ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {filteredList.length === 0 && query !== '' ? (
                                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                                    Nothing found.
                                </div>
                            ) : (
                                filteredList.map((person) => (
                                    <Combobox.Option
                                        key={person.id || person[keyname]}
                                        className={({ active }) =>
                                            `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'text-green-600' : 'text-gray-900'
                                            }`
                                        }
                                        value={person}
                                    >
                                        {({ selected, active }) => (
                                            <div className='flex items-center'>
                                                {selectedList.includes(person[keyname]) ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mr-2 w-5 h-5 text-green-600">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                                </svg>
                                                    : <span className='ml-7'>{''}</span>}
                                                <span className={`cursor-pointer block truncate ${selectedList.includes(person[keyname]) ? 'font-medium border border-green-500 bg-green-100 py-1 px-2 rounded-lg text-green-600' : 'font-normal'}`}>
                                                    {person[keyname]}
                                                </span>
                                            </div>
                                        )}
                                    </Combobox.Option>
                                ))
                            )}
                        </Combobox.Options>
                    </Transition>
                </div>
            </Combobox>
        </div>
    )
}


export default MultiSelect