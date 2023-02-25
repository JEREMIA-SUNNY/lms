import CustomMultipleSelect from "components/CustomMultilpleSelect";
import { useState } from "react";
import countrylist from 'assets/mokedata/country.json'
import AutoComplete from "components/AutoComplete";
import designationlist from 'assets/mokedata/designation.json'
// import ChipSelectOption from "components/ChipSelectOption";
import FilterButtonTab from "components/FilterButtonTab";

const JobDetailForm = (props) => {
    const { interviewPanel, setInterviewPanel, handleInput, businessUnitOrServiceLine, setBusinessUnitOrServiceLine, vendors, setVendors } = props
    const [country, setCountry] = useState({})

    return (
        <>
            <div className="mt-4 grid grid-cols-4 gap-4">
                <div>
                    <label htmlFor="title" className="block mb-2 text-sm font-semibold text-textSecondary">Job Title</label>
                    <input onChange={handleInput} type="text" title="title" id="title" className="outline-gray-200 bg-gray-50 border border-gray-300 text-textSecondary sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        placeholder="Job Title" required="" />
                </div>
                <div>
                    <label htmlFor="Level" className="block mb-2 text-sm font-semibold text-textSecondary">Level</label>
                    <select
                        name="Level"
                        id="Level"
                        onChange={handleInput} className="outline-gray-200 bg-gray-50 border border-gray-300 text-textSecondary text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5">
                        <option>Select ...</option>
                        <option value='Junior'>Junior</option>
                        <option value='Senior'>Senior</option>
                        <option value='Principal'>Principal</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="HireType" className="block mb-2 text-sm font-semibold text-textSecondary">Hire Type</label>
                    <select
                        name="HireType"
                        id="HireType"
                        onChange={handleInput} className="outline-gray-200 bg-gray-50 border border-gray-300 text-textSecondary text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5">
                        <option>Select ...</option>
                        <option value='Full time'>Full time</option>
                        <option value='Part time'>Part time</option>
                        <option value='Contract'>Contract</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="WorkMode" className="block mb-2 text-sm font-semibold text-textSecondary">Work Mode</label>
                    <select
                        name="WorkMode"
                        id="WorkMode"
                        onChange={handleInput} className="outline-gray-200 bg-gray-50 border border-gray-300 text-textSecondary text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5">
                        <option>Select ...</option>
                        <option value='Remote'>Remote</option>
                        <option value='Onsite'>Onsite</option>
                        <option value='Hybrid'>Hybrid</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="Department" className="block mb-2 text-sm font-semibold text-textSecondary">Department</label>
                    <input onChange={handleInput} type="text" title="Department" id="Department" className="outline-gray-200 bg-gray-50 border border-gray-300 text-textSecondary sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        placeholder="Department" required="" />
                </div>
                <div>
                    <label htmlFor="businessUnit" className="block mb-2 text-sm font-semibold text-textSecondary">Tag to</label>
                    <FilterButtonTab
                        tabs={['Business Unit', "Service Line"]}
                        setSelectedtab={setBusinessUnitOrServiceLine}
                        selectedTab={businessUnitOrServiceLine}
                    />
                </div>
                {businessUnitOrServiceLine === 'Business Unit'? <div>
                    <label htmlFor="BusinessUnit" className="block mb-2 text-sm font-semibold text-textSecondary">Business Unit</label>
                    <select
                        name="BusinessUnit"
                        id="BusinessUnit"
                        onChange={handleInput} className="outline-gray-200 bg-gray-50 border border-gray-300 text-textSecondary text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5">
                        <option>Select ...</option>
                        <option value='Manufacturing'>Manufacturing</option>
                        <option value='Banking'>Banking</option>
                        <option value='Retail'>Retail</option>
                        <option value='Automotive'>Automotive</option>
                    </select>
                </div> : <div>
                    <label htmlFor="ServiceLine" className="block mb-2 text-sm font-semibold text-textSecondary">Service Line</label>
                    <input onChange={handleInput} type="text" title="ServiceLine" id="ServiceLine" className="outline-gray-200 bg-gray-50 border border-gray-300 text-textSecondary sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        placeholder="Service Line" required="" />
                </div>}
                <div>
                    <label htmlFor="designation" className="block mb-2 text-sm font-semibold text-textSecondary">Designation</label>
                    <select
                        name="designation"
                        id="designation"
                        onChange={handleInput} className="outline-gray-200 bg-gray-50 border border-gray-300 text-textSecondary text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5">
                        <option>Select ...</option>
                        {
                            designationlist?.map(item => {
                                return (
                                    <option value={item?.name}>{item?.name}</option>
                                )
                            })
                        }
                    </select>
                </div>

                <div>
                    <label htmlFor="country" className="block mb-2 text-sm font-semibold text-textSecondary">Country</label>
                    <AutoComplete title={'country'} list={countrylist} keyname='country' selected={country} setSelected={setCountry} />
                </div>
                <div>
                    <label htmlFor="location" className="block mb-2 text-sm font-semibold text-textSecondary">Location</label>
                    <select
                        name="location"
                        id="location"
                        onChange={handleInput} className="outline-gray-200 bg-gray-50 border border-gray-300 text-textSecondary text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5">
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
                    <label htmlFor="numOfOpening" className="block mb-2 text-sm font-semibold text-textSecondary">No. of Positions</label>
                    <input onChange={handleInput} type="number" title="numOfOpening" id="numOfOpening" className="outline-gray-200 bg-gray-50 border border-gray-300 text-textSecondary sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        placeholder="Count" required="" />
                </div>
                <div>
                    <label htmlFor="hiringsource" className="block mb-2 text-sm font-semibold text-textSecondary">Hiring Source</label>
                    <select
                        name="hiringsource"
                        id="hiringsource"
                        onChange={handleInput} className="outline-gray-200 bg-gray-50 border border-gray-300 text-textSecondary text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5">
                        <option>Select ...</option>
                        <option value='campus'>Campus</option>
                        <option value='lateral'>Lateral</option>
                    </select>
                </div>


                <div>
                    <label htmlFor="minExperience" className="block mb-2 text-sm font-semibold text-textSecondary">Min Experience</label>
                    <input onChange={handleInput} type="number" title="minExperience" id="minExperience" className="outline-gray-200 bg-gray-50 border border-gray-300 text-textSecondary sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        placeholder="Min Experience in year" required="" />
                </div>
                <div>
                    <label htmlFor="maxExperience" className="block mb-2 text-sm font-semibold text-textSecondary">Max Experience</label>
                    <input onChange={handleInput} type="number" title="maxExperience" id="maxExperience" className="outline-gray-200 bg-gray-50 border border-gray-300 text-textSecondary sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        placeholder="Max Experience in year" required="" />
                </div>
                <div>
                    <label htmlFor="Recruitmentlead" className="block mb-2 text-sm font-semibold text-textSecondary">Recruitment lead </label>
                    <select
                        name="Recruitmentlead"
                        id="Recruitmentlead"
                        onChange={handleInput} className="outline-gray-200 bg-gray-50 border border-gray-300 text-textSecondary text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5">
                        <option>Select ...</option>
                        <option value='campus'>Campus</option>
                        <option value='lateral'>Lateral</option>
                    </select>
                </div>
            </div>
            <div className="grid gap-4 grid-cols-2 mt-3">
                <CustomMultipleSelect selecteditem={interviewPanel}
                    setSelected={setInterviewPanel}
                    title='Add interview panel'
                    placeholder='select upto 2 people from dropdown who will take the interveiw'
                    name='interviewPanel' />
                <CustomMultipleSelect selecteditem={vendors}
                    setSelected={setVendors}
                    title='Assign to Vendor'
                    placeholder='Vendor'
                    name='Vendor' />
            </div>
        </>
    )
}

export default JobDetailForm;