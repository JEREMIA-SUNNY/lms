import IconWithChip from "components/custom/Chip/iconWithChip";
import ListOfStudent from "./listOfStudent";
import Tablist from "components/custom/TabList";
import { Tab } from "@headlessui/react";
import ListOfSession from "./listIOfSession";
import JoinBatch from "./JoinBatch";

const TrainingBatch = ({ id }) => {
    return (
        <div className="mt-4">
            <details className="w-full bg-white p-4 shadow rounded  group mx-auto transition-[max-height] duration-800 overflow-hidden">
                <summary
                    className="flex items-start outline-none cursor-pointer marker:text-transparent group-open:before:rotate-90  before:origin-center relative before:w-[18px] before:h-[18px] before:transition-transform before:duration-200 before:-left-1 before:top-2/4 before:-translate-y-2/4 before:absolute before:bg-no-repeat before:bg-[length:18px_18px] before:bg-center before:bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22h-6%20w-6%22%20fill%3D%22none%22%20viewBox%3D%220%200%2024%2024%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%3E%0A%20%20%3Cpath%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20d%3D%22M9%205l7%207-7%207%22%20%2F%3E%0A%3C%2Fsvg%3E')]"
                >
                    <div className="w-full ml-8">
                        <div className="w-full flex justify-between items-center">
                            <h4 className=" font-medium ">Batch {id}</h4>
                            <div className="flex justify-start items-center">
                                <IconWithChip className='w-24 h-8 bg-white shadow text-[#419a00] rounded-full text-sm py-1 px-2 mr-1'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
                                    </svg>
                                    English
                                </IconWithChip>
                                <IconWithChip className='w-24 h-8 bg-white shadow text-[#419a00] rounded-full text-sm py-1 px-2 mr-1'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                                    </svg>
                                    $ 4.3
                                </IconWithChip>
                                {/* <IconButton className='mr-3 w-24 px-2 h-8 bg-[#419a00] text-white shadow rounded-full text-sm py-1 px-2 mr-1 flex justify-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                                    </svg>

                                    Join
                                </IconButton> */}
                                <JoinBatch />
                            </div>
                        </div>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium</p>
                    </div>
                </summary>
                <hr className="my-2 scale-x-150" />
                <div className="py-4 -m-4 -mt-2 px-2 bg-gray-50">
                    <Tab.Group>
                        <div className="w-[300px]">
                            <Tablist list={['Session (10)', 'Students (30)']} />
                        </div>
                        <Tab.Panels>
                            <Tab.Panel> <ListOfSession /></Tab.Panel>
                            <Tab.Panel> <ListOfStudent /> </Tab.Panel>
                        </Tab.Panels>
                    </Tab.Group>
                </div>
            </details>
        </div>
    )
}

export default TrainingBatch;