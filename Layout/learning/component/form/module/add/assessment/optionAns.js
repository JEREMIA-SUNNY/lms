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
        </div>
    )
}

export default OptionAndAnswer;