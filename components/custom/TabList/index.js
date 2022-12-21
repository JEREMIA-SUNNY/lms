
import { Tab } from '@headlessui/react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Tablist = ({ list }) => {

    return (
        <Tab.List className="flex space-x-1 rounded-lg bg-gray-200 p-1">

            {list?.map((item, i) => {
                return (
                    <Tab
                        key={i}
                        className={({ selected }) =>
                            classNames(
                                'w-full rounded-lg py-2.5 text-sm font-medium outline-white',
                                'ring-white ring-opacity-60 ring-offset-2 ring-offset-white focus:outline-none focus:ring-2',
                                selected
                                    ? 'text-green-600 bg-white shadow'
                                    : ''
                            )
                        }
                    >
                        {item}
                    </Tab>
                )
            })}
        </Tab.List>
    )
}

export default Tablist;