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
            <div className="flex gap-4">
                <div className="w-1/4">
                    <label htmlFor="name" className="block mb-2 text-sm font-semibold text-gray-900">Plan Name</label>
                    <input type="name" onChange={handleInput} name="name" id="name" className="outline-gray-200 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        placeholder="course name" required="" />
                </div>
                <div className="w-3/4">
                    <label htmlFor="description" className="block mb-2 text-sm font-semibold text-gray-900">Description</label>
                    <input type="description" onChange={handleInput} name="description" id="description" className="outline-gray-200 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        placeholder="Description" required="" />
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