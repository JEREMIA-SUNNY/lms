
import { Menu, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import countrylist from 'assets/mokedata/country.json'
import AutoComplete from "components/AutoComplete";
import CustoMultipleSelect from "components/CustomMultilpleSelect";
import PrimaryButton from 'components/custom/Buttons/PrimaryButton';

const FilterRecruitment = () => {
    const [activeFilter, setActiveFilter] = useState([])
    const [filters, setFilters] = useState({})
    const [country, setCountry] = useState({})
    const [skills, setSkills] = useState([])
    const [Technology, setTechnology] = useState([])

    const handleInput = (e) => {
        const { name, value } = e.target
        setFilters({ ...filters, [name]: value })
    }

    return (
        <div className="flex justify-end">
            <Menu as="div" className="mt-1">
                <Menu.Button className="text-[#419a00] shadow-lg bg-white focus:ring-1 focus:outline-none font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
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
                        <div className='rounded-lg bg-white shadow-lg px-4 py-1'>
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
                                {/* <div>
                                    <label htmlFor="country" className="block mb-2 text-sm font-semibold text-gray-900">Country</label>
                                    <AutoComplete title={'country'} list={countrylist} keyname='country' selected={country} setSelected={setCountry} />
                                </div> */}
                                <div>
                                    <label htmlFor="location" className="block mb-2 text-sm font-semibold text-gray-900">Location</label>
                                    <select
                                        name="location"
                                        id="location"
                                        onChange={handleInput} className="outline-gray-200 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5">
                                        <option>Select ...</option>
                                        {
                                            country?.location?.map((location) => {
                                                return (
                                                    <option key={location} value={location}>{location}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="Department" className="block mb-2 text-sm font-semibold text-gray-900">Department</label>
                                    <input onChange={handleInput} type="text" title="Department" id="Department" className="outline-gray-200 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                        placeholder="Department" required="" />
                                </div>
                                <div>
                                    <label htmlFor="ServiceLine" className="block mb-2 text-sm font-semibold text-gray-900">Service Line</label>
                                    <select
                                        name="ServiceLine"
                                        id="ServiceLine"
                                        onChange={handleInput} className="outline-gray-200 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5">
                                        <option>Select ...</option>
                                        <option value='Service Line'>Service Line</option>
                                        <option value='Service Line'>Service Line</option>
                                        <option value='Service Line'>Service Line</option>
                                        <option value='Service Line'>Service Line</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="BusinessUnit" className="block mb-2 text-sm font-semibold text-gray-900">Business Unit</label>
                                    <select
                                        name="BusinessUnit"
                                        id="BusinessUnit"
                                        onChange={handleInput} className="outline-gray-200 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5">
                                        <option>Select ...</option>
                                        <option value='Manufacturing'>Manufacturing</option>
                                        <option value='Banking'>Banking</option>
                                        <option value='Retail'>Retail</option>
                                        <option value='Automotive'>Automotive</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="qualification" className="block mb-2 text-sm font-semibold text-gray-900">Qualification</label>
                                    <select
                                        name="qualification"
                                        id="qualification"
                                        onChange={handleInput} className="outline-gray-200 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5">
                                        <option>Select ...</option>
                                        <option value="Bachelor of Computer Science (BCS)">Bachelor of Computer Science (BCS)/</option>
                                        <option value="Bachelor of Technology (B.Tech)">Bachelor of Technology (B.Tech)/</option>
                                        <option value="Bachelor of Business Administration (BBA)">Bachelor of Business Administration (BBA)/</option>
                                        <option value="Bachelor of Science (B.Sc)">Bachelor of Science (B.Sc)/</option>
                                        <option value="Bachelor of Arts (BA)">Bachelor of Arts (BA)/</option>
                                        <option value="Bachelor of Commerce (B.Com)">Bachelor of Commerce (B.Com)/</option>
                                        <option value="Bachelor of Education (B.Ed)">Bachelor of Education (B.Ed)/</option>
                                        <option value="Bachelor of Law (LLB)">Bachelor of Law (LLB)/</option>
                                        <option value="Bachelor of Medicine and Bachelor of Surgery (MBBS)">Bachelor of Medicine and Bachelor of Surgery (MBBS)/</option>
                                        <option value="Bachelor of Nursing (BN)">Bachelor of Nursing (BN)/</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="HiringSource" className="block mb-2 text-sm font-semibold text-gray-900">Hiring Source</label>
                                    <input onChange={handleInput} type="text" title="HiringSource" id="HiringSource" className="outline-gray-200 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                        placeholder="Hiring Source" required="" />
                                </div>
                                <div>
                                    <label htmlFor="minExperience" className="block mb-2 text-sm font-semibold text-gray-900">Min Experience</label>
                                    <input onChange={handleInput} type="number" title="minExperience" id="minExperience" className="outline-gray-200 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                        placeholder="Experience in year" required="" />
                                </div>
                                <div>
                                    <label htmlFor="maxExperience" className="block mb-2 text-sm font-semibold text-gray-900">Max Experience</label>
                                    <input onChange={handleInput} type="number" title="maxExperience" id="maxExperience" className="outline-gray-200 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                        placeholder="Experience in year" required="" />
                                </div>
                                <div>
                                    <label htmlFor="WorkMode" className="block mb-2 text-sm font-semibold text-gray-900">Work Mode</label>
                                    <select
                                        name="WorkMode"
                                        id="WorkMode"
                                        onChange={handleInput} className="outline-gray-200 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5">
                                        <option>Select ...</option>
                                        <option value='Remote'>Remote</option>
                                        <option value='Onsite'>Onsite</option>
                                        <option value='Hybrid'>Hybrid</option>
                                    </select>
                                </div>
                                <div className='grid gap-4 grid-cols-2'>
                                    <div>
                                        <label htmlFor="HireType" className="block mb-2 text-sm font-semibold text-gray-900">Hire Type</label>
                                        <select
                                            name="HireType"
                                            id="HireType"
                                            onChange={handleInput} className="outline-gray-200 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5">
                                            <option>Select ...</option>
                                            <option value='Full time'>Full time</option>
                                            <option value='Part time'>Part time</option>
                                            <option value='Contract'>Contract</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="Status" className="block mb-2 text-sm font-semibold text-gray-900">Status</label>
                                        <select
                                            name="Status"
                                            id="Status"
                                            onChange={handleInput} className="outline-gray-200 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5">
                                            <option>Select ...</option>
                                            <option value='Open'>Open</option>
                                            <option value='Close'>Close</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="grid gap-4 grid-cols-2 mt-3">
                                <CustoMultipleSelect selecteditem={skills}
                                    setSelected={setSkills}
                                    title='Skills'
                                    name='skill' />
                                <CustoMultipleSelect selecteditem={Technology}
                                    setSelected={setTechnology}
                                    title='Technologies'
                                    name='Technologies' />
                            </div>
                            <div className='flex justify-end'>
                                <div className='mt-2 flex justify-start items-center'>
                                    <button onClick={() => { setActiveFilter([]) }} type="button" className="h-10 mr-2 py-2 px-3 text-[#419a00] border border-[#419a00] rounded-lg focus:ring-1 focus:outline-none focus:ring-green-600">
                                        <span>Clear</span>
                                    </button>
                                    <Menu.Item>
                                        <PrimaryButton className='rounded-lg'>
                                            Apply
                                        </PrimaryButton>
                                    </Menu.Item>
                                </div>
                            </div>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    )
}

export default FilterRecruitment
