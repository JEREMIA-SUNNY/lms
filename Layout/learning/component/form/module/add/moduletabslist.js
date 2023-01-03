import { Tab } from "@headlessui/react";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const ModuleTabsList = ({ listofModule }) => {
  
    return (
        <Tab.List className="mt-2 flex space-x-1 rounded-lg bg-gray-100 p-1 overflow-x-auto">
            {listofModule?.map((item, i) => {
                return (
                    <Tab
                        key={i}
                        className={({ selected }) =>
                            classNames(
                                'w-full rounded-lg py-2 text-sm font-medium outline-white',
                                'ring-white ring-opacity-60 ring-offset-2 ring-offset-white focus:outline-none focus:ring-0',
                                selected
                                    ? 'text-green-600 bg-white/40 shadow'
                                    : ''
                            )
                        }
                    >
                        {item?.modulename || `Module ${i + 1}`}
                    </Tab>
                )
            })}
        </Tab.List>
    )
}

export default ModuleTabsList;