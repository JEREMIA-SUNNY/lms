import { useState } from "react"
import AssignTo from "./assignTo"
import TrainingCourseForm from './trainingCourseForm'

const CreateForm = () => {
    const [planPayload, setPlanPayload] = useState({ assignToCat: 'None' })

    const handleInput = (e) => {
        const { name, value } = e.target
        setPlanPayload({ ...planPayload, [name]: value })
    }

    return (
        <>
            <div className="flex grid grid-cols-3 gap-4 mt-2">
                <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-semibold text-gray-900">Plan Name</label>
                    <input type="name" onChange={handleInput} name="name" id="name" className="outline-gray-200 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        placeholder="Plan name" required="" />
                </div>
                <div>
                    <label htmlFor="mandatory" className="block mb-2 text-sm font-semibold text-gray-900">Mandatory</label>
                    <select onChange={handleInput} name='mandatory' className="outline-gray-200 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5">
                        <option value='Yes'>Yes</option>
                        <option value='No'>No</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="Duedate" className="block mb-2 text-sm font-semibold text-gray-900">Due date</label>
                    <div className="relative">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                        </div>
                        <input onChange={handleInput} name="startdate" type="datetime-local" id="startdate" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full pl-10 p-2.5" placeholder="Start date start" />
                    </div>
                </div>
            </div>
            <div className="flex gap-4 mt-2">
                <AssignTo planPayload={planPayload} handleInput={handleInput} />
            </div>
            <div className="flex gap-4 mt-2">
                <TrainingCourseForm planPayload={planPayload} handleInput={handleInput} />
            </div>

        </>
    )
}

export default CreateForm