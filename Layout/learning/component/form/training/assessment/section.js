import QuestionOfSection from "./question";

const AssessmentSection = ({ sItem, sIndex, handleSectionName, createQuestionForm, handleAllQuestionInfo }) => {

    return (
        <div className="my-2 p-2">
            <div className="mb-2 flex justify-between items-center">
                <div>
                    <label htmlFor="section" className="block mb-2 text-sm font-semibold text-gray-900">Section {sIndex + 1}</label>
                    <input type="text" name="section" id={sIndex} className="outline-gray-200 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        placeholder="section name" required="" />
                </div>
                <h6 className="block mb-2 text-sm text-gray-900 font-semibold">Section {sIndex + 1}</h6>
                <input onChange={(e) => {
                    if (e.target.value < 0) {
                        e.target.value = 1
                    } else {
                        createQuestionForm(e)
                    }
                }} type="number" name="totalQuestion" id={sIndex} className="w-[210px] outline-gray-200 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder={`Total Questions sec- ${sIndex + 1}`} required="" />
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