import PrimaryButton from "components/custom/Buttons/PrimaryButton";
import { useState } from "react";
import AddSklls from "./addSkills";

const AddJobForm = () => {
    const [skills, setSkills] = useState([])

    const handleInput = (e) => {
        // const { name, value } = e.target

    }

    return (
        <>
            <div className="mt-4 grid grid-cols-4 gap-4">
                <div>
                    <label htmlFor="title" className="block mb-2 text-sm font-semibold text-gray-900">Job Title</label>
                    <input onChange={handleInput} type="text" title="title" id="title" className="outline-gray-200 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        placeholder="Job Title" required="" />
                </div>
                <div>
                    <label htmlFor="jobCode" className="block mb-2 text-sm font-semibold text-gray-900">Job Code</label>
                    <input onChange={handleInput} type="text" title="jobCode" id="jobCode" className="outline-gray-200 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        placeholder="Job code" required="" />
                </div>
                <div>
                    <label htmlFor="jobGroup" className="block mb-2 text-sm font-semibold text-gray-900">Job Group</label>
                    <input onChange={handleInput} type="text" title="jobGroup" id="jobGroup" className="outline-gray-200 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        placeholder="Job Group" required="" />
                </div>
                <div>
                    <label htmlFor="Location" className="block mb-2 text-sm font-semibold text-gray-900">Location</label>
                    <input onChange={handleInput} type="text" title="Location" id="Location" className="outline-gray-200 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        placeholder="Location" required="" />
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
                    <label htmlFor="Technology" className="block mb-2 text-sm font-semibold text-gray-900">Technology</label>
                    <input onChange={handleInput} type="text" title="Technology" id="Technology" className="outline-gray-200 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        placeholder="Technology" required="" />
                </div>
                <div>
                    <label htmlFor="Experience" className="block mb-2 text-sm font-semibold text-gray-900">Experience</label>
                    <input onChange={handleInput} type="number" title="Experience" id="Experience" className="outline-gray-200 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        placeholder="Experience in year" required="" />
                </div>
                <div>
                    <label htmlFor="Experience" className="block mb-2 text-sm font-semibold text-gray-900">Experience</label>
                    <input onChange={handleInput} type="text" title="Experience" id="Experience" className="outline-gray-200 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        placeholder="Experience" required="" />
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

            </div>
            <div className="flex w-full justify-start items-center gap-3 mt-4">
                <div className="w-1/4">
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
                <div className="w-3/4">
                    <label htmlFor="JobSummary" className="block mb-2 text-sm font-semibold text-gray-900">Job Summary</label>
                    <input onChange={handleInput} type="text" title="JobSummary" id="JobSummary" className="outline-gray-200 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        placeholder="Job Summary" required="" />
                </div>
            </div>
            <AddSklls skills={skills} setSkills={setSkills} />

            <div className="mt-3">
                <label htmlFor="Responsibilities" className="block mb-2 text-sm font-semibold text-gray-900">Responsibilities</label>
                <textarea onChange={handleInput} id="Responsibilities"
                    name="Responsibilities" rows="4"
                    className="outline-gray-200 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Responsibilities..." />
            </div>
            <div className='flex justify-end fixed bottom-0 right-5'>
                <PrimaryButton className='rounded-lg'>
                    <span>Create</span>
                </PrimaryButton>
            </div>
        </>
    )
}

export default AddJobForm;