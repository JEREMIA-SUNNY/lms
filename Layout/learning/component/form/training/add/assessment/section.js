import QuestionOfSection from "./question";

const AssessmentSection = ({ sItem, sIndex, setListOfSection, listofSection, createQuestionForm, handleAllQuestionInfo }) => {

    const sectionName = (e) => {
        const { name, value } = e.target
        const copylist = listofSection
        copylist[sIndex] = { ...sItem, [name]: value }
        setListOfSection([...copylist])
    }
    
    return (
        <div className="my-2 p-2">
            <div className="mb-2 flex justify-between items-center">
                <div>
                    <input defaultValue={sItem?.section || ''} onChange={sectionName} type="text" name="section" id={sIndex} className="outline-gray-200 bg-gray-50 border border-gray-300 text-textSecondary sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        placeholder={`Section ${sIndex + 1} Name`} required="" />
                </div>
                <input onChange={(e) => {
                    if (e.target.value < 0) {
                        e.target.value = 1
                    } else {
                        createQuestionForm(e)
                    }
                }} type="number" name="totalQuestion" id={sIndex} className="w-[210px] outline-gray-200 bg-gray-50 border border-gray-300 text-textSecondary sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder={`# Questions Section ${sIndex + 1}`} required="" />
            </div>
            {
                sItem?.questions?.map((q, i) => {
                    return (
                        <QuestionOfSection key={i} ques={q}
                            qIndex={i}
                            sIndex={sIndex}
                            handleAllQuestionInfo={handleAllQuestionInfo} />
                    )
                })
            }
        </div>
    )
}

export default AssessmentSection;