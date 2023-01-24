import CustoMultipleSelect from "components/CustomMultilpleSelect";
import { useState } from "react";
import countrylist from '@/assets/mokedata/country.json'
import AutoComplete from "components/AutoComplete";

const JobDetailForm = (props) => {
    const { skills, setSkills, Technologies, setTechnologies, handleInput } = props
    const [country, setCountry] = useState({})

    return (
        <>
            <div className="mt-4 grid grid-cols-4 gap-4">
                <div>
                    <label htmlFor="title" className="block mb-2 text-sm font-semibold text-gray-900">Job Title</label>
                    <input onChange={handleInput} type="text" title="title" id="title" className="outline-gray-200 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        placeholder="Job Title" required="" />
                </div>
                <div>
                    <label htmlFor="Level" className="block mb-2 text-sm font-semibold text-gray-900">Level</label>
                    <select
                        name="Level"
                        id="Level"
                        onChange={handleInput} className="outline-gray-200 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5">
                        <option>Select ...</option>
                        <option value='Junior'>Junior</option>
                        <option value='Senior'>Senior</option>
                        <option value='Principal'>Principal</option>
                    </select>
                </div>
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
                <div>
                    <label htmlFor="Department" className="block mb-2 text-sm font-semibold text-gray-900">Department</label>
                    <input onChange={handleInput} type="text" title="Department" id="Department" className="outline-gray-200 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        placeholder="Department" required="" />
                </div>
                <div>
                    <label htmlFor="ServiceLine" className="block mb-2 text-sm font-semibold text-gray-900">Service Line</label>
                    <input onChange={handleInput} type="text" title="ServiceLine" id="ServiceLine" className="outline-gray-200 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        placeholder="Service Line" required="" />
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
                    <label htmlFor="Experience" className="block mb-2 text-sm font-semibold text-gray-900">Min Experience</label>
                    <input onChange={handleInput} type="number" title="Experience" id="Experience" className="outline-gray-200 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        placeholder="Experience in year" required="" />
                </div>
                <div>
                    <label htmlFor="country" className="block mb-2 text-sm font-semibold text-gray-900">Country</label>
                    <AutoComplete title={'country'} list={countrylist} keyname='country' selected={country} setSelected={setCountry} />
                </div>
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

            </div>
            <div className="grid gap-4 grid-cols-2">
                <CustoMultipleSelect selecteditem={skills}
                    setSelected={setSkills}
                    title='Skills'
                    name='skill' />
                <CustoMultipleSelect selecteditem={Technologies}
                    setSelected={setTechnologies}
                    title='Technologies'
                    name='Technologies' />
            </div>
        </>
    )
}

export default JobDetailForm;