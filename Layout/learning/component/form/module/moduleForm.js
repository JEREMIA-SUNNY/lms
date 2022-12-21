import { useState } from "react";
import SelectInput from "../../../../../components/SelectInput";

const status = [
    { name: 'active', title: 'Active' },
    { name: 'inactive', title: 'In Active' },
]
const level = [
    { name: 'beginner', title: 'Beginner' },
    { name: 'intermediate', title: 'Intermediate' },
    { name: 'advance', title: 'Advance' },
]
const ModuleForm = ({ handleInput }) => {

    return (
        <div>
            <div className="mt-4 grid grid-cols-4 gap-4">
                <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-semibold text-gray-900">Course Name</label>
                    <input onChange={handleInput} type="name" name="name" id="name" className="outline-gray-200 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        placeholder="course name" required="" />
                </div>
                <div>
                    <label htmlFor="domain" className="block mb-2 text-sm font-semibold text-gray-900">Domain</label>
                    <input onChange={handleInput} type="text" name="domain" id="domain" className="outline-gray-200 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        placeholder="domain" required="" />
                </div>
                <div>
                    <label htmlFor="skill" className="block mb-2 text-sm font-semibold text-gray-900">Skill</label>
                    <input onChange={handleInput} type="text" name="skill" id="skill" className="outline-gray-200 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        placeholder="skill" required="" />
                </div>
                <div>
                    <label htmlFor="Published" className="block mb-2 text-sm font-semibold text-gray-900">Published by</label>
                    <input onChange={handleInput} type="text" name="Published" id="Published" className="outline-gray-200 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        placeholder="Published by" required="" />
                </div>
                <div>
                    <label htmlFor="Endorsed" className="block mb-2 text-sm font-semibold text-gray-900">Endorsed by</label>
                    <input onChange={handleInput} type="text" name="Endorsed" id="Endorsed" className="outline-gray-200 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        placeholder="Endorsed by" required="" />
                </div>
                <div>
                    <label htmlFor="module" className="block mb-2 text-sm font-semibold text-gray-900">Module</label>
                    <input onChange={handleInput} type="number" defaultValue={1} name="module" id="module" className="outline-gray-200 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        placeholder="1" required="" />
                </div>
                <div>
                    <label htmlFor="Status" className="block mb-2 text-sm font-semibold text-gray-900">Status</label>
                    <SelectInput onChange={handleInput} name='status' id='status' dropdowns={status} />
                </div>
                <div>
                    <label htmlFor="Level" className="block mb-2 text-sm font-semibold text-gray-900">Level</label>
                    <SelectInput onChange={handleInput} name='Level' id='Level' dropdowns={level} />
                </div>
            </div>
            <div className="mt-4">
                <label htmlFor="skill" className="w-full block mb-2 text-sm font-semibold text-gray-900">Description</label>
                <textarea onChange={handleInput} id="description" name="description" rows="3" className="outline-gray-200 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="description..." />
            </div>
        </div>
    )
}

export default ModuleForm;
