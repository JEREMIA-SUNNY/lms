
import { useMemo, useState } from 'react'
import skilltype from 'assets/mokedata/skill.json'

const Skillform = ({ handleInput, trainingInfo }) => {
    const [skill, setSkill] = useState([])

    useMemo(() => {
        const skills = skilltype?.skillTypes?.filter((item => item?.type === trainingInfo.skilltype))
        if (skills?.length) {
            setSkill(skills[0]['skills'])
        }
    }, [trainingInfo.skilltype])
    
    return (
        <>
            <div>
                <label htmlFor="skilltype" className="block mb-2 text-sm font-semibold text-textSecondary">Skill Type</label>
                <select onChange={handleInput} name='skilltype' className="outline-gray-200 bg-gray-50 border border-gray-300 text-textSecondary text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5">
                    {skilltype?.skillTypes?.map((item, i) => {
                        return (
                            <option key={i} value={item?.type}>{item?.type}</option>
                        )
                    })}
                </select>
            </div>
            <div>
                <label htmlFor="skillclass" className="block mb-2 text-sm font-semibold text-textSecondary">Skill Class</label>
                <select onChange={handleInput} name='skillClass' className="outline-gray-200 bg-gray-50 border border-gray-300 text-textSecondary text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5">
                    {skill?.map((item, i) => {
                        return (
                            <option key={i} value={item?.name}>{item?.name}</option>
                        )
                    })}
                </select>
            </div>
        </>

    )
}

export default Skillform;