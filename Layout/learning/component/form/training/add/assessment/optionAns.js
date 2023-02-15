import { useState } from "react";



const OptionAndAnswer = ({ sIndex, handleAllQuestionInfo }) => {
    const [options, setOptions] = useState([])

    const handleOption = (e) => {
        const { name, value, id } = e.target
        let copyopt = options
        copyopt[Number(id) - 1] = { [name]: value }
        setOptions([...copyopt])
    }

    const save = () => {
        const e = { target: { id: '', value: options, name: 'options' } }
        handleAllQuestionInfo(e, sIndex)
    }


    return (
        <div className="ml-8 my-2 flex justify-start gap-2">
            <div className="w-3/4">
                <div className="my-1">
                    <input onChange={handleOption} type="text" name="option1" id="1" className="outline-gray-200 bg-gray-50 border border-gray-300 text-textSecondary sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        placeholder="Option 1" required="" />
                </div>
                <div className="my-1">
                    <input onChange={handleOption} type="text" name="option2" id="2" className="outline-gray-200 bg-gray-50 border border-gray-300 text-textSecondary sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        placeholder="Option 2" required="" />
                </div>
                <div className="my-1">
                    <input onChange={handleOption} type="text" name="option3" id="3" className="outline-gray-200 bg-gray-50 border border-gray-300 text-textSecondary sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        placeholder="Option 3" required="" />
                </div>
                <div className="my-1">
                    <input onChange={handleOption} type="text" name="option4" id="4" className="outline-gray-200 bg-gray-50 border border-gray-300 text-textSecondary sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        placeholder="Option 4" required="" />
                </div>
            </div>
            <div className="w-1/4">
                <div className="my-1">
                    <input onChange={handleOption} type="text" name="weightage1" id="1" className="outline-gray-200 bg-gray-50 border border-gray-300 text-textSecondary sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        placeholder="Weightage (%)" required="" />
                </div>
                <div className="my-1">
                    <input onChange={handleOption} type="text" name="weightage2" id="2" className="outline-gray-200 bg-gray-50 border border-gray-300 text-textSecondary sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        placeholder="Weightage (%)" required="" />
                </div>
                <div className="my-1">
                    <input onChange={handleOption} type="text" name="weightage3" id="3" className="outline-gray-200 bg-gray-50 border border-gray-300 text-textSecondary sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        placeholder="Weightage (%)" required="" />
                </div>
                <div className="my-1">
                    <input onChange={handleOption} type="text" name="weightage4" id="4" className="outline-gray-200 bg-gray-50 border border-gray-300 text-textSecondary sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        placeholder="Weightage (%)" required="" />
                </div>
            </div>
            {/* <div>
                <select onChange={(e) => { handleAllQuestionInfo(e, sIndex) }}
                    name='answer'
                    className="outline-gray-200 bg-gray-50 border border-gray-300 text-textSecondary text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5">
                    <option>Select ans....</option>
                    {options?.map((item, i) => {
                        return (
                            <option key={i}>{item}</option>
                        )
                    })}
                </select>
            </div> */}
            {/* <div>
                <button onClick={save} type="button" className="mr-2 py-2 px-3 text-white bg-[#419a00] border border-[#419a00] rounded-lg focus:ring-1 focus:outline-none focus:ring-green-300">
                    <span>Save</span>
                </button>
            </div> */}
        </div>
    )
}

export default OptionAndAnswer;