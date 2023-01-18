import PrimaryButton from "components/custom/Buttons/PrimaryButton";
import { useState } from "react";


const EditSklls = ({ skills, setSkills }) => {
    const [skill, setNewSkill] = useState('')

    const handleInput = (e) => {
        const { value } = e.target
        setNewSkill(value?.trim())
    }

    const rmSkill = (skill) => {
        setSkills(skills.filter((s) => s !== skill));
    }

    const addSkill = () => {
        setSkills([...skills, skill]);
    }

    return (
        <>
            <div className="mt-3 flex justify-between">
                <div className="w-[86%]">
                    <label htmlFor="Skills" className="block mb-2 text-sm font-semibold text-gray-900">Skills</label>
                    <input onChange={handleInput} type="text" title="skill" id="skill" className="outline-gray-200 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        placeholder="Skill ex:Adobe Creative Suite, JavaScript, SQL, Excel Product management, market research, data analysis, etc" required="" />
                </div>
                <div className="flex items-end">
                    <PrimaryButton className='rounded-lg h-10 mt-4 mb-0 w-24' onClick={addSkill}>
                        Add
                    </PrimaryButton>
                </div>
            </div>
            <div className="flex justify-start gap-3 mt-2 rounded-lg shadow-sm bg-gray-100">
                {
                    skills?.map((skill, i) => {
                        return (
                            <button
                                className='m-1 border border-green-600 bg-gray-100 rounded-lg px-2 text-green-600 flex items-center'
                                onClick={() => { rmSkill(skill) }}
                                key={i + skill}>
                                {skill}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        )
                    })
                }
            </div>

        </>
    )
}

export default EditSklls;